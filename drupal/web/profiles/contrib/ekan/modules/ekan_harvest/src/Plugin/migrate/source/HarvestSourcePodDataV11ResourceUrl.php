<?php

namespace Drupal\ekan_harvest\Plugin\migrate\source;

use Drupal\Component\Utility\UrlHelper;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Drupal\ekan_core\Entity\EkanResourceEntity;
use Drupal\migrate\Plugin\MigrationInterface;
use Drupal\migrate\Row;
use Drupal\ekan_core\File\MimeType\HttpMimeTypeGuesser;
use GuzzleHttp\Client;
use Symfony\Component\Mime\MimeTypes;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Source plugin for retrieving data via URLs. Contains support for previewing.
 *
 * Available configuration keys:
 * - import_files: (optional) Downloads the resource files and stores locally.
 *
 * @MigrateSource(
 *   id = "pod_data_v11_resource_from_datasets_url"
 * )
 */
class HarvestSourcePodDataV11ResourceUrl extends HarvestSourceUrl implements ContainerFactoryPluginInterface {

  /**
   * The Guzzle HTTP Client service.
   *
   * @var \GuzzleHttp\Client
   */
  protected $httpClient;

  /**
   * The Mime Type Guesser service.
   *
   * @var \Drupal\ekan_core\File\MimeType\HttpMimeTypeGuesser
   */
  protected $mimeTypeGuesser;

  /**
   * Constructs a pod_data_v11_resource_from_datasets_url process plugin.
   *
   * @param array $configuration
   *   A configuration array containing information about the plugin instance.
   * @param string $plugin_id
   *   The plugin_id for the plugin instance.
   * @param mixed $plugin_definition
   *   The plugin implementation definition.
   * @param \Drupal\migrate\Plugin\MigrationInterface $migration
   *   The migration.
   * @param \GuzzleHttp\Client $http_client
   *   The http client to do http requests with.
   * @param \Drupal\ekan_core\File\MimeType\HttpMimeTypeGuesser $mime_type_guesser
   *   Helper service for guessing mime types.
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, MigrationInterface $migration, Client $http_client, HttpMimeTypeGuesser $mime_type_guesser) {
    parent::__construct($configuration, $plugin_id, $plugin_definition, $migration);
    $this->httpClient = $http_client;
    $this->mimeTypeGuesser = $mime_type_guesser;
    $this->mimeTypeGuesser->setHttpClient($this->httpClient);
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition, MigrationInterface $migration = NULL, Client $http_client = NULL, HttpMimeTypeGuesser $mime_type_guesser = NULL) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $migration,
      $container->get('http_client'),
      $container->get('file.mime_type.guesser.http')
    );
  }

  /**
   * {@inheritDoc}
   */
  public function prepareRow(Row $row) {
    $this->prepareResourceData($row);
    return parent::prepareRow($row);
  }

  /**
   * Helper function to prepare the row specifically for the pod data v11.
   */
  protected function prepareResourceData(Row $row) {
    $html_extensions = ['html', 'shtml', 'htm', 'rhtml', 'phtml', 'pht',
      'php', 'phps', 'php3', 'php3p', 'php4',
    ];
    $downloadable_extensions = explode(' ', EkanResourceEntity::DEFAULT_UPLOAD_SETTINGS['file_extensions']);

    $uri = $row->getSourceProperty('downloadURL');
    // Fallback to accessURL if downloadURL not available.
    if (empty($uri)) {
      $uri = $row->getSourceProperty('accessURL');
    }
    if (!empty($uri)) {
      $uri_parse_scheme = parse_url($uri, PHP_URL_SCHEME);

      if (!$uri_parse_scheme) {
        $uri = "http://" . $uri;
        $uri_parse_scheme = "http://";
      }

      if (preg_match("@^https?@i", $uri_parse_scheme)) {

        $mime_types = new MimeTypes();

        // This will be false if the uri has no period(.).
        $filename = $this->mimeTypeGuesser->parseFileNameFromUrl($uri);
        if ($filename) {
          $parts = pathinfo($filename);
          $extension = $parts['extension'];
        }

        $upload_file_option = FALSE;
        $link_api_uri_file_option = FALSE;
        if (UrlHelper::isExternal($uri) && (!$filename || in_array($extension, $html_extensions) || strlen($uri) > 255)) {
          // Dynamic looking web resources, use the link_api 'link' field.
          $row->setSourceProperty('_link_api_uri', $uri);
          $link_api_uri_file_option = TRUE;
        }
        elseif (UrlHelper::isExternal($uri) && in_array($extension, $downloadable_extensions) && $this->configuration['import_files']) {
          // Downloadable looking assets. Download and store in the upload
          // 'file' field.
          try {
            $response = $this->httpClient->request('HEAD', $uri);
            // We're ensuring here that the mimeTypeGuesser won't try to do
            // a full GET request later.
            if ($response->hasHeader('Content-Length') && $response->hasHeader('Content-Type')) {
              $size = $response->getHeader('Content-Length')[0];
              // Don't suggest to the migrate processing to download anything
              // bigger than 50 MB.
              if ($size < (50 * 1024 * 1024)) {
                $mime_type = $this->mimeTypeGuesser->guessMimeType($uri);
                if ($mime_type && $extensions = $mime_types->getExtensions($mime_type)) {
                  $extension = reset($extensions);
                }
                $row->setSourceProperty('_upload', $uri);
                $row->setSourceProperty('_format', $extension);
                $upload_file_option = TRUE;
              }
            }
          }
          catch (\Exception $exception) {
            // Do nothing. If the file couldn't be fetched it will fall
            // back to loading the reference into the link_remote_file field.
          }
        }

        if (!$link_api_uri_file_option && !$upload_file_option && $filename) {
          // Fall back to the link_remote_file 'file' field.
          $row->setSourceProperty('_link_remote_file', $uri);
          $row->setSourceProperty('_format', $extension);
        }
      }
    }
  }

}

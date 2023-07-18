<?php

namespace Drupal\ekan_harvest\Plugin\migrate\source;

use Drupal\Core\Url;
use Drupal\migrate\Row;
use Drupal\migrate_plus\Plugin\migrate\source\Url as MigrateSourceUrl;
use GuzzleHttp\Client;
use Symfony\Component\Mime\MimeTypes;

/**
 * Source plugin for retrieving data via URLs. Contains support for previewing.
 *
 * @MigrateSource(
 *   id = "harvest_source_url"
 * )
 */
class HarvestSourceUrl extends MigrateSourceUrl implements HarvestSourceUrlInterface {

  /**
   * {@inheritdoc}
   */
  public function previewRows() {
    $rows = [];
    foreach ($this->getIterator() as $value) {
      $row_data = $value + $this->configuration;
      $rows[] = new Row($row_data, $this->getIds());
    }
    return $rows;
  }

  /**
   * {@inheritdoc}
   */
  public function next() {
    $this->currentSourceIds = NULL;
    $this->currentRow = NULL;

    // In order to find the next row we want to process, we ask the source
    // plugin for the next possible row.
    while (!isset($this->currentRow) && $this->getIterator()->valid()) {
      $row_data = $this->getIterator()->current() + $this->configuration;
      $this->fetchNextRow();
      $row = new Row($row_data, $this->getIds());

      // Populate the source key for this row.
      $this->currentSourceIds = $row->getSourceIdValues();

      // Pick up the existing map row, if any, unless fetchNextRow() did it.
      if (!$this->mapRowAdded && ($id_map = $this->idMap->getRowBySource($this->currentSourceIds))) {
        $row->setIdMap($id_map);
      }

      // Preparing the row gives source plugins the chance to skip.
      if ($this->prepareRow($row) === FALSE) {
        continue;
      }

      // Check whether the row needs processing.
      // 1. This row has not been imported yet.
      // 2. Explicitly set to update.
      // 3. The row is newer than the current highwater mark.
      // 4. If no such property exists then try by checking the hash of the row.
      if (!$row->getIdMap() || $row->needsUpdate() || $this->aboveHighwater($row) || $this->rowChanged($row)) {
        $this->currentRow = $row->freezeSource();
      }

      if ($this->getHighWaterProperty()) {
        // See https://www.drupal.org/project/drupal/issues/3036368
        // Clear any previous messages for this row before potentially adding
        // new ones.
        if (!empty($this->currentSourceIds)) {
          $this->idMap->delete($this->currentSourceIds, TRUE);
        }

        $this->saveHighWater($row->getSourceProperty($this->highWaterProperty['name']));
      }
    }
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
    if (isset($this->configuration['data_parser_resource_uri_attribute'])) {
      $uri = $row->getSourceProperty($this->configuration['data_parser_resource_uri_attribute']);
      if (!empty($uri)) {
        $uri_parse_scheme = parse_url($uri, PHP_URL_SCHEME);

        if (!$uri_parse_scheme) {
          $uri = "http://" . $uri;
          $uri_parse_scheme = "http://";
        }

        // Throws exception if invalid.
        Url::fromUri($uri);

        if (preg_match("@^https?@i", $uri_parse_scheme)) {
          $client = new Client([
            'timeout' => 2,
            'allow_redirects' => TRUE,
          ]);

          /** @var \Drupal\ekan_core\File\MimeType\HttpMimeTypeGuesser $mime_type_guesser */
          $mime_type_guesser = \Drupal::service('file.mime_type.guesser.http');
          $mime_type_guesser->setHttpClient($client);

          $mime_types = new MimeTypes();

          $filename = $mime_type_guesser->parseFileNameFromUrl($uri);

          $html_extensions = ['html', 'shtml', 'htm', 'rhtml', 'phtml', 'pht',
            'php', 'phps', 'php3', 'php3p', 'php4',
          ];
          $parts = pathinfo($filename);
          $extension = $parts['extension'];

          if (in_array($extension, $html_extensions) || strlen($uri) > 255) {
            $row->setSourceProperty('_link_api_uri', $uri);
            $row->setSourceProperty('_format', 'html');
          }
          else {
            $mime_type = $mime_type_guesser->guessMimeType($uri);
            if ($mime_type && $extensions = $mime_types->getExtensions($mime_type)) {
              $extension = reset($extensions);
            }
            $row->setSourceProperty('_upload', $uri);
            $row->setSourceProperty('_format', $extension);
          }
        }
      }
    }
  }

}

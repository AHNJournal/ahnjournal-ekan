<?php

namespace Drupal\ekan_harvest\Plugin\migrate\process;

use Drupal\Core\File\FileSystemInterface;
use Drupal\ekan_core\Entity\EkanResourceEntity;
use Drupal\migrate\MigrateException;
use Drupal\migrate\Row;
use Drupal\migrate_plus\Plugin\migrate\process\EntityGenerate;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\migrate\Plugin\MigrationInterface;
use Drupal\migrate\MigrateExecutableInterface;

/**
 * This plugin generates File entities within the process plugin.
 *
 * @MigrateProcessPlugin(
 *   id = "ekan_file_generate"
 * )
 *
 * @see EntityLookup
 *
 * All the configuration from the lookup plugin applies here. In its most
 * simple form, this plugin needs no configuration. If there are fields on the
 * generated entity that are required or need some value, their values can be
 * provided via values and/or default_values configuration options.
 *
 * Example usage with values and default_values configuration:
 * @code
 * destination:
 *   plugin: 'entity:node'
 * process:
 *   type:
 *     plugin: default_value
 *     default_value: page
 *   foo: bar
 *   field_tags:
 *     plugin: entity_generate
 *     source: tags
 *     default_values:
 *       description: Default description
 *     values:
 *       field_long_description: some_source_field
 *       field_foo: '@foo'
 * @endcode
 */
class FileEntityGenerate extends EntityGenerate {

  /**
   * The file system service.
   *
   * @var \Drupal\Core\File\FileSystemInterface
   */
  protected $fileSystem;

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
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $pluginId, $pluginDefinition, MigrationInterface $migration = NULL) {
    $instance = parent::create($container, $configuration, $pluginId, $pluginDefinition, $migration);
    $instance->processPluginManager = $container->get('plugin.manager.migrate.process');
    $instance->fileSystem = $container->get('file_system');
    $instance->httpClient = $container->get('http_client');
    $instance->mimeTypeGuesser = $container->get('file.mime_type.guesser.http');
    return $instance;
  }

  /**
   * {@inheritdoc}
   */
  public function transform($value, MigrateExecutableInterface $migrateExecutable, Row $row, $destinationProperty) {
    $this->row = $row;
    $this->migrateExecutable = $migrateExecutable;

    // If the source data is an empty array, return the same.
    if (gettype($value) === 'array' && count($value) === 0) {
      return [];
    }

    // In case of subfields ('field_reference/target_id'), extract the field
    // name only.
    $parts = explode('/', $destinationProperty);
    $destinationProperty = reset($parts);
    $this->determineLookupProperties($destinationProperty);

    $this->destinationProperty = $this->configuration['destination_field'] ?? NULL;

    $dataset_id = $row->get('dataset_id');
    return $this->generateEntity($value, $dataset_id);
  }

  /**
   * Generates an entity for a given value.
   *
   * @param string $value
   *   Value to use in creation of the entity.
   * @param string $dataset_id
   *   Dataset id associated with the file entity.
   *
   * @return int|string|null
   *   The entity id of the generated entity.
   */
  protected function generateEntity($value, $dataset_id = NULL) {
    if (!empty($value)) {

      $filename = $this->mimeTypeGuesser->parseFileNameFromUrl($value);

      // Bail out if it doesn't look like a downloadable file.
      // i.e. no period(.).
      if (!$filename) {
        return;
      }

      // Public or private as configured on the resource settings config.
      $resource_settings = \Drupal::config('ekan_core.resource_settings') ?: EkanResourceEntity::DEFAULT_UPLOAD_SETTINGS;
      $uri_scheme = $resource_settings->get('upload')['uri_scheme'];
      $destination = $uri_scheme . '://' . $dataset_id . '/' . $filename;

      // Modify the destination filename if necessary.
      $final_destination = $this->fileSystem->getDestinationFilename($destination, $this->configuration['file_exists'] ?? FileSystemInterface::EXISTS_REPLACE);

      // Reuse if file exists.
      if (!$final_destination) {
        $final_destination = $destination;
      }
      else {
        // Try opening the file first, to avoid calling prepareDirectory()
        // unnecessarily. We're suppressing fopen() errors because we
        // want to try to prepare the directory before we give up and fail.
        try {
          $destination_stream = @fopen($final_destination, 'w');
          if (!$destination_stream) {
            // If fopen didn't work, make sure there's a writable
            // directory in place.
            $dir = $this->fileSystem->dirname($final_destination);
            if (!$this->fileSystem->prepareDirectory($dir, FileSystemInterface:: CREATE_DIRECTORY | FileSystemInterface::MODIFY_PERMISSIONS)) {
              throw new MigrateException("Could not create or write to directory '$dir'");
            }
            // Let's try that fopen again.
            $destination_stream = @fopen($final_destination, 'w');
            if (!$destination_stream) {
              throw new MigrateException("Could not write to file '$final_destination'");
            }
          }

          // Stream the request body directly to the final destination stream.
          $this->configuration['guzzle_options']['sink'] = $destination_stream;

          // Make the request. Guzzle throws an exception for anything but 200.
          $this->httpClient->get($value, $this->configuration['guzzle_options']);
        }
        catch (\Exception $e) {
          throw new MigrateException("{$e->getMessage()} ($value)");
        }
      }

      $entity = $this->entityTypeManager
        ->getStorage($this->lookupEntityType)
        ->create($this->entity($final_destination));
      $entity->save();

      return $entity->id();
    }
  }

}

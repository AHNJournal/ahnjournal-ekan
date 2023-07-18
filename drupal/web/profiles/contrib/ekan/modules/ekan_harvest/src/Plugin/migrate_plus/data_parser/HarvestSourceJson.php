<?php

namespace Drupal\ekan_harvest\Plugin\migrate_plus\data_parser;

use Drupal\Component\Serialization\Json as JsonSerializer;
use Drupal\Core\File\FileSystemInterface;
use Drupal\Core\Site\Settings;
use Drupal\ekan_harvest\Entity\EkanHarvestSource;
use Drupal\migrate_plus\Plugin\migrate_plus\data_parser\Json;

/**
 * Obtain JSON data for migration.
 *
 * @DataParser(
 *   id = "harvest_source_json",
 *   title = @Translation("Harvest Source JSON")
 * )
 */
class HarvestSourceJson extends Json {

  /**
   * The default location to store retrieved json data.
   *
   * @var string
   */
  protected $cacheFolder = 'temporary://harvest_cache';

  /**
   * Harvest Source Entity for this migration.
   *
   * @var \Drupal\ekan_harvest\Entity\EkanHarvestSource
   */
  protected $harvestSource;

  /**
   * File system service.
   *
   * @var \Drupal\Core\File\FileSystemInterface
   */
  protected $fileSystem;

  /**
   * {@inheritDoc}
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->harvestSource = EkanHarvestSource::load($this->configuration['harvest_source_id']);
    $this->fileSystem = \Drupal::service('file_system');
  }

  /**
   * {@inheritDoc}
   */
  protected function getSourceData($url) {

    $this->fileSystem->prepareDirectory($this->cacheFolder, FileSystemInterface::CREATE_DIRECTORY | FileSystemInterface::MODIFY_PERMISSIONS);
    $cid = $this->getCacheCid($url);
    $cache = \Drupal::cache()->get($cid);
    if ($cache && file_exists($cache->data)) {
      $local_filename = $cache->data;
    }
    else {
      $response = $this->getDataFetcherPlugin()->getResponseContent($url);
      $local_filename = $this->cacheFolder . '/' . $cid . '.data.json';
      $this->cacheResults($response, $local_filename, $cid);
    }

    $datasets = parent::getSourceData($local_filename);
    $this->doFilters($datasets, $this->configuration['harvest_filters']);
    $this->doExcludes($datasets, $this->configuration['harvest_excludes']);
    $this->doOverrides($datasets, $this->configuration['harvest_overrides']);
    $this->doDefaults($datasets, $this->configuration['harvest_defaults']);

    return $datasets;
  }

  /**
   * Helper to cache the data on the file system.
   */
  public function cacheResults($data, $filename, $cid) {
    if (!is_string($data)) {
      $data = JsonSerializer::encode($data);
    }
    $this->fileSystem->saveData($data, $filename, TRUE);
    // $harvest_source->getCacheTags();
    $tags = [];
    // Default 12 hours.
    $expiry = time() + Settings::get('harvest_source_cache_lifetime', 60 * 60 * 12);
    \Drupal::cache()->set($cid, $filename, $expiry, $tags);
  }

  /**
   * Get the cache id for this plugin.
   */
  public function getCacheCid($url = NULL) {
    if ($url) {
      return parse_url($url, PHP_URL_HOST) . '.' . md5($url);
    }
    else {
      return 'harvest_source_cache_file:' . $this->harvestSource->id();
    }
  }

  /**
   * Do the filtering as configured in the EkanHarvesterSource entity.
   */
  public function doFilters(&$datasets, $filters = []) {

    if (empty($filters)) {
      return NULL;
    }

    $datasets = array_filter($datasets, function ($dataset) use ($filters) {
      foreach ($filters as $filter) {
        $value = (array) $this->getNestedValue($dataset, $filter['path']);
        if (empty($value)) {
          return FALSE;
        }

        // If there is an exact match.
        if (count(array_intersect((array) $filter['value'], $value)) > 0) {
          return TRUE;
        }

        // Try a regex match.
        if (@preg_grep($filter['value'], $value)) {
          return TRUE;
        }
      }
      return FALSE;
    });
  }

  /**
   * Do the exclusions as configured in the EkanHarvesterSource entity.
   */
  public function doExcludes(&$datasets, $excludes = []) {

    if (empty($excludes)) {
      return NULL;
    }

    $datasets = array_filter($datasets, function ($dataset) use ($excludes) {
      foreach ($excludes as $exclude) {
        $value = (array) $this->getNestedValue($dataset, $exclude['path']);
        if (empty($value)) {
          return TRUE;
        }

        // If there is an exact match.
        if (count(array_intersect((array) $exclude['value'], $value)) > 0) {
          return FALSE;
        }

        // Try a regex match.
        if (@preg_grep($exclude['value'], $value)) {
          return FALSE;
        }
      }
      return TRUE;
    });
  }

  /**
   * Set the overrides as configured in the EkanHarvesterSource entity.
   */
  public function doOverrides(&$datasets, $overrides = []) {

    if (empty($overrides)) {
      return NULL;
    }

    $datasets = array_map(function ($dataset) use ($overrides) {
      foreach ($overrides as $override) {
        if (!empty($override['path']) && !empty($override['value'])) {
          $this->setNestedValue($dataset, $override['path'], $override['value'], TRUE);
        }
      }

      return $dataset;
    }, $datasets);
  }

  /**
   * Set the default values as configured in the EkanHarvesterSource entity.
   */
  public function doDefaults(&$datasets, $defaults = []) {
    if (empty($defaults)) {
      return NULL;
    }

    $datasets = array_map(function ($dataset) use ($defaults) {
      foreach ($defaults as $default) {
        if (!empty($default['path']) && !empty($default['value'])) {
          $this->setNestedValue($dataset, $default['path'], $default['value'], FALSE);
        }
      }

      return $dataset;
    }, $datasets);
  }

  /**
   * Get a nested value from an array.
   *
   * @param array $obj
   *   Array.
   * @param string $path
   *   Path to the value (path.to.the.0.value).
   *
   * @return mixed
   *   Modified array
   */
  public function getNestedValue(array $obj, $path) {
    $keys = explode('.', $path);
    $value = $obj;

    foreach ($keys as $key) {
      if (isset($value[$key])) {
        $value = $value[$key];
      }
      else {
        return NULL;
      }
    }

    if (is_array($value)) {
      return array_map('trim', $value);
    }

    return trim($value);
  }

  /**
   * Set a nested value inside an array (Override).
   *
   * @param array &$obj
   *   Original array.
   * @param string $path
   *   Path to the value (path.to.the.0.value).
   * @param object $value
   *   Value to set.
   * @param bool $override
   *   If should or shouldn't override an existing value.
   *
   * @return bool
   *   Return TRUE if the value was updated.
   */
  public function setNestedValue(array &$obj, $path, $value, $override = FALSE) {
    $updated = FALSE;
    $keys = explode('.', $path);
    $branch = &$obj;

    foreach ($keys as $key) {
      if (isset($branch[$key])) {
        $branch = &$branch[$key];
      }
      else {
        $branch[$key] = [];
        $branch = &$branch[$key];
      }
    }

    // Update the obj if $override is set or the branch is empty.
    if ($override || empty($branch)) {
      $branch = $value;
      $updated = TRUE;
    }

    return $updated;
  }

}

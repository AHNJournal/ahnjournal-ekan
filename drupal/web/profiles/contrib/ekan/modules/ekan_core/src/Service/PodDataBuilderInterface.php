<?php

namespace Drupal\ekan_core\Service;

use Drupal\ekan_core\Entity\EkanDatasetEntity;

/**
 * Interface for building data api output in different formats.
 */
interface PodDataBuilderInterface {

  /**
   * Get the location of the cached data.
   *
   * Get the cached generated file path or null if something went wrong.
   *
   * @return null|string
   *   The file path to the data file.
   */
  public function getCachedPath();

  /**
   * Check if the cache is stale.
   *
   * @return bool
   *   TRUE if the cache is stale.
   */
  public function isCacheStale();

  /**
   * Warm the cached data.
   *
   * @return string
   *   The filename of the generated file.
   */
  public function warmCache();

  /**
   * Gets the filetype for this data.
   *
   * @return string
   *   The filetype e.g. json
   */
  public function getFileType();

  /**
   * The filename prefix for the cached file.
   *
   * @return string
   *   e.g. data_.
   */
  public function getFilenamePrefix();

  /**
   * The folder to store the cached data.
   *
   * @return string
   *   e.g. public://my_cache.
   */
  public function getCacheFolder();

  /**
   * Build the structured data before returning.
   *
   * @return string
   *   The encoded result body.
   */
  public function build();

  /**
   * Build the full data structure ready for serialization.
   *
   * @return array
   *   The array of all the datasets.
   */
  public function buildDatasets();

  /**
   * Build the distributions section of the dataset item.
   *
   * @param \Drupal\ekan_core\Entity\EkanDatasetEntity $dataset
   *   The dataset to base this list on.
   *
   * @return array
   *   The array of resources within the dataset.
   */
  public function buildDistributions(EkanDatasetEntity $dataset);

  /**
   * Sets up cachable metadata for this controller.
   *
   * @return \Drupal\Core\Cache\CacheableMetadata
   *   Cacheable metadata which applies to assets in this controller.
   */
  public function cacheableMetadata();

}

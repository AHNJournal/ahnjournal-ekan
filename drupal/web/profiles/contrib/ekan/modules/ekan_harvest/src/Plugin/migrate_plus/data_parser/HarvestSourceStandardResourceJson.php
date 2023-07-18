<?php

namespace Drupal\ekan_harvest\Plugin\migrate_plus\data_parser;

/**
 * Obtain JSON data for resources out of datasets.
 *
 * @DataParser(
 *   id = "standard_resource_from_datasets_json",
 *   title = @Translation("Pod Data v11 Resource from Dataset JSON")
 * )
 */
class HarvestSourceStandardResourceJson extends HarvestSourceJson {

  /**
   * {@inheritDoc}
   */
  protected function getSourceData($url) {
    $datasets = parent::getSourceData($url);
    $resources = [];
    foreach ($datasets as $dataset) {
      if (isset($dataset['resources'])) {
        foreach ($dataset['resources'] as $distribution) {
          $distribution['dataset_id'] = $dataset['id'];
          $resources[] = $distribution;
        }
      }
    }
    return $resources;
  }

}

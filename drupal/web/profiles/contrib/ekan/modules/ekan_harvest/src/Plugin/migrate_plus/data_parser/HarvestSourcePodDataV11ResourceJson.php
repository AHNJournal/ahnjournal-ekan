<?php

namespace Drupal\ekan_harvest\Plugin\migrate_plus\data_parser;

/**
 * Obtain JSON data for resources out of datasets.
 *
 * @DataParser(
 *   id = "pod_data_v11_resource_from_datasets_json",
 *   title = @Translation("Pod Data v11 Resource from Dataset JSON")
 * )
 */
class HarvestSourcePodDataV11ResourceJson extends HarvestSourceJson {

  /**
   * {@inheritDoc}
   */
  protected function getSourceData($url) {
    $datasets = parent::getSourceData($url);
    $resources = [];
    foreach ($datasets as $dataset) {
      if (isset($dataset['distribution'])) {
        foreach ($dataset['distribution'] as $distribution) {
          $distribution['dataset_id'] = $dataset['identifier'];
          $resources[] = $distribution;
        }
      }
    }
    return $resources;
  }

}

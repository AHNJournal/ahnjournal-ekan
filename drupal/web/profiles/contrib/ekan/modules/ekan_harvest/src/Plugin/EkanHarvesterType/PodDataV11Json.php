<?php

namespace Drupal\ekan_harvest\Plugin\EkanHarvesterType;

/**
 * A Harvester to harvest POD v1.1 JSON data.
 *
 * @EkanHarvesterType(
 *   id = "pod_data_v11_json",
 *   label = @Translation("Project Open Data v1.1 JSON")
 * )
 */
class PodDataV11Json extends EkanHarvesterTypeBase {

  /**
   * {@inheritDoc}
   */
  public function getMigrationConfigFiles() {
    return [
      __DIR__ . '/migration_config/pod_data_v11_json_datasets.yml',
      __DIR__ . '/migration_config/pod_data_v11_json_resources.yml',
    ];
  }

}

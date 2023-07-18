<?php

namespace Drupal\ekan_harvest\Plugin\EkanHarvesterType;

/**
 * A Harvester to harvest POD v1.1 JSON data.
 *
 * Uses an alternative migration definition yml file to uses FileEntityGenerate
 * to download resources files so they can be stored in the local filesystem.
 *
 * @EkanHarvesterType(
 *   id = "pod_data_v11_json_import_files",
 *   label = @Translation("Project Open Data v1.1 JSON - Import Resource Files")
 * )
 */
class PodDataV11JsonImportFiles extends EkanHarvesterTypeBase {

  /**
   * {@inheritDoc}
   */
  public function getMigrationConfigFiles() {
    return [
      __DIR__ . '/migration_config/pod_data_v11_json_datasets.yml',
      __DIR__ . '/migration_config/pod_data_v11_json_resources_import_files.yml',
    ];
  }

}

<?php

namespace Drupal\ekan_harvest\Commands;

use Drupal\migrate_tools\Commands\MigrateToolsCommands;

/**
 * Drush commands for doing ekan harvest migrations.
 */
class EkanHarvestCommands extends MigrateToolsCommands {

  /**
   * Perform one or more migration processes.
   *
   * @param string $harvest_source_machine_names
   *   ID of migration(s) to import. Delimit multiple using commas.
   *   (Optional - Leave blank for All)
   * @param array $options
   *   Additional options to pass to the command similar drush migrate-import.
   *   (Optional)
   *
   * @command ekan:harvest
   *
   * @default $options []
   *
   * @usage ekan:harvest
   *   Harvest using all harvest sources
   * @usage ekan:harvest source_machine_name
   *   Harvest a specific harvest source
   *
   * @validate-module-enabled migrate_tools
   */
  public function harvest(string $harvest_source_machine_names = NULL, array $options = NULL) {

    $harvest_source_storage = \Drupal::entityTypeManager()->getStorage('harvest_source');

    $conditions = ['status' => 1];
    if (!empty($harvest_source_machine_names)) {
      $conditions['machine_name'] = explode(",", $harvest_source_machine_names);
    }

    // Take it one group at a time, importing the migrations within each group.
    /** @var \Drupal\ekan_harvest\Entity\EkanHarvestSource $harvest_source */
    foreach ($harvest_source_storage->loadByProperties($conditions) as $harvest_source) {
      $options = $options ?: [
        // 'limit' => 10,
        // 'update' => TRUE,
        // 'force' => 1,
      ];
      $harvest_source->doHarvest($options);
    }
  }

}

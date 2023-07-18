<?php

namespace Drupal\ekan_harvest\Plugin\EkanHarvesterType;

use Drupal\ekan_harvest\Entity\EkanHarvestSource;

/**
 * Interface for Ekan Harvester Type plugins.
 */
interface EkanHarvesterTypeInterface {

  /**
   * Return the configuration(s) used by the migration.
   */
  public function getMigrationConfigs();

  /**
   * Returns the paths where the dataset migration yaml(s) is/are stored.
   */
  public function getMigrationConfigFiles();

  /**
   * Set the harvest source entity.
   */
  public function setHarvestSource(EkanHarvestSource $harvest_source);

  /**
   * Get the harvest source entity.
   */
  public function getHarvestSource() : EkanHarvestSource;

}

<?php

namespace Drupal\ekan_harvest\Plugin\EkanHarvesterType;

use Drupal\Component\Plugin\PluginBase;
use Drupal\Core\Serialization\Yaml;
use Drupal\ekan_harvest\Entity\EkanHarvestSource;

/**
 * Base class for Ekan Harvester Type plugins.
 */
abstract class EkanHarvesterTypeBase extends PluginBase implements EkanHarvesterTypeInterface {

  /**
   * The harvest source entity.
   *
   * @var \Drupal\ekan_harvest\Entity\EkanHarvestSource
   */
  protected $harvestSource;

  /**
   * {@inheritDoc}
   */
  public function getMigrationConfigs() {
    $configs = [];
    foreach ($this->getMigrationConfigFiles() as $path) {
      $config = Yaml::decode(file_get_contents($path));
      $configs[$config['id']] = $config;
    }

    return $configs;
  }

  /**
   * {@inheritDoc}
   */
  public function getMigrationConfigFiles() {
    return [];
  }

  /**
   * {@inheritDoc}
   */
  public function setHarvestSource(EkanHarvestSource $harvest_source) {
    $this->harvestSource = $harvest_source;
  }

  /**
   * {@inheritDoc}
   */
  public function getHarvestSource() : EkanHarvestSource {
    return $this->harvestSource;
  }

}

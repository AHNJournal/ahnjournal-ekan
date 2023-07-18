<?php

namespace Drupal\ekan_harvest;

use Drupal\Core\Cache\CacheBackendInterface;
use Drupal\Core\Extension\ModuleHandlerInterface;
use Drupal\Core\Plugin\DefaultPluginManager;
use Drupal\ekan_harvest\Annotation\EkanHarvesterType;
use Drupal\ekan_harvest\Plugin\EkanHarvesterType\EkanHarvesterTypeInterface;

/**
 * Manages discovery and instantiation of Ekan Harvester Type plugins.
 */
class EkanHarvesterTypeManager extends DefaultPluginManager {

  /**
   * Constructs a new EkanHarvesterTypeManager.
   *
   * @param \Traversable $namespaces
   *   An object that implements \Traversable which contains the root paths
   *   keyed by the corresponding namespace to look for plugin implementations.
   * @param \Drupal\Core\Cache\CacheBackendInterface $cache_backend
   *   The cache backend.
   * @param \Drupal\Core\Extension\ModuleHandlerInterface $module_handler
   *   The module handler.
   */
  public function __construct(\Traversable $namespaces, CacheBackendInterface $cache_backend, ModuleHandlerInterface $module_handler) {
    parent::__construct(
      'Plugin/EkanHarvesterType',
      $namespaces,
      $module_handler,
      EkanHarvesterTypeInterface::class,
      EkanHarvesterType::class
    );

    $this->alterInfo('ekan_harvester_type_info');
    $this->setCacheBackend($cache_backend, 'ekan_harvester_type_plugins');
  }

}

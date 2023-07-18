<?php

namespace Drupal\ekan_visuals;

use Drupal\Core\Cache\CacheBackendInterface;
use Drupal\Core\Extension\ModuleHandlerInterface;
use Drupal\Core\Plugin\DefaultPluginManager;
use Drupal\ekan_visuals\Annotation\EkanVisualisation;
use Drupal\ekan_visuals\Plugin\EkanVisualisation\EkanVisualisationInterface;

/**
 * Manages discovery and instantiation of Ekan Visualisation plugins.
 */
class EkanVisualisationManager extends DefaultPluginManager {

  /**
   * Constructs a new EkanVisualisationManager.
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
      'Plugin/EkanVisualisation',
      $namespaces,
      $module_handler, EkanVisualisationInterface::class,
      EkanVisualisation::class
    );

    $this->alterInfo('ekan_visualisation_info');
    $this->setCacheBackend($cache_backend, 'ekan_visualisation_plugins');
  }

}

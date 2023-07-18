<?php

namespace Drupal\ekan_harvest\Annotation;

use Drupal\Component\Annotation\Plugin;

/**
 * Defines the Ekan Harvester Type plugin annotation object.
 *
 * Plugin namespace: EkanHarvesterType.
 *
 * @Annotation
 */
class EkanHarvesterType extends Plugin {

  /**
   * The plugin ID.
   *
   * @var string
   */
  public $id = '';

  /**
   * The human-readable name of the plugin.
   *
   * @var \Drupal\Core\Annotation\Translation
   */
  public $label = '';

}

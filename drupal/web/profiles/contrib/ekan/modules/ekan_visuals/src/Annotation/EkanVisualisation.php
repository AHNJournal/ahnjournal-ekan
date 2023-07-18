<?php

namespace Drupal\ekan_visuals\Annotation;

use Drupal\Component\Annotation\Plugin;

/**
 * Defines the Ekan Visualisation plugin annotation object.
 *
 * Plugin namespace: EkanVisualisation.
 *
 * @Annotation
 */
class EkanVisualisation extends Plugin {

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

  /**
   * The resource format the plugin applies.
   *
   * @var array
   */
  public $formats = [];

}

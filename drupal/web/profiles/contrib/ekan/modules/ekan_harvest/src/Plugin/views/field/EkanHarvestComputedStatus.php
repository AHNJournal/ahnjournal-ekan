<?php

namespace Drupal\ekan_harvest\Plugin\views\field;

use Drupal\ekan_harvest\Entity\EkanHarvestSource;
use Drupal\views\Plugin\views\field\FieldPluginBase;
use Drupal\views\ResultRow;

/**
 * A handler to show the current migration status of a harvest source.
 *
 * @ingroup views_field_handlers
 *
 * @ViewsField("ekan_harvest_computed_status")
 */
class EkanHarvestComputedStatus extends FieldPluginBase {

  /**
   * {@inheritdoc}
   */
  public function render(ResultRow $values) {
    $entity = $values->_entity;
    $build = [];
    if ($entity instanceof EkanHarvestSource) {
      foreach ($entity->getMigrations() as $migration) {
        $build[$migration->id()] = [
          '#type' => 'container',
          'status' => ['#markup' => $migration->label() . ' : ' . $migration->getStatusLabel()],
        ];
      }
    }
    return $build;
  }

  /**
   * {@inheritdoc}
   */
  public function query() {
    // This function exists to override parent query function.
    // Do nothing.
  }

}

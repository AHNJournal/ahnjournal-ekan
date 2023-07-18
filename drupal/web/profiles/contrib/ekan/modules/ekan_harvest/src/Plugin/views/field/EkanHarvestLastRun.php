<?php

namespace Drupal\ekan_harvest\Plugin\views\field;

use Drupal\ekan_harvest\Entity\EkanHarvestSource;
use Drupal\views\Plugin\views\field\FieldPluginBase;
use Drupal\views\ResultRow;

/**
 * A handler to show latest run time of the migrations.
 *
 * @ingroup views_field_handlers
 *
 * @ViewsField("ekan_harvest_computed_last_run")
 */
class EkanHarvestLastRun extends FieldPluginBase {

  /**
   * {@inheritdoc}
   */
  public function render(ResultRow $values) {
    $entity = $values->_entity;
    $build = [];
    if ($entity instanceof EkanHarvestSource) {
      $query = \Drupal::database()->select('harvest_source_event');
      $query->condition('harvest_source_id', $entity->id());
      $query->addExpression('MAX(timestamp)');
      $latest = $query->execute()->fetchField();
      /** @var \Drupal\Core\Datetime\DateFormatterInterface $date_formatter */
      $date_formatter = \Drupal::service('date.formatter');
      $build = [
        '#type' => 'container',
        '#attributes' => ['title' => $latest ? date('c', $latest) : 'never'],
        'count' => ['#markup' => $latest ? ($date_formatter->formatTimeDiffSince($latest) . ' ago') : 'never'],
      ];

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

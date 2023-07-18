<?php

namespace Drupal\ekan_core\Entity;

use Drupal\views\EntityViewsData;

/**
 * Provides Views data for Ekan entities.
 */
class EkanEntityViewsData extends EntityViewsData {

  /**
   * {@inheritdoc}
   */
  public function getViewsData() {
    $data = parent::getViewsData();

    $data['dataset']['dataset_bulk_form'] = [
      'title' => $this->t('Bulk update'),
      'help' => $this->t('Add a form element that lets you run operations on multiple datasets.'),
      'field' => [
        'id' => 'bulk_form',
      ],
    ];

    // Additional information for Views integration, such as table joins, can be
    // put here.
    return $data;
  }

}

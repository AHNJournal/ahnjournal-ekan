<?php

namespace Drupal\ekan_harvest;

use Drupal\entity\EntityViewsData;

/**
 * Views data for harvest_source entities.
 */
class EkanHarvestSourceViewsData extends EntityViewsData {

  /**
   * {@inheritdoc}
   */
  public function getViewsData() {
    $data = parent::getViewsData();
    $data['harvest_source']['harvest_status'] = [
      'title' => t('Harvest Status'),
      'field' => [
        'id' => 'ekan_harvest_computed_status',
      ],
    ];

    $data['harvest_source']['migrated_totals'] = [
      'title' => t('Migrated totals'),
      'field' => [
        'id' => 'ekan_harvest_computed_migrated_totals',
      ],
    ];

    $data['harvest_source']['last_run'] = [
      'title' => t('Last run'),
      'field' => [
        'id' => 'ekan_harvest_computed_last_run',
      ],
    ];

    return $data;
  }

}

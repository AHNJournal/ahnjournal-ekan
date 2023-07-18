<?php

namespace Drupal\ekan_harvest\Entity\Menu;

use Drupal\Core\Entity\EntityTypeInterface;
use Drupal\entity\Menu\DefaultEntityLocalTaskProvider;

/**
 * Provides additional local task tabs to harvest source entities.
 */
class EkanHarvestSourceLocalTaskProvider extends DefaultEntityLocalTaskProvider {

  /**
   * {@inheritdoc}
   */
  public function buildLocalTasks(EntityTypeInterface $entity_type) {
    $tasks = parent::buildLocalTasks($entity_type);
    $last_task = end($tasks);
    $weight = $last_task['weight'];

    $additional_tasks = [
      [
        'title' => t('Manage Datasets'),
        'route_name' => 'entity.harvest_source.manage_datasets',
      ],
      [
        'title' => t('Events'),
        'route_name' => 'entity.harvest_source.harvest_events',
      ],
      [
        'title' => t('Errors'),
        'route_name' => 'entity.harvest_source.harvest_errors',
      ],
    ];

    foreach ($additional_tasks as $task) {
      $tasks[] = $task + [
        'base_route' => "entity.harvest_source.canonical",
        'weight' => $weight += 10,
      ];
    }

    $tasks['entity.harvest_source.canonical']['title'] = t('Preview');

    return $tasks;
  }

}

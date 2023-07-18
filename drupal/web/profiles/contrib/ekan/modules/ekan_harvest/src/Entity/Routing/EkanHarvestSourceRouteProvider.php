<?php

namespace Drupal\ekan_harvest\Entity\Routing;

use Drupal\Core\Entity\EntityTypeInterface;
use Drupal\ekan_harvest\Entity\Controller\EkanHarvestSourceLocalTaskController;
use Drupal\entity\Routing\AdminHtmlRouteProvider;
use Symfony\Component\Routing\Route;

/**
 * Build additional routes for Harvest Source entities.
 */
class EkanHarvestSourceRouteProvider extends AdminHtmlRouteProvider {

  /**
   * {@inheritDoc}
   */
  protected function getCanonicalRoute(EntityTypeInterface $entity_type) {
    $route = parent::getCanonicalRoute($entity_type);
    $route->setDefaults([
      '_controller' => EkanHarvestSourceLocalTaskController::class . '::renderPreview',
    ])->setOption('_admin_route', TRUE);
    return $route;
  }

  /**
   * {@inheritDoc}
   */
  public function getRoutes(EntityTypeInterface $entity_type) {
    $collection = parent::getRoutes($entity_type);

    $task_requirements = [
      '_permission' => $entity_type->getAdminPermission(),
      'harvest_source' => '\d+',
    ];
    $task_options = [
      '_admin_route' => TRUE,
      'parameters' => [
        'harvest_source' => ['type' => 'entity:harvest_source'],
      ],
    ];

    $route = new Route($entity_type->getLinkTemplate('harvest-events'));
    $route->setRequirements($task_requirements)->setOptions($task_options)->addDefaults([
      '_controller' => EkanHarvestSourceLocalTaskController::class . '::renderEvents',
    ]);
    $collection->add("entity.harvest_source.harvest_events", $route);

    $route = new Route($entity_type->getLinkTemplate('harvest-errors'));
    $route->setRequirements($task_requirements)->setOptions($task_options)->addDefaults([
      '_controller' => EkanHarvestSourceLocalTaskController::class . '::renderErrors',
    ]);
    $collection->add("entity.harvest_source.harvest_errors", $route);

    $route = new Route($entity_type->getLinkTemplate('harvest-manage-datasets'));
    $route->setRequirements($task_requirements)->setOptions($task_options)->addDefaults([
      '_controller' => EkanHarvestSourceLocalTaskController::class . '::renderManageDatasets',
    ]);
    $collection->add("entity.harvest_source.manage_datasets", $route);

    return $collection;
  }

}

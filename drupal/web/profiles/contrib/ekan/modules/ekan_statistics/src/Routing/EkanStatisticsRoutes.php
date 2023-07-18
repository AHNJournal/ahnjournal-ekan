<?php

namespace Drupal\ekan_statistics\Routing;

use Symfony\Component\Routing\Route;
use Symfony\Component\Routing\RouteCollection;

/**
 * Defines dynamic Ekan statistics routes.
 */
class EkanStatisticsRoutes {

  /**
   * Declares the Ekan statistics routes.
   */
  public function routes(): RouteCollection {
    $route_collection = new RouteCollection();
    $permission = 'view ekan statistics';
    $base_statistics_route = '/ekan/statistics';
    $statistics_pages = [
      'dashboard',
      'topics',
      'tags',
      'formats',
      'groups',
      'harvesters',
    ];
    foreach ($statistics_pages as $key) {
      $route = new Route(
        $base_statistics_route . '/' . $key,
        [
          '_controller' => '\Drupal\ekan_statistics\Controller\EkanStatistics' . ucfirst($key) . '::build',
          '_title' => ucfirst($key),
        ],
        ['_permission' => $permission],
      );
      $route_collection->add('ekan_statistics.' . $key, $route);
    }
    return $route_collection;
  }

}

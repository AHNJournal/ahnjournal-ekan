<?php

namespace Drupal\ekan_core\Breadcrumb;

use Drupal\Core\Breadcrumb\Breadcrumb;
use Drupal\Core\Breadcrumb\BreadcrumbBuilderInterface;
use Drupal\Core\Routing\RouteMatchInterface;
use Drupal\Core\Link;
use Drupal\Core\Url;
use Drupal\ekan_core\Entity\EkanDatasetEntity;
use Drupal\ekan_core\Entity\EkanResourceEntity;
use Drupal\node\NodeInterface;

/**
 * Service to add better links to Core's default breadcrumb.
 */
class EkanEntityBreadcrumbBuilder implements BreadcrumbBuilderInterface {

  /**
   * {@inheritdoc}
   */
  public function applies(RouteMatchInterface $attributes) {

    // Get all parameters.
    $parameters = $attributes->getParameters()->all();

    // Determine if the current page is the particular page.
    if (isset($parameters['node']) && !empty($parameters['node'])) {
      return TRUE;
    }

    if (isset($parameters['dataset']) && !empty($parameters['dataset'])) {
      return TRUE;
    }

    if (isset($parameters['resource']) && !empty($parameters['resource'])) {
      return TRUE;
    }

    if (isset($parameters)) {
      return TRUE;
    }

    return FALSE;
  }

  /**
   * {@inheritdoc}
   */
  public function build(RouteMatchInterface $route_match) {
    $route = $route_match->getRouteName();

    // Define a new object of type Breadcrumb.
    $breadcrumb = new Breadcrumb();
    // Add cache control by a route.
    $breadcrumb->addCacheContexts(['route']);

    // Add front page link.
    $breadcrumb->addLink(Link::createFromRoute('Home', '<front>'));

    // Get the node for the current page.
    $node = \Drupal::routeMatch()->getParameter('node');
    $dataset = \Drupal::routeMatch()->getParameter('dataset');
    $resource = \Drupal::routeMatch()->getParameter('resource');

    if ($node instanceof NodeInterface) {

      if ($node->bundle() == 'data_dashboard') {
        $dashboard_url = Url::fromUri('internal:/search', [
          'query' => ['f' => ['content_type:data dashboard']],
        ]);
        $dashboards_link = Link::fromTextAndUrl("Data Dashboards", $dashboard_url);
        $breadcrumb->addLink($dashboards_link);
      }

      if ($node->bundle() == 'data_story') {
        $datastories_url = Url::fromUri('internal:/search', [
          'query' => ['f' => ['content_type:data story']],
        ]);
        $datastories_link = Link::fromTextAndUrl("Data Stories", $datastories_url);
        $breadcrumb->addLink($datastories_link);
      }

      $breadcrumb->addLink(Link::createFromRoute($node->getTitle(), '<nolink>'));
    }

    $datasets_url = Url::fromUri('internal:/search', [
      'query' => ['f' => ['content_type:dataset']],
    ]);
    $datasets_link = Link::fromTextAndUrl("Datasets", $datasets_url);

    if ($dataset instanceof EkanDatasetEntity) {
      $breadcrumb->addLink($datasets_link);
      $breadcrumb->addLink(Link::createFromRoute($dataset->label(), '<nolink>'));
    }

    if ($resource instanceof EkanResourceEntity) {
      $breadcrumb->addLink($datasets_link);
      $dataset_ref = $resource->get('dataset_ref')->entity;
      if ($dataset_ref instanceof EkanDatasetEntity) {
        $breadcrumb->addLink($dataset_ref->toLink());
        $breadcrumb->addCacheableDependency($dataset_ref);
      }
      $breadcrumb->addLink(Link::createFromRoute($resource->label(), '<nolink>'));
    }

    if ($route == "ekan_core.dataset.step1") {
      $breadcrumb->addLink($datasets_link);
      $breadcrumb->addLink(Link::createFromRoute('Add Dataset', '<nolink>'));
    }

    if ($route == "entity.resource.add") {
      $breadcrumb->addLink($datasets_link);
      $breadcrumb->addLink(Link::createFromRoute('Add Resource', '<nolink>'));
    }

    // Return object of type breadcrumb.
    return $breadcrumb;
  }

}

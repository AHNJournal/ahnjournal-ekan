<?php

namespace Drupal\ekan_core\Breadcrumb;

use Drupal\Core\Breadcrumb\Breadcrumb;
use Drupal\Core\Breadcrumb\BreadcrumbBuilderInterface;
use Drupal\Core\Routing\RouteMatchInterface;
use Drupal\Core\Link;

/**
 * Service to add better links to Core's default breadcrumb.
 */
class EkanViewBreadcrumbBuilder implements BreadcrumbBuilderInterface {

  /**
   * Holds the route name of the view to create a crumb for.
   *
   * @var string|null
   */
  public $viewToCrumb;

  /**
   * {@inheritDoc}
   */
  public function applies(RouteMatchInterface $route_match) {
    $addCrumb = FALSE;
    $routeName = $route_match->getRouteName();
    $routesToCrumb = [
      'view.solr_search.page_1',
      'search.view',
    ];

    if (in_array($routeName, $routesToCrumb)) {
      $this->viewToCrumb = $routeName;
      $addCrumb = TRUE;
    }

    return $addCrumb;
  }

  /**
   * {@inheritDoc}
   */
  public function build(RouteMatchInterface $route_match) {

    // Breadcrumb object to eventually display.
    $breadcrumb = new Breadcrumb();

    // Add front page link.
    $breadcrumb->addLink(Link::createFromRoute('Home', '<front>'));

    if (isset($this->viewToCrumb)) {
      switch ($this->viewToCrumb) {
        case 'view.solr_search.page_1':
        case 'search.view':
          $breadcrumb->addLink(Link::createFromRoute('Search', '<nolink>'));
          break;
      }
    }

    // Add cache control by a route.
    $breadcrumb->addCacheContexts(['route']);

    // Return object of type breadcrumb.
    return $breadcrumb;
  }

}

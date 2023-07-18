<?php

namespace Drupal\ekan_core\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Component\Render\FormattableMarkup;
use Drupal\ekan_core\Entity\EkanResourceEntity;

/**
 * Provides a 'resources_with_same_dataset' block.
 *
 * @Block(
 *  id = "resources_with_same_dataset",
 *  admin_label = @Translation("Related Resources"),
 * )
 */
class ListOfResourcesWithSameDataset extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    if (\Drupal::currentUser()->isAnonymous()) {
      return [];
    }
    $route_name = \Drupal::routeMatch()->getRouteName();
    if (!$route_name == 'entity.resource.view') {
      return [];
    }
    $build = [];
    $build['related_resources']['#markup'] = new FormattableMarkup($this->buildLinks(), []);

    return $build;
  }

  /**
   * Helper to build workflow links.
   */
  protected function buildLinks() {
    $list = [];
    // EkanResourceEntity $resource.
    $resource = \Drupal::routeMatch()->getParameter('resource');
    if ($resource) {
      $dataset_id = $resource->get('dataset_ref')->target_id;

      // Get all the related resources id.
      $all_related_resources = \Drupal::entityQuery('resource')
        ->condition('status', 1)
        ->condition('dataset_ref', $dataset_id)
        ->execute();

      foreach ($all_related_resources as $related_resource_id) {
        // Get the resource title from the id.
        $related_resource = EkanResourceEntity::load($related_resource_id);
        if ($resource->id() == $related_resource_id) {
          $all_related_resource_class = 'active';
          $list[] = "<a href='/resource/$related_resource_id' class='list_of_resources $all_related_resource_class'>" . $related_resource->label() . "</a>";
        }
        else {
          $list[] = "<a href='/resource/$related_resource_id' class='list_of_resources'>" . $related_resource->label() . "</a>";
        }
      }

      return implode("", $list);
    }
  }

  /**
   * {@inheritdoc}
   */
  public function getCacheMaxAge() {
    return 0;
  }

}

<?php

namespace Drupal\ekan_core\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'dataset_workflow' block.
 *
 * @Block(
 *  id = "dataset_workflow",
 *  admin_label = @Translation("Dataset Workflow"),
 * )
 */
class DatasetWorkflow extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $resource_link = '<span>Add Data</span>';
    $additional_link = '<span>Additional Data</span>';
    $dataset = \Drupal::routeMatch()->getRawParameter('dataset');
    $route_name = \Drupal::routeMatch()->getRouteName();
    $markup = "<ul  class='dataset-links'>";
    $dataset_link = '<span><a>Create dataset</a></span>';
    if ($dataset) {
      $dataset_link = '<span><a>Edit dataset</a></span>';
      $resource_link = '<span><a>Add Data</a></span>';
      $additional_link = '<span><a>Additional Data</a></span>';
    }
    switch ($route_name) {
      case 'entity.dataset.edit_form':
      case 'ekan_core.dataset.step1':
        $markup .= "<li class='first active'>$dataset_link</li><li class='middle uncomplete'>$resource_link</li><li class='last uncomplete'>$additional_link</li>";
        break;

      case 'ekan_core.dataset.add_resource':
        $markup .= "<li class='first complete'>$dataset_link</li><li class='middle active'> $resource_link </li><li class='last uncomplete'>$additional_link</li>";
        break;

      case 'ekan_core.dataset.additional_data':
        $markup .= "<li class='first complete'>$dataset_link</li><li class='middle complete'> $resource_link </li><li class='last active'>$additional_link</li>";
        break;

      default:
        return [];
    }
    $markup .= '</ul>';

    return [
      '#markup' => $markup,
    ];
  }

  /**
   * {@inheritDoc}
   */
  public function getCacheContexts() {
    return ['route.name'];
  }

}

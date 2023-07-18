<?php

namespace Drupal\ekan_core\ComputedFields;

use Drupal\Core\Field\FieldItemList;
use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\TypedData\ComputedItemListTrait;
use Drupal\ekan_core\Entity\EkanDatasetEntity;

/**
 * Computed field to show the create date based on harvested source or entity.
 */
class EkanDatasetReleaseDate extends FieldItemList implements FieldItemListInterface {

  use ComputedItemListTrait;

  /**
   * Compute the values.
   */
  protected function computeValue() {
    $dataset = $this->getEntity();
    $moduleHandler = \Drupal::service('module_handler');
    if ($dataset instanceof EkanDatasetEntity && $moduleHandler->moduleExists('ekan_harvest')) {
      $harvest_source_issue = $dataset->get('harvest_source_issue')->value;
      $harvest_source_issue = is_numeric($harvest_source_issue) ? $harvest_source_issue : FALSE;
      $changed = $dataset->get('created')->value;
      $this->list = [
        $this->createItem(0, $harvest_source_issue ?: $changed),
      ];
    }
  }

}

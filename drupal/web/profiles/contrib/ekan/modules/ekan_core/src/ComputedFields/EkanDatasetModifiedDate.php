<?php

namespace Drupal\ekan_core\ComputedFields;

use Drupal\Core\Field\FieldItemList;
use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\TypedData\ComputedItemListTrait;
use Drupal\ekan_core\Entity\EkanDatasetEntity;

/**
 * Computed field to show the modified date based on harvested source or entity.
 */
class EkanDatasetModifiedDate extends FieldItemList implements FieldItemListInterface {

  use ComputedItemListTrait;

  /**
   * Compute the values.
   */
  protected function computeValue() {
    $dataset = $this->getEntity();
    $moduleHandler = \Drupal::service('module_handler');
    if ($dataset instanceof EkanDatasetEntity && $moduleHandler->moduleExists('ekan_harvest')) {
      $harvest_source_modified = $dataset->get('harvest_source_modified')->value;
      $harvest_source_modified = is_numeric($harvest_source_modified) ? $harvest_source_modified : FALSE;
      $changed = $dataset->get('changed')->value;
      $this->list = [
        $this->createItem(0, $harvest_source_modified ?: $changed),
      ];
    }
  }

}

<?php

namespace Drupal\ekan_core\Plugin\Field\FieldFormatter;

use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\FormatterBase;
use Drupal\Core\Url;
use Drupal\Core\Field\FieldDefinitionInterface;

/**
 * Plugin implementation of the 'group_search_link' formatter.
 *
 * @FieldFormatter(
 *   id = "group_search_link",
 *   label = @Translation("group search link"),
 *   description = @Translation("Provide link to search page filtered by group id"),
 *   field_types = {
 *     "string"
 *   }
 * )
 */
class GroupSearchLink extends FormatterBase {

  /**
   * {@inheritdoc}
   */
  public function settingsSummary() {
    $summary = [];
    $summary[] = $this->t('Link to search page filtered by string');
    return $summary;
  }

  /**
   * {@inheritdoc}
   */
  public function viewElements(FieldItemListInterface $items, $langcode) {
    $elements = [];
    $entity = $items->getEntity();
    $entity_type = $entity->getEntityType();

    foreach ($items as $delta => $item) {
      if (!$item->isEmpty()) {
        $elements[$delta] = [
          '#type' => 'link',
          '#url' => Url::fromUri("internal:/search?f%5B0%5D=publisher%3A" . $entity->id()),
          '#title' => $item->value,
        ];
      }
    }
    return $elements;
  }

  /**
   * {@inheritDoc}
   */
  public static function isApplicable(FieldDefinitionInterface $field_definition) {
    if ($field_definition->getTargetEntityTypeId() == 'group') {
      return TRUE;
    }
    return FALSE;
  }

}

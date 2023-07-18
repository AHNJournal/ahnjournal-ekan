<?php

namespace Drupal\ekan_core\Plugin\Field\FieldFormatter;

use Drupal\Component\Render\FormattableMarkup;
use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\Plugin\Field\FieldFormatter\EntityReferenceLabelFormatter;
use Drupal\Core\Render\Element;

/**
 * Plugin implementation of the 'entity reference label' formatter.
 *
 * @FieldFormatter(
 *   id = "entity_reference_icon_label",
 *   label = @Translation("Label with Icon"),
 *   description = @Translation("Display the label of the referenced entities. Includes icon if available"),
 *   field_types = {
 *     "entity_reference"
 *   }
 * )
 */
class EntityReferenceIconLabelFormatter extends EntityReferenceLabelFormatter {

  /**
   * {@inheritdoc}
   */
  public function viewElements(FieldItemListInterface $items, $langcode) {
    $elements = parent::viewElements($items, $langcode);
    foreach (Element::children($elements) as $delta) {
      $element = &$elements[$delta];
      $entity = $items->get($delta)->entity;

      /** @var \Drupal\ekan_core\Service\EkanIconHandler $icon_handler */
      $icon_handler = \Drupal::service('ekan_core.icon_handler');
      $icon = $icon_handler->getIconForEntity($entity);
      $label = $entity->label();
      $title_markup = new FormattableMarkup("$icon&nbsp;$label", []);

      if (isset($element['#title'])) {
        $element['#title'] = $title_markup;
      }
      else {
        unset($element['#plain_text']);
        $element['#markup'] = $title_markup;
      }
    }
    return $elements;
  }

}

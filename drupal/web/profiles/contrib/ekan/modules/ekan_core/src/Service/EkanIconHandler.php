<?php

namespace Drupal\ekan_core\Service;

use Drupal\Component\Render\FormattableMarkup;
use Drupal\Core\Entity\ContentEntityInterface;
use Drupal\Core\Entity\EntityInterface;
use Drupal\Component\Utility\Html;
use Drupal\Core\Entity\FieldableEntityInterface;
use Drupal\ekan_core\Entity\EkanResourceEntity;

/**
 * Service class for figuring out the correct icon for an entity.
 */
class EkanIconHandler {

  /**
   * Return the <i> icon for an entity type.
   *
   * This function will return the entity type icon, NOT the file format icon.
   * E.g Icon for a Dashboard, Dataset, Resource or Land bundles.
   */
  public function getIconForEntity(EntityInterface $entity) {
    if ($entity instanceof FieldableEntityInterface && $entity->hasField('field_icon_char_code') && !$entity->get('field_icon_char_code')->isEmpty()) {
      $icon_class = 'icon-dkan';
      $icon_class .= ' icon-' . strtolower(Html::cleanCssIdentifier($entity->label()));
      $icon_unicode = $entity->get('field_icon_char_code')->getString();
      $icon_markup = "<i class='$icon_class'>&#x{$icon_unicode};</i>";
    }
    elseif ($entity instanceof ContentEntityInterface) {
      $icon_class = 'icon-dkan-' . strtolower(Html::cleanCssIdentifier($entity->bundle()));
      $icon_class .= ' icon-' . strtolower(Html::cleanCssIdentifier($entity->label()));
      $icon_markup = '<i class="' . $icon_class . '"></i>';
    }
    else {
      $icon_class = 'icon-dkan-' . strtolower(Html::cleanCssIdentifier($entity->getEntityTypeId()));
      $icon_class .= ' icon-' . strtolower(Html::cleanCssIdentifier($entity->label()));
      $icon_markup = '<i class="' . $icon_class . '"></i>';
    }

    return $icon_markup;
  }

  /**
   * Return the markup for file icon.
   */
  public function getIconForResourceFormat(EntityInterface $entity) {
    if ($entity instanceof EkanResourceEntity) {
      $resource_format_tid = $entity->get('resource_format')->target_id;
      $term_storage = \Drupal::entityTypeManager()->getStorage('taxonomy_term');
      if ($resource_format_tid && $resource_format = $term_storage->load($resource_format_tid)) {
        $label = $resource_format->label();
        if ($label) {
          return new FormattableMarkup('<span class="format-label" data-format="@resource_format_label"><div class="tooltiptext ">@resource_format</div></span>',
            [
              '@resource_format_label' => $label,
              '@resource_format' => $label,
            ]);
        }
      }
    }
    return '';
  }

}

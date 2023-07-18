<?php

/**
 * @file
 * Implements template_preprocess_entity().
 */

use Drupal\Core\Render\Element;
use Drupal\ekan_core\Entity\EkanResourceEntity;

/**
 * Implements hook_preprocess_resource().
 */
function ekan_theme_preprocess_resource(array &$variables) {
  $resource = $variables['elements']['#resource'];
  assert($resource instanceof EkanResourceEntity);
  $variables['resource'] = $resource;

  foreach (Element::children($variables['elements']) as $key) {
    $variables['content'][$key] = $variables['elements'][$key];
  }
}

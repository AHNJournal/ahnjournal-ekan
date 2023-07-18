<?php

/**
 * @file
 * Implements template_preprocess_entity().
 */

use Drupal\Core\Render\Element;
use Drupal\ekan_core\Entity\EkanDatasetEntity;

/**
 * Implements hook_preprocess_dataset().
 */
function ekan_theme_preprocess_dataset(array &$variables) {
  $dataset = $variables['elements']['#dataset'];
  assert($dataset instanceof EkanDatasetEntity);
  $variables['dataset'] = $dataset;

  $fields_in_table = [
    'field_publisher',
    'license',
    'author',
    'related_content',
    'public_access_level',
    'contact_name',
    'language',
    'pod_theme',
  ];

  foreach (Element::children($variables['elements']) as $key) {

    if (in_array($key, $fields_in_table)) {
      $variables['metadata'][$key] = $variables['elements'][$key];
      $variables['metadata'][$key]['#label_display'] = 'hidden';
    }
    else {
      $variables['content'][$key] = $variables['elements'][$key];
    }
  }
}

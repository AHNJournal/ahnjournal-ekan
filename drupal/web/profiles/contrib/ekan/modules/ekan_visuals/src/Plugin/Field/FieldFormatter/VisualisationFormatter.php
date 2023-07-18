<?php

namespace Drupal\ekan_visuals\Plugin\Field\FieldFormatter;

use Drupal\Core\Field\FormatterBase;
use Drupal\Core\Field\FieldItemListInterface;
use Drupal\ekan_core\Entity\EkanResourceEntity;

/**
 * Field formatter to Visualisation.
 *
 * @FieldFormatter(
 *  id = "visualisation_formatter",
 *  label = @Translation("Ekan Visualisation"),
 *  field_types = {"string_long"}
 * )
 */
class VisualisationFormatter extends FormatterBase {

  /**
   * Renders a pdf selected plugin for the resource type.
   *
   * @param \Drupal\Core\Field\FieldItemListInterface $items
   *   The collection of field items.
   * @param string $langcode
   *   The language code.
   *
   * @return array
   *   A renderable array.
   *
   * @throws \Drupal\Component\Plugin\Exception\PluginException
   */
  public function viewElements(FieldItemListInterface $items, $langcode) {
    $elements = [];
    if ($items->isEmpty()) {
      return [];
    }
    $value = $items->getValue()[0]['value'] ?? NULL;
    if (!$value) {
      return [];
    }
    $entity = $items->getEntity();
    if (!($entity instanceof EkanResourceEntity)) {
      return [];
    }
    $value = json_decode($value, TRUE);
    /** @var \Drupal\ekan_visuals\EkanVisualisationManager $plugin_manager */
    $plugin_manager = \Drupal::service('plugin.manager.ekan_visualisation');
    foreach ($value as $plugin_id => $settings) {
      /** @var \Drupal\ekan_visuals\Plugin\EkanVisualisation\EkanVisualisationInterface $visualisation_plugin */
      $visualisation_plugin = $plugin_manager->createInstance($plugin_id);
      $elements[][] = $visualisation_plugin->visualise($entity, $settings['settings']);
    }

    return $elements;
  }

}

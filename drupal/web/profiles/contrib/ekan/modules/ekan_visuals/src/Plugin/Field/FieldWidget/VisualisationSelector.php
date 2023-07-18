<?php

namespace Drupal\ekan_visuals\Plugin\Field\FieldWidget;

use Drupal\Core\Field\FieldDefinitionInterface;
use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\Plugin\Field\FieldWidget\StringTextareaWidget;
use Drupal\Core\Form\FormStateInterface;

/**
 * Plugin implementation of the 'Visualisation' widget.
 *
 * @FieldWidget(
 *   id = "visualisation_select",
 *   label = @Translation("Visualisation"),
 *   field_types = {
 *     "string_long"
 *   },
 *   multiple_values = TRUE
 * )
 */
class VisualisationSelector extends StringTextareaWidget {

  /**
   * {@inheritDoc}
   */
  public function formElement(FieldItemListInterface $items, $delta, array $element, array &$form, FormStateInterface $form_state) {
    $value = $items->getValue() && $items->getValue()[0]['value'] ? json_decode($items->getValue()[0]['value'], TRUE) : [];
    $available_formats = $this->getAvailableFormats($form, $form_state);
    $element['title']['#markup'] = '<strong>' . t('Visualisations') . '</strong>';
    /** @var \Drupal\ekan_visuals\EkanVisualisationManager $plugin_manager */
    $plugin_manager = \Drupal::service('plugin.manager.ekan_visualisation');
    foreach ($available_formats as $key => $definition) {
      /** @var \Drupal\ekan_visuals\Plugin\EkanVisualisation\EkanVisualisationInterface $visualisation_plugin */
      $visualisation_plugin = $plugin_manager->createInstance($key);
      if ($visualisation_plugin->visualisationAccess(\Drupal::currentUser())) {
        $default_plugin_value = FALSE;
        if (array_key_exists($key, $value)) {
          $default_plugin_value = TRUE;
        }
        $element['visual_type-' . $key]['input'] = [
          '#type' => 'checkbox',
          '#title' => $definition['label'],
          '#default_value' => $default_plugin_value,
          '#format_type' => $definition['format'],
          '#plugin_id' => $key,
          // '#disabled' => TRUE,
          '#attributes' => [
            'class' => $definition['class'],
            'id' => $definition['id'],
          ],
        ];
        $settings = $visualisation_plugin->settingsForm($form, $form_state);
        if (array_key_exists($key, $value)) {
          foreach ($value as $plugin_id => $stored_settings) {
            foreach ($stored_settings['settings'] as $setting_key => $setting_value) {
              $settings[$setting_key]['#default_value'] = $setting_value;
            }
          }
        }
        $selector_name = 'edit-visualisation-visual-type-' . str_replace('_', '-', $key) . '-input';
        $element['visual_type-' . $key]['details'] = [
          '#type' => 'details',
          '#title' => $definition['label'],
          '#attributes' => ['class' => ['visual-settings-form select-visual-' . $key]],
          '#tree' => TRUE,
          '#open' => TRUE,
          '#states' => [
            'visible' => [
              ':input[data-drupal-selector="' . $selector_name . '"]' => ['checked' => TRUE],
            ],
          ],
        ];
        $element['visual_type-' . $key]['details']['settings'] = $settings;
      }
    }

    return $element;
  }

  /**
   * {@inheritDoc}
   */
  public static function isApplicable(FieldDefinitionInterface $field_definition) {
    if ($field_definition->getName() == 'visualisation' && $field_definition->getTargetEntityTypeId() == 'resource') {
      return TRUE;
    }
    return FALSE;
  }

  /**
   * Helper function to get all the available visualisation plugins.
   */
  public static function getAvailableFormats($form, FormStateInterface $form_state) {
    $available_formats = NULL;

    /** @var \Drupal\ekan_visuals\EkanVisualisationManager $plugin_manager */
    $plugin_manager = \Drupal::service('plugin.manager.ekan_visualisation');
    $definitions = $plugin_manager->getDefinitions();
    foreach ($definitions as $definition) {
      $formats = $definition['formats'];
      foreach ($formats as $format) {
        $available_formats[$definition['id']]['format'] = $format;
        $available_formats[$definition['id']]['label'] = $definition['label'];
        $available_formats[$definition['id']]['class'][] = 'visualisation-' . str_replace(' ', '-', $format);
      }
      $available_formats[$definition['id']]['id'][] = 'vis-input-' . $definition['id'];
    }
    return $available_formats;
  }

  /**
   * {@inheritdoc}
   */
  public function massageFormValues(array $values, array $form, FormStateInterface $form_state) {
    $data = [];
    foreach ($values as $key => $value) {
      if (preg_match('/visual_type-(.*)/', $key, $matches)) {
        if ($value['input']) {
          $data[$matches[1]]['settings'] = $value['details']['settings'];
        }
      }
    }
    $values['value'] = json_encode($data);
    return parent::massageFormValues($values, $form, $form_state);
  }

}

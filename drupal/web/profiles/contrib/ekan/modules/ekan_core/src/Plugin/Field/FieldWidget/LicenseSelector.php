<?php

namespace Drupal\ekan_core\Plugin\Field\FieldWidget;

use Drupal\Core\Entity\FieldableEntityInterface;
use Drupal\Core\Field\FieldDefinitionInterface;
use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\Plugin\Field\FieldWidget\OptionsSelectWidget;
use Drupal\Core\Form\FormStateInterface;

/**
 * Plugin implementation of the 'options_select' widget.
 *
 * @FieldWidget(
 *   id = "license_select",
 *   label = @Translation("License Select"),
 *   field_types = {
 *     "string"
 *   },
 *   multiple_values = TRUE
 * )
 */
class LicenseSelector extends OptionsSelectWidget {

  /**
   * {@inheritDoc}
   */
  public function formElement(FieldItemListInterface $items, $delta, array $element, array &$form, FormStateInterface $form_state) {
    // @todo Change the autogenerated stub
    $element = parent::formElement($items, $delta, $element, $form, $form_state);
    $element['#title'] = "License Options and Access Control";
    $element['#description'] =
      '<ul>' .
      '<li><b>Public</b> - For data accessible to all portal groups and the public.</li>' .
      '<li><b>Shared</b> - For data shared between ministry portal groups but not with the public.</li>' .
      '<li><b>Private</b> - For internal use, only accessible within a single portal group.</li>' .
      '</ul>';
    return $element;
  }

  /**
   * {@inheritDoc}
   */
  protected function getOptions(FieldableEntityInterface $entity) {
    $licenses = \Drupal::service('ekan_core.license_handler');
    $licenses_info = $licenses->getLicenseOptions();
    if (!isset($this->options)) {
      $options = [];
      foreach ($licenses_info as $key => $info) {
        $options[$key] = $info['label'];
      }
      // Add an empty option if the widget needs one.
      if ($empty_label = $this->getEmptyLabel()) {
        $options = ['_none' => $empty_label] + $options;
      }
      $this->options = $options;
    }
    return $this->options;
  }

  /**
   * {@inheritDoc}
   */
  public static function isApplicable(FieldDefinitionInterface $field_definition) {
    if ($field_definition->getName() == 'license' && $field_definition->getTargetEntityTypeId() == 'dataset') {
      return TRUE;
    }
    return FALSE;
  }

}

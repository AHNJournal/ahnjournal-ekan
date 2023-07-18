<?php

namespace Drupal\ekan_core\Plugin\GroupContentEnabler;

use Drupal\group\Plugin\GroupContentEnablerBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides a content enabler for user entities.
 *
 * @GroupContentEnabler(
 *   id = "dataset",
 *   label = @Translation("Dataset"),
 *   description = @Translation("Adds dataset to groups as pure entities"),
 *   entity_type_id = "dataset",
 *   entity_access = TRUE,
 *   pretty_path_key = "dataset",
 *   reference_label = @Translation("title"),
 *   reference_description = @Translation("The title of the dataset (entity) to add to the group"),
 *   handlers = {
 *     "access" = "Drupal\group\Plugin\GroupContentAccessControlHandler",
 *     "permission_provider" = "Drupal\group\Plugin\GroupContentPermissionProvider",
 *   }
 * )
 */
class DatasetEntity extends GroupContentEnablerBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    $config = parent::defaultConfiguration();
    $config['entity_cardinality'] = 1;
    return $config;
  }

  /**
   * {@inheritdoc}
   */
  public function buildConfigurationForm(array $form, FormStateInterface $form_state) {
    $form = parent::buildConfigurationForm($form, $form_state);
    // Disable the entity cardinality field as the functionality of this module
    // relies on a cardinality of 1. We don't just hide it, though, to keep a UI
    // that's consistent with other content enabler plugins.
    $info = $this->t("This field has been disabled by the plugin to guarantee the functionality that's expected of it.");
    $form['entity_cardinality']['#disabled'] = TRUE;
    $form['entity_cardinality']['#description'] .= '<br /><em>' . $info . '</em>';

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function calculateDependencies() {
    return ['module' => ['ekan_core']];
  }

}

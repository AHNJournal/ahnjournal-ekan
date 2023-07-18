<?php

namespace Drupal\ekan_visuals\Plugin\EkanVisualisation;

use Drupal\Component\Plugin\PluginBase;
use Drupal\Core\Access\AccessResult;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Session\AccountInterface;

/**
 * Base class for Ekan Visualisation plugins.
 */
abstract class EkanVisualisationBase extends PluginBase implements EkanVisualisationInterface {

  /**
   * {@inheritdoc}
   */
  public function settingsForm(array $form, FormStateInterface $form_state) {
    return [];
  }

  /**
   * Checks the access for visualisation plugin.
   */
  public function visualisationAccess(AccountInterface $account) {
    // By default, allow access.
    return AccessResult::allowed();
  }

}

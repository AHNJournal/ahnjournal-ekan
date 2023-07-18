<?php

namespace Drupal\ekan_visuals\Plugin\EkanVisualisation;

use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Session\AccountInterface;
use Drupal\ekan_core\Entity\EkanResourceEntity;

/**
 * Interface for Ekan Visualisation plugins.
 */
interface EkanVisualisationInterface {

  /**
   * The settings form for Ekan Visualisation.
   */
  public function settingsForm(array $form, FormStateInterface $form_state);

  /**
   * Creates the renderable visualisation of the resource.
   *
   * It uses the settings configured in the form to create renderable array.
   */
  public function visualise(EkanResourceEntity $resource, array $settings = []);

  /**
   * Checks the access for visualisation plugin.
   */
  public function visualisationAccess(AccountInterface $account);

}

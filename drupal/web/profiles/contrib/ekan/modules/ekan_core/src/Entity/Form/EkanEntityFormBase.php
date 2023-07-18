<?php

namespace Drupal\ekan_core\Entity\Form;

use Drupal\Core\Entity\ContentEntityForm;
use Drupal\Core\Form\FormStateInterface;

/**
 * Base form for resources and datasets.
 */
abstract class EkanEntityFormBase extends ContentEntityForm {

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $form = parent::buildForm($form, $form_state);
    $config = \Drupal::config('ekan_core.resource_settings');
    \Drupal::service('renderer')->addCacheableDependency($form, $config);
    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function save(array $form, FormStateInterface $form_state) {
    $this->entity->setNewRevision();
    $form_state->setRedirect('<front>');
    parent::save($form, $form_state);
  }

}

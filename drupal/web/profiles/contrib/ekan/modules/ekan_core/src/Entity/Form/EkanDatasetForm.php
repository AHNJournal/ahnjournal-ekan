<?php

namespace Drupal\ekan_core\Entity\Form;

use Drupal\Core\Form\FormStateInterface;
use Drupal\ekan_core\Entity\EkanDatasetEntity;

/**
 * Form controller for the dataset entity add / edit forms.
 *
 * @ingroup ekan_core
 */
class EkanDatasetForm extends EkanEntityFormBase {

  /**
   * Returns an array of supported actions for the current entity form.
   */
  protected function actions(array $form, FormStateInterface $form_state) {
    $actions = parent::actions($form, $form_state);

    // When creating a new dataset, offer option to add the resource next.
    if ($this->entity->isNew()) {
      $actions['submit']['#value'] = t('Next: Add resource');
      $actions['submit']['#submit'][] = '::redirectAddResource';
    }

    return $actions;
  }

  /**
   * Redirect callback.
   *
   * @param array $form
   *   The form array.
   * @param \Drupal\Core\Form\FormStateInterface $form_state
   *   The form state object.
   */
  public function redirectAddResource(array $form, FormStateInterface $form_state) {
    $entity = $form_state->getFormObject()->getEntity();
    if ($entity && $entity instanceof EkanDatasetEntity) {
      $form_state->setRedirect('ekan_core.dataset.add_resource', ['dataset' => $entity->id()]);
    }
  }

  /**
   * {@inheritdoc}
   */
  public function save(array $form, FormStateInterface $form_state) {
    parent::save($form, $form_state);
    if ($this->entity->id() && $this->entity->access('view')) {
      $form_state->setRedirect('entity.dataset.canonical', ['dataset' => $this->entity->id()]);
    }

    // Set status message.
    $insert = $this->entity->isNew();
    $this->entity->save();
    $context = [
      '@type' => $this->entity->bundle(),
      '%info' => $this->entity->label(),
    ];
    $logger = $this->logger('content');
    $t_args = ['@type' => 'Dataset', '%info' => $this->entity->label()];

    if ($insert) {
      $logger->notice('@type: added %info.', $context);
      $this->messenger()->addStatus($this->t('@type %info has been created.', $t_args));
    }
    else {
      $logger->notice('@type: updated %info.', $context);
      $this->messenger()->addStatus($this->t('@type %info has been updated.', $t_args));
    }

    if ($this->entity->id()) {
      $form_state->setValue('id', $this->entity->id());
      $form_state->set('id', $this->entity->id());
    }
    else {
      // In the unlikely case something went wrong on save, the entity will be
      // rebuilt and entity form redisplayed.
      $this->messenger()->addStatus($this->t('The entity could not be saved.'), 'error');
      $form_state->setRebuild();
    }
  }

}

<?php

namespace Drupal\ekan_core\Entity\Form;

use Drupal\Core\Entity\ContentEntityConfirmFormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Url;

/**
 * Provides a form for deleting a content_entity_example entity.
 *
 * @ingroup ekan_core
 */
class EkanEntityDeleteForm extends ContentEntityConfirmFormBase {

  /**
   * {@inheritdoc}
   */
  public function getQuestion() {
    return $this->t('Are you sure you want to delete entity %name?', ['%name' => $this->entity->label()]);
  }

  /**
   * {@inheritdoc}
   *
   * If the delete command is canceled, return to the contact list.
   */
  public function getCancelUrl() {
    $resource = \Drupal::routeMatch()->getParameter('resource');
    $dataset = \Drupal::routeMatch()->getParameter('dataset');
    if ($resource) {
      return new Url('entity.resource.canonical', ['resource' => $resource->id()]);
    }
    elseif ($dataset) {
      return new Url('entity.resource.canonical', ['resource' => $dataset->id()]);
    }
    // Otherwise fallback to front.
    else {
      return new Url('<front>');
    }
  }

  /**
   * {@inheritdoc}
   */
  public function getConfirmText() {
    return $this->t('Delete');
  }

  /**
   * {@inheritdoc}
   *
   * Delete the entity and log the event. logger() replaces the watchdog.
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $entity = $this->getEntity();
    $entity->delete();

    $this->logger('ekan_core')->notice('deleted %title.',
      [
        '%title' => $this->entity->label(),
      ]);

    // Set status message.
    $this->messenger()->addStatus($this->t('The content %label has been deleted.', ['%label' => $this->entity->label()]));

    // Redirect to term list after delete.
    $form_state->setRedirect('<front>');
  }

}

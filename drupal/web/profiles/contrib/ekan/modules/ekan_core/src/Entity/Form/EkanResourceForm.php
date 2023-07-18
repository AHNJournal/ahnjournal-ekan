<?php

namespace Drupal\ekan_core\Entity\Form;

use Drupal\Core\Entity\EntityInterface;
use Drupal\Core\Form\FormStateInterface;
use Drupal\ekan_core\Entity\EkanResourceEntity;

/**
 * Form controller for the resource entity add / edit forms.
 *
 * @ingroup ekan_core
 */
class EkanResourceForm extends EkanEntityFormBase {

  /**
   * {@inheritDoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $form = parent::buildForm($form, $form_state);
    $form['resource_format']['widget'][0]['target_id']['#required'] = FALSE;

    $term_storage = \Drupal::entityTypeManager()->getStorage('taxonomy_term');
    $term_ids = \Drupal::entityQuery('taxonomy_term')
      ->condition('vid', 'format')
      ->execute();

    // Add the resource format terms into drupalSettings so we can detect the
    // format client side.
    $terms = $term_storage->loadMultiple($term_ids);
    $resource_formats = [];
    foreach ($terms as $term) {
      if (is_array($term->field_mime_type->getValue()) && count($term->field_mime_type->getValue()) > 0) {
        foreach ($term->field_mime_type->getValue() as $mime) {
          $resource_formats[] = [
            'name' => $term->label(),
            'id' => $term->id(),
            'mime' => $mime['value'],
          ];
        }

      }
    }

    $form['upload']['#attached']['library'][] = 'ekan_core/detectformat';
    $form['#attached']['drupalSettings']['resourceFormats'] = $resource_formats;
    return $form;
  }

  /**
   * Returns an array of supported actions for the current entity form.
   */
  protected function actions(array $form, FormStateInterface $form_state) {
    $actions = parent::actions($form, $form_state);

    // Only add these extra actions if we're in the flow
    // of adding a resource from a dataset context. Not when simply
    // editing an existing resource.
    $dataset_id = \Drupal::routeMatch()->getRawParameter('dataset');
    if ($dataset_id) {
      $actions['save_add_additional_data'] = [
        '#attributes' => [
          'class' => ['button'],
        ],
        '#type' => 'submit',
        '#value' => t('Next: Additional Dataset Info'),
        '#submit' => ['::submitForm', '::save', '::redirectAdditionalData'],
      ];

      $actions['save_add_another'] = [
        '#attributes' => [
          'class' => ['button'],
        ],
        '#type' => 'submit',
        '#value' => t('Save and Add Another'),
        '#submit' => ['::submitForm', '::save', '::redirectAddAnother'],
      ];
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
  public function redirectAdditionalData(array $form, FormStateInterface $form_state) {
    $dataset_id = \Drupal::routeMatch()->getRawParameter('dataset');
    $form_state->setRedirect('ekan_core.dataset.additional_data', ['dataset' => $dataset_id]);
  }

  /**
   * Implements add_another_form_submit().
   */
  public function redirectAddAnother(&$form, FormStateInterface $form_state) {
    $route_name = \Drupal::routeMatch()->getRouteName();
    $dataset_id = \Drupal::routeMatch()->getRawParameter('dataset');
    $form_state->setRedirect($route_name, ['dataset' => $dataset_id]);
  }

  /**
   * {@inheritDoc}
   */
  protected function copyFormValuesToEntity(EntityInterface $entity, array $form, FormStateInterface $form_state) {
    parent::copyFormValuesToEntity($entity, $form, $form_state);
    assert($entity instanceof EkanResourceEntity);
    if ($entity->get('resource_format')->isEmpty()) {
      if ($format = $entity->detectResourceFormat()) {
        $entity->set('resource_format', $format);
      }
    }
  }

  /**
   * {@inheritDoc}
   */
  public function save(array $form, FormStateInterface $form_state) {
    parent::save($form, $form_state);
    if ($this->entity->id() && $this->entity->access('view')) {
      $form_state->setRedirect('entity.resource.canonical', ['resource' => $this->entity->id()]);
    }

    // Set status message.
    $insert = $this->entity->isNew();
    $this->entity->save();
    $context = [
      '@type' => $this->entity->bundle(),
      '%info' => $this->entity->label(),
    ];
    $logger = $this->logger('content');
    $t_args = ['@type' => 'Resource', '%info' => $this->entity->label()];

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

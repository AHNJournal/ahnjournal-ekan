<?php

namespace Drupal\ekan_harvest\Entity\Form;

use Drupal\Core\Entity\ContentEntityForm;
use Drupal\Core\Form\FormStateInterface;
use Drupal\ekan_harvest\Entity\EkanHarvestSource;

/**
 * Form controller for the resource entity add / edit forms.
 *
 * @ingroup ekan_harvest
 */
class EkanHarvestSourceForm extends ContentEntityForm {

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $form = parent::buildForm($form, $form_state);
    $entity = $this->getEntity();
    $form['machine_name']['widget'][0]['value'] = [
      '#type' => 'machine_name',
      '#default_value' => $entity->get('machine_name')->value,
      '#maxlength' => EkanHarvestSource::MACHINE_NAME_MAX_LENGTH,
      '#machine_name' => [
        'exists' => [$this, 'machineNameExists'],
        'source' => ['title[0][value]'],
      ],
      '#description' => t('A unique machine-readable name for this content type. It must only contain lowercase letters, numbers, and underscores.'),
    ];

    return $form;
  }

  /**
   * Callback to validate machine name.
   */
  public static function machineNameExists($machine_name) {
    $exists = \Drupal::entityTypeManager()->getStorage('harvest_source')->loadByProperties(['machine_name' => $machine_name]);
    return !empty($exists);
  }

}

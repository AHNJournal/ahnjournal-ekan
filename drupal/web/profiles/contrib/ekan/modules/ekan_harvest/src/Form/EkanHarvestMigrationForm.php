<?php

namespace Drupal\ekan_harvest\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\ekan_harvest\Entity\EkanHarvestSource;

/**
 * Form class for showing the harvester preview.
 */
class EkanHarvestMigrationForm extends FormBase {

  /**
   * {@inheritDoc}
   */
  public function getFormId() {
    return 'ekan-harvest-migration-form';
  }

  /**
   * {@inheritDoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state, EkanHarvestSource $harvest_source = NULL) {
    $form['#harvest_source'] = $harvest_source;
    $form['harvest_now'] = [
      '#type' => 'submit',
      '#value' => t('Harvest Now'),
    ];
    return $form;
  }

  /**
   * {@inheritDoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {

    /** @var \Drupal\ekan_harvest\Entity\EkanHarvestSource $harvest_source */
    $harvest_source = $form['#harvest_source'];
    $options = [
    // 'limit' => 100,
      // 'update' => TRUE,
      // 'force' => 1,
    ];
    $harvest_source->doHarvest($options);
  }

}

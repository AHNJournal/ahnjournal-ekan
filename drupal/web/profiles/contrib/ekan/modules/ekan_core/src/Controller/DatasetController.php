<?php

namespace Drupal\ekan_core\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\ekan_core\Entity\EkanDatasetEntity;

/**
 * Dataset form controller.
 */
class DatasetController extends ControllerBase {

  /**
   * Returns Dataset Step 1 form to create dataset.
   */
  public function createDatasetStep1() {
    $dataset = $this->entityTypeManager()->getStorage('dataset')->create();

    // Creating a new dataset has to be on step_1.
    $form = $this->entityFormBuilder()
      ->getForm($dataset, 'add_dataset');

    return $form;
  }

  /**
   * Dataset additional info form as edit form.
   */
  public function datasetAddAdditionalData(EkanDatasetEntity $dataset) {
    // Add additional data step 3.
    $form = $this->entityFormBuilder()
      ->getForm($dataset, 'additional_info');
    return $form;
  }

  /**
   * Add resources form with dataset pre-filled.
   */
  public function datasetAddResource(EkanDatasetEntity $dataset) {
    $resource = $this->entityTypeManager()->getStorage('resource')->create(
      ['dataset_ref' => $dataset->id()]
    );
    $form_state_additions = [];
    // Add resource with dataset.
    $form = $this->entityFormBuilder()
      ->getForm($resource, 'default', $form_state_additions);
    return $form;
  }

}

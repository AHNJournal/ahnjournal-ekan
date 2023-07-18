<?php

namespace Drupal\ekan_visuals\Plugin\EkanVisualisation;

use Drupal\Core\Form\FormStateInterface;
use Drupal\ekan_core\Entity\EkanResourceEntity;
use Drupal\file\FileInterface;

/**
 * A Data table visualisation.
 *
 * @EkanVisualisation(
 *   id = "basic_pie_chart",
 *   label = @Translation("Basic Pie Chart"),
 *   formats = {
 *   "csv"
 *   }
 * )
 */
class BasicPieChart extends EkanVisualisationBase {

  /**
   * {@inheritdoc}
   */
  public static function defaultSettings() {
    return [
      'labels_column' => '1',
      'values_column' => '2',
      'has_header' => FALSE,
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function settingsForm(array $form, FormStateInterface $form_state) {
    $elements = parent::settingsForm($form, $form_state);
    $elements['labels_column'] = [
      '#title' => t('Labels column'),
      '#type' => 'number',
      '#description' => t('Enter the column number of data to use for labels, where first column is 1.'),
      '#min' => 1,
      '#max' => 50,
      '#required' => TRUE,
      '#default_value' => '1',
    ];
    $elements['values_column'] = [
      '#title' => t('Values column'),
      '#type' => 'number',
      '#description' => t('Enter the column number of data to use for values, where first column is 1.'),
      '#min' => 1,
      '#max' => 50,
      '#required' => TRUE,
      '#default_value' => '1',
    ];
    $elements['has_header'] = [
      '#title' => t('CSV file has header row'),
      '#type' => 'checkbox',
      '#description' => t("Tick if first row is header, so it won't be included in the chart."),
      '#default_value' => FALSE,
      '#required' => FALSE,
    ];

    return $elements;
  }

  /**
   * {@inheritdoc}
   */
  public function visualise(EkanResourceEntity $resource, array $settings = []) {
    $elements = NULL;
    if (!$resource->get('upload')->getEntity()) {
      return NULL;
    }
    if (!$resource->get('visualisation')->value) {
      return NULL;
    }
    /** @var \Drupal\taxonomy\TermInterface $format */
    $format = $resource->get('resource_format')->entity;
    if ($format->getName() == 'csv') {
      /** @var \Drupal\file\Entity\File $file */
      $file = $resource->get('upload')->entity;
      if ($file instanceof FileInterface && $file->getMimeType() == 'text/csv') {
        $filePath = \Drupal::service('file_system')->realpath($file->get('uri')->value);
        $data = $this->readCsv($filePath, $settings);
        $id = 'basic-pie-chart-' . $resource->id();
        $elements[$id] = [
          '#type' => 'container',
          '#attributes' => [
            'class' => [$id],
            'id' => [$id],
            'style' => 'height: 650px;',
          ],
          '#attached' => [
            'library' => ['ekan_visuals/basic-pie-chart'],
            'drupalSettings' => [
              'pie_chart' => [
                $id => [
                  'data' => $data,
                  'id' => $id,
                ],
              ],
            ],
          ],
        ];
      }
    }

    return $elements;
  }

  /**
   * Helper function to read csv and format data for bar chart.
   */
  public function readCsv($filePath, $settings) {
    $rowcount = 0;
    $table_data = [];
    $formatted_data = [];
    $handle = fopen($filePath, "r");
    while ($csvcontents = fgetcsv($handle, 0)) {
      $table_data[$rowcount] = [];
      $columnindex = 0;
      foreach ($csvcontents as $column) {
        $table_data[$rowcount][$columnindex] = $column;
        $columnindex++;
      }
      $rowcount++;
    }
    if ($settings['has_header']) {
      unset($table_data[0]);
    }

    foreach ($table_data as $data) {
      $formatted_data[] = [
        'value' => $data[$settings['values_column'] - 1],
        'name' => $data[$settings['labels_column'] - 1],
      ];
    }
    fclose($handle);
    return $formatted_data;
  }

}

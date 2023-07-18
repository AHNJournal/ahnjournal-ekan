<?php

namespace Drupal\ekan_visuals\Plugin\EkanVisualisation;

use Drupal\Core\Form\FormStateInterface;
use Drupal\ekan_core\Entity\EkanResourceEntity;
use Drupal\file\FileInterface;
use Drupal\leaflet\LeafletSettingsElementsTrait;

/**
 * A CSV map visualisation based on latitude and longitude columns from CSV.
 *
 * @EkanVisualisation(
 *   id = "csv_map",
 *   label = @Translation("CSV Map"),
 *   formats = {
 *   "csv"
 *   }
 * )
 */
class CsvMap extends EkanVisualisationBase {

  use LeafletSettingsElementsTrait;

  /**
   * {@inheritdoc}
   */
  public static function defaultSettings() {
    return [
      'lat_column' => '',
      'long_column' => '',
      'has_header' => FALSE,
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function settingsForm(array $form, FormStateInterface $form_state) {
    $elements = parent::settingsForm($form, $form_state);
    $elements['lat_column'] = [
      '#title' => t('Latitude column'),
      '#type' => 'number',
      '#description' => t('Enter the column number that represents latitude values, where first column is 1.'),
      '#min' => 1,
      '#max' => 50,
      '#default_value' => '',
    ];

    $elements['long_column'] = [
      '#title' => t('Longitude column'),
      '#type' => 'number',
      '#description' => t('Enter the column number that represents longitude values, where first column is 1.'),
      '#min' => 1,
      '#max' => 50,
      '#default_value' => '',
    ];
    $elements['has_header'] = [
      '#title' => t('CSV file has header row'),
      '#type' => 'checkbox',
      '#description' => t("Tick if first row is header."),
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
    /** @var \Drupal\leaflet\LeafletService $leaflet_service */
    $leaflet_service = \Drupal::service('leaflet.service');
    /** @var \Drupal\taxonomy\TermInterface $format */
    $format = $resource->get('resource_format')->entity;
    if ($format->getName() == 'csv') {
      /** @var \Drupal\file\Entity\File $file */
      $file = $resource->get('upload')->entity;
      if ($file instanceof FileInterface && $file->getMimeType() == 'text/csv') {
        $filePath = \Drupal::service('file_system')
          ->realpath($file->get('uri')->value);
        $data = $this->readCsv($filePath, $settings);
        $height = '400px';
        $id = 'visualisation-csv-leaflet-map-' . $resource->id();
        $elements = [
          '#type' => 'container',
          '#attributes' => [
            'class' => [$id],
            'id' => [$id],
            'style' => "height: $height;",
          ],
        ];
        $map = leaflet_map_get_info('OSM Mapnik');
        $map['id'] = $id;
        $map['geofield_cardinality'] = 1;
        $this->setAdditionalMapOptions($map, []);
        $features[] = [
          'type' => 'point',
          'group' => $data,
          'features' => array_values($data),
          'entity_id' => $resource->id(),
        ];
        $elements[$id] = $leaflet_service->leafletRenderMap($map, $features, $height);
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
    };
    $headers = [];
    if ($settings['has_header']) {
      $headers = $table_data[0];
      unset($table_data[0]);
    }

    foreach ($table_data as $delta => $data) {
      $pointOptions['optionA'] = 'optionValueA';
      $pointOptions['optionB'] = 'optionValueB';
      $formatted_data[$delta] = [
        'type' => 'point',
        'lat' => $data[$settings['lat_column'] - 1],
        'lon' => $data[$settings['long_column'] - 1],
      ];
      $popup_data = '';
      if ($headers) {
        foreach ($headers as $index => $header) {
          $popup_data .= "$header: $data[$index]";
          $popup_data .= '<br>';
        }
        $formatted_data[$delta]['popup'] = $popup_data;
      }
      else {
        foreach ($data as $index => $datum) {
          $row = $index + 1;
          $popup_data .= "Value $row: $data[$index]";
          $popup_data .= '<br>';
          $formatted_data[$delta]['popup'] = $popup_data;
        }
      }

    }
    fclose($handle);
    return $formatted_data;
  }

}

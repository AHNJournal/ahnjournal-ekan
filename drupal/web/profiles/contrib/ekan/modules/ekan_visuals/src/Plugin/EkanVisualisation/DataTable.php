<?php

namespace Drupal\ekan_visuals\Plugin\EkanVisualisation;

use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Link;
use Drupal\Core\Url;
use Drupal\ekan_core\Entity\EkanResourceEntity;
use Drupal\file\FileInterface;

/**
 * A Data table visualisation.
 *
 * @EkanVisualisation(
 *   id = "data_table",
 *   label = @Translation("Data Table"),
 *   formats = {
 *   "csv"
 *   }
 * )
 */
class DataTable extends EkanVisualisationBase {

  /**
   * {@inheritdoc}
   */
  public static function defaultSettings() {
    return [
      'csvfile_number_of_rows' => 50,
      'csvfile_formatter_has_header' => FALSE,
      'csvfile_formatter_separator' => ',',
      'csvfile_formatter_enclosure' => '"',
      'csvfile_formatter_escape' => '\\',
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function settingsForm(array $form, FormStateInterface $form_state) {
    $elements = parent::settingsForm($form, $form_state);

    $elements['csvfile_number_of_rows'] = [
      '#title' => t('Number of rows to display'),
      '#type' => 'number',
      '#description' => t('Leave empty to display all rows.'),
      '#min' => 1,
      '#max' => 5000,
      '#default_value' => '50',
    ];

    $elements['csvfile_formatter_has_header'] = [
      '#title' => t('CSV file has header row'),
      '#type' => 'checkbox',
      '#description' => t('Enable if the first row of the CSV file is a header row.'),
      '#default_value' => FALSE,
      '#required' => FALSE,
    ];

    $elements['csvfile_formatter_separator'] = [
      '#title' => t('CSV field separator'),
      '#description' => t('Character separating fields in a CSV row.'),
      '#type' => 'textfield',
      '#size' => 1,
      '#default_value' => ',',
      '#required' => TRUE,
    ];

    $elements['csvfile_formatter_enclosure'] = [
      '#title' => t('CSV field enclosure character'),
      '#description' => t('Character indicating an enclosed field in a CSV row.'),
      '#type' => 'textfield',
      '#size' => 1,
      '#default_value' => '"',
      '#required' => FALSE,
    ];

    $elements['csvfile_formatter_escape'] = [
      '#title' => t('CSV field escape character'),
      '#description' => t('Character indicating an escape sequence in a CSV row.'),
      '#type' => 'textfield',
      '#size' => 1,
      '#default_value' => '\\',
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
        $file_name = \Drupal::service('file_system')->realpath($file->get('uri')->value);
        $table_data = $this->readCsv($file_name, $settings);
        $elements[][] = $table_data;
      }
    }

    return $elements;
  }

  /**
   * Read a CSV file and convert to an HTML table render array.
   */
  private function readCsv($filePath, $settings) {
    $render_array = [];

    $fieldname = 'visusalisation-data-table';
    $header = $settings['csvfile_formatter_has_header'];
    $separator = empty($settings['csvfile_formatter_separator']) ? ',' : $settings['csvfile_formatter_separator'];
    $enclosure = empty($settings['csvfile_formatter_enclosure']) ? '"' : $settings['csvfile_formatter_enclosure'];
    $escape = empty($settings['csvfile_formatter_escape']) ? '\\' : $settings['csvfile_formatter_escape'];

    $table_data = [];
    $table_data['header'] = [];
    $table_data['rows'] = [];

    $handle = fopen($filePath, "r");

    $colcount = 0;
    if ($header) {
      // Read first row of CSV file as header row.
      $csvcontents = fgetcsv($handle, 0, $separator, $enclosure, $escape);
      foreach ($csvcontents as $headercolumn) {
        $table_data['header'][$colcount]['data'] = $this->processColumnData($headercolumn, $settings);
        $colcount++;
      }
    }

    // Create data rows.
    $rowcount = 0;
    while ($csvcontents = fgetcsv($handle, 0, $separator, $enclosure, $escape)) {
      if ($settings['csvfile_number_of_rows']) {
        if ($rowcount == $settings['csvfile_number_of_rows']) {
          break;
        }
      }
      $table_data['rows'][$rowcount]['data'] = [];
      $columnindex = 0;
      foreach ($csvcontents as $column) {
        $table_data['rows'][$rowcount]['data'][$columnindex] = $this->processColumnData($column, $settings);
        $columnindex++;
      }
      $rowcount++;
    }

    fclose($handle);

    // Build HTML Table render array.
    $render_array['#attributes']['id'] = $fieldname . '-csvfiletable';
    $render_array['#theme'] = 'table';
    $render_array['#attributes'] = [
      'class' => ['table-responsive'],
    ];
    if ($header) {
      $render_array['#header'] = $table_data['header'];
      $render_array['#header_columns'] = $colcount;
    }
    $render_array['#rows'] = $table_data['rows'];
    $render_array['#sticky'] = TRUE;
    $elements['container'] = [
      '#type' => 'container',
      '#attributes' => [
        'class' => ['visualisation table'],
        'style' => "max-width: 100rem; overflow-x:auto; max-height: 100rem;",
      ],
    ];
    $elements['container']['table'] = $render_array;

    return $elements;
  }

  /**
   * Process column items.
   */
  private function processColumnData($column_data, $settings) {
    $result = $column_data;

    if ($settings['csvfile_formatter_smart_urls']) {
      // Make links out of URLs in the CSV files.
      $matched = filter_var($column_data, FILTER_VALIDATE_URL);
      if ($matched !== FALSE) {
        $url = Url::fromUri($matched);
        $result = Link::fromTextAndUrl($matched, $url)->toString();
      }
      // Make links out of email addresses in the CSV files.
      $matched = filter_var($column_data, FILTER_VALIDATE_EMAIL);
      if ($matched !== FALSE) {
        $url = Url::fromUri('mailto:' . $matched);
        $result = Link::fromTextAndUrl($matched, $url)->toString();
      }
      // Bonus: Make links out of simple Markdown link syntax ([text](link))
      // in the CSV files.
      $matched = preg_match('/\[(.*)\]\((.*)\)/', $column_data, $matches);
      if ($matched != 0) {
        $url = Url::fromUri($matches[2]);
        $result = Link::fromTextAndUrl($matches[1], $url)->toString();
      }
    }

    return $result;
  }

}

<?php

namespace Drupal\ekan_harvest\Entity\Controller;

use Drupal\ekan_harvest\Entity\EkanHarvestSource;
use Drupal\Core\Controller\ControllerBase;
use Drupal\ekan_harvest\Form\EkanHarvestMigrationForm;
use Drupal\ekan_harvest\Plugin\migrate\source\HarvestSourceUrlInterface;
use Drupal\migrate\MigrateExecutable;
use Drupal\migrate\MigrateMessage;
use Drupal\migrate\Row;

/**
 * Controller for class for local taks of Harvest Source entities.
 */
class EkanHarvestSourceLocalTaskController extends ControllerBase {

  /**
   * Render the preview tab.
   */
  public function renderPreview(EkanHarvestSource $harvest_source) {
    $build = [];
    $build['#title'] = $harvest_source->label() . ' - Harvest Preview';

    $build['caption'] = [
      '#type' => 'html_tag',
      '#tag' => 'p',
      '#value' => t('Harvesting from this source as it is currently configured will
        import the datasets and resources listed below into this data portal. Click "Edit" above to
        change the source\'s configuration, click the "Harvest now" button at the
        bottom of the page to run the harvest immediately, or simply continue working
        and the harvest will be performed on schedule.'),
    ];

    $migrations = $harvest_source->getMigrations();

    foreach ($migrations as $migration) {
      $preview_rows = [];
      $source_count = 0;

      $message = new MigrateMessage();
      $executable = new MigrateExecutable($migration, $message);
      $source_plugin = $migration->getSourcePlugin();
      if ($source_plugin instanceof HarvestSourceUrlInterface) {
        $limit = 20;
        try {
          $source_count = $source_plugin->count();
          foreach ($source_plugin->previewRows() as $row) {

            if (count($preview_rows) >= $limit) {
              $preview_rows[] = ['...', '...'];
              break;
            }

            assert($row instanceof Row);
            $executable->processRow($row);
            $preview_rows[] = [
              $row->getDestinationProperty('uuid'),
              $row->getDestinationProperty('title'),
            ];
          }
        }
        catch (\Exception $ex) {
          \Drupal::messenger()->addError($ex->getMessage());
        }
      }

      $build[$migration->id()]['count'] = [
        '#type' => 'html_tag',
        '#tag' => 'p',
        '#value' => t('<strong>@label to be harvested:</strong> @count', [
          '@label' => $migration->getDestinationPlugin()->getPluginId(),
          '@count' => $source_count,
        ]),
      ];

      $build[$migration->id()]['preview_table'] = [
        '#type' => 'table',
        '#header' => [t('UUID'), t('Title')],
        '#rows' => $preview_rows,
      ];
    }

    $build['harvest_now'] = \Drupal::formBuilder()->getForm(EkanHarvestMigrationForm::class, $harvest_source);

    return $build;
  }

  /**
   * Render manage datasets tab.
   */
  public function renderManageDatasets(EkanHarvestSource $harvest_source) {
    return [
      '#type' => 'view',
      '#name' => 'harvest_source_manage_datasets',
      '#display_id' => 'default',
      '#arguments' => [$harvest_source->id()],
    ];
  }

  /**
   * Render events tab.
   */
  public function renderEvents(EkanHarvestSource $harvest_source) {
    return [
      '#type' => 'view',
      '#name' => 'harvest_source_events',
      '#display_id' => 'default',
      '#arguments' => [$harvest_source->id()],
    ];
  }

  /**
   * Render errors tab.
   */
  public function renderErrors(EkanHarvestSource $harvest_source) {
    $tables = [];
    foreach ($harvest_source->getMigrations() as $migration) {
      $message_rows = [];
      $header = [];
      foreach ($migration->getIdMap()->getMessages() as $message) {
        $row = (array) $message;
        unset($row['msgid'], $row['source_ids_hash'], $row['level']);
        if (empty($header)) {
          $header = array_keys($row);
        }
        $row['message'] = [
          'data' => [
            '#type' => 'html_tag',
            '#tag' => 'pre',
            '#value' => $row['message'],
          ],
        ];
        $message_rows[] = $row;
      }

      $tables[] = [
        '#caption' => $migration->id(),
        '#theme' => 'table',
        '#header' => $header,
        '#rows' => $message_rows,
      ];
    }

    return $tables;
  }

}

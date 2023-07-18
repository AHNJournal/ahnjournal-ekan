<?php

namespace Drupal\ekan_harvest;

use Drupal\ekan_harvest\Entity\EkanHarvestSource;
use Drupal\ekan_harvest\Entity\EkanHarvestSourceEvent;
use Drupal\migrate\MigrateMessageInterface;
use Drupal\migrate\Plugin\MigrationInterface;
use Drupal\migrate_tools\MigrateBatchExecutable;

/**
 * A migrate executable for performing ekan data harvesting.
 */
class EkanHarvestMigrateExecutable extends MigrateBatchExecutable {

  /**
   * The harvest_source entity.
   *
   * @var \Drupal\ekan_harvest\Entity\EkanHarvestSource|null
   */
  private $harvestSource;

  /**
   * {@inheritDoc}
   */
  public function __construct(MigrationInterface $migration, MigrateMessageInterface $message, array $options = [], EkanHarvestSource $harvest_source = NULL) {
    $this->harvestSource = $harvest_source;
    parent::__construct($migration, $message, $options);
  }

  /**
   * Perform the harvest in batches or in one go if CLI.
   */
  public function doHarvest() {

    if ($this->isCli()) {
      self::preHarvest($this->harvestSource->id(), $this->migration->id());
      $this->import();
      $context = [
        'results' => [
          $this->migration->id() => [
            '@numitems' => $this->getProcessedCount(),
            '@created' => $this->getCreatedCount(),
            '@updated' => $this->getUpdatedCount(),
            '@failures' => $this->getFailedCount(),
            '@ignored' => $this->getIgnoredCount(),
            '@name' => $this->migration->id(),
          ],
        ],
      ];
      self::postHarvest($this->harvestSource->id(), $this->migration->id(), $context);

    }
    else {
      $this->batchImport();
    }
  }

  /**
   * Helper to generate the batch operations for importing migrations.
   *
   * @param \Drupal\migrate\Plugin\MigrationInterface[] $migrations
   *   The migrations.
   * @param string $operation
   *   The batch operation to perform.
   * @param array $options
   *   The migration options.
   *
   * @return array
   *   The batch operations to perform.
   */
  protected function batchOperations(array $migrations, $operation, array $options = []) {
    $operations = [];
    foreach ($migrations as $id => $migration) {

      if (!empty($options['update'])) {
        $migration->getIdMap()->prepareUpdate();
      }

      if (!empty($options['force'])) {
        $migration->set('requirements', []);
      }
      else {
        $dependencies = $migration->getMigrationDependencies();
        if (!empty($dependencies['required'])) {
          $required_migrations = $this->migrationPluginManager->createInstances($dependencies['required']);
          // For dependent migrations will need to be migrate all items.
          $operations = array_merge($operations, $this->batchOperations($required_migrations, $operation, [
            'limit' => 0,
            'update' => $options['update'],
            'force' => $options['force'],
          ]));
        }
      }
      $operations[] = [
        self::class . '::preHarvest',
        [$this->harvestSource->id(), $migration->id()],
      ];

      $operations[] = [
        self::class . '::batchProcessImport',
        [$migration->id(), $options],
      ];

      $operations[] = [
        self::class . '::postHarvest',
        [$this->harvestSource->id(), $migration->id()],
      ];
    }

    return $operations;
  }

  /**
   * Setup batch operations for running the migration.
   */
  public function batchImport() {
    // Create the batch operations for each migration that needs to be executed.
    // This includes the migration for this executable, but also the dependent
    // migrations.
    $operations = $this->batchOperations([$this->migration], 'import', [
      'limit' => $this->itemLimit,
      'update' => $this->updateExistingRows,
      'force' => $this->checkDependencies,
    ]);

    if (count($operations) > 0) {
      $batch = [
        'migration_id' => $this->migration->id(),
        'operations' => $operations,
        'title' => $this->t('Migrating %migrate', ['%migrate' => $this->migration->label()]),
        'init_message' => $this->t('Start migrating %migrate', ['%migrate' => $this->migration->label()]),
        'progress_message' => $this->t('Migrating %migrate', ['%migrate' => $this->migration->label()]),
        'error_message' => $this->t('An error occurred while migrating %migrate.', ['%migrate' => $this->migration->label()]),
        'finished' => [self::class , 'batchFinishedImport'],
      ];
      batch_set($batch);
    }
  }

  /**
   * Sets up the harvest event values.
   */
  public static function preHarvest($harvest_source_id, $migration_id) {
    /** @var \Drupal\migrate\Plugin\MigrationPluginManager $migration_manager */
    $migration_manager = \Drupal::service('plugin.manager.migration');
    /** @var \Drupal\migrate\Plugin\MigrationInterface $migration */
    $migration = $migration_manager->createInstance($migration_id);

    // Clear existing errors.
    $migration->getIdMap()->clearMessages();

    // Save the event details.
    $key_value = \Drupal::keyValueExpirable('harvest_source_event');
    $key_value->set($harvest_source_id . ':' . $migration_id, [
      'harvest_source_id' => $harvest_source_id,
      'migration_id' => $migration_id,
      'timestamp' => time(),
    ]);
  }

  /**
   * Saved the harvest event.
   */
  public static function postHarvest($harvest_source_id, $migration_id, &$context) {
    $key_value = \Drupal::keyValueExpirable('harvest_source_event');
    $event_values = $key_value->get($harvest_source_id . ':' . $migration_id);
    if ($event_values) {
      $result = $context['results'][$migration_id];
      $event_values += [
        'duration' => time() - $event_values['timestamp'],
        'created' => $result['@created'],
        'updated' => $result['@updated'],
        'failed' => $result['@failures'],
        'orphaned' => NULL,
        'unchanged' => $result['@ignored'],
        'status' => 1,
      ];
      $event = EkanHarvestSourceEvent::create($event_values);
      $event->save();
      $key_value->delete($harvest_source_id . ':' . $migration_id);
    }
  }

}

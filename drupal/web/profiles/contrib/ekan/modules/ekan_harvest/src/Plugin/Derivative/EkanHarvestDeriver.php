<?php

namespace Drupal\ekan_harvest\Plugin\Derivative;

use Drupal\Component\Plugin\Derivative\DeriverBase;
use Drupal\Component\Utility\NestedArray;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Plugin\Discovery\ContainerDeriverInterface;
use Drupal\ekan_harvest\EkanHarvesterTypeManager;
use Drupal\migrate\Plugin\MigrationPluginManagerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Deriver to create a migration for each Ekan harvest_source entity.
 */
class EkanHarvestDeriver extends DeriverBase implements ContainerDeriverInterface {

  /**
   * Harvester Type Manager.
   *
   * @var \Drupal\ekan_harvest\EkanHarvesterTypeManager
   */
  private $harvesterTypeManager;

  /**
   * Migration Manager.
   *
   * @var \Drupal\migrate\Plugin\MigrationPluginManagerInterface
   */
  private $migrationManager;

  /**
   * Entity Type Manager.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  private $entityTypeManager;

  /**
   * Constructor method.
   */
  public function __construct(EkanHarvesterTypeManager $harvester_type_manager, MigrationPluginManagerInterface $migrtaion_manager, EntityTypeManagerInterface $entity_type_manager) {
    $this->harvesterTypeManager = $harvester_type_manager;
    $this->migrationManager = $migrtaion_manager;
    $this->entityTypeManager = $entity_type_manager;
  }

  /**
   * {@inheritDoc}
   */
  public static function create(ContainerInterface $container, $base_plugin_id) {
    return new static(
      $container->get('plugin.manager.ekan_harvester_type'),
      $container->get('plugin.manager.migration'),
      $container->get('entity_type.manager')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function getDerivativeDefinitions($base_plugin_definition) {

    /** @var \Drupal\ekan_harvest\Entity\EkanHarvestSource $harvest_source */
    foreach ($this->entityTypeManager->getStorage('harvest_source')->loadByProperties(['status' => 1]) as $harvest_source) {
      $machine_name = $harvest_source->get('machine_name')->getString();
      $url = $harvest_source->get('uri')->getString();

      /** @var \Drupal\ekan_harvest\Plugin\EkanHarvesterType\EkanHarvesterTypeInterface $harvester_type_plugin */
      $harvester_type_plugin = $this->harvesterTypeManager->createInstance($harvest_source->get('type')->value);
      $harvester_type_plugin->setHarvestSource($harvest_source);

      foreach ($harvester_type_plugin->getMigrationConfigs() as $id => $migration_config) {
        $migration_label = $harvest_source->label();
        if (!empty($migration_config['label'])) {
          $migration_label .= " ({$migration_config['label']})";
        }

        $default_config = [
          'label' => $migration_label,
          'harvest_source' => $harvest_source->id(),
          'source' => [
            'plugin' => 'harvest_source_url',
            'urls' => [$url],
            'harvest_filters' => $this->getKeyValueData($harvest_source->get('filters')),
            'harvest_excludes' => $this->getKeyValueData($harvest_source->get('excludes')),
            'harvest_overrides' => $this->getKeyValueData($harvest_source->get('overrides')),
            'harvest_defaults' => $this->getKeyValueData($harvest_source->get('defaults')),
            'harvest_source_id' => $harvest_source->id(),
          ],
          'process' => [
            'harvest_source_ref' => [
              'plugin' => 'default_value',
              'default_value' => $harvest_source->id(),
            ],
          ],
        ];

        $migration_config = NestedArray::mergeDeep($default_config, $migration_config);
        $migration = $this->migrationManager->createStubMigration($migration_config);
        $migration_id = $machine_name . ':' . $migration_config['destination']['plugin'];
        $this->derivatives[$migration_id] = $migration->getPluginDefinition();
      }
    }

    return $this->derivatives;
  }

  /**
   * Helper function to format the various key value field data items.
   */
  private function getKeyValueData(FieldItemListInterface $field_items) {
    $items = [];
    foreach ($field_items->getValue() as $item) {
      $items[] = ['path' => trim($item['key']), 'value' => trim($item['value'])];
    }
    return $items;
  }

}

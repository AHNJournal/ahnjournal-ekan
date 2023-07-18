<?php

namespace Drupal\ekan_harvest\Entity;

use Drupal\Core\Entity\EntityTypeInterface;
use Drupal\Core\Field\BaseFieldDefinition;
use Drupal\Core\Field\FieldStorageDefinitionInterface;
use Drupal\ekan_core\Entity\EkanEntityBase;
use Drupal\ekan_harvest\EkanHarvestMigrateExecutable;
use Drupal\migrate\Plugin\MigrationInterface;
use Drupal\migrate_tools\Drush9LogMigrateMessage;

/**
 * Defines the Ekan Harvest Source entity.
 *
 * @ingroup ekan_harvest
 *
 * @ContentEntityType(
 *   id = "harvest_source",
 *   label = @Translation("Harvest Source"),
 *   handlers = {
 *     "view_builder" = "Drupal\Core\Entity\EntityViewBuilder",
 *     "views_data" = "Drupal\ekan_harvest\EkanHarvestSourceViewsData",
 *     "form" = {
 *      "default" = "Drupal\ekan_harvest\Entity\Form\EkanHarvestSourceForm",
 *      "add" = "Drupal\ekan_harvest\Entity\Form\EkanHarvestSourceForm",
 *      "edit" = "Drupal\ekan_harvest\Entity\Form\EkanHarvestSourceForm",
 *      "delete" = "Drupal\ekan_core\Entity\Form\EkanEntityDeleteForm",
 *     },
 *     "access" = "\Drupal\entity\EntityAccessControlHandler",
 *     "query_access" = "\Drupal\entity\QueryAccess\QueryAccessHandler",
 *     "permission_provider" = "\Drupal\entity\EntityPermissionProvider",
 *     "route_provider" = {
 *       "html" = "Drupal\ekan_harvest\Entity\Routing\EkanHarvestSourceRouteProvider",
 *     },
 *     "local_task_provider" = {
 *       "default" = "\Drupal\ekan_harvest\Entity\Menu\EkanHarvestSourceLocalTaskProvider",
 *     },
 *   },
 *   base_table = "harvest_source",
 *   revision_table = "harvest_source_revision",
 *   translatable = FALSE,
 *   admin_permission = "administer harvest_source entities",
 *   entity_keys = {
 *     "id" = "id",
 *     "revision" = "vid",
 *     "uuid" = "uuid",
 *     "uid" = "uid",
 *     "label" = "title",
 *     "langcode" = "langcode",
 *     "published" = "status",
 *   },
 *   revision_metadata_keys = {
 *     "revision_user" = "revision_user",
 *     "revision_created" = "revision_created",
 *     "revision_log_message" = "revision_log_message",
 *   },
 *  links = {
 *    "add-form" = "/harvest_source/add",
 *    "canonical" = "/harvest_source/{harvest_source}",
 *    "edit-form" = "/harvest_source/{harvest_source}/edit",
 *    "delete-form" = "/harvest_source/{harvest_source}/delete",
 *    "harvest-events" = "/harvest_source/{harvest_source}/harvest-events",
 *    "harvest-errors" = "/harvest_source/{harvest_source}/harvest-errors",
 *    "harvest-manage-datasets" = "/harvest_source/{harvest_source}/harvest-manage-datasets",
 *   },
 *   field_ui_base_route = "entity.harvest_source.edit_form",
 * )
 */
class EkanHarvestSource extends EkanEntityBase {

  const MACHINE_NAME_MAX_LENGTH = 26;

  /**
   * {@inheritdoc}
   */
  public static function baseFieldDefinitions(EntityTypeInterface $entity_type) {
    /** @var \Drupal\Core\Field\BaseFieldDefinition[] $fields */
    $fields = parent::baseFieldDefinitions($entity_type);

    $w = 0;

    $fields['title'] = BaseFieldDefinition::create('string')
      ->setLabel(t('Title'))
      ->setRequired(TRUE)
      ->setSetting('max_length', 255)
      ->setDisplayOptions('view', [
        'label' => 'hidden',
        'type' => 'string',
      ])
      ->setDisplayOptions('form', [
        'type' => 'string_textfield',
        'weight' => $w++,
      ])
      ->setDisplayConfigurable('form', TRUE);

    // @todo Machine name widget.
    $fields['machine_name'] = BaseFieldDefinition::create('string')
      ->setLabel(t('Machine Name'))
      ->setRequired(TRUE)
      ->setSetting('max_length', self::MACHINE_NAME_MAX_LENGTH)
      ->setTranslatable(FALSE)
      ->setRevisionable(FALSE)
      ->setDisplayOptions('form', [
        'type' => 'string_textfield',
        'weight' => $w++,
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    $fields['type'] = BaseFieldDefinition::create('list_string')
      ->setLabel(t('Type'))
      ->setRequired(TRUE)
      ->setSetting('allowed_values_function', self::class . '::harvesterTypes')
      ->setTranslatable(FALSE)
      ->setDisplayOptions('form', [
        'type' => 'options_select',
        'weight' => $w++,
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    $fields['uri'] = BaseFieldDefinition::create('string')
      ->setLabel(t('URI'))
      ->setRequired(TRUE)
      ->setTranslatable(FALSE)
      ->setDisplayOptions('form', [
        'type' => 'text_textfield',
        'weight' => $w++,
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    $fields['description'] = BaseFieldDefinition::create('text_long')
      ->setLabel(t('Description'))
      ->setDisplayOptions('view', [
        'label' => 'hidden',
        'type' => 'text_default',
      ])
      ->setDisplayOptions('form', [
        'type' => 'text_textfield',
        'weight' => $w++,
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    $fields['filters'] = BaseFieldDefinition::create('key_value')->setLabel(t("Filters"))
      ->setCardinality(FieldStorageDefinitionInterface::CARDINALITY_UNLIMITED)
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayOptions('form', [
        'type' => 'key_value_textfield',
        'settings' => [
          'key_label' => t('Path'),
          'key_placeholder' => 'path.to.the.0.value',
          'description_enabled' => FALSE,
        ],
        'weight' => $w++,
      ])
      ->setDisplayConfigurable('view', TRUE);

    $fields['excludes'] = BaseFieldDefinition::create('key_value')->setLabel(t("Excludes"))
      ->setCardinality(FieldStorageDefinitionInterface::CARDINALITY_UNLIMITED)
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayOptions('form', [
        'type' => 'key_value_textfield',
        'settings' => [
          'key_label' => t('Path'),
          'key_placeholder' => 'path.to.the.0.value',
          'description_enabled' => FALSE,
        ],
        'weight' => $w++,
      ])
      ->setDisplayConfigurable('view', TRUE);

    $fields['overrides'] = BaseFieldDefinition::create('key_value')->setLabel(t("Overrides"))
      ->setCardinality(FieldStorageDefinitionInterface::CARDINALITY_UNLIMITED)
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayOptions('form', [
        'type' => 'key_value_textfield',
        'settings' => [
          'key_label' => t('Path'),
          'key_placeholder' => 'path.to.the.0.value',
          'description_enabled' => FALSE,
        ],
        'weight' => $w++,
      ])
      ->setDisplayConfigurable('view', TRUE);

    $fields['defaults'] = BaseFieldDefinition::create('key_value')->setLabel(t("Defaults"))
      ->setCardinality(FieldStorageDefinitionInterface::CARDINALITY_UNLIMITED)
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayOptions('form', [
        'type' => 'key_value_textfield',
        'settings' => [
          'key_label' => t('Path'),
          'key_placeholder' => 'path.to.the.0.value',
          'description_enabled' => FALSE,
        ],
        'weight' => $w++,
      ])
      ->setDisplayConfigurable('view', TRUE);

    $fields['topics'] = BaseFieldDefinition::create('entity_reference')
      ->setRequired(FALSE)
      ->setCardinality(FieldStorageDefinitionInterface::CARDINALITY_UNLIMITED)
      ->setLabel(t('Topics'))
      ->setSetting('target_type', 'taxonomy_term')
      ->setSetting('handler', 'default')
      ->setSetting('handler_settings', ['target_bundles' => ['topics']])
      ->setDisplayOptions('view', [
        'label' => 'inline',
        'type' => 'default_formatter',
      ])
      ->setDisplayOptions('form', [
        'type' => 'entity_reference_autocomplete',
        'settings' => [
          'match_operator' => 'CONTAINS',
          'size' => '60',
          'autocomplete_type' => 'tags',
          'placeholder' => '',
        ],
        'weight' => $w++,
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    return $fields;

  }

  /**
   * Callback for harvester type dropdown.
   */
  public static function harvesterTypes() {
    $options = [];

    /** @var \Drupal\Component\Plugin\PluginManagerInterface $type */
    $type = \Drupal::service('plugin.manager.ekan_harvester_type');
    foreach ($type->getDefinitions() as $id => $definition) {
      $options[$id] = $definition['label'];
    }

    return $options;
  }

  /**
   * Get a the list of migrations used to for this harvest source.
   *
   * @return \Drupal\migrate\Plugin\MigrationInterface[]
   *   An array of migration plugin instances.
   *
   * @throws \Drupal\Component\Plugin\Exception\PluginException
   */
  public function getMigrations() {

    /** @var \Drupal\ekan_harvest\Plugin\EkanHarvesterType\EkanHarvesterTypeInterface $harvester_type_plugin */
    $harvester_type_plugin = \Drupal::service('plugin.manager.ekan_harvester_type')->createInstance($this->get('type')->value);
    $migration_ids = [];
    foreach ($harvester_type_plugin->getMigrationConfigs() as $id => $migration_config) {
      $migration_ids[] = 'ekan_harvest:' . $this->get('machine_name')->value . ':' . $migration_config['destination']['plugin'];
    }

    /** @var \Drupal\migrate\Plugin\MigrationPluginManager $migration_manager */
    $migration_manager = \Drupal::service('plugin.manager.migration');

    $migrations = [];
    foreach ($migration_ids as $migration_id) {
      /** @var \Drupal\migrate\Plugin\MigrationInterface $migration */
      $migration = $migration_manager->createInstance($migration_id, ['harvest_source_id' => $this->id()]);
      if ($migration) {
        $migrations[$migration_id] = $migration;
      }
    }

    return $migrations;
  }

  /**
   * Perform the actual harvest migration(s).
   */
  public function doHarvest($options = []) {
    foreach ($this->getMigrations() as $migration) {
      /** @var \Drupal\migrate\Plugin\MigrationInterface $migration */
      $migration->setStatus(MigrationInterface::STATUS_IDLE);
      $migrateMessage = new Drush9LogMigrateMessage(\Drupal::logger('ekan_harvest'));
      $options = [
        'execute-dependencies' => FALSE,
        // 'limit' => 10,
        // 'update' => TRUE,
        'force' => 1,
      ] + $options;

      $executable = new EkanHarvestMigrateExecutable($migration, $migrateMessage, $options, $this);
      $executable->doHarvest();
    }
  }

}

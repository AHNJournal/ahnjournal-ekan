<?php

namespace Drupal\ekan_harvest\Entity;

use Drupal\Core\Entity\ContentEntityBase;
use Drupal\Core\Entity\EntityTypeInterface;
use Drupal\Core\Field\BaseFieldDefinition;

/**
 * Provides the Harvest Source Events entity.
 *
 * @ContentEntityType(
 *   id = "harvest_source_event",
 *   label = "Harvest Source Event",
 *   handlers = {
 *     "views_data" = "Drupal\entity\EntityViewsData",
 *   },
 *   entity_keys = {
 *    "id" = "id",
 *   },
 * )
 */
class EkanHarvestSourceEvent extends ContentEntityBase implements EkanHarvestSourceEventInterface {

  /**
   * {@inheritdoc}
   */
  public static function baseFieldDefinitions(EntityTypeInterface $entity_type) {
    $fields = parent::baseFieldDefinitions($entity_type);
    $fields['harvest_source_id'] = BaseFieldDefinition::create('entity_reference')
      ->setLabel('Harvest Source Entity')
      ->setSetting('target_type', 'harvest_source')
      ->setSetting('handler', 'default');

    $fields['migration_id'] = BaseFieldDefinition::create('string')
      ->setLabel('Migration Id');
    $fields['timestamp'] = BaseFieldDefinition::create('timestamp')
      ->setLabel('Timestamp Started');
    $fields['duration'] = BaseFieldDefinition::create('integer')
      ->setLabel('Duration');
    $fields['status'] = BaseFieldDefinition::create('integer')
      ->setLabel('Status');
    $fields['created'] = BaseFieldDefinition::create('integer')
      ->setLabel('Created');
    $fields['updated'] = BaseFieldDefinition::create('integer')
      ->setLabel('Updated');
    $fields['failed'] = BaseFieldDefinition::create('integer')
      ->setLabel('Failed');
    $fields['orphaned'] = BaseFieldDefinition::create('integer')
      ->setLabel('Orphaned');
    $fields['unchanged'] = BaseFieldDefinition::create('integer')
      ->setLabel('Unchanged');
    return $fields;
  }

}

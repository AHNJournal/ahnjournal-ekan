<?php

namespace Drupal\ekan_migrate\Plugin\migrate\source;

use Drupal\node\Plugin\migrate\source\d7\Node;

/**
 * Drupal 7 node source from database.
 *
 * @MigrateSource(
 *   id = "d7kan_dataset",
 *   source_module = "node"
 * )
 */
class DkanDataset extends Node {

  /**
   * {@inheritdoc}
   */
  public function query() {
    $query = parent::query();
    $query->condition('n.type', 'dataset');
    $query->leftJoin('node', 'node_base', 'n.nid = node_base.nid');
    $query->addField('node_base', 'uuid');
    return $query;
  }

  /**
   * {@inheritdoc}
   */
  public function fields() {
    $fields = parent::fields();
    $fields['uuid'] = $this->t('UUID');
    return $fields;
  }

  /**
   * {@inheritDoc}
   */
  protected function getFieldValues($entity_type, $field, $entity_id, $revision_id = NULL, $language = NULL) {
    $values = parent::getFieldValues($entity_type, $field, $entity_id, $revision_id, $language);
    if ($field == 'og_group_ref') {
      $query = $this->select('og_membership', 'ogm')
        ->fields(NULL, ['gid'])
        ->condition('entity_type', $entity_type)
        ->condition('field_name', $field)
        ->condition('etid', $entity_id)
        ->condition('type', 'og_membership_type_default')
        ->condition('state', 1);
      $values = array_values($query->execute()->fetchAllKeyed(0, 0));
    }
    return $values;
  }

}

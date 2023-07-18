<?php

namespace Drupal\ekan_migrate\Plugin\migrate\source;

use Drupal\migrate\Row;
use Drupal\user\Plugin\migrate\source\d7\User;

/**
 * Drupal 7 user source from database.
 *
 * @MigrateSource(
 *   id = "d7kan_user",
 *   source_module = "user"
 * )
 */
class DkanUser extends User {

  /**
   * {@inheritdoc}
   */
  public function fields() {
    $fields = parent::fields();
    $fields['role_names'] = $this->t('Role Names');
    return $fields;
  }

  /**
   * {@inheritdoc}
   */
  public function prepareRow(Row $row) {
    parent::prepareRow($row);
    $rids = $row->getSourceProperty('roles');
    $role_names = [];
    if ($rids) {
      $role_names = $this->select('role', 'r')
        ->fields('r', ['name'])
        ->condition('rid', $rids, 'IN')
        ->execute()
        ->fetchAllKeyed(0, 0);
    }
    $row->setSourceProperty('role_names', $role_names);
  }

}

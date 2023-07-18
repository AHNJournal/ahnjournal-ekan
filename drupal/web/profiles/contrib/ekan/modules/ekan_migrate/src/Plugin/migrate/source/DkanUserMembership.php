<?php

namespace Drupal\ekan_migrate\Plugin\migrate\source;

use Drupal\migrate\Plugin\migrate\source\SqlBase;
use Drupal\migrate\Row;

/**
 * Source plugin for retrieving og group memberships.
 *
 * @MigrateSource(
 *   id = "d7kan_user_membership"
 * )
 */
class DkanUserMembership extends SqlBase {

  /**
   * {@inheritdoc}
   */
  public function query() {
    $query = $this->select('og_membership', 'ogm')
      ->condition('entity_type', 'user')
      ->condition('type', 'og_membership_type_default')
      ->condition('field_name', 'og_user_node');
    $query->addField('ogm', 'id', 'id');
    $query->addField('ogm', 'etid', 'uid');
    $query->addField('ogm', 'gid', 'group_id');
    return $query;
  }

  /**
   * {@inheritdoc}
   */
  public function prepareRow(Row $row) {
    parent::prepareRow($row);

    $uid = $row->getSourceProperty('uid');
    $gid = $row->get('group_id');

    $rids = $this->select('og_users_roles', 'ur')
      ->fields('ur', ['rid'])
      ->condition('uid', $uid)
      ->condition('gid', $gid)
      ->execute()->fetchAllKeyed(0, 0);

    if ($rids) {
      $role_names = $this->select('og_role', 'or')
        ->fields('or', ['name'])
        ->condition('rid', $rids)
        ->condition('name', ['member', 'non-member'], 'NOT IN')
        ->execute()->fetchAllKeyed(0, 0);
      $row->setSourceProperty('role_names', $role_names);
    }
  }

  /**
   * {@inheritdoc}
   */
  public function fields() {
    return [
      'id' => $this->t('Membership Id'),
      'uid' => $this->t('User Id'),
      'group_id' => $this->t('Group Id'),
      'group_roles' => $this->t('Group Roles'),
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function getIds() {
    return [
      'id' => [
        'type' => 'integer',
        'unsigned' => FALSE,
        'size' => 'big',
      ],
    ];
  }

}

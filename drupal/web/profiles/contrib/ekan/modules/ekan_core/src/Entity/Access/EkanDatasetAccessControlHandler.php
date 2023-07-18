<?php

namespace Drupal\ekan_core\Entity\Access;

use Drupal\Core\Access\AccessResult;
use Drupal\Core\Session\AccountInterface;
use Drupal\entity\EntityAccessControlHandler;

/**
 * Access control handler for dataset entities.
 */
class EkanDatasetAccessControlHandler extends EntityAccessControlHandler {

  /**
   * {@inheritDoc}
   */
  protected function checkCreateAccess(AccountInterface $account, array $context, $entity_bundle = NULL) {

    // Allow datasets to be created if you're a member of any publisher.
    /** @var \Drupal\group\GroupMembershipLoader $gml */
    $gml = \Drupal::service('group.membership_loader');
    foreach ($gml->loadByUser($account) as $group_membership) {
      if ($group_membership->hasPermission('create dataset entity')) {
        return AccessResult::allowed();
      }
    }

    return parent::checkCreateAccess($account, $context, $entity_bundle);
  }

}

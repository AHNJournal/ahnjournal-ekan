<?php

namespace Drupal\ekan_core\Entity\Access;

use Drupal\Core\Access\AccessResult;
use Drupal\Core\Session\AccountInterface;
use Drupal\ekan_core\Entity\EkanDatasetEntity;
use Drupal\entity\EntityAccessControlHandler;
use Drupal\group\Entity\GroupInterface;

/**
 * Access control handler for resource entities.
 */
class EkanResourceAccessControlHandler extends EntityAccessControlHandler {

  /**
   * {@inheritDoc}
   */
  protected function checkCreateAccess(AccountInterface $account, array $context, $entity_bundle = NULL) {

    // Allow resources to be created if it's related to a dataset which
    // the user has permission to add resources to.
    $dataset = \Drupal::routeMatch()->getParameter('dataset');
    if ($dataset instanceof EkanDatasetEntity) {
      /** @var \Drupal\Core\Field\Plugin\Field\FieldType\EntityReferenceItem $publisher */
      foreach ($dataset->get('publisher') as $publisher) {
        $group = $publisher->entity;
        // User can create resources in the same group as the dataset
        // AND they have edit access to that dataset.
        if ($group instanceof GroupInterface && $group->hasPermission('create resource entity', $account) && $dataset->access('update')) {
          return AccessResult::allowed();
        }
      }
    }

    return parent::checkCreateAccess($account, $context, $entity_bundle);
  }

}

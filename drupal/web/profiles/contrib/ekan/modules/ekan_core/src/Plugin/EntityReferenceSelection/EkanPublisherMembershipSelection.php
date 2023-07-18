<?php

namespace Drupal\ekan_core\Plugin\EntityReferenceSelection;

use Drupal\Core\Entity\EntityReferenceSelection\SelectionPluginBase;
use Drupal\group\Entity\Group;

/**
 * Provides specific access control for the node entity type.
 *
 * @EntityReferenceSelection(
 *   id = "ekan_publisher_memberships",
 *   group = "ekan_publisher_memberships",
 *   label = @Translation("Ekan Publishers with Membership"),
 *   entity_types = {"group"},
 *   weight = 0
 * )
 */
class EkanPublisherMembershipSelection extends SelectionPluginBase {

  /**
   * {@inheritDoc}
   */
  public function getReferenceableEntities($match = NULL, $match_operator = 'CONTAINS', $limit = 0) {
    $account = \Drupal::currentUser();
    $entities = ['publisher' => []];
    $ids = $this->buildEntityQuery($match, $match_operator)->execute();

    /** @var \Drupal\group\Entity\GroupInterface $group */
    foreach (Group::loadMultiple($ids) as $group) {
      if ($group->access('view') && $group->hasPermission('select group', $account)) {
        $entities['publisher'][$group->id()] = $group->label();
      }
    }

    return $entities;
  }

  /**
   * {@inheritDoc}
   */
  public function countReferenceableEntities($match = NULL, $match_operator = 'CONTAINS') {
    $query = $this->buildEntityQuery();
    return $query->count()->execute();
  }

  /**
   * {@inheritDoc}
   */
  public function validateReferenceableEntities(array $ids) {
    return $ids;
  }

  /**
   * Helper to build the entity query for listing publishers.
   */
  protected function buildEntityQuery($match = NULL, $match_operator = 'CONTAINS') {
    $query = \Drupal::entityTypeManager()->getStorage('group')->getQuery();
    $query->condition('type', 'publisher');
    if ($match) {
      $query->condition('label', $match, $match_operator);
    }
    $query->sort('label', 'ASC');
    return $query;
  }

}

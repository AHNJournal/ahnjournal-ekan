<?php

namespace Drupal\ekan_core\Plugin\views\field;

use Drupal\Core\Link;
use Drupal\Core\Url;
use Drupal\group\Entity\GroupContent;
use Drupal\group\Entity\GroupInterface;
use Drupal\user\UserInterface;
use Drupal\views\Plugin\views\field\FieldPluginBase;
use Drupal\views\ResultRow;

/**
 * Field handler to flag the node type.
 *
 * @ingroup views_field_handlers
 *
 * @ViewsField("manage_members_link")
 */
class ManageMembersLinkField extends FieldPluginBase {

  /**
   * The query function.
   *
   * @{inheritdoc}
   */
  public function query() {
    // Leave empty to avoid a query on this field.
  }

  /**
   * The render function.
   *
   * @{inheritdoc}
   */
  public function render(ResultRow $values) {
    $group = $values->_entity;
    $relations = $values->_relationship_entities;
    if ($group instanceof GroupInterface) {
      $gc = reset($relations);
      if (!$gc instanceof GroupContent) {
        return NULL;
      }
      $user = $gc->getEntity();
      if (!($user instanceof UserInterface)) {
        return NULL;
      }
      // Get group member from user.
      $member = $group->getMember($user);
      if ($member) {
        if ($member->hasPermission('administer members')) {
          $url = Url::fromRoute('view.group_members.page_1', [
            'group' => $group->id(),
          ], ['absolute' => TRUE]);

          $link = Link::fromTextAndUrl('Manage members ', $url)->toString();
          return $link;
        }
      }
    }
    return NULL;
  }

}

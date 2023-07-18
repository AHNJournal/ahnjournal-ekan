<?php

namespace Drupal\ekan_core\Entity;

use Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException;
use Drupal\Component\Plugin\Exception\PluginNotFoundException;
use Drupal\Core\Entity\EntityStorageException;

/**
 * Trait applies to resources and datasets to enable group synchronisation.
 */
trait EkanEntityGroupSynchronised {

  /**
   * {@inheritDoc}
   */
  public function groupSynchronise() {

    $group_content_plugin_id = NULL;

    /** @var \Drupal\group\Plugin\GroupContentEnablerManagerInterface $group_content_enabler_manager */
    $group_content_enabler_manager = \Drupal::service('plugin.manager.group_content_enabler');
    foreach ($group_content_enabler_manager->getDefinitions() as $plugin_id => $definition) {
      if ($definition['entity_type_id'] == $this->getEntityTypeId()) {
        // If the group enabled relates to a bundle and the bundle matches.
        // Or if the plugin is not related to a bundle.
        $plugin_bundle = $definition['entity_bundle'];
        if (!$plugin_bundle || $plugin_bundle == $this->bundle()) {
          $group_content_plugin_id = $plugin_id;
          break;
        }
      }
    }

    if (empty($group_content_plugin_id)) {
      return;
    }

    try {
      /** @var \Drupal\group\Entity\Storage\GroupContentStorageInterface $group_content_storage */
      $group_content_storage = \Drupal::entityTypeManager()->getStorage('group_content');
      $group_storage = \Drupal::entityTypeManager()->getStorage('group');
    }
    catch (InvalidPluginDefinitionException | PluginNotFoundException $ex) {
      watchdog_exception('ekan_core', $ex);
      return;
    }

    $add_group_ids = [];

    /** @var \Drupal\group\Entity\GroupInterface $group */
    foreach ($this->getGroups() as $group) {
      $add_group_ids[] = $group->id();
    }

    // Remove memberships that no longer apply.
    $current_memberships = $group_content_storage->loadByEntity($this);
    foreach ($current_memberships as $membership) {
      $group = $membership->getGroup();
      if (!$group || !in_array($group->id(), $add_group_ids)) {
        try {
          $membership->delete();
        }
        catch (EntityStorageException $ex) {
          watchdog_exception('ekan_core', $ex);
        }
      }
    }

    // Add new memberships.
    /** @var \Drupal\group\Entity\GroupInterface $group */
    foreach ($group_storage->loadMultiple($add_group_ids) as $group) {
      $memberships = $group->getContentByEntityId($group_content_plugin_id, $this->id());
      if (empty($memberships)) {
        $group->addContent($this, $group_content_plugin_id);
      }
    }
  }

}

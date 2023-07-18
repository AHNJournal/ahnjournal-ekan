<?php

namespace Drupal\ekan_core\Entity;

/**
 * Trait applies to resources and datasets to enable group synchronisation.
 */
interface EkanEntityGroupSynchronisedInterface {

  /**
   * Return the list of groups to use for syncing.
   */
  public function getGroups();

  /**
   * Add or removes an entity from groups derived from the dataset publishers.
   */
  public function groupSynchronise();

}

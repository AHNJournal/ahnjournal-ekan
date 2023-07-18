<?php

namespace Drupal\ekan_core\Entity;

use Drupal\Core\Entity\ContentEntityInterface;
use Drupal\Core\Entity\EntityChangedInterface;
use Drupal\Core\Entity\EntityPublishedInterface;
use Drupal\user\EntityOwnerInterface;

/**
 * Provides an interface for defining Ekan Core entities.
 *
 * @ingroup ekan_core
 */
interface EkanEntityInterface extends ContentEntityInterface, EntityChangedInterface, EntityPublishedInterface, EntityOwnerInterface {

  /**
   * Gets the Ekan custom entity creation timestamp.
   *
   * @return int
   *   The Ekan entity creation timestamp.
   */
  public function getCreatedTime();

  /**
   * Sets the Ekan custom entity creation timestamp.
   *
   * @param int $timestamp
   *   The Ekan entity creation timestamp.
   *
   * @return \Drupal\ekan_core\Entity\EkanEntityInterface
   *   The called EKAN entity.
   */
  public function setCreatedTime($timestamp);

}

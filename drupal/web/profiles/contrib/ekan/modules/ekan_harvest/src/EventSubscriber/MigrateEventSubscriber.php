<?php

namespace Drupal\ekan_harvest\EventSubscriber;

use Drupal\migrate\Event\MigrateEvents;
use Drupal\migrate\Event\MigrateRollbackEvent;
use Drupal\migrate\MigrateMessage;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

/**
 * Subscribers for Migration related events.
 */
class MigrateEventSubscriber implements EventSubscriberInterface {

  /**
   * {@inheritDoc}
   */
  public static function getSubscribedEvents() {
    return [
      MigrateEvents::PRE_ROLLBACK => ['preRollback'],
    ];
  }

  /**
   * When the migration rollback is about to start.
   */
  public function preRollback(MigrateRollbackEvent $event) {
    $migration = $event->getMigration();
    $migration->getBaseId();
    $message = new MigrateMessage();
    if (preg_match('/ekan_harvest:(\w+):entity:dataset/', $migration->id())) {
      $message = t("Rolling back a dataset migration may result in orphaned resources. Please consider also rolling back the resources. Ignore this message if resources have been rolled back.");
      \Drupal::logger('ekan_harvest')->warning($message);
    }
  }

}

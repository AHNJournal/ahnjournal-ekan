<?php

namespace Drupal\ekan_resource_thumb\Plugin\QueueWorker;

use Drupal\Core\Entity\EntityStorageInterface;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Drupal\Core\Queue\QueueWorkerBase;
use Drupal\ekan_core\Entity\EkanResourceEntity;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Executes thumbnail generation tasks.
 *
 * @QueueWorker(
 *   id = "ekan_resource_thumb_queue",
 *   title = @Translation("EKAN Resource PDF Thumbnail Queue"),
 *   cron = {"time" = 60}
 * )
 */
class ThumbnailQueueWorker extends QueueWorkerBase implements ContainerFactoryPluginInterface {

  /**
   * The resource storage.
   *
   * @var \Drupal\Core\Entity\EntityStorageInterface
   */
  protected $resourceStorage;

  /**
   * Construct the worker.
   *
   * @param \Drupal\Core\Entity\EntityStorageInterface $resource_storage
   *   The resource storage.
   */
  public function __construct(EntityStorageInterface $resource_storage) {
    $this->resourceStorage = $resource_storage;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $container->get('entity_type.manager')->getStorage('resource')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function processItem($data) {
    $revision_id = $this->resourceStorage->getLatestRevisionId($data['entity_id']);
    if ($entity = $this->resourceStorage->loadRevision($revision_id)) {
      if ($entity instanceof EkanResourceEntity) {
        // Use a static variable to protected against the item being queued
        // again when the entity is saved.
        $block_requeue = &drupal_static('ekan_resource_thumb_lock', FALSE);
        $block_requeue = TRUE;

        $source_field = 'upload';
        $dest_field = 'thumbnail';
        /** @var \Drupal\ekan_resource_thumb\FetchPdfThumbnailManager $thumbnail_service */
        $thumbnail_service = \Drupal::service("ekan_resource_thumb.fetch_pdf_thumbnail");
        $thumbnail_service->createThumbnail($entity, $source_field, $dest_field);

        drupal_static_reset('ekan_resource_thumb_lock');
      }
    }
  }

}

<?php

namespace Drupal\ekan_resource_thumb;

use Drupal\Core\Entity\EntityInterface;
use Drupal\Core\Entity\EntityTypeManager;
use Drupal\Core\File\FileSystem;
use Drupal\file\Entity\File;

/**
 * A Class FetchPdfThumbnailManager.
 *
 * @package Drupal\ekan_resource_thumb
 */
class FetchPdfThumbnailManager {

  /**
   * Logger.
   *
   * @var \Drupal\Core\Logger\LoggerChannel
   */
  protected $logger;

  /**
   * EntityTypeManager.
   *
   * @var \Drupal\Core\Entity\EntityTypeManager
   */
  protected $entityTypeManager;

  /**
   * FileSystem.
   *
   * @var \Drupal\Core\File\FileSystem
   */
  protected $fileSystem;

  /**
   * FetchPdfThumbnailManager constructor.
   *
   * @param \Drupal\Core\Entity\EntityTypeManager $entityTypeManager
   *   EntityTypeManager.
   * @param \Drupal\Core\File\FileSystem $fileSystem
   *   FileSystem.
   */
  public function __construct(EntityTypeManager $entityTypeManager, FileSystem $fileSystem) {
    $this->logger = \Drupal::logger("pdf_thumbnail_manager");
    $this->entityTypeManager = $entityTypeManager;
    $this->fileSystem = $fileSystem;
  }

  /**
   * Create pdf thumbnail.
   *
   * @param \Drupal\Core\Entity\EntityInterface $entity
   *   The entity interface.
   * @param string $sourceFieldname
   *   Source field name string.
   * @param string $fieldname
   *   Destination field name string.
   *
   * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException
   * @throws \Drupal\Component\Plugin\Exception\PluginNotFoundException
   * @throws \Drupal\Core\Entity\EntityStorageException
   */
  public function createThumbnail(EntityInterface $entity, $sourceFieldname, $fieldname) {
    if (!$entity || !$entity->{$sourceFieldname}[0]) {
      return;
    }
    $tid = $entity->{$sourceFieldname}[0]->target_id;
    if (!$tid) {
      return;
    }
    // Only proceed if the destination field is empty atm.
    if ($entity->get($fieldname)->isEmpty()) {

      /** @var \Drupal\entity\File $fileEntity */
      $fileEntity = $this->entityTypeManager->getStorage('file')->load($tid);

      if ($fileEntity && $fileEntity->getMimeType() != NULL && $fileEntity->getMimeType() == 'application/pdf') {
        $fileInfos = $this->getFileInfos($fileEntity);
        $isCreated = isset($fileInfos['source']) && isset($fileInfos['destination']) ? $this->generateImage($fileInfos['source'],
          $fileInfos['destination']) : '';
        $fileEntityId = $isCreated ? $this->createThumbnailFileEntity($fileEntity->getFileUri()) : FALSE;

        if ($fileEntityId) {
          $entity->set($fieldname, ['target_id' => $fileEntityId]);
          $entity->save();
        }

      }
    }
  }

  /**
   * Get file info.
   *
   * @param \Drupal\file\Entity\File $fileEntity
   *   The Entity.
   *
   * @return array
   *   Source and destination infos.
   */
  protected function getFileInfos(File $fileEntity) {
    $fileUri = $fileEntity->getFileUri();
    $sourcePath = $this->fileSystem->realpath($fileUri);
    $destinationPath = $sourcePath . '.jpeg';
    return ['source' => $sourcePath, 'destination' => $destinationPath];
  }

  /**
   * Generate an image from the PDF coverpage.
   *
   * @param string $source
   *   Source.
   * @param string $target
   *   Target.
   *
   * @return bool
   *   Boolean.
   */
  protected function generateImage($source, $target) {
    $resolution = 144;
    $file_format = 'jpg';
    $page = 1;

    try {
      if (!file_exists($source)) {
        throw new \Exception("File `{$source}` does not exist");
      }

      if (is_dir($target)) {
        $target = rtrim($target, '\/') . DIRECTORY_SEPARATOR . $page . '.' . $file_format;
      }

      $imagick = new \Imagick();

      $imagick->setResolution($resolution, $resolution);

      // Could set colorspace here for better colour support.
      // Otherwise sometimes there are odd colours coverpages, but it needs
      // a way to detect the correct colorspace.
      $imagick->setColorspace(\Imagick::COLORSPACE_RGB);
      $imagick->readImage(sprintf('%s[%s]', $source, $page - 1));

      // Flatten.
      $imagick = $imagick->mergeImageLayers(\Imagick::LAYERMETHOD_FLATTEN);

      $imagick->setFormat($file_format);
      return file_put_contents($target, $imagick) !== FALSE;
    }
    catch (\Exception $e) {
      $errorMessage = "An error occurred attempting to extract a thumbnail from: ' . $source\n\n"
        . $e->getTraceAsString();
      $this->logger->error('<pre>' . $errorMessage . '</pre>');
      return FALSE;
    }
  }

  /**
   * Create file entity.
   *
   * @param string $fileUri
   *   File uri.
   *
   * @return int|null|string
   *   File entity id.
   *
   * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException
   * @throws \Drupal\Component\Plugin\Exception\PluginNotFoundException
   * @throws \Drupal\Core\Entity\EntityStorageException
   */
  protected function createThumbnailFileEntity($fileUri) {
    $fileUri = str_replace('.pdf', '.pdf.jpeg', $fileUri);
    /** @var \Drupal\file\Entity\File $fileEntity */
    $fileEntity = $this->entityTypeManager->getStorage('file')->create([
      'uri' => $fileUri,
      'status' => FILE_STATUS_PERMANENT,
    ]);
    $fileEntity->save();
    return $fileEntity->id();
  }

  /**
   * Auto create pdf thumbnail.
   *
   * @param \Drupal\Core\Entity\EntityInterface $entity
   *   The Entity.
   *
   * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException
   * @throws \Drupal\Component\Plugin\Exception\PluginNotFoundException
   * @throws \Drupal\Core\Entity\EntityStorageException
   */
  public function autoCreateThumbnail(EntityInterface $entity) {
    $fieldDefinitions = $entity->getFieldDefinitions();
    if ($fieldDefinitions) {
      foreach ($fieldDefinitions as $fieldDefinition) {
        if ($fieldDefinition->getType() == "file") {
          if (!empty($entity->get($fieldDefinition->getName())->getValue())) {
            foreach ($entity->get($fieldDefinition->getName())->getValue() as $fieldValue) {
              if (array_key_exists('target_id', $fieldValue)) {
                $tid = $fieldValue['target_id'];
                $fileEntity = $this->entityTypeManager->getStorage('file')
                  ->load($tid);
                if ($fileEntity->getMimeType() == 'application/pdf') {
                  $fileInfos = $this->getFileInfos($fileEntity);
                  $isCreated = isset($fileInfos['source']) && isset($fileInfos['destination']) ? $this->generateImage($fileInfos['source'],
                    $fileInfos['destination']) : '';
                  $fileEntityId = !$isCreated ?: $this->createThumbnailFileEntity($fileEntity->getFileUri());
                  if ($fileEntityId) {
                    $entity->set('thumbnail', ['target_id' => $fileEntityId]);
                  }
                }
              }
            }
          }
        }
      }
    }
  }

}

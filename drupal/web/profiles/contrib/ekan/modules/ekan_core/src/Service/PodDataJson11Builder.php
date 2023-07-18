<?php

namespace Drupal\ekan_core\Service;

use Drupal\Component\Serialization\Json;
use Drupal\Core\Cache\Cache;
use Drupal\Core\Cache\CacheableMetadata;
use Drupal\Core\Field\EntityReferenceFieldItemListInterface;
use Drupal\Core\File\FileSystemInterface;
use Drupal\Core\KeyValueStore\KeyValueFactoryInterface;
use Drupal\Core\Url;
use Drupal\ekan_core\Entity\EkanDatasetEntity;
use Drupal\ekan_core\Entity\EkanResourceEntity;
use Drupal\file\FileInterface;
use Drupal\group\Entity\GroupInterface;
use Drupal\link\Plugin\Field\FieldType\LinkItem;
use Drupal\taxonomy\TermInterface;

/**
 * Implements the Project Open Data Data Json 1.1 data.json output.
 */
class PodDataJson11Builder implements PodDataBuilderInterface {

  /**
   * The file system used for reading and writing caches.
   *
   * @var \Drupal\Core\File\FileSystemInterface
   */
  protected $fileSystem;


  /**
   * The key value store.
   *
   * @var \Drupal\Core\KeyValueStore\KeyValueStoreInterface
   */
  protected $keyValueStore;

  /**
   * The constructor.
   */
  public function __construct(FileSystemInterface $file_system, KeyValueFactoryInterface $key_value) {
    $this->fileSystem = $file_system;
    $this->keyValueStore = $key_value->get('ekan_pod_data');
  }

  /**
   * {@inheritDoc}
   */
  public function getFileType() {
    return 'json';
  }

  /**
   * {@inheritDoc}
   */
  public function getFilenamePrefix() {
    return 'data';
  }

  /**
   * {@inheritDoc}
   */
  public function getCacheFolder() {
    return 'public://pod_data';
  }

  /**
   * Dataset files folder.
   */
  public function getDatasetsFolder() {
    return 'public://pod_datasets';
  }

  /**
   * {@inheritDoc}
   */
  public function getCachedPath() {
    $cache_folder = $this->getCacheFolder();
    return "{$cache_folder}/{$this->getFilenamePrefix()}.{$this->getFileType()}";
  }

  /**
   * Get path of individual dataset file.
   */
  public function getDatasetFilePath($dataset_id) {
    $datasets_folder = $this->getDatasetsFolder();
    return "{$datasets_folder}/pod_dataset_{$dataset_id}.{$this->getFileType()}";
  }

  /**
   * {@inheritDoc}
   */
  public function isCacheStale() {
    if (!is_file($this->getCachedPath())) {
      return TRUE;
    }

    if ($this->keyValueStore->get('last_build') + $this->cacheableMetadata()->getCacheMaxAge() <= \Drupal::time()->getCurrentTime()) {
      return TRUE;
    }

    return FALSE;
  }

  /**
   * Warm the file data cache.
   *
   * @return string|null
   *   The filename of the generated file or NULL if something went wrong.
   */
  public function warmCache() {
    $cached_filepath = $this->getCachedPath();
    $cache_folder = dirname($cached_filepath);
    $this->fileSystem->prepareDirectory($cache_folder, FileSystemInterface::CREATE_DIRECTORY | FileSystemInterface::MODIFY_PERMISSIONS);
    $data = Json::encode($this->build());
    if ($this->fileSystem->saveData($data, $cached_filepath, FileSystemInterface::EXISTS_REPLACE)) {
      $this->keyValueStore->set('last_build', \Drupal::time()->getCurrentTime());
      Cache::invalidateTags(['pod_data_json']);
      return $cached_filepath;
    }

    return NULL;
  }

  /**
   * {@inheritDoc}
   */
  public function build() {
    return [
      '@context' => 'https://project-open-data.cio.gov/v1.1/schema/catalog.jsonld',
      '@id' => Url::fromRoute('ekan_core.pod_service')->setAbsolute()->toString(TRUE)->getGeneratedUrl(),
      '@type' => 'dcat:Catalog',
      'conformsTo' => 'https://project-open-data.cio.gov/v1.1/schema',
      'describedBy' => 'https://project-open-dat…v1.1/schema/catalog.json',
      'dataset' => $this->buildDatasets(),
    ];
  }

  /**
   * {@inheritDoc}
   */
  public function buildDatasets() {
    $ids = \Drupal::entityQuery('dataset')
      ->condition('status', 1)
    // To run query faster.
      ->accessCheck(FALSE)
      ->execute();
    $datasets = [];
    foreach ($ids as $dataset_id) {
      $dataset_filepath = $this->getDatasetFilePath($dataset_id);
      if (file_exists($dataset_filepath)) {
        $datasets[] = json_decode(file_get_contents($dataset_filepath));
      }
    }
    return $datasets;
  }

  /**
   * Creates a dataset file. This gets created on every dataset entity save.
   */
  public function createDatasetJsonFile(EkanDatasetEntity $dataset) {

    $dataset_path = $this->getDatasetFilePath($dataset->id());
    $dataset_folder = dirname($dataset_path);
    $this->fileSystem->prepareDirectory($dataset_folder, FileSystemInterface::CREATE_DIRECTORY | FileSystemInterface::MODIFY_PERMISSIONS);
    $data = Json::encode($this->buildDataset($dataset));
    if ($this->fileSystem->saveData($data, $dataset_path, FileSystemInterface::EXISTS_REPLACE)) {
      return $dataset_path;
    }
    return NULL;
  }

  /**
   * Builds the dataset file.
   */
  public function buildDataset(EkanDatasetEntity $dataset) {

    $keywords = [];
    $tags_field = $dataset->get('tags');
    assert($tags_field instanceof EntityReferenceFieldItemListInterface);
    foreach ($tags_field->referencedEntities() as $term) {
      assert($term instanceof TermInterface);
      $keywords[] = $term->label();
    }

    $themes = [];
    foreach ($dataset->get('pod_theme')->getValue() as $item) {
      $themes[] = $item['value'];
    }

    if (empty($themes)) {
      $topic_field = $dataset->get('topic');
      assert($topic_field instanceof EntityReferenceFieldItemListInterface);
      foreach ($topic_field->referencedEntities() as $term) {
        assert($term instanceof TermInterface);
        $themes[] = $term->label();
      }
    }
    // Get path alias first as dataset->url() not returning path_alias on
    // programmatic entity update process.
    $alias_manager = \Drupal::service('path_alias.manager');
    $alias = $alias_manager->getAliasByPath('/dataset/' . $dataset->id());
    // If no path alias then get the absolute link to the url.
    if (!$alias) {
      $landing_page = $dataset->toUrl()->setAbsolute()->toString(TRUE)->getGeneratedUrl();
    }
    else {
      $host = \Drupal::request()->getSchemeAndHttpHost();
      $landing_page = $host . $alias;
    }
    if (!$dataset->get('landing_page')->isEmpty()) {
      $landing_page = $dataset->get('landing_page')->getString();
    }

    $contact_name = $dataset->get('uid')->entity ? $dataset->get('uid')->entity->label() : '';
    if (!$dataset->get('contact_name')->isEmpty()) {
      $contact_name = $dataset->get('contact_name')->getString();
    }

    $references = [];
    foreach ($dataset->get('related_content') as $item) {
      assert($item instanceof LinkItem);
      $references[] = $item->getUrl()->setAbsolute()->toString(TRUE)->getGeneratedUrl();
    }

    // @todo support for mult-value publisher.
    $publisher = $dataset->get('publisher')->entity;
    if ($publisher instanceof GroupInterface) {
      $publisher = [
        '@type' => "org:Organization",
        'name' => $publisher->label(),
      ];
    }
    else {
      $publisher = NULL;
    }

    $modified = date('Y-m-d', $dataset->get('changed')->value);
    $moduleHandler = \Drupal::service('module_handler');
    if ($moduleHandler->moduleExists('ekan_harvest') && !$dataset->get('harvest_source_modified')->isEmpty()) {
      $modified = $dataset->get('harvest_source_modified')->value;
    }

    $temporal = NULL;
    $start_date = $dataset->get('temporal_coverage')->start_date;
    $end_date = $dataset->get('temporal_coverage')->end_date;
    if ($start_date && $end_date) {
      $temporal = $start_date->format('c') . '/' . $end_date->format('c');
    }

    $data = [
      '@type' => 'dcat:Dataset',
      'accessLevel' => $dataset->get('public_access_level')->getString(),
      'rights' => $dataset->get('rights')->value,
      'accrualPeriodicity' => $dataset->get('frequency')->getString(),
        // 'bureauCode' => '',
      'contactPoint' => [
        'fn' => $contact_name,
        'hasEmail' => $dataset->get('contact_email')->getString(),
      ],
      'describedBy' => $dataset->get('data_dictionary')->value,
      'describedByType' => $dataset->get('data_dictionary_type')->getString(),
      'conformsTo' => $dataset->get('conforms_to')->getString(),
        // 'dataQuality' => '',
      'description' => $dataset->get('body')->value,
      'distribution' => $this->buildDistributions($dataset),
      'identifier' => $dataset->get('uuid')->value,
      'issued' => date('Y-m-d', $dataset->get('created')->value),
      'keyword' => $keywords,
      'landingPage' => $landing_page,
      'language' => $dataset->get('language')->getString(),
      'license' => $dataset->get('license')->getString(),
      'modified' => $modified,
        // 'primaryITInvestmentUII' => '',
        // 'programCode' => '',
      'publisher' => $publisher,
      'references' => $references,
      'spatial' => $dataset->get('spatial')->value,
        // 'systemOfRecords' => '',
      'temporal' => $temporal,
      'isPartOf' => $dataset->get('is_part_of')->getString(),
      'theme' => $themes,
      'title' => $dataset->label(),
    ];

    return $data;
  }

  /**
   * {@inheritDoc}
   */
  public function buildDistributions(EkanDatasetEntity $dataset) {
    $resources = [];

    foreach (\Drupal::entityTypeManager()->getStorage('resource')->loadByProperties(['dataset_ref' => $dataset->id()]) as $resource) {
      assert($resource instanceof EkanResourceEntity);
      $upload = $resource->get('upload')->entity;
      $download_url = NULL;
      $media_type = NULL;
      $api_link = NULL;
      $format = NULL;
      $resource_type = NULL;

      if ($resource->get('resource_format')->entity) {
        $format = $resource->get('resource_format')->entity->label();
      }

      if ($resource->get('resource_type')->entity) {
        $resource_type = $resource->get('resource_type')->entity->label();
      }

      if ($upload instanceof FileInterface) {
        $download_url = $upload->createFileUrl(FALSE);
        $media_type = $upload->getMimeType();
      }

      $remote_file = $resource->get('link_remote_file')->entity;
      if (!$download_url && $remote_file instanceof FileInterface) {
        $download_url = $remote_file->createFileUrl(FALSE);
        $media_type = $remote_file->getMimeType();
      }

      $api_link_item = $resource->get('link_api')->first();
      if (!$download_url && $api_link_item instanceof LinkItem && !$api_link_item->isEmpty()) {
        $api_link = $api_link_item->getUrl()->setAbsolute(TRUE)->toString(TRUE)->getGeneratedUrl();
      }

      $resources[] = [
        'downloadURL' => $download_url,
        'mediaType' => $media_type,
        'resourceType' => $resource_type,
        'format' => $format,
        'accessUrl' => $api_link,
        'description' => $resource->get('body')->value,
        'title' => $resource->label(),
      ];
    }
    return $resources;
  }

  /**
   * {@inheritDoc}
   */
  public function cacheableMetadata() {
    $cachable_metadata = new CacheableMetadata();
    $cachable_metadata->setCacheTags([
      'dataset_list',
      'resource_list',
      'pod_data_json',
    ]);
    $cachable_metadata->setCacheMaxAge(24 * 60 * 60);
    return $cachable_metadata;
  }

}

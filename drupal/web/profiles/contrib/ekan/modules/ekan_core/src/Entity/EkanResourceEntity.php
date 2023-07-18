<?php

namespace Drupal\ekan_core\Entity;

use Drupal\Core\Entity\EntityStorageInterface;
use Drupal\Core\Field\BaseFieldDefinition;
use Drupal\Core\Entity\EntityTypeInterface;
use Drupal\file\FileInterface;
use Drupal\link\LinkItemInterface;
use Drupal\Core\Field\FieldStorageDefinitionInterface;
use Drupal\taxonomy\TermInterface;
use GuzzleHttp\Client;

/**
 * Defines the Ekan Resource entity.
 *
 * @ingroup ekan_core
 *
 * @ContentEntityType(
 *   id = "resource",
 *   label = @Translation("Resource"),
 *   handlers = {
 *     "view_builder" = "Drupal\Core\Entity\EntityViewBuilder",
 *     "views_data" = "Drupal\ekan_core\Entity\EkanEntityViewsData",
 *     "form" = {
 *      "default" = "Drupal\ekan_core\Entity\Form\EkanResourceForm",
 *      "add" = "Drupal\ekan_core\Entity\Form\EkanResourceForm",
 *      "edit" = "Drupal\ekan_core\Entity\Form\EkanResourceForm",
 *      "delete" = "Drupal\ekan_core\Entity\Form\EkanEntityDeleteForm",
 *     },
 *     "access" = "\Drupal\ekan_core\Entity\Access\EkanResourceAccessControlHandler",
 *     "query_access" = "\Drupal\entity\QueryAccess\QueryAccessHandler",
 *     "permission_provider" = "\Drupal\entity\EntityPermissionProvider",
 *   },
 *   base_table = "resource",
 *   revision_table = "resource_revision",
 *   translatable = FALSE,
 *   admin_permission = "administer resource entities",
 *   entity_keys = {
 *     "id" = "id",
 *     "revision" = "vid",
 *     "uuid" = "uuid",
 *     "uid" = "uid",
 *     "label" = "title",
 *     "langcode" = "langcode",
 *     "published" = "status",
 *   },
 *   revision_metadata_keys = {
 *     "revision_user" = "revision_user",
 *     "revision_created" = "revision_created",
 *     "revision_log_message" = "revision_log_message",
 *   },
 *   links = {
 *    "canonical" = "/resource/{resource}",
 *    "edit-form" = "/resource/{resource}/edit",
 *    "delete-form" = "/resource/{resource}/delete",
 *   },
 *   field_ui_base_route = "resource.settings",
 * )
 */
class EkanResourceEntity extends EkanEntityBase implements EkanEntityGroupSynchronisedInterface {

  use EkanEntityGroupSynchronised;

  /**
   * {@inheritDoc}
   */
  public function getGroups() {
    // Base the group membership off the publisher on the dataset or related
    // dataset.
    $dataset = $this->get('dataset_ref')->entity;
    if ($dataset instanceof EkanEntityGroupSynchronisedInterface) {
      return $dataset->getGroups();
    }
    return [];
  }

  const DEFAULT_UPLOAD_SETTINGS = [
    'file_extensions' => 'csv html xls json xlsx doc docx rdf txt jpg jpeg png gif tiff pdf odf ods odt tsv tab geojson xml zip kml kmz shp',
    'uri_scheme' => 'public',
    'file_directory' => '',
    'max_filesize' => '',
  ];

  /**
   * {@inheritdoc}
   */
  public static function baseFieldDefinitions(EntityTypeInterface $entity_type) {

    /** @var \Drupal\Core\Field\BaseFieldDefinition[] $fields */
    $fields = parent::baseFieldDefinitions($entity_type);
    // Title.
    $fields['title'] = BaseFieldDefinition::create('string')
      ->setLabel(t('Title'))
      ->setDescription(t('eg. A descriptive title'))
      ->setRequired(TRUE)
      ->setSetting('max_length', 255)
      ->setDisplayOptions('view', [
        'label' => 'hidden',
        'type' => 'string',
        'weight' => -5,
      ])
      ->setDisplayOptions('form', [
        'type' => 'string_textfield',
        'weight' => -5,
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    // Field Upload.
    $fields['upload'] = BaseFieldDefinition::create('file')
      ->setRevisionable(FALSE)
      ->setTranslatable(FALSE)
      ->setRequired(FALSE)
      ->setLabel(t('Upload File'))
      ->setDisplayOptions('view', [
        'label' => 'inline',
        'type' => 'file_default',
        'weight' => 1,
      ])
      ->setDisplayOptions('form', [
        'type' => 'file_generic',
        'weight' => 1,
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    // Link.
    $fields['link_api'] = BaseFieldDefinition::create('link')
      ->setLabel(t('API Link'))
      ->setDescription(t('Full url to a public API or information source (http://example.com).'))
      ->setRevisionable(TRUE)
      ->setRequired(FALSE)
      ->setSettings([
        'link_type' => LinkItemInterface::LINK_GENERIC,
        'title' => DRUPAL_DISABLED,
      ])
      ->setDisplayOptions('view', [
        'label' => 'inline',
        'type' => 'link_default',
        'weight' => 2,
      ])
      ->setDisplayOptions('form', [
        'type' => 'link_default',
        'weight' => 2,
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    // Remote file link.
    $fields['link_remote_file'] = BaseFieldDefinition::create('file')
      ->setLabel(t('Remote File link'))
      ->setSetting('file_extensions', 'csv html xls json xlsx doc docx rdf txt jpg jpeg png gif tiff pdf odf ods odt tsv tab geojson xml zip kml kmz shp')
      ->setDescription(t('Link to a file hosted on a remote server. CSV files can be imported into the DKAN datastore.'))
      ->setDisplayOptions('view', [
        'label' => 'inline',
        'type' => 'file',
        'weight' => 3,
      ])
      ->setDisplayOptions('form', [
        'type' => 'link_remote_file',
        'weight' => 3,
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    // Body.
    $fields['body'] = BaseFieldDefinition::create('text_long')
      ->setLabel(t('Description'))
      ->setDescription(t('eg. Some useful notes about the data'))
      ->setTranslatable(FALSE)
      ->setRevisionable(FALSE)
      ->setDisplayOptions('view', [
        'label' => 'hidden',
        'type' => 'text_default',
        'weight' => 4,
      ])
      ->setDisplayOptions('form', [
        'type' => 'text_textfield',
        'weight' => 4,
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    // Resource format.
    $fields['resource_format'] = BaseFieldDefinition::create('entity_reference')
      ->setRevisionable(FALSE)
      ->setTranslatable(FALSE)
      ->setRequired(TRUE)
      ->setDescription(t('Format of resource e.g csv, json. Leave blank to auto-detect resource format'))
      ->setLabel(t('Resource Format'))
      ->setSetting('target_type', 'taxonomy_term')
      ->setSetting('handler', 'default')
      ->setSetting('handler_settings', ['target_bundles' => ['format']])
      ->setDisplayOptions('view', [
        'label' => 'inline',
        'type' => 'entity_reference_label',
      ])
      ->setDisplayOptions('form', [
        'type' => 'entity_reference_autocomplete',
        'weight' => 5,
        'settings' => [
          'match_operator' => 'CONTAINS',
          'size' => '60',
          'autocomplete_type' => 'tags',
          'placeholder' => '',
        ],
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    // Resource type.
    $fields['resource_type'] = BaseFieldDefinition::create('entity_reference')
      ->setRevisionable(FALSE)
      ->setTranslatable(FALSE)
      ->setRequired(FALSE)
      ->setDescription(t('Type of resource e.g educational'))
      ->setLabel(t('Resource Type'))
      ->setSetting('target_type', 'taxonomy_term')
      ->setSetting('handler', 'default')
      ->setSetting('handler_settings', ['target_bundles' => ['resource_types']])
      ->setDisplayOptions('view', [
        'label' => 'inline',
        'type' => 'entity_reference_label',
      ])
      ->setDisplayOptions('form', [
        'type' => 'options_select',
        'weight' => 5,
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    // Dataset entity_reference field.
    $fields['dataset_ref'] = BaseFieldDefinition::create('entity_reference')
      ->setRevisionable(FALSE)
      ->setTranslatable(FALSE)
      ->setRequired(FALSE)
      ->setCardinality(FieldStorageDefinitionInterface::CARDINALITY_UNLIMITED)
      ->setLabel(t('Dataset Reference'))
      ->setDescription(t('Dataset that this resource is attached to.'))
      ->setSetting('target_type', 'dataset')
      ->setSetting('handler', 'default')
      ->setDisplayOptions('view', [
        'label' => 'inline',
        'type' => 'author',
        'weight' => 6,
      ])
      ->setDisplayOptions('form', [
        'type' => 'entity_reference_autocomplete',
        'weight' => 6,
        'settings' => [
          'match_operator' => 'CONTAINS',
          'size' => '60',
          'autocomplete_type' => 'tags',
          'placeholder' => '',
        ],
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    // Orphan.
    $fields['orphan'] = BaseFieldDefinition::create('boolean')
      ->setLabel(t('Orphan'))
      ->setDisplayOptions('form', [
        'type' => 'boolean_checkbox',
        'weight' => 7,
      ])
      ->setDefaultValue(FALSE)
      ->setInitialValue(FALSE)
      ->setRevisionable(FALSE)
      ->setTranslatable(FALSE)
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    // Datastore Status.
    $fields['datastore_status'] = BaseFieldDefinition::create('integer')
      ->setLabel(t('DataStore Status'))
      ->setDisplayOptions('view', [
        'label' => 'inline',
        'type' => 'number_integer',
        'weight' => 8,
      ])
      ->setDisplayOptions('form', [
        'type' => 'number',
        'weight' => 8,
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    return $fields;
  }

  /**
   * Figure out the format for the entity.
   *
   * @return \Drupal\Core\Entity\EntityInterface|TermInterface
   *   The derived format term.
   */
  public function detectResourceFormat() {
    // Initialize the mime type guesser,.
    $client = new Client([
      'timeout' => 5,
      'allow_redirects' => TRUE,
    ]);
    /** @var \Drupal\ekan_core\File\MimeType\HttpMimeTypeGuesser $mime_type_guesser */
    $mime_type_guesser = \Drupal::service('file.mime_type.guesser.http');
    $mime_type_guesser->setHttpClient($client);

    $uri = $mime_type = $extension = '';

    // Guess mime and extension from file entities.
    $files = array_filter([
      $this->get('upload')->entity,
      $this->get('link_remote_file')->entity,
    ]);
    if (!empty($files)) {
      foreach ($files as $file) {
        if ($file instanceof FileInterface) {

          $mime_type = $file->getMimeType();
          $filename = $file->getFilename();
          break;
        }
      }
    }
    // Or check the remote link.
    else {
      $uri = $this->get('link_api')->uri;
      if ($uri) {
        $filename = $mime_type_guesser->parseFileNameFromUrl($uri);
      }
    }

    // If we have an extension, just use that.
    if (preg_match('/\.(?<ext>\w*)$/', $filename, $matches)) {
      $extension = $matches['ext'];
    }
    // If that failed try and guess the mime type from the url.
    elseif (!empty($uri)) {
      $mime_type = $mime_type_guesser->guessMimeType($uri);
    }

    // Get any format taxonomy terms with the same mime types configured.

    /** @var \Drupal\taxonomy\TermStorageInterface $term_storage */
    $term_storage = \Drupal::entityTypeManager()->getStorage('taxonomy_term');
    $term_ids = \Drupal::entityQuery('taxonomy_term')
      ->condition('vid', 'format')
      ->condition('field_mime_type', $mime_type)
      ->execute();

    // Add the resource format terms into drupalSettings so we can detect the
    // format client side.
    if ($term_ids) {
      $term = $term_storage->load(reset($term_ids));
    }
    else {
      // Fall back to 'data'.
      $format_properties = [
        'name' => 'data',
        'vid' => 'format',
      ];
      $terms = $term_storage->loadByProperties($format_properties);
      $term = reset($terms);
    }

    assert($term instanceof TermInterface);
    return $term;
  }

  /**
   * {@inheritdoc}
   */
  public function postSave(EntityStorageInterface $storage, $update = TRUE) {
    parent::postSave($storage, $update);
    // Ensure this resource is in the appropriate group based on its dataset.
    $this->groupSynchronise();

    $this->reIndexDatasets();
  }

  /**
   * Force any referenced datasets to have their indexes updated.
   *
   * Because the format field of a resource is also indexed by the dataset.
   *
   * Based on ContentEntityTrackingManager::entityUpdate but couldn't call
   * that because $entity->original doesn't exist in this context.
   */
  private function reIndexDatasets() {
    $datasets = $this->get('dataset_ref')->referencedEntities();

    $tracking_manager = \Drupal::getContainer()->get('search_api.entity_datasource.tracking_manager');

    /** @var EkanDatasetEntity $entity */
    foreach ($datasets as $entity) {

      /** @var \Drupal\search_api\IndexInterface[] */
      $indexes = $tracking_manager->getIndexesForEntity($entity);
      if (!$indexes) {
        continue;
      }

      $entity_id = $entity->id();

      $updated_item_ids = $entity->getTranslationLanguages();

      $datasource_id = 'entity:' . $entity->getEntityTypeId();
      $combine_id = function ($langcode) use ($entity_id) {
        return $entity_id . ':' . $langcode;
      };
      $updated_item_ids = array_map($combine_id, array_keys($updated_item_ids));

      /** @var \Drupal\search_api\IndexInterface $index */
      foreach ($indexes as $index) {
        if ($updated_item_ids) {
          $index->trackItemsUpdated($datasource_id, $updated_item_ids);
        }
      }

    }
  }

}

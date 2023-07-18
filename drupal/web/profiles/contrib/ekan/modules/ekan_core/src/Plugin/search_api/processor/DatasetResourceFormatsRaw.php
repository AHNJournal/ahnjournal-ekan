<?php

namespace Drupal\ekan_core\Plugin\search_api\processor;

use Drupal\ekan_core\Entity\EkanDatasetEntity;
use Drupal\ekan_core\Entity\EkanResourceEntity;
use Drupal\search_api\Datasource\DatasourceInterface;
use Drupal\search_api\Item\ItemInterface;
use Drupal\search_api\Processor\ProcessorPluginBase;
use Drupal\search_api\Processor\ProcessorProperty;

/**
 * Adds list of resource formats to the index for both datasets and resources.
 *
 * So that one facet can filter both resources and datasets in the search.
 *
 * @SearchApiProcessor(
 *   id = "ekan_raw_resource_formats",
 *   label = @Translation("Raw Resource Formats"),
 *   description = @Translation("Adds the resource formats to the dataset and resource indexes, for facets."),
 *   stages = {
 *     "add_properties" = 0,
 *   },
 *   locked = true,
 *   hidden = False,
 * )
 */
class DatasetResourceFormatsRaw extends ProcessorPluginBase {

  /**
   * {@inheritdoc}
   */
  public function getPropertyDefinitions(DatasourceInterface $datasource = NULL) {
    $properties = [];
    $ekan_entity_types = ['entity:dataset', 'entity:resource'];
    if ($datasource && in_array($datasource->getPluginId(), $ekan_entity_types)) {

      $definition = [
        'label' => $this->t('Raw Resource Formats'),
        'description' => $this->t('Formats of the resources, raw for facets.'),
        'type' => 'string',
        'is_list' => TRUE,
        'processor_id' => $this->getPluginId(),
      ];
      $properties['ekan_dataset_resource_formats_raw'] = new ProcessorProperty($definition);

    }
    return $properties;
  }

  /**
   * {@inheritdoc}
   */
  public function addFieldValues(ItemInterface $item) {
    $entity = $item->getOriginalObject()->getEntity();

    // Dataset.
    if ($entity instanceof EkanDatasetEntity) {

      // Get all the resources associated with this dataset.
      $resources = \Drupal::entityQuery('resource')
        ->condition('status', 1)
        ->condition('dataset_ref', $entity->id())
        ->execute();

      $resource_storage = \Drupal::entityTypeManager()->getStorage('resource');
      $resource_entities = $resource_storage->loadMultiple($resources);

      // Prepare field values per resource, all link back to the dataset.
      // Group by format because we only need a unique list of formats.
      $grouped_resource_formats = [];
      foreach ($resource_entities as $resource_entity) {
        $format_term = $resource_entity->get('resource_format')->entity;
        if ($format_term) {
          $format = $format_term->label();
          $grouped_resource_formats[$format] = $format;
        }
      }

      $fields = $item->getFields(FALSE);
      $fields = $this->getFieldsHelper()
        ->filterForPropertyPath($fields, $item->getDatasourceId(), 'ekan_dataset_resource_formats_raw');
      foreach ($fields as $field) {
        foreach ($grouped_resource_formats as $format) {
          $field->addValue($format);
        }
      }
    }

    // Resource.
    if ($entity instanceof EkanResourceEntity) {
      $format_term = $entity->get('resource_format')->entity;
      if ($format_term) {
        $fields = $item->getFields(FALSE);
        $fields = $this->getFieldsHelper()
          ->filterForPropertyPath($fields, $item->getDatasourceId(), 'ekan_dataset_resource_formats_raw');
        foreach ($fields as $field) {
          $format = $format_term->label();
          $field->addValue($format);
        }
      }
    }

  }

}

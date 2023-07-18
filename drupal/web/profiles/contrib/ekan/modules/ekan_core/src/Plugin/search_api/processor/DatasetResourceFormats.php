<?php

namespace Drupal\ekan_core\Plugin\search_api\processor;

use Drupal\ekan_core\Entity\EkanDatasetEntity;
use Drupal\ekan_core\Entity\EkanResourceEntity;
use Drupal\search_api\Datasource\DatasourceInterface;
use Drupal\search_api\Item\ItemInterface;
use Drupal\search_api\Plugin\search_api\processor\Property\RenderedItemProperty;
use Drupal\search_api\Plugin\search_api\processor\RenderedItem;

/**
 * Adds the list of resource formats with links to the indexed dataset.
 *
 * @SearchApiProcessor(
 *   id = "ekan_linked_resource_formats",
 *   label = @Translation("Linked Resource Formats"),
 *   description = @Translation("Adds the resource formats to the dataset and resource indexes, with links to the resources."),
 *   stages = {
 *     "add_properties" = 0,
 *   },
 *   locked = true,
 *   hidden = False,
 * )
 */
class DatasetResourceFormats extends RenderedItem {

  /**
   * {@inheritdoc}
   */
  public function getPropertyDefinitions(DatasourceInterface $datasource = NULL) {
    $properties = [];
    $ekan_entity_types = ['entity:dataset', 'entity:resource'];
    if ($datasource && in_array($datasource->getPluginId(), $ekan_entity_types)) {

      $definition = [
        'label' => $this->t('Linked Resource Formats'),
        'description' => $this->t('Formats of the resources, linked to the resources.'),
        'type' => 'search_api_html',
        'is_list' => TRUE,
        'processor_id' => $this->getPluginId(),
      ];
      $properties['ekan_dataset_resource_formats'] = new RenderedItemProperty($definition);

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
      // Group by format because where there is > 1 of the same
      // format we show 2x [format] etc.
      $grouped_resource_links = [];
      foreach ($resource_entities as $resource_entity) {
        $format_term = $resource_entity->get('resource_format')->entity;
        if ($format_term) {
          $format = $format_term->label();
          $link = $entity->toLink($format, 'canonical', [
            'attributes' => [
              'title' => $entity->label(),
              'data-format' => $format,
            ],
          ]
          );
          $renderable = $link->toRenderable();
          $rendered_link = (string) $this->getRenderer()->renderPlain($renderable);
          $grouped_resource_links[$format][] = $rendered_link;
        }
      }

      $fields = $item->getFields(FALSE);
      $fields = $this->getFieldsHelper()
        ->filterForPropertyPath($fields, $item->getDatasourceId(), 'ekan_dataset_resource_formats');
      foreach ($fields as $field) {
        foreach ($grouped_resource_links as $format => $resource_links) {
          if (count($resource_links) == 1) {
            $field->addValue(reset($resource_links));
          }
          else {
            $field->addValue(count($resource_links) . 'x' . reset($resource_links));
          }
        }

      }
    }

    // Resource.
    if ($entity instanceof EkanResourceEntity) {
      $format_term = $entity->get('resource_format')->entity;
      if ($format_term) {
        $fields = $item->getFields(FALSE);
        $fields = $this->getFieldsHelper()
          ->filterForPropertyPath($fields, $item->getDatasourceId(), 'ekan_dataset_resource_formats');
        foreach ($fields as $field) {
          $format = $format_term->label();
          $link = $entity->toLink($format, 'canonical', [
            'attributes' => [
              'title' => $entity->label(),
              'data-format' => $format,
            ],
          ]
          );
          $renderable = $link->toRenderable();
          $rendered_link = (string) $this->getRenderer()->renderPlain($renderable);
          $field->addValue($rendered_link);
        }
      }
    }

  }

}

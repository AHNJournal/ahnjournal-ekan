<?php

namespace Drupal\ekan_core\Plugin\search_api\processor;

use Drupal\Core\Entity\ContentEntityInterface;
use Drupal\node\NodeInterface;
use Drupal\search_api\Datasource\DatasourceInterface;
use Drupal\search_api\Item\ItemInterface;
use Drupal\search_api\Processor\ProcessorPluginBase;
use Drupal\search_api\Processor\ProcessorProperty;

/**
 * Adds the entity type to the indexed data.
 *
 * @SearchApiProcessor(
 *   id = "combined_entity_type",
 *   label = @Translation("Combined Entity Type"),
 *   description = @Translation("Adds the Entity type such as dataset or resource or page to the indexed data."),
 *   stages = {
 *     "add_properties" = 0,
 *   },
 *   locked = true,
 *   hidden = False,
 * )
 */
class CombinedEntityType extends ProcessorPluginBase {

  /**
   * {@inheritdoc}
   */
  public function getPropertyDefinitions(DatasourceInterface $datasource = NULL) {
    $properties = [];

    if (!$datasource) {
      $definition = [
        'label' => $this->t('Combined Entity Type'),
        'description' => $this->t('Combined Entity Type.'),
        'type' => 'string',
        'processor_id' => $this->getPluginId(),
      ];
      $properties['search_api_combined_entity_type'] = new ProcessorProperty($definition);
    }

    return $properties;
  }

  /**
   * {@inheritdoc}
   */
  public function addFieldValues(ItemInterface $item) {
    $entity = $item->getOriginalObject()->getEntity();
    if ($entity instanceof ContentEntityInterface) {
      $fields = $item->getFields(FALSE);
      $fields = $this->getFieldsHelper()
        ->filterForPropertyPath($fields, NULL, 'search_api_combined_entity_type');
      foreach ($fields as $field) {
        if ($entity instanceof NodeInterface) {
          $field->addValue($entity->get('type')->entity->label());
        }
        else {
          $field->addValue($entity->bundle());
        }
      }
    }
  }

}

<?php

namespace Drupal\ekan_core\Plugin\views\field;

use Drupal\Component\Render\FormattableMarkup;
use Drupal\Core\Link;
use Drupal\Core\Url;
use Drupal\search_api\Plugin\views\field\SearchApiStandard;

/**
 * Provides a special handler for aggregate topic indexed ids.
 *
 * @ingroup views_field_handlers
 *
 * @ViewsField("search_api_ekan_aggregate_reference")
 */
class SearchApiEkanAggregateReference extends SearchApiStandard {

  //phpcs:disable
  /**
   * {@inheritdoc}
   */
  public function render_item($count, $item) {
  //phpcs:enable
    $entity_type = $this->configuration['reference_entity_type'];
    $facet_param = $this->field;
    $entity_id = $item['value'];
    $entity = $this->getEntityTypeManager()->getStorage($entity_type)->load($entity_id);
    if ($entity) {
      /** @var \Drupal\ekan_core\EkanIconHandler $icon_handler */
      $icon_handler = \Drupal::service('ekan_core.icon_handler');
      $icon = $icon_handler->getIconForEntity($entity);
      $label = $entity->label();
      $value = new FormattableMarkup("$icon&nbsp;$label", []);

      if ($this->options['link_to_item']) {
        $options = [
          'query' => ['f' => ["$facet_param:$entity_id"]],
          'attributes' => ['class' => 'link_to_search'],
        ];
        $url = Url::fromUri('internal:/search', $options);
        return Link::fromTextAndUrl($value, $url)->toString();
      }
      else {
        return $value;
      }
    }

    return parent::render_item($count, $item);
  }

}

<?php

namespace Drupal\ekan_statistics\Controller;

use Drupal\Core\Link;
use Drupal\Core\Url;

/**
 * Ekan statistics topics controller.
 */
class EkanStatisticsTopics extends EkanStatisticsControllerBase {

  /**
   * Statistics topics page build.
   */
  public function build(): array {
    $build = parent::build();
    $query = $this->connection->select('dataset__topic', 'topic');
    $query->fields('topic', ['topic_target_id']);
    $query->addExpression('COUNT(distinct topic.entity_id)', 'dataset_count');
    $query->leftJoin('resource__dataset_ref', 'res', 'res.dataset_ref_target_id = topic.entity_id');
    $query->addExpression('COUNT(distinct res.entity_id)', 'res_count');
    $query->join('taxonomy_term_field_data', 'term_data', 'term_data.tid = topic.topic_target_id');
    $query->fields('term_data', ['name']);
    $query->condition('topic.deleted', 0);
    $query->condition('term_data.vid', 'topics');
    $query->condition('term_data.status', 1);
    $query->join('dataset', 'dataset', 'dataset.id = topic.entity_id');
    $query->condition('dataset.status', 1);
    $query->groupBy('topic.topic_target_id');
    $query->orderBy('dataset_count', 'DESC');
    $query->distinct();
    $results = $query->execute()->fetchAllAssoc('topic_target_id');
    $rows = [];
    foreach ($results as $topic_id => $result) {
      $rows[$topic_id] =
        [Link::fromTextAndUrl($result->name, Url::fromUserInput('/search?f[0]=topic:' . $topic_id))->toString(),
          $result->dataset_count,
          $result->res_count,
        ];
    }

    $headers = ['Topics', 'Datasets', 'Resources'];
    $build['topics-table'] = [
      '#type' => 'table',
      '#header' => $headers,
      '#attributes' => [
        'class' => ['topics-groups-table'],
        'id' => 'topics-table-container',
      ],
      '#rows' => $rows,
    ];
    return $build;

  }

}

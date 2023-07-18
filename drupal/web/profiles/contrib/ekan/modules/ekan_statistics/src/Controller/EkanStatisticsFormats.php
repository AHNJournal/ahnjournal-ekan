<?php

namespace Drupal\ekan_statistics\Controller;

use Drupal\Core\Link;
use Drupal\Core\Url;

/**
 * Ekan statistics formats controller.
 */
class EkanStatisticsFormats extends EkanStatisticsControllerBase {

  /**
   * Statistics formats page build.
   */
  public function build(): array {
    $build = parent::build();
    $query = $this->connection->select('resource', 'res');
    $query->fields('res', ['resource_format']);
    $query->addExpression('COUNT(*)', 'res_count');
    $query->join('taxonomy_term_field_data', 'term_data', 'term_data.tid = res.resource_format');
    $query->fields('term_data', ['name']);
    $query->condition('res.status', 1);
    $query->condition('term_data.vid', 'format');
    $query->condition('term_data.status', 1);
    $query->join('resource__dataset_ref', 'dataset', 'res.id = dataset.entity_id');
    $query->addExpression('COUNT(distinct dataset_ref_target_id)', 'dataset_count');
    $query->groupBy('res.resource_format');
    $query->orderBy('res_count', 'DESC');
    $query->distinct();
    $results = $query->execute()->fetchAllAssoc('resource_format');
    $rows = [];
    foreach ($results as $format_id => $result) {
      $rows[$format_id] =
        [Link::fromTextAndUrl($result->name, Url::fromUserInput('/search?f[0]=format:' . $format_id))->toString(),
          $result->dataset_count,
          $result->res_count,
        ];
    }

    $headers = ['Formats', 'Datasets', 'Resources'];
    $build['formats-table'] = [
      '#type' => 'table',
      '#header' => $headers,
      '#attributes' => [
        'class' => ['statistics-formats-table'],
        'id' => 'formats-table-container',
      ],
      '#rows' => $rows,
    ];
    return $build;

  }

}

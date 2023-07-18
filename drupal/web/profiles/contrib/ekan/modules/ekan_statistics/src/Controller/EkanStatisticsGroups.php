<?php

namespace Drupal\ekan_statistics\Controller;

use Drupal\Core\Database\Connection;
use Drupal\Core\Link;
use Drupal\Core\Url;

/**
 * Ekan statistics groups controller.
 */
class EkanStatisticsGroups extends EkanStatisticsControllerBase {

  /**
   * Statistics groups page build.
   */
  public function build(): array {
    $build = parent::build();
    $build['content'] = $this->getGroupsTable($this->connection);
    return $build;

  }

  /**
   * Builds the groups table.
   */
  public static function getGroupsTable(Connection $connection, $count = NULL): array {
    $query = $connection->select('dataset__publisher', 'pub');
    $query->fields('pub', ['publisher_target_id']);
    $query->addExpression('COUNT(distinct pub.entity_id)', 'dataset_count');
    $query->leftJoin('resource__dataset_ref', 'res', 'res.dataset_ref_target_id = pub.entity_id');
    $query->addExpression('COUNT(distinct res.entity_id)', 'res_count');
    $query->join('groups_field_data', 'group_data', 'group_data.id = pub.publisher_target_id');
    $query->fields('group_data', ['label']);
    $query->condition('group_data.type', 'publisher');
    $query->condition('group_data.status', 1);
    $query->groupBy('pub.publisher_target_id');
    $query->orderBy('dataset_count', 'DESC');
    $query->distinct();
    if ($count) {
      $query->range(0, $count);
    }
    $results = $query->execute()->fetchAllAssoc('publisher_target_id');
    $rows = [];
    foreach ($results as $pub_id => $result) {
      $rows[$pub_id] =
        [Link::fromTextAndUrl($result->label, Url::fromUserInput('/search?f[0]=publisher:' . $pub_id))->toString(),
          $result->dataset_count,
          $result->res_count,
        ];
    }
    $headers = ['Groups', 'Datasets', 'Resources'];
    $build['groups-table'] = [
      '#type' => 'table',
      '#header' => $headers,
      '#attributes' => [
        'class' => ['statistics-groups-table'],
        'id' => 'statistics-groups-table-container',
      ],
      '#rows' => $rows,
    ];
    return $build;
  }

}

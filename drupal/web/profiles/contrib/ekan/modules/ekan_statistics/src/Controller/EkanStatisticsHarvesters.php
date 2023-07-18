<?php

namespace Drupal\ekan_statistics\Controller;

/**
 * Ekan statistics harvesters controller.
 */
class EkanStatisticsHarvesters extends EkanStatisticsControllerBase {

  /**
   * Statistics harvesters page build.
   */
  public function build(): array {
    $build = parent::build();
    $query = $this->connection->select('harvest_source', 'harvester');
    $query->fields('harvester', ['id', 'title']);
    $query->join('harvest_source_event', 'har_event', 'har_event.harvest_source_id = harvester.id');
    $query->addExpression('MAX(har_event.timestamp)', 'last_run');
    $query->join('dataset', 'dataset', 'dataset.harvest_source_ref = harvester.id');
    $query->addExpression('count(distinct dataset.id)', 'dataset_count');
    $query->groupBy('harvester.id');
    $query->orderBy('last_run', 'DESC');
    $query->distinct();
    $results = $query->execute()->fetchAllAssoc('id');
    $rows = [];
    foreach ($results as $harvester_id => $result) {
      $rows[$harvester_id] =
        [$result->title,
          $result->dataset_count,
          date('d-M-Y H:i:s e', $result->last_run),
        ];
    }

    $headers = ['Harvester', 'Datasets', 'Last Run'];
    $build['harvesters-table'] = [
      '#type' => 'table',
      '#header' => $headers,
      '#attributes' => [
        'class' => ['harvesters-groups-table'],
        'id' => 'harvesters-table-container',
      ],
      '#rows' => $rows,
    ];
    return $build;

  }

}

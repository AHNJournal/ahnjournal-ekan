<?php

namespace Drupal\ekan_statistics\Controller;

/**
 * Ekan statistics dashboard controller.
 */
class EkanStatisticsDashboard extends EkanStatisticsControllerBase {

  /**
   * Dashboard page build.
   */
  public function build(): array {
    $build = parent::build();
    $groups_count = 10;
    $build['content'] = [
      '#type' => 'inline_template',
      '#context' => [
        'dashboard_resources' => $this->buildDashboardResourcePieChart(),
        'dashboard_licenses' => $this->buildDashboardDatasetByLicensePieChart(),
        'dashboard_topics' => $this->buildDashboardTopicsBarChart(),
        'dashboard_groups' => EkanStatisticsGroups::getGroupsTable($this->connection, $groups_count),
      ],
      '#template' => <<< TWIG
        <div class="container dashboard-wrapper">
          <div class="row dashboard-row-1">
           <div class="col-sm dashboard-resources-block bg-light rounded">
             <h2 class="text-center">Resource count by type</h2>
               {{ dashboard_resources }}
            </div>
          </div>
           <div class="row dashboard-row-2 mt-5">
           <div class="col-sm dashboard-license-block bg-light rounded">
             <h2 class="text-center">Dataset count by licence type</h2>
               {{ dashboard_licenses }}
            </div>
          </div>
          <div class="row dashboard-row-3 mt-5">
           <div class="col-sm dashboard-topics-block bg-light rounded">
             <h2 class="text-center">Dataset count by topic</h2>
               {{ dashboard_topics }}
            </div>
             <div class="col-sm dashboard-groups-block bg-light rounded">
             <h2 class="text-center">Top contributing groups</h2>
               {{ dashboard_groups }}
            </div>
          </div>
          </div>
        </div>
        TWIG,
    ];
    return $build;
  }

  /**
   * Builds the dashboard resource pie chart.
   */
  public function buildDashboardResourcePieChart(): array {
    $query = $this->connection->select('resource', 'res');
    $query->fields('res', ['resource_format']);
    $query->addExpression('COUNT(*)', 'resource_count');
    $query->join('taxonomy_term_field_data', 'term_data', 'term_data.tid = res.resource_format');
    $query->fields('term_data', ['name']);
    $query->condition('res.status', 1);
    $query->groupBy('res.resource_format');
    $query->orderBy('resource_count', 'DESC');
    $query->distinct();
    $results = $query->execute()->fetchAllAssoc('resource_format');
    $data = [];
    foreach ($results as $result) {
      $data[] = [
        'name' => $result->name,
        'value' => $result->resource_count,
      ];
    }
    $build['resource_chart'] = [
      '#type' => 'html_tag',
      '#tag' => 'div',
      '#attributes' => [
        'class' => ['resource-pie-chart'],
        'id' => 'dashboard-resource-chart-container',
        'style' => 'height:400px;',
      ],
      '#attached' => [
        'library' => ['ekan_statistics/dashboard_resource_pie_chart'],
        'drupalSettings' => [
          'dashboard_resource' => [
            'data' => $data,
          ],
        ],
      ],
    ];
    return $build;
  }

  /**
   * Builds the dashboard dataset pie chart.
   */
  public function buildDashboardDatasetByLicensePieChart(): array {
    $query = $this->connection->select('dataset', 'dataset');
    $query->fields('dataset', ['license']);
    $query->addExpression('COUNT(*)', 'license_count');
    $query->condition('dataset.status', 1);
    $query->groupBy('license');
    $query->orderBy('license', 'DESC');
    $query->distinct();
    $results = $query->execute()->fetchAllAssoc('license');
    $data = [];
    $licenses = \Drupal::service('ekan_core.license_handler');
    $licenses_info = $licenses->getLicenseOptions();
    foreach ($results as $result) {
      $data[] = [
        'name' => $licenses_info[$result->license]['label'],
        'value' => $result->license_count,
      ];
    }
    $build['license_chart'] = [
      '#type' => 'html_tag',
      '#tag' => 'div',
      '#attributes' => [
        'class' => ['license-pie-chart'],
        'id' => 'dashboard-license-chart-container',
        'style' => 'height:400px;',
      ],
      '#attached' => [
        'library' => ['ekan_statistics/dashboard_license_pie_chart'],
        'drupalSettings' => [
          'dashboard_license' => [
            'data' => $data,
          ],
        ],
      ],
    ];
    return $build;
  }

  /**
   * Builds the dashboard number of datasets per topic bar chart.
   */
  public function buildDashboardTopicsBarChart(): array {
    $query = $this->connection->select('dataset__topic', 'd_top');
    $query->fields('d_top', ['topic_target_id']);
    $query->addExpression('COUNT(*)', 'topic_count');
    $query->join('taxonomy_term_field_data', 'term_data', 'term_data.tid = d_top.topic_target_id');
    $query->fields('term_data', ['name']);
    $query->condition('d_top.bundle', 'dataset');
    $query->condition('d_top.deleted', 0);
    $query->groupBy('d_top.topic_target_id');
    $query->orderBy('topic_count', 'DESC');
    $query->distinct();
    $results = $query->execute()->fetchAllAssoc('topic_target_id');
    $topics = [];
    $topics_count = [];
    foreach ($results as $result) {
      $topics[] = $result->name;
      $topics_count[] = $result->topic_count;
    }
    $build['topics_chart'] = [
      '#type' => 'html_tag',
      '#tag' => 'div',
      '#attributes' => [
        'class' => ['statistics-topics-chart'],
        'id' => 'dashboard-topics-chart-container',
        'style' => 'height:600px;',
      ],
      '#attached' => [
        'library' => ['ekan_statistics/dashboard_topics_bar_chart'],
        'drupalSettings' => [
          'dashboard_topics' => [
            'data' => $topics_count,
            'topics' => $topics,
          ],
        ],
      ],
    ];
    return $build;
  }

}

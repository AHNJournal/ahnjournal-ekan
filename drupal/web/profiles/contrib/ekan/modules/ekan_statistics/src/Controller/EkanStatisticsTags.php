<?php

namespace Drupal\ekan_statistics\Controller;

use Drupal\Core\Link;
use Drupal\Core\Url;

/**
 * Ekan statistics topics controller.
 */
class EkanStatisticsTags extends EkanStatisticsControllerBase {

  /**
   * Dashboard page build.
   */
  public function build(): array {
    $build = parent::build();
    $build['content'] = [
      '#type' => 'inline_template',
      '#context' => [
        'tags_cloud' => $this->buildTagsCloud(),
        'tags_table' => $this->buildTagsTable(),
      ],
      '#template' => <<< TWIG
        <div class="container tags-wrapper">
          <div class="row tags-row-1">
           <div class="col-sm tags-cloud-block bg-light rounded">
               {{ tags_cloud }}
            </div>
          </div>
           <div class="row tags-row-2 mt-5">
           <div class="col-sm tags-table-block bg-light rounded">
               {{ tags_table }}
            </div>
          </div>
        </div>
        TWIG,
    ];
    return $build;
  }

  /**
   * Builds the tags cloud renderable.
   */
  public function buildTagsCloud(): array {
    $results = $this->getTagsData(40);
    $starting_font_size = 35;
    $min_size = 15;
    $links = [];
    $i = 0;
    foreach ($results as $tid => $result) {
      $font_size = $starting_font_size - ($i * 2);
      if ($font_size < $min_size) {
        $font_size = $min_size;
      }
      $font_size .= 'px';
      $i++;
      $links[] = [
        'url' => Url::fromUserInput('/search?f[0]=tags:' . $tid),
        'title' => $result->name,
        'attributes' => [
          'class' => ['cloud-tag'],
          'style' => "font-size:$font_size;",
          'title' => "Click to view more details",
        ],
      ];

    }
    shuffle($links);
    $build['tag_cloud'] = [
      '#theme' => 'links',
      '#links' => $links,
      '#attached' => [
        'library' => ['ekan_statistics/tag_cloud'],

      ],
      '#prefix' => '<div class="cloud-div">',
      '#suffix' => '</div>',
    ];
    return $build;
  }

  /**
   * Builds the tags table.
   */
  public function buildTagsTable(): array {
    $results = $this->getTagsData(40);
    $rows = [];
    foreach ($results as $tag_id => $result) {
      $rows[$tag_id] =
        [Link::fromTextAndUrl($result->name, Url::fromUserInput('/search?f[0]=tags:' . $tag_id))->toString(),
          $result->dataset_count,
          $result->res_count,
        ];
    }
    $headers = ['Tags', 'Datasets', 'Resources'];
    $build['tags-table'] = [
      '#type' => 'table',
      '#header' => $headers,
      '#attributes' => [
        'class' => ['tags-groups-table'],
        'id' => 'tags-table-container',
      ],
      '#rows' => $rows,
    ];
    return $build;
  }

  /**
   * Returns the tags list with.
   */
  public function getTagsData($count = 20): array {
    $query = $this->connection->select('dataset__tags', 'tags');
    $query->fields('tags', ['tags_target_id']);
    $query->addExpression('COUNT(distinct tags.entity_id)', 'dataset_count');
    $query->leftJoin('resource__dataset_ref', 'res', 'res.dataset_ref_target_id = tags.entity_id');
    $query->addExpression('COUNT(distinct res.entity_id)', 'res_count');
    $query->join('taxonomy_term_field_data', 'term_data', 'term_data.tid = tags.tags_target_id');
    $query->fields('term_data', ['name']);
    $query->condition('tags.deleted', 0);
    $query->condition('term_data.vid', 'tags');
    $query->condition('term_data.status', 1);
    $query->groupBy('tags.tags_target_id');
    $query->orderBy('dataset_count', 'DESC');
    $query->range(0, $count);
    $query->distinct();
    return $query->execute()->fetchAllAssoc('tags_target_id');

  }

}

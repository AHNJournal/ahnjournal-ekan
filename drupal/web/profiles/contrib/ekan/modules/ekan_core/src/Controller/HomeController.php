<?php

namespace Drupal\ekan_core\Controller;

use Drupal\Core\Cache\CacheableMetadata;
use Drupal\Core\Controller\ControllerBase;
use Drupal\node\NodeInterface;

/**
 * HomePageController.
 */
class HomeController extends ControllerBase {

  /**
   * Displays home page.
   */
  public function build() {

    $build = [
      '#theme' => 'home_page',
    ];

    $cache_metadata = new CacheableMetadata();
    $cache_metadata->addCacheTags(['node_list']);

    // Get the most recent promoted page and use it for the title/text of the
    // home page template.
    $node_storage = \Drupal::entityTypeManager()->getStorage('node');
    $nids = $node_storage->getQuery()
      ->condition('type', 'page')
      ->condition('status', NodeInterface::PUBLISHED)
      ->condition('promote', NodeInterface::PROMOTED)
      ->sort('created', 'DESC')
      ->execute();

    if ($nids) {
      $node = $node_storage->load(reset($nids));
      if ($node instanceof NodeInterface) {
        $cache_metadata->addCacheableDependency($node);
        $build['#body'] = $node->get('body')->view([
          'type' => 'text_summary_or_trimmed',
          'label' => 'hidden',
        ]);
        $build['#title'] = $node->label();
        $lopts = [
          'attributes' => [
            'class' => ['about-btn', 'btn', 'btn-default',
            ],
          ],
        ];
        $build['#read_more_link'] = $node->toLink($this->t("Read More"), 'canonical', $lopts);
      }
    }

    $cache_metadata->applyTo($build);

    return ['content' => $build];
  }

}

<?php

namespace Drupal\ekan_statistics\Controller;

use Drupal\Core\Cache\CacheableMetadata;
use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Database\Connection;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Ekan statistics controller base.
 */
abstract class EkanStatisticsControllerBase extends ControllerBase {
  /**
   * The database connection.
   *
   * @var \Drupal\Core\Database\Connection
   */
  protected $connection;

  /**
   * Constructs Ekan Statistics object.
   *
   * @param \Drupal\Core\Database\Connection $connection
   *   The current active database's master connection.
   */
  public function __construct(Connection $connection) {
    $this->connection = $connection;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('database'),
    );
  }

  /**
   * Build function generate statistics page.
   *
   * @return array
   *   Returns renderable array.
   */
  public function build(): array {
    $build = [];
    $cacheability = new CacheableMetadata();
    $cacheability->addCacheTags(['dataset_list', 'resource_list']);
    $cacheability->applyTo($build);
    return $build;
  }

}

<?php

namespace Drupal\ekan_core\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Routing\LocalRedirectResponse;
use Drupal\ekan_core\Service\PodDataBuilderInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Controller to build Project Open Data data.json for Ekan datasets.
 */
class PodDatasetApi extends ControllerBase {

  /**
   * The service which is generating our structured output.
   *
   * @var \Drupal\ekan_core\Service\PodDataBuilderInterface
   */
  protected $datasetBuilder;

  /**
   * {@inheritDoc}
   */
  public static function create(ContainerInterface $container) {
    return new static($container->get('ekan_core.pod_data_builder'));
  }

  /**
   * {@inheritDoc}
   */
  public function __construct(PodDataBuilderInterface $datasetBuilder) {
    $this->datasetBuilder = $datasetBuilder;
  }

  /**
   * Return the dataset pod data.json redirect.
   *
   * @return \Drupal\Core\Routing\LocalRedirectResponse
   *   A redirect to the cached data.json file.
   */
  public function retrieve() {
    $file_path = $this->datasetBuilder->getCachedPath();
    $cachable_metadata = $this->datasetBuilder->cacheableMetadata();
    if (is_file($file_path)) {
      // Redirect should be cached for as long as the data is cached.
      $response = new LocalRedirectResponse(file_create_url($file_path));
      $response->getCacheableMetadata()->addCacheableDependency($cachable_metadata);
      $cache_expiry_time = \Drupal::time()->getRequestTime() + $cachable_metadata->getCacheMaxAge();
      $response->setExpires(\DateTime::createFromFormat('U', $cache_expiry_time));
      return $response;
    }
    else {
      throw new NotFoundHttpException();
    }
  }

}

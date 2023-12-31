<?php

namespace Drupal\jsonapi_earlyrendering_workaround\EventSubscriber;

use Drupal\Core\Cache\CacheableResponseInterface;
use Drupal\Core\EventSubscriber\EarlyRenderingControllerWrapperSubscriber as OriginalEarlyRenderingControllerWrapperSubscriber;
use Drupal\Core\Render\RenderContext;

/**
 * EarlyRenderingControllerWrapperSubscriber fixes jsonapi early render issues.
 */
class EarlyRenderingControllerWrapperSubscriber extends OriginalEarlyRenderingControllerWrapperSubscriber {

  /**
   * {@inheritdoc}
   */
  protected $originalService;

  /**
   * {@inheritdoc}
   */
  public function __construct($originalService) {
    $this->originalService = $originalService;
    parent::__construct($this->originalService->argumentResolver, $this->originalService->renderer);
  }

  /**
   * {@inheritdoc}
   */
  protected function wrapControllerExecutionInRenderContext($controller, array $arguments) {
    if (get_class($controller[0]) === "Drupal\jsonapi_resources\Unstable\Controller\JsonapiResourceController" || get_class($controller[0]) === "Drupal\jsonapi\Controller\EntityResource") {
      $context = new RenderContext();
      $response = $this->renderer->executeInRenderContext($context, function () use ($controller, $arguments) {
        return call_user_func_array($controller, $arguments);
      });
      if (!$context->isEmpty() && $response instanceof CacheableResponseInterface) {
        $response->addCacheableDependency($context->pop());
      }
      return $response;
    }
    return $this->originalService->wrapControllerExecutionInRenderContext($controller, $arguments);
  }

}

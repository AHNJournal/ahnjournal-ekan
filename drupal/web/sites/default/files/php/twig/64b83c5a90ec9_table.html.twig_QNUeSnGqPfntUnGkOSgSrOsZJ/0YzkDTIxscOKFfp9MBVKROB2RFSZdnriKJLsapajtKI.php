<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/contrib/radix/templates/dataset/table.html.twig */
class __TwigTemplate_51d6b39f403dd72c374948e2e82971bfe8b0cca39f5a6d1a26191d3e6a755469 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 42
        $this->loadTemplate("@radix/table/table.twig", "themes/contrib/radix/templates/dataset/table.html.twig", 42)->display($context);
    }

    public function getTemplateName()
    {
        return "themes/contrib/radix/templates/dataset/table.html.twig";
    }

    public function getDebugInfo()
    {
        return array (  39 => 42,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/contrib/radix/templates/dataset/table.html.twig", "/home/ekan/drupal/web/themes/contrib/radix/templates/dataset/table.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("include" => 42);
        static $filters = array();
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['include'],
                [],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}

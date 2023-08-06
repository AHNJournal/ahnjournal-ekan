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

/* @ekan_theme/node/node.twig */
class __TwigTemplate_1f9f17964fb8f6448dc2f751e60748f125af5d73f2fbbf082a2c19c790f514ef extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
            'content' => [$this, 'block_content'],
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 8
        $context["classes"] = [0 => "node", 1 => ((twig_get_attribute($this->env, $this->source,         // line 10
($context["node"] ?? null), "isPromoted", [], "method", false, false, true, 10)) ? ("node--promoted") : ("")), 2 => ((twig_get_attribute($this->env, $this->source,         // line 11
($context["node"] ?? null), "isSticky", [], "method", false, false, true, 11)) ? ("node--sticky") : ("")), 3 => (( !twig_get_attribute($this->env, $this->source,         // line 12
($context["node"] ?? null), "isPublished", [], "method", false, false, true, 12)) ? ("node--unpublished") : ("")), 4 => \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source,         // line 13
($context["node"] ?? null), "bundle", [], "any", false, false, true, 13), 13, $this->source)), 5 => ((\Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source,         // line 14
($context["node"] ?? null), "bundle", [], "any", false, false, true, 14), 14, $this->source)) . "--") . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(($context["view_mode"] ?? null), 14, $this->source)))];
        // line 17
        echo "<article";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 17), 17, $this->source), "html", null, true);
        echo ">
  ";
        // line 18
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_prefix"] ?? null), 18, $this->source), "html", null, true);
        echo "
  ";
        // line 19
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_suffix"] ?? null), 19, $this->source), "html", null, true);
        echo "

  ";
        // line 21
        $this->displayBlock('content', $context, $blocks);
        // line 24
        echo "</article>
";
    }

    // line 21
    public function block_content($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 22
        echo "    ";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["content"] ?? null), 22, $this->source), "html", null, true);
        echo "
  ";
    }

    public function getTemplateName()
    {
        return "@ekan_theme/node/node.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  72 => 22,  68 => 21,  63 => 24,  61 => 21,  56 => 19,  52 => 18,  47 => 17,  45 => 14,  44 => 13,  43 => 12,  42 => 11,  41 => 10,  40 => 8,);
    }

    public function getSourceContext()
    {
        return new Source("", "@ekan_theme/node/node.twig", "/home/ekan/drupal/web/profiles/contrib/ekan/themes/ekan_theme_dark/src/components/node/node.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 8, "block" => 21);
        static $filters = array("clean_class" => 13, "escape" => 17);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['set', 'block'],
                ['clean_class', 'escape'],
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

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

/* profiles/contrib/ekan/themes/ekan_theme/templates/views/views-view-fields--ekan-search.html.twig */
class __TwigTemplate_2c01a09bec1491556ef2c6e4b31b3e447debd6e8f3693bf9973d509c3c96a43b extends \Twig\Template
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
        // line 34
        echo "<div class=\"icon col-md-2 col-lg-1 col-xs-2\">
    <i class=\"icon-dkan-";
        // line 35
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed((($__internal_compile_0 = twig_get_attribute($this->env, $this->source, ($context["row"] ?? null), "search_api_combined_entity_type", [], "any", false, false, true, 35)) && is_array($__internal_compile_0) || $__internal_compile_0 instanceof ArrayAccess ? ($__internal_compile_0[0] ?? null) : null), 35, $this->source)), "html", null, true);
        echo "\"></i>
</div>
<div class=\"fields col-md-10 col-lg-11 col-xs-10\">
";
        // line 38
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["fields"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["field"]) {
            // line 39
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["field"], "separator", [], "any", false, false, true, 39), 39, $this->source), "html", null, true);
            // line 40
            if (twig_get_attribute($this->env, $this->source, $context["field"], "wrapper_element", [], "any", false, false, true, 40)) {
                // line 41
                echo "<";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["field"], "wrapper_element", [], "any", false, false, true, 41), 41, $this->source), "html", null, true);
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["field"], "wrapper_attributes", [], "any", false, false, true, 41), 41, $this->source), "html", null, true);
                echo ">";
            }
            // line 43
            if (twig_get_attribute($this->env, $this->source, $context["field"], "label", [], "any", false, false, true, 43)) {
                // line 44
                if (twig_get_attribute($this->env, $this->source, $context["field"], "label_element", [], "any", false, false, true, 44)) {
                    // line 45
                    echo "<";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["field"], "label_element", [], "any", false, false, true, 45), 45, $this->source), "html", null, true);
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["field"], "label_attributes", [], "any", false, false, true, 45), 45, $this->source), "html", null, true);
                    echo ">";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["field"], "label", [], "any", false, false, true, 45), 45, $this->source), "html", null, true);
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["field"], "label_suffix", [], "any", false, false, true, 45), 45, $this->source), "html", null, true);
                    echo "</";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["field"], "label_element", [], "any", false, false, true, 45), 45, $this->source), "html", null, true);
                    echo ">";
                } else {
                    // line 47
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["field"], "label", [], "any", false, false, true, 47), 47, $this->source), "html", null, true);
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["field"], "label_suffix", [], "any", false, false, true, 47), 47, $this->source), "html", null, true);
                }
            }
            // line 50
            if (twig_get_attribute($this->env, $this->source, $context["field"], "element_type", [], "any", false, false, true, 50)) {
                // line 51
                echo "<";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["field"], "element_type", [], "any", false, false, true, 51), 51, $this->source), "html", null, true);
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["field"], "element_attributes", [], "any", false, false, true, 51), 51, $this->source), "html", null, true);
                echo ">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["field"], "content", [], "any", false, false, true, 51), 51, $this->source), "html", null, true);
                echo "</";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["field"], "element_type", [], "any", false, false, true, 51), 51, $this->source), "html", null, true);
                echo ">";
            } else {
                // line 53
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["field"], "content", [], "any", false, false, true, 53), 53, $this->source), "html", null, true);
            }
            // line 55
            if (twig_get_attribute($this->env, $this->source, $context["field"], "wrapper_element", [], "any", false, false, true, 55)) {
                // line 56
                echo "</";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["field"], "wrapper_element", [], "any", false, false, true, 56), 56, $this->source), "html", null, true);
                echo ">";
            }
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['field'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 59
        echo "</div>
";
    }

    public function getTemplateName()
    {
        return "profiles/contrib/ekan/themes/ekan_theme/templates/views/views-view-fields--ekan-search.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  108 => 59,  99 => 56,  97 => 55,  94 => 53,  84 => 51,  82 => 50,  77 => 47,  66 => 45,  64 => 44,  62 => 43,  56 => 41,  54 => 40,  52 => 39,  48 => 38,  42 => 35,  39 => 34,);
    }

    public function getSourceContext()
    {
        return new Source("", "profiles/contrib/ekan/themes/ekan_theme/templates/views/views-view-fields--ekan-search.html.twig", "/home/ekan/drupal/web/profiles/contrib/ekan/themes/ekan_theme/templates/views/views-view-fields--ekan-search.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("for" => 38, "if" => 40);
        static $filters = array("escape" => 35, "clean_class" => 35);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['for', 'if'],
                ['escape', 'clean_class'],
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

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

/* profiles/contrib/ekan/themes/ekan_theme_dark/templates/facets/facets-item-list.html.twig */
class __TwigTemplate_cba21f445c99617c3ed091a6a1cfd2ad3baf1f4282a9f4ffee1fe3af0d355908 extends \Twig\Template
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
        // line 27
        echo "
<div class=\"facets-widget-";
        // line 28
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["facet"] ?? null), "widget", [], "any", false, false, true, 28), "type", [], "any", false, false, true, 28), 28, $this->source), "html", null, true);
        echo "\">
  <details ";
        // line 29
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["is_open"] ?? null), 29, $this->source), "html", null, true);
        echo ">
  <summary>
  ";
        // line 31
        if (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["facet"] ?? null), "widget", [], "any", false, false, true, 31), "type", [], "any", false, false, true, 31)) {
            // line 32
            $context["attributes"] = twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ("item-list__" . $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["facet"] ?? null), "widget", [], "any", false, false, true, 32), "type", [], "any", false, false, true, 32), 32, $this->source))], "method", false, false, true, 32);
            // line 33
            echo "  ";
        }
        // line 35
        if ( !twig_test_empty(($context["title"] ?? null))) {
            // line 36
            echo "<h3>";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title"] ?? null), 36, $this->source), "html", null, true);
            echo "</h3>";
        }
        // line 38
        echo "</summary>";
        // line 40
        if (($context["items"] ?? null)) {
            // line 41
            echo "<";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["list_type"] ?? null), 41, $this->source), "html", null, true);
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["attributes"] ?? null), 41, $this->source), "html", null, true);
            echo ">";
            // line 43
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
            foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                // line 45
                if (((($__internal_compile_0 = (($__internal_compile_1 = twig_get_attribute($this->env, $this->source, $context["item"], "value", [], "any", false, false, true, 45)) && is_array($__internal_compile_1) || $__internal_compile_1 instanceof ArrayAccess ? ($__internal_compile_1["#title"] ?? null) : null)) && is_array($__internal_compile_0) || $__internal_compile_0 instanceof ArrayAccess ? ($__internal_compile_0["#is_active"] ?? null) : null) == "TRUE")) {
                    // line 46
                    echo "  ";
                    // line 47
                    echo "        <li";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "attributes", [], "any", false, false, true, 47), 47, $this->source), "html", null, true);
                    echo " id=\"active-checkbox\">
            ";
                    // line 48
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "value", [], "any", false, false, true, 48), 48, $this->source), "html", null, true);
                    echo "
            <a href=\"";
                    // line 49
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, (($__internal_compile_2 = twig_get_attribute($this->env, $this->source, $context["item"], "value", [], "any", false, false, true, 49)) && is_array($__internal_compile_2) || $__internal_compile_2 instanceof ArrayAccess ? ($__internal_compile_2["#url"] ?? null) : null), "toString", [], "method", false, false, true, 49), 49, $this->source), "html", null, true);
                    echo "\" class=\"remove-active\" rel=\"tooltip\" title=\"Remove item\">
              <i class=\"fas fa-times remove-btn\"></i>
            </a>
        </li>
      ";
                } else {
                    // line 54
                    echo "        <li";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "attributes", [], "any", false, false, true, 54), 54, $this->source), "html", null, true);
                    echo ">
          ";
                    // line 55
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "value", [], "any", false, false, true, 55), 55, $this->source), "html", null, true);
                    echo "
        </li>
      ";
                }
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 59
            echo "</";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["list_type"] ?? null), 59, $this->source), "html", null, true);
            echo ">";
        }
        // line 63
        if ((twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["facet"] ?? null), "widget", [], "any", false, false, true, 63), "type", [], "any", false, false, true, 63) == "dropdown")) {
            // line 64
            echo "  <label id=\"facet_";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["facet"] ?? null), "id", [], "any", false, false, true, 64), 64, $this->source), "html", null, true);
            echo "_label\">Facet ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["facet"] ?? null), "label", [], "any", false, false, true, 64), 64, $this->source), "html", null, true);
            echo "</label>";
        }
        // line 66
        echo "  </details>
</div>


";
    }

    public function getTemplateName()
    {
        return "profiles/contrib/ekan/themes/ekan_theme_dark/templates/facets/facets-item-list.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  128 => 66,  121 => 64,  119 => 63,  114 => 59,  104 => 55,  99 => 54,  91 => 49,  87 => 48,  82 => 47,  80 => 46,  78 => 45,  74 => 43,  69 => 41,  67 => 40,  65 => 38,  60 => 36,  58 => 35,  55 => 33,  53 => 32,  51 => 31,  46 => 29,  42 => 28,  39 => 27,);
    }

    public function getSourceContext()
    {
        return new Source("", "profiles/contrib/ekan/themes/ekan_theme_dark/templates/facets/facets-item-list.html.twig", "/home/ekan/drupal/web/profiles/contrib/ekan/themes/ekan_theme_dark/templates/facets/facets-item-list.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 31, "set" => 32, "for" => 43);
        static $filters = array("escape" => 28);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['if', 'set', 'for'],
                ['escape'],
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

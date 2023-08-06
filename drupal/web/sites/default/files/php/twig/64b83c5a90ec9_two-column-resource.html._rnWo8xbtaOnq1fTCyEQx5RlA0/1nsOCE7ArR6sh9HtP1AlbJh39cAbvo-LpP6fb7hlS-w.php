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

/* profiles/contrib/ekan/themes/ekan_theme_dark/templates/layout/two-column-resource.html.twig */
class __TwigTemplate_357142cb68d6ad58b460213a6d83cd291695020c04b307dbdea58ba65b7d2321 extends \Twig\Template
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
        // line 1
        if (($context["content"] ?? null)) {
            // line 2
            echo "  <div class=\"resource_content\">
    ";
            // line 3
            if (twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "main", [], "any", false, false, true, 3)) {
                // line 4
                echo "      <div ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["region_attributes"] ?? null), "main", [], "any", false, false, true, 4), "addClass", [0 => "resource_body"], "method", false, false, true, 4), 4, $this->source), "html", null, true);
                echo ">
        ";
                // line 5
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "main", [], "any", false, false, true, 5), 5, $this->source), "html", null, true);
                echo "
      </div>
    ";
            }
            // line 8
            echo "  </div>

  <div ";
            // line 10
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => "resource-blocks"], "method", false, false, true, 10), 10, $this->source), "html", null, true);
            echo ">
    <div class=\"left-block col-sm-6\">
      ";
            // line 13
            echo "      ";
            if (twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "resources_info", [], "any", false, false, true, 13)) {
                // line 14
                echo "        <div ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["region_attributes"] ?? null), "resources_info", [], "any", false, false, true, 14), "addClass", [0 => "related-resource"], "method", false, false, true, 14), 14, $this->source), "html", null, true);
                echo ">
          ";
                // line 15
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "resources_info", [], "any", false, false, true, 15), 15, $this->source), "html", null, true);
                echo "
        </div>
      ";
            }
            // line 18
            echo "    </div>

    <div class=\"right-block col-sm-6\">
      ";
            // line 22
            echo "      ";
            if (twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "additional_info", [], "any", false, false, true, 22)) {
                // line 23
                echo "        <div ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["region_attributes"] ?? null), "additional_info", [], "any", false, false, true, 23), "addClass", [0 => "resource-additional-info"], "method", false, false, true, 23), 23, $this->source), "html", null, true);
                echo ">
          ";
                // line 24
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "additional_info", [], "any", false, false, true, 24), 24, $this->source), "html", null, true);
                echo "
        </div>
      ";
            }
            // line 27
            echo "    </div>
  </div>
";
        }
        // line 30
        echo "
";
    }

    public function getTemplateName()
    {
        return "profiles/contrib/ekan/themes/ekan_theme_dark/templates/layout/two-column-resource.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  104 => 30,  99 => 27,  93 => 24,  88 => 23,  85 => 22,  80 => 18,  74 => 15,  69 => 14,  66 => 13,  61 => 10,  57 => 8,  51 => 5,  46 => 4,  44 => 3,  41 => 2,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "profiles/contrib/ekan/themes/ekan_theme_dark/templates/layout/two-column-resource.html.twig", "/home/ekan/drupal/web/profiles/contrib/ekan/themes/ekan_theme_dark/templates/layout/two-column-resource.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 1);
        static $filters = array("escape" => 4);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['if'],
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

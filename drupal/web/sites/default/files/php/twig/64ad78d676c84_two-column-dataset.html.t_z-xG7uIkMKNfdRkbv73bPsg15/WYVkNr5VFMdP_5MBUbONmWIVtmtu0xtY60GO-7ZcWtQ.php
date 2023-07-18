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

/* profiles/contrib/ekan/themes/ekan_theme/templates/layout/two-column-dataset.html.twig */
class __TwigTemplate_35ed49381443dd3cb87d1a77d91940be2c3867d97544114fb16bb2304eab5b33 extends \Twig\Template
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
            echo "  <div ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => "two-column-dataset dataset_content row"], "method", false, false, true, 2), 2, $this->source), "html", null, true);
            echo ">
    <div class=\"col-sm-3 dataset_side_menu \">
      ";
            // line 5
            echo "      ";
            if (twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "publisher_info", [], "any", false, false, true, 5)) {
                // line 6
                echo "        <div ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["region_attributes"] ?? null), "publisher_info", [], "any", false, false, true, 6), "addClass", [0 => "dataset_publisher_side pane-block"], "method", false, false, true, 6), 6, $this->source), "html", null, true);
                echo ">
          ";
                // line 7
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "publisher_info", [], "any", false, false, true, 7), 7, $this->source), "html", null, true);
                echo "
        </div>
      ";
            }
            // line 10
            echo "
      ";
            // line 12
            echo "      ";
            if (twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "license", [], "any", false, false, true, 12)) {
                // line 13
                echo "        <div ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["region_attributes"] ?? null), "license", [], "any", false, false, true, 13), "addClass", [0 => "dataset_license_side pane-block"], "method", false, false, true, 13), 13, $this->source), "html", null, true);
                echo ">
          ";
                // line 14
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "license", [], "any", false, false, true, 14), 14, $this->source), "html", null, true);
                echo "
        </div>
      ";
            }
            // line 17
            echo "
      ";
            // line 19
            echo "      ";
            if (twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "location", [], "any", false, false, true, 19)) {
                // line 20
                echo "      <div ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["region_attributes"] ?? null), "location", [], "any", false, false, true, 20), "addClass", [0 => "dataset_location_side pane-block"], "method", false, false, true, 20), 20, $this->source), "html", null, true);
                echo ">
        ";
                // line 21
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "location", [], "any", false, false, true, 21), 21, $this->source), "html", null, true);
                echo "
      </div>
      ";
            }
            // line 24
            echo "    </div>

    ";
            // line 27
            $context["content_classes"] = [0 => (((twig_get_attribute($this->env, $this->source,             // line 28
($context["content"] ?? null), "publisher_info", [], "any", false, false, true, 28) || twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "license", [], "any", false, false, true, 28))) ? ("col-sm-9 dataset_main_content") : ("")), 1 => (((twig_get_attribute($this->env, $this->source,             // line 29
($context["content"] ?? null), "publisher_info", [], "any", false, false, true, 29) && twig_test_empty(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "license", [], "any", false, false, true, 29)))) ? ("col-sm-12 dataset_main_content") : (""))];
            // line 32
            echo "
    <div ";
            // line 33
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content_attributes"] ?? null), "addClass", [0 => ($context["content_classes"] ?? null)], "method", false, false, true, 33), 33, $this->source), "html", null, true);
            echo ">
      ";
            // line 34
            if (twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "main", [], "any", false, false, true, 34)) {
                // line 35
                echo "        <div ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["region_attributes"] ?? null), "main", [], "any", false, false, true, 35), "addClass", [0 => "main"], "method", false, false, true, 35), 35, $this->source), "html", null, true);
                echo ">
          ";
                // line 36
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "main", [], "any", false, false, true, 36), 36, $this->source), "html", null, true);
                echo "
        </div>
      ";
            }
            // line 39
            echo "    </div>
  </div>
";
        }
        // line 42
        echo "
";
    }

    public function getTemplateName()
    {
        return "profiles/contrib/ekan/themes/ekan_theme/templates/layout/two-column-dataset.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  128 => 42,  123 => 39,  117 => 36,  112 => 35,  110 => 34,  106 => 33,  103 => 32,  101 => 29,  100 => 28,  99 => 27,  95 => 24,  89 => 21,  84 => 20,  81 => 19,  78 => 17,  72 => 14,  67 => 13,  64 => 12,  61 => 10,  55 => 7,  50 => 6,  47 => 5,  41 => 2,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "profiles/contrib/ekan/themes/ekan_theme/templates/layout/two-column-dataset.html.twig", "/home/ekan/drupal/web/profiles/contrib/ekan/themes/ekan_theme/templates/layout/two-column-dataset.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 1, "set" => 27);
        static $filters = array("escape" => 2);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['if', 'set'],
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

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

/* __string_template__a2c03df782a5c3f124f81b60c8a260fae31bf29c3b0d62c57bdf412f2f83de35 */
class __TwigTemplate_a1210525f4bb2265199af58a14135eaf79f8c5a471c650fb8a99d4b2582f1d45 extends \Twig\Template
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
        echo "<a href=\"";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["view_resource_1"] ?? null), 1, $this->source), "html", null, true);
        echo "\" class=\"link_to_resource resource-link \">
";
        // line 2
        if (($context["thumbnail__target_id"] ?? null)) {
            // line 3
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["thumbnail__target_id"] ?? null), 3, $this->source), "html", null, true);
            echo "
";
        } else {
            // line 5
            echo "<span class=\"format-label\" data-format=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["resource_format"] ?? null), 5, $this->source), "html", null, true);
            echo "\"><div class=\"tooltiptext \">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["resource_format"] ?? null), 5, $this->source), "html", null, true);
            echo "</div></span>
";
        }
        // line 7
        echo "</a>
<div class=\"text ml-4\">

";
        // line 10
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title"] ?? null), 10, $this->source), "html", null, true);
        echo " 
";
        // line 11
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["body__value"] ?? null), 11, $this->source), "html", null, true);
        echo "
</div>

<div class=\"links-wrapper ml-auto p-2\">
";
        // line 15
        if (($context["visualisation_1"] ?? null)) {
            // line 16
            echo "<div class=\"btn fa-bar-chart data-link btn-primary preview_btn preview-btn-view-vis-resource-";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["id"] ?? null), 16, $this->source), "html", null, true);
            echo "\" id=\"preview_btn\"  >Preview</div>
";
        }
        // line 18
        echo "
";
        // line 19
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["upload__target_id"] ?? null), 19, $this->source), "html", null, true);
        echo "

</div>

";
    }

    public function getTemplateName()
    {
        return "__string_template__a2c03df782a5c3f124f81b60c8a260fae31bf29c3b0d62c57bdf412f2f83de35";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  86 => 19,  83 => 18,  77 => 16,  75 => 15,  68 => 11,  64 => 10,  59 => 7,  51 => 5,  46 => 3,  44 => 2,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "__string_template__a2c03df782a5c3f124f81b60c8a260fae31bf29c3b0d62c57bdf412f2f83de35", "");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 2);
        static $filters = array("escape" => 1);
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

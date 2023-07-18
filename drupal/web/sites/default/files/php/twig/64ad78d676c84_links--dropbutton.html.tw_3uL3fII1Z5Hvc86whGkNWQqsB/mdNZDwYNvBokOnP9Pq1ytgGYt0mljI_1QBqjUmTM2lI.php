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

/* themes/contrib/radix/templates/navigation/links--dropbutton.html.twig */
class __TwigTemplate_72ce86387b645b5c019fc5864406c65a64e5f1dafa33d48b01a7ad34983f7967 extends \Twig\Template
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
        // line 7
        echo "<div ";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "removeClass", [0 => "dropbutton"], "method", false, false, true, 7), "addClass", [0 => ((($context["split"] ?? null)) ? ("btn-group") : ("dropdown"))], "method", false, false, true, 7), 7, $this->source), "html", null, true);
        echo ">
  ";
        // line 8
        if (($context["split"] ?? null)) {
            // line 9
            echo "    ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["button"] ?? null), 9, $this->source), "html", null, true);
            echo "
  ";
        }
        // line 11
        echo "
  ";
        // line 12
        if (($context["links"] ?? null)) {
            // line 13
            echo "    <button type=\"button\" class=\"btn btn-sm btn-outline-dark dropdown-toggle ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(((($context["split"] ?? null)) ? ("dropdown-toggle-split") : ("")));
            echo "\" data-toggle=\"dropdown\">
      ";
            // line 14
            if (($context["split"] ?? null)) {
                // line 15
                echo "        <span class=\"sr-only\">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Toggle Dropdown"));
                echo "</span>
      ";
            } else {
                // line 17
                echo "        ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["button"] ?? null), 17, $this->source), "html", null, true);
                echo "
      ";
            }
            // line 19
            echo "    </button>
    <div class=\"dropdown-menu dropdown-menu-right\">";
            // line 21
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["links"] ?? null));
            foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                // line 22
                if (twig_get_attribute($this->env, $this->source, $context["item"], "link", [], "any", false, false, true, 22)) {
                    // line 23
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "link", [], "any", false, false, true, 23), 23, $this->source), "html", null, true);
                } elseif (twig_get_attribute($this->env, $this->source,                 // line 24
$context["item"], "text_attributes", [], "any", false, false, true, 24)) {
                    // line 25
                    echo "<span";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "text_attributes", [], "any", false, false, true, 25), 25, $this->source), "html", null, true);
                    echo ">";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "text", [], "any", false, false, true, 25), 25, $this->source), "html", null, true);
                    echo "</span>";
                } else {
                    // line 27
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "text", [], "any", false, false, true, 27), 27, $this->source), "html", null, true);
                }
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 30
            echo "</div>
  ";
        }
        // line 32
        echo "</div>
";
    }

    public function getTemplateName()
    {
        return "themes/contrib/radix/templates/navigation/links--dropbutton.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  107 => 32,  103 => 30,  96 => 27,  89 => 25,  87 => 24,  85 => 23,  83 => 22,  79 => 21,  76 => 19,  70 => 17,  64 => 15,  62 => 14,  57 => 13,  55 => 12,  52 => 11,  46 => 9,  44 => 8,  39 => 7,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/contrib/radix/templates/navigation/links--dropbutton.html.twig", "/home/ekan/drupal/web/themes/contrib/radix/templates/navigation/links--dropbutton.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 8, "for" => 21);
        static $filters = array("escape" => 7, "t" => 15);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['if', 'for'],
                ['escape', 't'],
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

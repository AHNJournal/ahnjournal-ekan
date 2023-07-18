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

/* profiles/contrib/ekan/themes/ekan_theme/templates/field/field--resource--resource-type--resource--default.html.twig */
class __TwigTemplate_4b35065635e17a27f034ea7154361b9e01e7544de75486ab56cbc1a0ea25adfc extends \Twig\Template
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
        // line 8
        $context["classes"] = [0 => ((\Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(        // line 9
($context["bundle"] ?? null), 9, $this->source)) . "__") . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(($context["field_name_clean"] ?? null), 9, $this->source))), 1 => (((        // line 10
($context["label_display"] ?? null) == "inline")) ? ("d-flex") : ("")), 2 => "label", 3 => "label-primary"];
        // line 16
        $context["title_classes"] = [0 => "field__label", 1 => "font-weight-bold", 2 => (((        // line 19
($context["label_display"] ?? null) == "visually_hidden")) ? ("visually-hidden") : (""))];
        // line 22
        echo "
";
        // line 23
        if (($context["label_hidden"] ?? null)) {
            // line 24
            echo "    ";
            if (($context["multiple"] ?? null)) {
                // line 25
                echo "        <div";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 25), 25, $this->source), "html", null, true);
                echo ">
            ";
                // line 26
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                    // line 27
                    echo "                <div";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["item"], "attributes", [], "any", false, false, true, 27), "addClass", [0 => "field__item"], "method", false, false, true, 27), 27, $this->source), "html", null, true);
                    echo ">";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "content", [], "any", false, false, true, 27), 27, $this->source), "html", null, true);
                    echo "</div>
            ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 29
                echo "        </div>
    ";
            } else {
                // line 31
                echo "        ";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                    // line 32
                    echo "            <div";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 32), 32, $this->source), "html", null, true);
                    echo ">";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "content", [], "any", false, false, true, 32), 32, $this->source), "html", null, true);
                    echo "</div>
        ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 34
                echo "    ";
            }
        } else {
            // line 36
            echo "    <div";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 36), 36, $this->source), "html", null, true);
            echo ">
        <div";
            // line 37
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["title_attributes"] ?? null), "addClass", [0 => ($context["title_classes"] ?? null)], "method", false, false, true, 37), 37, $this->source), "html", null, true);
            echo ">
            ";
            // line 38
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["label"] ?? null), 38, $this->source), "html", null, true);
            if ((($context["label_display"] ?? null) == "inline")) {
                echo "<span class=\"field__label__suffix mr-1\">:</span>";
            }
            // line 39
            echo "        </div>
        ";
            // line 40
            if (($context["multiple"] ?? null)) {
                // line 41
                echo "        <div class=\"field__items\">
            ";
            }
            // line 43
            echo "            ";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
            foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                // line 44
                echo "                <div";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["item"], "attributes", [], "any", false, false, true, 44), "addClass", [0 => "field__item"], "method", false, false, true, 44), 44, $this->source), "html", null, true);
                echo ">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "content", [], "any", false, false, true, 44), 44, $this->source), "html", null, true);
                echo "</div>
            ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 46
            echo "            ";
            if (($context["multiple"] ?? null)) {
                // line 47
                echo "        </div>
        ";
            }
            // line 49
            echo "    </div>
";
        }
    }

    public function getTemplateName()
    {
        return "profiles/contrib/ekan/themes/ekan_theme/templates/field/field--resource--resource-type--resource--default.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  144 => 49,  140 => 47,  137 => 46,  126 => 44,  121 => 43,  117 => 41,  115 => 40,  112 => 39,  107 => 38,  103 => 37,  98 => 36,  94 => 34,  83 => 32,  78 => 31,  74 => 29,  63 => 27,  59 => 26,  54 => 25,  51 => 24,  49 => 23,  46 => 22,  44 => 19,  43 => 16,  41 => 10,  40 => 9,  39 => 8,);
    }

    public function getSourceContext()
    {
        return new Source("", "profiles/contrib/ekan/themes/ekan_theme/templates/field/field--resource--resource-type--resource--default.html.twig", "/home/ekan/drupal/web/profiles/contrib/ekan/themes/ekan_theme/templates/field/field--resource--resource-type--resource--default.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 8, "if" => 23, "for" => 26);
        static $filters = array("clean_class" => 9, "escape" => 25);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if', 'for'],
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

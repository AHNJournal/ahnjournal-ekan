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

/* profiles/contrib/ekan/themes/ekan_theme/templates/field/field--resource--title--resource.html.twig */
class __TwigTemplate_29874e610714519c9d6d50b031bc94a2fde1d5aba19f73a3f4bc01c7786985ed extends \Twig\Template
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
($context["label_display"] ?? null) == "inline")) ? ("d-flex") : (""))];
        // line 14
        $context["title_classes"] = [0 => "field__label", 1 => "font-weight-bold", 2 => (((        // line 17
($context["label_display"] ?? null) == "visually_hidden")) ? ("visually-hidden") : (""))];
        // line 20
        echo "
";
        // line 21
        if (($context["label_hidden"] ?? null)) {
            // line 22
            echo "  ";
            if (($context["multiple"] ?? null)) {
                // line 23
                echo "    <div";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 23), 23, $this->source), "html", null, true);
                echo ">
      ";
                // line 24
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                    // line 25
                    echo "        <h2";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["item"], "attributes", [], "any", false, false, true, 25), "addClass", [0 => "field__item"], "method", false, false, true, 25), 25, $this->source), "html", null, true);
                    echo ">";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "content", [], "any", false, false, true, 25), 25, $this->source), "html", null, true);
                    echo "</h2>
      ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 27
                echo "    </div>
  ";
            } else {
                // line 29
                echo "    ";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                    // line 30
                    echo "      <h2";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 30), 30, $this->source), "html", null, true);
                    echo ">";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "content", [], "any", false, false, true, 30), 30, $this->source), "html", null, true);
                    echo "</h2>
    ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 32
                echo "  ";
            }
        } else {
            // line 34
            echo "  <div";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 34), 34, $this->source), "html", null, true);
            echo ">
    <div";
            // line 35
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["title_attributes"] ?? null), "addClass", [0 => ($context["title_classes"] ?? null)], "method", false, false, true, 35), 35, $this->source), "html", null, true);
            echo ">
      ";
            // line 36
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["label"] ?? null), 36, $this->source), "html", null, true);
            if ((($context["label_display"] ?? null) == "inline")) {
                echo "<span class=\"field__label__suffix mr-1\">:</span>";
            }
            // line 37
            echo "    </div>
    ";
            // line 38
            if (($context["multiple"] ?? null)) {
                // line 39
                echo "    <div class=\"field__items\">
      ";
            }
            // line 41
            echo "      ";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
            foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                // line 42
                echo "        <h2";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["item"], "attributes", [], "any", false, false, true, 42), "addClass", [0 => "field__item"], "method", false, false, true, 42), 42, $this->source), "html", null, true);
                echo ">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "content", [], "any", false, false, true, 42), 42, $this->source), "html", null, true);
                echo "</h2>
      ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 44
            echo "      ";
            if (($context["multiple"] ?? null)) {
                // line 45
                echo "    </div>
    ";
            }
            // line 47
            echo "  </div>
";
        }
    }

    public function getTemplateName()
    {
        return "profiles/contrib/ekan/themes/ekan_theme/templates/field/field--resource--title--resource.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  144 => 47,  140 => 45,  137 => 44,  126 => 42,  121 => 41,  117 => 39,  115 => 38,  112 => 37,  107 => 36,  103 => 35,  98 => 34,  94 => 32,  83 => 30,  78 => 29,  74 => 27,  63 => 25,  59 => 24,  54 => 23,  51 => 22,  49 => 21,  46 => 20,  44 => 17,  43 => 14,  41 => 10,  40 => 9,  39 => 8,);
    }

    public function getSourceContext()
    {
        return new Source("", "profiles/contrib/ekan/themes/ekan_theme/templates/field/field--resource--title--resource.html.twig", "/home/ekan/drupal/web/profiles/contrib/ekan/themes/ekan_theme/templates/field/field--resource--title--resource.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 8, "if" => 21, "for" => 24);
        static $filters = array("clean_class" => 9, "escape" => 23);
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

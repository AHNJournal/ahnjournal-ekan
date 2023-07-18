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

/* @radix/table/table.twig */
class __TwigTemplate_207ef1a51fed3b6805865195fbb05733ab378d3ef5f3c9ec79b0e0d6e25ce442 extends \Twig\Template
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
        // line 10
        echo "
";
        // line 11
        $context["classes"] = twig_array_merge([0 => "table"], ((        // line 13
($context["utility_classes"] ?? null)) ? (($context["utility_classes"] ?? null)) : ([])));
        // line 14
        echo "
<table";
        // line 15
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 15), 15, $this->source), "html", null, true);
        echo ">
  ";
        // line 16
        if (($context["caption"] ?? null)) {
            // line 17
            echo "    <caption>";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["caption"] ?? null), 17, $this->source), "html", null, true);
            echo "</caption>
  ";
        }
        // line 19
        echo "
  ";
        // line 20
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["colgroups"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["colgroup"]) {
            // line 21
            echo "    ";
            if (twig_get_attribute($this->env, $this->source, $context["colgroup"], "cols", [], "any", false, false, true, 21)) {
                // line 22
                echo "      <colgroup";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["colgroup"], "attributes", [], "any", false, false, true, 22), 22, $this->source), "html", null, true);
                echo ">
        ";
                // line 23
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, $context["colgroup"], "cols", [], "any", false, false, true, 23));
                foreach ($context['_seq'] as $context["_key"] => $context["col"]) {
                    // line 24
                    echo "          <col";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["col"], "attributes", [], "any", false, false, true, 24), 24, $this->source), "html", null, true);
                    echo " />
        ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['col'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 26
                echo "      </colgroup>
    ";
            } else {
                // line 28
                echo "      <colgroup";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["colgroup"], "attributes", [], "any", false, false, true, 28), 28, $this->source), "html", null, true);
                echo " />
    ";
            }
            // line 30
            echo "  ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['colgroup'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 31
        echo "
  ";
        // line 32
        if (($context["header"] ?? null)) {
            // line 33
            echo "    <thead>
    <tr>
      ";
            // line 35
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["header"] ?? null));
            foreach ($context['_seq'] as $context["_key"] => $context["cell"]) {
                // line 36
                echo "      ";
                // line 37
                $context["cell_classes"] = [0 => ((twig_get_attribute($this->env, $this->source,                 // line 38
$context["cell"], "active_table_sort", [], "any", false, false, true, 38)) ? ("is-active") : (""))];
                // line 41
                echo "      <";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["cell"], "tag", [], "any", false, false, true, 41), 41, $this->source), "html", null, true);
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["cell"], "attributes", [], "any", false, false, true, 41), "addClass", [0 => ($context["cell_classes"] ?? null)], "method", false, false, true, 41), 41, $this->source), "html", null, true);
                echo ">";
                // line 42
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["cell"], "content", [], "any", false, false, true, 42), 42, $this->source), "html", null, true);
                // line 43
                echo "</";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["cell"], "tag", [], "any", false, false, true, 43), 43, $this->source), "html", null, true);
                echo ">
    ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['cell'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 45
            echo "    </tr>
    </thead>
  ";
        }
        // line 48
        echo "
  ";
        // line 49
        if (($context["rows"] ?? null)) {
            // line 50
            echo "    <tbody>
    ";
            // line 51
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["rows"] ?? null));
            $context['loop'] = [
              'parent' => $context['_parent'],
              'index0' => 0,
              'index'  => 1,
              'first'  => true,
            ];
            if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof \Countable)) {
                $length = count($context['_seq']);
                $context['loop']['revindex0'] = $length - 1;
                $context['loop']['revindex'] = $length;
                $context['loop']['length'] = $length;
                $context['loop']['last'] = 1 === $length;
            }
            foreach ($context['_seq'] as $context["_key"] => $context["row"]) {
                // line 52
                echo "      ";
                // line 53
                $context["row_classes"] = [0 => (( !                // line 54
($context["no_striping"] ?? null)) ? (twig_cycle([0 => "odd", 1 => "even"], $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["loop"], "index0", [], "any", false, false, true, 54), 54, $this->source))) : (""))];
                // line 57
                echo "    <tr";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["row"], "attributes", [], "any", false, false, true, 57), "addClass", [0 => ($context["row_classes"] ?? null)], "method", false, false, true, 57), 57, $this->source), "html", null, true);
                echo ">
      ";
                // line 58
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, $context["row"], "cells", [], "any", false, false, true, 58));
                foreach ($context['_seq'] as $context["_key"] => $context["cell"]) {
                    // line 59
                    echo "        <";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["cell"], "tag", [], "any", false, false, true, 59), 59, $this->source), "html", null, true);
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["cell"], "attributes", [], "any", false, false, true, 59), 59, $this->source), "html", null, true);
                    echo ">";
                    // line 60
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["cell"], "content", [], "any", false, false, true, 60), 60, $this->source), "html", null, true);
                    // line 61
                    echo "</";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["cell"], "tag", [], "any", false, false, true, 61), 61, $this->source), "html", null, true);
                    echo ">
      ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['cell'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 63
                echo "      </tr>
    ";
                ++$context['loop']['index0'];
                ++$context['loop']['index'];
                $context['loop']['first'] = false;
                if (isset($context['loop']['length'])) {
                    --$context['loop']['revindex0'];
                    --$context['loop']['revindex'];
                    $context['loop']['last'] = 0 === $context['loop']['revindex0'];
                }
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['row'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 65
            echo "    </tbody>
  ";
        } elseif (        // line 66
($context["empty"] ?? null)) {
            // line 67
            echo "    <tbody>
    <tr class=\"odd\">
      <td colspan=\"";
            // line 69
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["header_columns"] ?? null), 69, $this->source), "html", null, true);
            echo "\" class=\"empty message\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["empty"] ?? null), 69, $this->source), "html", null, true);
            echo "</td>
    </tr>
    </tbody>
  ";
        }
        // line 73
        echo "  ";
        if (($context["footer"] ?? null)) {
            // line 74
            echo "    <tfoot>
    ";
            // line 75
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["footer"] ?? null));
            foreach ($context['_seq'] as $context["_key"] => $context["row"]) {
                // line 76
                echo "    <tr";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["row"], "attributes", [], "any", false, false, true, 76), 76, $this->source), "html", null, true);
                echo ">
      ";
                // line 77
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, $context["row"], "cells", [], "any", false, false, true, 77));
                foreach ($context['_seq'] as $context["_key"] => $context["cell"]) {
                    // line 78
                    echo "        <";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["cell"], "tag", [], "any", false, false, true, 78), 78, $this->source), "html", null, true);
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["cell"], "attributes", [], "any", false, false, true, 78), 78, $this->source), "html", null, true);
                    echo ">";
                    // line 79
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["cell"], "content", [], "any", false, false, true, 79), 79, $this->source), "html", null, true);
                    // line 80
                    echo "</";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["cell"], "tag", [], "any", false, false, true, 80), 80, $this->source), "html", null, true);
                    echo ">
      ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['cell'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 82
                echo "      </tr>
    ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['row'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 84
            echo "    </tfoot>
  ";
        }
        // line 86
        echo "</table>
";
    }

    public function getTemplateName()
    {
        return "@radix/table/table.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  277 => 86,  273 => 84,  266 => 82,  257 => 80,  255 => 79,  250 => 78,  246 => 77,  241 => 76,  237 => 75,  234 => 74,  231 => 73,  222 => 69,  218 => 67,  216 => 66,  213 => 65,  198 => 63,  189 => 61,  187 => 60,  182 => 59,  178 => 58,  173 => 57,  171 => 54,  170 => 53,  168 => 52,  151 => 51,  148 => 50,  146 => 49,  143 => 48,  138 => 45,  129 => 43,  127 => 42,  122 => 41,  120 => 38,  119 => 37,  117 => 36,  113 => 35,  109 => 33,  107 => 32,  104 => 31,  98 => 30,  92 => 28,  88 => 26,  79 => 24,  75 => 23,  70 => 22,  67 => 21,  63 => 20,  60 => 19,  54 => 17,  52 => 16,  48 => 15,  45 => 14,  43 => 13,  42 => 11,  39 => 10,);
    }

    public function getSourceContext()
    {
        return new Source("", "@radix/table/table.twig", "/home/ekan/drupal/web/themes/contrib/radix/src/components/table/table.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 11, "if" => 16, "for" => 20);
        static $filters = array("merge" => 13, "escape" => 15);
        static $functions = array("cycle" => 54);

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if', 'for'],
                ['merge', 'escape'],
                ['cycle']
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

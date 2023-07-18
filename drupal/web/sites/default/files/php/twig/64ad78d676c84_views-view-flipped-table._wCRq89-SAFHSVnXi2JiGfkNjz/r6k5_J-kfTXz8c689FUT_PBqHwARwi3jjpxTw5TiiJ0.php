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

/* modules/contrib/views_flipped_table/templates/views-view-flipped-table.html.twig */
class __TwigTemplate_d0afa263e9d12437e40674e90af09849a0fb113cc067747ff0a1a29272fd63e3 extends \Twig\Template
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
        // line 12
        $context["classes"] = [0 => ("cols-" . twig_length_filter($this->env, $this->sandbox->ensureToStringAllowed(        // line 13
($context["flipped_header"] ?? null), 13, $this->source))), 1 => ((        // line 14
($context["responsive"] ?? null)) ? ("responsive-enabled") : ("")), 2 => ((        // line 15
($context["sticky"] ?? null)) ? ("sticky-enabled") : (""))];
        // line 18
        echo "<table";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 18), 18, $this->source), "html", null, true);
        echo ">
  ";
        // line 19
        if (($context["caption_needed"] ?? null)) {
            // line 20
            echo "    <caption>
    ";
            // line 21
            if (($context["caption"] ?? null)) {
                // line 22
                echo "      ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["caption"] ?? null), 22, $this->source), "html", null, true);
                echo "
    ";
            } else {
                // line 24
                echo "      ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title"] ?? null), 24, $this->source), "html", null, true);
                echo "
    ";
            }
            // line 26
            echo "    ";
            if (( !twig_test_empty(($context["summary"] ?? null)) ||  !twig_test_empty(($context["description"] ?? null)))) {
                // line 27
                echo "      <details>
        ";
                // line 28
                if ( !twig_test_empty(($context["summary"] ?? null))) {
                    // line 29
                    echo "          <summary>";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["summary"] ?? null), 29, $this->source), "html", null, true);
                    echo "</summary>
        ";
                }
                // line 31
                echo "        ";
                if ( !twig_test_empty(($context["description"] ?? null))) {
                    // line 32
                    echo "          ";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["description"] ?? null), 32, $this->source), "html", null, true);
                    echo "
        ";
                }
                // line 34
                echo "      </details>
    ";
            }
            // line 36
            echo "    </caption>
  ";
        }
        // line 38
        echo "  ";
        if (($context["first_row_header"] ?? null)) {
            // line 39
            echo "    <thead>
      <tr>
        ";
            // line 41
            if (($context["show_labels"] ?? null)) {
                // line 42
                echo "            ";
                if (twig_get_attribute($this->env, $this->source, (($__internal_compile_0 = ($context["header"] ?? null)) && is_array($__internal_compile_0) || $__internal_compile_0 instanceof ArrayAccess ? ($__internal_compile_0[($context["flipped_header_field_name"] ?? null)] ?? null) : null), "default_classes", [], "any", false, false, true, 42)) {
                    // line 43
                    echo "              ";
                    // line 44
                    $context["column_classes"] = [0 => "views-field", 1 => ("views-field-" . $this->sandbox->ensureToStringAllowed(                    // line 46
($context["flipped_header_field_name"] ?? null), 46, $this->source))];
                    // line 49
                    echo "            ";
                }
                // line 50
                echo "            <th";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (($__internal_compile_1 = ($context["header"] ?? null)) && is_array($__internal_compile_1) || $__internal_compile_1 instanceof ArrayAccess ? ($__internal_compile_1[($context["flipped_header_field_name"] ?? null)] ?? null) : null), "attributes", [], "any", false, false, true, 50), "addClass", [0 => ($context["column_classes"] ?? null)], "method", false, false, true, 50), "setAttribute", [0 => "scope", 1 => "row"], "method", false, false, true, 50), 50, $this->source), "html", null, true);
                echo ">
              ";
                // line 51
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, (($__internal_compile_2 = ($context["header"] ?? null)) && is_array($__internal_compile_2) || $__internal_compile_2 instanceof ArrayAccess ? ($__internal_compile_2[($context["flipped_header_field_name"] ?? null)] ?? null) : null), "content", [], "any", false, false, true, 51), 51, $this->source), "html", null, true);
                echo "
            </th>
        ";
            }
            // line 54
            echo "        ";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["flipped_header"] ?? null));
            foreach ($context['_seq'] as $context["key"] => $context["column"]) {
                // line 55
                echo "          ";
                if (twig_get_attribute($this->env, $this->source, $context["column"], "default_classes", [], "any", false, false, true, 55)) {
                    // line 56
                    echo "            ";
                    // line 57
                    $context["column_classes"] = [0 => "views-field"];
                    // line 61
                    echo "            ";
                    $context['_parent'] = $context;
                    $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, $context["column"], "fields", [], "any", false, false, true, 61));
                    foreach ($context['_seq'] as $context["_key"] => $context["field"]) {
                        // line 62
                        echo "              ";
                        $context["column_classes"] = twig_array_merge($this->sandbox->ensureToStringAllowed(($context["column_classes"] ?? null), 62, $this->source), [0 => ("views-field-" . $this->sandbox->ensureToStringAllowed($context["field"], 62, $this->source))]);
                        // line 63
                        echo "            ";
                    }
                    $_parent = $context['_parent'];
                    unset($context['_seq'], $context['_iterated'], $context['_key'], $context['field'], $context['_parent'], $context['loop']);
                    $context = array_intersect_key($context, $_parent) + $_parent;
                    // line 64
                    echo "          ";
                }
                // line 65
                echo "          <th";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["column"], "attributes", [], "any", false, false, true, 65), "addClass", [0 => ($context["column_classes"] ?? null)], "method", false, false, true, 65), 65, $this->source), "html", null, true);
                echo ">";
                // line 66
                if (twig_get_attribute($this->env, $this->source, $context["column"], "wrapper_element", [], "any", false, false, true, 66)) {
                    // line 67
                    echo "<";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["column"], "wrapper_element", [], "any", false, false, true, 67), 67, $this->source), "html", null, true);
                    echo ">";
                    // line 68
                    if (twig_get_attribute($this->env, $this->source, $context["column"], "url", [], "any", false, false, true, 68)) {
                        // line 69
                        echo "<a href=\"";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["column"], "url", [], "any", false, false, true, 69), 69, $this->source), "html", null, true);
                        echo "\" title=\"";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["column"], "title", [], "any", false, false, true, 69), 69, $this->source), "html", null, true);
                        echo "\">";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["column"], "content", [], "any", false, false, true, 69), 69, $this->source), "html", null, true);
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["column"], "sort_indicator", [], "any", false, false, true, 69), 69, $this->source), "html", null, true);
                        echo "</a>";
                    } else {
                        // line 71
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["column"], "content", [], "any", false, false, true, 71), 71, $this->source), "html", null, true);
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["column"], "sort_indicator", [], "any", false, false, true, 71), 71, $this->source), "html", null, true);
                    }
                    // line 73
                    echo "</";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["column"], "wrapper_element", [], "any", false, false, true, 73), 73, $this->source), "html", null, true);
                    echo ">";
                } else {
                    // line 75
                    if (twig_get_attribute($this->env, $this->source, $context["column"], "url", [], "any", false, false, true, 75)) {
                        // line 76
                        echo "<a href=\"";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["column"], "url", [], "any", false, false, true, 76), 76, $this->source), "html", null, true);
                        echo "\" title=\"";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["column"], "title", [], "any", false, false, true, 76), 76, $this->source), "html", null, true);
                        echo "\">";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["column"], "content", [], "any", false, false, true, 76), 76, $this->source), "html", null, true);
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["column"], "sort_indicator", [], "any", false, false, true, 76), 76, $this->source), "html", null, true);
                        echo "</a>";
                    } else {
                        // line 78
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["column"], "content", [], "any", false, false, true, 78), 78, $this->source), "html", null, true);
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["column"], "sort_indicator", [], "any", false, false, true, 78), 78, $this->source), "html", null, true);
                    }
                }
                // line 81
                echo "</th>
        ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['key'], $context['column'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 83
            echo "      </tr>
    </thead>
  ";
        }
        // line 86
        echo "  <tbody>
    ";
        // line 87
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["rows_flipped"] ?? null));
        foreach ($context['_seq'] as $context["field_name"] => $context["row"]) {
            // line 88
            echo "      <tr>
        ";
            // line 89
            if (((($__internal_compile_3 = ($context["header"] ?? null)) && is_array($__internal_compile_3) || $__internal_compile_3 instanceof ArrayAccess ? ($__internal_compile_3[$context["field_name"]] ?? null) : null) && ($context["show_labels"] ?? null))) {
                // line 90
                echo "          ";
                $context["header_column"] = (($__internal_compile_4 = ($context["header"] ?? null)) && is_array($__internal_compile_4) || $__internal_compile_4 instanceof ArrayAccess ? ($__internal_compile_4[$context["field_name"]] ?? null) : null);
                // line 91
                echo "          ";
                if (twig_get_attribute($this->env, $this->source, ($context["header_column"] ?? null), "default_classes", [], "any", false, false, true, 91)) {
                    // line 92
                    echo "            ";
                    // line 93
                    $context["column_classes"] = [0 => "views-field", 1 => ("views-field-" . $this->sandbox->ensureToStringAllowed(                    // line 95
$context["field_name"], 95, $this->source))];
                    // line 98
                    echo "          ";
                }
                // line 99
                echo "          <th";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["header_column"] ?? null), "attributes", [], "any", false, false, true, 99), "addClass", [0 => ($context["column_classes"] ?? null)], "method", false, false, true, 99), "setAttribute", [0 => "scope", 1 => "row"], "method", false, false, true, 99), 99, $this->source), "html", null, true);
                echo ">";
                // line 100
                if (twig_get_attribute($this->env, $this->source, ($context["header_column"] ?? null), "wrapper_element", [], "any", false, false, true, 100)) {
                    // line 101
                    echo "<";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["header_column"] ?? null), "wrapper_element", [], "any", false, false, true, 101), 101, $this->source), "html", null, true);
                    echo ">";
                    // line 102
                    if (twig_get_attribute($this->env, $this->source, ($context["header_column"] ?? null), "url", [], "any", false, false, true, 102)) {
                        // line 103
                        echo "<a href=\"";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["header_column"] ?? null), "url", [], "any", false, false, true, 103), 103, $this->source), "html", null, true);
                        echo "\" title=\"";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["header_column"] ?? null), "title", [], "any", false, false, true, 103), 103, $this->source), "html", null, true);
                        echo "\">";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["header_column"] ?? null), "content", [], "any", false, false, true, 103), 103, $this->source), "html", null, true);
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["header_column"] ?? null), "sort_indicator", [], "any", false, false, true, 103), 103, $this->source), "html", null, true);
                        echo "</a>";
                    } else {
                        // line 105
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["header_column"] ?? null), "content", [], "any", false, false, true, 105), 105, $this->source), "html", null, true);
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["header_column"] ?? null), "sort_indicator", [], "any", false, false, true, 105), 105, $this->source), "html", null, true);
                    }
                    // line 107
                    echo "</";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["header_column"] ?? null), "wrapper_element", [], "any", false, false, true, 107), 107, $this->source), "html", null, true);
                    echo ">";
                } else {
                    // line 109
                    if (twig_get_attribute($this->env, $this->source, ($context["header_column"] ?? null), "url", [], "any", false, false, true, 109)) {
                        // line 110
                        echo "<a href=\"";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["header_column"] ?? null), "url", [], "any", false, false, true, 110), 110, $this->source), "html", null, true);
                        echo "\" title=\"";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["header_column"] ?? null), "title", [], "any", false, false, true, 110), 110, $this->source), "html", null, true);
                        echo "\">";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["header_column"] ?? null), "content", [], "any", false, false, true, 110), 110, $this->source), "html", null, true);
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["header_column"] ?? null), "sort_indicator", [], "any", false, false, true, 110), 110, $this->source), "html", null, true);
                        echo "</a>";
                    } else {
                        // line 112
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["header_column"] ?? null), "content", [], "any", false, false, true, 112), 112, $this->source), "html", null, true);
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["header_column"] ?? null), "sort_indicator", [], "any", false, false, true, 112), 112, $this->source), "html", null, true);
                    }
                }
                // line 115
                echo "</th>
        ";
            }
            // line 117
            echo "        ";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, $context["row"], "columns", [], "any", false, false, true, 117));
            foreach ($context['_seq'] as $context["index"] => $context["item"]) {
                // line 118
                echo "          ";
                if (twig_get_attribute($this->env, $this->source, $context["item"], "default_classes", [], "any", false, false, true, 118)) {
                    // line 119
                    echo "            ";
                    // line 120
                    $context["column_classes"] = [0 => "views-field"];
                    // line 124
                    echo "            ";
                    $context['_parent'] = $context;
                    $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, ($context["column"] ?? null), "fields", [], "any", false, false, true, 124));
                    foreach ($context['_seq'] as $context["_key"] => $context["field"]) {
                        // line 125
                        echo "              ";
                        $context["column_classes"] = twig_array_merge($this->sandbox->ensureToStringAllowed(($context["column_classes"] ?? null), 125, $this->source), [0 => ("views-field-" . $this->sandbox->ensureToStringAllowed($context["field"], 125, $this->source))]);
                        // line 126
                        echo "            ";
                    }
                    $_parent = $context['_parent'];
                    unset($context['_seq'], $context['_iterated'], $context['_key'], $context['field'], $context['_parent'], $context['loop']);
                    $context = array_intersect_key($context, $_parent) + $_parent;
                    // line 127
                    echo "          ";
                }
                // line 128
                echo "          <td";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["item"], "attributes", [], "any", false, false, true, 128), "addClass", [0 => ($context["column_classes"] ?? null)], "method", false, false, true, 128), 128, $this->source), "html", null, true);
                echo ">
            ";
                // line 129
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, $context["item"], "content", [], "any", false, false, true, 129));
                foreach ($context['_seq'] as $context["_key"] => $context["content"]) {
                    // line 130
                    echo "              ";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["content"], "field_output", [], "any", false, false, true, 130), 130, $this->source), "html", null, true);
                    echo "
            ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['content'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 132
                echo "          </td>
        ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['index'], $context['item'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 134
            echo "      </tr>
    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['field_name'], $context['row'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 136
        echo "  </tbody>
</table>
";
    }

    public function getTemplateName()
    {
        return "modules/contrib/views_flipped_table/templates/views-view-flipped-table.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  358 => 136,  351 => 134,  344 => 132,  335 => 130,  331 => 129,  326 => 128,  323 => 127,  317 => 126,  314 => 125,  309 => 124,  307 => 120,  305 => 119,  302 => 118,  297 => 117,  293 => 115,  288 => 112,  278 => 110,  276 => 109,  271 => 107,  267 => 105,  257 => 103,  255 => 102,  251 => 101,  249 => 100,  245 => 99,  242 => 98,  240 => 95,  239 => 93,  237 => 92,  234 => 91,  231 => 90,  229 => 89,  226 => 88,  222 => 87,  219 => 86,  214 => 83,  207 => 81,  202 => 78,  192 => 76,  190 => 75,  185 => 73,  181 => 71,  171 => 69,  169 => 68,  165 => 67,  163 => 66,  159 => 65,  156 => 64,  150 => 63,  147 => 62,  142 => 61,  140 => 57,  138 => 56,  135 => 55,  130 => 54,  124 => 51,  119 => 50,  116 => 49,  114 => 46,  113 => 44,  111 => 43,  108 => 42,  106 => 41,  102 => 39,  99 => 38,  95 => 36,  91 => 34,  85 => 32,  82 => 31,  76 => 29,  74 => 28,  71 => 27,  68 => 26,  62 => 24,  56 => 22,  54 => 21,  51 => 20,  49 => 19,  44 => 18,  42 => 15,  41 => 14,  40 => 13,  39 => 12,);
    }

    public function getSourceContext()
    {
        return new Source("", "modules/contrib/views_flipped_table/templates/views-view-flipped-table.html.twig", "/home/ekan/drupal/web/modules/contrib/views_flipped_table/templates/views-view-flipped-table.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 12, "if" => 19, "for" => 54);
        static $filters = array("length" => 13, "escape" => 18, "merge" => 62);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if', 'for'],
                ['length', 'escape', 'merge'],
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

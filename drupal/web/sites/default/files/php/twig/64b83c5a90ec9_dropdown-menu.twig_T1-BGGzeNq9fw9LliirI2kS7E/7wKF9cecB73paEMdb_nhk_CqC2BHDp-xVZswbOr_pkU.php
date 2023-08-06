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

/* @radix/dropdown/dropdown-menu.twig */
class __TwigTemplate_eda3c52d5d37be39009ca3875f968407 extends \Twig\Template
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
        echo "<div class=\"dropdown-menu\">
  ";
        // line 8
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
            // line 9
            echo "    ";
            $context["nav_link_classes"] = [0 => "dropdown-item", 1 => ((twig_get_attribute($this->env, $this->source,             // line 11
$context["item"], "in_active_trail", [], "any", false, false, true, 11)) ? ("active") : (""))];
            // line 13
            echo "    ";
            if (twig_test_iterable(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["item"], "url", [], "any", false, false, true, 13), "options", [], "any", false, false, true, 13), "attributes", [], "any", false, false, true, 13), "class", [], "any", false, false, true, 13))) {
                // line 14
                echo "      ";
                $context["nav_link_classes"] = twig_array_merge($this->sandbox->ensureToStringAllowed(($context["nav_link_classes"] ?? null), 14, $this->source), $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["item"], "url", [], "any", false, false, true, 14), "options", [], "any", false, false, true, 14), "attributes", [], "any", false, false, true, 14), "class", [], "any", false, false, true, 14), 14, $this->source));
                // line 15
                echo "    ";
            } elseif (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["item"], "url", [], "any", false, false, true, 15), "options", [], "any", false, false, true, 15), "attributes", [], "any", false, false, true, 15), "class", [], "any", false, false, true, 15)) {
                // line 16
                echo "      ";
                $context["nav_link_classes"] = twig_array_merge($this->sandbox->ensureToStringAllowed(($context["nav_link_classes"] ?? null), 16, $this->source), [0 => twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["item"], "url", [], "any", false, false, true, 16), "options", [], "any", false, false, true, 16), "attributes", [], "any", false, false, true, 16), "class", [], "any", false, false, true, 16)]);
                // line 17
                echo "    ";
            }
            // line 18
            echo "    ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->getLink($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "title", [], "any", false, false, true, 18), 18, $this->source), $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "url", [], "any", false, false, true, 18), 18, $this->source), ["class" => ($context["nav_link_classes"] ?? null)]), "html", null, true);
            echo "
  ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 20
        echo "</div>
";
    }

    public function getTemplateName()
    {
        return "@radix/dropdown/dropdown-menu.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  74 => 20,  65 => 18,  62 => 17,  59 => 16,  56 => 15,  53 => 14,  50 => 13,  48 => 11,  46 => 9,  42 => 8,  39 => 7,);
    }

    public function getSourceContext()
    {
        return new Source("", "@radix/dropdown/dropdown-menu.twig", "/home/ekan/drupal/web/themes/contrib/radix/src/components/dropdown/dropdown-menu.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("for" => 8, "set" => 9, "if" => 13);
        static $filters = array("merge" => 14, "escape" => 18);
        static $functions = array("link" => 18);

        try {
            $this->sandbox->checkSecurity(
                ['for', 'set', 'if'],
                ['merge', 'escape'],
                ['link']
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

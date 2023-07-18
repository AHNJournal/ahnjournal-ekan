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

/* @radix/navbar/navbar.twig */
class __TwigTemplate_1bdba01b63cdce81c93707fd596caab51da6e984e80d39b4e23176654bf8b31f extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
            'branding' => [$this, 'block_branding'],
            'left' => [$this, 'block_left'],
            'right' => [$this, 'block_right'],
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 19
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->attachLibrary("radix/navbar"), "html", null, true);
        echo "

";
        // line 21
        $context["container"] = (((($context["container"] ?? null) == "fixed")) ? ("container") : (false));
        // line 22
        $context["placement"] = (($context["placement"]) ?? (""));
        // line 23
        $context["color"] = (($context["color"]) ?? ("light"));
        // line 24
        $context["navbar_expand"] = (($context["navbar_expand"]) ?? ("lg"));
        // line 25
        echo "
<nav class=\"navbar navbar-expand-";
        // line 26
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["navbar_expand"] ?? null), 26, $this->source), "html", null, true);
        echo " justify-content-between navbar-";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["color"] ?? null), 26, $this->source), "html", null, true);
        echo " ";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["placement"] ?? null), 26, $this->source), "html", null, true);
        echo " ";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, twig_join_filter($this->sandbox->ensureToStringAllowed(($context["utility_classes"] ?? null), 26, $this->source), " "), "html", null, true);
        echo "\">
  ";
        // line 27
        if (($context["container"] ?? null)) {
            // line 28
            echo "    <div class=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["container"] ?? null), 28, $this->source), "html", null, true);
            echo "\">
  ";
        }
        // line 30
        echo "
  ";
        // line 31
        $this->displayBlock('branding', $context, $blocks);
        // line 34
        echo "
  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" aria-controls=\"navbar-collapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">
    <span class=\"navbar-toggler-icon\"></span>
  </button>

  <div class=\"collapse navbar-collapse\">
    ";
        // line 40
        $this->displayBlock('left', $context, $blocks);
        // line 43
        echo "
    ";
        // line 44
        $this->displayBlock('right', $context, $blocks);
        // line 47
        echo "  </div>

  ";
        // line 49
        if (($context["container"] ?? null)) {
            // line 50
            echo "    </div>
  ";
        }
        // line 52
        echo "</nav>
";
    }

    // line 31
    public function block_branding($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 32
        echo "    ";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["branding"] ?? null), 32, $this->source), "html", null, true);
        echo "
  ";
    }

    // line 40
    public function block_left($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 41
        echo "      ";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["left"] ?? null), 41, $this->source), "html", null, true);
        echo "
    ";
    }

    // line 44
    public function block_right($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 45
        echo "      ";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["right"] ?? null), 45, $this->source), "html", null, true);
        echo "
    ";
    }

    public function getTemplateName()
    {
        return "@radix/navbar/navbar.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  137 => 45,  133 => 44,  126 => 41,  122 => 40,  115 => 32,  111 => 31,  106 => 52,  102 => 50,  100 => 49,  96 => 47,  94 => 44,  91 => 43,  89 => 40,  81 => 34,  79 => 31,  76 => 30,  70 => 28,  68 => 27,  58 => 26,  55 => 25,  53 => 24,  51 => 23,  49 => 22,  47 => 21,  42 => 19,);
    }

    public function getSourceContext()
    {
        return new Source("", "@radix/navbar/navbar.twig", "/home/ekan/drupal/web/themes/contrib/radix/src/components/navbar/navbar.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 21, "if" => 27, "block" => 31);
        static $filters = array("escape" => 19, "join" => 26);
        static $functions = array("attach_library" => 19);

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if', 'block'],
                ['escape', 'join'],
                ['attach_library']
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

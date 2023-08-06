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

/* @radix/navbar/navbar-brand.twig */
class __TwigTemplate_015e319b8ffd936ef50ba681f51e853f27b8725185dd19172f95b5f953c31be4 extends \Twig\Template
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
        // line 17
        $macros["navbar_brand"] = $this->macros["navbar_brand"] = $this;
        // line 18
        $context["utility_classes"] = twig_join_filter($this->sandbox->ensureToStringAllowed(($context["utility_classes"] ?? null), 18, $this->source), " ");
        // line 19
        echo "
";
        // line 20
        if (($context["path"] ?? null)) {
            // line 21
            echo "  <a href=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["path"] ?? null), 21, $this->source), "html", null, true);
            echo "\" class=\"navbar-brand d-flex align-items-center ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["utility_classes"] ?? null), 21, $this->source), "html", null, true);
            echo "\" aria-label=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["text"] ?? null), 21, $this->source), "html", null, true);
            echo "\">
    ";
            // line 22
            if (($context["image"] ?? null)) {
                // line 23
                echo "      ";
                // line 24
                echo "      ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(twig_call_macro($macros["navbar_brand"], "macro_image", [($context["image"] ?? null), ($context["width"] ?? null), ($context["height"] ?? null), ($context["alt"] ?? null)], 24, $context, $this->getSourceContext()));
                echo "
    ";
            }
            // line 26
            echo "    ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["text"] ?? null), 26, $this->source), "html", null, true);
            echo "
  </a>
";
        } else {
            // line 29
            echo "  <span class=\"navbar-brand h1 mb-0 ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["utility_classes"] ?? null), 29, $this->source), "html", null, true);
            echo "\" aria-label=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["text"] ?? null), 29, $this->source), "html", null, true);
            echo "\">
    ";
            // line 30
            if (($context["image"] ?? null)) {
                // line 31
                echo "      ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(twig_call_macro($macros["navbar_brand"], "macro_image", [($context["image"] ?? null), ($context["alt"] ?? null)], 31, $context, $this->getSourceContext()));
                echo "
    ";
            }
            // line 33
            echo "    ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["text"] ?? null), 33, $this->source), "html", null, true);
            echo "
  </span>
";
        }
        // line 36
        echo "
";
    }

    // line 37
    public function macro_image($__src__ = null, $__width__ = null, $__height__ = null, $__alt__ = null, ...$__varargs__)
    {
        $macros = $this->macros;
        $context = $this->env->mergeGlobals([
            "src" => $__src__,
            "width" => $__width__,
            "height" => $__height__,
            "alt" => $__alt__,
            "varargs" => $__varargs__,
        ]);

        $blocks = [];

        ob_start(function () { return ''; });
        try {
            // line 38
            echo "  <img src=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["src"] ?? null), 38, $this->source), "html", null, true);
            echo "\" width=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, ((array_key_exists("width", $context)) ? (_twig_default_filter($this->sandbox->ensureToStringAllowed(($context["width"] ?? null), 38, $this->source), 30)) : (30)), "html", null, true);
            echo "\" height=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, ((array_key_exists("height", $context)) ? (_twig_default_filter($this->sandbox->ensureToStringAllowed(($context["height"] ?? null), 38, $this->source), "auto")) : ("auto")), "html", null, true);
            echo "\" alt=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, ((array_key_exists("alt", $context)) ? (_twig_default_filter($this->sandbox->ensureToStringAllowed(($context["alt"] ?? null), 38, $this->source), "")) : ("")), "html", null, true);
            echo "\" class=\"mr-2\" />
";

            return ('' === $tmp = ob_get_contents()) ? '' : new Markup($tmp, $this->env->getCharset());
        } finally {
            ob_end_clean();
        }
    }

    public function getTemplateName()
    {
        return "@radix/navbar/navbar-brand.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  117 => 38,  101 => 37,  96 => 36,  89 => 33,  83 => 31,  81 => 30,  74 => 29,  67 => 26,  61 => 24,  59 => 23,  57 => 22,  48 => 21,  46 => 20,  43 => 19,  41 => 18,  39 => 17,);
    }

    public function getSourceContext()
    {
        return new Source("", "@radix/navbar/navbar-brand.twig", "/home/ekan/drupal/web/themes/contrib/radix/src/components/navbar/navbar-brand.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("import" => 17, "set" => 18, "if" => 20, "macro" => 37);
        static $filters = array("join" => 18, "escape" => 21, "default" => 38);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['import', 'set', 'if', 'macro'],
                ['join', 'escape', 'default'],
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

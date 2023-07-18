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

/* profiles/contrib/ekan/themes/ekan_theme/templates/block/block--system-branding-block.html.twig */
class __TwigTemplate_2cd1c3af171d4f8fe8041ba1e2b46eae7a81456b8e3a0174ffe71ea079649e6c extends \Twig\Template
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
        $this->loadTemplate("profiles/contrib/ekan/themes/ekan_theme/templates/block/block--system-branding-block.html.twig", "profiles/contrib/ekan/themes/ekan_theme/templates/block/block--system-branding-block.html.twig", 7, "1458352590")->display(twig_array_merge($context, ["html_tag" => "div"]));
        // line 23
        echo "
";
        // line 28
        echo "
";
    }

    public function getTemplateName()
    {
        return "profiles/contrib/ekan/themes/ekan_theme/templates/block/block--system-branding-block.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  44 => 28,  41 => 23,  39 => 7,);
    }

    public function getSourceContext()
    {
        return new Source("", "profiles/contrib/ekan/themes/ekan_theme/templates/block/block--system-branding-block.html.twig", "/home/ekan/drupal/web/profiles/contrib/ekan/themes/ekan_theme/templates/block/block--system-branding-block.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("embed" => 7);
        static $filters = array();
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['embed'],
                [],
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


/* profiles/contrib/ekan/themes/ekan_theme/templates/block/block--system-branding-block.html.twig */
class __TwigTemplate_2cd1c3af171d4f8fe8041ba1e2b46eae7a81456b8e3a0174ffe71ea079649e6c___1458352590 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'content' => [$this, 'block_content'],
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doGetParent(array $context)
    {
        // line 7
        return "@radix/block/block.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $this->parent = $this->loadTemplate("@radix/block/block.twig", "profiles/contrib/ekan/themes/ekan_theme/templates/block/block--system-branding-block.html.twig", 7);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 11
    public function block_content($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 12
        echo "    ";
        $this->loadTemplate("@radix/navbar/navbar-brand.twig", "profiles/contrib/ekan/themes/ekan_theme/templates/block/block--system-branding-block.html.twig", 12)->display(twig_array_merge($context, ["text" =>         // line 13
($context["site_name"] ?? null), "image" =>         // line 14
($context["site_logo"] ?? null), "width" => 180, "height" => "auto", "path" => $this->extensions['Drupal\Core\Template\TwigExtension']->getPath("<front>"), "alt" => ((($__internal_compile_0 = twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source,         // line 18
($context["elements"] ?? null), "content", [], "any", false, false, true, 18), "site_name", [], "any", false, false, true, 18)) && is_array($__internal_compile_0) || $__internal_compile_0 instanceof ArrayAccess ? ($__internal_compile_0["#markup"] ?? null) : null) . " logo")]));
        // line 20
        echo "  ";
    }

    public function getTemplateName()
    {
        return "profiles/contrib/ekan/themes/ekan_theme/templates/block/block--system-branding-block.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  141 => 20,  139 => 18,  138 => 14,  137 => 13,  135 => 12,  131 => 11,  120 => 7,  44 => 28,  41 => 23,  39 => 7,);
    }

    public function getSourceContext()
    {
        return new Source("", "profiles/contrib/ekan/themes/ekan_theme/templates/block/block--system-branding-block.html.twig", "/home/ekan/drupal/web/profiles/contrib/ekan/themes/ekan_theme/templates/block/block--system-branding-block.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("include" => 12);
        static $filters = array();
        static $functions = array("path" => 17);

        try {
            $this->sandbox->checkSecurity(
                ['include'],
                [],
                ['path']
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
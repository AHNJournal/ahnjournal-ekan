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

/* profiles/contrib/ekan/themes/ekan_theme/templates/page/page--home.html.twig */
class __TwigTemplate_3c9aa3fd5354950e6ce846fc99beb3bac615270540b186361944514c8e8ef19a extends \Twig\Template
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
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 7
        echo "<div class=\"page front-page\">
  ";
        // line 8
        $this->displayBlock('branding', $context, $blocks);
        // line 18
        echo "
  ";
        // line 19
        $this->loadTemplate("profiles/contrib/ekan/themes/ekan_theme/templates/page/page--home.html.twig", "profiles/contrib/ekan/themes/ekan_theme/templates/page/page--home.html.twig", 19, "475616123")->display(twig_array_merge($context, ["placement" => "sticky-top", "container" => "fixed", "color" => "light", "utility_classes" => [0 => "bg-light"]]));
        // line 40
        echo "
  ";
        // line 41
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "content_top", [], "any", false, false, true, 41)) {
            // line 42
            echo "    <div class=\"welcome-banner\">
      <div class=\"container\">
        ";
            // line 44
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "content_top", [], "any", false, false, true, 44), 44, $this->source), "html", null, true);
            echo "
      </div>
    </div>
  ";
        }
        // line 48
        echo "
  <main class=\"pt-5 pb-5\">
    ";
        // line 50
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header", [], "any", false, false, true, 50)) {
            // line 51
            echo "      <header class=\"page__header mb-3\">
        <div class=\"container\">
          ";
            // line 53
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header", [], "any", false, false, true, 53), 53, $this->source), "html", null, true);
            echo "
        </div>
      </header>
    ";
        }
        // line 57
        echo "
    <div class=\"container\">
      <div class=\"page_main-content\">
        ";
        // line 60
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "content_left", [], "any", false, false, true, 60)) {
            // line 61
            echo "          <div class=\"page__content_left col-sm-3\">
            ";
            // line 62
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "content_left", [], "any", false, false, true, 62), 62, $this->source), "html", null, true);
            echo "
          </div>
        ";
        }
        // line 65
        echo "
        ";
        // line 67
        $context["content_classes"] = [0 => ((twig_get_attribute($this->env, $this->source,         // line 68
($context["page"] ?? null), "content_left", [], "any", false, false, true, 68)) ? ("col-sm-9 page__content") : ("")), 1 => ((twig_test_empty(twig_get_attribute($this->env, $this->source,         // line 69
($context["page"] ?? null), "content_left", [], "any", false, false, true, 69))) ? ("col-sm-12 page__content") : (""))];
        // line 72
        echo "
        ";
        // line 73
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "content", [], "any", false, false, true, 73)) {
            // line 74
            echo "          <div ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content_attributes"] ?? null), "addClass", [0 => ($context["content_classes"] ?? null)], "method", false, false, true, 74), 74, $this->source), "html", null, true);
            echo ">
            ";
            // line 75
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "content", [], "any", false, false, true, 75), 75, $this->source), "html", null, true);
            echo "
          </div>
        ";
        }
        // line 78
        echo "
      </div>
    </div>
  </main>

  ";
        // line 83
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer", [], "any", false, false, true, 83)) {
            // line 84
            echo "    <footer class=\"page__footer\">
      <div class=\"container\">
        <div class=\"d-flex justify-content-md-between align-items-md-center\">
          ";
            // line 87
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer", [], "any", false, false, true, 87), 87, $this->source), "html", null, true);
            echo "
        </div>
      </div>
    </footer>
  ";
        }
        // line 92
        echo "</div>
";
    }

    // line 8
    public function block_branding($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 9
        echo "    ";
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "navbar_branding", [], "any", false, false, true, 9)) {
            // line 10
            echo "      <div class=\"navbar_branding\">
        <div class=\"container\">
          ";
            // line 12
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "navbar_branding", [], "any", false, false, true, 12), 12, $this->source), "html", null, true);
            echo "
        </div>
      </div>
    ";
        }
        // line 16
        echo "
  ";
    }

    public function getTemplateName()
    {
        return "profiles/contrib/ekan/themes/ekan_theme/templates/page/page--home.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  167 => 16,  160 => 12,  156 => 10,  153 => 9,  149 => 8,  144 => 92,  136 => 87,  131 => 84,  129 => 83,  122 => 78,  116 => 75,  111 => 74,  109 => 73,  106 => 72,  104 => 69,  103 => 68,  102 => 67,  99 => 65,  93 => 62,  90 => 61,  88 => 60,  83 => 57,  76 => 53,  72 => 51,  70 => 50,  66 => 48,  59 => 44,  55 => 42,  53 => 41,  50 => 40,  48 => 19,  45 => 18,  43 => 8,  40 => 7,);
    }

    public function getSourceContext()
    {
        return new Source("", "profiles/contrib/ekan/themes/ekan_theme/templates/page/page--home.html.twig", "/home/ekan/drupal/web/profiles/contrib/ekan/themes/ekan_theme/templates/page/page--home.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("block" => 8, "embed" => 19, "if" => 41, "set" => 67);
        static $filters = array("escape" => 44);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['block', 'embed', 'if', 'set'],
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


/* profiles/contrib/ekan/themes/ekan_theme/templates/page/page--home.html.twig */
class __TwigTemplate_3c9aa3fd5354950e6ce846fc99beb3bac615270540b186361944514c8e8ef19a___475616123 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'left' => [$this, 'block_left'],
            'right' => [$this, 'block_right'],
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doGetParent(array $context)
    {
        // line 19
        return "@radix/navbar/navbar.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $this->parent = $this->loadTemplate("@radix/navbar/navbar.twig", "profiles/contrib/ekan/themes/ekan_theme/templates/page/page--home.html.twig", 19);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 26
    public function block_left($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 27
        echo "      ";
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "navbar_left", [], "any", false, false, true, 27)) {
            // line 28
            echo "        <div class=\"mr-auto\">
          ";
            // line 29
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "navbar_left", [], "any", false, false, true, 29), 29, $this->source), "html", null, true);
            echo "
        </div>
      ";
        }
        // line 32
        echo "    ";
    }

    // line 34
    public function block_right($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 35
        echo "      ";
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "navbar_right", [], "any", false, false, true, 35)) {
            // line 36
            echo "        ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "navbar_right", [], "any", false, false, true, 36), 36, $this->source), "html", null, true);
            echo "
      ";
        }
        // line 38
        echo "    ";
    }

    public function getTemplateName()
    {
        return "profiles/contrib/ekan/themes/ekan_theme/templates/page/page--home.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  288 => 38,  282 => 36,  279 => 35,  275 => 34,  271 => 32,  265 => 29,  262 => 28,  259 => 27,  255 => 26,  244 => 19,  167 => 16,  160 => 12,  156 => 10,  153 => 9,  149 => 8,  144 => 92,  136 => 87,  131 => 84,  129 => 83,  122 => 78,  116 => 75,  111 => 74,  109 => 73,  106 => 72,  104 => 69,  103 => 68,  102 => 67,  99 => 65,  93 => 62,  90 => 61,  88 => 60,  83 => 57,  76 => 53,  72 => 51,  70 => 50,  66 => 48,  59 => 44,  55 => 42,  53 => 41,  50 => 40,  48 => 19,  45 => 18,  43 => 8,  40 => 7,);
    }

    public function getSourceContext()
    {
        return new Source("", "profiles/contrib/ekan/themes/ekan_theme/templates/page/page--home.html.twig", "/home/ekan/drupal/web/profiles/contrib/ekan/themes/ekan_theme/templates/page/page--home.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 27);
        static $filters = array("escape" => 29);
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

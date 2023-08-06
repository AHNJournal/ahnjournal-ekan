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

/* themes/contrib/radix/templates/page/page.html.twig */
class __TwigTemplate_c0b1b507387f27a9999c7465a652844bb47d61faaa58a10e7f944801a2b1dcc6 extends \Twig\Template
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
        echo "<div class=\"page\">
  ";
        // line 8
        $this->loadTemplate("themes/contrib/radix/templates/page/page.html.twig", "themes/contrib/radix/templates/page/page.html.twig", 8, "1131557119")->display(twig_array_merge($context, ["placement" => "sticky-top", "container" => "fixed", "color" => "light", "utility_classes" => [0 => "bg-light"]]));
        // line 35
        echo "
  <main class=\"pt-5 pb-5\">
    <a id=\"main-content\" tabindex=\"-1\"></a>";
        // line 38
        echo "
    ";
        // line 39
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header", [], "any", false, false, true, 39)) {
            // line 40
            echo "      <header class=\"page__header mb-3\">
        <div class=\"container\">
          ";
            // line 42
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header", [], "any", false, false, true, 42), 42, $this->source), "html", null, true);
            echo "
        </div>
      </header>
    ";
        }
        // line 46
        echo "
    ";
        // line 47
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "content", [], "any", false, false, true, 47)) {
            // line 48
            echo "      <div class=\"page__content\">
        <div class=\"container\">
          ";
            // line 50
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "content", [], "any", false, false, true, 50), 50, $this->source), "html", null, true);
            echo "
        </div>
      </div>
    ";
        }
        // line 54
        echo "  </main>

  ";
        // line 56
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer", [], "any", false, false, true, 56)) {
            // line 57
            echo "    <footer class=\"page__footer\">
      <div class=\"container\">
        <div class=\"d-flex justify-content-md-between align-items-md-center\">
          ";
            // line 60
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer", [], "any", false, false, true, 60), 60, $this->source), "html", null, true);
            echo "
        </div>
      </div>
    </footer>
  ";
        }
        // line 65
        echo "</div>
";
    }

    public function getTemplateName()
    {
        return "themes/contrib/radix/templates/page/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  99 => 65,  91 => 60,  86 => 57,  84 => 56,  80 => 54,  73 => 50,  69 => 48,  67 => 47,  64 => 46,  57 => 42,  53 => 40,  51 => 39,  48 => 38,  44 => 35,  42 => 8,  39 => 7,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/contrib/radix/templates/page/page.html.twig", "/home/ekan/drupal/web/themes/contrib/radix/templates/page/page.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("embed" => 8, "if" => 39);
        static $filters = array("escape" => 42);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['embed', 'if'],
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


/* themes/contrib/radix/templates/page/page.html.twig */
class __TwigTemplate_c0b1b507387f27a9999c7465a652844bb47d61faaa58a10e7f944801a2b1dcc6___1131557119 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'branding' => [$this, 'block_branding'],
            'left' => [$this, 'block_left'],
            'right' => [$this, 'block_right'],
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doGetParent(array $context)
    {
        // line 8
        return "@radix/navbar/navbar.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $this->parent = $this->loadTemplate("@radix/navbar/navbar.twig", "themes/contrib/radix/templates/page/page.html.twig", 8);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 15
    public function block_branding($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 16
        echo "      ";
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "navbar_branding", [], "any", false, false, true, 16)) {
            // line 17
            echo "        ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "navbar_branding", [], "any", false, false, true, 17), 17, $this->source), "html", null, true);
            echo "
      ";
        }
        // line 19
        echo "    ";
    }

    // line 21
    public function block_left($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 22
        echo "      ";
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "navbar_left", [], "any", false, false, true, 22)) {
            // line 23
            echo "        <div class=\"mr-auto\">
          ";
            // line 24
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "navbar_left", [], "any", false, false, true, 24), 24, $this->source), "html", null, true);
            echo "
        </div>
      ";
        }
        // line 27
        echo "    ";
    }

    // line 29
    public function block_right($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 30
        echo "      ";
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "navbar_right", [], "any", false, false, true, 30)) {
            // line 31
            echo "        ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "navbar_right", [], "any", false, false, true, 31), 31, $this->source), "html", null, true);
            echo "
      ";
        }
        // line 33
        echo "    ";
    }

    public function getTemplateName()
    {
        return "themes/contrib/radix/templates/page/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  238 => 33,  232 => 31,  229 => 30,  225 => 29,  221 => 27,  215 => 24,  212 => 23,  209 => 22,  205 => 21,  201 => 19,  195 => 17,  192 => 16,  188 => 15,  177 => 8,  99 => 65,  91 => 60,  86 => 57,  84 => 56,  80 => 54,  73 => 50,  69 => 48,  67 => 47,  64 => 46,  57 => 42,  53 => 40,  51 => 39,  48 => 38,  44 => 35,  42 => 8,  39 => 7,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/contrib/radix/templates/page/page.html.twig", "/home/ekan/drupal/web/themes/contrib/radix/templates/page/page.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 16);
        static $filters = array("escape" => 17);
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

/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['util/BootstrappedTabLoader.js']) {
  _$jscoverage['util/BootstrappedTabLoader.js'] = [];
  _$jscoverage['util/BootstrappedTabLoader.js'][39] = 0;
  _$jscoverage['util/BootstrappedTabLoader.js'][47] = 0;
  _$jscoverage['util/BootstrappedTabLoader.js'][52] = 0;
  _$jscoverage['util/BootstrappedTabLoader.js'][55] = 0;
  _$jscoverage['util/BootstrappedTabLoader.js'][58] = 0;
  _$jscoverage['util/BootstrappedTabLoader.js'][59] = 0;
  _$jscoverage['util/BootstrappedTabLoader.js'][61] = 0;
  _$jscoverage['util/BootstrappedTabLoader.js'][62] = 0;
  _$jscoverage['util/BootstrappedTabLoader.js'][64] = 0;
  _$jscoverage['util/BootstrappedTabLoader.js'][66] = 0;
  _$jscoverage['util/BootstrappedTabLoader.js'][67] = 0;
  _$jscoverage['util/BootstrappedTabLoader.js'][69] = 0;
  _$jscoverage['util/BootstrappedTabLoader.js'][70] = 0;
  _$jscoverage['util/BootstrappedTabLoader.js'][75] = 0;
  _$jscoverage['util/BootstrappedTabLoader.js'][76] = 0;
  _$jscoverage['util/BootstrappedTabLoader.js'][80] = 0;
  _$jscoverage['util/BootstrappedTabLoader.js'][81] = 0;
  _$jscoverage['util/BootstrappedTabLoader.js'][85] = 0;
  _$jscoverage['util/BootstrappedTabLoader.js'][91] = 0;
  _$jscoverage['util/BootstrappedTabLoader.js'][94] = 0;
  _$jscoverage['util/BootstrappedTabLoader.js'][96] = 0;
  _$jscoverage['util/BootstrappedTabLoader.js'][97] = 0;
  _$jscoverage['util/BootstrappedTabLoader.js'][99] = 0;
  _$jscoverage['util/BootstrappedTabLoader.js'][100] = 0;
  _$jscoverage['util/BootstrappedTabLoader.js'][102] = 0;
  _$jscoverage['util/BootstrappedTabLoader.js'][103] = 0;
  _$jscoverage['util/BootstrappedTabLoader.js'][105] = 0;
  _$jscoverage['util/BootstrappedTabLoader.js'][106] = 0;
  _$jscoverage['util/BootstrappedTabLoader.js'][116] = 0;
  _$jscoverage['util/BootstrappedTabLoader.js'][117] = 0;
  _$jscoverage['util/BootstrappedTabLoader.js'][118] = 0;
  _$jscoverage['util/BootstrappedTabLoader.js'][123] = 0;
  _$jscoverage['util/BootstrappedTabLoader.js'][124] = 0;
  _$jscoverage['util/BootstrappedTabLoader.js'][127] = 0;
}
_$jscoverage['util/BootstrappedTabLoader.js'].source = ["<span class=\"c\">/*</span>","<span class=\"c\"> * ******************************************************************************</span>","<span class=\"c\"> * Pentaho</span>","<span class=\"c\"> *</span>","<span class=\"c\"> * Copyright (C) 2002-2013 by Pentaho : http://www.pentaho.com</span>","<span class=\"c\"> * ******************************************************************************</span>","<span class=\"c\"> */</span>",""," <span class=\"c\">/*</span>","<span class=\"c\"> \t&lt;!-- HTML CONTENT --&gt;</span>","","<span class=\"c\">\t &lt;ul class=\"nav nav-tabs\" id=\"myTab\"&gt;</span>","<span class=\"c\">\t  &lt;li&gt;&lt;a href=\"#tab1\"&gt;Home&lt;/a&gt;&lt;/li&gt;</span>","<span class=\"c\">\t  &lt;li&gt;&lt;a href=\"#tab2\"&gt;Profile&lt;/a&gt;&lt;/li&gt;</span>","<span class=\"c\">\t  &lt;li&gt;&lt;a href=\"#tab3\"&gt;Messages&lt;/a&gt;&lt;/li&gt;</span>","<span class=\"c\">\t  &lt;li&gt;&lt;a href=\"#tab4\"&gt;Settings&lt;/a&gt;&lt;/li&gt;</span>","<span class=\"c\">\t&lt;/ul&gt;</span>","<span class=\"c\">\t </span>","<span class=\"c\">\t&lt;div class=\"tab-content\"&gt;</span>","<span class=\"c\">\t  &lt;div class=\"tab-pane active\" id=\"tab1\"&gt;...&lt;/div&gt;</span>","<span class=\"c\">\t  &lt;div class=\"tab-pane\" id=\"tab2\" &gt;...&lt;/div&gt;</span>","<span class=\"c\">\t  &lt;div class=\"tab-pane\" id=\"tab3\"&gt;...&lt;/div&gt;</span>","<span class=\"c\">\t  &lt;div class=\"tab-pane\" id=\"tab4\"&gt;...&lt;/div&gt;</span>","<span class=\"c\">\t&lt;/div&gt;</span>","<span class=\"c\"> */</span>",""," <span class=\"c\">/*</span>","<span class=\"c\">\tvar demoConfig = {</span>","<span class=\"c\">\t\tparentSelector: \"#some-id\",</span>","<span class=\"c\">\t\ttabContentPattern : \"folder1/folder2/this_is_content{{contentNumber}}.html\",</span>","<span class=\"c\">\t\tdefaultTabSelector : \"#tabId\",</span>","<span class=\"c\">\t\tbefore: function() { },</span>","<span class=\"c\">\t\tpostLoad: function(jHtml, tabSelector) { },</span>","<span class=\"c\">\t\tpostClick: function(tabSelector) { },</span>","<span class=\"c\">\t\tcontextConfig: [\"path\", { path:\"path\", post: function(context, loadedMap) { } } ] //SEE contextProvider.js in common-ui</span>","<span class=\"c\">\t};</span>","<span class=\"c\">*/</span>",""," pen<span class=\"k\">.</span>define<span class=\"k\">([</span>"," \t<span class=\"s\">\"common-ui/util/PentahoSpinner\"</span><span class=\"k\">,</span> "," \t<span class=\"s\">\"common-ui/util/ContextProvider\"</span><span class=\"k\">,</span>"," \t<span class=\"s\">\"common-ui/util/HandlebarsCompiler\"</span><span class=\"k\">,</span>"," \t<span class=\"s\">\"common-ui/bootstrap\"</span>",""," <span class=\"k\">],</span> <span class=\"k\">function</span><span class=\"k\">(</span>spinConfigs<span class=\"k\">,</span> ContextProvider<span class=\"k\">,</span> HandlebarsCompiler<span class=\"k\">)</span> <span class=\"k\">{</span>\t","","\t<span class=\"k\">var</span> spinner<span class=\"k\">;</span>",""," \t<span class=\"c\">/**</span>","<span class=\"c\"> \t * Initializes the getting started widget</span>","<span class=\"c\"> \t */</span>"," \t<span class=\"k\">function</span> init<span class=\"k\">(</span>config<span class=\"k\">)</span> <span class=\"k\">{</span>",""," \t\t<span class=\"c\">// Create spinner</span>","\t \tspinner <span class=\"k\">=</span> <span class=\"k\">new</span> Spinner<span class=\"k\">(</span>spinConfigs<span class=\"k\">.</span>getLargeConfig<span class=\"k\">());</span>","\t"," \t\t<span class=\"c\">// Bind click events to the tabs in the tab group\t</span>"," \t\t$<span class=\"k\">(</span>config<span class=\"k\">.</span>parentSelector <span class=\"k\">+</span> <span class=\"s\">' #tab-group a'</span><span class=\"k\">).</span>bind<span class=\"k\">(</span><span class=\"s\">\"click\"</span><span class=\"k\">,</span> <span class=\"k\">function</span> <span class=\"k\">(</span>e<span class=\"k\">)</span> <span class=\"k\">{</span>","\t\t\te<span class=\"k\">.</span>preventDefault<span class=\"k\">();</span>","","\t\t\t<span class=\"k\">var</span> tabSelector <span class=\"k\">=</span> $<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">).</span>attr<span class=\"k\">(</span><span class=\"s\">\"href\"</span><span class=\"k\">);</span>","\t\t\t$<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">).</span>tab<span class=\"k\">(</span><span class=\"s\">'show'</span><span class=\"k\">);</span>","","\t\t\t<span class=\"k\">var</span> parentedSelector <span class=\"k\">=</span> config<span class=\"k\">.</span>parentSelector <span class=\"k\">+</span> <span class=\"s\">\" \"</span> <span class=\"k\">+</span> tabSelector<span class=\"k\">;</span>","\t\t\t<span class=\"c\">// Load content for tab if it has not been loaded yet</span>","\t\t\t<span class=\"k\">if</span> <span class=\"k\">(</span>$<span class=\"k\">(</span>parentedSelector<span class=\"k\">).</span>children<span class=\"k\">().</span>length <span class=\"k\">==</span> <span class=\"s\">0</span><span class=\"k\">)</span> <span class=\"k\">{</span>","\t\t\t\t<span class=\"k\">var</span> url <span class=\"k\">=</span> HandlebarsCompiler<span class=\"k\">.</span>compile<span class=\"k\">(</span>config<span class=\"k\">.</span>tabContentPattern<span class=\"k\">,</span> <span class=\"k\">{</span> contentNumber<span class=\"k\">:</span> tabSelector<span class=\"k\">.</span>replace<span class=\"k\">(</span><span class=\"s\">\"#tab\"</span><span class=\"k\">,</span> <span class=\"s\">\"\"</span><span class=\"k\">)</span> <span class=\"k\">}</span><span class=\"k\">);</span>","\t\t\t\t","\t\t\t\tContextProvider<span class=\"k\">.</span>get<span class=\"k\">(</span><span class=\"k\">function</span><span class=\"k\">(</span>context<span class=\"k\">)</span> <span class=\"k\">{</span>","\t\t\t\t\tloadTabContent<span class=\"k\">(</span>url<span class=\"k\">,</span> parentedSelector<span class=\"k\">,</span> context<span class=\"k\">,</span> config<span class=\"k\">.</span>postLoad<span class=\"k\">);</span>","\t\t\t\t<span class=\"k\">}</span><span class=\"k\">,</span> config<span class=\"k\">.</span>contextConfig<span class=\"k\">);</span>","","\t\t\t<span class=\"k\">}</span> ","","\t\t\t<span class=\"k\">if</span> <span class=\"k\">(</span>config<span class=\"k\">.</span>postClick<span class=\"k\">)</span> <span class=\"k\">{</span>","\t\t\t\tconfig<span class=\"k\">.</span>postClick<span class=\"k\">(</span>parentedSelector<span class=\"k\">);</span>","\t\t\t<span class=\"k\">}</span>","\t\t<span class=\"k\">}</span><span class=\"k\">);</span>",""," \t\t<span class=\"k\">if</span> <span class=\"k\">(</span>config<span class=\"k\">.</span>before<span class=\"k\">)</span> <span class=\"k\">{</span>"," \t\t\tconfig<span class=\"k\">.</span>before<span class=\"k\">();</span>"," \t\t<span class=\"k\">}</span>",""," \t\t<span class=\"c\">// Selects the default element and clicks it</span>","\t\t$<span class=\"k\">(</span>config<span class=\"k\">.</span>parentSelector <span class=\"k\">+</span> <span class=\"s\">\" a[href=\"</span> <span class=\"k\">+</span> config<span class=\"k\">.</span>defaultTabSelector <span class=\"k\">+</span> <span class=\"s\">\"]\"</span><span class=\"k\">).</span>click<span class=\"k\">();</span>"," \t<span class=\"k\">}</span>",""," \t<span class=\"c\">/**</span>","<span class=\"c\"> \t * Loads the content for a tab and compiles the content</span>","<span class=\"c\"> \t */</span>"," \t<span class=\"k\">function</span> loadTabContent<span class=\"k\">(</span>url<span class=\"k\">,</span> selector<span class=\"k\">,</span> context<span class=\"k\">,</span> post<span class=\"k\">)</span> <span class=\"k\">{</span>",""," \t\t<span class=\"c\">// Show loading spinner</span>"," \t\tinjectSpinner<span class=\"k\">(</span>selector<span class=\"k\">);</span>",""," \t\t$<span class=\"k\">.</span>get<span class=\"k\">(</span>url<span class=\"k\">,</span> <span class=\"k\">function</span> <span class=\"k\">(</span>data<span class=\"k\">)</span> <span class=\"k\">{</span> \t\t\t"," \t\t\tHandlebarsCompiler<span class=\"k\">.</span>compile<span class=\"k\">(</span>data<span class=\"k\">,</span> context<span class=\"k\">,</span> <span class=\"k\">function</span><span class=\"k\">(</span>compiledContent<span class=\"k\">)</span> <span class=\"k\">{</span>","\t\t\t\t<span class=\"c\">// Delay content injection to give a moment for the loading spinner</span>","\t \t\t\tsetTimeout<span class=\"k\">(</span><span class=\"k\">function</span><span class=\"k\">()</span> <span class=\"k\">{</span>","\t \t\t\t\tspinner<span class=\"k\">.</span>stop<span class=\"k\">();</span>","\t \t\t\t\t","\t \t\t\t\t<span class=\"k\">var</span> html <span class=\"k\">=</span> $<span class=\"k\">(</span>compiledContent<span class=\"k\">);</span>\t \t\t\t\t \t\t\t","\t \t\t\t\t$<span class=\"k\">(</span>selector<span class=\"k\">).</span>html<span class=\"k\">(</span>html<span class=\"k\">);</span>","","\t \t\t\t\t<span class=\"k\">if</span> <span class=\"k\">(</span>post<span class=\"k\">)</span> <span class=\"k\">{</span>","\t \t\t\t\t\tpost<span class=\"k\">(</span>html<span class=\"k\">,</span> selector<span class=\"k\">);</span>","\t \t\t\t\t<span class=\"k\">}</span>","\t \t\t\t<span class=\"k\">}</span><span class=\"k\">,</span> <span class=\"s\">200</span><span class=\"k\">);</span>"," \t\t\t<span class=\"k\">}</span><span class=\"k\">);</span> \t\t\t"," \t\t<span class=\"k\">}</span><span class=\"k\">);</span>"," \t<span class=\"k\">}</span>",""," \t<span class=\"c\">/**</span>","<span class=\"c\"> \t * Injects a spinner into content</span>","<span class=\"c\"> \t */</span>"," \t<span class=\"k\">function</span> injectSpinner<span class=\"k\">(</span>selector<span class=\"k\">)</span> <span class=\"k\">{</span>"," \t\t<span class=\"k\">var</span> jqSpinner <span class=\"k\">=</span> $<span class=\"k\">(</span><span class=\"s\">\"&lt;div&gt;&lt;/div&gt;\"</span><span class=\"k\">);</span>"," \t\tjqSpinner<span class=\"k\">.</span>css<span class=\"k\">(</span><span class=\"k\">{</span>"," \t\t\twidth<span class=\"k\">:</span> <span class=\"s\">\"100%\"</span><span class=\"k\">,</span>"," \t\t\toverflow<span class=\"k\">:</span> <span class=\"s\">\"hidden\"</span>"," \t\t<span class=\"k\">}</span><span class=\"k\">);</span>",""," \t\t$<span class=\"k\">(</span>selector<span class=\"k\">).</span>html<span class=\"k\">(</span>jqSpinner<span class=\"k\">);</span> \t\t","\t\tspinner<span class=\"k\">.</span>spin<span class=\"k\">(</span>jqSpinner<span class=\"k\">[</span><span class=\"s\">0</span><span class=\"k\">]);</span>"," \t<span class=\"k\">}</span>",""," \t<span class=\"k\">return</span> <span class=\"k\">{</span>"," \t\tinit<span class=\"k\">:</span>init"," \t<span class=\"k\">}</span><span class=\"k\">;</span>"," <span class=\"k\">}</span><span class=\"k\">);</span>"];
_$jscoverage['util/BootstrappedTabLoader.js'][39]++;
pen.define(["common-ui/util/PentahoSpinner", "common-ui/util/ContextProvider", "common-ui/util/HandlebarsCompiler", "common-ui/bootstrap"], (function (spinConfigs, ContextProvider, HandlebarsCompiler) {
  _$jscoverage['util/BootstrappedTabLoader.js'][47]++;
  var spinner;
  _$jscoverage['util/BootstrappedTabLoader.js'][52]++;
  function init(config) {
    _$jscoverage['util/BootstrappedTabLoader.js'][55]++;
    spinner = new Spinner(spinConfigs.getLargeConfig());
    _$jscoverage['util/BootstrappedTabLoader.js'][58]++;
    $((config.parentSelector + " #tab-group a")).bind("click", (function (e) {
  _$jscoverage['util/BootstrappedTabLoader.js'][59]++;
  e.preventDefault();
  _$jscoverage['util/BootstrappedTabLoader.js'][61]++;
  var tabSelector = $(this).attr("href");
  _$jscoverage['util/BootstrappedTabLoader.js'][62]++;
  $(this).tab("show");
  _$jscoverage['util/BootstrappedTabLoader.js'][64]++;
  var parentedSelector = (config.parentSelector + " " + tabSelector);
  _$jscoverage['util/BootstrappedTabLoader.js'][66]++;
  if (($(parentedSelector).children().length == 0)) {
    _$jscoverage['util/BootstrappedTabLoader.js'][67]++;
    var url = HandlebarsCompiler.compile(config.tabContentPattern, {contentNumber: tabSelector.replace("#tab", "")});
    _$jscoverage['util/BootstrappedTabLoader.js'][69]++;
    ContextProvider.get((function (context) {
  _$jscoverage['util/BootstrappedTabLoader.js'][70]++;
  loadTabContent(url, parentedSelector, context, config.postLoad);
}), config.contextConfig);
  }
  _$jscoverage['util/BootstrappedTabLoader.js'][75]++;
  if (config.postClick) {
    _$jscoverage['util/BootstrappedTabLoader.js'][76]++;
    config.postClick(parentedSelector);
  }
}));
    _$jscoverage['util/BootstrappedTabLoader.js'][80]++;
    if (config.before) {
      _$jscoverage['util/BootstrappedTabLoader.js'][81]++;
      config.before();
    }
    _$jscoverage['util/BootstrappedTabLoader.js'][85]++;
    $((config.parentSelector + " a[href=" + config.defaultTabSelector + "]")).click();
}
  _$jscoverage['util/BootstrappedTabLoader.js'][91]++;
  function loadTabContent(url, selector, context, post) {
    _$jscoverage['util/BootstrappedTabLoader.js'][94]++;
    injectSpinner(selector);
    _$jscoverage['util/BootstrappedTabLoader.js'][96]++;
    $.get(url, (function (data) {
  _$jscoverage['util/BootstrappedTabLoader.js'][97]++;
  HandlebarsCompiler.compile(data, context, (function (compiledContent) {
  _$jscoverage['util/BootstrappedTabLoader.js'][99]++;
  setTimeout((function () {
  _$jscoverage['util/BootstrappedTabLoader.js'][100]++;
  spinner.stop();
  _$jscoverage['util/BootstrappedTabLoader.js'][102]++;
  var html = $(compiledContent);
  _$jscoverage['util/BootstrappedTabLoader.js'][103]++;
  $(selector).html(html);
  _$jscoverage['util/BootstrappedTabLoader.js'][105]++;
  if (post) {
    _$jscoverage['util/BootstrappedTabLoader.js'][106]++;
    post(html, selector);
  }
}), 200);
}));
}));
}
  _$jscoverage['util/BootstrappedTabLoader.js'][116]++;
  function injectSpinner(selector) {
    _$jscoverage['util/BootstrappedTabLoader.js'][117]++;
    var jqSpinner = $("<div></div>");
    _$jscoverage['util/BootstrappedTabLoader.js'][118]++;
    jqSpinner.css({width: "100%", overflow: "hidden"});
    _$jscoverage['util/BootstrappedTabLoader.js'][123]++;
    $(selector).html(jqSpinner);
    _$jscoverage['util/BootstrappedTabLoader.js'][124]++;
    spinner.spin(jqSpinner[0]);
}
  _$jscoverage['util/BootstrappedTabLoader.js'][127]++;
  return ({init: init});
}));

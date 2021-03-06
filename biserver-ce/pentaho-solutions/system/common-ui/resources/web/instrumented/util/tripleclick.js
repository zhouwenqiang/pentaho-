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
if (! _$jscoverage['util/tripleclick.js']) {
  _$jscoverage['util/tripleclick.js'] = [];
  _$jscoverage['util/tripleclick.js'][5] = 0;
  _$jscoverage['util/tripleclick.js'][7] = 0;
  _$jscoverage['util/tripleclick.js'][9] = 0;
  _$jscoverage['util/tripleclick.js'][12] = 0;
  _$jscoverage['util/tripleclick.js'][13] = 0;
  _$jscoverage['util/tripleclick.js'][16] = 0;
  _$jscoverage['util/tripleclick.js'][19] = 0;
  _$jscoverage['util/tripleclick.js'][23] = 0;
  _$jscoverage['util/tripleclick.js'][24] = 0;
  _$jscoverage['util/tripleclick.js'][28] = 0;
  _$jscoverage['util/tripleclick.js'][29] = 0;
  _$jscoverage['util/tripleclick.js'][31] = 0;
  _$jscoverage['util/tripleclick.js'][32] = 0;
  _$jscoverage['util/tripleclick.js'][33] = 0;
  _$jscoverage['util/tripleclick.js'][36] = 0;
  _$jscoverage['util/tripleclick.js'][40] = 0;
  _$jscoverage['util/tripleclick.js'][41] = 0;
  _$jscoverage['util/tripleclick.js'][44] = 0;
  _$jscoverage['util/tripleclick.js'][48] = 0;
  _$jscoverage['util/tripleclick.js'][52] = 0;
}
_$jscoverage['util/tripleclick.js'].source = ["<span class=\"c\">// @author Rich Adams &lt;rich@richadams.me&gt;</span>","<span class=\"c\">// https://github.com/richadams/jquery-tripleclick</span>","<span class=\"c\">// Implements a triple-click event. Click (or touch) three times within 1s on the element to trigger.</span>","","<span class=\"k\">;(</span><span class=\"k\">function</span><span class=\"k\">(</span>$<span class=\"k\">)</span>","<span class=\"k\">{</span>","    <span class=\"k\">function</span> tripleHandler<span class=\"k\">(</span>event<span class=\"k\">)</span>","    <span class=\"k\">{</span>","        <span class=\"k\">var</span> $elem <span class=\"k\">=</span> jQuery<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">);</span>","","        <span class=\"c\">// Get current values, or 0 if they don't yet exist.</span>","        <span class=\"k\">var</span> clicks <span class=\"k\">=</span> $elem<span class=\"k\">.</span>data<span class=\"k\">(</span><span class=\"s\">\"triclick_clicks\"</span><span class=\"k\">)</span> <span class=\"k\">||</span> <span class=\"s\">0</span><span class=\"k\">;</span>","        <span class=\"k\">var</span> start  <span class=\"k\">=</span> $elem<span class=\"k\">.</span>data<span class=\"k\">(</span><span class=\"s\">\"triclick_start\"</span><span class=\"k\">)</span>  <span class=\"k\">||</span> <span class=\"s\">0</span><span class=\"k\">;</span>","","        <span class=\"c\">// If first click, register start time.</span>","        <span class=\"k\">if</span> <span class=\"k\">(</span>clicks <span class=\"k\">===</span> <span class=\"s\">0</span><span class=\"k\">)</span> <span class=\"k\">{</span> start <span class=\"k\">=</span> event<span class=\"k\">.</span>timeStamp<span class=\"k\">;</span> <span class=\"k\">}</span>","","        <span class=\"c\">// If we have a start time, check it's within limit</span>","        <span class=\"k\">if</span> <span class=\"k\">(</span>start <span class=\"k\">!=</span> <span class=\"s\">0</span>","            <span class=\"k\">&amp;&amp;</span> event<span class=\"k\">.</span>timeStamp <span class=\"k\">&gt;</span> start <span class=\"k\">+</span> <span class=\"s\">1000</span><span class=\"k\">)</span>","        <span class=\"k\">{</span>","            <span class=\"c\">// Tri-click failed, took too long.</span>","            clicks <span class=\"k\">=</span> <span class=\"s\">0</span><span class=\"k\">;</span>","            start  <span class=\"k\">=</span> event<span class=\"k\">.</span>timeStamp<span class=\"k\">;</span>","        <span class=\"k\">}</span>","","        <span class=\"c\">// Increment counter, and do finish action.</span>","        clicks <span class=\"k\">+=</span> <span class=\"s\">1</span><span class=\"k\">;</span>","        <span class=\"k\">if</span> <span class=\"k\">(</span>clicks <span class=\"k\">===</span> <span class=\"s\">3</span><span class=\"k\">)</span>","        <span class=\"k\">{</span>","            clicks     <span class=\"k\">=</span> <span class=\"s\">0</span><span class=\"k\">;</span>","            start      <span class=\"k\">=</span> <span class=\"s\">0</span><span class=\"k\">;</span>","            event<span class=\"k\">.</span>type <span class=\"k\">=</span> <span class=\"s\">\"tripleclick\"</span><span class=\"k\">;</span>","","            <span class=\"c\">// Let jQuery handle the triggering of \"tripleclick\" event handlers</span>","            jQuery<span class=\"k\">.</span>event<span class=\"k\">.</span>handle<span class=\"k\">.</span>apply<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">,</span> arguments<span class=\"k\">);</span>","        <span class=\"k\">}</span>","","        <span class=\"c\">// Update object data</span>","        $elem<span class=\"k\">.</span>data<span class=\"k\">(</span><span class=\"s\">\"triclick_clicks\"</span><span class=\"k\">,</span> clicks<span class=\"k\">);</span>","        $elem<span class=\"k\">.</span>data<span class=\"k\">(</span><span class=\"s\">\"triclick_start\"</span><span class=\"k\">,</span>  start<span class=\"k\">);</span>","    <span class=\"k\">}</span>","","    <span class=\"k\">var</span> tripleclick <span class=\"k\">=</span> $<span class=\"k\">.</span>event<span class=\"k\">.</span>special<span class=\"k\">.</span>tripleclick <span class=\"k\">=</span>","    <span class=\"k\">{</span>","        setup<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span>data<span class=\"k\">,</span> namespaces<span class=\"k\">)</span>","        <span class=\"k\">{</span>","            $<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">).</span>bind<span class=\"k\">(</span><span class=\"s\">\"touchstart click.triple\"</span><span class=\"k\">,</span> tripleHandler<span class=\"k\">);</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        teardown<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span>namespaces<span class=\"k\">)</span>","        <span class=\"k\">{</span>","            $<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">).</span>unbind<span class=\"k\">(</span><span class=\"s\">\"touchstart click.triple\"</span><span class=\"k\">,</span> tripleHandler<span class=\"k\">);</span>","        <span class=\"k\">}</span>","    <span class=\"k\">}</span><span class=\"k\">;</span>","<span class=\"k\">}</span><span class=\"k\">)(</span>jQuery<span class=\"k\">);</span>"];
_$jscoverage['util/tripleclick.js'][5]++;
;
_$jscoverage['util/tripleclick.js'][5]++;
(function ($) {
  _$jscoverage['util/tripleclick.js'][7]++;
  function tripleHandler(event) {
    _$jscoverage['util/tripleclick.js'][9]++;
    var $elem = jQuery(this);
    _$jscoverage['util/tripleclick.js'][12]++;
    var clicks = ($elem.data("triclick_clicks") || 0);
    _$jscoverage['util/tripleclick.js'][13]++;
    var start = ($elem.data("triclick_start") || 0);
    _$jscoverage['util/tripleclick.js'][16]++;
    if ((clicks === 0)) {
      _$jscoverage['util/tripleclick.js'][16]++;
      start = event.timeStamp;
    }
    _$jscoverage['util/tripleclick.js'][19]++;
    if (((start != 0) && (event.timeStamp > (start + 1000)))) {
      _$jscoverage['util/tripleclick.js'][23]++;
      clicks = 0;
      _$jscoverage['util/tripleclick.js'][24]++;
      start = event.timeStamp;
    }
    _$jscoverage['util/tripleclick.js'][28]++;
    clicks += 1;
    _$jscoverage['util/tripleclick.js'][29]++;
    if ((clicks === 3)) {
      _$jscoverage['util/tripleclick.js'][31]++;
      clicks = 0;
      _$jscoverage['util/tripleclick.js'][32]++;
      start = 0;
      _$jscoverage['util/tripleclick.js'][33]++;
      event.type = "tripleclick";
      _$jscoverage['util/tripleclick.js'][36]++;
      jQuery.event.handle.apply(this, arguments);
    }
    _$jscoverage['util/tripleclick.js'][40]++;
    $elem.data("triclick_clicks", clicks);
    _$jscoverage['util/tripleclick.js'][41]++;
    $elem.data("triclick_start", start);
}
  _$jscoverage['util/tripleclick.js'][44]++;
  var tripleclick = ($.event.special.tripleclick = {setup: (function (data, namespaces) {
  _$jscoverage['util/tripleclick.js'][48]++;
  $(this).bind("touchstart click.triple", tripleHandler);
}), teardown: (function (namespaces) {
  _$jscoverage['util/tripleclick.js'][52]++;
  $(this).unbind("touchstart click.triple", tripleHandler);
})});
})(jQuery);

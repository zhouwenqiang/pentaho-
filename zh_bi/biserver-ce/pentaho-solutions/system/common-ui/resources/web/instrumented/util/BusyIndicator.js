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
if (! _$jscoverage['util/BusyIndicator.js']) {
  _$jscoverage['util/BusyIndicator.js'] = [];
  _$jscoverage['util/BusyIndicator.js'][1] = 0;
  _$jscoverage['util/BusyIndicator.js'][3] = 0;
  _$jscoverage['util/BusyIndicator.js'][20] = 0;
  _$jscoverage['util/BusyIndicator.js'][21] = 0;
  _$jscoverage['util/BusyIndicator.js'][24] = 0;
  _$jscoverage['util/BusyIndicator.js'][25] = 0;
  _$jscoverage['util/BusyIndicator.js'][26] = 0;
  _$jscoverage['util/BusyIndicator.js'][28] = 0;
  _$jscoverage['util/BusyIndicator.js'][30] = 0;
  _$jscoverage['util/BusyIndicator.js'][33] = 0;
  _$jscoverage['util/BusyIndicator.js'][34] = 0;
  _$jscoverage['util/BusyIndicator.js'][36] = 0;
  _$jscoverage['util/BusyIndicator.js'][37] = 0;
  _$jscoverage['util/BusyIndicator.js'][39] = 0;
  _$jscoverage['util/BusyIndicator.js'][42] = 0;
  _$jscoverage['util/BusyIndicator.js'][43] = 0;
  _$jscoverage['util/BusyIndicator.js'][44] = 0;
  _$jscoverage['util/BusyIndicator.js'][48] = 0;
  _$jscoverage['util/BusyIndicator.js'][60] = 0;
  _$jscoverage['util/BusyIndicator.js'][64] = 0;
  _$jscoverage['util/BusyIndicator.js'][65] = 0;
  _$jscoverage['util/BusyIndicator.js'][66] = 0;
  _$jscoverage['util/BusyIndicator.js'][68] = 0;
  _$jscoverage['util/BusyIndicator.js'][69] = 0;
  _$jscoverage['util/BusyIndicator.js'][70] = 0;
  _$jscoverage['util/BusyIndicator.js'][71] = 0;
  _$jscoverage['util/BusyIndicator.js'][81] = 0;
  _$jscoverage['util/BusyIndicator.js'][82] = 0;
  _$jscoverage['util/BusyIndicator.js'][83] = 0;
  _$jscoverage['util/BusyIndicator.js'][84] = 0;
  _$jscoverage['util/BusyIndicator.js'][85] = 0;
  _$jscoverage['util/BusyIndicator.js'][86] = 0;
  _$jscoverage['util/BusyIndicator.js'][87] = 0;
  _$jscoverage['util/BusyIndicator.js'][94] = 0;
  _$jscoverage['util/BusyIndicator.js'][95] = 0;
  _$jscoverage['util/BusyIndicator.js'][96] = 0;
  _$jscoverage['util/BusyIndicator.js'][97] = 0;
  _$jscoverage['util/BusyIndicator.js'][98] = 0;
  _$jscoverage['util/BusyIndicator.js'][99] = 0;
  _$jscoverage['util/BusyIndicator.js'][100] = 0;
  _$jscoverage['util/BusyIndicator.js'][101] = 0;
  _$jscoverage['util/BusyIndicator.js'][102] = 0;
  _$jscoverage['util/BusyIndicator.js'][104] = 0;
  _$jscoverage['util/BusyIndicator.js'][107] = 0;
  _$jscoverage['util/BusyIndicator.js'][108] = 0;
  _$jscoverage['util/BusyIndicator.js'][109] = 0;
  _$jscoverage['util/BusyIndicator.js'][117] = 0;
}
_$jscoverage['util/BusyIndicator.js'].source = ["pen<span class=\"k\">.</span>define<span class=\"k\">([</span><span class=\"s\">\"common-ui/util/Glasspane\"</span><span class=\"k\">,</span> <span class=\"s\">\"common-ui/util/PentahoSpinner\"</span><span class=\"k\">,</span> <span class=\"s\">\"common-ui/util/tripleclick\"</span><span class=\"k\">],</span> <span class=\"k\">function</span><span class=\"k\">(</span>Glasspane<span class=\"k\">,</span> spin<span class=\"k\">,</span> tripleclick<span class=\"k\">)</span> <span class=\"k\">{</span>","","    <span class=\"k\">var</span> busy <span class=\"k\">=</span> <span class=\"k\">{</span>","        id<span class=\"k\">:</span> <span class=\"s\">\"pentaho-busy-indicator\"</span><span class=\"k\">,</span>","        fadeInDuration<span class=\"k\">:</span> <span class=\"s\">0</span><span class=\"k\">,</span>","        fadeOutDuration<span class=\"k\">:</span> <span class=\"s\">500</span><span class=\"k\">,</span>","        spinner<span class=\"k\">:</span> <span class=\"k\">null</span><span class=\"k\">,</span>","        glasspane<span class=\"k\">:</span> undefined<span class=\"k\">,</span>","        $busyIndicator<span class=\"k\">:</span> undefined<span class=\"k\">,</span>","        isShowing<span class=\"k\">:</span> <span class=\"k\">false</span><span class=\"k\">,</span>","        indicators<span class=\"k\">:</span> <span class=\"k\">[],</span>","","        <span class=\"c\">/********************************************</span>","<span class=\"c\">         * Accepts an id to give more granular control for certain situations.</span>","<span class=\"c\">         * Keep reference when id is passed. Don't hide indicator until hide() is called with all</span>","<span class=\"c\">         * referenced id's</span>","<span class=\"c\">         ********************************************/</span>","        show<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span><span class=\"c\">/*String*/</span> title<span class=\"k\">,</span> <span class=\"c\">/*String*/</span> message<span class=\"k\">,</span> <span class=\"c\">/*String*/</span> indicatorId<span class=\"k\">)</span> <span class=\"k\">{</span>","","            <span class=\"k\">if</span><span class=\"k\">(</span> <span class=\"k\">(</span> indicatorId <span class=\"k\">!=</span> <span class=\"k\">null</span> <span class=\"k\">)</span> <span class=\"k\">&amp;&amp;</span> <span class=\"k\">(</span> <span class=\"k\">typeof</span> indicatorId <span class=\"k\">!=</span> <span class=\"s\">'undefined'</span> <span class=\"k\">)</span> <span class=\"k\">)</span><span class=\"k\">{</span>","                <span class=\"k\">this</span><span class=\"k\">.</span>indicators<span class=\"k\">.</span>push<span class=\"k\">(</span>indicatorId<span class=\"k\">);</span>","            <span class=\"k\">}</span>","","            <span class=\"k\">if</span><span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>isShowing<span class=\"k\">)</span> <span class=\"k\">{</span>","                <span class=\"k\">if</span><span class=\"k\">(</span><span class=\"k\">typeof</span> console <span class=\"k\">!==</span> <span class=\"s\">'undefined'</span> <span class=\"k\">&amp;&amp;</span> console<span class=\"k\">.</span>log<span class=\"k\">)</span> <span class=\"k\">{</span> console<span class=\"k\">.</span>log<span class=\"k\">(</span><span class=\"s\">\"still showing spinner, don't need another\"</span><span class=\"k\">);</span> <span class=\"k\">}</span>","                <span class=\"k\">return</span><span class=\"k\">;</span>","            <span class=\"k\">}</span>","            <span class=\"k\">this</span><span class=\"k\">.</span>isShowing <span class=\"k\">=</span> <span class=\"k\">true</span><span class=\"k\">;</span>","","            <span class=\"k\">this</span><span class=\"k\">.</span>glasspane <span class=\"k\">=</span> <span class=\"k\">new</span> Glasspane<span class=\"k\">();</span>","","            <span class=\"c\">// if we are busy, no one is above us except the waitPopup (it has zIndex of 20001 by default)</span>","            <span class=\"k\">var</span> zIndex <span class=\"k\">=</span> <span class=\"s\">20000</span><span class=\"k\">;</span>","            <span class=\"k\">this</span><span class=\"k\">.</span>glasspane<span class=\"k\">.</span>show<span class=\"k\">(</span>zIndex<span class=\"k\">);</span>","","            <span class=\"k\">var</span> that <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">;</span>","            $<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>glasspane<span class=\"k\">.</span>$glasspane<span class=\"k\">).</span>bind<span class=\"k\">(</span><span class=\"s\">'tripleclick'</span><span class=\"k\">,</span> <span class=\"k\">function</span><span class=\"k\">()</span> <span class=\"k\">{</span>","              <span class=\"c\">// allow triple-click to forcibly get rid of the busy indicator/glasspane</span>","              that<span class=\"k\">.</span>hide<span class=\"k\">(</span>indicatorId<span class=\"k\">);</span>","            <span class=\"k\">}</span><span class=\"k\">);</span>","","            <span class=\"k\">if</span><span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>spinner <span class=\"k\">==</span> <span class=\"k\">null</span><span class=\"k\">)</span> <span class=\"k\">{</span>","                <span class=\"k\">var</span> config <span class=\"k\">=</span> spin<span class=\"k\">.</span>getLargeConfig<span class=\"k\">();</span>","                <span class=\"k\">this</span><span class=\"k\">.</span>spinner <span class=\"k\">=</span> <span class=\"k\">new</span> Spinner<span class=\"k\">(</span>config<span class=\"k\">);</span>","            <span class=\"k\">}</span>","","            <span class=\"c\">// only create the DOM element if it's not already there</span>","            <span class=\"k\">this</span><span class=\"k\">.</span>$busyIndicator <span class=\"k\">=</span> $<span class=\"k\">(</span>","                <span class=\"s\">\"&lt;div class='busy-indicator-container waitPopup'&gt;\"</span> <span class=\"k\">+</span>","                <span class=\"s\">\"  &lt;div class='busy-indicator-container-wrapper'&gt;\"</span> <span class=\"k\">+</span>","                <span class=\"s\">\"    &lt;div class='pentaho-busy-indicator-spinner'&gt;&lt;/div&gt;\"</span> <span class=\"k\">+</span>","                <span class=\"s\">\"    &lt;div class='pentaho-busy-indicator-msg-contianer'&gt;\"</span> <span class=\"k\">+</span>","                <span class=\"s\">\"      &lt;div class='pentaho-busy-indicator-title waitPopup_title'&gt;\"</span> <span class=\"k\">+</span> title <span class=\"k\">+</span> <span class=\"s\">\"&lt;/div&gt;\"</span> <span class=\"k\">+</span>","                <span class=\"s\">\"      &lt;div class='pentaho-busy-indicator-message waitPopup_msg'&gt;\"</span> <span class=\"k\">+</span> message <span class=\"k\">+</span> <span class=\"s\">\"&lt;/div&gt;\"</span> <span class=\"k\">+</span>","                <span class=\"s\">\"    &lt;/div&gt;\"</span> <span class=\"k\">+</span>","                <span class=\"s\">\"  &lt;/div&gt;\"</span> <span class=\"k\">+</span>","                <span class=\"s\">\"&lt;/div&gt;\"</span>","            <span class=\"k\">);</span>","","            $<span class=\"k\">(</span>window<span class=\"k\">.</span>top<span class=\"k\">.</span>document<span class=\"k\">.</span>body<span class=\"k\">).</span>append<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>$busyIndicator<span class=\"k\">);</span>","","            <span class=\"c\">// adding the styles after the elements are added to the DOM due to an obscure chrome/safari issue where</span>","            <span class=\"c\">// styles weren't getting applied when added in the html declaration</span>","            <span class=\"k\">this</span><span class=\"k\">.</span>$busyIndicator<span class=\"k\">.</span>addClass<span class=\"k\">(</span><span class=\"s\">'waitPopup'</span><span class=\"k\">);</span>","            <span class=\"k\">this</span><span class=\"k\">.</span>$busyIndicator<span class=\"k\">.</span>find<span class=\"k\">(</span><span class=\"s\">'.pentaho-busy-indicator-title'</span><span class=\"k\">).</span>addClass<span class=\"k\">(</span><span class=\"s\">'waitPopup_title'</span><span class=\"k\">);</span>","            <span class=\"k\">this</span><span class=\"k\">.</span>$busyIndicator<span class=\"k\">.</span>find<span class=\"k\">(</span><span class=\"s\">'.pentaho-busy-indicator-message'</span><span class=\"k\">).</span>addClass<span class=\"k\">(</span><span class=\"s\">'waitPopup_msg'</span><span class=\"k\">);</span>","","            <span class=\"k\">var</span> that <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">;</span>","            <span class=\"k\">this</span><span class=\"k\">.</span>$busyIndicator<span class=\"k\">.</span>fadeIn<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>fadeInDuration<span class=\"k\">,</span> <span class=\"k\">function</span><span class=\"k\">()</span> <span class=\"k\">{</span>","              <span class=\"k\">var</span> container <span class=\"k\">=</span> that<span class=\"k\">.</span>$busyIndicator<span class=\"k\">.</span>find<span class=\"k\">(</span><span class=\"s\">\".pentaho-busy-indicator-spinner\"</span><span class=\"k\">);</span>","              that<span class=\"k\">.</span>spinner<span class=\"k\">.</span>spin<span class=\"k\">(</span>container<span class=\"k\">.</span>get<span class=\"k\">(</span><span class=\"s\">0</span><span class=\"k\">));</span>","            <span class=\"k\">}</span><span class=\"k\">);</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","","        <span class=\"c\">/**</span>","<span class=\"c\">         * hide it. Don't hide indicator until hide() is called with all</span>","<span class=\"c\">         * referenced id's</span>","<span class=\"c\">         */</span>","        hide<span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">(</span><span class=\"c\">/*String*/</span> indicatorId<span class=\"k\">)</span> <span class=\"k\">{</span>","            <span class=\"c\">// if passed an id, delete from the array</span>","            <span class=\"k\">if</span><span class=\"k\">(</span> <span class=\"k\">(</span> indicatorId <span class=\"k\">!=</span> <span class=\"k\">null</span> <span class=\"k\">)</span> <span class=\"k\">&amp;&amp;</span> <span class=\"k\">(</span> <span class=\"k\">typeof</span> indicatorId <span class=\"k\">!=</span> <span class=\"s\">'undefined'</span> <span class=\"k\">)</span> <span class=\"k\">)</span><span class=\"k\">{</span>","                <span class=\"k\">var</span> L <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">.</span>indicators<span class=\"k\">.</span>length<span class=\"k\">;</span>","                <span class=\"k\">if</span> <span class=\"k\">(</span>L<span class=\"k\">)</span> <span class=\"k\">{</span>","                    <span class=\"k\">for</span><span class=\"k\">(</span><span class=\"k\">var</span> i <span class=\"k\">=</span> L <span class=\"k\">-</span> <span class=\"s\">1</span> <span class=\"k\">;</span> i <span class=\"k\">&gt;=</span> <span class=\"s\">0</span><span class=\"k\">;</span> i<span class=\"k\">--)</span> <span class=\"k\">{</span>","                        <span class=\"k\">if</span><span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>indicators<span class=\"k\">[</span>i<span class=\"k\">]</span> <span class=\"k\">===</span> indicatorId<span class=\"k\">)</span> <span class=\"k\">{</span>","                            <span class=\"k\">this</span><span class=\"k\">.</span>indicators<span class=\"k\">.</span>splice<span class=\"k\">(</span>i<span class=\"k\">,</span> <span class=\"s\">1</span><span class=\"k\">);</span>","                            <span class=\"k\">break</span><span class=\"k\">;</span>","                        <span class=\"k\">}</span>","                    <span class=\"k\">}</span>","                <span class=\"k\">}</span>","            <span class=\"k\">}</span>","","            <span class=\"c\">// if there are no more ids, hide</span>","            <span class=\"k\">if</span><span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>indicators<span class=\"k\">.</span>length <span class=\"k\">&lt;=</span> <span class=\"s\">0</span><span class=\"k\">)</span><span class=\"k\">{</span>","                <span class=\"k\">if</span><span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>isShowing<span class=\"k\">)</span> <span class=\"k\">{</span>","                    <span class=\"k\">if</span><span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>$busyIndicator<span class=\"k\">)</span> <span class=\"k\">{</span>","                        <span class=\"k\">var</span> that <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">;</span>","                        <span class=\"k\">this</span><span class=\"k\">.</span>$busyIndicator<span class=\"k\">.</span>fadeOut<span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>fadeOutDuration<span class=\"k\">,</span> <span class=\"k\">function</span><span class=\"k\">()</span> <span class=\"k\">{</span>","                            that<span class=\"k\">.</span>spinner<span class=\"k\">.</span>stop<span class=\"k\">();</span>","                            <span class=\"k\">if</span><span class=\"k\">(</span>that<span class=\"k\">.</span>$busyIndicator<span class=\"k\">)</span> <span class=\"k\">{</span>","                                that<span class=\"k\">.</span>$busyIndicator<span class=\"k\">.</span>remove<span class=\"k\">();</span>","                                that<span class=\"k\">.</span>$busyIndicator <span class=\"k\">=</span> undefined<span class=\"k\">;</span>","                            <span class=\"k\">}</span>","                            that<span class=\"k\">.</span>isShowing <span class=\"k\">=</span> <span class=\"k\">false</span><span class=\"k\">;</span>","                        <span class=\"k\">}</span><span class=\"k\">);</span>","                    <span class=\"k\">}</span>","                    <span class=\"k\">if</span><span class=\"k\">(</span><span class=\"k\">this</span><span class=\"k\">.</span>glasspane<span class=\"k\">)</span> <span class=\"k\">{</span>","                        <span class=\"k\">this</span><span class=\"k\">.</span>glasspane<span class=\"k\">.</span>hide<span class=\"k\">();</span>","                        <span class=\"k\">this</span><span class=\"k\">.</span>glasspane <span class=\"k\">=</span> undefined<span class=\"k\">;</span>","                    <span class=\"k\">}</span>","","                <span class=\"k\">}</span>","            <span class=\"k\">}</span>","        <span class=\"k\">}</span>","    <span class=\"k\">}</span><span class=\"k\">;</span>","","    <span class=\"k\">return</span> busy<span class=\"k\">;</span>","","<span class=\"k\">}</span><span class=\"k\">);</span>"];
_$jscoverage['util/BusyIndicator.js'][1]++;
pen.define(["common-ui/util/Glasspane", "common-ui/util/PentahoSpinner", "common-ui/util/tripleclick"], (function (Glasspane, spin, tripleclick) {
  _$jscoverage['util/BusyIndicator.js'][3]++;
  var busy = {id: "pentaho-busy-indicator", fadeInDuration: 0, fadeOutDuration: 500, spinner: null, glasspane: undefined, $busyIndicator: undefined, isShowing: false, indicators: [], show: (function (title, message, indicatorId) {
  _$jscoverage['util/BusyIndicator.js'][20]++;
  if (((indicatorId != null) && ((typeof indicatorId) != "undefined"))) {
    _$jscoverage['util/BusyIndicator.js'][21]++;
    this.indicators.push(indicatorId);
  }
  _$jscoverage['util/BusyIndicator.js'][24]++;
  if (this.isShowing) {
    _$jscoverage['util/BusyIndicator.js'][25]++;
    if ((((typeof console) !== "undefined") && console.log)) {
      _$jscoverage['util/BusyIndicator.js'][25]++;
      console.log("still showing spinner, don't need another");
    }
    _$jscoverage['util/BusyIndicator.js'][26]++;
    return;
  }
  _$jscoverage['util/BusyIndicator.js'][28]++;
  this.isShowing = true;
  _$jscoverage['util/BusyIndicator.js'][30]++;
  this.glasspane = new Glasspane();
  _$jscoverage['util/BusyIndicator.js'][33]++;
  var zIndex = 20000;
  _$jscoverage['util/BusyIndicator.js'][34]++;
  this.glasspane.show(zIndex);
  _$jscoverage['util/BusyIndicator.js'][36]++;
  var that = this;
  _$jscoverage['util/BusyIndicator.js'][37]++;
  $(this.glasspane.$glasspane).bind("tripleclick", (function () {
  _$jscoverage['util/BusyIndicator.js'][39]++;
  that.hide(indicatorId);
}));
  _$jscoverage['util/BusyIndicator.js'][42]++;
  if ((this.spinner == null)) {
    _$jscoverage['util/BusyIndicator.js'][43]++;
    var config = spin.getLargeConfig();
    _$jscoverage['util/BusyIndicator.js'][44]++;
    this.spinner = new Spinner(config);
  }
  _$jscoverage['util/BusyIndicator.js'][48]++;
  this.$busyIndicator = $(("<div class='busy-indicator-container waitPopup'>" + "  <div class='busy-indicator-container-wrapper'>" + "    <div class='pentaho-busy-indicator-spinner'></div>" + "    <div class='pentaho-busy-indicator-msg-contianer'>" + "      <div class='pentaho-busy-indicator-title waitPopup_title'>" + title + "</div>" + "      <div class='pentaho-busy-indicator-message waitPopup_msg'>" + message + "</div>" + "    </div>" + "  </div>" + "</div>"));
  _$jscoverage['util/BusyIndicator.js'][60]++;
  $(window.top.document.body).append(this.$busyIndicator);
  _$jscoverage['util/BusyIndicator.js'][64]++;
  this.$busyIndicator.addClass("waitPopup");
  _$jscoverage['util/BusyIndicator.js'][65]++;
  this.$busyIndicator.find(".pentaho-busy-indicator-title").addClass("waitPopup_title");
  _$jscoverage['util/BusyIndicator.js'][66]++;
  this.$busyIndicator.find(".pentaho-busy-indicator-message").addClass("waitPopup_msg");
  _$jscoverage['util/BusyIndicator.js'][68]++;
  var that = this;
  _$jscoverage['util/BusyIndicator.js'][69]++;
  this.$busyIndicator.fadeIn(this.fadeInDuration, (function () {
  _$jscoverage['util/BusyIndicator.js'][70]++;
  var container = that.$busyIndicator.find(".pentaho-busy-indicator-spinner");
  _$jscoverage['util/BusyIndicator.js'][71]++;
  that.spinner.spin(container.get(0));
}));
}), hide: (function (indicatorId) {
  _$jscoverage['util/BusyIndicator.js'][81]++;
  if (((indicatorId != null) && ((typeof indicatorId) != "undefined"))) {
    _$jscoverage['util/BusyIndicator.js'][82]++;
    var L = this.indicators.length;
    _$jscoverage['util/BusyIndicator.js'][83]++;
    if (L) {
      _$jscoverage['util/BusyIndicator.js'][84]++;
      for (var i = (L - 1); (i >= 0); (i--)) {
        _$jscoverage['util/BusyIndicator.js'][85]++;
        if ((this.indicators[i] === indicatorId)) {
          _$jscoverage['util/BusyIndicator.js'][86]++;
          this.indicators.splice(i, 1);
          _$jscoverage['util/BusyIndicator.js'][87]++;
          break;
        }
}
    }
  }
  _$jscoverage['util/BusyIndicator.js'][94]++;
  if ((this.indicators.length <= 0)) {
    _$jscoverage['util/BusyIndicator.js'][95]++;
    if (this.isShowing) {
      _$jscoverage['util/BusyIndicator.js'][96]++;
      if (this.$busyIndicator) {
        _$jscoverage['util/BusyIndicator.js'][97]++;
        var that = this;
        _$jscoverage['util/BusyIndicator.js'][98]++;
        this.$busyIndicator.fadeOut(this.fadeOutDuration, (function () {
  _$jscoverage['util/BusyIndicator.js'][99]++;
  that.spinner.stop();
  _$jscoverage['util/BusyIndicator.js'][100]++;
  if (that.$busyIndicator) {
    _$jscoverage['util/BusyIndicator.js'][101]++;
    that.$busyIndicator.remove();
    _$jscoverage['util/BusyIndicator.js'][102]++;
    that.$busyIndicator = undefined;
  }
  _$jscoverage['util/BusyIndicator.js'][104]++;
  that.isShowing = false;
}));
      }
      _$jscoverage['util/BusyIndicator.js'][107]++;
      if (this.glasspane) {
        _$jscoverage['util/BusyIndicator.js'][108]++;
        this.glasspane.hide();
        _$jscoverage['util/BusyIndicator.js'][109]++;
        this.glasspane = undefined;
      }
    }
  }
})};
  _$jscoverage['util/BusyIndicator.js'][117]++;
  return busy;
}));

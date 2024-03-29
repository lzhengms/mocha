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
if (! _$jscoverage['index.js']) {
  _$jscoverage['index.js'] = [];
  _$jscoverage['index.js'][6] = 0;
  _$jscoverage['index.js'][8] = 0;
  _$jscoverage['index.js'][10] = 0;
  _$jscoverage['index.js'][12] = 0;
  _$jscoverage['index.js'][22] = 0;
  _$jscoverage['index.js'][36] = 0;
  _$jscoverage['index.js'][37] = 0;
  _$jscoverage['index.js'][41] = 0;
  _$jscoverage['index.js'][42] = 0;
  _$jscoverage['index.js'][47] = 0;
  _$jscoverage['index.js'][49] = 0;
  _$jscoverage['index.js'][50] = 0;
  _$jscoverage['index.js'][55] = 0;
  _$jscoverage['index.js'][57] = 0;
  _$jscoverage['index.js'][59] = 0;
  _$jscoverage['index.js'][60] = 0;
  _$jscoverage['index.js'][63] = 0;
  _$jscoverage['index.js'][67] = 0;
  _$jscoverage['index.js'][69] = 0;
  _$jscoverage['index.js'][78] = 0;
  _$jscoverage['index.js'][79] = 0;
  _$jscoverage['index.js'][84] = 0;
  _$jscoverage['index.js'][85] = 0;
  _$jscoverage['index.js'][87] = 0;
  _$jscoverage['index.js'][88] = 0;
  _$jscoverage['index.js'][91] = 0;
  _$jscoverage['index.js'][95] = 0;
  _$jscoverage['index.js'][107] = 0;
  _$jscoverage['index.js'][110] = 0;
  _$jscoverage['index.js'][111] = 0;
  _$jscoverage['index.js'][114] = 0;
  _$jscoverage['index.js'][116] = 0;
  _$jscoverage['index.js'][119] = 0;
  _$jscoverage['index.js'][123] = 0;
  _$jscoverage['index.js'][127] = 0;
  _$jscoverage['index.js'][130] = 0;
  _$jscoverage['index.js'][133] = 0;
  _$jscoverage['index.js'][134] = 0;
  _$jscoverage['index.js'][139] = 0;
  _$jscoverage['index.js'][141] = 0;
  _$jscoverage['index.js'][145] = 0;
  _$jscoverage['index.js'][147] = 0;
  _$jscoverage['index.js'][150] = 0;
  _$jscoverage['index.js'][153] = 0;
  _$jscoverage['index.js'][155] = 0;
  _$jscoverage['index.js'][156] = 0;
  _$jscoverage['index.js'][157] = 0;
  _$jscoverage['index.js'][158] = 0;
  _$jscoverage['index.js'][164] = 0;
  _$jscoverage['index.js'][166] = 0;
  _$jscoverage['index.js'][167] = 0;
  _$jscoverage['index.js'][171] = 0;
  _$jscoverage['index.js'][175] = 0;
}
_$jscoverage['index.js'].source = ["/**"," * @module Validator"," * @author crossjs &lt;liwenfu@crossjs.com&gt;"," */","","'use strict';","","var $ = require('jquery');","","var Core = require('./src/core');","","var Validator = Core.extend({","","  events: {","    // 'mouseenter .{{attrs.inputClass}}': 'mouseenter',","    // 'mouseleave .{{attrs.inputClass}}': 'mouseleave',","    // 'mouseenter .{{attrs.textareaClass}}': 'mouseenter',","    // 'mouseleave .{{attrs.textareaClass}}': 'mouseleave',","    'focus .{{attrs.itemClass}} input,textarea,select': 'focus',","    'blur .{{attrs.itemClass}} input,textarea,select': 'blur',","    'mouseup .{{attrs.explainClass}}': function(e) {","      this.getItem(e.currentTarget).find('input,textarea,select').focus();","    }","  },","","  attrs: {","    explainClass: 'ui-form-explain',","    itemClass: 'ui-form-item',","    // itemHoverClass: 'ui-form-item-hover',","    itemFocusClass: 'ui-form-item-focus',","    itemErrorClass: 'ui-form-item-error',","    inputClass: 'ui-form-input',","    textareaClass: 'ui-form-textarea',","","    showMessage: function(message, element) {","      this.getExplain(element).html(message);","      this.getItem(element).addClass(this.get('itemErrorClass'));","    },","","    hideMessage: function(message, element) {","      this.getExplain(element).html(element.data('explain') || ' ');","      this.getItem(element).removeClass(this.get('itemErrorClass'));","    }","  },","","  setup: function() {","    Validator.superclass.setup.call(this);","","    this.on('autoFocus', function(ele) {","      this.set('autoFocusEle', ele);","    }.bind(this));","  },","","  addItem: function(cfg) {","    Validator.superclass.addItem.apply(this, arguments);","","    var item = this.query(cfg.element);","","    if (item) {","      this._saveExplainMessage(item);","    }","","    return this;","  },","","  _saveExplainMessage: function(item) {","    var ele = item.element;","","    var explain = ele.data('explain');","    // If explaining message is not specified, retrieve it from data-explain attribute of the target","    // or from DOM element with class name of the value of explainClass attr.","    // Explaining message cannot always retrieve from DOM element with class name of the value of explainClass","    // attr because the initial state of form may contain error messages from server.","    // ---","    // Also, If explaining message is under ui-form-item-error className","    // it could be considered to be a error message from server","    // that should not be put into data-explain attribute","    if (typeof explain === 'undefined' &amp;&amp; !this.getItem(ele).hasClass(this.get('itemErrorClass'))) {","      ele.data('explain', this.getExplain(ele).html());","    }","  },","","  getExplain: function(ele) {","    var item = this.getItem(ele);","    var explain = item.find('.' + this.get('explainClass'));","","    if (explain.length === 0) {","      explain = $('&lt;div class=\"' + this.get('explainClass') + '\"&gt;&lt;/div&gt;').appendTo(item);","    }","","    return explain;","  },","","  getItem: function(ele) {","    return $(ele).parents('.' + this.get('itemClass'));","  },","","  // mouseenter: function(e) {","  //   this.getItem(e.target).addClass(this.get('itemHoverClass'));","  // },","","  // mouseleave: function(e) {","  //   this.getItem(e.target).removeClass(this.get('itemHoverClass'));","  // },","","  focus: function(e) {","    var target = e.target,","      autoFocusEle = this.get('autoFocusEle');","","    if (autoFocusEle &amp;&amp; autoFocusEle.has(target)) {","      return this.set('autoFocusEle', null);","    }","","    var item = this.getItem(target);","","    item.removeClass(this.get('itemErrorClass'))","      .addClass(this.get('itemFocusClass'));","","    this.getExplain(target).html(target.getAttribute('data-explain') || '');","  },","","  blur: function(e) {","    this.getItem(e.target).removeClass(this.get('itemFocusClass'));","  }","});","","Validator.pluginEntry = {","  name: 'Validator',","  starter: function() {","    var plugin = this,","      host = plugin.host;","","    plugin.execute = function() {","      plugin.exports = new Validator($.extend(true, {","        element: host.element","      }, plugin.getOptions('config')));","","      // for form","      typeof host.addField === 'function' &amp;&amp;","        host.after('addField', function(ret, options) {","          Validator.addItemFromHTML(plugin.exports, '[name=\"' + options.name + '\"]');","        });","","      // for form","      typeof host.removeField === 'function' &amp;&amp;","        host.before('removeField', function(name) {","          plugin.exports.removeItem(host.$('[name=\"' + name + '\"]'));","        });","","      plugin.trigger('export', plugin.exports);","    };","","    typeof host.use === 'function' &amp;&amp;","      plugin.on('export', function(instance) {","        host.use(function(next) {","          instance.execute(function(err) {","            if (!err) {","              next();","            }","          });","        }, 'Validator');","      });","","    host.after('render', plugin.execute);","","    host.before('destroy', function() {","      plugin.exports &amp;&amp; plugin.exports.destroy();","    });","","    // &#233;&#128;&#154;&#231;&#159;&#165;&#229;&#176;&#177;&#231;&#187;&#170;","    this.ready();","  }","};","","module.exports = Validator;"];
_$jscoverage['index.js'][6]++;
"use strict";
_$jscoverage['index.js'][8]++;
var $ = require("jquery");
_$jscoverage['index.js'][10]++;
var Core = require("./src/core");
_$jscoverage['index.js'][12]++;
var Validator = Core.extend({events: {"focus .{{attrs.itemClass}} input,textarea,select": "focus", "blur .{{attrs.itemClass}} input,textarea,select": "blur", "mouseup .{{attrs.explainClass}}": (function (e) {
  _$jscoverage['index.js'][22]++;
  this.getItem(e.currentTarget).find("input,textarea,select").focus();
})}, attrs: {explainClass: "ui-form-explain", itemClass: "ui-form-item", itemFocusClass: "ui-form-item-focus", itemErrorClass: "ui-form-item-error", inputClass: "ui-form-input", textareaClass: "ui-form-textarea", showMessage: (function (message, element) {
  _$jscoverage['index.js'][36]++;
  this.getExplain(element).html(message);
  _$jscoverage['index.js'][37]++;
  this.getItem(element).addClass(this.get("itemErrorClass"));
}), hideMessage: (function (message, element) {
  _$jscoverage['index.js'][41]++;
  this.getExplain(element).html((element.data("explain") || " "));
  _$jscoverage['index.js'][42]++;
  this.getItem(element).removeClass(this.get("itemErrorClass"));
})}, setup: (function () {
  _$jscoverage['index.js'][47]++;
  Validator.superclass.setup.call(this);
  _$jscoverage['index.js'][49]++;
  this.on("autoFocus", (function (ele) {
  _$jscoverage['index.js'][50]++;
  this.set("autoFocusEle", ele);
}).bind(this));
}), addItem: (function (cfg) {
  _$jscoverage['index.js'][55]++;
  Validator.superclass.addItem.apply(this, arguments);
  _$jscoverage['index.js'][57]++;
  var item = this.query(cfg.element);
  _$jscoverage['index.js'][59]++;
  if (item) {
    _$jscoverage['index.js'][60]++;
    this._saveExplainMessage(item);
  }
  _$jscoverage['index.js'][63]++;
  return this;
}), _saveExplainMessage: (function (item) {
  _$jscoverage['index.js'][67]++;
  var ele = item.element;
  _$jscoverage['index.js'][69]++;
  var explain = ele.data("explain");
  _$jscoverage['index.js'][78]++;
  if ((((typeof explain) === "undefined") && (! this.getItem(ele).hasClass(this.get("itemErrorClass"))))) {
    _$jscoverage['index.js'][79]++;
    ele.data("explain", this.getExplain(ele).html());
  }
}), getExplain: (function (ele) {
  _$jscoverage['index.js'][84]++;
  var item = this.getItem(ele);
  _$jscoverage['index.js'][85]++;
  var explain = item.find(("." + this.get("explainClass")));
  _$jscoverage['index.js'][87]++;
  if ((explain.length === 0)) {
    _$jscoverage['index.js'][88]++;
    explain = $(("<div class=\"" + this.get("explainClass") + "\"></div>")).appendTo(item);
  }
  _$jscoverage['index.js'][91]++;
  return explain;
}), getItem: (function (ele) {
  _$jscoverage['index.js'][95]++;
  return $(ele).parents(("." + this.get("itemClass")));
}), focus: (function (e) {
  _$jscoverage['index.js'][107]++;
  var target = e.target, autoFocusEle = this.get("autoFocusEle");
  _$jscoverage['index.js'][110]++;
  if ((autoFocusEle && autoFocusEle.has(target))) {
    _$jscoverage['index.js'][111]++;
    return this.set("autoFocusEle", null);
  }
  _$jscoverage['index.js'][114]++;
  var item = this.getItem(target);
  _$jscoverage['index.js'][116]++;
  item.removeClass(this.get("itemErrorClass")).addClass(this.get("itemFocusClass"));
  _$jscoverage['index.js'][119]++;
  this.getExplain(target).html((target.getAttribute("data-explain") || ""));
}), blur: (function (e) {
  _$jscoverage['index.js'][123]++;
  this.getItem(e.target).removeClass(this.get("itemFocusClass"));
})});
_$jscoverage['index.js'][127]++;
Validator.pluginEntry = {name: "Validator", starter: (function () {
  _$jscoverage['index.js'][130]++;
  var plugin = this, host = plugin.host;
  _$jscoverage['index.js'][133]++;
  plugin.execute = (function () {
  _$jscoverage['index.js'][134]++;
  plugin.exports = new Validator($.extend(true, {element: host.element}, plugin.getOptions("config")));
  _$jscoverage['index.js'][139]++;
  (((typeof host.addField) === "function") && host.after("addField", (function (ret, options) {
  _$jscoverage['index.js'][141]++;
  Validator.addItemFromHTML(plugin.exports, ("[name=\"" + options.name + "\"]"));
})));
  _$jscoverage['index.js'][145]++;
  (((typeof host.removeField) === "function") && host.before("removeField", (function (name) {
  _$jscoverage['index.js'][147]++;
  plugin.exports.removeItem(host.$(("[name=\"" + name + "\"]")));
})));
  _$jscoverage['index.js'][150]++;
  plugin.trigger("export", plugin.exports);
});
  _$jscoverage['index.js'][153]++;
  (((typeof host.use) === "function") && plugin.on("export", (function (instance) {
  _$jscoverage['index.js'][155]++;
  host.use((function (next) {
  _$jscoverage['index.js'][156]++;
  instance.execute((function (err) {
  _$jscoverage['index.js'][157]++;
  if ((! err)) {
    _$jscoverage['index.js'][158]++;
    next();
  }
}));
}), "Validator");
})));
  _$jscoverage['index.js'][164]++;
  host.after("render", plugin.execute);
  _$jscoverage['index.js'][166]++;
  host.before("destroy", (function () {
  _$jscoverage['index.js'][167]++;
  (plugin.exports && plugin.exports.destroy());
}));
  _$jscoverage['index.js'][171]++;
  this.ready();
})};
_$jscoverage['index.js'][175]++;
module.exports = Validator;

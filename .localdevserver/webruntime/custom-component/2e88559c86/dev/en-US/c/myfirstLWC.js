Webruntime.define('lwc/myfirstLWC', ['lwc'], function (lwc) { 'use strict';

    function stylesheet(hostSelector, shadowSelector, nativeShadow) {
      return ".button" + shadowSelector + " {color: white;background: rgb(225, 29, 94);border: 0px solid pink;border-radius: 10px;}\n";
    }
    var _implicitStylesheets = [stylesheet];

    function tmpl($api, $cmp, $slotset, $ctx) {
      const {
        t: api_text,
        h: api_element
      } = $api;
      return [api_element("button", {
        key: 0
      }, [api_text("Go Back")])];
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.stylesheets = [];

    if (_implicitStylesheets) {
      tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
    }
    tmpl.stylesheetTokens = {
      hostAttribute: "lwc-myfirstLWC_myfirstLWC-host",
      shadowAttribute: "lwc-myfirstLWC_myfirstLWC"
    };

    class MyfirstLWC extends lwc.LightningElement {}
    var myfirstLWC = lwc.registerComponent(MyfirstLWC, {
      tmpl: _tmpl
    });

    return myfirstLWC;

});

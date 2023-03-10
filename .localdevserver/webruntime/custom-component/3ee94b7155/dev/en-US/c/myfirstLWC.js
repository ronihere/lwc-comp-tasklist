Webruntime.define('lwc/myfirstLWC', ['lwc'], function (lwc) { 'use strict';

    function stylesheet(hostSelector, shadowSelector, nativeShadow) {
      return "button" + shadowSelector + " {color: white;padding: 8px 15px;background: rgb(225, 29, 94);border: 0px solid pink;border-radius: 20px;font-size: smaller;}\n";
    }
    var _implicitStylesheets = [stylesheet];

    function tmpl($api, $cmp, $slotset, $ctx) {
      const {
        h: api_element,
        t: api_text
      } = $api;
      return [api_element("div", {
        classMap: {
          "container": true
        },
        key: 4
      }, [api_element("div", {
        classMap: {
          "pictures": true
        },
        key: 0
      }, []), api_element("div", {
        classMap: {
          "notfound": true
        },
        key: 1
      }, [api_text("Page Not Found")]), api_element("div", {
        classMap: {
          "desc": true
        },
        key: 2
      }, []), api_element("button", {
        key: 3
      }, [api_text("Go Back")])])];
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

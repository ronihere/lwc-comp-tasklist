Webruntime.define('lwc/myfirstLWC', ['lwc'], function (lwc) { 'use strict';

    function stylesheet(hostSelector, shadowSelector, nativeShadow) {
      return ".template" + shadowSelector + "{width: 1280px;height: 984px;margin: 20px 80px;}\n.container" + shadowSelector + "{display: flex;flex-direction: column;}\n.notfound" + shadowSelector + "{font-size: large;font-weight: 500;align-self: center;}\n.desc" + shadowSelector + "{padding-top: 0px;padding-bottom: 10px;font-weight: 100;}\nbutton" + shadowSelector + " {height: 30px;width: 80px;color: white;padding: 8px 15px;background: rgb(225, 29, 94);border: 0px solid rgb(177, 57, 77);border-radius: 20px;font-size: smaller;align-self: center;}\n";
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
        key: 5
      }, [api_element("div", {
        classMap: {
          "pictures": true
        },
        key: 1
      }, [api_element("img", {
        attrs: {
          "src": ""
        },
        key: 0
      }, [])]), api_element("div", {
        classMap: {
          "notfound": true
        },
        key: 2
      }, [api_text("Page Not Found")]), api_element("div", {
        classMap: {
          "desc": true
        },
        key: 3
      }, [api_text("Sorry , The page you requested could not be found")]), api_element("button", {
        key: 4
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

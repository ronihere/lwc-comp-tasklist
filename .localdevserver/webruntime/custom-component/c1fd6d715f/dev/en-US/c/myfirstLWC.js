Webruntime.define('lwc/myfirstLWC', ['lwc'], function (lwc) { 'use strict';

    function tmpl($api, $cmp, $slotset, $ctx) {
      const {
        t: api_text,
        h: api_element
      } = $api;
      return [api_element("button", {
        key: 0
      }, [api_text("submit")])];
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.stylesheets = [];
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

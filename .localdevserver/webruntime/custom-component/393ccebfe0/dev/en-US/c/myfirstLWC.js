Webruntime.define('lwc/myfirstLWC', ['lwc'], function (lwc) { 'use strict';

    function stylesheet(hostSelector, shadowSelector, nativeShadow) {
      return "*" + shadowSelector + " {margin: 0;padding: 0;box-sizing: border-box;}\nhtml " + shadowSelector + ", body" + shadowSelector + " {font-size: 62.5%;}\n.container" + shadowSelector + "{margin: 20rem;}\n.pictures" + shadowSelector + "{display: flex;position: relative;flex-direction: column;}\n.bgimg" + shadowSelector + ",.fgimg" + shadowSelector + "{height: 221px;position: absolute;width: 210px;align-self: center;}\n.fgimg" + shadowSelector + "{height: 154px;;width: 154px;transform: translate(25%,30%);}\n.container2" + shadowSelector + "{display: flex;flex-direction: column;}\n.notfound" + shadowSelector + ",.desc" + shadowSelector + "{color:#415A6C;font-weight: 900;font-size: large;margin-top: 5rem;align-self: center;}\n.desc" + shadowSelector + "{color: #647886;margin-top: 0.2rem;margin-bottom: 1rem;font-size: small;font-weight: 10;}\nbutton" + shadowSelector + "{height: fit-content;padding: 1rem;font-weight: 400;font-size: x-small;width: 8rem;align-self: center;background: #E60372;color: white;border-radius: 2rem;border: 0px solid rgb(182, 59, 80);}\n";
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
        key: 2
      }, [api_element("div", {
        classMap: {
          "pictures": true
        },
        key: 1
      }, [api_element("img", {
        classMap: {
          "bgimg": true
        },
        attrs: {
          "src": "/"
        },
        key: 0
      }, [])])]), api_element("div", {
        classMap: {
          "container2": true
        },
        key: 6
      }, [api_element("div", {
        classMap: {
          "notfound": true
        },
        key: 3
      }, [api_text("Page Not Found")]), api_element("div", {
        classMap: {
          "desc": true
        },
        key: 4
      }, [api_text("Sorry , The page you requested could not be found")]), api_element("button", {
        key: 5
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

    var path = '/assets/project/d12ac51781/staticresources/resource';

    class MyfirstLWC extends lwc.LightningElement {
      constructor(...args) {
        super(...args);
        this.url = '';
      }
      connectedCallback() {
        this.url = `${path}/Vectorbackground.png`;
      }
    }
    lwc.registerDecorators(MyfirstLWC, {
      fields: ["url"]
    });
    var myfirstLWC = lwc.registerComponent(MyfirstLWC, {
      tmpl: _tmpl
    });

    return myfirstLWC;

});

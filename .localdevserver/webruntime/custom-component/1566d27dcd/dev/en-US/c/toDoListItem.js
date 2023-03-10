Webruntime.define('lwc/toDoListItem', ['lwc'], function (lwc) { 'use strict';

    function tmpl($api, $cmp, $slotset, $ctx) {
      const {
        d: api_dynamic,
        h: api_element
      } = $api;
      return [api_element("div", {
        className: $cmp.containerClass,
        key: 1
      }, [api_element("span", {
        key: 0
      }, [api_dynamic($cmp.todoName)])])];
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.stylesheets = [];
    tmpl.stylesheetTokens = {
      hostAttribute: "lwc-toDoListItem_toDoListItem-host",
      shadowAttribute: "lwc-toDoListItem_toDoListItem"
    };

    class ToDoListItem extends lwc.LightningElement {
      constructor(...args) {
        super(...args);
        this.todoName = void 0;
        this.todoId = void 0;
        this.done = void 0;
      }
      get containerClass() {
        return this.done ? "todo completed" : "todo upcoming";
      }
    }
    lwc.registerDecorators(ToDoListItem, {
      publicProps: {
        todoName: {
          config: 0
        },
        todoId: {
          config: 0
        },
        done: {
          config: 0
        }
      }
    });
    var toDoListItem = lwc.registerComponent(ToDoListItem, {
      tmpl: _tmpl
    });

    return toDoListItem;

});

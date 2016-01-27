System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var containerless, MenuItems;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      containerless = _aureliaFramework.containerless;
    }],
    execute: function () {
      MenuItems = (function () {
        function MenuItems() {
          _classCallCheck(this, _MenuItems);
        }

        var _MenuItems = MenuItems;
        MenuItems = containerless()(MenuItems) || MenuItems;
        return MenuItems;
      })();

      _export('MenuItems', MenuItems);
    }
  };
});
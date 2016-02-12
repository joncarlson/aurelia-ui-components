define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
        value: true
    });

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    var MenuItems = (function () {
        function MenuItems() {
            _classCallCheck(this, _MenuItems);
        }

        var _MenuItems = MenuItems;
        MenuItems = (0, _aureliaFramework.inlineView)('\n<template>\n    <ul class="menu__items">\n        <content></content>\n    </ul>\n</template>\n')(MenuItems) || MenuItems;
        MenuItems = (0, _aureliaFramework.containerless)()(MenuItems) || MenuItems;
        return MenuItems;
    })();

    exports.MenuItems = MenuItems;
});
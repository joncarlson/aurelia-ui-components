System.register(['aurelia-framework'], function (_export) {
    'use strict';

    var containerless, inlineView, MenuItems;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            containerless = _aureliaFramework.containerless;
            inlineView = _aureliaFramework.inlineView;
        }],
        execute: function () {
            MenuItems = (function () {
                function MenuItems() {
                    _classCallCheck(this, _MenuItems);
                }

                var _MenuItems = MenuItems;
                MenuItems = inlineView('\n<template>\n    <ul class="menu__items">\n        <content></content>\n    </ul>\n</template>\n')(MenuItems) || MenuItems;
                MenuItems = containerless()(MenuItems) || MenuItems;
                return MenuItems;
            })();

            _export('MenuItems', MenuItems);
        }
    };
});
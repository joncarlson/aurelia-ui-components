define(['exports', 'aurelia-framework', 'aurelia-event-aggregator'], function (exports, _aureliaFramework, _aureliaEventAggregator) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
        value: true
    });

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    var Menu = (function () {
        function Menu(events) {
            var _this = this;

            _classCallCheck(this, _Menu);

            this.open = false;

            events.subscribe('menu:toggle-open', function (open) {
                return _this.open = open;
            });
        }

        var _Menu = Menu;
        Menu = (0, _aureliaFramework.inject)(_aureliaEventAggregator.EventAggregator)(Menu) || Menu;
        Menu = (0, _aureliaFramework.inlineView)('\n<template>\n\t<nav class="menu menu--side" class.bind="open === true ? \'open\' : \'\'">\n\t\t<content></content>\n\t</nav>\n</template>\n')(Menu) || Menu;
        Menu = (0, _aureliaFramework.containerless)()(Menu) || Menu;
        return Menu;
    })();

    exports.Menu = Menu;
});
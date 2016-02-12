define(['exports', 'aurelia-framework', 'aurelia-event-aggregator'], function (exports, _aureliaFramework, _aureliaEventAggregator) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
        value: true
    });

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    var MenuToggle = (function () {
        function MenuToggle(events) {
            _classCallCheck(this, _MenuToggle);

            this._open = false;

            this.events = events;

            this.setMenuStateFromCookie();
        }

        _createClass(MenuToggle, [{
            key: 'toggle',
            value: function toggle() {
                this.open = !this.open;
            }
        }, {
            key: 'setMenuStateFromCookie',
            value: function setMenuStateFromCookie() {
                var cookie = document.cookie.replace(/(?:(?:^|.*;\s*)menuopen\s*\=\s*([^;]*).*$)|^.*$/, '$1');

                if (!cookie) return;

                this.open = cookie;
            }
        }, {
            key: 'open',
            get: function get() {
                return this._open;
            },
            set: function set(open) {
                this._open = open;

                this.events.publish('menu:toggle-open', this._open);

                document.cookie = 'menuopen=' + this._open;
            }
        }]);

        var _MenuToggle = MenuToggle;
        MenuToggle = (0, _aureliaFramework.inject)(_aureliaEventAggregator.EventAggregator)(MenuToggle) || MenuToggle;
        MenuToggle = (0, _aureliaFramework.inlineView)('\n<template>\n    <a href="javascript:;" class="menu__toggle" click.trigger="toggle()">\n        <i class="fa fa-bars"></i>\n        <content></content>\n    </a>\n</template>\n')(MenuToggle) || MenuToggle;
        MenuToggle = (0, _aureliaFramework.containerless)()(MenuToggle) || MenuToggle;
        return MenuToggle;
    })();

    exports.MenuToggle = MenuToggle;
});
System.register(['aurelia-framework', 'aurelia-event-aggregator', 'cookies'], function (_export) {
    'use strict';

    var containerless, inject, inlineView, EventAggregator, Cookies, MenuToggle;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            containerless = _aureliaFramework.containerless;
            inject = _aureliaFramework.inject;
            inlineView = _aureliaFramework.inlineView;
        }, function (_aureliaEventAggregator) {
            EventAggregator = _aureliaEventAggregator.EventAggregator;
        }, function (_cookies) {
            Cookies = _cookies['default'];
        }],
        execute: function () {
            MenuToggle = (function () {
                function MenuToggle(events) {
                    _classCallCheck(this, _MenuToggle);

                    this.events = events;
                    this.open = false;

                    console.log('Cookie', Cookies);
                }

                _createClass(MenuToggle, [{
                    key: 'toggle',
                    value: function toggle() {
                        this.open = !this.open;
                    }
                }, {
                    key: 'open',
                    get: function get() {
                        return this._open;
                    },
                    set: function set(open) {
                        this._open = open;

                        this.events.publish('menu:toggle-open', this._open);
                    }
                }]);

                var _MenuToggle = MenuToggle;
                MenuToggle = inject(EventAggregator)(MenuToggle) || MenuToggle;
                MenuToggle = inlineView('\n<template>\n    <a href="javascript:;" class="menu__toggle" click.trigger="toggle()">\n        <i class="fa fa-bars"></i>\n        <content></content>\n    </a>\n</template>\n')(MenuToggle) || MenuToggle;
                MenuToggle = containerless()(MenuToggle) || MenuToggle;
                return MenuToggle;
            })();

            _export('MenuToggle', MenuToggle);
        }
    };
});
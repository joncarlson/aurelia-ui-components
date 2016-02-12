'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaFramework = require('aurelia-framework');

var _aureliaEventAggregator = require('aurelia-event-aggregator');

var _cookies = require('cookies');

var _cookies2 = _interopRequireDefault(_cookies);

var MenuToggle = (function () {
    function MenuToggle(events) {
        _classCallCheck(this, _MenuToggle);

        this.events = events;
        this.open = false;

        console.log('Cookie', _cookies2['default']);
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
    MenuToggle = (0, _aureliaFramework.inject)(_aureliaEventAggregator.EventAggregator)(MenuToggle) || MenuToggle;
    MenuToggle = (0, _aureliaFramework.inlineView)('\n<template>\n    <a href="javascript:;" class="menu__toggle" click.trigger="toggle()">\n        <i class="fa fa-bars"></i>\n        <content></content>\n    </a>\n</template>\n')(MenuToggle) || MenuToggle;
    MenuToggle = (0, _aureliaFramework.containerless)()(MenuToggle) || MenuToggle;
    return MenuToggle;
})();

exports.MenuToggle = MenuToggle;
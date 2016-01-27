'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.configure = configure;

function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

var _componentsMenuMenu = require('./components/menu/menu');

_defaults(exports, _interopExportWildcard(_componentsMenuMenu, _defaults));

var _componentsMenuMenuItem = require('./components/menu/menu-item');

_defaults(exports, _interopExportWildcard(_componentsMenuMenuItem, _defaults));

var _componentsMenuMenuToggle = require('./components/menu/menu-toggle');

_defaults(exports, _interopExportWildcard(_componentsMenuMenuToggle, _defaults));

var _componentsMenuPushWhenMenuOpen = require('./components/menu/push-when-menu-open');

_defaults(exports, _interopExportWildcard(_componentsMenuPushWhenMenuOpen, _defaults));

function configure(config, callback) {
    config.globalResources('./components/menu/menu', './components/menu/menu-items', './components/menu/menu-item', './components/menu/menu-toggle', './components/menu/push-when-menu-open');

    if (typeof callback === 'function') {
        callback();
    }
}
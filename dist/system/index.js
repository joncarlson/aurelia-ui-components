System.register(['./components/menu/menu', './components/menu/menu-item', './components/menu/menu-toggle', './components/menu/push-when-menu-open'], function (_export) {
    'use strict';

    _export('configure', configure);

    function configure(config, callback) {
        config.globalResources('./components/menu/menu', './components/menu/menu-items', './components/menu/menu-item', './components/menu/menu-toggle', './components/menu/push-when-menu-open');

        if (typeof callback === 'function') {
            callback();
        }
    }

    return {
        setters: [function (_componentsMenuMenu) {
            for (var _key in _componentsMenuMenu) {
                if (_key !== 'default') _export(_key, _componentsMenuMenu[_key]);
            }
        }, function (_componentsMenuMenuItem) {
            for (var _key2 in _componentsMenuMenuItem) {
                if (_key2 !== 'default') _export(_key2, _componentsMenuMenuItem[_key2]);
            }
        }, function (_componentsMenuMenuToggle) {
            for (var _key3 in _componentsMenuMenuToggle) {
                if (_key3 !== 'default') _export(_key3, _componentsMenuMenuToggle[_key3]);
            }
        }, function (_componentsMenuPushWhenMenuOpen) {
            for (var _key4 in _componentsMenuPushWhenMenuOpen) {
                if (_key4 !== 'default') _export(_key4, _componentsMenuPushWhenMenuOpen[_key4]);
            }
        }],
        execute: function () {}
    };
});
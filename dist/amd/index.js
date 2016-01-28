define(['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
        value: true
    });
    exports.configure = configure;
    var components = {
        menu: ['./components/menu/menu', './components/menu/menu-items', './components/menu/menu-item', './components/menu/menu-toggle', './components/menu/push-when-menu-open']
    };

    function configure(config) {
        var includes = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

        if (!includes.length) includes = Object.keys(components);

        config.globalResources(includes.reduce(function (resources, key) {
            return resources.concat(components[key]);
        }, []));
    }
});
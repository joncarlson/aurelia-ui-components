define(['exports', './components/slide-out-navigation/index'], function (exports, _componentsSlideOutNavigationIndex) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.configure = configure;

  function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }

  function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

  _defaults(exports, _interopExportWildcard(_componentsSlideOutNavigationIndex, _defaults));

  function configure(config, callback) {
    config.globalResources('./components/slide-out-navigation/index');

    if (typeof callback === 'function') {
      callback();
    }
  }
});
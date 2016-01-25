System.register(['./components/slide-out-navigation/index'], function (_export) {
  'use strict';

  _export('configure', configure);

  function configure(config, callback) {
    config.globalResources('./components/slide-out-navigation/index');

    if (typeof callback === 'function') {
      callback();
    }
  }

  return {
    setters: [function (_componentsSlideOutNavigationIndex) {
      for (var _key in _componentsSlideOutNavigationIndex) {
        if (_key !== 'default') _export(_key, _componentsSlideOutNavigationIndex[_key]);
      }
    }],
    execute: function () {}
  };
});
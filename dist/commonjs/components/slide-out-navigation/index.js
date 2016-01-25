'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaFramework = require('aurelia-framework');

var SlideOutNavigation = (function () {
    function SlideOutNavigation(element) {
        _classCallCheck(this, _SlideOutNavigation);

        this.element = element;

        alert('got it!');
    }

    var _SlideOutNavigation = SlideOutNavigation;
    SlideOutNavigation = (0, _aureliaFramework.inject)(Element)(SlideOutNavigation) || SlideOutNavigation;
    return SlideOutNavigation;
})();

exports.SlideOutNavigation = SlideOutNavigation;
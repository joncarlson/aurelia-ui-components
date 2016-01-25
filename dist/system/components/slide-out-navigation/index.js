System.register(['aurelia-framework'], function (_export) {
    'use strict';

    var inject, SlideOutNavigation;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }],
        execute: function () {
            SlideOutNavigation = (function () {
                function SlideOutNavigation(element) {
                    _classCallCheck(this, _SlideOutNavigation);

                    this.element = element;

                    alert('got it!');
                }

                var _SlideOutNavigation = SlideOutNavigation;
                SlideOutNavigation = inject(Element)(SlideOutNavigation) || SlideOutNavigation;
                return SlideOutNavigation;
            })();

            _export('SlideOutNavigation', SlideOutNavigation);
        }
    };
});
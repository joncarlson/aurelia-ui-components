System.register(['aurelia-framework'], function (_export) {
    'use strict';

    var customAttribute, inject, AutoFocus;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            customAttribute = _aureliaFramework.customAttribute;
            inject = _aureliaFramework.inject;
        }],
        execute: function () {
            AutoFocus = (function () {
                function AutoFocus(element) {
                    _classCallCheck(this, _AutoFocus);

                    this.element = element;
                }

                _createClass(AutoFocus, [{
                    key: 'attached',
                    value: function attached() {
                        this.element.focus();
                    }
                }]);

                var _AutoFocus = AutoFocus;
                AutoFocus = inject(Element)(AutoFocus) || AutoFocus;
                AutoFocus = customAttribute('auto-focus')(AutoFocus) || AutoFocus;
                return AutoFocus;
            })();

            _export('AutoFocus', AutoFocus);
        }
    };
});
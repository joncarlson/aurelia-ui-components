System.register(['aurelia-framework', 'aurelia-event-aggregator'], function (_export) {
    'use strict';

    var customAttribute, inject, EventAggregator, PushWhenMenuOpen;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            customAttribute = _aureliaFramework.customAttribute;
            inject = _aureliaFramework.inject;
        }, function (_aureliaEventAggregator) {
            EventAggregator = _aureliaEventAggregator.EventAggregator;
        }],
        execute: function () {
            PushWhenMenuOpen = (function () {
                function PushWhenMenuOpen(element, events) {
                    var _this = this;

                    _classCallCheck(this, _PushWhenMenuOpen);

                    this.element = element;

                    events.subscribe('menu:toggle-open', function (open) {
                        return _this.push(open);
                    });
                }

                _createClass(PushWhenMenuOpen, [{
                    key: 'attached',
                    value: function attached() {
                        this.element.className += ' push-when-menu-open';
                    }
                }, {
                    key: 'push',
                    value: function push(open) {
                        this.element.className = this.element.className.replace(/(?:^|\s)menu-open(?!\S)/g, '');

                        if (open === true) this.element.className += ' menu-open';
                    }
                }]);

                var _PushWhenMenuOpen = PushWhenMenuOpen;
                PushWhenMenuOpen = inject(Element, EventAggregator)(PushWhenMenuOpen) || PushWhenMenuOpen;
                PushWhenMenuOpen = customAttribute('push-when-menu-open')(PushWhenMenuOpen) || PushWhenMenuOpen;
                return PushWhenMenuOpen;
            })();

            _export('PushWhenMenuOpen', PushWhenMenuOpen);
        }
    };
});
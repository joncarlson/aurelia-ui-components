System.register(['aurelia-framework', 'aurelia-event-aggregator'], function (_export) {
    'use strict';

    var containerless, inject, EventAggregator, Menu;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            containerless = _aureliaFramework.containerless;
            inject = _aureliaFramework.inject;
        }, function (_aureliaEventAggregator) {
            EventAggregator = _aureliaEventAggregator.EventAggregator;
        }],
        execute: function () {
            Menu = (function () {
                function Menu(events) {
                    var _this = this;

                    _classCallCheck(this, _Menu);

                    this.open = false;

                    events.subscribe('menu:toggle-open', function (open) {
                        return _this.open = open;
                    });
                }

                var _Menu = Menu;
                Menu = inject(EventAggregator)(Menu) || Menu;
                Menu = containerless()(Menu) || Menu;
                return Menu;
            })();

            _export('Menu', Menu);
        }
    };
});
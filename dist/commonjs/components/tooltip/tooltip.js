'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaFramework = require('aurelia-framework');

var Tooltip = (function () {
    function Tooltip() {
        var _this = this;

        _classCallCheck(this, _Tooltip);

        this.showing = false;

        events.subscribe('tooltip:toggle-showing', function (showing) {
            return _this.showing = showing;
        });
    }

    _createClass(Tooltip, [{
        key: 'toggle',
        value: function toggle() {
            this._show = !this._show;
            this.events.publish('tooltip:toggle-showing', this._show);
        }
    }]);

    var _Tooltip = Tooltip;
    Tooltip = (0, _aureliaFramework.containerless)()(Tooltip) || Tooltip;
    return Tooltip;
})();

exports.Tooltip = Tooltip;
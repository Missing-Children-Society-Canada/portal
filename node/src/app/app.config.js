"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppConfig = (function () {
    function AppConfig() {
        this.config = {
            name: 'sing',
            title: 'Sing Dashboard App with Angular 4.0 support by Flatlogic',
            version: '3.2.0',
            /**
             * Whether to print and alert some log information
             */
            debug: true,
            /**
             * In-app constants
             */
            settings: {
                colors: {
                    'white': '#fff',
                    'black': '#000',
                    'gray-light': '#999',
                    'gray-lighter': '#eee',
                    'gray': '#666',
                    'gray-dark': '#343434',
                    'gray-darker': '#222',
                    'gray-semi-light': '#777',
                    'gray-semi-lighter': '#ddd',
                    'brand-primary': '#5d8fc2',
                    'brand-success': '#64bd63',
                    'brand-warning': '#f0b518',
                    'brand-danger': '#dd5826',
                    'brand-info': '#5dc4bf'
                },
                screens: {
                    'xs-max': 543,
                    'sm-min': 544,
                    'sm-max': 767,
                    'md-min': 768,
                    'md-max': 991,
                    'lg-min': 992,
                    'lg-max': 1199,
                    'xl-min': 1200
                },
                navCollapseTimeout: 2500
            },
            /**
             * Application state. May be changed when using.
             * Synced to Local Storage
             */
            state: {
                /**
                 * whether navigation is static (prevent automatic collapsing)
                 */
                'nav-static': false
            }
        };
        this._resizeCallbacks = [];
        this._screenSizeCallbacks = {
            xs: { enter: [], exit: [] },
            sm: { enter: [], exit: [] },
            md: { enter: [], exit: [] },
            lg: { enter: [], exit: [] },
            xl: { enter: [], exit: [] }
        };
        this._initResizeEvent();
        this._initOnScreenSizeCallbacks();
    }
    AppConfig.prototype.isScreen = function (size) {
        var screenPx = window.innerWidth;
        return (screenPx >= this.config.settings.screens[size + '-min'] || size === 'xs')
            && (screenPx <= this.config.settings.screens[size + '-max'] || size === 'xl');
    };
    AppConfig.prototype.getScreenSize = function () {
        var screenPx = window.innerWidth;
        if (screenPx <= this.config.settings.screens['xs-max']) {
            return 'xs';
        }
        if ((screenPx >= this.config.settings.screens['sm-min'])
            && (screenPx <= this.config.settings.screens['sm-max'])) {
            return 'sm';
        }
        if ((screenPx >= this.config.settings.screens['md-min'])
            && (screenPx <= this.config.settings.screens['md-max'])) {
            return 'md';
        }
        if ((screenPx >= this.config.settings.screens['lg-min'])
            && (screenPx <= this.config.settings.screens['lg-max'])) {
            return 'lg';
        }
        if (screenPx >= this.config.settings.screens['xl-min']) {
            return 'xl';
        }
    };
    AppConfig.prototype.onScreenSize = function (size, fn, /* Boolean= */ onEnter) {
        onEnter = typeof onEnter !== 'undefined' ? onEnter : true;
        if (typeof size === 'object') {
            for (var i = 0; i < size.length; i++) {
                this._screenSizeCallbacks[size[i]][onEnter ? 'enter' : 'exit'].push(fn);
            }
        }
        else {
            this._screenSizeCallbacks[size][onEnter ? 'enter' : 'exit'].push(fn);
        }
    };
    AppConfig.prototype.changeColor = function (color, ratio, darker) {
        var pad = function (num, totalChars) {
            var padVal = '0';
            num = num + '';
            while (num.length < totalChars) {
                num = padVal + num;
            }
            return num;
        };
        // Trim trailing/leading whitespace
        color = color.replace(/^\s*|\s*$/, '');
        // Expand three-digit hex
        color = color.replace(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i, '#$1$1$2$2$3$3');
        // Calculate ratio
        var difference = Math.round(ratio * 256) * (darker ? -1 : 1), 
        // Determine if input is RGB(A)
        rgb = color.match(new RegExp('^rgba?\\(\\s*' +
            '(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])' +
            '\\s*,\\s*' +
            '(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])' +
            '\\s*,\\s*' +
            '(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])' +
            '(?:\\s*,\\s*' +
            '(0|1|0?\\.\\d+))?' +
            '\\s*\\)$', 'i')), alpha = !!rgb && rgb[4] !== null ? rgb[4] : null, 
        // Convert hex to decimal
        decimal = !!rgb ? [rgb[1], rgb[2], rgb[3]] : color.replace(/^#?([a-f0-9][a-f0-9])([a-f0-9][a-f0-9])([a-f0-9][a-f0-9])/i, function () {
            return parseInt(arguments[1], 16) + ',' +
                parseInt(arguments[2], 16) + ',' +
                parseInt(arguments[3], 16);
        }).split(/,/);
        // Return RGB(A)
        return !!rgb ?
            'rgb' + (alpha !== null ? 'a' : '') + '(' +
                Math[darker ? 'max' : 'min'](parseInt(decimal[0], 10) + difference, darker ? 0 : 255) + ', ' +
                Math[darker ? 'max' : 'min'](parseInt(decimal[1], 10) + difference, darker ? 0 : 255) + ', ' +
                Math[darker ? 'max' : 'min'](parseInt(decimal[2], 10) + difference, darker ? 0 : 255) +
                (alpha !== null ? ', ' + alpha : '') +
                ')' :
            // Return hex
            [
                '#',
                pad(Math[darker ? 'max' : 'min'](parseInt(decimal[0], 10) + difference, darker ? 0 : 255).toString(16), 2),
                pad(Math[darker ? 'max' : 'min'](parseInt(decimal[1], 10) + difference, darker ? 0 : 255).toString(16), 2),
                pad(Math[darker ? 'max' : 'min'](parseInt(decimal[2], 10) + difference, darker ? 0 : 255).toString(16), 2)
            ].join('');
    };
    AppConfig.prototype.lightenColor = function (color, ratio) {
        return this.changeColor(color, ratio, false);
    };
    AppConfig.prototype.darkenColor = function (color, ratio) {
        return this.changeColor(color, ratio, true);
    };
    AppConfig.prototype.max = function (array) {
        return Math.max.apply(null, array);
    };
    AppConfig.prototype.min = function (array) {
        return Math.min.apply(null, array);
    };
    AppConfig.prototype._initResizeEvent = function () {
        var resizeTimeout;
        jQuery(window).on('resize', function () {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(function () {
                jQuery(window).trigger('sn:resize');
            }, 100);
        });
    };
    AppConfig.prototype._initOnScreenSizeCallbacks = function () {
        var _this = this;
        var resizeTimeout, prevSize = this.getScreenSize();
        jQuery(window).resize(function () {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(function () {
                var size = _this.getScreenSize();
                if (size !== prevSize) {
                    // run exit callbacks first
                    _this._screenSizeCallbacks[prevSize].exit.forEach(function (fn) {
                        fn(size, prevSize);
                    });
                    // run enter callbacks then
                    _this._screenSizeCallbacks[size].enter.forEach(function (fn) {
                        fn(size, prevSize);
                    });
                    console.log('screen changed. new: ' + size + ', old: ' + prevSize);
                }
                prevSize = size;
            }, 100);
        });
    };
    AppConfig.prototype.getConfig = function () {
        return this.config;
    };
    return AppConfig;
}());
AppConfig = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], AppConfig);
exports.AppConfig = AppConfig;
//# sourceMappingURL=app.config.js.map
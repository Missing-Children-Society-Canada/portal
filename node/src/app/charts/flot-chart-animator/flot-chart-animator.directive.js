"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_config_1 = require("../../app.config");
var FlotChartAnimator = (function () {
    function FlotChartAnimator(el, config) {
        this.config = config.getConfig();
        this.$el = jQuery(el.nativeElement);
    }
    FlotChartAnimator.prototype.render = function () {
        var data = this.data;
        var $el = this.$el;
        var d = this;
        function resize() {
            jQuery.plotAnimator($el, data, {
                xaxis: {
                    tickLength: 0,
                    tickDecimals: 0,
                    min: 2,
                    font: {
                        lineHeight: 13,
                        weight: 'bold',
                        /* tslint:disable */
                        color: d.config.settings.colors['gray-semi-light']
                        /* tslint:enable */
                    }
                },
                yaxis: {
                    tickDecimals: 0,
                    tickColor: '#f3f3f3',
                    font: {
                        lineHeight: 13,
                        weight: 'bold',
                        /* tslint:disable */
                        color: d.config.settings.colors['gray-semi-light']
                        /* tslint:enable */
                    }
                },
                grid: {
                    backgroundColor: { colors: ['#fff', '#fff'] },
                    borderWidth: 1,
                    borderColor: '#f0f0f0',
                    margin: 0,
                    minBorderMargin: 0,
                    labelMargin: 20,
                    hoverable: true,
                    clickable: true,
                    mouseActiveRadius: 6
                },
                legend: false
            });
        }
        jQuery(window).on('sn:resize', resize);
        resize();
    };
    FlotChartAnimator.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { _this.render(); }, 100);
    };
    return FlotChartAnimator;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FlotChartAnimator.prototype, "data", void 0);
FlotChartAnimator = __decorate([
    core_1.Directive({
        selector: '[flot-chart-animator]'
    }),
    __metadata("design:paramtypes", [Object, app_config_1.AppConfig])
], FlotChartAnimator);
exports.FlotChartAnimator = FlotChartAnimator;
//# sourceMappingURL=flot-chart-animator.directive.js.map
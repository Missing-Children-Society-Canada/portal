"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FlotChart = (function () {
    function FlotChart(el) {
        this.$el = jQuery(el.nativeElement);
    }
    FlotChart.prototype.render = function () {
        jQuery.plot(this.$el, this.data, this.options || {
            series: {
                lines: {
                    show: true,
                    lineWidth: 1,
                    fill: false,
                    fillColor: { colors: [{ opacity: .001 }, { opacity: .5 }] }
                },
                points: {
                    show: false,
                    fill: true
                },
                shadowSize: 0
            },
            legend: false,
            grid: {
                show: false,
                margin: 0,
                labelMargin: 0,
                axisMargin: 0,
                hoverable: true,
                clickable: true,
                tickColor: 'rgba(255,255,255,1)',
                borderWidth: 0
            }
        });
    };
    FlotChart.prototype.ngAfterViewInit = function () {
        this.render();
    };
    return FlotChart;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FlotChart.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FlotChart.prototype, "options", void 0);
FlotChart = __decorate([
    core_1.Directive({
        selector: '[flot-chart]'
    }),
    __metadata("design:paramtypes", [Object])
], FlotChart);
exports.FlotChart = FlotChart;
//# sourceMappingURL=flot.directive.js.map
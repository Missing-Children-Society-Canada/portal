"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Nvd3Chart = (function () {
    function Nvd3Chart(el) {
        this.$el = jQuery(el.nativeElement);
    }
    Nvd3Chart.prototype.render = function () {
        var _this = this;
        nv.addGraph(function () {
            var chart = _this.chart;
            d3.select(_this.$el.find('svg')[0])
                .style('height', _this.height || '300px')
                .datum(_this.datum)
                .transition().duration(500)
                .call(chart);
            jQuery(window).on('sn:resize', chart.update);
            return chart;
        });
    };
    Nvd3Chart.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { _this.render(); }, 100);
    };
    return Nvd3Chart;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Nvd3Chart.prototype, "chart", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Nvd3Chart.prototype, "height", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Nvd3Chart.prototype, "datum", void 0);
Nvd3Chart = __decorate([
    core_1.Directive({
        selector: '[nvd3-chart]'
    }),
    __metadata("design:paramtypes", [Object])
], Nvd3Chart);
exports.Nvd3Chart = Nvd3Chart;
//# sourceMappingURL=nvd3.directive.js.map
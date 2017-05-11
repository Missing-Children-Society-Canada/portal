"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RickshawChart = (function () {
    function RickshawChart(el) {
        this.$el = jQuery(el.nativeElement);
    }
    RickshawChart.prototype.render = function () {
        var _this = this;
        var graph = new Rickshaw.Graph({
            element: this.$el[0],
            height: this.height,
            renderer: this.renderer || 'area',
            series: this.series
        });
        var onResize = function () {
            var configureProperties = jQuery.extend({
                height: _this.height
            }, _this.configureProps);
            graph.configure(configureProperties);
            graph.render();
            _this.$el.find('svg').css({ height: _this.height, width: '100%' });
        };
        jQuery(window).on('sn:resize', onResize);
        onResize();
        var hoverDetail = new Rickshaw.Graph.HoverDetail({
            graph: graph,
            xFormatter: function (x) {
                return new Date(x * 1000).toString();
            }
        });
        if (this.realtime) {
            setInterval(function () {
                _this.random.removeData(_this.seriesData);
                _this.random.addData(_this.seriesData);
                graph.update();
            }, 1000);
        }
    };
    RickshawChart.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { _this.render(); }, 100);
    };
    return RickshawChart;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RickshawChart.prototype, "height", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], RickshawChart.prototype, "series", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], RickshawChart.prototype, "seriesData", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RickshawChart.prototype, "random", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RickshawChart.prototype, "configureProps", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], RickshawChart.prototype, "realtime", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RickshawChart.prototype, "renderer", void 0);
RickshawChart = __decorate([
    core_1.Directive({
        selector: '[rickshaw-chart]'
    }),
    __metadata("design:paramtypes", [Object])
], RickshawChart);
exports.RickshawChart = RickshawChart;
//# sourceMappingURL=rickshaw.directive.js.map
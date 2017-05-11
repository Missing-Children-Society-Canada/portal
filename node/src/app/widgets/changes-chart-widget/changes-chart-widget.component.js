"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_config_1 = require("../../app.config");
var ChangesChartWidget = (function () {
    function ChangesChartWidget(config) {
        this.config = config.getConfig();
        this.configFn = config;
    }
    ChangesChartWidget.prototype.applyRickshawData = function () {
        var seriesData = [[], []];
        var random = new Rickshaw.Fixtures.RandomData(10000);
        for (var i = 0; i < 32; i++) {
            random.addData(seriesData);
        }
        this.series = [{
                name: 'pop',
                data: seriesData.shift().map(function (d) { return { x: d.x, y: d.y }; }),
                /* tslint:disable */
                color: this.configFn.lightenColor(this.config.settings.colors['brand-success'], .09),
                /* tslint:enable */
                renderer: 'bar'
            }, {
                name: 'humidity',
                data: seriesData.shift()
                    .map(function (d) {
                    return { x: d.x, y: d.y * (Math.random() * 0.1 + 1.1) };
                }),
                renderer: 'line',
                /* tslint:disable */
                color: this.config.settings.colors['white']
                /* tslint:enable */
            }];
    };
    ;
    ChangesChartWidget.prototype.applySparklineData = function () {
        var data = [3, 6, 2, 4, 5, 8, 6, 8], dataMax = this.configFn.max(data), backgroundData = data.map(function () { return dataMax; });
        this.sparklineData = [backgroundData, data];
        this.sparklineOptions = [{
                type: 'bar',
                height: 26,
                /* tslint:disable */
                barColor: this.config.settings.colors['gray-lighter'],
                /* tslint:enable */
                barWidth: 7,
                barSpacing: 5,
                chartRangeMin: this.configFn.min(data),
                tooltipFormat: new jQuery.SPFormatClass('')
            },
            {
                composite: true,
                type: 'bar',
                /* tslint:disable */
                barColor: this.config.settings.colors['brand-success'],
                /* tslint:enable */
                barWidth: 7,
                barSpacing: 5
            }];
    };
    ;
    ChangesChartWidget.prototype.ngOnInit = function () {
        this.applyRickshawData();
        this.applySparklineData();
    };
    return ChangesChartWidget;
}());
ChangesChartWidget = __decorate([
    core_1.Component({
        selector: '[changes-chart-widget]',
        templateUrl: './changes-chart-widget.template.html',
        encapsulation: core_1.ViewEncapsulation.None,
        styleUrls: ['../../../../node_modules/rickshaw/rickshaw.css']
    }),
    __metadata("design:paramtypes", [app_config_1.AppConfig])
], ChangesChartWidget);
exports.ChangesChartWidget = ChangesChartWidget;
//# sourceMappingURL=changes-chart-widget.component.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_config_1 = require("../../app.config");
var FlotChartWidget = (function () {
    function FlotChartWidget(config) {
        this.configFn = config;
        this.config = config.getConfig();
    }
    FlotChartWidget.prototype.generateRandomData = function (labels) {
        function random() {
            return (Math.floor(Math.random() * 30)) + 10;
        }
        var data = [], maxValueIndex = 5;
        for (var i = 0; i < labels.length; i++) {
            var randomSeries = [];
            for (var j = 0; j < 25; j++) {
                randomSeries.push([j, Math.floor(maxValueIndex * j) + random()]);
            }
            maxValueIndex--;
            data.push({
                data: randomSeries,
                showLabels: true,
                label: labels[i].label,
                labelPlacement: 'below',
                canvasRender: true,
                cColor: 'red',
                color: labels[i].color
            });
        }
        return data;
    };
    ;
    return FlotChartWidget;
}());
FlotChartWidget = __decorate([
    core_1.Component({
        selector: '[flot-chart-widget]',
        templateUrl: './flot-chart-widget.template.html',
    }),
    __metadata("design:paramtypes", [app_config_1.AppConfig])
], FlotChartWidget);
exports.FlotChartWidget = FlotChartWidget;
//# sourceMappingURL=flot-chart-widget.component.js.map
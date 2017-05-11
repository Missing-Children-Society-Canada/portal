"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
require("webpack-raphael");
require("easy-pie-chart/dist/jquery.easypiechart.js");
var widget_module_1 = require("../layout/widget/widget.module");
var flot_module_1 = require("../components/flot/flot.module");
var morris_module_1 = require("../components/morris/morris.module");
var nvd3_module_1 = require("../components/nvd3/nvd3.module");
var sparkline_module_1 = require("../components/sparkline/sparkline.module");
var rickshaw_module_1 = require("../components/rickshaw/rickshaw.module");
var flot_chart_animator_directive_1 = require("./flot-chart-animator/flot-chart-animator.directive");
var charts_component_1 = require("./charts.component");
exports.routes = [
    { path: '', component: charts_component_1.Charts, pathMatch: 'full' }
];
var ChartsModule = (function () {
    function ChartsModule() {
    }
    return ChartsModule;
}());
ChartsModule.routes = exports.routes;
ChartsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            widget_module_1.WidgetModule,
            flot_module_1.FlotChartModule,
            morris_module_1.MorrisChartModule,
            nvd3_module_1.Nvd3ChartModule,
            sparkline_module_1.JqSparklineModule,
            rickshaw_module_1.RickshawChartModule,
            router_1.RouterModule.forChild(exports.routes)
        ],
        declarations: [
            charts_component_1.Charts,
            flot_chart_animator_directive_1.FlotChartAnimator
        ]
    })
], ChartsModule);
exports.ChartsModule = ChartsModule;
//# sourceMappingURL=charts.module.js.map
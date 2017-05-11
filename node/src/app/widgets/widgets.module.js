"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var widgets_component_1 = require("./widgets.component");
var tile_module_1 = require("../components/tile/tile.module");
var skycon_module_1 = require("../components/skycon/skycon.module");
var widget_module_1 = require("../layout/widget/widget.module");
var flot_module_1 = require("../components/flot/flot.module");
var rickshaw_module_1 = require("../components/rickshaw/rickshaw.module");
var sparkline_module_1 = require("../components/sparkline/sparkline.module");
var mapael_module_1 = require("../components/mapael/mapael.module");
var changes_chart_widget_component_1 = require("./changes-chart-widget/changes-chart-widget.component");
var flot_chart_widget_component_1 = require("./flot-chart-widget/flot-chart-widget.component");
var nasdaq_sparkline_widget_component_1 = require("./nasdaq-sparkline-widget/nasdaq-sparkline-widget.component");
var realtime_traffic_widget_component_1 = require("./realtime-traffic-widget/realtime-traffic-widget.component");
var years_map_widget_component_1 = require("./years-map-widget/years-map-widget.component");
var fake_world_data_service_1 = require("./years-map-widget/fake-world-data.service");
exports.routes = [
    { path: '', component: widgets_component_1.Widgets, pathMatch: 'full' }
];
var WidgetsModule = (function () {
    function WidgetsModule() {
    }
    return WidgetsModule;
}());
WidgetsModule.routes = exports.routes;
WidgetsModule = __decorate([
    core_1.NgModule({
        declarations: [
            widgets_component_1.Widgets,
            changes_chart_widget_component_1.ChangesChartWidget,
            flot_chart_widget_component_1.FlotChartWidget,
            nasdaq_sparkline_widget_component_1.NasdaqSparklineWidget,
            realtime_traffic_widget_component_1.RealtimeTrafficWidget,
            years_map_widget_component_1.YearsMapWidget
        ],
        imports: [
            common_1.CommonModule,
            router_1.RouterModule.forChild(exports.routes),
            tile_module_1.LiveTileModule,
            skycon_module_1.SkyconsModule,
            widget_module_1.WidgetModule,
            flot_module_1.FlotChartModule,
            rickshaw_module_1.RickshawChartModule,
            sparkline_module_1.JqSparklineModule,
            mapael_module_1.MapaelLayersMapModule
        ],
        providers: [fake_world_data_service_1.FakeWorldData]
    })
], WidgetsModule);
exports.WidgetsModule = WidgetsModule;
//# sourceMappingURL=widgets.module.js.map
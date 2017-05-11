"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
require("jquery.animate-number/jquery.animateNumber.js");
require("jQuery-Mapael/js/jquery.mapael.js");
require("jQuery-Mapael/js/maps/usa_states");
require("bootstrap_calendar/bootstrap_calendar/js/bootstrap_calendar.js");
var dashboard_component_ts_1 = require("./dashboard.component.ts");
var widget_module_1 = require("../layout/widget/widget.module");
var utils_module_1 = require("../layout/utils/utils.module");
var rickshaw_module_1 = require("../components/rickshaw/rickshaw.module");
var geo_locations_widget_directive_1 = require("./geo-locations-widget/geo-locations-widget.directive");
var market_stats_widget_component_1 = require("./market-stats-widget/market-stats-widget.component");
var bootstrap_calendar_component_1 = require("./bootstrap-calendar/bootstrap-calendar.component");
exports.routes = [
    { path: '', component: dashboard_component_ts_1.Dashboard, pathMatch: 'full' }
];
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule.routes = exports.routes;
DashboardModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule.forChild(exports.routes),
            widget_module_1.WidgetModule,
            utils_module_1.UtilsModule,
            rickshaw_module_1.RickshawChartModule
        ],
        declarations: [
            dashboard_component_ts_1.Dashboard,
            geo_locations_widget_directive_1.GeoLocationsWidget,
            bootstrap_calendar_component_1.BootstrapCalendar,
            market_stats_widget_component_1.MarketStatsWidget
        ]
    })
], DashboardModule);
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map
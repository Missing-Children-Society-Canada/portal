"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var layout_component_1 = require("./layout.component");
// noinspection TypeScriptValidateTypes
var routes = [
    { path: '', component: layout_component_1.Layout, children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule' },
            { path: 'inbox', loadChildren: '../inbox/inbox.module#InboxModule' },
            { path: 'charts', loadChildren: '../charts/charts.module#ChartsModule' },
            { path: 'profile', loadChildren: '../profile/profile.module#ProfileModule' },
            { path: 'forms', loadChildren: '../forms/forms.module#FormModule' },
            { path: 'ui', loadChildren: '../ui-elements/ui-elements.module#UiElementsModule' },
            { path: 'extra', loadChildren: '../extra/extra.module#ExtraModule' },
            { path: 'tables', loadChildren: '../tables/tables.module#TablesModule' },
            { path: 'maps', loadChildren: '../maps/maps.module#MapsModule' },
            { path: 'grid', loadChildren: '../grid/grid.module#GridModule' },
            { path: 'widgets', loadChildren: '../widgets/widgets.module#WidgetsModule' },
        ] }
];
exports.ROUTES = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=layout.routes.js.map
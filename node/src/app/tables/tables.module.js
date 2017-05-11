"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var ng2_bootstrap_2 = require("ng2-bootstrap");
var angular2_datatable_1 = require("angular2-datatable");
var ng2_table_1 = require("ng2-table");
var widget_module_1 = require("../layout/widget/widget.module");
var utils_module_1 = require("../layout/utils/utils.module");
var sparkline_module_1 = require("../components/sparkline/sparkline.module");
var tables_basic_component_1 = require("./basic/tables-basic.component");
var tables_dynamic_component_1 = require("./dynamic/tables-dynamic.component");
var search_pipe_1 = require("./dynamic/pipes/search-pipe");
exports.routes = [
    { path: '', redirectTo: 'basic', pathMatch: 'full' },
    { path: 'basic', component: tables_basic_component_1.TablesBasic },
    { path: 'dynamic', component: tables_dynamic_component_1.TablesDynamic },
];
var TablesModule = (function () {
    function TablesModule() {
    }
    return TablesModule;
}());
TablesModule.routes = exports.routes;
TablesModule = __decorate([
    core_1.NgModule({
        declarations: [
            // Components / Directives/ Pipes
            tables_basic_component_1.TablesBasic,
            tables_dynamic_component_1.TablesDynamic,
            search_pipe_1.SearchPipe
        ],
        imports: [
            common_1.CommonModule,
            sparkline_module_1.JqSparklineModule,
            forms_1.FormsModule,
            ng2_bootstrap_1.AlertModule.forRoot(),
            ng2_bootstrap_1.TooltipModule.forRoot(),
            ng2_bootstrap_2.ButtonsModule.forRoot(),
            ng2_bootstrap_2.DropdownModule.forRoot(),
            ng2_bootstrap_2.PaginationModule.forRoot(),
            widget_module_1.WidgetModule,
            utils_module_1.UtilsModule,
            ng2_table_1.Ng2TableModule,
            angular2_datatable_1.DataTableModule,
            router_1.RouterModule.forChild(exports.routes)
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], TablesModule);
exports.TablesModule = TablesModule;
//# sourceMappingURL=tables.module.js.map
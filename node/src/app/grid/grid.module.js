"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jquery-ui/ui/sortable.js");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var grid_component_1 = require("./grid.component");
var grid_demo_1 = require("./grid-demo/grid-demo");
exports.routes = [
    { path: '', component: grid_component_1.GridComponent, pathMatch: 'full' }
];
var GridModule = (function () {
    function GridModule() {
    }
    return GridModule;
}());
GridModule.routes = exports.routes;
GridModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, router_1.RouterModule.forChild(exports.routes)],
        declarations: [grid_component_1.GridComponent, grid_demo_1.GridDemo]
    })
], GridModule);
exports.GridModule = GridModule;
//# sourceMappingURL=grid.module.js.map
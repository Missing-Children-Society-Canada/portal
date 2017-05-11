"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var d3_module_1 = require("../d3/d3.module");
require("nvd3");
var nvd3_directive_1 = require("./nvd3.directive");
var Nvd3ChartModule = (function () {
    function Nvd3ChartModule() {
    }
    return Nvd3ChartModule;
}());
Nvd3ChartModule = __decorate([
    core_1.NgModule({
        imports: [
            d3_module_1.D3Module
        ],
        declarations: [
            nvd3_directive_1.Nvd3Chart
        ],
        exports: [
            nvd3_directive_1.Nvd3Chart
        ]
    })
], Nvd3ChartModule);
exports.Nvd3ChartModule = Nvd3ChartModule;
//# sourceMappingURL=nvd3.module.js.map
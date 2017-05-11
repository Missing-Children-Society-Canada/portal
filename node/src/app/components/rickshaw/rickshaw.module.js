"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var d3_module_1 = require("../d3/d3.module");
require("rickshaw");
var rickshaw_directive_1 = require("./rickshaw.directive");
var RickshawChartModule = (function () {
    function RickshawChartModule() {
    }
    return RickshawChartModule;
}());
RickshawChartModule = __decorate([
    core_1.NgModule({
        imports: [
            d3_module_1.D3Module
        ],
        declarations: [
            rickshaw_directive_1.RickshawChart
        ],
        exports: [
            rickshaw_directive_1.RickshawChart
        ]
    })
], RickshawChartModule);
exports.RickshawChartModule = RickshawChartModule;
//# sourceMappingURL=rickshaw.module.js.map
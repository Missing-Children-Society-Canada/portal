"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("morris.js/morris.js");
var morris_directive_1 = require("./morris.directive");
var MorrisChartModule = (function () {
    function MorrisChartModule() {
    }
    return MorrisChartModule;
}());
MorrisChartModule = __decorate([
    core_1.NgModule({
        declarations: [
            morris_directive_1.MorrisChart
        ],
        exports: [
            morris_directive_1.MorrisChart
        ]
    })
], MorrisChartModule);
exports.MorrisChartModule = MorrisChartModule;
//# sourceMappingURL=morris.module.js.map
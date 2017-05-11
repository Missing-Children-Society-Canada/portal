"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("jquery-sparkline");
var sparkline_directive_1 = require("./sparkline.directive");
var JqSparklineModule = (function () {
    function JqSparklineModule() {
    }
    return JqSparklineModule;
}());
JqSparklineModule = __decorate([
    core_1.NgModule({
        declarations: [
            sparkline_directive_1.JqSparkline
        ],
        exports: [
            sparkline_directive_1.JqSparkline
        ]
    })
], JqSparklineModule);
exports.JqSparklineModule = JqSparklineModule;
//# sourceMappingURL=sparkline.module.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var animate_number_directive_ts_1 = require("./directives/animate-number.directive.ts");
var check_all_directive_1 = require("./directives/check-all.directive");
var progress_animate_directive_1 = require("./directives/progress-animate.directive");
var UtilsModule = (function () {
    function UtilsModule() {
    }
    return UtilsModule;
}());
UtilsModule = __decorate([
    core_1.NgModule({
        declarations: [
            animate_number_directive_ts_1.AnimateNumber,
            check_all_directive_1.CheckAll,
            progress_animate_directive_1.ProgressAnimate
        ],
        exports: [
            animate_number_directive_ts_1.AnimateNumber,
            check_all_directive_1.CheckAll,
            progress_animate_directive_1.ProgressAnimate
        ],
        imports: [
            common_1.CommonModule
        ]
    })
], UtilsModule);
exports.UtilsModule = UtilsModule;
//# sourceMappingURL=utils.module.js.map
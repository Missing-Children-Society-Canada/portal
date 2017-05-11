"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var scycon_directive_1 = require("./scycon.directive");
var SkyconsModule = (function () {
    function SkyconsModule() {
    }
    return SkyconsModule;
}());
SkyconsModule = __decorate([
    core_1.NgModule({
        declarations: [
            scycon_directive_1.Skycon
        ],
        exports: [
            scycon_directive_1.Skycon
        ]
    })
], SkyconsModule);
exports.SkyconsModule = SkyconsModule;
//# sourceMappingURL=skycon.module.js.map
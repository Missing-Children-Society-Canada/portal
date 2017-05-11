"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var widget_directive_1 = require("./widget.directive");
var WidgetModule = (function () {
    function WidgetModule() {
    }
    return WidgetModule;
}());
WidgetModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [widget_directive_1.Widget],
        exports: [widget_directive_1.Widget]
    })
], WidgetModule);
exports.WidgetModule = WidgetModule;
//# sourceMappingURL=widget.module.js.map
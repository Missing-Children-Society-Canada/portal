"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jQuery-Mapael/js/jquery.mapael.js");
require("jQuery-Mapael/js/maps/world_countries.js");
var core_1 = require("@angular/core");
var mapael_directive_1 = require("./mapael.directive");
var MapaelLayersMapModule = (function () {
    function MapaelLayersMapModule() {
    }
    return MapaelLayersMapModule;
}());
MapaelLayersMapModule = __decorate([
    core_1.NgModule({
        declarations: [
            mapael_directive_1.MapaelLayersMap
        ],
        exports: [
            mapael_directive_1.MapaelLayersMap
        ]
    })
], MapaelLayersMapModule);
exports.MapaelLayersMapModule = MapaelLayersMapModule;
//# sourceMappingURL=mapael.module.js.map
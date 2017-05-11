"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tile_directive_1 = require("./tile.directive");
require("metrojs/release/MetroJs.Full/MetroJs");
var LiveTileModule = (function () {
    function LiveTileModule() {
    }
    return LiveTileModule;
}());
LiveTileModule = __decorate([
    core_1.NgModule({
        declarations: [
            tile_directive_1.LiveTile
        ],
        exports: [
            tile_directive_1.LiveTile
        ]
    })
], LiveTileModule);
exports.LiveTileModule = LiveTileModule;
//# sourceMappingURL=tile.module.js.map
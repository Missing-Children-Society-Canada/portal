"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MapaelLayersMap = (function () {
    function MapaelLayersMap(el) {
        this.$el = jQuery(el.nativeElement);
    }
    MapaelLayersMap.prototype.render = function () {
        var $map = this.$el;
        $map.css('height', this.height || 394).css('margin-bottom', this.marginBottom || (-15));
        if ($map.parents('.widget')[0]) {
            $map.find('.map').css('height', parseInt($map.parents('.widget').css('height'), 10) - 40);
        }
        $map.mapael(this.data);
        if (this.zoom) {
            $map.trigger('zoom', this.zoom);
        }
    };
    MapaelLayersMap.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { _this.render(); }, 100);
    };
    return MapaelLayersMap;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], MapaelLayersMap.prototype, "height", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], MapaelLayersMap.prototype, "marginBottom", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MapaelLayersMap.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MapaelLayersMap.prototype, "zoom", void 0);
MapaelLayersMap = __decorate([
    core_1.Directive({
        selector: '[mapael-layers-map]'
    }),
    __metadata("design:paramtypes", [Object])
], MapaelLayersMap);
exports.MapaelLayersMap = MapaelLayersMap;
//# sourceMappingURL=mapael.directive.js.map
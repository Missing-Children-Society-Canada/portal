"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MapsGoogle = (function () {
    function MapsGoogle() {
        this.lat = -37.813179;
        this.lng = 144.950259;
        this.zoom = 12;
    }
    return MapsGoogle;
}());
MapsGoogle = __decorate([
    core_1.Component({
        selector: '[maps-google]',
        template: require('./maps-google.template.html'),
        styles: ['sebm-google-map { height: 100% }']
    })
], MapsGoogle);
exports.MapsGoogle = MapsGoogle;
//# sourceMappingURL=maps-google.component.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jvectormap/jquery-jvectormap.min.js");
require("jvectormap-world/jquery-jvectormap-world-mill-en.js");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var ng2_bootstrap_2 = require("ng2-bootstrap");
var core_2 = require("angular2-google-maps/core");
var maps_google_component_1 = require("./google/maps-google.component");
var maps_vector_component_1 = require("./vector/maps-vector.component");
exports.routes = [
    { path: '', redirectTo: 'google', pathMatch: 'full' },
    { path: 'google', component: maps_google_component_1.MapsGoogle },
    { path: 'vector', component: maps_vector_component_1.MapsVector }
];
var MapsModule = (function () {
    function MapsModule() {
    }
    return MapsModule;
}());
MapsModule.routes = exports.routes;
MapsModule = __decorate([
    core_1.NgModule({
        declarations: [
            // Components / Directives/ Pipes
            maps_google_component_1.MapsGoogle,
            maps_vector_component_1.MapsVector
        ],
        imports: [
            common_1.CommonModule,
            router_1.RouterModule.forChild(exports.routes),
            ng2_bootstrap_1.AlertModule.forRoot(),
            ng2_bootstrap_1.TooltipModule.forRoot(),
            ng2_bootstrap_2.ButtonsModule.forRoot(),
            ng2_bootstrap_2.DropdownModule.forRoot(),
            core_2.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyDe_oVpi9eRSN99G4o6TwVjJbFBNr58NxE'
            })
        ]
    })
], MapsModule);
exports.MapsModule = MapsModule;
//# sourceMappingURL=maps.module.js.map
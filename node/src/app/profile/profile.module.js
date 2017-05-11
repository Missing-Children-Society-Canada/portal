"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var profile_component_1 = require("./profile.component");
exports.routes = [
    { path: '', component: profile_component_1.Profile, pathMatch: 'full' }
];
var ProfileModule = (function () {
    function ProfileModule() {
    }
    return ProfileModule;
}());
ProfileModule.routes = exports.routes;
ProfileModule = __decorate([
    core_1.NgModule({
        declarations: [
            // Components / Directives/ Pipes
            profile_component_1.Profile
        ],
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            router_1.RouterModule.forChild(exports.routes),
        ]
    })
], ProfileModule);
exports.ProfileModule = ProfileModule;
//# sourceMappingURL=profile.module.js.map
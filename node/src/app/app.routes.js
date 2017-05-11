"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_component_1 = require("./error/error.component");
exports.ROUTES = [{
        path: '', redirectTo: 'app', pathMatch: 'full'
    }, {
        path: 'app', loadChildren: './layout/layout.module#LayoutModule'
    }, {
        path: 'login', loadChildren: './login/login.module#LoginModule'
    }, {
        path: 'error', component: error_component_1.ErrorComponent
    }, {
        path: '**', component: error_component_1.ErrorComponent
    }
];
//# sourceMappingURL=app.routes.js.map
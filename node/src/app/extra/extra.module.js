"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("fullcalendar/dist/fullcalendar.js");
require("jquery-ui/ui/draggable.js");
require("magnific-popup/dist/jquery.magnific-popup.min.js");
require("shufflejs/dist/shuffle.js");
require("moment/moment.js");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var ng2_bootstrap_2 = require("ng2-bootstrap");
var calendar_component_1 = require("./calendar/calendar.component");
var invoice_component_1 = require("./invoice/invoice.component");
var search_results_component_1 = require("./search-results/search-results.component");
var time_line_component_1 = require("./time-line/time-line.component");
var gallery_component_1 = require("./gallery/gallery.component");
var core_2 = require("angular2-google-maps/core");
exports.routes = [
    { path: '', redirectTo: 'calendar', pathMatch: 'full' },
    { path: 'calendar', component: calendar_component_1.Calendar },
    { path: 'invoice', component: invoice_component_1.Invoice },
    { path: 'search', component: search_results_component_1.SearchResults },
    { path: 'timeline', component: time_line_component_1.TimeLine },
    { path: 'gallery', component: gallery_component_1.Gallery }
];
var ExtraModule = (function () {
    function ExtraModule() {
    }
    return ExtraModule;
}());
ExtraModule.routes = exports.routes;
ExtraModule = __decorate([
    core_1.NgModule({
        declarations: [
            // Components / Directives/ Pipes
            calendar_component_1.Calendar,
            invoice_component_1.Invoice,
            search_results_component_1.SearchResults,
            time_line_component_1.TimeLine,
            gallery_component_1.Gallery
        ],
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            router_1.RouterModule.forChild(exports.routes),
            ng2_bootstrap_1.AlertModule.forRoot(),
            ng2_bootstrap_1.TooltipModule.forRoot(),
            ng2_bootstrap_2.ModalModule,
            ng2_bootstrap_1.ButtonsModule.forRoot(),
            ng2_bootstrap_1.DropdownModule.forRoot(),
            core_2.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyDe_oVpi9eRSN99G4o6TwVjJbFBNr58NxE'
            })
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], ExtraModule);
exports.ExtraModule = ExtraModule;
//# sourceMappingURL=extra.module.js.map
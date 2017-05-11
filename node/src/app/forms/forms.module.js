"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
// libs
/* tslint:disable */
var markdown = require('markdown').markdown;
/* tslint:enable */
global.markdown = markdown;
require("bootstrap-markdown/js/bootstrap-markdown.js");
require("bootstrap-select/dist/js/bootstrap-select.js");
require("parsleyjs");
require("bootstrap-application-wizard/src/bootstrap-wizard.js");
require("twitter-bootstrap-wizard/jquery.bootstrap.wizard.js");
require("jasny-bootstrap/docs/assets/js/vendor/holder.js");
require("jasny-bootstrap/js/fileinput.js");
require("ng2-datetime/src/vendor/bootstrap-datepicker/bootstrap-datepicker.min.js");
require("ng2-datetime/src/vendor/bootstrap-timepicker/bootstrap-timepicker.min.js");
require("bootstrap-colorpicker");
require("bootstrap-slider/dist/bootstrap-slider.js");
require("jasny-bootstrap/docs/assets/js/vendor/holder.js");
require("jasny-bootstrap/js/fileinput.js");
require("jasny-bootstrap/js/inputmask.js");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var angular2_autosize_1 = require("angular2-autosize");
var ng2_select2_1 = require("ng2-select2");
var widget_module_1 = require("../layout/widget/widget.module");
var angular2_text_mask_1 = require("angular2-text-mask");
/* tslint:disable */
var wizard_module_1 = require("../components/wizard/wizard.module");
var bootstrap_application_wizard_directive_1 = require("./wizard/bootstrap-application-wizard/bootstrap-application-wizard.directive");
var dropzone_directive_1 = require("../components/dropzone/dropzone.directive");
var ng2_datetime_1 = require("ng2-datetime/ng2-datetime");
/* tslint:enable */
var elements_component_1 = require("./elements/elements.component");
var validation_component_1 = require("./validation/validation.component");
var wizard_component_1 = require("./wizard/wizard.component");
exports.routes = [
    { path: '', redirectTo: 'elements', pathMatch: 'full' },
    { path: 'elements', component: elements_component_1.Elements },
    { path: 'validation', component: validation_component_1.Validation },
    { path: 'wizard', component: wizard_component_1.Wizard }
];
var FormModule = (function () {
    function FormModule() {
    }
    return FormModule;
}());
FormModule.routes = exports.routes;
FormModule = __decorate([
    core_1.NgModule({
        declarations: [
            angular2_autosize_1.Autosize,
            elements_component_1.Elements,
            validation_component_1.Validation,
            bootstrap_application_wizard_directive_1.BootstrapApplicationWizard,
            wizard_component_1.Wizard,
            dropzone_directive_1.DropzoneDemo
        ],
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            angular2_text_mask_1.TextMaskModule,
            ng2_bootstrap_1.TooltipModule.forRoot(),
            ng2_bootstrap_1.AlertModule.forRoot(),
            ng2_bootstrap_1.DropdownModule.forRoot(),
            widget_module_1.WidgetModule,
            wizard_module_1.BootstrapWizardModule,
            ng2_datetime_1.NKDatetimeModule,
            ng2_select2_1.Select2Module,
            router_1.RouterModule.forChild(exports.routes),
        ]
    })
], FormModule);
exports.FormModule = FormModule;
//# sourceMappingURL=forms.module.js.map
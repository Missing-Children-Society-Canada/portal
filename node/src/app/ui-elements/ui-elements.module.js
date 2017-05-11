"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("messenger/build/js/messenger.js");
require("jquery-ui/ui/sortable.js");
require("jquery.nestable/jquery.nestable.js");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var ng2_bootstrap_2 = require("ng2-bootstrap");
var ng2_bootstrap_3 = require("ng2-bootstrap");
var ng2_bootstrap_4 = require("ng2-bootstrap");
var components_component_1 = require("./components/components.component");
var widget_module_1 = require("../layout/widget/widget.module");
var buttons_component_1 = require("./buttons/buttons.component");
var notifications_component_1 = require("./notifications/notifications.component");
var icons_component_1 = require("./icons/icons.component");
var tabs_accordion_component_1 = require("./tabs-accordion/tabs-accordion.component");
var list_groups_component_1 = require("./list-groups/list-groups.component");
var messenger_directive_1 = require("./notifications/messenger/messenger.directive");
exports.routes = [
    { path: '', redirectTo: 'components', pathMatch: 'full' },
    { path: 'components', component: components_component_1.Components },
    { path: 'buttons', component: buttons_component_1.Buttons },
    { path: 'notifications', component: notifications_component_1.Notifications },
    { path: 'icons', component: icons_component_1.Icons },
    { path: 'tabs-accordion', component: tabs_accordion_component_1.TabsAccordion },
    { path: 'list-groups', component: list_groups_component_1.ListGroups },
];
var UiElementsModule = (function () {
    function UiElementsModule() {
    }
    return UiElementsModule;
}());
UiElementsModule.routes = exports.routes;
UiElementsModule = __decorate([
    core_1.NgModule({
        declarations: [
            // Components / Directives/ Pipes
            components_component_1.Components,
            buttons_component_1.Buttons,
            notifications_component_1.Notifications,
            messenger_directive_1.MessengerDemo,
            icons_component_1.Icons,
            tabs_accordion_component_1.TabsAccordion,
            list_groups_component_1.ListGroups
        ],
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            router_1.RouterModule.forChild(exports.routes),
            ng2_bootstrap_1.AlertModule.forRoot(),
            widget_module_1.WidgetModule,
            ng2_bootstrap_1.TooltipModule.forRoot(),
            ng2_bootstrap_4.ModalModule,
            ng2_bootstrap_2.ButtonsModule.forRoot(),
            ng2_bootstrap_2.DropdownModule.forRoot(),
            ng2_bootstrap_3.TabsModule.forRoot(),
            ng2_bootstrap_3.AccordionModule.forRoot()
        ]
    })
], UiElementsModule);
exports.UiElementsModule = UiElementsModule;
//# sourceMappingURL=ui-elements.module.js.map
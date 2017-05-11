"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jquery-slimscroll");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var layout_routes_1 = require("./layout.routes");
var layout_component_1 = require("./layout.component");
var sidebar_component_1 = require("./sidebar/sidebar.component");
var navbar_component_1 = require("./navbar/navbar.component");
var chat_sidebar_component_1 = require("./chat-sidebar/chat-sidebar.component");
var chat_message_component_1 = require("./chat-sidebar/chat-message/chat-message.component");
var search_pipe_1 = require("./pipes/search.pipe");
var notifications_load_directive_1 = require("./notifications/notifications-load.directive");
var notifications_component_1 = require("./notifications/notifications.component");
var LayoutModule = (function () {
    function LayoutModule() {
    }
    return LayoutModule;
}());
LayoutModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            ng2_bootstrap_1.TooltipModule.forRoot(),
            layout_routes_1.ROUTES,
            forms_1.FormsModule
        ],
        declarations: [
            layout_component_1.Layout,
            sidebar_component_1.Sidebar,
            navbar_component_1.Navbar,
            chat_sidebar_component_1.ChatSidebar,
            search_pipe_1.SearchPipe,
            notifications_component_1.Notifications,
            notifications_load_directive_1.NotificationLoad,
            chat_message_component_1.ChatMessage
        ]
    })
], LayoutModule);
exports.LayoutModule = LayoutModule;
//# sourceMappingURL=layout.module.js.map
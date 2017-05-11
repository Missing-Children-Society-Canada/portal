"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var inbox_component_1 = require("./inbox.component");
var mail_list_component_1 = require("./mail-list/mail-list.component");
var mail_form_component_1 = require("./mail-form/mail-form.component");
var mail_detail_component_1 = require("./mail-detail/mail-detail.component");
var search_pipe_1 = require("./mail-list/pipes/search-pipe");
var folders_pipe_1 = require("./mail-list/pipes/folders-pipe");
exports.routes = [
    { path: '', component: inbox_component_1.Inbox, pathMatch: 'full' }
];
var InboxModule = (function () {
    function InboxModule() {
    }
    return InboxModule;
}());
InboxModule.routes = exports.routes;
InboxModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule,
            common_1.CommonModule,
            router_1.RouterModule.forChild(exports.routes)
        ],
        declarations: [
            inbox_component_1.Inbox,
            mail_list_component_1.MailList,
            mail_form_component_1.MailForm,
            mail_detail_component_1.MailDetail,
            folders_pipe_1.FoldersPipe,
            search_pipe_1.SearchPipe
        ]
    })
], InboxModule);
exports.InboxModule = InboxModule;
//# sourceMappingURL=inbox.module.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FOLDERS = [
    { 'name': 'Inbox', 'order': 0, 'id': 1, 'unread': 2 },
    { 'name': 'Sent Mail', 'order': 6, 'id': 2, 'unread': 0 },
    { 'name': 'Draft', 'order': 7, 'id': 3, 'unread': 3 },
    { 'name': 'Trash', 'order': 8, 'id': 4, 'unread': 0 }
];
var FoldersPipe = (function () {
    function FoldersPipe() {
        this.folders = FOLDERS;
    }
    FoldersPipe.prototype.transform = function (value, args) {
        var _this = this;
        var folderName = args;
        if (value) {
            return value.filter(function (conversation) {
                /* tslint:disable */
                if (folderName == 'Starred') {
                    return conversation.starred;
                }
                else {
                    var folder = _this.folders.filter(function (folder) { return folder.name == folderName; });
                    return folder[0].id == conversation.folderId;
                    /* tslint:enable */
                }
            });
        }
    };
    return FoldersPipe;
}());
FoldersPipe = __decorate([
    core_1.Pipe({
        name: 'FoldersPipe'
    })
], FoldersPipe);
exports.FoldersPipe = FoldersPipe;
//# sourceMappingURL=folders-pipe.js.map
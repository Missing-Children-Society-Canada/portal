"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, args) {
        var searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(function (mail) {
                if (mail.sender) {
                    return mail.sender.search(searchText) !== -1;
                }
                if (mail.subject) {
                    return mail.subject.search(searchText) !== -1;
                }
            });
        }
    };
    return SearchPipe;
}());
SearchPipe = __decorate([
    core_1.Pipe({
        name: 'SearchPipe'
    })
], SearchPipe);
exports.SearchPipe = SearchPipe;
//# sourceMappingURL=search-pipe.js.map
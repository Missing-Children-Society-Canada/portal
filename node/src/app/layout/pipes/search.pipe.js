"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, args) {
        var searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(function (conversation) {
                if (conversation.name) {
                    return conversation.name.search(searchText) !== -1 ||
                        conversation.lastMessage.search(searchText) !== -1;
                }
                else {
                    if (conversation.text) {
                        return conversation.text.search(searchText) !== -1;
                    }
                }
            });
        }
    };
    return SearchPipe;
}());
SearchPipe = __decorate([
    core_1.Pipe({
        name: 'SearchPipe',
        pure: false
    })
], SearchPipe);
exports.SearchPipe = SearchPipe;
//# sourceMappingURL=search.pipe.js.map
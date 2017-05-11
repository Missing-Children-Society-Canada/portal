"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ListGroups = (function () {
    function ListGroups() {
        this.sortOptions = {
            placeholder: 'list-group-item list-group-item-placeholder',
            forcePlaceholderSize: true
        };
        this.nest1Options = { group: 1 };
        this.nest2Options = { group: 1 };
    }
    ListGroups.prototype.ngOnInit = function () {
        jQuery('.list-group-sortable').sortable(this.sortOptions);
        jQuery('#nestable1').nestable(this.nest1Options);
        jQuery('#nestable2').nestable(this.nest2Options);
    };
    return ListGroups;
}());
ListGroups = __decorate([
    core_1.Component({
        selector: '[ui-list-groups]',
        template: require('./list-groups.template.html'),
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [require('./list-groups.style.scss')]
    })
], ListGroups);
exports.ListGroups = ListGroups;
//# sourceMappingURL=list-groups.component.js.map
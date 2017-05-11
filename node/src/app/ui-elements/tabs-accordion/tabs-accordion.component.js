"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TabsAccordion = (function () {
    function TabsAccordion() {
    }
    TabsAccordion.prototype.ngOnInit = function () {
        jQuery('.nav-tabs').on('shown.bs.tab', 'a', function (e) {
            if (e.relatedTarget) {
                jQuery(e.relatedTarget).removeClass('active');
            }
        });
    };
    return TabsAccordion;
}());
TabsAccordion = __decorate([
    core_1.Component({
        selector: '[ui-tabs-accordion]',
        template: require('./tabs-accordion.template.html')
    })
], TabsAccordion);
exports.TabsAccordion = TabsAccordion;
//# sourceMappingURL=tabs-accordion.component.js.map
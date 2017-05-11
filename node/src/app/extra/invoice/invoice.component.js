"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Invoice = (function () {
    function Invoice() {
    }
    Invoice.prototype.print = function () {
        window.print();
    };
    ;
    return Invoice;
}());
Invoice = __decorate([
    core_1.Component({
        selector: '[extra-invoice]',
        template: require('./invoice.template.html'),
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [require('./invoice.style.scss')]
    })
], Invoice);
exports.Invoice = Invoice;
//# sourceMappingURL=invoice.component.js.map
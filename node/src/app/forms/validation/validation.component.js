"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Validation = (function () {
    function Validation() {
    }
    Validation.prototype.ngOnInit = function () {
        jQuery('.parsleyjs').parsley();
    };
    return Validation;
}());
Validation = __decorate([
    core_1.Component({
        selector: '[forms-validation]',
        templateUrl: './validation.template.html',
        encapsulation: core_1.ViewEncapsulation.None,
        styleUrls: ['./validation.style.scss']
    })
], Validation);
exports.Validation = Validation;
//# sourceMappingURL=validation.component.js.map
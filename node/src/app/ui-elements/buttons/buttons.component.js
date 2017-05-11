"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Buttons = (function () {
    function Buttons() {
        this.checkboxModel = { left: false, middle: true, right: false };
        this.checkbox2Model = { left: false, middle: false, right: false };
        this.radioModel = 'Middle';
        this.radio2Model = 'Left';
    }
    return Buttons;
}());
Buttons = __decorate([
    core_1.Component({
        selector: '[buttons]',
        templateUrl: './buttons.template.html',
        styleUrls: ['./buttons.style.scss']
    })
], Buttons);
exports.Buttons = Buttons;
//# sourceMappingURL=buttons.component.js.map
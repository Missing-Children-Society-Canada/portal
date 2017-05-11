"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Components = (function () {
    /* tslint:disable */
    function Components() {
        this.alerts = [
            {
                type: 'success',
                msg: '<span class="fw-semi-bold">Success:</span> You successfully read this important alert message.'
            },
            {
                type: 'info',
                msg: '<span class="fw-semi-bold">Info:</span> This alert needs your attention, but it\'s not super important.'
            },
            {
                type: 'warning',
                msg: '<span class="fw-semi-bold">Warning:</span> Best check yo self, you\'re not looking too good.'
            },
            {
                type: 'danger',
                msg: '<span class="fw-semi-bold">Danger:</span> Change this and that and try again.  ' +
                    '<a class="btn btn-default btn-xs float-right mr" href="#">Ignore</a>  ' +
                    '<a class="btn btn-danger btn-xs float-right mr-xs" href="#">Take this action</a>'
            }
        ];
    }
    /* tslint:enable */
    Components.prototype.addAlert = function () {
        this.alerts.push({ type: 'warning', msg: 'Another alert!' });
    };
    ;
    Components.prototype.closeAlert = function (index) {
        this.alerts.splice(index, 1);
    };
    ;
    Components.prototype.ngOnInit = function () {
        jQuery('#popover1, #popover2').popover();
    };
    return Components;
}());
Components = __decorate([
    core_1.Component({
        selector: '[components]',
        templateUrl: './components.template.html',
        styleUrls: ['./components.style.scss']
    }),
    __metadata("design:paramtypes", [])
], Components);
exports.Components = Components;
//# sourceMappingURL=components.component.js.map
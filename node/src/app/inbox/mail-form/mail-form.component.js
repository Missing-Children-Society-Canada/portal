"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var core_3 = require("@angular/core");
var MailForm = (function () {
    function MailForm() {
        this.backToMailList = new core_3.EventEmitter();
        this.sender = '';
        this.subject = '';
        this.body = 'There are no implementations' +
            ' of Wysiwyg editors in Angular 2 version yet.' +
            ' So we hope it will appear soon.';
    }
    MailForm.prototype.onToBack = function () {
        console.log('qwerty');
        this.backToMailList.emit('');
    };
    MailForm.prototype.ngOnInit = function () {
        if (this.message) {
            this.sender = this.message.sender;
            this.subject = 'Re: ' + this.message.subject;
            var span = document.createElement('span');
            span.innerHTML = this.message.body;
            this.body = span.innerText;
        }
    };
    return MailForm;
}());
__decorate([
    core_2.Output(),
    __metadata("design:type", Object)
], MailForm.prototype, "backToMailList", void 0);
__decorate([
    core_2.Input(),
    __metadata("design:type", Object)
], MailForm.prototype, "message", void 0);
MailForm = __decorate([
    core_1.Component({
        selector: '[mail-form]',
        templateUrl: './mail-form.template.html',
    })
], MailForm);
exports.MailForm = MailForm;
//# sourceMappingURL=mail-form.component.js.map
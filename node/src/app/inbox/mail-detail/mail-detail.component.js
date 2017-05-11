"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MailDetail = (function () {
    function MailDetail() {
        this.backToMailList = new core_1.EventEmitter();
        this.replyMessage = new core_1.EventEmitter();
        this.math = Math;
    }
    MailDetail.prototype.onToBack = function () {
        this.backToMailList.emit('');
    };
    MailDetail.prototype.goToReply = function (mail) {
        this.replyMessage.emit(mail);
    };
    MailDetail.prototype.Math = function () {
        return Math.random();
    };
    return MailDetail;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MailDetail.prototype, "mail", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], MailDetail.prototype, "backToMailList", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], MailDetail.prototype, "replyMessage", void 0);
MailDetail = __decorate([
    core_1.Component({
        selector: '[mail-detail]',
        templateUrl: './mail-detail.template.html',
        styleUrls: ['./mail-detail.style.scss']
    })
], MailDetail);
exports.MailDetail = MailDetail;
//# sourceMappingURL=mail-detail.component.js.map
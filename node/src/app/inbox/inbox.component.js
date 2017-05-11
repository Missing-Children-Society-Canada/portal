"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Inbox = (function () {
    function Inbox(el) {
        this.mailListShow = true;
        this.mailFormShow = false;
        this.mailDetailShow = false;
        this.currentFolderName = 'Inbox';
        this.$el = jQuery(el.nativeElement);
        this.initMailboxAppDemo(this.$el);
    }
    Inbox.prototype.handleComposeBtn = function (event) {
        this.repliedMessage = event || undefined;
        this.changeEmailComponents('mailForm');
    };
    Inbox.prototype.onReplyMail = function (mail) {
        this.currentMail = mail;
        this.changeEmailComponents('mailDetail');
    };
    Inbox.prototype.changeEmailComponents = function (componentName) {
        var mailState = {
            'mailList': function (that) {
                that.mailFormShow = that.mailDetailShow = false;
                that.mailListShow = true;
            },
            'mailForm': function (that) {
                that.mailListShow = that.mailDetailShow = false;
                that.mailFormShow = true;
            },
            'mailDetail': function (that) {
                that.mailListShow = that.mailFormShow = false;
                that.mailDetailShow = true;
            },
        };
        mailState[componentName](this);
    };
    Inbox.prototype.setFolderName = function (folderName) {
        this.currentFolderName = folderName;
        if (!this.mailListShow) {
            this.changeEmailComponents('mailList');
        }
    };
    /* tslint:disable */
    Inbox.prototype.initMailboxAppDemo = function ($el) {
        var showAlert = function () {
            $el.find('#app-alert')
                .removeClass('hide')
                .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                jQuery(this).removeClass('animated bounceInLeft');
            });
        };
        setTimeout(function () { return showAlert(); }, 3000);
    };
    /* tslint:enable */
    Inbox.prototype.changeActiveItem = function () {
        this.$el.find('.nav a').on('click', function () {
            jQuery('.nav').find('.active').removeClass('active');
            jQuery(this).parent().addClass('active');
        });
    };
    Inbox.prototype.ngOnInit = function () {
        this.changeActiveItem();
    };
    return Inbox;
}());
Inbox = __decorate([
    core_1.Component({
        selector: 'inbox',
        templateUrl: './inbox.template.html',
        styleUrls: ['./inbox.style.scss']
    }),
    __metadata("design:paramtypes", [Object])
], Inbox);
exports.Inbox = Inbox;
//# sourceMappingURL=inbox.component.js.map
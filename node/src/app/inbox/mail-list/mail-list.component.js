"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var core_3 = require("@angular/core");
var MAILS = [
    { id: 1,
        'sender': 'Philip Horbacheuski',
        'senderMail': 'philip.horbacheuski@example.com',
        'subject': 'Hi, Welcome to Google Mail',
        'date': '18:31',
        'paperclip': true,
        'attachment': true,
        'unread': true,
        'starred': true,
        'folderId': 1,
        'selected': false,
        'attachments': ['assets/img/pictures/1.jpg', 'assets/img/pictures/2.jpg'],
        'body': '<p>Projecting surrounded literature ' +
            'yet delightful alteration but bed men. Open are' +
            ' from long why cold. If must snug by upon sang ' +
            'loud left. As me do preference entreaties compliment ' +
            'motionless ye literature. Day behaviour explained law' +
            ' remainder.</p>    <p><strong>On then sake' +
            ' home</strong> is am leaf. Of suspicion do' +
            ' departure at extremely he believing. Do know ' +
            'said mind do rent they oh hope of. General enquire' +
            ' picture letters garrets on offices of no on.</p>' +
            ' <p>All the best,</p> <p>Vitaut the Great, CEO,' +
            ' <br>Fooby Inc.</p>' },
    { 'id': 2,
        'sender': 'StackExchange',
        'subject': 'New Python questions for this week!',
        'date': 'Aug 14',
        'paperclip': true,
        'unread': true,
        'attachment': true,
        'timestamp': 1376508566000,
        'folderId': 1,
        'selected': false,
        'attachments': ['assets/img/pictures/3.jpg'],
        'body': '<h1>THIS IS HTML!!!!</h1>' },
    { 'id': 3,
        'sender': 'notifications@facebook.com',
        'senderMail': 'notifications@facebook.com',
        'subject': 'Someone just commented on your photo!',
        'date': 'Aug 7',
        'selected': false,
        'unread': false,
        'timestamp': 1375877213000,
        'folderId': 1 },
    { 'id': 4,
        'sender': 'Twitter',
        'subject': '@hackernews is now following you on Twitter',
        'date': 'Jul 31',
        'starred': true,
        'unread': true,
        'selected': false,
        'timestamp': 1375261974000,
        'folderId': 1 },
    { 'id': 5,
        'sender': 'LinkedIn',
        'subject': 'Jobs you may be interested in',
        'date': 'May 12',
        'selected': false,
        'unread': false,
        'timestamp': 1373634231000,
        'folderId': 1 },
    { 'id': 6,
        'sender': 'Naevius Victorsson',
        'subject': 'Front no party young abode state up',
        'date': 'May 1',
        'starred': true,
        'unread': false,
        'selected': false,
        'timestamp': 1373516566000,
        'folderId': 1 },
    { 'id': 7,
        'sender': 'Nikola Foley',
        'subject': 'Quiet led own cause three him',
        'date': 'Apr 23',
        'paperclip': true,
        'attachment': true,
        'attachments': ['assets/img/pictures/5.jpg', 'assets/img/pictures/4.jpg'],
        'unread': false,
        'selected': false,
        'timestamp': 1374508566000,
        'folderId': 1 },
    { 'id': 8,
        'sender': 'Ernst Hardy',
        'subject': 'Raising say express had chiefly detract demands she',
        'date': 'Apr 20',
        'selected': false,
        'unread': false,
        'timestamp': 1373877213000,
        'folderId': 1 },
    { 'id': 9,
        'sender': 'Lubbert Fuller',
        'subject': 'Civility vicinity graceful is it at',
        'date': 'Jul 3',
        'starred': true,
        'selected': false,
        'unread': false,
        'timestamp': 1376516566000,
        'folderId': 2 },
    { 'id': 10,
        'sender': 'Tatenda Guerra',
        'subject': 'Improve up at to on mention perhaps raising',
        'date': 'Jul 13',
        'attachment': true,
        'attachments': ['assets/img/pictures/6.jpg'],
        'selected': false,
        'unread': false,
        'timestamp': 1376508566000,
        'folderId': 3 },
    { 'id': 12,
        'sender': 'Ladislao Roche',
        'subject': 'Way building not get formerly her peculiar',
        'date': 'Jul 18',
        'selected': false,
        'unread': true,
        'timestamp': 1375877213000,
        'folderId': 2 },
    { 'id': 13,
        'sender': 'Areli.Tanzi@gmail.com',
        'senderMail': 'Areli.Tanzi@gmail.com',
        'subject': 'Up uncommonly prosperous sentiments simplicity',
        'date': 'Jul 24',
        'starred': true,
        'attachment': true,
        'attachments': ['assets/img/pictures/9.jpg'],
        'selected': false,
        'unread': false,
        'timestamp': 1375261974000,
        'folderId': 2 },
    { 'id': 14,
        'sender': 'Oluwaseyi Tremble',
        'subject': 'Reasonable appearance companions oh',
        'date': 'Jul 28',
        'selected': false,
        'unread': false,
        'timestamp': 1373634231000,
        'folderId': 3 }
];
var MailList = (function () {
    function MailList(el) {
        this.replyMail = new core_3.EventEmitter();
        this.mails = MAILS;
        this.$el = jQuery(el.nativeElement);
        this.$toggleAll = jQuery();
    }
    MailList.prototype.openMail = function (mail) {
        mail.unread = false;
        this.replyMail.emit(mail);
    };
    MailList.prototype.selectMail = function (mail) {
        mail.selected = mail.selected ? false : true;
        this.checkToggleAll();
    };
    MailList.prototype.selectAll = function () {
        var checked = this.$toggleAll.prop('checked');
        this.toggleAll(checked);
    };
    MailList.prototype.checkToggleAll = function () {
        var checked = true;
        // TODO select read (all)
        this.$el.find('.toggle-one').each(function (i, el) {
            if (!jQuery(el).prop('checked') && checked) {
                checked = false;
            }
        });
        this.$toggleAll.prop('checked', checked);
    };
    MailList.prototype.toggleAll = function (checked) {
        for (var _i = 0, _a = this.mails; _i < _a.length; _i++) {
            var mail = _a[_i];
            mail.selected = checked;
        }
        this.$toggleAll.prop('checked', checked);
    };
    MailList.prototype.selectRead = function () {
        this.toggleAll(false);
        this.mails.filter(function (mail) { return !mail.unread; }).forEach(function (mail) { return mail.selected = true; });
        this.checkToggleAll();
    };
    MailList.prototype.selectUnread = function () {
        this.toggleAll(false);
        this.mails.filter(function (mail) { return mail.unread; }).forEach(function (mail) { return mail.selected = true; });
        this.checkToggleAll();
    };
    MailList.prototype.markSelectedAsRead = function () {
        this.mails.filter(function (mail) { return mail.selected; }).forEach(function (mail) { return mail.unread = false; });
    };
    MailList.prototype.markSelectedAsUnread = function () {
        this.mails.filter(function (mail) { return mail.selected; }).forEach(function (mail) { return mail.unread = true; });
    };
    MailList.prototype.deleteEmails = function () {
        var mails = [];
        this.mails.forEach(function (mail) {
            if (!mail.selected) {
                mails.push(mail);
            }
        });
        this.mails = mails;
    };
    MailList.prototype.ngOnInit = function () {
        this.$toggleAll = this.$el.find('#toggle-all');
    };
    MailList.prototype.ngOnChanges = function (event) {
        if ('folderName' in event) {
            if (!(event.folderName.previousValue instanceof Object)) {
                this.toggleAll(false);
            }
        }
    };
    MailList.prototype.changeStarStatus = function (mail) {
        mail.starred = !mail.starred;
    };
    return MailList;
}());
__decorate([
    core_2.Output(),
    __metadata("design:type", Object)
], MailList.prototype, "replyMail", void 0);
__decorate([
    core_2.Input(),
    __metadata("design:type", Object)
], MailList.prototype, "folderName", void 0);
MailList = __decorate([
    core_1.Component({
        selector: '[mail-list]',
        templateUrl: './mail-list.template.html',
        styles: [require('./mail-list.style.scss')]
    }),
    __metadata("design:paramtypes", [Object])
], MailList);
exports.MailList = MailList;
//# sourceMappingURL=mail-list.component.js.map
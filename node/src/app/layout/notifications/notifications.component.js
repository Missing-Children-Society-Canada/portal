"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_config_1 = require("../../app.config");
var Notifications = (function () {
    function Notifications(el, config) {
        this.$el = jQuery(el.nativeElement);
        this.config = config;
    }
    Notifications.prototype.moveNotificationsDropdown = function () {
        jQuery('.sidebar-status .dropdown-toggle').after(jQuery('[notifications]').detach());
    };
    Notifications.prototype.moveBackNotificationsDropdown = function () {
        jQuery('#notifications-dropdown-toggle').after(jQuery('[notifications]').detach());
    };
    Notifications.prototype.ngOnInit = function () {
        this.config.onScreenSize(['sm', 'xs'], this.moveNotificationsDropdown);
        this.config.onScreenSize(['sm', 'xs'], this.moveBackNotificationsDropdown, false);
        if (this.config.isScreen('sm')) {
            this.moveNotificationsDropdown();
        }
        if (this.config.isScreen('xs')) {
            this.moveNotificationsDropdown();
        }
        jQuery('.sidebar-status').on('show.bs.dropdown', function () {
            jQuery('#sidebar').css('z-index', 2);
        }).on('hidden.bs.dropdown', function () {
            jQuery('#sidebar').css('z-index', '');
        });
        jQuery(document).on('change', '[data-toggle="buttons"] > label', function ($event) {
            var $input = jQuery($event.target).find('input');
            $input.trigger('change');
        });
    };
    return Notifications;
}());
Notifications = __decorate([
    core_1.Component({
        selector: '[notifications]',
        templateUrl: './notifications.template.html',
        styleUrls: ['./notifications.style.scss']
    }),
    __metadata("design:paramtypes", [Object, app_config_1.AppConfig])
], Notifications);
exports.Notifications = Notifications;
//# sourceMappingURL=notifications.component.js.map
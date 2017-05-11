"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_config_1 = require("../../app.config");
var Navbar = (function () {
    function Navbar(el, config, router) {
        this.toggleSidebarEvent = new core_1.EventEmitter();
        this.toggleChatEvent = new core_1.EventEmitter();
        this.$el = jQuery(el.nativeElement);
        this.config = config.getConfig();
        this.router = router;
    }
    Navbar.prototype.toggleSidebar = function (state) {
        this.toggleSidebarEvent.emit(state);
    };
    Navbar.prototype.toggleChat = function () {
        this.toggleChatEvent.emit(null);
    };
    Navbar.prototype.onDashboardSearch = function (f) {
        this.router.navigate(['/app', 'extra', 'search'], { queryParams: { search: f.value.search } });
    };
    Navbar.prototype.ngOnInit = function () {
        setTimeout(function () {
            var $chatNotification = jQuery('#chat-notification');
            $chatNotification.removeClass('hide').addClass('animated fadeIn')
                .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                $chatNotification.removeClass('animated fadeIn');
                setTimeout(function () {
                    $chatNotification.addClass('animated fadeOut')
                        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd' +
                        ' oanimationend animationend', function () {
                        $chatNotification.addClass('hide');
                    });
                }, 8000);
            });
            $chatNotification.siblings('#toggle-chat')
                .append('<i class="chat-notification-sing animated bounceIn"></i>');
        }, 4000);
        this.$el.find('.input-group-addon + .form-control').on('blur focus', function (e) {
            jQuery(this).parents('.input-group')[e.type === 'focus' ? 'addClass' : 'removeClass']('focus');
        });
    };
    return Navbar;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], Navbar.prototype, "toggleSidebarEvent", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], Navbar.prototype, "toggleChatEvent", void 0);
Navbar = __decorate([
    core_1.Component({
        selector: '[navbar]',
        templateUrl: './navbar.template.html'
    }),
    __metadata("design:paramtypes", [Object, app_config_1.AppConfig, Object])
], Navbar);
exports.Navbar = Navbar;
//# sourceMappingURL=navbar.component.js.map
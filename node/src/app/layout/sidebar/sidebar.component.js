"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var app_config_1 = require("../../app.config");
var Sidebar = (function () {
    function Sidebar(config, el, router, location) {
        this.$el = jQuery(el.nativeElement);
        this.config = config.getConfig();
        this.router = router;
        this.location = location;
    }
    Sidebar.prototype.initSidebarScroll = function () {
        var $sidebarContent = this.$el.find('.js-sidebar-content');
        if (this.$el.find('.slimScrollDiv').length !== 0) {
            $sidebarContent.slimscroll({
                destroy: true
            });
        }
        $sidebarContent.slimscroll({
            height: window.innerHeight,
            size: '4px'
        });
    };
    Sidebar.prototype.changeActiveNavigationItem = function (location) {
        var $newActiveLink = this.$el.find('a[href="#' + location.path().split('?')[0] + '"]');
        // collapse .collapse only if new and old active links belong to different .collapse
        if (!$newActiveLink.is('.active > .collapse > li > a')) {
            this.$el.find('.active .active').closest('.collapse').collapse('hide');
        }
        this.$el.find('.sidebar-nav .active').removeClass('active');
        $newActiveLink.closest('li').addClass('active')
            .parents('li').addClass('active');
        // uncollapse parent
        $newActiveLink.closest('.collapse').addClass('in').css('height', '')
            .siblings('a[data-toggle=collapse]').removeClass('collapsed');
    };
    Sidebar.prototype.ngAfterViewInit = function () {
        this.changeActiveNavigationItem(this.location);
    };
    Sidebar.prototype.ngOnInit = function () {
        var _this = this;
        jQuery(window).on('sn:resize', this.initSidebarScroll.bind(this));
        this.initSidebarScroll();
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                _this.changeActiveNavigationItem(_this.location);
            }
        });
    };
    return Sidebar;
}());
Sidebar = __decorate([
    core_1.Component({
        selector: '[sidebar]',
        templateUrl: './sidebar.template.html'
    }),
    __metadata("design:paramtypes", [app_config_1.AppConfig, Object, Object, Object])
], Sidebar);
exports.Sidebar = Sidebar;
//# sourceMappingURL=sidebar.component.js.map
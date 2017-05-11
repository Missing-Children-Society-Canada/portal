"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_config_1 = require("../app.config");
var Layout = (function () {
    function Layout(config, el, router, renderer, ngZone) {
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.chatOpened = false;
        Raphael.prototype.safari = function () { return; };
        this.el = el;
        this.config = config.getConfig();
        this.configFn = config;
        this.router = router;
    }
    Layout.prototype.toggleSidebarListener = function (state) {
        var toggleNavigation = state === 'static'
            ? this.toggleNavigationState
            : this.toggleNavigationCollapseState;
        toggleNavigation.apply(this);
        localStorage.setItem('nav-static', this.config.state['nav-static']);
    };
    Layout.prototype.toggleChatListener = function () {
        jQuery(this.el.nativeElement).find('.chat-notification-sing').remove();
        this.chatOpened = !this.chatOpened;
        setTimeout(function () {
            // demo: add class & badge to indicate incoming messages from contact
            // .js-notification-added ensures notification added only once
            jQuery('.chat-sidebar-user-group:first-of-type ' +
                '.list-group-item:first-child:not(.js-notification-added)')
                .addClass('active js-notification-added')
                .find('.fa-circle')
                .before('<span class="badge badge-danger badge-pill ' +
                'flex-last animated bounceInDown">3</span>');
        }, 1000);
    };
    Layout.prototype.toggleNavigationState = function () {
        this.config.state['nav-static'] = !this.config.state['nav-static'];
        if (!this.config.state['nav-static']) {
            this.collapseNavigation();
        }
    };
    Layout.prototype.expandNavigation = function () {
        // this method only makes sense for non-static navigation state
        if (this.isNavigationStatic()
            && (this.configFn.isScreen('lg') || this.configFn.isScreen('xl'))) {
            return;
        }
        jQuery('layout').removeClass('nav-collapsed');
        this.$sidebar.find('.active .active').closest('.collapse').collapse('show')
            .siblings('[data-toggle=collapse]').removeClass('collapsed');
    };
    Layout.prototype.collapseNavigation = function () {
        // this method only makes sense for non-static navigation state
        if (this.isNavigationStatic()
            && (this.configFn.isScreen('lg') || this.configFn.isScreen('xl'))) {
            return;
        }
        jQuery('layout').addClass('nav-collapsed');
        this.$sidebar.find('.collapse.in').collapse('hide')
            .siblings('[data-toggle=collapse]').addClass('collapsed');
    };
    /**
     * Check and set navigation collapse according to screen size and navigation state
     */
    Layout.prototype.checkNavigationState = function () {
        var _this = this;
        if (this.isNavigationStatic()) {
            if (this.configFn.isScreen('sm')
                || this.configFn.isScreen('xs') || this.configFn.isScreen('md')) {
                this.collapseNavigation();
            }
        }
        else {
            if (this.configFn.isScreen('lg') || this.configFn.isScreen('xl')) {
                setTimeout(function () {
                    _this.collapseNavigation();
                }, this.config.settings.navCollapseTimeout);
            }
            else {
                this.collapseNavigation();
            }
        }
    };
    Layout.prototype.isNavigationStatic = function () {
        return this.config.state['nav-static'] === true;
    };
    Layout.prototype.toggleNavigationCollapseState = function () {
        if (jQuery('layout').is('.nav-collapsed')) {
            this.expandNavigation();
        }
        else {
            this.collapseNavigation();
        }
    };
    Layout.prototype._sidebarMouseEnter = function () {
        if (this.configFn.isScreen('lg') || this.configFn.isScreen('xl')) {
            this.expandNavigation();
        }
    };
    Layout.prototype._sidebarMouseLeave = function () {
        if (this.configFn.isScreen('lg') || this.configFn.isScreen('xl')) {
            this.collapseNavigation();
        }
    };
    Layout.prototype.enableSwipeCollapsing = function () {
        var swipe = new Hammer(document.getElementById('content-wrap'));
        var d = this;
        swipe.on('swipeleft', function () {
            setTimeout(function () {
                if (d.configFn.isScreen('md')) {
                    return;
                }
                if (!jQuery('layout').is('.nav-collapsed')) {
                    d.collapseNavigation();
                }
            });
        });
        swipe.on('swiperight', function () {
            if (d.configFn.isScreen('md')) {
                return;
            }
            if (jQuery('layout').is('.chat-sidebar-opened')) {
                return;
            }
            if (jQuery('layout').is('.nav-collapsed')) {
                d.expandNavigation();
            }
        });
    };
    Layout.prototype.collapseNavIfSmallScreen = function () {
        if (this.configFn.isScreen('xs')
            || this.configFn.isScreen('sm') || this.configFn.isScreen('md')) {
            this.collapseNavigation();
        }
    };
    Layout.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('nav-static') === 'true') {
            this.config.state['nav-static'] = true;
        }
        var $el = jQuery(this.el.nativeElement);
        this.$sidebar = $el.find('[sidebar]');
        this.router.events.subscribe(function (event) {
            _this._navigationInterceptor(event);
            if (event instanceof router_1.NavigationEnd) {
                setTimeout(function () {
                    _this.collapseNavIfSmallScreen();
                    window.scrollTo(0, 0);
                    $el.find('a[href="#"]').on('click', function (e) {
                        e.preventDefault();
                    });
                });
            }
        });
        this.$sidebar.on('mouseenter', this._sidebarMouseEnter.bind(this));
        this.$sidebar.on('mouseleave', this._sidebarMouseLeave.bind(this));
        this.checkNavigationState();
        this.$sidebar.on('click', function () {
            if (jQuery('layout').is('.nav-collapsed')) {
                _this.expandNavigation();
            }
        });
        if ('ontouchstart' in window) {
            this.enableSwipeCollapsing();
        }
        this.$sidebar.find('.collapse').on('show.bs.collapse', function (e) {
            // execute only if we're actually the .collapse element initiated event
            // return for bubbled events
            if (e.target !== e.currentTarget) {
                return;
            }
            var $triggerLink = jQuery(this).prev('[data-toggle=collapse]');
            jQuery($triggerLink.data('parent'))
                .find('.collapse.show').not(jQuery(this)).collapse('hide');
        })
            .on('show.bs.collapse', function (e) {
            // execute only if we're actually the .collapse element initiated event
            // return for bubbled events
            if (e.target !== e.currentTarget) {
                return;
            }
            jQuery(this).closest('li').addClass('open');
        }).on('hide.bs.collapse', function (e) {
            // execute only if we're actually the .collapse element initiated event
            // return for bubbled events
            if (e.target !== e.currentTarget) {
                return;
            }
            jQuery(this).closest('li').removeClass('open');
        });
    };
    Layout.prototype._navigationInterceptor = function (event) {
        var _this = this;
        if (event instanceof router_1.NavigationStart) {
            // We wanna run this function outside of Angular's zone to
            // bypass change detection
            this.ngZone.runOutsideAngular(function () {
                // For simplicity we are going to turn opacity on / off
                // you could add/remove a class for more advanced styling
                // and enter/leave animation of the spinner
                _this.renderer.setElementStyle(_this.spinnerElement.nativeElement, 'opacity', '1');
                _this.renderer.setElementStyle(_this.routerComponent.nativeElement, 'opacity', '0');
            });
        }
        if (event instanceof router_1.NavigationEnd) {
            this._hideSpinner();
        }
        // Set loading state to false in both of the below events to
        // hide the spinner in case a request fails
        if (event instanceof router_1.NavigationCancel) {
            this._hideSpinner();
        }
        if (event instanceof router_1.NavigationError) {
            this._hideSpinner();
        }
    };
    Layout.prototype._hideSpinner = function () {
        var _this = this;
        // We wanna run this function outside of Angular's zone to
        // bypass change detection,
        this.ngZone.runOutsideAngular(function () {
            // For simplicity we are going to turn opacity on / off
            // you could add/remove a class for more advanced styling
            // and enter/leave animation of the spinner
            _this.renderer.setElementStyle(_this.spinnerElement.nativeElement, 'opacity', '0');
            _this.renderer.setElementStyle(_this.routerComponent.nativeElement, 'opacity', '1');
        });
    };
    return Layout;
}());
__decorate([
    core_1.ViewChild('spinnerElement'),
    __metadata("design:type", Object)
], Layout.prototype, "spinnerElement", void 0);
__decorate([
    core_1.ViewChild('routerComponent'),
    __metadata("design:type", Object)
], Layout.prototype, "routerComponent", void 0);
Layout = __decorate([
    core_1.Component({
        selector: 'layout',
        encapsulation: core_1.ViewEncapsulation.None,
        templateUrl: './layout.template.html',
        host: {
            '[class.nav-static]': 'config.state["nav-static"]',
            '[class.chat-sidebar-opened]': 'chatOpened',
            '[class.app]': 'true',
            id: 'app'
        }
    }),
    __metadata("design:paramtypes", [app_config_1.AppConfig, Object, Object, Object, Object])
], Layout);
exports.Layout = Layout;
//# sourceMappingURL=layout.component.js.map
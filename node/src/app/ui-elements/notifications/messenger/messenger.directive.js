"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MessengerDemo = (function () {
    function MessengerDemo() {
    }
    MessengerDemo.prototype.initializationCode = function () {
        /* tslint:disable */
        (function () {
            var $, flatMessage, spinnerTemplate, LocationSelector, __hasProp = {}.hasOwnProperty, __extends = function (child, parent) { for (var key in parent) {
                if (__hasProp.call(parent, key)) {
                    child[key] = parent[key];
                }
            } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };
            LocationSelector = function ($el) {
                this.$el = $el;
                this.$el.on('click', '.bit', this.handleClick.bind(this));
            };
            LocationSelector.prototype.className = 'location-selector';
            LocationSelector.prototype.handleClick = function (e) {
                var $bit;
                $bit = jQuery(e.target);
                return this.$el.trigger('update', [$bit.attr('data-position').split(' ')]);
            };
            jQuery.fn.locationSelector = function () {
                var loc;
                loc = new LocationSelector(this);
                jQuery(this).addClass(loc.className);
                return jQuery(this);
            };
            spinnerTemplate = '<div class="messenger-spinner">\n    <span class="messenger-spinner-side messenger-spinner-side-left">\n        <span class="messenger-spinner-fill"></span>\n    </span>\n    <span class="messenger-spinner-side messenger-spinner-side-right">\n        <span class="messenger-spinner-fill"></span>\n    </span>\n</div>';
            /* tslint:enable */
            flatMessage = (function (_super) {
                __extends(flatMessage, _super);
                function flatMessage() {
                    /* tslint:disable */
                    return flatMessage['__super__'].constructor.apply(this, arguments);
                    /* tslint:enable */
                }
                flatMessage.prototype.template = function (opts) {
                    var $message;
                    /* tslint:disable */
                    $message = flatMessage['__super__'].template.apply(this, arguments);
                    /* tslint:enable */
                    $message.append(jQuery(spinnerTemplate));
                    return $message;
                };
                return flatMessage;
                /* tslint:disable */
            })(window['Messenger'].Message);
            window['Messenger'].themes.air = {
                Message: flatMessage
            };
            /* tslint:enable */
        }).call(window);
    };
    MessengerDemo.prototype.render = function () {
        this.initializationCode();
        var theme = 'air';
        jQuery.globalMessenger({ theme: theme });
        Messenger.options = { theme: theme };
        Messenger().post('Thanks for checking out Messenger!');
        var loc = ['bottom', 'right'];
        var $lsel = jQuery('.location-selector');
        var update = function () {
            var classes = 'messenger-fixed';
            for (var i = 0; i < loc.length; i++) {
                classes += ' messenger-on-' + loc[i];
            }
            jQuery.globalMessenger({ extraClasses: classes, theme: theme });
            Messenger.options = { extraClasses: classes, theme: theme };
        };
        update();
        $lsel.locationSelector()
            .on('update', function (e, pos) {
            loc = pos;
            update();
        });
        jQuery('#show-error-message').on('click', function () {
            var i;
            i = 0;
            Messenger().run({
                errorMessage: 'Error destroying alien planet',
                successMessage: 'Alien planet destroyed!',
                action: function (opts) {
                    if (++i < 3) {
                        return opts.error({
                            status: 500,
                            readyState: 0,
                            responseText: 0
                        });
                    }
                    else {
                        return opts.success();
                    }
                }
            });
            return false;
        });
        jQuery('#show-info-message').on('click', function () {
            var msg = Messenger().post({
                message: 'Launching thermonuclear war...',
                actions: {
                    cancel: {
                        label: 'cancel launch',
                        action: function () {
                            return msg.update({
                                message: 'Thermonuclear war averted',
                                type: 'success',
                                actions: false
                            });
                        }
                    }
                }
            });
            return false;
        });
        jQuery('#show-success-message').on('click', function () {
            Messenger().post({
                message: 'Showing success message was successful!',
                type: 'success',
                showCloseButton: true
            });
            return false;
        });
    };
    MessengerDemo.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { _this.render(); }, 100);
    };
    return MessengerDemo;
}());
MessengerDemo = __decorate([
    core_1.Directive({
        selector: '[messenger-demo]'
    })
], MessengerDemo);
exports.MessengerDemo = MessengerDemo;
//# sourceMappingURL=messenger.directive.js.map
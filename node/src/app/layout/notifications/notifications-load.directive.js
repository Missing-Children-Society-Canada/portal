"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NotificationLoad = (function () {
    function NotificationLoad(el) {
        this.resetData = null;
        this.$el = jQuery(el.nativeElement);
    }
    NotificationLoad.prototype.ngOnInit = function () {
        var _this = this;
        this.$el.on('click change', function (e) {
            var $this = jQuery(this), $target = jQuery($this.data('ajax-target'));
            if ($target.length > 0) {
                e = jQuery.Event('ajax-load:start', { originalEvent: e });
                $this.trigger(e);
                if (!e.isDefaultPrevented()) {
                    $target.load($this.data('ajax-load'), function () {
                        $this.trigger('ajax-load:end');
                    });
                }
            }
            return false;
        });
        jQuery(window.document).on('click', '[data-toggle^=button]', function (e) {
            e.preventDefault();
            return jQuery(e.target).find('input').data('ajax-trigger') !== 'change';
        });
        if (this.$el.data('loading-text')) {
            this.$el.on('ajax-load:start', function () {
                _this.resetData = _this.$el.html();
                _this.$el.empty().append(_this.$el.data('loading-text')).attr('disabled', true);
            });
            this.$el.on('ajax-load:end', function () {
                _this.$el.empty().append(_this.resetData).attr('disabled', false);
            });
        }
        jQuery(document).on('ajax-load:end', '#load-notifications-btn', function () {
            setTimeout(function () {
                jQuery('#notifications-list').find('.bg-attention').removeClass('bg-attention');
            }, 10000);
        });
    };
    return NotificationLoad;
}());
NotificationLoad = __decorate([
    core_1.Directive({
        selector: '[notification-load]'
    }),
    __metadata("design:paramtypes", [Object])
], NotificationLoad);
exports.NotificationLoad = NotificationLoad;
//# sourceMappingURL=notifications-load.directive.js.map
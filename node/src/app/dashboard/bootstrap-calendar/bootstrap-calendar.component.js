"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BootstrapCalendar = (function () {
    function BootstrapCalendar(el) {
        this.$el = jQuery(el.nativeElement);
    }
    BootstrapCalendar.prototype.render = function () {
        var monthNames = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];
        var dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
        var events = this.events;
        var $calendar = this.$el;
        $calendar.calendar({
            months: monthNames,
            days: dayNames,
            events: events,
            popover_options: {
                placement: 'top',
                html: true
            }
        });
        $calendar.find('.icon-arrow-left').addClass('fa fa-arrow-left');
        $calendar.find('.icon-arrow-right').addClass('fa fa-arrow-right');
        function restyleCalendar() {
            $calendar.find('.event').each(function () {
                var $this = jQuery(this), $eventIndicator = jQuery('<span></span>');
                $eventIndicator
                    .css('background-color', $this.css('background-color'))
                    .appendTo($this.find('a'));
                $this.css('background-color', '');
            });
        }
        $calendar.find('.icon-arrow-left, .icon-arrow-right').parent().on('click', restyleCalendar);
        restyleCalendar();
    };
    BootstrapCalendar.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { _this.render(); }, 100);
    };
    return BootstrapCalendar;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], BootstrapCalendar.prototype, "events", void 0);
BootstrapCalendar = __decorate([
    core_1.Directive({
        selector: '[bootstrap-calendar]'
    }),
    __metadata("design:paramtypes", [Object])
], BootstrapCalendar);
exports.BootstrapCalendar = BootstrapCalendar;
//# sourceMappingURL=bootstrap-calendar.component.js.map
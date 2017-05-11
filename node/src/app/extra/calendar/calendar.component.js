"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var Calendar = (function () {
    function Calendar() {
        var _this = this;
        this.dragOptions = { zIndex: 999, revert: true, revertDuration: 0 };
        this.event = {};
        this.calendarEvent = null;
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();
        this.calendarOptions = {
            header: {
                left: '',
                center: '',
                right: ''
            },
            events: [
                {
                    title: 'All Day Event',
                    start: new Date(y, m, 1),
                    backgroundColor: '#79A5F0',
                    textColor: '#fff',
                    description: 'Will be busy throughout the whole day'
                },
                {
                    title: 'Long Event',
                    start: new Date(y, m, d + 5),
                    end: new Date(y, m, d + 7),
                    description: 'This conference should be worse visiting'
                },
                {
                    id: 999,
                    title: 'Blah Blah Car',
                    start: new Date(y, m, d - 3, 16, 0),
                    allDay: false,
                    description: 'Agree with this guy on arrival time'
                },
                {
                    id: 1000,
                    title: 'Buy this template',
                    start: new Date(y, m, d + 3, 12, 0),
                    allDay: false,
                    backgroundColor: '#555',
                    textColor: '#fff',
                    description: 'Make sure everything is consistent first'
                },
                {
                    title: 'Got to school',
                    start: new Date(y, m, d + 16, 12, 0),
                    end: new Date(y, m, d + 16, 13, 0),
                    backgroundColor: '#64bd63',
                    textColor: '#fff',
                    description: 'Time to go back'
                },
                {
                    title: 'Study some Node',
                    start: new Date(y, m, d + 18, 12, 0),
                    end: new Date(y, m, d + 18, 13, 0),
                    backgroundColor: '#79A5F0',
                    textColor: '#fff',
                    description: 'Node.js is a platform built ' +
                        'on Chrome\'s JavaScript runtime for easily' +
                        ' building fast, scalable network applications.' +
                        ' Node.js uses an event-driven, non-blocking' +
                        ' I/O model that makes it lightweight and' +
                        ' efficient, perfect for data-intensive real-time' +
                        ' applications that run across distributed devices.'
                },
                {
                    title: 'Click for Flatlogic',
                    start: new Date(y, m, 28),
                    end: new Date(y, m, 29),
                    url: 'http://flatlogic.com/',
                    backgroundColor: '#e5603b',
                    textColor: '#fff',
                    description: 'Creative solutions'
                }
            ],
            selectable: true,
            selectHelper: true,
            select: function (start, end, allDay) {
                _this.createEvent = function () {
                    var title = _this.event.title;
                    if (title) {
                        _this.$calendar.fullCalendar('renderEvent', {
                            title: title,
                            start: start,
                            end: end,
                            allDay: allDay,
                            backgroundColor: '#64bd63',
                            textColor: '#fff'
                        }, true // make the event "stick"
                        );
                    }
                    _this.$calendar.fullCalendar('unselect');
                    _this.calendarEvent = null;
                    _this.modalWindow.hide();
                };
                _this.calendarEvent = 'create';
                _this.modalWindow.show();
            },
            eventClick: function (event) {
                _this.event = event;
                _this.calendarEvent = 'show';
                _this.modalWindow.show();
            },
            editable: true,
            droppable: true,
            drop: function (dateItem, event) {
                // retrieve the dropped element's stored Event Object
                var originalEventObject = {
                    // use the element's text as the event title
                    title: jQuery.trim(jQuery(event.target).text())
                };
                // we need to copy it, so that multiple events don't have a reference to the same object
                var copiedEventObject = jQuery.extend({}, originalEventObject);
                // assign it the date that was reported
                copiedEventObject.start = dateItem;
                copiedEventObject.allDay = !dateItem.hasTime();
                var $categoryClass = jQuery(event.target).data('event-class');
                if ($categoryClass) {
                    copiedEventObject.className = [$categoryClass];
                }
                // render the event on the calendar
                // the last `true` argument determines if
                // the event 'sticks'
                // http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
                _this.$calendar.fullCalendar('renderEvent', copiedEventObject, true);
                jQuery(event.target).remove();
            },
        };
    }
    ;
    Calendar.prototype.addEvent = function (event) {
        this.calendarOptions.events.push(event);
    };
    ;
    Calendar.prototype.changeView = function (view) {
        this.$calendar.fullCalendar('changeView', view);
    };
    ;
    Calendar.prototype.currentMonth = function () {
        return moment(this.$calendar.fullCalendar('getDate')).format('MMM YYYY');
    };
    ;
    Calendar.prototype.currentDay = function () {
        return moment(this.$calendar.fullCalendar('getDate')).format('dddd');
    };
    ;
    Calendar.prototype.prev = function () {
        this.$calendar.fullCalendar('prev');
    };
    ;
    Calendar.prototype.next = function () {
        this.$calendar.fullCalendar('next');
    };
    ;
    Calendar.prototype.ngOnInit = function () {
        this.$calendar = jQuery('#calendar');
    };
    Calendar.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.$calendar.fullCalendar(_this.calendarOptions);
            jQuery('.draggable').draggable(_this.dragOptions);
        });
    };
    return Calendar;
}());
__decorate([
    core_1.ViewChild('modalWindow'),
    __metadata("design:type", Object)
], Calendar.prototype, "modalWindow", void 0);
Calendar = __decorate([
    core_1.Component({
        selector: '[extra-calendar]',
        templateUrl: './calendar.template.html',
        encapsulation: core_1.ViewEncapsulation.None,
        styleUrls: ['./calendar.style.scss']
    }),
    __metadata("design:paramtypes", [])
], Calendar);
exports.Calendar = Calendar;
//# sourceMappingURL=calendar.component.js.map
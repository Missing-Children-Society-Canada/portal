"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var data = require("./elements.data");
var Elements = (function () {
    function Elements(injector) {
        var _this = this;
        this.date = new Date(2016, 5, 10);
        this.colorOptions = { color: '#f0b518' };
        this.select2Options = {
            theme: 'bootstrap'
        };
        this.phoneMask = {
            mask: ['(', /[1-9]/, /\d/, /\d/, ')',
                ' ', /\d/, /\d/, /\d/,
                '-', /\d/, /\d/, /\d/, /\d/]
        };
        this.interPhoneMask = {
            mask: ['+', /[1-9]/, /\d/, /\d/,
                ' ', /\d/, /\d/, /\d/,
                ' ', /\d/, /\d/, /\d/, /\d/,
                ' ', /\d/, /\d/, /\d/, /\d/]
        };
        this.dateMask = {
            mask: [/\d/, /\d/,
                '-', /\d/, /\d/,
                '-', /[1-9]/, /\d/, /\d/, /\d/]
        };
        this.timeMask = {
            mask: [/\d/, /\d/,
                ':', /\d/, /\d/]
        };
        this.phoneValue = '';
        this.interPhoneValue = '';
        this.dateValue = '';
        this.timeValue = '';
        //
        // This is a hack on angular style loader to prevent ng2-select2 from adding its styles.
        // They are hard-coded into the component, so there are no other way to get rid of them
        //
        this.domSharedStylesHost = injector.get(platform_browser_1.ɵDomSharedStylesHost);
        this.domSharedStylesHost.__onStylesAdded__ = this.domSharedStylesHost.onStylesAdded;
        this.domSharedStylesHost.onStylesAdded = function (additions) {
            var style = additions[0];
            if (!style || !style.trim().startsWith('.select2-container')) {
                _this.domSharedStylesHost.__onStylesAdded__(additions);
            }
        };
    }
    Elements.prototype.ngOnInit = function () {
        jQuery('#markdown-editor').markdown();
        jQuery('.js-slider').slider();
        jQuery('#colorpicker').colorpicker(this.colorOptions);
        jQuery('.selectpicker').selectpicker();
    };
    Elements.prototype.unmask = function (event) {
        return event.replace(/\D+/g, '');
    };
    Elements.prototype.getSelect2DefaultList = function () {
        return data.select2DefaultData;
    };
    Elements.prototype.getSelect2GroupedList = function () {
        return data.select2GroupedData;
    };
    Elements.prototype.select2Changed = function (e) {
        this.selected = e.value;
    };
    Elements.prototype.ngOnDestroy = function () {
        // detach custom hook
        this.domSharedStylesHost.onStylesAdded = this.domSharedStylesHost.__onStylesAdded__;
    };
    return Elements;
}());
Elements = __decorate([
    core_1.Component({
        selector: '[elements]',
        templateUrl: './elements.template.html',
        styleUrls: ['./elements.style.scss'],
        encapsulation: core_1.ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [Object])
], Elements);
exports.Elements = Elements;
//# sourceMappingURL=elements.component.js.map
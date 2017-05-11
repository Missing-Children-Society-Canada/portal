"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var JqSparkline = (function () {
    function JqSparkline(el) {
        this.$el = jQuery(el.nativeElement);
    }
    JqSparkline.prototype.render = function () {
        var _this = this;
        var model = jQuery.type(this.data) === 'string' ?
            this.data.replace(/(^,)|(,$)/g, '')
            : this.data, options = this.options;
        // enabling composite chart if array passed
        if (jQuery.type(model) === 'array' && jQuery.type(options) === 'array') {
            options.forEach(function (singleOptions, i) {
                if (i === 0) {
                    _this.$el.sparkline(model[i], singleOptions);
                }
                else {
                    _this.$el.sparkline(model[i], jQuery.extend({ composite: true }, singleOptions));
                }
            });
        }
        else {
            var data_1;
            // Make sure we have an array of numbers
            jQuery.type(model) === 'array' ? data_1 = model : data_1 = model.split(',');
            jQuery(window).on('sn:resize', function () { _this.$el.sparkline(data_1, options); });
            this.$el.sparkline(data_1, options);
        }
    };
    JqSparkline.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { _this.render(); }, 100);
    };
    return JqSparkline;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], JqSparkline.prototype, "data", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], JqSparkline.prototype, "options", void 0);
JqSparkline = __decorate([
    core_1.Directive({
        selector: '[jq-sparkline]'
    }),
    __metadata("design:paramtypes", [Object])
], JqSparkline);
exports.JqSparkline = JqSparkline;
//# sourceMappingURL=sparkline.directive.js.map
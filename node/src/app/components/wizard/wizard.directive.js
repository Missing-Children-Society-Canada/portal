"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BootstrapWizard = (function () {
    function BootstrapWizard(el) {
        this.$el = jQuery(el.nativeElement);
    }
    BootstrapWizard.prototype.render = function () {
        var _this = this;
        this.$el.bootstrapWizard({
            onTabShow: function ($activeTab, $navigation, index) {
                var $total = $navigation.find('li').length;
                var $current = index + 1;
                var $percent = ($current / $total) * 100;
                var $wizard = _this.$el;
                $wizard.find('#bar').css({ width: $percent + '%' });
                if ($current >= $total) {
                    $wizard.find('.pager .next').hide();
                    $wizard.find('.pager .finish').show();
                    $wizard.find('.pager .finish').removeClass('disabled');
                }
                else {
                    $wizard.find('.pager .next').show();
                    $wizard.find('.pager .finish').hide();
                }
                // setting done class
                $navigation.find('li').removeClass('done');
                $activeTab.prevAll().addClass('done');
            },
            // validate on tab change
            onNext: function ($activeTab, $navigation, nextIndex) {
                var $activeTabPane = jQuery($activeTab.find('a[data-toggle=tab]').attr('href')), $form = $activeTabPane.find('form');
                // validate form in casa there is form
                if ($form.length) {
                    return $form.parsley().validate();
                }
            },
            // diable tab clicking
            onTabClick: function ($activeTab, $navigation, currentIndex, clickedIndex) {
                return $navigation.find('li:eq(' + clickedIndex + ')').is('.done');
            }
        });
        if (this.$el.data('height')) {
            // setting fixed height so wizard won't jump
            this.$el.find('.tab-pane').css({ height: this.$el.data('height') });
        }
    };
    BootstrapWizard.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { _this.render(); }, 100);
    };
    return BootstrapWizard;
}());
BootstrapWizard = __decorate([
    core_1.Directive({
        selector: '[bootstrap-wizard]'
    }),
    __metadata("design:paramtypes", [Object])
], BootstrapWizard);
exports.BootstrapWizard = BootstrapWizard;
//# sourceMappingURL=wizard.directive.js.map
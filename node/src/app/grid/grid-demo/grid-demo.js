"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var GridDemo = (function () {
    function GridDemo() {
    }
    GridDemo.prototype.render = function () {
        jQuery.fn.widgster.Constructor.DEFAULTS.bodySelector = '.widget-body';
        var $widgets = jQuery('.widget'), $newsWidget = jQuery('#news-widget'), $sharesWidget = jQuery('#shares-widget'), $autoloadWidget = jQuery('#autoload-widget');
        /**
         * turn off .content-wrap transforms & disable sorting when widget fullscreened
         */
        $widgets.on('fullscreen.widgster', function () {
            jQuery('.content-wrap').css({
                '-webkit-transform': 'none',
                '-ms-transform': 'none',
                transform: 'none',
                'margin': 0,
                'z-index': 2
            });
            // prevent widget from dragging when fullscreened
            jQuery('.widget-container').sortable('option', 'disabled', true);
        }).on('restore.widgster closed.widgster', function () {
            jQuery('.content-wrap').css({
                '-webkit-transform': '',
                '-ms-transform': '',
                transform: '',
                margin: '',
                'z-index': ''
            });
            jQuery('body').css({
                'overflow-y': 'scroll'
            });
            // allow dragging back
            jQuery('.widget-container').sortable('option', 'disabled', false);
        });
        /**
         * Make refresh button spin when loading
         */
        $newsWidget.on('load.widgster', function () {
            jQuery(this).find('[data-widgster="load"] > i').addClass('fa-spin');
        }).on('loaded.widgster', function () {
            jQuery(this).find('[data-widgster="load"] > i').removeClass('fa-spin');
        });
        /**
         * Custom close prompt for news widget
         */
        $newsWidget.widgster({
            showLoader: false,
            closePrompt: function (callback) {
                jQuery('#news-close-modal').modal('show');
                jQuery('#news-widget-remove').on('click', function () {
                    jQuery('#news-close-modal').on('hidden.bs.modal', callback).modal('hide');
                });
            }
        });
        /**
         * Use custom loader template
         */
        $sharesWidget.widgster({
            loaderTemplate: '<div class="loader animated fadeIn">' +
                '   <span class="spinner"><i class="fa fa-spinner fa-spin"></i></span>' +
                '</div>'
        });
        /**
         * Make hidden spinner appear & spin when loading
         */
        $autoloadWidget.on('load.widgster', function () {
            jQuery(this).find('.fa-spinner').addClass('fa-spin in');
        }).on('loaded.widgster', function () {
            jQuery(this).find('.fa-spinner').removeClass('fa-spin in');
        }).on('load.widgster fullscreen.widgster restore.widgster', function () {
            jQuery(this).find('.dropdown.open > .dropdown-toggle').dropdown('toggle');
        });
        /**
         * Init all other widgets with default settings & settings retrieved from data-* attributes
         */
        $widgets.widgster();
        /**
         * Init tooltips for all widget controls on page
         */
        jQuery('.widget-controls > a').tooltip({ placement: 'bottom' });
    };
    GridDemo.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { _this.render(); }, 100);
    };
    return GridDemo;
}());
GridDemo = __decorate([
    core_1.Directive({
        selector: '[grid-demo]',
    })
], GridDemo);
exports.GridDemo = GridDemo;
//# sourceMappingURL=grid-demo.js.map
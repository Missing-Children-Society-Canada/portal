"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BootstrapApplicationWizard = (function () {
    function BootstrapApplicationWizard(el) {
        this.$el = jQuery(el.nativeElement);
        /* tslint:disable */
        window.validateServerLabel = function (el) {
            var name = el.val();
            var retValue = {};
            if (name === '') {
                retValue['status'] = false;
                retValue['msg'] = 'Please enter a label';
            }
            else {
                retValue['status'] = true;
            }
            return retValue;
        };
        window.validateFQDN = function (el) {
            var $this = jQuery(el);
            var retValue = {};
            if ($this.is(':disabled')) {
                // FQDN Disabled
                retValue['status'] = true;
            }
            else {
                if ($this.data('lookup') === 0) {
                    retValue['status'] = false;
                    retValue['msg'] = 'Preform lookup first';
                }
                else {
                    if ($this.data('is-valid') === 0) {
                        retValue['status'] = false;
                        retValue['msg'] = 'Lookup Failed';
                    }
                    else {
                        retValue['status'] = true;
                    }
                }
            }
            return retValue;
        };
        /* tslint:enable */
    }
    BootstrapApplicationWizard.prototype.lookup = function () {
        // Normally a ajax call to the server to preform a lookup
        jQuery('#fqdn').data('lookup', 1);
        jQuery('#fqdn').data('is-valid', 1);
        jQuery('#ip').val('127.0.0.1');
    };
    BootstrapApplicationWizard.prototype.render = function () {
        var _this = this;
        var wizard = this.$el.wizard({
            keyboard: false,
            contentHeight: 400,
            contentWidth: 700,
            backdrop: 'static'
        });
        jQuery('#fqdn').on('input', function () {
            if (jQuery(this).val().length !== 0) {
                jQuery('#ip').val('').attr('disabled', 'disabled');
                jQuery('#fqdn, #ip').parents('.form-group').removeClass('has-error has-success');
            }
            else {
                jQuery('#ip').val('').removeAttr('disabled');
            }
        });
        jQuery('#btn-fqdn').find('button').on('click', this.lookup);
        /* tslint:disable */
        var pattern = /\b(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/;
        var x = 46;
        /* tslint:enable */
        jQuery('#ip').on('input', function () {
            if (jQuery(_this).val().length !== 0) {
                jQuery('#fqdn').val('').attr('disabled', 'disabled');
            }
            else {
                jQuery('#fqdn').val('').removeAttr('disabled');
            }
        }).keypress(function (e) {
            if (e.which !== 8 && e.which !== 0 && e.which !== x && (e.which < 48 || e.which > 57)) {
                console.log(e.which);
                return false;
            }
        }).keyup(function () {
            var $this = jQuery(this);
            if (!pattern.test($this.val())) {
                // jQuery('#validate_ip').text('Not Valid IP');
                console.log('Not Valid IP');
                $this.parents('.form-group').removeClass('has-error has-success').addClass('has-error');
                while ($this.val().indexOf('..') !== -1) {
                    $this.val($this.val().replace('..', '.'));
                }
                x = 46;
            }
            else {
                x = 0;
                var lastChar = $this.val().substr($this.val().length - 1);
                if (lastChar === '.') {
                    $this.val($this.val().slice(0, -1));
                }
                var ip = $this.val().split('.');
                if (ip.length === 4) {
                    // jQuery('#validate_ip').text('Valid IP');
                    console.log('Valid IP');
                    $this.parents('.form-group').removeClass('has-error').addClass('has-success');
                }
            }
        });
        wizard.on('closed', function () {
            wizard.reset();
        });
        wizard.on('reset', function () {
            wizard.modal.find(':input').val('').removeAttr('disabled');
            wizard.modal.find('.form-group').removeClass('has-error').removeClass('has-succes');
            wizard.modal.find('#fqdn').data('is-valid', 0).data('lookup', 0);
        });
        wizard.on('submit', function (wizardItem) {
            var submit = {
                'hostname': jQuery('#new-server-fqdn').val()
            };
            this.log('seralize()');
            this.log(this.serialize());
            this.log('serializeArray()');
            /* tslint:disable */
            this.log(this['serializeArray']());
            /* tslint:enable */
            setTimeout(function () {
                wizardItem.trigger('success');
                wizardItem.hideButtons();
                wizardItem._submitting = false;
                wizardItem.showSubmitCard('success');
                wizardItem.updateProgressBar(0);
            }, 2000);
        });
        wizard.el.find('.wizard-success .im-done').click(function () {
            wizard.hide();
            setTimeout(function () {
                wizard.reset();
            }, 250);
        });
        wizard.el.find('.wizard-success .create-another-server').click(function () {
            wizard.reset();
        });
        /* tslint:disable */
        wizard.el.find('.wizard-progress-container').empty()
            .append('<div class="bg-gray-lighter progress progress-xs"><div class="progress-bar bg-primary progress-xs" style="width: 0%"></div></div>');
        /* tslint:enable */
        wizard.progress = wizard.modal.find('progress');
        jQuery('.wizard-group-list').click(function () {
            window.alert('Disabled for demo.');
        });
        jQuery('#open-wizard').click(function (e) {
            e.preventDefault();
            wizard.show();
            wizard.errorPopover = function (el, msg, allowHtml) {
                this.log('launching popover on', el);
                allowHtml = typeof allowHtml !== 'undefined' ? allowHtml : false;
                var popover = el.popover({
                    content: msg,
                    trigger: 'manual',
                    html: allowHtml,
                    container: el.parents('.form-group')
                }).addClass('error-popover').popover('show').next('.popover');
                el.parents('.form-group').find('.popover').addClass('error-popover');
                jQuery('.popover-title').css('display', 'none');
                jQuery('.popover').addClass('popover-body-error');
                jQuery('.popover-content').addClass('popover-content-error');
                jQuery('.popover-arrow').addClass('popover-arrow-error');
                Tether.position();
                /* tslint:disable */
                this['popovers'].push(el);
                /* tslint:enable */
                return popover;
            };
            jQuery('.dropdown-menu > li > a').addClass('dropdown-item');
        });
        wizard.el.find('.wizard-nav-list').addClass('flex-column');
        wizard.el.find('.wizard-close').addClass('flex-last');
    };
    BootstrapApplicationWizard.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { _this.render(); }, 100);
    };
    return BootstrapApplicationWizard;
}());
BootstrapApplicationWizard = __decorate([
    core_1.Directive({
        selector: '[bootstrap-application-wizard]'
    }),
    __metadata("design:paramtypes", [Object])
], BootstrapApplicationWizard);
exports.BootstrapApplicationWizard = BootstrapApplicationWizard;
//# sourceMappingURL=bootstrap-application-wizard.directive.js.map
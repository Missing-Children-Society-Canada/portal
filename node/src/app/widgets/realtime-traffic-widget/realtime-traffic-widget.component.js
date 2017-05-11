"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_config_1 = require("../../app.config");
var RealtimeTrafficWidget = (function () {
    function RealtimeTrafficWidget(config) {
        this.seriesData = [[], []];
        this.config = config.getConfig();
        this.random = new Rickshaw.Fixtures.RandomData(30);
        for (var i = 0; i < 30; i++) {
            this.random.addData(this.seriesData);
        }
        this.series = [
            {
                color: this.config.settings.colors['gray-dark'],
                data: this.seriesData[0],
                name: 'Uploads'
            }, {
                color: this.config.settings.colors.gray,
                data: this.seriesData[1],
                name: 'Downloads'
            }
        ];
    }
    return RealtimeTrafficWidget;
}());
RealtimeTrafficWidget = __decorate([
    core_1.Component({
        selector: '[realtime-traffic-widget]',
        templateUrl: './realtime-traffic-widget.template.html',
        encapsulation: core_1.ViewEncapsulation.None,
        styleUrls: ['../../../../node_modules/rickshaw/rickshaw.css']
    }),
    __metadata("design:paramtypes", [app_config_1.AppConfig])
], RealtimeTrafficWidget);
exports.RealtimeTrafficWidget = RealtimeTrafficWidget;
//# sourceMappingURL=realtime-traffic-widget.component.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MarketStatsWidget = (function () {
    function MarketStatsWidget() {
        this.seriesData = [[], []];
        this.random = new Rickshaw.Fixtures.RandomData(30);
        for (var i = 0; i < 30; i++) {
            this.random.addData(this.seriesData);
        }
        this.series = [
            {
                color: '#F7653F',
                data: this.seriesData[0],
                name: 'Uploads'
            }, {
                color: '#F7D9C5',
                data: this.seriesData[1],
                name: 'Downloads'
            }
        ];
    }
    return MarketStatsWidget;
}());
MarketStatsWidget = __decorate([
    core_1.Component({
        selector: '[market-stats-widget]',
        template: '<div class="chart-overflow-bottom"' +
            ' rickshaw-chart [series]="series" ' +
            '[height]="100" [seriesData]="seriesData"' +
            ' [random]="random" [realtime]="true">' +
            '</div>',
        encapsulation: core_1.ViewEncapsulation.None,
        styleUrls: ['../../../../node_modules/rickshaw/rickshaw.css']
    }),
    __metadata("design:paramtypes", [])
], MarketStatsWidget);
exports.MarketStatsWidget = MarketStatsWidget;
//# sourceMappingURL=market-stats-widget.component.js.map
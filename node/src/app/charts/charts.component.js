"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Charts = (function () {
    function Charts() {
        this.seriesData = [[], []];
        this.data1 = [
            [1, 20],
            [2, 20],
            [3, 40],
            [4, 30],
            [5, 40],
            [6, 35],
            [7, 47]
        ];
        this.data2 = [
            [1, 13],
            [2, 8],
            [3, 17],
            [4, 10],
            [5, 17],
            [6, 15],
            [7, 16]
        ];
        this.data3 = [
            [1, 23],
            [2, 13],
            [3, 33],
            [4, 16],
            [5, 32],
            [6, 28],
            [7, 31]
        ];
    }
    Charts.prototype.applyRickshawData = function () {
        console.log(Rickshaw);
        this.random = new Rickshaw.Fixtures.RandomData(30);
        for (var i = 0; i < 30; i++) {
            this.random.addData(this.seriesData);
        }
        this.series = [
            {
                color: '#96E593',
                data: this.seriesData[0],
                name: 'Uploads'
            }, {
                color: '#ecfaec',
                data: this.seriesData[1],
                name: 'Downloads'
            }
        ];
    };
    ;
    Charts.prototype.applyNvd3Data = function () {
        /* Inspired by Lee Byron's test data generator. */
        function _stream_layers(n, m, o) {
            if (arguments.length < 3) {
                o = 0;
            }
            function bump(a) {
                var x = 1 / (.1 + Math.random()), y = 2 * Math.random() - .5, z = 10 / (.1 + Math.random());
                for (var i = 0; i < m; i++) {
                    var w = (i / m - y) * z;
                    a[i] += x * Math.exp(-w * w);
                }
            }
            return d3.range(n).map(function () {
                var a = [], i;
                for (i = 0; i < m; i++) {
                    a[i] = o + o * Math.random();
                }
                for (i = 0; i < 5; i++) {
                    bump(a);
                }
                return a.map(function (d, iItem) {
                    return { x: iItem, y: Math.max(0, d) };
                });
            });
        }
        function testData(streamNames, pointCount) {
            var now = new Date().getTime(), day = 1000 * 60 * 60 * 24, // milliseconds
            daysAgoCount = 60, daysAgo = daysAgoCount * day, daysAgoDate = now - daysAgo, pointsCount = pointCount || 45, // less for better performance
            daysPerPoint = daysAgoCount / pointsCount;
            return _stream_layers(streamNames.length, pointsCount, .1).map(function (data, i) {
                return {
                    key: streamNames[i],
                    values: data.map(function (d, j) {
                        return {
                            x: daysAgoDate + d.x * day * daysPerPoint,
                            y: Math.floor(d.y * 100) // just a coefficient,
                        };
                    })
                };
            });
        }
        this.nvd31Chart = nv.models.lineChart()
            .useInteractiveGuideline(true)
            .margin({ left: 28, bottom: 30, right: 0 })
            .color(['#82DFD6', '#ddd']);
        this.nvd31Chart.xAxis
            .showMaxMin(false)
            .tickFormat(function (d) { return d3.time.format('%b %d')(new Date(d)); });
        this.nvd31Chart.yAxis
            .showMaxMin(false)
            .tickFormat(d3.format(',f'));
        this.nvd31Data = testData(['Search', 'Referral'], 50).map(function (el, i) {
            el.area = true;
            return el;
        });
        this.nvd32Chart = nv.models.multiBarChart()
            .margin({ left: 28, bottom: 30, right: 0 })
            .color(['#F7653F', '#ddd']);
        this.nvd32Chart.xAxis
            .showMaxMin(false)
            .tickFormat(function (d) { return d3.time.format('%b %d')(new Date(d)); });
        this.nvd32Chart.yAxis
            .showMaxMin(false)
            .tickFormat(d3.format(',f'));
        this.nvd32Data = testData(['Uploads', 'Downloads'], 10).map(function (el, i) {
            el.area = true;
            return el;
        });
    };
    ;
    Charts.prototype.ngOnInit = function () {
        this.applyRickshawData();
        this.sparklineCompositeData = [
            [2, 4, 6, 2, 7, 5, 3, 7, 8, 3, 6],
            [5, 3, 7, 8, 3, 6, 2, 4, 6, 2, 7]
        ];
        this.sparklineCompositeOptions = [{
                width: '99%',
                fillColor: '#ddd',
                height: '100px',
                lineColor: 'transparent',
                spotColor: '#c0d0f0',
                minSpotColor: null,
                maxSpotColor: null,
                highlightSpotColor: '#ddd',
                highlightLineColor: '#ddd'
            }, {
                lineColor: 'transparent',
                spotColor: '#c0d0f0',
                fillColor: 'rgba(192, 208, 240, 0.76)',
                minSpotColor: null,
                maxSpotColor: null,
                highlightSpotColor: '#ddd',
                highlightLineColor: '#ddd'
            }];
        this.sparklinePieData = [2, 4, 6];
        this.sparklinePieOptions = {
            type: 'pie',
            width: '100px',
            height: '100px',
            sliceColors: ['#F5CB7B', '#FAEEE5', '#f0f0f0']
        };
        this.applyNvd3Data();
        this.morris1Options = {
            resize: true,
            data: [
                { y: '2006', a: 100, b: 90 },
                { y: '2007', a: 75, b: 65 },
                { y: '2008', a: 50, b: 40 },
                { y: '2009', a: 75, b: 65 },
                { y: '2010', a: 50, b: 40 },
                { y: '2011', a: 75, b: 65 },
                { y: '2012', a: 100, b: 90 }
            ],
            xkey: 'y',
            ykeys: ['a', 'b'],
            labels: ['Series A', 'Series B'],
            lineColors: ['#88C4EE', '#ccc']
        };
        this.morris2Options = {
            resize: true,
            data: [
                { y: '2006', a: 100, b: 90 },
                { y: '2007', a: 75, b: 65 },
                { y: '2008', a: 50, b: 40 },
                { y: '2009', a: 75, b: 65 },
                { y: '2010', a: 50, b: 40 },
                { y: '2011', a: 75, b: 65 },
                { y: '2012', a: 100, b: 90 }
            ],
            xkey: 'y',
            ykeys: ['a', 'b'],
            labels: ['Series A', 'Series B'],
            lineColors: ['#80DE78', '#9EEE9B'],
            lineWidth: 0
        };
        this.morris3Options = {
            data: [
                { label: 'Download Sales', value: 12 },
                { label: 'In-Store Sales', value: 30 },
                { label: 'Mail-Order Sales', value: 20 }
            ],
            colors: ['#F7653F', '#F8C0A2', '#e6e6e6']
        };
        jQuery('.easy-pie-chart').easyPieChart({
            barColor: '#5dc4bf',
            trackColor: '#ddd',
            scaleColor: false,
            lineWidth: 10,
            size: 120
        });
        var barCustomised1 = [
            [1388534400000, 120],
            [1391212800000, 70],
            [1393632000000, 100],
            [1396310400000, 60],
            [1398902400000, 35]
        ];
        var barCustomised2 = [
            [1388534400000, 90],
            [1391212800000, 60],
            [1393632000000, 30],
            [1396310400000, 73],
            [1398902400000, 30]
        ];
        var barCustomised3 = [
            [1388534400000, 80],
            [1391212800000, 40],
            [1393632000000, 47],
            [1396310400000, 22],
            [1398902400000, 24]
        ];
        this.flotBarsData = [
            {
                label: 'Apple',
                data: barCustomised1,
                bars: {
                    show: true,
                    barWidth: 12 * 24 * 60 * 60 * 300,
                    fill: true,
                    lineWidth: 0,
                    order: 1
                }
            },
            {
                label: 'Google',
                data: barCustomised2,
                bars: {
                    show: true,
                    barWidth: 12 * 24 * 60 * 60 * 300,
                    fill: true,
                    lineWidth: 0,
                    order: 2
                }
            },
            {
                label: 'Facebook',
                data: barCustomised3,
                bars: {
                    show: true,
                    barWidth: 12 * 24 * 60 * 60 * 300,
                    fill: true,
                    lineWidth: 0,
                    order: 3
                }
            }
        ];
        this.flotBarsOptions = {
            series: {
                bars: {
                    show: true,
                    barWidth: 12 * 24 * 60 * 60 * 350,
                    lineWidth: 0,
                    order: 1,
                    fillColor: {
                        colors: [{
                                opacity: 1
                            }, {
                                opacity: 0.7
                            }]
                    }
                }
            },
            xaxis: {
                mode: 'time',
                min: 1387497600000,
                max: 1400112000000,
                tickLength: 0,
                tickSize: [1, 'month'],
                axisLabel: 'Month',
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 13,
                axisLabelPadding: 15
            },
            yaxis: {
                axisLabel: 'Value',
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 13,
                axisLabelPadding: 5
            },
            grid: {
                hoverable: true,
                borderWidth: 0
            },
            legend: {
                backgroundColor: 'transparent',
                labelBoxBorderColor: 'none'
            },
            colors: ['#64bd63', '#f0b518', '#F7653F']
        };
    };
    return Charts;
}());
Charts = __decorate([
    core_1.Component({
        selector: '[charts]',
        templateUrl: './charts.template.html',
        styleUrls: ['./charts.style.scss'],
        encapsulation: core_1.ViewEncapsulation.None
    })
], Charts);
exports.Charts = Charts;
//# sourceMappingURL=charts.component.js.map
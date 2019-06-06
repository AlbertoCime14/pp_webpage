var chart = am4core.create("chartdiv", am4maps.MapChart);

AmCharts.addInitHandler(function (chart) {

    var dataProvider = chart.dataProvider;
    var areas = chart.dataProvider.areas;
    var colorRanges = dataProvider.colorRanges;

    // Based on https://www.sitepoint.com/javascript-generate-lighter-darker-color/
    function ColorLuminance(hex, lum) {

        // validate hex string
        hex = String(hex).replace(/[^0-9a-f]/gi, '');
        if (hex.length < 6) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        lum = lum || 0;

        // convert to decimal and change luminosity
        var rgb = "#", c, i;
        for (i = 0; i < 3; i++) {
            c = parseInt(hex.substr(i * 2, 2), 16);
            c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
            rgb += ("00" + c).substr(c.length);
        }

        return rgb;
    }

    if (colorRanges) {

        var item;
        var range;
        var average;
        var variation;
        for (var i = 0, iLen = areas.length; i < iLen; i++) {

            item = areas[i];

            for (var x = 0, xLen = colorRanges.length; x < xLen; x++) {

                range = colorRanges[x];

                if (item.value >= range.start && item.value <= range.end) {
                    average = (range.start - range.end) / 2;

                    if (item.value <= average)
                        variation = (range.variation * -1) / item.value * average;
                    else if (item.value > average)
                        variation = range.variation / item.value * average;

                    item.color = ColorLuminance(range.color, variation.toFixed(2));
                }
            }
        }
    }

}, ["map"]);

var map = AmCharts.makeChart("chartdiv", {
    "type": "map",
    "colorSteps": 10,

    "dataProvider": {
        "map": "wyCounties",
        "getAreasFromMap": true,
        "zoomLevel": 0.8,
        "colorRanges": [{
            "start": 0,
            "end": 10000,
            "color": "#0080FF",
            "variation": 0.4
        }, {
            "start": 10001,
            "end": 20000,
            "color": "#FF2626",
            "variation": 0.4
        }, {
            "start": 20001,
            "end": 100000,
            "color": "#00B22D",
            "variation": 0.4
        }],
        "areas": [{
            "id": "C56001",
            "value": 37276
        }, {
            "id": "C56003",
            "value": 11794
        }, {
            "id": "C56005",
            "value": 47874
        }, {
            "id": "C56007",
            "value": 15666
        }, {
            "id": "C56009",
            "value": 14008
        }, {
            "id": "C56011",
            "value": 7155
        }, {
            "id": "C56013",
            "value": 41110
        }, {
            "id": "C56015",
            "value": 13636
        }, {
            "id": "C56017",
            "value": 4822
        }, {
            "id": "C56019",
            "value": 8615
        }, {
            "id": "C56021",
            "value": 94483
        }, {
            "id": "C56023",
            "value": 17961
        }, {
            "id": "C56025",
            "value": 78621
        }, {
            "id": "C56027",
            "value": 2456
        }, {
            "id": "C56029",
            "value": 28702
        }, {
            "id": "C56031",
            "value": 8756
        }, {
            "id": "C56033",
            "value": 29596
        }, {
            "id": "C56035",
            "value": 10368
        }, {
            "id": "C56037",
            "value": 45267
        }, {
            "id": "C56039",
            "value": 21675
        }, {
            "id": "C56041",
            "value": 21025
        }, {
            "id": "C56043",
            "value": 8464
        }, {
            "id": "C56045",
            "value": 7082
        }],
        "images": [{
            "label": "Park",
            "labelPosition": "center",
            "latitude": 44.479931,
            "longitude": -109.460401,
            "mouseEnabled": false
        }, {
            "label": "Big Horn",
            "labelPosition": "center",
            "latitude": 44.417258,
            "longitude": -107.989466,
            "mouseEnabled": false
        }, {
            "label": "Sheridan",
            "labelPosition": "center",
            "latitude": 44.792287,
            "longitude": -106.906771,
            "mouseEnabled": false
        }, {
            "label": "Johnson",
            "labelPosition": "center",
            "latitude": 43.992456,
            "longitude": -106.567745,
            "mouseEnabled": false
        }, {
            "label": "Campbell",
            "labelPosition": "center",
            "latitude": 44.24456,
            "longitude": -105.545199,
            "mouseEnabled": false
        }, {
            "label": "Crook",
            "labelPosition": "center",
            "latitude": 44.573814,
            "longitude": -104.56093,
            "mouseEnabled": false
        }, {
            "label": "Weston",
            "labelPosition": "center",
            "latitude": 43.826428,
            "longitude": -104.500781,
            "mouseEnabled": false
        }, {
            "label": "Washakie",
            "labelPosition": "center",
            "latitude": 43.976664,
            "longitude": -107.639504,
            "mouseEnabled": false
        }, {
            "label": "Hot Springs",
            "labelPosition": "center",
            "latitude": 43.723417,
            "longitude": -108.580028,
            "mouseEnabled": false
        }, {
            "label": "Teton",
            "labelPosition": "center",
            "latitude": 43.834345,
            "longitude": -110.586842,
            "mouseEnabled": false
        }, {
            "label": "Fremont",
            "labelPosition": "center",
            "latitude": 43.021446,
            "longitude": -108.459728,
            "mouseEnabled": false
        }, {
            "label": "Sublette",
            "labelPosition": "center",
            "latitude": 42.731936,
            "longitude": -109.897854,
            "mouseEnabled": false
        }, {
            "label": "Lincoln",
            "labelPosition": "center",
            "latitude": 41.904286,
            "longitude": -110.543097,
            "mouseEnabled": false
        }, {
            "label": "Unita",
            "labelPosition": "center",
            "latitude": 41.27229,
            "longitude": -110.532161,
            "mouseEnabled": false
        }, {
            "label": "Sweetwater",
            "labelPosition": "center",
            "latitude": 41.65879,
            "longitude": -108.951863,
            "mouseEnabled": false
        }, {
            "label": "Natrona",
            "labelPosition": "center",
            "latitude": 42.933129,
            "longitude": -106.802876,
            "mouseEnabled": false
        }, {
            "label": "Carbon",
            "labelPosition": "center",
            "latitude": 41.740726,
            "longitude": -106.868494,
            "mouseEnabled": false
        }, {
            "label": "Albany",
            "labelPosition": "center",
            "latitude": 41.64239,
            "longitude": -105.676435,
            "mouseEnabled": false
        }, {
            "label": "Converse",
            "labelPosition": "center",
            "latitude": 42.981318,
            "longitude": -105.495986,
            "mouseEnabled": false
        }, {
            "label": "Niobrara",
            "labelPosition": "center",
            "latitude": 43.069566,
            "longitude": -104.462504,
            "mouseEnabled": false
        }, {
            "label": "Platte",
            "labelPosition": "center",
            "latitude": 42.091863,
            "longitude": -104.954638,
            "mouseEnabled": false
        }, {
            "label": "Goshen",
            "labelPosition": "center",
            "latitude": 42.083719,
            "longitude": -104.347672,
            "mouseEnabled": false
        }, {
            "label": "Laramie",
            "labelPosition": "center",
            "latitude": 41.255792,
            "longitude": -104.692166,
            "mouseEnabled": false
        }]
    },

    "areasSettings": {
        "autoZoom": true,
        "color": "#FF6600",
        "colorSolid": "#FF0000",
        "balloonText": "Population in [[title]]: <b>[[value]]</b>"
    },

    "imagesSettings": {
        "labelColor": "#ccc",
        "mouseEnabled": false
    },

    "zoomControl": {
        "minZoomLevel": 0.8
    },

    "legend": {
        "bottom": 10,
        "right": 10,
        "align": "center",
        "data": [{
            "color": "#0080FF",
            "title": "10,000"
        }, {
            "color": "#FF2626",
            "title": "20,000"
        }, {
            "color": "#00B22D",
            "title": "100,000"
        }]
    }

});
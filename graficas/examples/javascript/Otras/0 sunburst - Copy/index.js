am4core.useTheme(am4themes_animated);
// Themes end

/* Create chart instance */
var chart = am4core.create("chartdiv", am4charts.RadarChart);

/* Add data */
chart.data = [{
    "direction": "Servicios de salud deficientes",
    "value": 1465
}, {
    "direction": "Falta de oportunidades de trabajo",
    "value": 3374
}, {
    "direction": "Pobreza",
    "value": 1446
}, {
    "direction": "Ausencia de espacios culturales",
    "value": 29
}, {
    "direction": "Deteriorio del medio ambiente",
    "value": 256
}, {
    "direction": "Discriminación por género",
    "value": 28
}, {
    "direction": "Falta de centros de investigación",
    "value": 41
}, {
    "direction": "Inseguridad",
    "value": 1490
    },

    {
        "direction": "Corrupción",
        "value": 139
    }, {
        "direction": "Infraestructura insuficiente",
        "value": 125
    }, {
        "direction": "Salarios bajos",
        "value": 91
    }, 
    {
        "direction": "Insuficientes espacios educativos",
        "value": 917
    },

    {
        "direction": "Tramites complicados y excesivos",
        "value": 10
    }




];

/* Create axes */
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "direction";

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//valueAxis.renderer.gridType = "polygons";

//var range = categoryAxis.axisRanges.create();
//range.category = "NW";
//range.endCategory = "NW";
//range.axisFill.fill = am4core.color("#0066CC");
//range.axisFill.fillOpacity = 0.3;

//var range2 = categoryAxis.axisRanges.create();
//range2.category = "N";
//range2.endCategory = "N";
//range2.axisFill.fill = am4core.color("#0066CC");
//range2.axisFill.fillOpacity = 0.3;

//var range3 = categoryAxis.axisRanges.create();
//range3.category = "SE";
//range3.endCategory = "SW";
//range3.axisFill.fill = am4core.color("#CC3333");
//range3.axisFill.fillOpacity = 0.3;
//range3.locations.endCategory = 0;

/* Create and configure series */
var series = chart.series.push(new am4charts.RadarSeries());
series.dataFields.valueY = "value";
series.dataFields.categoryX = "direction";
series.name = "Wind direction";
//series.strokeWidth = 3;
series.fillOpacity = 0.2;
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

//Datos en Excel
//             2014    2015    2016
//Auditorios	0.20	0.14	0.24
//Bibliotecas	0.78	0.77	0.76
//Centros culturales	2.89	2.94	2.76


// Add data
chart.data = [{
    "Periodo": "2014",
    "Auditorios": 0.2,
    "Bibliotecas": 0.78,
    "Centros Culturales": 2.89
}, {
    "Periodo": "2015",
    "Auditorios": 0.14,
    "Bibliotecas": 0.77,
    "Centros Culturales": 2.89
}, {
    "Periodo": "2016",
    "Auditorios": 0.24,
    "Bibliotecas": 0.76,
    "Centros Culturales": 2.76
}];

// Create category axis
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Periodo";
categoryAxis.renderer.opposite = true;

// Create value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//valueAxis.renderer.inversed = true;
valueAxis.title.text = "Place taken";
valueAxis.renderer.minLabelPosition = 0.01;

// Create series
var series1 = chart.series.push(new am4charts.LineSeries());
series1.dataFields.valueY = "Auditorios";
series1.dataFields.categoryX = "Periodo";
series1.name = "Auditorios";
series1.strokeWidth = 3;
series1.bullets.push(new am4charts.CircleBullet());
series1.tooltipText = "Asistencia a {name} en {categoryX}: {valueY}";
series1.legendSettings.valueText = "{valueY}";
series1.visible = false;

var series2 = chart.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = "Bibliotecas";
series2.dataFields.categoryX = "Periodo";
series2.name = 'Bibliotecas';
series2.strokeWidth = 3;
series2.bullets.push(new am4charts.CircleBullet());
series2.tooltipText = "Asistencia a {name} en {categoryX}: {valueY}";
series2.legendSettings.valueText = "{valueY}";

var series3 = chart.series.push(new am4charts.LineSeries());
series3.dataFields.valueY = "Centros Culturales";
series3.dataFields.categoryX = "Periodo";
series3.name = 'Centros Culturales';
series3.strokeWidth = 3;
series3.bullets.push(new am4charts.CircleBullet());
series3.tooltipText = "Asistencia a {name} en {categoryX}: {valueY}";
series3.legendSettings.valueText = "{valueY}";

// Add chart cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "zoomY";

// Add legend
chart.legend = new am4charts.Legend();
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

//Datos en Excel
//             2014    2015    2016
//Auditorios	0.20	0.14	0.24
//Bibliotecas	0.78	0.77	0.76
//Centros culturales	2.89	2.94	2.76

//Colores de la gráfica
chart.colors.list = [
  am4core.color("#43355b"),
  am4core.color("#564476"),
  am4core.color("#695292"),
  am4core.color("#7e65aa"),
  am4core.color("#9580ba"),
  am4core.color("#ac9aca")
];

// Add data
chart.data = [{
    "Periodo": "2012",
    "Auditorios": 0.20,
    "Bibliotecas": 0.78,
    "Centros Culturales": 2.89,
    "Galerías": 0.98,
    "Museos": 1.37,
    "Teatros": 0.64
},{
    "Periodo": "2013",
    "Auditorios": 0.14,
    "Bibliotecas": 0.77,
    "Centros Culturales": 2.94,
    "Galerías": 1.06,
    "Museos": 1.40,
    "Teatros": 0.63
},{
    "Periodo": "2014",
    "Auditorios": 0.24,
    "Bibliotecas": 0.76,
    "Centros Culturales": 2.76,
    "Galerías": 1.29,
    "Museos": 1.43,
    "Teatros": 0.57
}, {
    "Periodo": "2015",
    "Auditorios": 0.38,
    "Bibliotecas": 0.75,
    "Centros Culturales": 2.72,
    "Galerías": 1.64,
    "Museos": 1.46,
    "Teatros": 0.66
}, {
    "Periodo": "2016",
    "Auditorios": 0.37,
    "Bibliotecas": 0.74,
    "Centros Culturales": 2.64,
    "Galerías": 1.95,
    "Museos": 1.21,
    "Teatros": 0.79
}, {
    "Periodo": "2017",
    "Auditorios": 0.64,
    "Bibliotecas": 0.73,
    "Centros Culturales": 2.61,
    "Galerías": 1.92,
    "Museos": 1.19,
    "Teatros": 0.78
},{
    "Periodo": "2018",
    "Auditorios": 0.59,
    "Bibliotecas": 0.72,
    "Centros Culturales": 2.67,
    "Galerías": 1.90,
    "Museos": 1.22,
    "Teatros": 0.77
}];

// Create category axis
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Periodo";
categoryAxis.renderer.opposite = true;

// Create value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//valueAxis.renderer.inversed = true;
valueAxis.title.text = "";
valueAxis.renderer.minLabelPosition = 0.01;

// Primera gráfica inferior
var series1 = chart.series.push(new am4charts.LineSeries());
series1.dataFields.valueY = "Auditorios";
series1.dataFields.categoryX = "Periodo";
series1.name = "Auditorios";
series1.strokeWidth = 3;
series1.bullets.push(new am4charts.CircleBullet());
series1.tooltipText = "Asistencia a {name} en {categoryX}: {valueY}";
series1.legendSettings.valueText = "{valueY}";
series1.visible = false;

var bullet1 = series1.bullets.push(new am4charts.LabelBullet());
bullet1.interactionsEnabled = false;
bullet1.label.text = "{valueY.value}";
bullet1.label.fill = am4core.color("#FFFFFF");
bullet1.label.background.fill = am4core.color("#43355b");
bullet1.locationY = 0.01;
bullet1.label.dy = 10;

//Tercera gráfica inferior
var series2 = chart.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = "Bibliotecas";
series2.dataFields.categoryX = "Periodo";
series2.name = 'Bibliotecas';
series2.strokeWidth = 3;
series2.bullets.push(new am4charts.CircleBullet());
series2.tooltipText = "Asistencia a {name} en {categoryX}: {valueY}";
series2.legendSettings.valueText = "{valueY}";
var bullet1 = series2.bullets.push(new am4charts.LabelBullet());
bullet1.interactionsEnabled = false;
bullet1.label.text = "{valueY.value}";
bullet1.label.fill = am4core.color("#FFFFFF");
bullet1.label.background.fill = am4core.color("#564476");
bullet1.locationY = 0.01;
bullet1.label.dy = -20;

//Primera superior (6)
var series3 = chart.series.push(new am4charts.LineSeries());
series3.dataFields.valueY = "Centros Culturales";
series3.dataFields.categoryX = "Periodo";
series3.name = 'Centros Culturales';
series3.strokeWidth = 3;
series3.bullets.push(new am4charts.CircleBullet());
series3.tooltipText = "Asistencia a {name} en {categoryX}: {valueY}";
series3.legendSettings.valueText = "{valueY}";
var bullet1 = series3.bullets.push(new am4charts.LabelBullet());
bullet1.interactionsEnabled = false;
bullet1.label.text = "{valueY.value}";
bullet1.label.fill = am4core.color("#FFFFFF");
bullet1.label.background.fill = am4core.color("#695292");
bullet1.locationY = 0.01;
bullet1.label.dy = -20;

var series4 = chart.series.push(new am4charts.LineSeries());
series4.dataFields.valueY = "Galerías";
series4.dataFields.categoryX = "Periodo";
series4.name = 'Galerías';
series4.strokeWidth = 3;
series4.bullets.push(new am4charts.CircleBullet());
series4.tooltipText = "Asistencia a {name} en {categoryX}: {valueY}";
series4.legendSettings.valueText = "{valueY}";
var bullet1 = series4.bullets.push(new am4charts.LabelBullet());
bullet1.interactionsEnabled = false;
bullet1.label.text = "{valueY.value}";
bullet1.label.fill = am4core.color("#FFFFFF");
bullet1.label.background.fill = am4core.color("#7e65aa");
bullet1.locationY = 0.01;
bullet1.label.dy = -20;

var series5 = chart.series.push(new am4charts.LineSeries());
series5.dataFields.valueY = "Museos";
series5.dataFields.categoryX = "Periodo";
series5.name = 'Museos';
series5.strokeWidth = 3;
series5.bullets.push(new am4charts.CircleBullet());
series5.tooltipText = "Asistencia a {name} en {categoryX}: {valueY}";
series5.legendSettings.valueText = "{valueY}";
var bullet1 = series5.bullets.push(new am4charts.LabelBullet());
bullet1.interactionsEnabled = false;
bullet1.label.text = "{valueY.value}";
bullet1.label.fill = am4core.color("#FFFFFF");
bullet1.label.background.fill = am4core.color("#ac9aca");
bullet1.locationY = 0.01;
bullet1.label.dy = -20;

var series6 = chart.series.push(new am4charts.LineSeries());
series6.dataFields.valueY = "Teatros";
series6.dataFields.categoryX = "Periodo";
series6.name = 'Teatros';
series6.strokeWidth = 3;
series6.bullets.push(new am4charts.CircleBullet());
series6.tooltipText = "Asistencia a {name} en {categoryX}: {valueY}";
series6.legendSettings.valueText = "{valueY}";
var bullet1 = series6.bullets.push(new am4charts.LabelBullet());
bullet1.interactionsEnabled = false;
bullet1.label.text = "{valueY.value}";
bullet1.label.fill = am4core.color("#FFFFFF");
bullet1.label.background.fill = am4core.color("#ac9aca");
bullet1.locationY = 0.01;
bullet1.label.dy = 12;

// Add chart cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "zoomY";

// Add legend
chart.legend = new am4charts.Legend();
//chart.exporting.menu = new am4core.ExportMenu();
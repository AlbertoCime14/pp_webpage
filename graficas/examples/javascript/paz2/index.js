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
chart.data = [
 {
   "Periodo": "2013",
   "Entidad Federativa": 32.2,
   "Municipio": 33.5,
   "Colonia o localidad": 27.2
 },
 {
   "Periodo": "2014",
   "Entidad Federativa": 29.5,
   "Municipio": 34,
   "Colonia o localidad": 28.2
 },
 {
   "Periodo": "2015",
   "Entidad Federativa": 33.8,
   "Municipio": 37.9,
   "Colonia o localidad": 33.3
 },
 {
   "Periodo": "2016",
   "Entidad Federativa": 31.5,
   "Municipio": 37.3,
   "Colonia o localidad": 33.4
 },
 {
   "Periodo": "2017",
   "Entidad Federativa": 27.2,
   "Municipio": 34.6,
   "Colonia o localidad": 30.5
 },
 {
   "Periodo": "2018",
   "Entidad Federativa": 32.5,
   "Municipio": 37,
   "Colonia o localidad": 31.2
 }
];

// Create category axis
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Periodo";
categoryAxis.renderer.opposite = true;

// Create value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//valueAxis.renderer.inversed = true;
valueAxis.title.text = "% de población de 18 años y más";
valueAxis.renderer.minLabelPosition = 0.01;
valueAxis.min = 0;
// Create series
var series1 = chart.series.push(new am4charts.LineSeries());
series1.dataFields.valueY = "Entidad Federativa";
series1.dataFields.categoryX = "Periodo";
series1.name = "Entidad Federativa";
series1.strokeWidth = 3;
series1.bullets.push(new am4charts.CircleBullet());
series1.tooltipText = "Asistencia a {name} en {categoryX}: {valueY}";
series1.legendSettings.valueText = "{valueY}";
series1.visible = false;
series1.stroke = am4core.color('#1D1D1B');

var bullet1 = series1.bullets.push(new am4charts.LabelBullet());
bullet1.interactionsEnabled = false;
bullet1.label.text = "{valueY.value}";
bullet1.label.fill = am4core.color("#FFFFFF");
bullet1.label.background.fill = am4core.color("#4c4c44");
bullet1.locationY = 0.01;
bullet1.label.dy = -40;

var series2 = chart.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = "Colonia o localidad";
series2.dataFields.categoryX = "Periodo";
series2.name = 'Colonia o localidad';
series2.strokeWidth = 3;
series2.bullets.push(new am4charts.CircleBullet());
series2.tooltipText = "Asistencia a {name} en {categoryX}: {valueY}";
series2.legendSettings.valueText = "{valueY}";
series2.stroke = am4core.color('#4b4b42');

var bullet1 = series2.bullets.push(new am4charts.LabelBullet());
bullet1.interactionsEnabled = false;
bullet1.label.text = "{valueY.value}";
bullet1.label.fill = am4core.color("#FFFFFF");
bullet1.label.background.fill = am4core.color("#4b4b42");
bullet1.locationY = 0.01;
bullet1.label.dy = 7;


var series3 = chart.series.push(new am4charts.LineSeries());
series3.dataFields.valueY = "Municipio";
series3.dataFields.categoryX = "Periodo";
series3.name = 'Municipio';
series3.strokeWidth = 3;
series3.bullets.push(new am4charts.CircleBullet());
series3.tooltipText = "Asistencia a {name} en {categoryX}: {valueY}";
series3.legendSettings.valueText = "{valueY}";
series3.stroke = am4core.color('#888873');

var bullet1 = series3.bullets.push(new am4charts.LabelBullet());
bullet1.interactionsEnabled = false;
bullet1.label.text = "{valueY.value}";
bullet1.label.fill = am4core.color("#FFFFFF");
bullet1.label.background.fill = am4core.color("#888873");
bullet1.locationY = 0.01;
bullet1.label.dy = 3;

// Add chart cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "zoomY";

// Add legend
chart.legend = new am4charts.Legend();
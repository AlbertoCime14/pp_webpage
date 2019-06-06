am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

//Datos en Excel
//             2014    2015    2016
//Auditorios	0.20	0.14	0.24
//Bibliotecas	0.78	0.77	0.76
//Centros culturales	2.89	2.94	2.76

chart.colors.list = [
    am4core.color("#3813B9"),
    am4core.color("#2B00FF"),
    am4core.color("#4387C3"),
    am4core.color("#79B7EE")

];

// Add data
chart.data = [
 {
   "Periodo": "2010",
   "Radio": 78.9,
   "TV": 92.7,
   "Telefono": 81.6,
   "Internet": 20.5
 },
 {
   "Periodo": "2011",
   "Radio": 75.7,
   "TV": 95.2,
   "Telefono": 81.9,
   "Internet": 23.3
 },
 {
   "Periodo": "2013",
   "Radio": 72.4,
   "TV": 94.9,
   "Telefono": 86.8,
   "Internet": 25.3
 },
 {
   "Periodo": "2014",
   "Radio": 69.8,
   "TV": 95.1,
   "Telefono": 79.2,
   "Internet": 30.2
 },
 {
   "Periodo": "2015",
   "Radio": 61.4,
   "TV": 94.3,
   "Telefono": 90.2,
   "Internet": 47.3
 },
 {
   "Periodo": "2016",
   "Radio": 57.6,
   "TV": 94.7,
   "Telefono": 89,
   "Internet": 59
 }
];

// Create category axis
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Periodo";
//categoryAxis.renderer.opposite = true;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.max = 100;
valueAxis.renderer.minLabelPosition = 0.01;
valueAxis.strictMinMax = true;

// Create series
var series1 = chart.series.push(new am4charts.LineSeries());
series1.dataFields.valueY = "Radio";
series1.dataFields.categoryX = "Periodo";
series1.name = "Radio";
series1.strokeWidth = 3;
//series1.bullets.push(new am4charts.CircleBullet());
series1.stroke = am4core.color("#3813B9");
series1.fill = am4core.color("#3813B9");
series1.tooltipText = "Usuarios de {categoryX} en {name}: {valueY}";
series1.legendSettings.valueText = "{valueY}";
series1.visible = false;

var bullet1 = series1.bullets.push(new am4charts.LabelBullet());
bullet1.interactionsEnabled = false;
bullet1.label.text = "{valueY.value}";
bullet1.label.fill = am4core.color("#FFFFFF");
bullet1.label.background.fill = am4core.color("#3813B9");
bullet1.locationY = 0.01;
bullet1.label.dy = -20;

var series2 = chart.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = "TV";
series2.dataFields.categoryX = "Periodo";
series2.name = 'TV';
series2.strokeWidth = 3;
//series2.bullets.push(new am4charts.CircleBullet());
series2.tooltipText = "Usuarios de {categoryX} en {name}: {valueY}";
series2.legendSettings.valueText = "{valueY}";
series2.visible = false;
series2.stroke = am4core.color("#2B00FF");
series2.fill = am4core.color("#2B00FF");
var bullet1 = series2.bullets.push(new am4charts.LabelBullet());
bullet1.interactionsEnabled = false;
bullet1.label.text = "{valueY.value}";
bullet1.label.fill = am4core.color("#FFFFFF");
bullet1.label.background.fill = am4core.color("#2B00FF");
bullet1.locationY = 0.01;
bullet1.label.dy = -20;






var series3 = chart.series.push(new am4charts.LineSeries());
series3.dataFields.valueY = "Telefono";
series3.dataFields.categoryX = "Periodo";
series3.name = 'Telefono';
series3.strokeWidth = 3;
//series2.bullets.push(new am4charts.CircleBullet());
series3.tooltipText = "Usuarios de {categoryX} en {name}: {valueY}";
series3.legendSettings.valueText = "{valueY}";
series3.visible = false;
series3.stroke = am4core.color("#4387C3");
series3.fill = am4core.color("#4387C3");


var bullet1 = series3.bullets.push(new am4charts.LabelBullet());
bullet1.interactionsEnabled = false;
bullet1.label.text = "{valueY.value}";
bullet1.label.fill = am4core.color("#FFFFFF");
bullet1.label.background.fill = am4core.color("#4387C3");
bullet1.locationY = 0.01;
bullet1.label.dy = 10;


var series4 = chart.series.push(new am4charts.LineSeries());
series4.dataFields.valueY = "Internet";
series4.dataFields.categoryX = "Periodo";
series4.name = 'Internet';
series4.strokeWidth = 3;
//series2.bullets.push(new am4charts.CircleBullet());
series4.tooltipText = "Usuarios de {categoryX} en {name}: {valueY}";
series4.legendSettings.valueText = "{valueY}";
series4.visible = false;
series4.stroke = am4core.color("#79B7EE");
series4.fill = am4core.color("#79B7EE");



var bullet1 = series4.bullets.push(new am4charts.LabelBullet());
bullet1.interactionsEnabled = false;
bullet1.label.text = "{valueY.value}";
bullet1.label.fill = am4core.color("#FFFFFF");
bullet1.label.background.fill = am4core.color("#79B7EE");
bullet1.locationY = 0.01;
bullet1.label.dy = 10;

// Add chart cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "zoomY";

// Add legend
chart.legend = new am4charts.Legend();
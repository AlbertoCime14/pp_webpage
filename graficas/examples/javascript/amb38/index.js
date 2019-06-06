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
    am4core.color("#95C11F")
];


// Add data
chart.data =[
 {
   "Descripcion": "2007",
   "Tasa": 2.8
 },
 {
   "Descripcion": "2008",
   "Tasa": 1
 },
 {
   "Descripcion": "2009",
   "Tasa": 0.7
 },
 {
   "Descripcion": "2010",
   "Tasa": 1.2
 },
 {
   "Descripcion": "2011",
   "Tasa": 1.7
 },
 {
   "Descripcion": "2012",
   "Tasa": 1.9
 },
 {
   "Descripcion": "2013",
   "Tasa": 2.7
 },
 {
   "Descripcion": "2014",
   "Tasa": 2.4
 },
 {
   "Descripcion": "2015",
   "Tasa": 9.6
 },
 {
   "Descripcion": "2016",
   "Tasa": 14.2
 },
 {
   "Descripcion": "2017",
   "Tasa": 11.6
 }
];


var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());

// Create value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "";
categoryAxis.title.text = "Tasa";
valueAxis.renderer.minLabelPosition = 0.01;

categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.ticks.template.disabled = true;
categoryAxis.renderer.line.opacity = 0;
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.minGridDistance = 40;
categoryAxis.dataFields.category = "Descripcion";

categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;

var lineSeries = chart.series.push(new am4charts.LineSeries());
lineSeries.dataFields.categoryX = "Descripcion";
lineSeries.dataFields.valueY = "Tasa";
lineSeries.sequencedInterpolation = true;
lineSeries.defaultState.transitionDuration = 1500;
lineSeries.stroke = am4core.color("#95C11F"); //chart.colors.getIndex(11);
lineSeries.fill = lineSeries.stroke;
lineSeries.strokeWidth = 2;

var bullet1 = lineSeries.bullets.push(new am4charts.LabelBullet());
bullet1.interactionsEnabled = false;
bullet1.label.text = "{valueY.value}";
bullet1.label.fill = am4core.color("#FFFFFF");
bullet1.label.background.fill = am4core.color("#95C11F");
//bullet1.locationY = 0.1;
//bullet1.label.dy = -220;


//chart.exporting.menu = new am4core.ExportMenu();

chart.legend = new am4charts.Legend();


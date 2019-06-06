am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);


chart.data = [
 {
   "Año": "2012",
   "Oro": 3,
   "Plata": 7,
   "Bronce": 3
 },
 {
   "Año": "2013",
   "Oro": 15,
   "Plata": 5,
   "Bronce": 4
 },
 {
   "Año": "2014",
   "Oro": 13,
   "Plata": 12,
   "Bronce": 5
 },
 {
   "Año": "2015",
   "Oro": 28,
   "Plata": 23,
   "Bronce": 13
 },
 {
   "Año": "2016",
   "Oro": 37,
   "Plata": 23,
   "Bronce": 18
 },
 {
   "Año": "2017",
   "Oro": 44,
   "Plata": 14,
   "Bronce": 11
 },
 {
   "Año": "2018",
   "Oro": 41,
   "Plata": 17,
   "Bronce": 10
 }
];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Año";
categoryAxis.title.text = "Metales";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 20;
categoryAxis.renderer.cellStartLocation = 0.1;
categoryAxis.renderer.cellEndLocation = 0.9;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.title.text = "";

// Create series
function createSeries(field, name, stacked, color) {
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "Año";
    series.name = name;
    series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
    series.stacked = stacked;
    series.columns.template.width = am4core.percent(95);
    series.fill = am4core.color(color);
    var bullet1 = series.bullets.push(new am4charts.LabelBullet());
bullet1.interactionsEnabled = false;
bullet1.label.text = "{valueY.value}";
bullet1.label.fill = am4core.color("#ffffff");
bullet1.locationY = 0.5;
}


createSeries("Oro", "Oro", true, "#43355b");
createSeries("Plata", "Plata", true, "#695292");
createSeries("Bronce", "Bronce", true, "#9580ba");

// Add legend
chart.legend = new am4charts.Legend();

//Etiquetas debajo de la barra vertical centradas
categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;
//chart.exporting.menu = new am4core.ExportMenu();
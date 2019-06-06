am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);


chart.data = [
 {
   "Año": "2008",
   "Población no pobre y no vulnerable": 18.7,
   "Población vulnerable por ingresos":4.7,
   "Población en carencias sociales": 29.5,
   "Población en situación de pobreza extrema":8.9,
   "Poblacion en Pobreza moderada": 38.2
 },
 {
   "Año": "2010",
   "Población no pobre y no vulnerable": 19.2,
   "Población vulnerable por ingresos":6.4,
   "Población en carencias sociales": 26,
   "Población en situación de pobreza extrema":11.7,
   "Poblacion en Pobreza moderada":36.6
 },
 {
   "Año": "2012",
   "Población no pobre y no vulnerable": 17.9,
   "Población vulnerable por ingresos":6.3,
   "Población en carencias sociales": 27,
   "Población en situación de pobreza extrema":9.8,
   "Poblacion en Pobreza moderada": 39
 },
 {
   "Año": "2014",
   "Población no pobre y no vulnerable": 19.5,
   "Población vulnerable por ingresos":7,
   "Población en carencias sociales": 27.7,
   "Población en situación de pobreza extrema":10.7,
   "Poblacion en Pobreza moderada": 35.9
 },
 {
   "Año": "2015",
   "Población no pobre y no vulnerable": 21.9,
   "Población vulnerable por ingresos":6.6,
   "Población en carencias sociales": 29.7,
   "Población en situación de pobreza extrema":8,
   "Poblacion en Pobreza moderada": 33.8
 },
 {
   "Año": "2016",
   "Población no pobre y no vulnerable": 19.9,
   "Población vulnerable por ingresos":5.7,
   "Población en carencias sociales": 32.5,
   "Población en situación de pobreza extrema":6.1,
   "Poblacion en Pobreza moderada": 35.7
 }
];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Año";
categoryAxis.title.text = "Períodos";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 20;
categoryAxis.renderer.cellStartLocation = 0.1;
categoryAxis.renderer.cellEndLocation = 0.9;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.title.text = "Porcentaje";
valueAxis.max = 90;

// Create series
function createSeries(field, name, stacked, color) {
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "Año";
    series.name = name;
    series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
    series.stacked = stacked;
    series.columns.template.stroke = am4core.color(color);
    series.columns.template.width = am4core.percent(95);
    series.fill = am4core.color(color);
    var bullet1 = series.bullets.push(new am4charts.LabelBullet());
    bullet1.interactionsEnabled = false;
    bullet1.label.text = "{valueY.value}";
    bullet1.label.fill = am4core.color("#ffffff");
    bullet1.locationY = 0.5;
    bullet1.label.truncate = false;
    bullet1.label.hideOversized = false;
}


createSeries("Poblacion en Pobreza moderada", "Poblacion en pobreza moderada", true, "#0C3F6C");
createSeries("Población vulnerable por ingresos", "Población vulnerable por ingresos", true, "#1261a6");
createSeries("Población en carencias sociales", "Población en carencias sociales", true, "#3193ea");
createSeries("Población en situación de pobreza extrema", "Población en situación de pobreza extrema", true, "#65aff1");
createSeries("Población no pobre y no vulnerable", "Población no pobre y no vulnerable", true, "#84bff4");
// Add legend
chart.legend = new am4charts.Legend();

//Etiquetas debajo de la barra vertical centradas
categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
//categoryAxis.renderer.labels.template.rotation = 270;
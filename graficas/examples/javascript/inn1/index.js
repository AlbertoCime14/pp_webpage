am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);


chart.data = [
 {
   "Entidad Federativa": "Ciudad de México",
   "fillOpacity": 0.5,
   "2014": 89,
   "2015": 89,
   "2016": 102,
   "2017": 91
 },
 {
   "Entidad Federativa": "México",
   "fillOpacity": 0.5,
   "2014": 42,
   "2015": 39,
   "2016": 63,
   "2017": 63
 },
 {
   "Entidad Federativa": "Jalisco",
   "fillOpacity": 0.5,
   "2014": 33,
   "2015": 37,
   "2016": 49,
   "2017": 46
 },
 {
   "Entidad Federativa": "Nuevo León",
   "fillOpacity": 0.5,
   "2014": 37,
   "2015": 38,
   "2016": 41,
   "2017": 40
 },
 {
   "Entidad Federativa": "Guanajuato",
   "fillOpacity": 0.5,
   "2014": 29,
   "2015": 27,
   "2016": 36,
   "2017": 36
 },
 {
   "Entidad Federativa": "Puebla",
   "fillOpacity": 0.5,
   "2014": 25,
   "2015": 23,
   "2016": 36,
   "2017": 35
 },
 {
   "Entidad Federativa": "Veracruz",
   "fillOpacity": 0.5,
   "2014": 21,
   "2015": 22,
   "2016": 34,
   "2017": 33
 },
 {
   "Entidad Federativa": "Coahuila",
   "fillOpacity": 0.5,
   "2014": 21,
   "2015": 22,
   "2016": 30,
   "2017": 31
 },
 {
   "Entidad Federativa": "Sonora",
   "fillOpacity": 0.5,
   "2014": 17,
   "2015": 19,
   "2016": 29,
   "2017": 26
 },
 {
   "Entidad Federativa": "Querétaro",
   "fillOpacity": 0.5,
   "2014": 24,
   "2015": 24,
   "2016": 27,
   "2017": 25
 },
 {
   "Entidad Federativa": "Promedio Nacional",
   "fillOpacity": 0.5,
   "2014": 19,
   "2015": 19,
   "2016": 25,
   "2017": 25
 },
 {
   "Entidad Federativa": "Chihuahua",
   "fillOpacity": 0.5,
   "2014": 16,
   "2015": 18,
   "2016": 25,
   "2017": 24
 },
 {
   "Entidad Federativa": "Tamaulipas",
   "fillOpacity": 0.5,
   "2014": 22,
   "2015": 19,
   "2016": 23,
   "2017": 23
 },
 {
   "Entidad Federativa": "Hidalgo",
   "fillOpacity": 0.5,
   "2014": 20,
   "2015": 17,
   "2016": 23,
   "2017": 22
 },
 {
   "Entidad Federativa": "Baja California",
   "fillOpacity": 0.5,
   "2014": 20,
   "2015": 21,
   "2016": 23,
   "2017": 22
 },
 {
   "Entidad Federativa": "Michoacán",
   "fillOpacity": 0.5,
   "2014": 15,
   "2015": 17,
   "2016": 22,
   "2017": 21
 },
 {
   "Entidad Federativa": "[font-size: 20px; font-weight: bold;]Yucatán[/]",
   "fillOpacity": 1,
   "2014": 14,
   "2015": 16,
   "2016": 22,
   "2017": 20
 },
 {
   "Entidad Federativa": "Morelos",
   "fillOpacity": 0.5,
   "2014": 17,
   "2015": 18,
   "2016": 21,
   "2017": 19
 },
 {
   "Entidad Federativa": "San Luis Potosí",
   "fillOpacity": 0.5,
   "2014": 15,
   "2015": 14,
   "2016": 18,
   "2017": 18
 },
 {
   "Entidad Federativa": "Chiapas",
   "fillOpacity": 0.5,
   "2014": 11,
   "2015": 10,
   "2016": 18,
   "2017": 17
 },
 {
   "Entidad Federativa": "Sinaloa",
   "fillOpacity": 0.5,
   "2014": 14,
   "2015": 12,
   "2016": 17,
   "2017": 17
 },
 {
   "Entidad Federativa": "Tabasco",
   "fillOpacity": 0.5,
   "2014": 15,
   "2015": 12,
   "2016": 16,
   "2017": 17
 },
 {
   "Entidad Federativa": "Oaxaca",
   "fillOpacity": 0.5,
   "2014": 12,
   "2015": 13,
   "2016": 16,
   "2017": 16
 },
 {
   "Entidad Federativa": "Aguascalientes",
   "fillOpacity": 0.5,
   "2014": 10,
   "2015": 12,
   "2016": 16,
   "2017": 14
 },
 {
   "Entidad Federativa": "Durango",
   "fillOpacity": 0.5,
   "2014": 11,
   "2015": 8,
   "2016": 15,
   "2017": 14
 },
 {
   "Entidad Federativa": "Zacatecas",
   "fillOpacity": 0.5,
   "2014": 9,
   "2015": 7,
   "2016": 12,
   "2017": 12
 },
 {
   "Entidad Federativa": "Campeche",
   "fillOpacity": 0.5,
   "2014": 5,
   "2015": 6,
   "2016": 12,
   "2017": 11
 },
 {
   "Entidad Federativa": "Baja California Sur",
   "fillOpacity": 0.5,
   "2014": 8,
   "2015": 8,
   "2016": 11,
   "2017": 11
 },
 {
   "Entidad Federativa": "Guerrero",
   "fillOpacity": 0.5,
   "2014": 5,
   "2015": 5,
   "2016": 11,
   "2017": 10
 },
 {
   "Entidad Federativa": "Quintana Roo",
   "fillOpacity": 0.5,
   "2014": 8,
   "2015": 6,
   "2016": 10,
   "2017": 10
 },
 {
   "Entidad Federativa": "Tlaxcala",
   "fillOpacity": 0.5,
   "2014": 7,
   "2015": 6,
   "2016": 10,
   "2017": 8
 },
 {
   "Entidad Federativa": "Colima",
   "fillOpacity": 0.5,
   "2014": 7,
   "2015": 8,
   "2016": 8,
   "2017": 8
 },
 {
   "Entidad Federativa": "Nayarit",
   "fillOpacity": 0.5,
   "2014": 7,
   "2015": 7,
   "2016": 8,
   "2017": 6
 }
];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Entidad Federativa";
categoryAxis.title.text = "Entidad Federativa";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 1;
categoryAxis.renderer.cellStartLocation = 0.1;
categoryAxis.renderer.cellEndLocation = 0.9;
categoryAxis.renderer.labels.template.rotation = 270;

categoryAxis.renderer.labels.template.dx = -25;


var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.title.text = "Personas";

// Create series
function createSeries(field, name, stacked, color) {
   var series = chart.series.push(new am4charts.ColumnSeries());
   series.dataFields.valueY = field;
   series.dataFields.categoryX = "Entidad Federativa";
   series.name = name;
   series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
   series.columns.template.fill = am4core.color(color);
   series.columns.template.stroke = am4core.color(color);
   series.columns.template.propertyFields.fillOpacity = "fillOpacity";
   series.stacked = stacked;
   series.columns.template.width = am4core.percent(95);


   var bullet1 = series.bullets.push(new am4charts.LabelBullet());
   bullet1.interactionsEnabled = false;
   bullet1.label.text = "{valueY.value}";
   bullet1.label.fill = am4core.color("#ffffff");
   bullet1.locationY = 0.5;
}

//createSeries("Entidad Federativa", "Entidad Federativa", false);
createSeries("2014", "2014", true, "#034962");
createSeries("2015", "2015", true, "#037aa5");
createSeries("2016", "2016", true, "#03bbfc");
createSeries("2017", "2017", true, "#5ed5ff");



// Add legend
chart.legend = new am4charts.Legend();
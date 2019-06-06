am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

//chart.language = "";

var data = [];

chart.data = [
 {
   "Entidad": "Chiapas",
   "Rezago": 29,
   "Nacional": 17.4,
   "opacity": 0.5
 },
 {
   "Entidad": "Michoacán",
   "Rezago": 27.4,
   "Nacional": 17.4,
   "opacity": 0.5
 },
 {
   "Entidad": "Oaxaca",
   "Rezago": 27.3,
   "Nacional": 17.4,
   "opacity": 0.5
 },
 {
   "Entidad": "Veracruz",
   "Rezago": 25.7,
   "Nacional": 17.4,
   "opacity": 0.5
 },
 {
   "Entidad": "Guerrero",
   "Rezago": 25.2,
   "Nacional": 17.4,
   "opacity": 0.5
 },
 {
   "Entidad": "[font-size: 20px; font-weight: bold;]Yucatán[/]",
   "Rezago": 20.6,
   "Nacional": 17.4,
   "opacity": 1
 },
 {
   "Entidad": "Guanajuato",
   "Rezago": 20.1,
   "Nacional": 17.4,
   "opacity": 0.5
 },
 {
   "Entidad": "Puebla",
   "Rezago": 19.9,
   "Nacional": 17.4,
   "opacity": 0.5
 },
 {
   "Entidad": "Hidalgo",
   "Rezago": 18.5,
   "Nacional": 17.4,
   "opacity": 0.5
 },
 {
   "Entidad": "Zacatecas",
   "Rezago": 17.7,
   "Nacional": 17.4,
   "opacity": 0.5
 },
 {
   "Entidad": "San Luis Potosí",
   "Rezago": 17.5,
   "Nacional": 17.4,
   "opacity": 0.5
 },
 {
   "Entidad": "Campeche",
   "Rezago": 17.2,
   "Nacional": 17.4,
   "opacity": 0.5
 },
 {
   "Entidad": "Nayarit",
   "Rezago": 16.8,
   "Nacional": 17.4,
   "opacity": 0.5
 },
 {
   "Entidad": "Tabasco",
   "Rezago": 16.5,
   "Nacional": 17.4,
   "opacity": 0.5
 },
 {
   "Entidad": "Morelos",
   "Rezago": 16.4,
   "Nacional": 17.4,
   "opacity": 0.5
 },
 {
   "Entidad": "Jalisco",
   "Rezago": 16.3,
   "Nacional": 17.4,
   "opacity": 0.5
 },
 {
   "Entidad": "Colima",
   "Rezago": 16.3,
   "Nacional": 17.4,
   "opacity": 0.5
 },
 {
   "Entidad": "Sinaloa",
   "Rezago": 15.8,
   "Nacional": 17.4,
   "opacity": 0.5
 },
 {
   "Entidad": "Chihuahua",
   "Rezago": 15.7,
   "Nacional": 17.4,
   "opacity": 0.5
 },
 {
   "Entidad": "Quintana Roo",
   "Rezago": 15,
   "Nacional": 17.4,
   "opacity": 0.5
 },
 {
   "Entidad": "Durango",
   "Rezago": 14.4,
   "Nacional": 17.4,
   "opacity": 0.5
 },
 {
   "Entidad": "Tamaulipas",
   "Rezago": 14.3,
   "Nacional": 17.4,
   "opacity": 0.5
 },
 {
   "Entidad": "Querétaro",
   "Rezago": 14.2,
   "Nacional": 17.4,
   "opacity": 0.5
 },
 {
   "Entidad": "Aguascalientes",
   "Rezago": 13.9,
   "Nacional": 17.4,
   "opacity": 0.5
 },
 {
   "Entidad": "México",
   "Rezago": 13.7,
   "Nacional": 17.4,
   "opacity": 0.5
 },
 {
   "Entidad": "Baja California Sur",
   "Rezago": 13.4,
   "Nacional": 17.4,
   "opacity": 0.5
 },
 {
   "Entidad": "Baja California",
   "Rezago": 13.3,
   "Nacional": 17.4,
   "opacity": 0.5
 },
 {
   "Entidad": "Tlaxcala",
   "Rezago": 13,
   "Nacional": 17.4,
   "opacity": 0.5
 },
 {
   "Entidad": "Coahuila",
   "Rezago": 12.3,
   "Nacional": 17.4,
   "opacity": 0.5
 },
 {
   "Entidad": "Sonora",
   "Rezago": 12.3,
   "Nacional": 17.4,
   "opacity": 0.5
 },
 {
   "Entidad": "Nuevo León",
   "Rezago": 10.7,
   "Nacional": 17.4,
   "opacity": 0.5
 },
 {
   "Entidad": "Ciudad de México",
   "Rezago": 8.4,
   "Nacional": 17.4,
   "opacity": 0.5
 }
];

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.ticks.template.disabled = true;
categoryAxis.renderer.line.opacity = 0;
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.minGridDistance = 40;
categoryAxis.dataFields.category = "Entidad";

categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.renderer.line.opacity = 0;
valueAxis.renderer.ticks.template.disabled = true;
valueAxis.min = 0;
valueAxis.max = 30;

var columnSeries = chart.series.push(new am4charts.ColumnSeries());
columnSeries.dataFields.categoryX = "Entidad";
columnSeries.dataFields.valueY = "Rezago";
columnSeries.tooltipText = "Rezago educativo: {valueY.value}";
columnSeries.sequencedInterpolation = true;
columnSeries.defaultState.transitionDuration = 1500;
columnSeries.fill = am4core.color("#0C3F6C");//   chart.colors.getIndex(1);
//Valores de las barras verticales
var valueLabel = columnSeries.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY}";
valueLabel.label.dy = -20;
valueLabel.label.truncate = false;
valueLabel.label.hideOversized = false;

var columnTemplate = columnSeries.columns.template;
//columnTemplate.column.cornerRadiusTopLeft = 10;
//columnTemplate.column.cornerRadiusTopRight = 10;
columnTemplate.strokeWidth = 1;
columnTemplate.strokeOpacity = 1;
columnTemplate.stroke = columnSeries.fill;

var desaturateFilter = new am4core.DesaturateFilter();
desaturateFilter.saturation = 0.5;

columnTemplate.filters.push(desaturateFilter);

// first way - get properties from data. but can only be done with columns, as they are separate objects.    
columnTemplate.propertyFields.strokeDasharray = "stroke";
columnTemplate.propertyFields.fillOpacity = "opacity";

// add some cool saturation effect on hover
var desaturateFilterHover = new am4core.DesaturateFilter();
desaturateFilterHover.saturation = 1;

var hoverState = columnTemplate.states.create("hover");
hoverState.transitionDuration = 2000;
hoverState.filters.push(desaturateFilterHover);

var lineSeries = chart.series.push(new am4charts.LineSeries());
lineSeries.dataFields.categoryX = "Entidad";
lineSeries.dataFields.valueY = "Nacional";
lineSeries.tooltipText = "Rezago educativo nacional: {valueY.value}";
lineSeries.sequencedInterpolation = true;
lineSeries.defaultState.transitionDuration = 1500;
lineSeries.stroke = am4core.color("#FF0000"); //chart.colors.getIndex(11);
lineSeries.fill = lineSeries.stroke;
lineSeries.strokeWidth = 2;

// second way - add axis range.
var lineSeriesRange = categoryAxis.createSeriesRange(lineSeries);
lineSeriesRange.category = "2018";
lineSeriesRange.endCategory = "2019";
lineSeriesRange.contents.strokeDasharray = "3,3";
lineSeriesRange.locations.category = 0.5;


var label = chart.createChild(am4core.Label);
label.text = "Promedio Nacional: 17.4";
label.fontSize = 14;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(90);
label.horizontalCenter = "middle";
label.y = am4core.percent(34);

//var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
//bullet.fill = lineSeries.stroke;
//bullet.circle.radius = 4;

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "none";
chart.cursor.lineX.opacity = 0;
chart.cursor.lineY.opacity = 0;
//chart.exporting.menu = new am4core.ExportMenu();
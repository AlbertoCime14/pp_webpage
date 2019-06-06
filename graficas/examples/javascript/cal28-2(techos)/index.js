am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

//chart.language = "";

var data = [];

chart.data = [
 {
   "Entidades": "Michoacán",
   "Techos": 5.5,
   "Nacional": 1.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Guerrero",
   "Techos": 4.4,
   "Nacional": 1.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Quintana Roo",
   "Techos": 3.4,
   "Nacional": 1.6,
   "opacity": 0.5
 },
 {
   "Entidades": "[font-size: 20px; font-weigh: bold;]Yucatán[/]",
   "Techos": 3,
   "Nacional": 1.6,
   "opacity": 1
 },
 {
   "Entidades": "México",
   "Techos": 3,
   "Nacional": 1.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Puebla",
   "Techos": 2.6,
   "Nacional": 1.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Nayarit",
   "Techos": 2.3,
   "Nacional": 1.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Sinaloa",
   "Techos": 2.1,
   "Nacional": 1.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Morelos",
   "Techos": 1.8,
   "Nacional": 1.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Tamaulipas",
   "Techos": 1.5,
   "Nacional": 1.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Baja California Sur",
   "Techos": 1.4,
   "Nacional": 1.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Hidalgo",
   "Techos": 1.4,
   "Nacional": 1.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Ciudad de México",
   "Techos": 1.4,
   "Nacional": 1.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Sonora",
   "Techos": 1.2,
   "Nacional": 1.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Durango",
   "Techos": 1,
   "Nacional": 1.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Oaxaca",
   "Techos": 1,
   "Nacional": 1.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Veracruz",
   "Techos": 1,
   "Nacional": 1.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Campeche",
   "Techos": 0.7,
   "Nacional": 1.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Colima",
   "Techos": 0.7,
   "Nacional": 1.6,
   "opacity": 0.5
 },
 {
   "Entidades": "San Luis Potosí",
   "Techos": 0.7,
   "Nacional": 1.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Baja California",
   "Techos": 0.6,
   "Nacional": 1.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Jalisco",
   "Techos": 0.6,
   "Nacional": 1.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Tlaxcala",
   "Techos": 0.6,
   "Nacional": 1.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Coahuila",
   "Techos": 0.5,
   "Nacional": 1.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Chihuahua",
   "Techos": 0.5,
   "Nacional": 1.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Chiapas",
   "Techos": 0.4,
   "Nacional": 1.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Guanajuato",
   "Techos": 0.4,
   "Nacional": 1.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Querétaro",
   "Techos": 0.3,
   "Nacional": 1.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Tabasco",
   "Techos": 0.2,
   "Nacional": 1.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Zacatecas",
   "Techos": 0.1,
   "Nacional": 1.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Aguascalientes",
   "Techos": 0.1,
   "Nacional": 1.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Nuevo León",
   "Techos": 0.1,
   "Nacional": 1.6,
   "opacity": 0.5
 }
];

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.ticks.template.disabled = true;
categoryAxis.renderer.line.opacity = 0;
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.minGridDistance = 40;
categoryAxis.dataFields.category = "Entidades";

categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.renderer.line.opacity = 0;
valueAxis.renderer.ticks.template.disabled = true;
valueAxis.min = 0;

var columnSeries = chart.series.push(new am4charts.ColumnSeries());
columnSeries.dataFields.categoryX = "Entidades";
columnSeries.dataFields.valueY = "Techos";
columnSeries.tooltipText = "Viviendas con techos de material endeble: {valueY.value}";
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
lineSeries.dataFields.categoryX = "Entidades";
lineSeries.dataFields.valueY = "Nacional";
lineSeries.tooltipText = "Viviendas con techos de material endeble a nivel nacional: {valueY.value}";
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

//var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
//bullet.fill = lineSeries.stroke;
//bullet.circle.radius = 4;

var label = chart.createChild(am4core.Label);
label.text = "Promedio Nacional: 1.6";
label.fontSize = 14;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(90);
label.horizontalCenter = "middle";
label.y = am4core.percent(57);

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "none";
chart.cursor.lineX.opacity = 0;
chart.cursor.lineY.opacity = 0;
//chart.exporting.menu = new am4core.ExportMenu();
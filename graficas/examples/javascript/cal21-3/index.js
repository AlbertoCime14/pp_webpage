am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

//chart.language = "";

var data = [];

chart.data = [
 {
   "Estado": "Durango",
   "2010": 38.8,
   "2015": 29.5,
   "opacity": 0.5
 },
 {
   "Estado": "Nayarit",
   "2010": 22.8,
   "2015": 24,
   "opacity": 0.5
 },
 {
   "Estado": "Michoacán",
   "2010": 44.7,
   "2015": 21.7,
   "opacity": 0.5
 },
 {
   "Estado": "Chiapas",
   "2010": 38.2,
   "2015": 17.2,
   "opacity": 0.5
 },
 {
   "Estado": "Veracruz",
   "2010": 39.5,
   "2015": 15.8,
   "opacity": 0.5
 },
 {
   "Estado": "Oaxaca",
   "2010": 44.7,
   "2015": 15,
   "opacity": 0.5
 },
 {
   "Estado": "Hidalgo",
   "2010": 24.3,
   "2015": 13.6,
   "opacity": 0.5
 },
 {
   "Estado": "[font-size: 20px; font-weight: bold;]Yucatán[/]",
   "2010": 22.2,
   "2015": 11.9,
   "opacity": 1
 },
 {
   "Estado": "Puebla",
   "2010": 44.9,
   "2015": 11.8,
   "opacity": 0.5
 },
 {
   "Estado": "Guerrero",
   "2010": 41.6,
   "2015": 11.6,
   "opacity": 0.5
 },
 {
   "Estado": "Chihuahua",
   "2010": 49.3,
   "2015": 11.2,
   "opacity": 0.5
 },
 {
   "Estado": "Campeche",
   "2010": 23.6,
   "2015": 10.6,
   "opacity": 0.5
 },
 {
   "Estado": "México",
   "2010": 20.8,
   "2015": 10.1,
   "opacity": 0.5
 },
 {
   "Estado": "Quintana Roo",
   "2010": 18,
   "2015": 9.7,
   "opacity": 0.5
 },
 {
   "Estado": "Jalisco",
   "2010": 26.6,
   "2015": 8.8,
   "opacity": 0.5
 },
 {
   "Estado": "Querétaro",
   "2010": 15.4,
   "2015": 8.4,
   "opacity": 0.5
 },
 {
   "Estado": "San Luis Potosí",
   "2010": 21.3,
   "2015": 6.2,
   "opacity": 0.5
 }
];

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.ticks.template.disabled = true;
categoryAxis.renderer.line.opacity = 0;
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.minGridDistance = 40;
categoryAxis.dataFields.category = "Estado";

categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.renderer.line.opacity = 0;
valueAxis.renderer.ticks.template.disabled = true;
valueAxis.min = 0;

var columnSeries = chart.series.push(new am4charts.ColumnSeries());
columnSeries.dataFields.categoryX = "Estado";
columnSeries.dataFields.valueY = "2015";
columnSeries.tooltipText = "2015: {valueY.value}";
columnSeries.sequencedInterpolation = true;
columnSeries.defaultState.transitionDuration = 1500;
columnSeries.fill = am4core.color("#0C3F6C");//   chart.colors.getIndex(1);
columnSeries.legendSettings.valueText = "2015";
//Valores de las barras verticales
var valueLabel = columnSeries.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY}";
valueLabel.label.dy = -20;

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
lineSeries.dataFields.categoryX = "Estado";
lineSeries.dataFields.valueY = "2010";
lineSeries.tooltipText = "2010: {valueY.value}";
lineSeries.sequencedInterpolation = true;
lineSeries.defaultState.transitionDuration = 1500;
lineSeries.stroke = am4core.color("#FF0000"); //chart.colors.getIndex(11);
lineSeries.fill = lineSeries.stroke;
lineSeries.strokeWidth = 2;
lineSeries.legendSettings.valueText = "2010";


var valueLabel = lineSeries.bullets.push(new am4charts.CircleBullet());

// second way - add axis range.
var lineSeriesRange = categoryAxis.createSeriesRange(lineSeries);
lineSeriesRange.category = "2018";
lineSeriesRange.endCategory = "2019";
lineSeriesRange.contents.strokeDasharray = "3,3";
lineSeriesRange.locations.category = 0.5;

//var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
//bullet.fill = lineSeries.stroke;
//bullet.circle.radius = 4;

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "none";
chart.cursor.lineX.opacity = 0;
chart.cursor.lineY.opacity = 0;
//chart.exporting.menu = new am4core.ExportMenu();
chart.legend = new am4charts.Legend();
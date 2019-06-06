am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

//chart.language = "";

var data = [];

chart.data = [
 {
   "Estado": "Durango",
   "2010": 81.8,
   "2015": 92.2,
   "opacity": 0.5
 },
 {
   "Estado": "México",
   "2010": 91.6,
   "2015": 92.1,
   "opacity": 0.5
 },
 {
   "Estado": "Guerrero",
   "2010": 91.8,
   "2015": 90.1,
   "opacity": 0.5
 },
 {
   "Estado": "Chiapas",
   "2010": 87.9,
   "2015": 88.6,
   "opacity": 0.5
 },
 {
   "Estado": "Nayarit",
   "2010": 77,
   "2015": 87.9,
   "opacity": 0.5
 },
 {
   "Estado": "Querétaro",
   "2010": 84.8,
   "2015": 86.6,
   "opacity": 0.5
 },
 {
   "Estado": "Puebla",
   "2010": 87.8,
   "2015": 86.1,
   "opacity": 0.5
 },
 {
   "Estado": "Jalisco",
   "2010": 87.3,
   "2015": 85.4,
   "opacity": 0.5
 },
 {
   "Estado": "Oaxaca",
   "2010": 81.9,
   "2015": 82.5,
   "opacity": 0.5
 },
 {
   "Estado": "Veracruz",
   "2010": 85.8,
   "2015": 82.5,
   "opacity": 0.5
 },
 {
   "Estado": "Quintana Roo",
   "2010": 86.6,
   "2015": 82.4,
   "opacity": 0.5
 },
 {
   "Estado": "San Luis Potosí",
   "2010": 80.6,
   "2015": 82.1,
   "opacity": 0.5
 },
 {
   "Estado": "Michoacán",
   "2010": 81,
   "2015": 81.9,
   "opacity": 0.5
 },
 {
   "Estado": "Hidalgo",
   "2010": 80.9,
   "2015": 81.3,
   "opacity": 0.5
 },
 {
   "Estado": "Campeche",
   "2010": 76.5,
   "2015": 73.6,
   "opacity": 0.5
 },
 {
   "Estado": "Chihuahua",
   "2010": 88.8,
   "2015": 68.3,
   "opacity": 0.5
 },
 {
   "Estado": "[font-size: 20px; font-weight: bold;]Yucatán[/]",
   "2010": 69.6,
   "2015": 65.1,
   "opacity": 1
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
valueLabel.label.dy = 30;
valueLabel.label.fill = am4core.color('#fff');

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
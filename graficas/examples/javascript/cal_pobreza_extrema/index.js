am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

//chart.language = "";

var data = [];

chart.data = [
 {
   "Entidades": "Chiapas",
   "Pobreza Extrema": 28.1,
   "Nacional": 7.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Oaxaca",
   "Pobreza Extrema": 26.9,
   "Nacional": 7.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Guerrero",
   "Pobreza Extrema": 23.0,
   "Nacional": 7.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Veracruz",
   "Pobreza Extrema": 16.4,
   "Nacional": 7.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Tabasco",
   "Pobreza Extrema": 11.8,
   "Nacional": 7.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Michoacán",
   "Pobreza Extrema": 9.4,
   "Nacional": 7.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Puebla",
   "Pobreza Extrema": 9.0,
   "Nacional": 7.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Hidalgo",
   "Pobreza Extrema": 8.0,
   "Nacional": 7.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Nayarit",
   "Pobreza Extrema": 7.9,
   "Nacional": 7.6,
   "opacity": 0.5
 },
 {
   "Entidades": "San Luis Potosí",
   "Pobreza Extrema": 7.7,
   "Nacional": 7.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Campeche",
   "Pobreza Extrema": 6.7,
   "Nacional": 7.6,
   "opacity": 0.5
 },
 {
   "Entidades": "México",
   "Pobreza Extrema": 6.1,
   "Nacional": 7.6,
   "opacity": 0.5
 },
 {
   "Entidades": "[font-size: 20px; font-weight: bold;]Yucatán[/]",
   "Pobreza Extrema": 6.1,
   "Nacional": 7.6,
   "opacity": 1
 },
 {
   "Entidades": "Morelos",
   "Pobreza Extrema": 5.9,
   "Nacional": 7.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Tlaxcala",
   "Pobreza Extrema": 5.7,
   "Nacional": 7.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Guanajuato",
   "Pobreza Extrema": 4.4,
   "Nacional": 7.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Quintana Roo",
   "Pobreza Extrema": 4.2,
   "Nacional": 7.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Zacatecas",
   "Pobreza Extrema": 3.5,
   "Nacional": 7.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Chihuahua",
   "Pobreza Extrema": 3.2,
   "Nacional": 7.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Querétaro",
   "Pobreza Extrema": 2.9,
   "Nacional": 7.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Sinaloa",
   "Pobreza Extrema": 2.9,
   "Nacional": 7.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Tamaulipas",
   "Pobreza Extrema": 2.9,
   "Nacional": 7.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Durango",
   "Pobreza Extrema": 2.8,
   "Nacional": 7.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Colima",
   "Pobreza Extrema": 2.6,
   "Nacional": 7.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Sonora",
   "Pobreza Extrema": 2.5,
   "Nacional": 7.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Aguascalientes",
   "Pobreza Extrema": 2.3,
   "Nacional": 7.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Jalisco",
   "Pobreza Extrema": 1.8,
   "Nacional": 7.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Distrito Federal",
   "Pobreza Extrema": 1.8,
   "Nacional": 7.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Coahuila",
   "Pobreza Extrema": 1.7,
   "Nacional": 7.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Baja California Sur",
   "Pobreza Extrema": 1.6,
   "Nacional": 7.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Baja California",
   "Pobreza Extrema": 1.1,
   "Nacional": 7.6,
   "opacity": 0.5
 },
 {
   "Entidades": "Nuevo León",
   "Pobreza Extrema": 0.6,
   "Nacional": 7.6,
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
valueAxis.max = 30;

var columnSeries = chart.series.push(new am4charts.ColumnSeries());
columnSeries.dataFields.categoryX = "Entidades";
columnSeries.dataFields.valueY = "Pobreza Extrema";
columnSeries.tooltipText = "Pobreza Extrema: {valueY.value}";
columnSeries.sequencedInterpolation = true;
columnSeries.defaultState.transitionDuration = 1500;
columnSeries.fill = am4core.color("#0C3F6C");//   chart.colors.getIndex(1);
//Valores de las barras verticales
var valueLabel = columnSeries.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY.formatNumber('#.0')}";
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
lineSeries.tooltipText = "Pobreza Extrema: {valueY.value}";
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
label.text = "Promedio Nacional: 7.6";
label.fontSize = 14;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(90);
label.horizontalCenter = "middle";
label.y = am4core.percent(58);

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "none";
chart.cursor.lineX.opacity = 0;
chart.cursor.lineY.opacity = 0;
//chart.exporting.menu = new am4core.ExportMenu();
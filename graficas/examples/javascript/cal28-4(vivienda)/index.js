am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

//chart.language = "";

var data = [];

chart.data = [
 {
   "Entidades": "Guerrero",
   "Hacinamiento": 24.3,
   "Nacional": 8.2,
   "opacity": 0.5
 },
 {
   "Entidades": "Chiapas",
   "Hacinamiento": 21.1,
   "Nacional": 8.2,
   "opacity": 0.5
 },
 {
   "Entidades": "Campeche",
   "Hacinamiento": 15.1,
   "Nacional": 8.2,
   "opacity": 0.5
 },
 {
   "Entidades": "Quintana Roo",
   "Hacinamiento": 14.8,
   "Nacional": 8.2,
   "opacity": 0.5
 },
 {
   "Entidades": "[font-size: 20px; font-weight: bold;]Yucatán[/]",
   "Hacinamiento": 14.6,
   "Nacional": 8.2,
   "opacity": 1
 },
 {
   "Entidades": "Oaxaca",
   "Hacinamiento": 12.1,
   "Nacional": 8.2,
   "opacity": 0.5
 },
 {
   "Entidades": "Veracruz",
   "Hacinamiento": 11.9,
   "Nacional": 8.2,
   "opacity": 0.5
 },
 {
   "Entidades": "Baja California Sur",
   "Hacinamiento": 10.6,
   "Nacional": 8.2,
   "opacity": 0.5
 },
 {
   "Entidades": "Morelos",
   "Hacinamiento": 10.4,
   "Nacional": 8.2,
   "opacity": 0.5
 },
 {
   "Entidades": "Puebla",
   "Hacinamiento": 9.7,
   "Nacional": 8.2,
   "opacity": 0.5
 },
 {
   "Entidades": "Tlaxcala",
   "Hacinamiento": 9.2,
   "Nacional": 8.2,
   "opacity": 0.5
 },
 {
   "Entidades": "Michoacán",
   "Hacinamiento": 9.1,
   "Nacional": 8.2,
   "opacity": 0.5
 },
 {
   "Entidades": "Tabasco",
   "Hacinamiento": 8.3,
   "Nacional": 8.2,
   "opacity": 0.5
 },
 {
   "Entidades": "Querétaro",
   "Hacinamiento": 7.3,
   "Nacional": 8.2,
   "opacity": 0.5
 },
 {
   "Entidades": "Guanajuato",
   "Hacinamiento": 6.7,
   "Nacional": 8.2,
   "opacity": 0.5
 },
 {
   "Entidades": "San Luis Potosí",
   "Hacinamiento": 6.7,
   "Nacional": 8.2,
   "opacity": 0.5
 },
 {
   "Entidades": "México",
   "Hacinamiento": 6.3,
   "Nacional": 8.2,
   "opacity": 0.5
 },
 {
   "Entidades": "Colima",
   "Hacinamiento": 6.3,
   "Nacional": 8.2,
   "opacity": 0.5
 },
 {
   "Entidades": "Sinaloa",
   "Hacinamiento": 5.9,
   "Nacional": 8.2,
   "opacity": 0.5
 },
 {
   "Entidades": "Baja California",
   "Hacinamiento": 5.9,
   "Nacional": 8.2,
   "opacity": 0.5
 },
 {
   "Entidades": "Jalisco",
   "Hacinamiento": 5.7,
   "Nacional": 8.2,
   "opacity": 0.5
 },
 {
   "Entidades": "Sonora",
   "Hacinamiento": 5.7,
   "Nacional": 8.2,
   "opacity": 0.5
 },
 {
   "Entidades": "Hidalgo",
   "Hacinamiento": 5.7,
   "Nacional": 8.2,
   "opacity": 0.5
 },
 {
   "Entidades": "Tamaulipas",
   "Hacinamiento": 5.4,
   "Nacional": 8.2,
   "opacity": 0.5
 },
 {
   "Entidades": "Nayarit",
   "Hacinamiento": 4.9,
   "Nacional": 8.2,
   "opacity": 0.5
 },
 {
   "Entidades": "Coahuila",
   "Hacinamiento": 4.2,
   "Nacional": 8.2,
   "opacity": 0.5
 },
 {
   "Entidades": "Aguascalientes",
   "Hacinamiento": 4.1,
   "Nacional": 8.2,
   "opacity": 0.5
 },
 {
   "Entidades": "Ciudad de México",
   "Hacinamiento": 4.0,
   "Nacional": 8.2,
   "opacity": 0.5
 },
 {
   "Entidades": "Chihuahua",
   "Hacinamiento": 3.7,
   "Nacional": 8.2,
   "opacity": 0.5
 },
 {
   "Entidades": "Durango",
   "Hacinamiento": 3.7,
   "Nacional": 8.2,
   "opacity": 0.5
 },
 {
   "Entidades": "Nuevo León",
   "Hacinamiento": 3.6,
   "Nacional": 8.2,
   "opacity": 0.5
 },
 {
   "Entidades": "Zacatecas",
   "Hacinamiento": 3.2,
   "Nacional": 8.2,
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
valueAxis.max = 25;

var columnSeries = chart.series.push(new am4charts.ColumnSeries());
columnSeries.dataFields.categoryX = "Entidades";
columnSeries.dataFields.valueY = "Hacinamiento";
columnSeries.tooltipText = "Viviendas con hacinamiento: {valueY.value}";
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
lineSeries.tooltipText = "Viviendas con hacinamiento: {valueY.value}";
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
label.text = "Promedio Nacional: 8.2";
label.fontSize = 14;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(90);
label.horizontalCenter = "middle";
label.y = am4core.percent(52);

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "none";
chart.cursor.lineX.opacity = 0;
chart.cursor.lineY.opacity = 0;
//chart.exporting.menu = new am4core.ExportMenu();
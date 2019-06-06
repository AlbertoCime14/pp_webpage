am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

//chart.language = "";

var data = [];

chart.data = [
 {
   "Entidad": "Ciudad de México",
   "Tasa": 253.61,
   "Promedio nacional": 85.95,
   "opacity": 0.5
 },
 {
   "Entidad": "Puebla",
   "Tasa": 155.49,
   "Promedio nacional": 85.95,
   "opacity": 0.5
 },
 {
   "Entidad": "Aguascalientes",
   "Tasa": 134.76,
   "Promedio nacional": 85.95,
   "opacity": 0.5
 },
 {
   "Entidad": "Jalisco",
   "Tasa": 133.98,
   "Promedio nacional": 85.95,
   "opacity": 0.5
 },
 {
   "Entidad": "Nuevo León",
   "Tasa": 130.2,
   "Promedio nacional": 85.95,
   "opacity": 0.5
 },
 {
   "Entidad": "Querétaro",
   "Tasa": 119.89,
   "Promedio nacional": 85.95,
   "opacity": 0.5
 },
 {
   "Entidad": "Morelos",
   "Tasa": 109.42,
   "Promedio nacional": 85.95,
   "opacity": 0.5
 },
 {
   "Entidad": "Baja California",
   "Tasa": 104.76,
   "Promedio nacional": 85.95,
   "opacity": 0.5
 },
 {
   "Entidad": "[font-size: 20px;font-weight: bold]Yucatán[/]",
   "Tasa": 100.08,
   "Promedio nacional": 85.95
 },
 {
   "Entidad": "Sinaloa",
   "Tasa": 85.58,
   "Promedio nacional": 85.95,
   "opacity": 0.5
 },
 {
   "Entidad": "Chihuahua",
   "Tasa": 78.03,
   "Promedio nacional": 85.95,
   "opacity": 0.5
 },
 {
   "Entidad": "Hidalgo",
   "Tasa": 77.96,
   "Promedio nacional": 85.95,
   "opacity": 0.5
 },
 {
   "Entidad": "Sonora",
   "Tasa": 77.16,
   "Promedio nacional": 85.95,
   "opacity": 0.5
 },
 {
   "Entidad": "Estado de México",
   "Tasa": 73.21,
   "Promedio nacional": 85.95,
   "opacity": 0.5
 },
 {
   "Entidad": "Nayarit",
   "Tasa": 68.83,
   "Promedio nacional": 85.95,
   "opacity": 0.5
 },
 {
   "Entidad": "Guanajuato",
   "Tasa": 67.66,
   "Promedio nacional": 85.95,
   "opacity": 0.5
 },
 {
   "Entidad": "San Luis Potosí",
   "Tasa": 56.95,
   "Promedio nacional": 85.95,
   "opacity": 0.5
 },
 {
   "Entidad": "Colima",
   "Tasa": 54.98,
   "Promedio nacional": 85.95,
   "opacity": 0.5
 },
 {
   "Entidad": "Quintana Roo",
   "Tasa": 53.31,
   "Promedio nacional": 85.95,
   "opacity": 0.5
 },
 {
   "Entidad": "Durango",
   "Tasa": 50.97,
   "Promedio nacional": 85.95,
   "opacity": 0.5
 },
 {
   "Entidad": "Coahuila",
   "Tasa": 44.48,
   "Promedio nacional": 85.95,
   "opacity": 0.5
 },
 {
   "Entidad": "Tamaulipas",
   "Tasa": 40.55,
   "Promedio nacional": 85.95,
   "opacity": 0.5
 },
 {
   "Entidad": "Zacatecas",
   "Tasa": 38.78,
   "Promedio nacional": 85.95,
   "opacity": 0.5
 },
 {
   "Entidad": "Michoacán",
   "Tasa": 35.99,
   "Promedio nacional": 85.95,
   "opacity": 0.5
 },
 {
   "Entidad": "Veracruz",
   "Tasa": 34.25,
   "Promedio nacional": 85.95,
   "opacity": 0.5
 },
 {
   "Entidad": "Tlaxcala",
   "Tasa": 29.82,
   "Promedio nacional": 85.95,
   "opacity": 0.5
 },
 {
   "Entidad": "Campeche",
   "Tasa": 29.05,
   "Promedio nacional": 85.95,
   "opacity": 0.5
 },
 {
   "Entidad": "Baja California Sur",
   "Tasa": 28.39,
   "Promedio nacional": 85.95,
   "opacity": 0.5
 },
 {
   "Entidad": "Chiapas",
   "Tasa": 25,
   "Promedio nacional": 85.95,
   "opacity": 0.5
 },
 {
   "Entidad": "Guerrero",
   "Tasa": 20.41,
   "Promedio nacional": 85.95,
   "opacity": 0.5
 },
 {
   "Entidad": "Tabasco",
   "Tasa": 20.03,
   "Promedio nacional": 85.95,
   "opacity": 0.5
 },
 {
   "Entidad": "Oaxaca",
   "Tasa": 19.09,
   "Promedio nacional": 85.95,
   "opacity": 0.5
 }
];
chart.numberFormatter.numberFormat = "#.0|#.0|0.0";
chart.padding(40, 40, 40, 40);

//Para colocar la etiqueta del valor del promedio nacional
var label = chart.createChild(am4core.Label);
label.text = "Promedio nacional 85.95";
label.fontSize = 14;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(90);//Ajusta la alineación horizontal via porcentaje
label.horizontalCenter = "middle";
label.y = 370; //Ajusta alineación vertical, positivo (hacia abajo) negativo (hacia arriba)
//.-Para colocar la etiqueta del valor del promedio nacional

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.ticks.template.disabled = true;
categoryAxis.renderer.line.opacity = 0;
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.minGridDistance = 1;
categoryAxis.dataFields.category = "Entidad";

categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.renderer.line.opacity = 0;
valueAxis.renderer.ticks.template.disabled = true;
valueAxis.min = 0;
valueAxis.max = 260;

var columnSeries = chart.series.push(new am4charts.ColumnSeries());
columnSeries.dataFields.categoryX = "Entidad";
columnSeries.dataFields.valueY = "Tasa";
columnSeries.tooltipText = "Tasa: {valueY.value}";
columnSeries.sequencedInterpolation = true;
columnSeries.defaultState.transitionDuration = 1500;
columnSeries.fill = am4core.color("#7E65AA");//   chart.colors.getIndex(1);

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
lineSeries.dataFields.categoryX = "Entidad";
lineSeries.dataFields.valueY = "Promedio nacional";
lineSeries.tooltipText = "Promedio nacional: {valueY.value}";
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

/*var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
bullet.fill = lineSeries.stroke;
bullet.circle.radius = 4;*/

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "none";
chart.cursor.lineX.opacity = 0;
chart.cursor.lineY.opacity = 0;
//chart.exporting.menu = new am4core.ExportMenu();
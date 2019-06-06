am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

//chart.language = "";

var data = [];

var data = [];

chart.data = [
{
   "ESTADOS": "Baja California ",
   "HERRAMIENTAS": 1.01,
   "Promedio nacional": 2.16,
   "opacity": 0.5
 },
 {
   "ESTADOS": "Nayarit ",
   "HERRAMIENTAS": 1.02,
   "Promedio nacional": 2.16,
   "opacity": 0.5
 },
 {
   "ESTADOS": "Quintana Roo ",
   "HERRAMIENTAS": 1.4,
   "Promedio nacional": 2.16,
   "opacity": 0.5
 },
 {
   "ESTADOS": "Oaxaca ",
   "HERRAMIENTAS": 1.46,
   "Promedio nacional": 2.16,
   "opacity": 0.5
 },
 {
   "ESTADOS": "Zacatecas ",
   "HERRAMIENTAS": 1.55,
   "Promedio nacional": 2.16,
   "opacity": 0.5
 },
 {
   "ESTADOS": "Guerrero ",
   "HERRAMIENTAS": 1.65,
   "Promedio nacional": 2.16,
   "opacity": 0.5
 },
 {
   "ESTADOS": "Chihuahua",
   "HERRAMIENTAS": 1.76,
   "Promedio nacional": 2.16,
   "opacity": 0.5
 },
 {
   "ESTADOS": "Campeche ",
   "HERRAMIENTAS": 1.8,
   "Promedio nacional": 2.16,
   "opacity": 0.5
 },
 {
   "ESTADOS": "San Luis Potosí",
   "HERRAMIENTAS": 1.83,
   "Promedio nacional": 2.16,
   "opacity": 0.5
 },
 {
   "ESTADOS": "Tabasco ",
   "HERRAMIENTAS": 1.83,
   "Promedio nacional": 2.16,
   "opacity": 0.5
 },
 {
   "ESTADOS": "Tlaxcala ",
   "HERRAMIENTAS": 1.85,
   "Promedio nacional": 2.16,
   "opacity": 0.5
 },
 {
   "ESTADOS": "Durango ",
   "HERRAMIENTAS": 1.87,
   "Promedio nacional": 2.16,
   "opacity": 0.5
 },
 {
   "ESTADOS": "Ciudad de México ",
   "HERRAMIENTAS": 1.89,
   "Promedio nacional": 2.16,
   "opacity": 0.5
 },
 {
   "ESTADOS": "Coahuila ",
   "HERRAMIENTAS": 1.95,
   "Promedio nacional": 2.16,
   "opacity": 0.5
 },
 {
   "ESTADOS": "Veracruz ",
   "HERRAMIENTAS": 2.05,
   "Promedio nacional": 2.16,
   "opacity": 0.5
 },
 {
   "ESTADOS": "Michoacán ",
   "HERRAMIENTAS": 2.08,
   "Promedio nacional": 2.16,
   "opacity": 0.5
 },
 {
   "ESTADOS": "Hidalgo ",
   "HERRAMIENTAS": 2.19,
   "Promedio nacional": 2.16,
   "opacity": 0.5
 },
 {
   "ESTADOS": "Chiapas ",
   "HERRAMIENTAS": 2.2,
   "Promedio nacional": 2.16,
   "opacity": 0.5
 },
 {
   "ESTADOS": "Sinaloa ",
   "HERRAMIENTAS": 2.26,
   "Promedio nacional": 2.16,
   "opacity": 0.5
 },
 {
   "ESTADOS": "Tamaulipas ",
   "HERRAMIENTAS": 2.28,
   "Promedio nacional": 2.16,
   "opacity": 0.5
 },
 {
   "ESTADOS": "Baja California Sur ",
   "HERRAMIENTAS": 2.29,
   "Promedio nacional": 2.16,
   "opacity": 0.5
 },
 {
   "ESTADOS": "Puebla ",
   "HERRAMIENTAS": 2.33,
   "Promedio nacional": 2.16,
   "opacity": 0.5
 },
 {
   "ESTADOS": "Estado de México ",
   "HERRAMIENTAS": 2.38,
   "Promedio nacional": 2.16,
   "opacity": 0.5
 },
 {
   "ESTADOS": "Sonora ",
   "HERRAMIENTAS": 2.43,
   "Promedio nacional": 2.16,
   "opacity": 0.5
 },
 {
   "ESTADOS": "Jalisco ",
   "HERRAMIENTAS": 2.44,
   "Promedio nacional": 2.16,
   "opacity": 0.5
 },
 {
   "ESTADOS": "Guanajuato",
   "HERRAMIENTAS": 2.55,
   "Promedio nacional": 2.16,
   "opacity": 0.5
 },
 {
   "ESTADOS": "Querétaro",
   "HERRAMIENTAS": 2.7,
   "Promedio nacional": 2.16,
   "opacity": 0.5
 },
 {
   "ESTADOS": "[font-size: 20px;font-weight:bold]Yucatán[/]",
   "HERRAMIENTAS": 2.88,
   "Promedio nacional": 2.16
 },
 {
   "ESTADOS": "Morelos ",
   "HERRAMIENTAS": 2.96,
   "Promedio nacional": 2.16,
   "opacity": 0.5
 },
 {
   "ESTADOS": "Aguascalientes ",
   "HERRAMIENTAS": 3.1,
   "Promedio nacional": 2.16,
   "opacity": 0.5
 },
 {
   "ESTADOS": "Colima ",
   "HERRAMIENTAS": 3.51,
   "Promedio nacional": 2.16,
   "opacity": 0.5
 },
 {
   "ESTADOS": "Nuevo León",
   "HERRAMIENTAS": 3.55,
   "Promedio nacional": 2.16,
   "opacity": 0.5
 }
 ];

chart.numberFormatter.numberFormat = "#.0|#.0|0.0";
chart.padding(40, 40, 40, 40);

//Para colocar la etiqueta del valor del promedio nacional
var label = chart.createChild(am4core.Label);
label.text = "Promedio nacional 2.16";
label.fontSize = 14;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(10);//Ajusta la alineación horizontal via porcentaje
label.horizontalCenter = "middle";
label.y = 150; //Ajusta alineación vertical, positivo (hacia abajo) negativo (hacia arriba)
//.-Para colocar la etiqueta del valor del promedio nacional

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.ticks.template.disabled = true;
categoryAxis.renderer.line.opacity = 0;
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.minGridDistance = 1;
categoryAxis.dataFields.category = "ESTADOS";

categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;


var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.renderer.line.opacity = 0;
valueAxis.renderer.ticks.template.disabled = true;
valueAxis.min = 0;

var columnSeries = chart.series.push(new am4charts.ColumnSeries());
columnSeries.dataFields.categoryX = "ESTADOS";
columnSeries.dataFields.valueY = "HERRAMIENTAS";
columnSeries.tooltipText = "HERRAMIENTAS: {valueY.value}";
columnSeries.sequencedInterpolation = true;
columnSeries.defaultState.transitionDuration = 1500;
columnSeries.fill = am4core.color("#4E8994");//   chart.colors.getIndex(1);

//Valores de las barras verticales
var valueLabel = columnSeries.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY}";
valueLabel.label.dy = -20;
valueLabel.label.rotation = 0;

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
lineSeries.dataFields.categoryX = "ESTADOS";
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
//Formato a 1 decimal


/*am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

//chart.language = "";

var data = [];

chart.data = [
{
   "ESTADOS": "Baja California ",
   "HERRAMIENTAS": 1.01,
   "Promedio nacional": 5.17
 },
 {
   "ESTADOS": "Nayarit ",
   "HERRAMIENTAS": 1.02,
   "Promedio nacional": 5.17
 },
 {
   "ESTADOS": "Quintana Roo ",
   "HERRAMIENTAS": 1.4,
   "Promedio nacional": 5.17
 },
 {
   "ESTADOS": "Oaxaca ",
   "HERRAMIENTAS": 1.46,
   "Promedio nacional": 5.17
 },
 {
   "ESTADOS": "Zacatecas ",
   "HERRAMIENTAS": 1.55,
   "Promedio nacional": 5.17
 },
 {
   "ESTADOS": "Guerrero ",
   "HERRAMIENTAS": 1.65,
   "Promedio nacional": 5.17
 },
 {
   "ESTADOS": "Chihuahua",
   "HERRAMIENTAS": 1.76,
   "Promedio nacional": 5.17
 },
 {
   "ESTADOS": "Campeche ",
   "HERRAMIENTAS": 1.8,
   "Promedio nacional": 5.17
 },
 {
   "ESTADOS": "San Luis Potosí",
   "HERRAMIENTAS": 1.83,
   "Promedio nacional": 5.17
 },
 {
   "ESTADOS": "Tabasco ",
   "HERRAMIENTAS": 1.83,
   "Promedio nacional": 5.17
 },
 {
   "ESTADOS": "Tlaxcala ",
   "HERRAMIENTAS": 1.85,
   "Promedio nacional": 5.17
 },
 {
   "ESTADOS": "Durango ",
   "HERRAMIENTAS": 1.87,
   "Promedio nacional": 5.17
 },
 {
   "ESTADOS": "Ciudad de México ",
   "HERRAMIENTAS": 1.89,
   "Promedio nacional": 5.17
 },
 {
   "ESTADOS": "Coahuila ",
   "HERRAMIENTAS": 1.95,
   "Promedio nacional": 5.17
 },
 {
   "ESTADOS": "Veracruz ",
   "HERRAMIENTAS": 2.05,
   "Promedio nacional": 5.17
 },
 {
   "ESTADOS": "Michoacán ",
   "HERRAMIENTAS": 2.08,
   "Promedio nacional": 5.17
 },
 {
   "ESTADOS": "Hidalgo ",
   "HERRAMIENTAS": 2.19,
   "Promedio nacional": 5.17
 },
 {
   "ESTADOS": "Chiapas ",
   "HERRAMIENTAS": 2.2,
   "Promedio nacional": 5.17
 },
 {
   "ESTADOS": "Sinaloa ",
   "HERRAMIENTAS": 2.26,
   "Promedio nacional": 5.17
 },
 {
   "ESTADOS": "Tamaulipas ",
   "HERRAMIENTAS": 2.28,
   "Promedio nacional": 5.17
 },
 {
   "ESTADOS": "Baja California Sur ",
   "HERRAMIENTAS": 2.29,
   "Promedio nacional": 5.17
 },
 {
   "ESTADOS": "Puebla ",
   "HERRAMIENTAS": 2.33,
   "Promedio nacional": 5.17
 },
 {
   "ESTADOS": "Estado de México ",
   "HERRAMIENTAS": 2.38,
   "Promedio nacional": 5.17
 },
 {
   "ESTADOS": "Sonora ",
   "HERRAMIENTAS": 2.43,
   "Promedio nacional": 5.17
 },
 {
   "ESTADOS": "Jalisco ",
   "HERRAMIENTAS": 2.44,
   "Promedio nacional": 5.17
 },
 {
   "ESTADOS": "Guanajuato",
   "HERRAMIENTAS": 2.55,
   "Promedio nacional": 5.17
 },
 {
   "ESTADOS": "Querétaro",
   "HERRAMIENTAS": 2.7,
   "Promedio nacional": 5.17
 },
 {
   "ESTADOS": "Yucatán ",
   "HERRAMIENTAS": 2.88,
   "Promedio nacional": 5.17
 },
 {
   "ESTADOS": "Morelos ",
   "HERRAMIENTAS": 2.96,
   "Promedio nacional": 5.17
 },
 {
   "ESTADOS": "Aguascalientes ",
   "HERRAMIENTAS": 3.1,
   "Promedio nacional": 5.17
 },
 {
   "ESTADOS": "Colima ",
   "HERRAMIENTAS": 3.51,
   "Promedio nacional": 5.17
 },
 {
   "ESTADOS": "Nuevo León",
   "HERRAMIENTAS": 3.55,
   "Promedio nacional": 5.17
 }
 ];

var label = chart.createChild(am4core.Label);
label.text = "Promedio nacional";
label.fontSize = 20;
label.align = "right";
label.isMeasured = false;
label.x = am4core.percent(90);
label.horizontalCenter = "middle";
label.y = 5;

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.ticks.template.disabled = true;
categoryAxis.renderer.line.opacity = 0;
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.minGridDistance = 40;
categoryAxis.dataFields.category = "ESTADOS";

categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.renderer.line.opacity = 0;
valueAxis.renderer.ticks.template.disabled = true;
valueAxis.min = 0;

var columnSeries = chart.series.push(new am4charts.ColumnSeries());
columnSeries.dataFields.categoryX = "ESTADOS";
columnSeries.dataFields.valueY = "HERRAMIENTAS";
columnSeries.tooltipText = "{valueY.value}";
columnSeries.sequencedInterpolation = true;
columnSeries.defaultState.transitionDuration = 1500;
columnSeries.fill = am4core.color("#4E8994");//   chart.colors.getIndex(1);

var valueLabel = columnSeries.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY}";
valueLabel.label.dy = -12;
valueLabel.label.hideOversized = false;
valueLabel.label.truncate = false;

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


chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "none";
chart.cursor.lineX.opacity = 0;
chart.cursor.lineY.opacity = 0;

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

//chart.exporting.menu = new am4core.ExportMenu();*/
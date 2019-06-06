am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

//chart.language = "";

var data = [];

chart.data = [
 {
   "Entidades": "[font-size: 20px;font-weight: bold]Yucatán[/]",
   "Desnutricion": 51.76,
   "Nacional": 15.06
 },
 {
   "Entidades": "Chihuahua",
   "Desnutricion": 46.83,
   "Nacional": 15.06,
   "opacity": 0.5
 },
 {
   "Entidades": "Zacatecas",
   "Desnutricion": 32.6,
   "Nacional": 15.06,
   "opacity": 0.5
 },
 {
   "Entidades": "Nayarit",
   "Desnutricion": 29.56,
   "Nacional": 15.06,
   "opacity": 0.5
 },
 {
   "Entidades": "Colima",
   "Desnutricion": 29.45,
   "Nacional": 15.06,
   "opacity": 0.5
 },
 {
   "Entidades": "Guerrero",
   "Desnutricion": 28.39,
   "Nacional": 15.06,
   "opacity": 0.5
 },
 {
   "Entidades": "Campeche",
   "Desnutricion": 26.52,
   "Nacional": 15.06,
   "opacity": 0.5
 },
 {
   "Entidades": "Tabasco",
   "Desnutricion": 23.2,
   "Nacional": 15.06,
   "opacity": 0.5
 },
 {
   "Entidades": "Hidalgo",
   "Desnutricion": 22.36,
   "Nacional": 15.06,
   "opacity": 0.5
 },
 {
   "Entidades": "Baja California",
   "Desnutricion": 20.46,
   "Nacional": 15.06,
   "opacity": 0.5
 },
 {
   "Entidades": "Puebla",
   "Desnutricion": 18.43,
   "Nacional": 15.06,
   "opacity": 0.5
 },
 {
   "Entidades": "Sinaloa",
   "Desnutricion": 17.71,
   "Nacional": 15.06,
   "opacity": 0.5
 },
 {
   "Entidades": "Chiapas",
   "Desnutricion": 17.01,
   "Nacional": 15.06,
   "opacity": 0.5
 },
 {
   "Entidades": "Oaxaca",
   "Desnutricion": 15.61,
   "Nacional": 15.06,
   "opacity": 0.5
 },
 {
   "Entidades": "Morelos",
   "Desnutricion": 13.73,
   "Nacional": 15.06,
   "opacity": 0.5
 },
 {
   "Entidades": "Sonora",
   "Desnutricion": 13.55,
   "Nacional": 15.06,
   "opacity": 0.5
 },
 {
   "Entidades": "Veracruz",
   "Desnutricion": 12.58,
   "Nacional": 15.06,
   "opacity": 0.5
 },
 {
   "Entidades": "México",
   "Desnutricion": 12.32,
   "Nacional": 15.06,
   "opacity": 0.5
 },
 {
   "Entidades": "Jalisco",
   "Desnutricion": 11.54,
   "Nacional": 15.06,
   "opacity": 0.5
 },
 {
   "Entidades": "Ciudad de México",
   "Desnutricion": 10.94,
   "Nacional": 15.06,
   "opacity": 0.5
 },
 {
   "Entidades": "San Luis Potosí",
   "Desnutricion": 10.53,
   "Nacional": 15.06,
   "opacity": 0.5
 },
 {
   "Entidades": "Baja California Sur",
   "Desnutricion": 8.65,
   "Nacional": 15.06,
   "opacity": 0.5
 },
 {
   "Entidades": "Tamaulipas",
   "Desnutricion": 8.59,
   "Nacional": 15.06,
   "opacity": 0.5
 },
 {
   "Entidades": "Tlaxcala",
   "Desnutricion": 8.04,
   "Nacional": 15.06,
   "opacity": 0.5
 },
 {
   "Entidades": "Quintana Roo",
   "Desnutricion": 7.03,
   "Nacional": 15.06,
   "opacity": 0.5
 },
 {
   "Entidades": "Coahuila",
   "Desnutricion": 7.01,
   "Nacional": 15.06,
   "opacity": 0.5
 },
 {
   "Entidades": "Michoacán",
   "Desnutricion": 6.61,
   "Nacional": 15.06,
   "opacity": 0.5
 },
 {
   "Entidades": "Guanajuato",
   "Desnutricion": 6.51,
   "Nacional": 15.06,
   "opacity": 0.5
 },
 {
   "Entidades": "Querétaro",
   "Desnutricion": 6.01,
   "Nacional": 15.06,
   "opacity": 0.5
 },
 {
   "Entidades": "Durango",
   "Desnutricion": 3.82,
   "Nacional": 15.06,
   "opacity": 0.5
 },
 {
   "Entidades": "Nuevo León",
   "Desnutricion": 3.14,
   "Nacional": 15.06,
   "opacity": 0.5
 },
 {
   "Entidades": "Aguascalientes",
   "Desnutricion": 2.98,
   "Nacional": 15.06,
   "opacity": 0.5
 }
];

chart.numberFormatter.numberFormat = "#.0|#.0|0.0";
chart.padding(40, 40, 40, 40);

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.ticks.template.disabled = true;
categoryAxis.renderer.line.opacity = 0;
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.minGridDistance = 40;
categoryAxis.numberFormatter.numberFormat = "#";
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
columnSeries.dataFields.valueY = "Desnutricion";
columnSeries.tooltipText = "Desnutrición severa infantil: {valueY.value}";
columnSeries.sequencedInterpolation = true;
columnSeries.defaultState.transitionDuration = 1500;
columnSeries.fill = am4core.color("#6E368C");//   chart.colors.getIndex(1);
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
lineSeries.dataFields.categoryX = "Entidades";
lineSeries.dataFields.valueY = "Nacional";
lineSeries.tooltipText = "Nacional: {valueY.value}";
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
//lineSeriesRange.locations.category = 0.5;

//var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
//bullet.fill = lineSeries.stroke;
//bullet.circle.radius = 4;

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "none";
chart.cursor.lineX.opacity = 0;
chart.cursor.lineY.opacity = 0;
//chart.exporting.menu = new am4core.ExportMenu();

var label = chart.createChild(am4core.Label);
label.text = "Promedio nacional 15.06";
label.fontSize = 14;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(90);//Ajusta la alineación horizontal via porcentaje
label.horizontalCenter = "middle";
label.y = 380; //Ajusta alineación vertical, positivo (hacia abajo) negativo (hacia arriba)
//.-Para colocar la etiqueta del valor del promedio nacional

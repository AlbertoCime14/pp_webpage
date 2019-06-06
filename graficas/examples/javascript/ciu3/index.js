am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

//chart.language = "";

var data = [];

chart.data = [
 {
   "country": "Oaxaca",
   "visits": 41.2,
        "promedio": 12.1,
        "stroke": "3,3",
        "opacity": 0.5
 },
 {
   "country": "Chiapas",
   "visits": 32.4,
     "promedio": 12.1,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Guerrero",
   "visits": 27.3,
     "promedio": 12.1,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Hidalgo",
   "visits": 22.6,
     "promedio": 12.1,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Nayarit",
   "visits": 20.8,
     "promedio": 12.1,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Tlaxcala",
   "visits": 20.8,
     "promedio": 12.1,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Veracruz",
   "visits": 19.9,
     "promedio": 12.1,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Puebla",
   "visits": 16.9,
     "promedio": 12.1,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Durango",
   "visits": 16.2,
     "promedio": 12.1,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Zacatecas",
   "visits": 15.8,
     "promedio": 12.1,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
     "country": "[font - size: 20px; font-weight: bold]Yucatán[/]",
   "visits": 12.4,
   "promedio": 12.1
 },
 {
   "country": "San Luis Potosí",
   "visits": 11.6,
     "promedio": 12.1,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Michoacán",
   "visits": 10.9,
     "promedio": 12.1,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Morelos",
   "visits": 10.6,
     "promedio": 12.1,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Querétaro",
   "visits": 9.7,
     "promedio": 12.1,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Chihuahua",
   "visits": 9.5,
     "promedio": 12.1,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Baja California Sur",
   "visits": 9,
     "promedio": 12.1,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Sonora",
   "visits": 8.9,
     "promedio": 12.1,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Jalisco",
   "visits": 8.6,
     "promedio": 12.1,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Guanajuato",
   "visits": 8.6,
     "promedio": 12.1,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "México",
   "visits": 8.4,
     "promedio": 12.1,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Sinaloa",
   "visits": 7.8,
     "promedio": 12.1,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Tabasco",
   "visits": 7,
     "promedio": 12.1,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Tamaulipas",
   "visits": 6.1,
     "promedio": 12.1,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Quintana Roo",
   "visits": 5.4,
     "promedio": 12.1,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Campeche",
   "visits": 5.4,
     "promedio": 12.1,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Coahuila",
   "visits": 3.8,
     "promedio": 12.1,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Baja California",
   "visits": 2.5,
     "promedio": 12.1,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Colima",
   "visits": 2.5,
     "promedio": 12.1,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Nuevo León",
   "visits": 2.4,
     "promedio": 12.1,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Aguascalientes",
   "visits": 1.4,
     "promedio": 12.1,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Ciudad de México",
   "visits": 0.8,
     "promedio": 12.1,
     "stroke": "3,3",
     "opacity": 0.5
 }
];

chart.padding(40, 40, 40, 40);

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "country";
categoryAxis.renderer.minGridDistance = 1;

categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.max = 50;
valueAxis.strictMinMax = true;


var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryX = "country";
series.dataFields.valueY = "visits";
series.tooltipText = "{valueY.value}"
series.columns.template.strokeOpacity = 0;
series.fill = am4core.color("#3873B9");

var columnTemplate = series.columns.template;
//columnTemplate.column.cornerRadiusTopLeft = 10;
//columnTemplate.column.cornerRadiusTopRight = 10;
columnTemplate.strokeWidth = 1;
columnTemplate.strokeOpacity = 1;
columnTemplate.stroke = series.fill;

var desaturateFilter = new am4core.DesaturateFilter();
desaturateFilter.saturation = 1;

columnTemplate.filters.push(desaturateFilter);

// first way - get properties from data. but can only be done with columns, as they are separate objects.    
//columnTemplate.propertyFields.strokeDasharray = "stroke";
columnTemplate.propertyFields.fillOpacity = "opacity";

// add some cool saturation effect on hover
var desaturateFilterHover = new am4core.DesaturateFilter();
desaturateFilterHover.saturation = 1;

//Valores de las barras verticales
var valueLabel = series.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY}";
valueLabel.label.dy = -20;

var lineSeries = chart.series.push(new am4charts.LineSeries());
lineSeries.dataFields.categoryX = "country";
lineSeries.dataFields.valueY = "promedio";
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

//Para colocar la etiqueta del valor del promedio nacional
var label = chart.createChild(am4core.Label);
label.text = "Promedio nacional: 12.1";
label.fontSize = 16;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(90);//Ajusta la alineación horizontal via porcentaje
label.horizontalCenter = "middle";
label.y = 380; //Ajusta alineación vertical, positivo (hacia abajo) negativo (hacia arriba
//label.x = 1250;
//.-Para colocar la etiqueta del valor del promedio nacional
//Valores de las barras verticales
//var valueLabel = series.bullets.push(new am4charts.LabelBullet());
//valueLabel.label.text = "{valueY.value}";
//valueLabel.label.dy = -40;
valueLabel.label.truncate = false;
valueLabel.label.hideOversized = false;

chart.cursor = new am4charts.XYCursor();

//chart.exporting.menu = new am4core.ExportMenu();
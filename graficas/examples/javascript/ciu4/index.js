am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

//chart.language = "";

var data = [];

chart.data = [
 {
   "country": "Guerrero",
   "visits": 36.5,
        "promedio": 13,
        "stroke": "3,3",
        "opacity": 0.5
 },
 {
   "country": "Chiapas",
   "visits": 26.4,
     "promedio": 13,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Oaxaca",
   "visits": 25.4,
     "promedio": 13,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Veracruz",
   "visits": 22.3,
     "promedio": 13,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Michoacán",
   "visits": 21.1,
     "promedio": 13,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Morelos",
   "visits": 19.1,
     "promedio": 13,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Campeche",
   "visits": 17.5,
     "promedio": 13,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Tlaxcala",
   "visits": 16.3,
     "promedio": 13,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Baja California Sur",
   "visits": 16.1,
     "promedio": 13,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Puebla",
   "visits": 15.4,
     "promedio": 13,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "México",
   "visits": 14.7,
     "promedio": 13,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Tabasco",
   "visits": 14.4,
     "promedio": 13,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Quintana Roo",
   "visits": 14.4,
     "promedio": 13,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Baja California",
   "visits": 12.4,
     "promedio": 13,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Guanajuato",
   "visits": 12.4,
     "promedio": 13,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Hidalgo",
   "visits": 12.3,
     "promedio": 13,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
     "country":"[font - size: 20px; font-weight: bold]Yucatán[/]",
   "visits": 12.1,
   "promedio": 13
 },
 {
   "country": "Ciudad de México",
   "visits": 11,
     "promedio": 13,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Colima",
   "visits": 9.9,
     "promedio": 13,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Jalisco",
   "visits": 9.8,
     "promedio": 13,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Sonora",
   "visits": 9.4,
     "promedio": 13,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Tamaulipas",
   "visits": 9,
     "promedio": 13,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Querétaro",
   "visits": 8,
     "promedio": 13,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Nuevo León",
   "visits": 8,
     "promedio": 13,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "San Luis Potosí",
   "visits": 7.9,
     "promedio": 13,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Sinaloa",
   "visits": 6.6,
     "promedio": 13,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Durango",
   "visits": 6.5,
     "promedio": 13,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Chihuahua",
   "visits": 6.5,
     "promedio": 13,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Aguascalientes",
   "visits": 5.8,
     "promedio": 13,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Zacatecas",
   "visits": 5.7,
     "promedio": 13,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Coahuila",
   "visits": 5.4,
     "promedio": 13,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Nayarit",
   "visits": 4.9,
     "promedio": 13,
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
lineSeries.tooltipText = "Promedio promedio: {valueY.value}";
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

//Para colocar la etiqueta del valor del promedio promedio
var label = chart.createChild(am4core.Label);
label.text = "Promedio: 13";
label.fontSize = 16;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(90);//Ajusta la alineación horizontal via visits
label.horizontalCenter = "middle";
label.y = 390; //Ajusta alineación vertical, positivo (hacia abajo) negativo (hacia arriba
//label.x = 1250;
//.-Para colocar la etiqueta del valor del promedio promedio
//Valores de las barras verticales
//var valueLabel = series.bullets.push(new am4charts.LabelBullet());
//valueLabel.label.text = "{valueY.value}";
//valueLabel.label.dy = -40;
valueLabel.label.truncate = false;
valueLabel.label.hideOversized = false;

chart.cursor = new am4charts.XYCursor();

//chart.exporting.menu = new am4core.ExportMenu();
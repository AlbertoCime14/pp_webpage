am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);


chart.data = [
 {
   "country": "Nuevo León",
        "visits": 57.5,
        "stroke": "3,3",
        "opacity": 0.5, "promedio": 43.3
 },
 {
   "country": "Coahuila",
     "visits": 55.4,
     "stroke": "3,3",
     "opacity": 0.5, "promedio": 43.3
 },
 {
   "country": "Chihuahua",
     "visits": 53.8,
     "stroke": "3,3",
     "opacity": 0.5, "promedio": 43.3
 },
 {
   "country": "Durango",
     "visits": 52,
     "stroke": "3,3",
     "opacity": 0.5, "promedio": 43.3
 },
 {
   "country": "Sonora",
     "visits": 51.9,
     "stroke": "3,3",
     "opacity": 0.5, "promedio": 43.3
 },
 {
   "country": "Aguascalientes",
     "visits": 51.6,
     "stroke": "3,3",
     "opacity": 0.5, "promedio": 43.3
 },
 {
   "country": "Baja California Sur",
     "visits": 51.2,
     "stroke": "3,3",
     "opacity": 0.5, "promedio": 43.3
 },
 {
   "country": "Nayarit",
     "visits": 49.3,
     "stroke": "3,3",
     "opacity": 0.5, "promedio": 43.3
 },
 {
   "country": "Tamaulipas",
     "visits": 48.8,
     "stroke": "3,3",
     "opacity": 0.5, "promedio": 43.3
 },
 {
   "country": "Tlaxcala",
     "visits": 48.7,
     "stroke": "3,3",
     "opacity": 0.5, "promedio": 43.3
 },
 {
   "country": "Zacatecas",
     "visits": 47.7,
     "stroke": "3,3",
     "opacity": 0.5, "promedio": 43.3
 },
 {
   "country": "Baja California",
     "visits": 47.7,
     "stroke": "3,3",
     "opacity": 0.5, "promedio": 43.3
 },
 {
   "country": "Sinaloa",
     "visits": 47.4,
     "stroke": "3,3",
     "opacity": 0.5, "promedio": 43.3
 },
 {
   "country": "Campeche",
     "visits": 46.8,
     "stroke": "3,3",
     "opacity": 0.5, "promedio": 43.3
 },
 {
   "country": "Quintana Roo",
     "visits": 45.1,
     "stroke": "3,3",
     "opacity": 0.5, "promedio": 43.3
 },
 {
   "country": "San Luis Potosí",
     "visits": 44.9,
     "stroke": "3,3",
     "opacity": 0.5, "promedio": 43.3
 },
 {
   "country": "Jalisco",
     "visits": 44.7,
     "stroke": "3,3",
     "opacity": 0.5, "promedio": 43.3
 },
 {
   "country": "Querétaro",
     "visits": 44.3,
     "stroke": "3,3",
     "opacity": 0.5, "promedio": 43.3
 },
 {
   "country": "Guanajuato",
     "visits": 43.4,
     "stroke": "3,3",
     "opacity": 0.5, "promedio": 43.3
 },

 {
   "country": "México",
     "visits": 42.3,
     "stroke": "3,3",
     "opacity": 0.5, "promedio": 43.3
 },
 {
   "country": "Ciudad de México",
     "visits": 41.6,
     "stroke": "3,3",
     "opacity": 0.5, "promedio": 43.3
 },
 {
   "country": "Colima",
     "visits": 41.4,
     "stroke": "3,3",
     "opacity": 0.5, "promedio": 43.3
 },
 {
   "country": "Hidalgo",
     "visits": 40.3,
     "stroke": "3,3",
     "opacity": 0.5, "promedio": 43.3
 },
 {
   "country": "Veracruz",
     "visits": 38.6,
     "stroke": "3,3",
     "opacity": 0.5, "promedio": 43.3
 },
 {
   "country": "Michoacán",
     "visits": 38.2,
     "stroke": "3,3",
     "opacity": 0.5, "promedio": 43.3
 },
 {
   "country": "Tabasco",
     "visits": 36.5,
     "stroke": "3,3",
     "opacity": 0.5, "promedio": 43.3
 },
 {
   "country": "Morelos",
     "visits": 35,
     "stroke": "3,3",
     "opacity": 0.5, "promedio": 43.3
 },
 {
   "country": "Guerrero",
     "visits": 30,
     "stroke": "3,3",
     "opacity": 0.5, "promedio": 43.3
 },
 {
   "country": "Puebla",
     "visits": 29.3,
     "stroke": "3,3",
     "opacity": 0.5, "promedio": 43.3
 },
 {
   "country": "Chiapas",
     "visits": 27.5,
     "stroke": "3,3",
     "opacity": 0.5, "promedio": 43.3
 },
 {
     "country": "[font - size: 20px; font-weight: bold]Yucatán[/]",
     "visits": 27.4, "promedio": 43.3
 },
 {
   "country": "Oaxaca",
     "visits": 24.9,
     "stroke": "3,3",
     "opacity": 0.5, "promedio": 43.3
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
valueAxis.max = 70;
valueAxis.strictMinMax = true;


var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryX = "country";
series.dataFields.valueY = "visits";
series.tooltipText = "{valueY.value}"
series.columns.template.strokeOpacity = 0;
series.fill = am4core.color("#95c11f");

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
//var valueLabel = series.bullets.push(new am4charts.LabelBullet());
//valueLabel.label.text = "{valueY}";
//valueLabel.label.dy = -20;



chart.cursor = new am4charts.XYCursor();

//chart.exporting.menu = new am4core.ExportMenu();

//Valores de las barras verticales
var valueLabel = series.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY.value}";
valueLabel.label.dy = -40;
valueLabel.label.truncate = false;
valueLabel.label.hideOversized = false;
valueLabel.label.rotation = 270;

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

var label = chart.createChild(am4core.Label);
label.text = "Promedio nacional: 43.3";
label.fontSize = 16;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(10);//Ajusta la alineación horizontal via porcentaje
label.horizontalCenter = "middle";
label.y = 120; //Ajusta alineación vertical, positivo (hacia abajo) negativo (hacia arriba
label.x = 1250;
//.-Para colocar la etiqueta del valor del promedio nacional

//var label = categoryAxis.renderer.labels.template;
//label.wrap = true;
//label.maxWidth = 120;
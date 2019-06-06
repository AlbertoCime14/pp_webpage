am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);


chart.data = [
 {
   "country": "Oaxaca",
   "visits": " 7580.8 ",
    "stroke": "3,3",
    "opacity": 0.5, "promedio":881
 },
 {
   "country": "Baja California",
   "visits": " 4,111.8 ",
    "stroke": "3,3",
     "opacity": 0.5, "promedio": 881
 },
 {
   "country": "Tabasco",
   "visits": " 2,652.8 ",
    "stroke": "3,3",
     "opacity": 0.5, "promedio": 881
 },
 
 {
   "country": "Nuevo León",
   "visits": " 827.5 ",
    "stroke": "3,3",
     "opacity": 0.5, "promedio": 881
 },
 {
   "country": "Veracruz",
   "visits": " 705.2 ",
    "stroke": "3,3",
     "opacity": 0.5, "promedio": 881
 },
 {
   "country": "Puebla",
   "visits": " 653.3 ",
    "stroke": "3,3",
     "opacity": 0.5, "promedio": 881
 },
 {
   "country": "San Luis Potosí",
   "visits": " 489.5 ",
    "stroke": "3,3",
     "opacity": 0.5, "promedio": 881
 },
 {
   "country": "Tamaulipas",
   "visits": " 440.1 ",
    "stroke": "3,3",
     "opacity": 0.5, "promedio": 881
 },
 {
   "country": "Coahuila",
   "visits": " 260.7 ",
    "stroke": "3,3",
     "opacity": 0.5, "promedio": 881
 },
 {
   "country": "Hidalgo",
   "visits": " 237.8 ",
    "stroke": "3,3",
     "opacity": 0.5, "promedio": 881
 },
 {
   "country": "Jalisco",
   "visits": " 194.6 ",
    "stroke": "3,3",
     "opacity": 0.5, "promedio": 881
 },
 {
   "country": "Chiapas",
   "visits": " 89.6 ",
    "stroke": "3,3",
     "opacity": 0.5, "promedio": 881
 },
 {
   "country": "Durango",
   "visits": " 83.4 ",
    "stroke": "3,3",
     "opacity": 0.5, "promedio": 881
 },
 {
   "country": "Estado de México",
   "visits": " 43.5 ",
    "stroke": "3,3",
     "opacity": 0.5, "promedio": 881
 },
 {
   "country": "Zacatecas",
   "visits": " 39.8 ",
    "stroke": "3,3",
     "opacity": 0.5, "promedio": 881
 },
 {
   "country": "Aguascalientes",
   "visits": " 31.7 ",
    "stroke": "3,3",
     "opacity": 0.5, "promedio": 881
 },
 {
   "country": "Baja California Sur",
   "visits": " 19.5 ",
    "stroke": "3,3",
     "opacity": 0.5, "promedio": 881
 },
 {
   "country": "Ciudad de México",
   "visits": " 16.3 ",
    "stroke": "3,3",
     "opacity": 0.5, "promedio": 881
 },
 {
     "country": "[font - size: 20px; font-weight: bold]Yucatán[/]",
     "visits": " 15.6 ", "promedio": 881
 },
 {
   "country": "Sonora",
   "visits": " 4.8 ",
    "stroke": "3,3",
     "opacity": 0.5, "promedio": 881
 },
 {
   "country": "Quintana Roo",
   "visits": " 2.3 ",
    "stroke": "3,3",
     "opacity": 0.5, "promedio": 881
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
valueAxis.max = 10000;
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



//var label = categoryAxis.renderer.labels.template;
//label.wrap = true;
//label.maxWidth = 120;
am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);


chart.data = [
 {
   "country": "Zacatecas",
        "visits": 0.9,
        "stroke": "3,3",
        "opacity": 0.5
 },
 {
   "country": "Morelos",
     "visits": 0.89,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
     "country": "[font - size: 20px; font-weight: bold]Yucatán[/]",
   "visits": 0.88
 },
 {
   "country": "Sonora",
     "visits": 0.87,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Jalisco",
     "visits": 0.86,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Tabasco",
     "visits": 0.84,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Querétaro",
     "visits": 0.83,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Nuevo León",
     "visits": 0.82,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Puebla",
     "visits": 0.8,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Veracruz ",
     "visits": 0.79,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Tlaxcala",
     "visits": 0.78,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Oaxaca",
     "visits": 0.78,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Durango",
     "visits": 0.77,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Promedio",
     "visits": 0.76,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Tamaulipas",
     "visits": 0.74,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Guanajuato",
     "visits": 0.74,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Ciudad de México",
     "visits": 0.74,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Hidalgo",
     "visits": 0.74,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Campeche",
     "visits": 0.72,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "San Luis Potosí",
     "visits": 0.71,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Aguascalientes",
     "visits": 0.7,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Chiapas",
     "visits": 0.68,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Michoacán",
     "visits": 0.68,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Chihuahua",
     "visits": 0.67,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Nayarit",
     "visits": 0.65,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Coahuila",
     "visits": 0.64,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "México",
     "visits": 0.63,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Baja California",
     "visits": 0.62,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Quintana Roo",
     "visits": 0.6,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Colima",
     "visits": 0.59,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Guerrero",
     "visits": 0.59,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Baja California Sur",
     "visits": 0.57,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Sinaloa",
     "visits": 0.52,
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
valueAxis.max = 1.1;
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
valueLabel.label.dy = -20;
valueLabel.label.truncate = false;
valueLabel.label.hideOversized = false;
//valueLabel.label.rotation = 270;



//var label = categoryAxis.renderer.labels.template;
//label.wrap = true;
//label.maxWidth = 120;
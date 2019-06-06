am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);


chart.data = [
 {
    "country": "Valle de México",
    "visits": 20,
    "stroke": "3,3",
    "opacity": 1
 },
 {
   "country": "Saltillo",
     "visits": 19,
     "stroke": "3,3",
     "opacity": 1
 },
 {
   "country": "Guadalajara",
     "visits": 18,
     "stroke": "3,3",
     "opacity": 1
 },
 {
   "country": "León",
     "visits": 17,
     "stroke": "3,3",
     "opacity": 0.75
 },
 {
   "country": "Toluca",
     "visits": 16,
     "stroke": "3,3",
     "opacity": 0.75
 },
 {
     "country": "[font - size: 20px; font-weight: bold]Mérida[/]",
     "visits": 15,
     "stroke": "3,3",
     "opacity": 0.75
 },
 {
   "country": "Morelia",
     "visits": 14,
     "stroke": "3,3",
     "opacity": 0.75
 },
 {
   "country": "Querétaro",
     "visits": 13,
     "stroke": "3,3",
     "opacity": 0.75
 },
 {
   "country": "Aguascalientes",
     "visits": 12,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Monterrey",
     "visits": 11,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Chihuahua",
     "visits": 10,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Veracruz",
     "visits": 9,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "San Luis Potosí",
     "visits": 8,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Cancún",
     "visits": 7,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Puebla-Tlax",
     "visits": 6,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Tijuana",
     "visits": 5,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Cuernavaca",
     "visits": 4,
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Tampico - Pánuco",
     "visits": 3,
     "stroke": "3,3",
     "opacity": 0.5
 },

{
   "country": "Villahermosa",
     "visits": 2,
     "color":"#000000",
     "fill":"#000000",
     "stroke": "3,3",
     "opacity": 0.25
 },
 {
   "country": "Acapulco",
     "visits": 2,
     "stroke": "3,3",
     "opacity": 0.25
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

var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryX = "country";
series.dataFields.valueY = "visits";
series.tooltipText = "{valueY.value}"
series.columns.template.strokeOpacity = 0;
//series.fill = am4core.color("#95c11f");

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

chart.cursor = new am4charts.XYCursor();

//chart.exporting.menu = new am4core.ExportMenu();
am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);


chart.data = [
 {
   "country": "Norte II, CAMP ",
        "visits": 880,
        "stroke": "3,3",
        "opacity": 0.5,
 },
 {
   "country": "Norte I, CAMP",
     "visits": 856,
     "stroke": "3,3",
     "opacity": 0.5,
 },
 {
   "country": "Zacatal, CAMP",
     "visits": 677,
     "stroke": "3,3",
     "opacity": 0.5,
 },
 {
   "country": "Manigua, CAMP",
     "visits": 464,
     "stroke": "3,3",
     "opacity": 0.5,
 },
 {
     "country": "[font - size: 20px; font-weight: bold]Chicxulub, YUC[/]",
   "visits": 170
 },
 {
   "country": "Norte II, CAMP",
     "visits": 161,
     "stroke": "3,3",
     "opacity": 0.5,
 },
 {
   "country": "Tortugas, Q.ROO",
     "visits": 140,
     "stroke": "3,3",
     "opacity": 0.5,
 },
 {
   "country": "Niño P. Juarez, Q.ROO",
     "visits": 114,
     "stroke": "3,3",
     "opacity": 0.5,
 },
    {
   "country": "[font - size: 20px; font-weight: bold]Progreso I, YUC[/]",
   "visits": 105
 },
 {
   "country": "Langosta, Q.ROO",
     "visits": 94,
     "stroke": "3,3",
     "opacity": 0.5,
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
valueAxis.max = 1000;
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
//valueLabel.label.rotation = 270;



//var label = categoryAxis.renderer.labels.template;
//label.wrap = true;
//label.maxWidth = 120;
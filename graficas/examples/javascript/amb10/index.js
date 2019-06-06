am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

/*chart.data = [
 {
   "country": "México",
        "visits": "1,380",
        "stroke": "3,3",
        "opacity": 0.5
 },
 {
   "country": "Chihuahua",
     "visits": "778",
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Michoacán",
     "visits": "621",
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Ciudad de México",
     "visits": "575",
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Jalisco",
     "visits": "525",
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Puebla",
     "visits": "364",
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Chiapas",
     "visits": "344",
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Durango",
     "visits": "325",
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Guerrero",
     "visits": "291",
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Tlaxcala",
     "visits": "266",
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Oaxaca",
     "visits": "170",
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Morelos",
     "visits": "147",
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Veracruz",
     "visits": "134",
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Hidalgo",
     "visits": "101",
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Zacatecas",
     "visits": "91",
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Coahuila",
     "visits": "86",
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Nayarit",
     "visits": "83",
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Baja California",
     "visits": "78",
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Sonora",
     "visits": "61",
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "San Luis Potosí",
     "visits": "55",
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Sinaloa",
     "visits": "54",
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Colima",
     "visits": "54",
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Quintana Roo",
     "visits": "50",
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Guanajuato",
     "visits": "50",
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "[font - size: 20px; font-weight: bold]Yucatán[/]",
   "visits": "46"
 },
 {
   "country": "Tabasco",
     "visits": "45",
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Aguascalientes",
     "visits": "44",
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Nuevo León",
     "visits": "42",
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Querétaro",
     "visits": "36",
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Tamaulipas",
     "visits": "19",
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Campeche",
     "visits": "3",
     "stroke": "3,3",
     "opacity": 0.5
 },
 {
   "country": "Baja California Sur",
     "visits": "3",
     "stroke": "3,3",
     "opacity": 0.5
 }
];*/


chart.data = [
 {
    "Año": "1991",
    "Incendios": 69
 },
 {
    "Año": "1995",
    "Incendios": 16
 },
 {
    "Año": "2000",
    "Incendios": 43
 },
 {
    "Año": "2005",
    "Incendios": 82
 },
 {
    "Año": "2010",
    "Incendios": 34
 },
 {
    "Año": "2011",
    "Incendios": 61
 },
 {
    "Año": "2012",
    "Incendios": 16
 },
 {
    "Año": "2013",
    "Incendios": 46
 },
 {
    "Año": "2014",
    "Incendios": 9
 },
 {
    "Año": "2015",
    "Incendios": 34
 },
 {
    "Año": "2016",
    "Incendios": 155
 },
 {
    "Año": "2017",
    "Incendios": 103
 },
 {
    "Año": "2018",
    "Incendios": 46
 }
];

chart.padding(40, 40, 40, 40);

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "Año";
categoryAxis.renderer.minGridDistance = 1;

categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.max = 180;
valueAxis.strictMinMax = true;


var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryX = "Año";
series.dataFields.valueY = "Incendios";
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



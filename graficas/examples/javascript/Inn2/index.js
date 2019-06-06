am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);



    chart.data = [
 {
   "ENTIDAD FEDERATIVA": "CDMX",
   "fillOpacity": 0.5,
   "Promedio Nacional": 73,
   "PROGRAMAS": 496
 },
 {
   "ENTIDAD FEDERATIVA": "JALISCO",
   "fillOpacity": 0.5,
   "Promedio Nacional": 73,
   "PROGRAMAS": 206
 },
 {
   "ENTIDAD FEDERATIVA": "NUEVO LEON",
   "fillOpacity": 0.5,
   "Promedio Nacional": 73,
   "PROGRAMAS": 173
 },
 {
   "ENTIDAD FEDERATIVA": "EDO.MEX.",
   "fillOpacity": 0.5,
   "Promedio Nacional": 73,
   "PROGRAMAS": 123
 },
 {
   "ENTIDAD FEDERATIVA": "VERACRUZ",
   "fillOpacity": 0.5,
   "Promedio Nacional": 73,
   "PROGRAMAS": 104
 },
 {
   "ENTIDAD FEDERATIVA": "PUEBLA",
   "fillOpacity": 0.5,
   "Promedio Nacional": 73,
   "PROGRAMAS": 100
 },
 {
   "ENTIDAD FEDERATIVA": "SAN LUIS POTOSI",
   "fillOpacity": 0.5,
   "Promedio Nacional": 73,
   "PROGRAMAS": 91
 },
 {
   "ENTIDAD FEDERATIVA": "QUERETARO",
   "fillOpacity": 0.5,
   "Promedio Nacional": 73,
   "PROGRAMAS": 85
 },
 {
   "ENTIDAD FEDERATIVA": "BAJA CALIFORNIA",
   "fillOpacity": 0.5,
   "Promedio Nacional": 73,
   "PROGRAMAS": 82
 },
 {
   "ENTIDAD FEDERATIVA": "GUANAJUATO",
   "fillOpacity": 0.5,
   "Promedio Nacional": 73,
   "PROGRAMAS": 82
 },
 {
   "ENTIDAD FEDERATIVA": "CHIHUAHUA",
   "fillOpacity": 0.5,
   "Promedio Nacional": 73,
   "PROGRAMAS": 74
 },
 {
   "ENTIDAD FEDERATIVA": "MORELOS",
   "fillOpacity": 0.5,
   "Promedio Nacional": 73,
   "PROGRAMAS": 65
 },
 {
   "ENTIDAD FEDERATIVA": "MICHOACAN",
   "fillOpacity": 0.5,
   "Promedio Nacional": 73,
   "PROGRAMAS": 60
 },
 {
   "ENTIDAD FEDERATIVA": "SINALOA",
   "fillOpacity": 0.5,
   "Promedio Nacional": 73,
   "PROGRAMAS": 58
 },
 {
   "ENTIDAD FEDERATIVA": "SONORA",
   "fillOpacity": 0.5,
   "Promedio Nacional": 73,
   "PROGRAMAS": 57
 },
 {
   "ENTIDAD FEDERATIVA": "COAHUILA",
   "fillOpacity": 0.5,
   "Promedio Nacional": 73,
   "PROGRAMAS": 55
 },
 {
   "ENTIDAD FEDERATIVA": "TABASCO",
   "fillOpacity": 0.5,
   "Promedio Nacional": 73,
   "PROGRAMAS": 50
 },
 {
   "ENTIDAD FEDERATIVA": "[font-size: 20px; font-weight: bold;]YUCATÁN[/]",
   "fillOpacity": 1,
   "Promedio Nacional": 73,
   "PROGRAMAS": 49
 },
 {
   "ENTIDAD FEDERATIVA": "HIDALGO",
   "fillOpacity": 0.5,
   "Promedio Nacional": 73,
   "PROGRAMAS": 38
 },
 {
   "ENTIDAD FEDERATIVA": "TAMPICO",
   "fillOpacity": 0.5,
   "Promedio Nacional": 73,
   "PROGRAMAS": 36
 },
 {
   "ENTIDAD FEDERATIVA": "AGUASCALIENTES",
   "fillOpacity": 0.5,
   "Promedio Nacional": 73,
   "PROGRAMAS": 33
 },
 {
   "ENTIDAD FEDERATIVA": "CHIAPAS",
   "fillOpacity": 0.5,
   "Promedio Nacional": 73,
   "PROGRAMAS": 33
 },
 {
   "ENTIDAD FEDERATIVA": "GUERRERO",
   "fillOpacity": 0.5,
   "Promedio Nacional": 73,
   "PROGRAMAS": 31
 },
 {
   "ENTIDAD FEDERATIVA": "OAXACA",
   "fillOpacity": 0.5,
   "Promedio Nacional": 73,
   "PROGRAMAS": 28
 },
 {
   "ENTIDAD FEDERATIVA": "ZACATECAS",
   "fillOpacity": 0.5,
   "Promedio Nacional": 73,
   "PROGRAMAS": 22
 },
 {
   "ENTIDAD FEDERATIVA": "DURANGO",
   "fillOpacity": 0.5,
   "Promedio Nacional": 73,
   "PROGRAMAS": 21
 },
 {
   "ENTIDAD FEDERATIVA": "TLAXCALA",
   "fillOpacity": 0.5,
   "Promedio Nacional": 73,
   "PROGRAMAS": 16
 },
 {
   "ENTIDAD FEDERATIVA": "QUINTANA ROO",
   "fillOpacity": 0.5,
   "Promedio Nacional": 73,
   "PROGRAMAS": 15
 },
 {
   "ENTIDAD FEDERATIVA": "BAJA CALIFORNIA SUR",
   "fillOpacity": 0.5,
   "Promedio Nacional": 73,
   "PROGRAMAS": 13
 },
 {
   "ENTIDAD FEDERATIVA": "COLIMA",
   "fillOpacity": 0.5,
   "Promedio Nacional": 73,
   "PROGRAMAS": 12
 },
 {
   "ENTIDAD FEDERATIVA": "CAMPECHE",
   "fillOpacity": 0.5,
   "Promedio Nacional": 73,
   "PROGRAMAS": 9
 },
 {
   "ENTIDAD FEDERATIVA": "NAYARIT",
   "fillOpacity": 0.5,
   "Promedio Nacional": 73,
   "PROGRAMAS": 9
 }
];

//Formato a 1 decimal

chart.padding(40, 40, 40, 40);

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "ENTIDAD FEDERATIVA";
categoryAxis.renderer.minGridDistance = 1;

//Etiquetas debajo de la barra vertical centradas
categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryX = "ENTIDAD FEDERATIVA";
series.dataFields.valueY = "PROGRAMAS";
series.tooltipText = "{valueY.value}"
series.columns.template.strokeOpacity = 0;
series.columns.template.fill = am4core.color('#00A8E4');
series.columns.template.propertyFields.fillOpacity = "fillOpacity";

//Valores de las barras verticales
var valueLabel = series.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY}";
valueLabel.label.dy = -20;


var lineSeries = chart.series.push(new am4charts.LineSeries());
lineSeries.dataFields.categoryX = "ENTIDAD FEDERATIVA";
lineSeries.dataFields.valueY = "Promedio Nacional";
lineSeries.tooltipText = "Promedio Nacional: {valueY.value}";
lineSeries.sequencedInterpolation = true;
lineSeries.defaultState.transitionDuration = 1500;
lineSeries.stroke = am4core.color("#FF0000"); //chart.colors.getIndex(11);
lineSeries.fill = lineSeries.stroke;
lineSeries.strokeWidth = 2;



var label = chart.createChild(am4core.Label);
label.text = "Promedio Nacional: 73";
label.fontSize = 14;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(90);
label.horizontalCenter = "middle";
label.y = am4core.percent(61);

chart.cursor = new am4charts.XYCursor();
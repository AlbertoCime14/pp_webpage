am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_kelly);

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

// Add data

chart.data = [
 {
   "Descripcion": "Subíndice Ambiental",
   "Yucatan":34.8,
   "Promedio":51.9,
   "Ranking": 2
 },
 {
   "Descripcion": "Volumen tratado \nde aguas residuales",
   "Yucatan":0,
   "Promedio":47,
   "Ranking": 1
 },
 {
   "Descripcion": "Eficiencia económica \ndel agua en la agricultura",
   "Yucatan":0,
   "Promedio":4,
   "Ranking": 2
 },
 {
   "Descripcion": "Índice de Competitividad\n Forestal",
   "Yucatan":7,
   "Promedio":56,
   "Ranking": 2
 },
 {
   "Descripcion": "Pérdida en superficie \ncubierta por árboles",
   "Yucatan":44,
   "Promedio":79,
   "Ranking": 28
 },
 {
   "Descripcion": "Áreas naturales \nprotegidas",
   "Yucatan":10,
   "Promedio":16,
   "Ranking": 20
 },
 {
   "Descripcion": "Volumen de residuos\n sólidos generados",
   "Yucatan":78,
   "Promedio":68,
   "Ranking": 22
 },
 {
   "Descripcion": "Disposición adecuada\n de residuos sólidos",
   "Yucatan":33,
   "Promedio":65,
   "Ranking": 7
 },
 {
   "Descripcion": "Intensidad energética\n de la economía",
   "Yucatan":42,
   "Promedio":39,
   "Ranking": 19
 },
 {
   "Descripcion": "Certificados \"Industria\n limpia\" emitidos",
   "Yucatan":14,
   "Promedio":27,
   "Ranking": 14
 },
 {
   "Descripcion": "Gastos autorizados\n al FONDEN",
   "Yucatan":14,
   "Promedio":27,
   "Ranking": 32
 }
];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Descripcion";
categoryAxis.title.text = "";

// First value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "Subíndice ambiental";

// Second value axis
var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis2.title.text = "Ranking";
valueAxis2.renderer.opposite = true;
// Invertir el orden de los valores de la escala
//valueAxis2.renderer.inversed = true;

// First series
var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "Yucatan";
series.dataFields.categoryX = "Descripcion";
series.name = "Yucatán";
series.fill = am4core.color('#40520f');
series.strokeWidth = 0;
series.tooltipText = "{name}: [bold]{valueY}[/]";

var series3 = chart.series.push(new am4charts.ColumnSeries());
series3.dataFields.valueY = "Promedio";
series3.dataFields.categoryX = "Descripcion";
series3.name = "Promedio";
series3.fill = am4core.color('#8bb51d');
series3.strokeWidth = 0;
series3.tooltipText = "{name}: [bold]{valueY}[/]";

// Second series
var series2 = chart.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = "Ranking";
series2.dataFields.categoryX = "Descripcion";
series2.name = "Ranking";
series2.stroke = am4core.color('#c1e75c');
series2.tooltipText = "{name}: [bold]{valueY}[/]";
series2.strokeWidth = 3;
series2.yAxis = valueAxis2;

var bullet = series2.bullets.push(new am4charts.LabelBullet());
bullet.interactionEnabled=false;
bullet.label.text= "[bold]{valueY.value}[/]";
//bullet.label.background.fill = am4core.color("#25132f");
bullet.label.fill = am4core.color("#000000");
//bullet.label.dy = -30;

// Add legend
chart.legend = new am4charts.Legend();

// Add cursor
chart.cursor = new am4charts.XYCursor();
am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_kelly);

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

// Add data


chart.data = [
 {
   "Año": "2007",
   "Porcentaje de ingresos propios": 5.4,
   "Lugar que ocupa": 23
 },
 {
   "Año": "2008",
   "Porcentaje de ingresos propios": 3.9,
   "Lugar que ocupa": 26
 },
 {
   "Año": "2009",
   "Porcentaje de ingresos propios": 4.9,
   "Lugar que ocupa": 22
 },
 {
   "Año": "2010",
   "Porcentaje de ingresos propios": 5.9,
   "Lugar que ocupa": 18
 },
 {
   "Año": "2011",
   "Porcentaje de ingresos propios": 8,
   "Lugar que ocupa": 14
 },
 {
   "Año": "2012",
   "Porcentaje de ingresos propios": 8.3,
   "Lugar que ocupa": 11
 },
 {
   "Año": "2013",
   "Porcentaje de ingresos propios": 6.8,
   "Lugar que ocupa": 19
 },
 {
   "Año": "2014",
   "Porcentaje de ingresos propios": 8.3,
   "Lugar que ocupa": 13
 },
 {
   "Año": "2015",
   "Porcentaje de ingresos propios": 8.5,
   "Lugar que ocupa": 12
 },
 {
   "Año": "2016",
   "Porcentaje de ingresos propios": 9,
   "Lugar que ocupa": 11
 },
 {
   "Año": "2017",
   "Porcentaje de ingresos propios": 10,
   "Lugar que ocupa": 13
 }
];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Año";
categoryAxis.title.text = "Año";

// First value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "Porcentaje de ingresos propios";

// Second value axis
var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis2.title.text = "Lugar que ocupa";
valueAxis2.renderer.opposite = true;
// Invertir el orden de los valores de la escala
valueAxis2.renderer.inversed = true;

// First series
var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "Porcentaje de ingresos propios";
series.dataFields.categoryX = "Año";
series.name = "Porcentaje de ingresos propios";
series.fill = am4core.color('#8fbec7');
series.strokeWidth = 0;
series.tooltipText = "{name}: [bold]{valueY}[/]";

// Second series
var series2 = chart.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = "Lugar que ocupa";
series2.dataFields.categoryX = "Año";
series2.name = "Lugar que ocupa";
series2.stroke = am4core.color('#4E8994');
series2.tooltipText = "{name}: [bold]{valueY}[/]";
series2.strokeWidth = 3;
series2.yAxis = valueAxis2;

// Add legend
chart.legend = new am4charts.Legend();

// Add cursor
chart.cursor = new am4charts.XYCursor();
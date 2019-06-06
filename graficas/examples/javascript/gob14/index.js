am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_kelly);

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

// Add data


chart.data = [
 {
   "Año": "2011",
   "Porcentaje de financiamiento con relación al PIBE": 0.81,
   "Lugar que ocupa": 26
 },
 {
   "Año": "2012",
   "Porcentaje de financiamiento con relación al PIBE": 1.11,
   "Lugar que ocupa": 27
 },
 {
   "Año": "2013",
   "Porcentaje de financiamiento con relación al PIBE": 0.97,
   "Lugar que ocupa": 25
 },
 {
   "Año": "2014",
   "Porcentaje de financiamiento con relación al PIBE": 0.89,
   "Lugar que ocupa": 28
 },
 {
   "Año": "2015",
   "Porcentaje de financiamiento con relación al PIBE": 0.80,
   "Lugar que ocupa": 28
 },
 {
   "Año": "2016",
   "Porcentaje de financiamiento con relación al PIBE": 0.78,
   "Lugar que ocupa": 27
 },
 {
   "Año": "2017",
   "Porcentaje de financiamiento con relación al PIBE": 1.33,
   "Lugar que ocupa": 23
 },
 {
   "Año": "2018",
   "Porcentaje de financiamiento con relación al PIBE": 1.18,
   "Lugar que ocupa": 22
 }
];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Año";
categoryAxis.title.text = "Año";

// First value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "Porcentaje de financiamiento con relación al PIBE";

// Second value axis
var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis2.title.text = "Lugar que ocupa";
// Cambiar la escala a la derecha de la gráfica
valueAxis2.renderer.opposite = true;
// Invertir el orden de los valores de la escala
valueAxis2.renderer.inversed = true;
// Formatear los valores de la escala, sólo de una serie
valueAxis2.numberFormatter = new am4core.NumberFormatter();
valueAxis2.numberFormatter.numberFormat = "#.";

// First series
var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "Porcentaje de financiamiento con relación al PIBE";
series.dataFields.categoryX = "Año";
series.name = "Porcentaje de financiamiento con relación al PIBE";
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

//chart.numberFormatter.numberFormat = "#.";
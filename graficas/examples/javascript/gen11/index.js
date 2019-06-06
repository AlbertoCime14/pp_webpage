am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_kelly);

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);
// Add data
// Add data
chart.data = [
 {
   "Periodo": "2018/04",
   "Yucatán": 40.6,
   "Promedio": 38.2,
   "Variación": 7.5
 },
 {
   "Periodo": "2018/03",
   "Yucatán": 37.8,
   "Promedio": 38.2,
   "Variación": -0.8
 },
 {
   "Periodo": "2018/02",
   "Yucatán": 38.1,
   "Promedio": 38.2,
   "Variación": -1.6
 },
 {
   "Periodo": "2018/01",
   "Yucatán": 38.7,
   "Promedio": 38.2,
   "Variación": 5.2
 },
 {
   "Periodo": "2017/04",
   "Yucatán": 36.8,
   "Promedio": 38.2,
   "Variación": -4.7
 },
 {
   "Periodo": "2017/03",
   "Yucatán": 38.6,
   "Promedio": 38.2,
   "Variación": 2.3
 },
 {
   "Periodo": "2017/02",
   "Yucatán": 37.7,
   "Promedio": 38.2,
   "Variación": 1.6
 },
 {
   "Periodo": "2017/01",
   "Yucatán": 37.1,
   "Promedio": 38.2,
   "Variación": -6.6
 },
 {
   "Periodo": "2016/04",
   "Yucatán": 39.7,
   "Promedio": 38.2,
   "Variación": 1.3
 },
 {
   "Periodo": "2016/03",
   "Yucatán": 39.2,
   "Promedio": 38.2,
   "Variación": 4.1
 },
 {
   "Periodo": "2016/02",
   "Yucatán": 37.7,
   "Promedio": 38.2,
   "Variación": 0.1
 },
 {
   "Periodo": "2016/01",
   "Yucatán": 37.7,
   "Promedio": 38.2,
   "Variación": 5.3
 },
 {
   "Periodo": "2015/04",
   "Yucatán": 35.8,
   "Promedio": 38.2,
   "Variación": -2.1
 },
 {
   "Periodo": "2015/03",
   "Yucatán": 36.5,
   "Promedio": 38.2,
   "Variación": 0.9
 },
 {
   "Periodo": "2015/02",
   "Yucatán": 36.2,
   "Promedio": 38.2,
   "Variación": 2.1
 },
 {
   "Periodo": "2015/01",
   "Yucatán": 35.5,
   "Promedio": 38.2,
   "Variación": -2.4
 },
 {
   "Periodo": "2014/04",
   "Yucatán": 36.3,
   "Promedio": 38.2,
   "Variación": -1.3
 },
 {
   "Periodo": "2014/03",
   "Yucatán": 36.8,
   "Promedio": 38.2,
   "Variación": -7.2
 },
 {
   "Periodo": "2014/02",
   "Yucatán": 39.7,
   "Promedio": 38.2,
   "Variación": 2.3
 },
 {
   "Periodo": "2014/01",
   "Yucatán": 38.8,
   "Promedio": 38.2,
   "Variación": -6.8
 },
 {
   "Periodo": "2013/04",
   "Yucatán": 41.6,
   "Promedio": 38.2,
   "Variación": 13.3
 },
 {
   "Periodo": "2013/03",
   "Yucatán": 36.7,
   "Promedio": 38.2,
   "Variación": -4.8
 },
 {
   "Periodo": "2013/02",
   "Yucatán": 38.6,
   "Promedio": 38.2,
   "Variación": 0.5
 },
 {
   "Periodo": "2013/01",
   "Yucatán": 38.4,
   "Promedio": 38.2,
   "Variación": -1.7
 },
 {
   "Periodo": "2012/04",
   "Yucatán": 39.1,
   "Promedio": 38.2,
   "Variación": 2
 },
 {
   "Periodo": "2012/03",
   "Yucatán": 38.3,
   "Promedio": 38.2,
   "Variación": 0.2
 },
 {
   "Periodo": "2012/02",
   "Yucatán": 38.2,
   "Promedio": 38.2,
   "Variación": 1.3
 },
 {
   "Periodo": "2012/01",
   "Yucatán": 37.7,
   "Promedio": 38.2,
   "Variación": -3.2
 },
 {
   "Periodo": "2011/04",
   "Yucatán": 39,
   "Promedio": 38.2,
   "Variación": 8.2
 },
 {
   "Periodo": "2011/03",
   "Yucatán": 36,
   "Promedio": 38.2,
   "Variación": -8.1
 },
 {
   "Periodo": "2011/02",
   "Yucatán": 39.2,
   "Promedio": 38.2,
   "Variación": 1.3
 },
 {
   "Periodo": "2011/01",
   "Yucatán": 38.7,
   "Promedio": 38.2,
   "Variación": 8.4
 },
 {
   "Periodo": "2010/04",
   "Yucatán": 35.7,
   "Promedio": 38.2,
   "Variación": -5.2
 },
 {
   "Periodo": "2010/03",
   "Yucatán": 37.7,
   "Promedio": 38.2,
   "Variación": 0.5
 },
 {
   "Periodo": "2010/02",
   "Yucatán": 37.5,
   "Promedio": 38.2,
   "Variación": -6
 },
 {
   "Periodo": "2010/01",
   "Yucatán": 39.9,
   "Promedio": 38.2,
   "Variación": -0.8
 },
 {
   "Periodo": "2009/04",
   "Yucatán": 40.2,
   "Promedio": 38.2,
   "Variación": -3.1
 },
 {
   "Periodo": "2009/03",
   "Yucatán": 41.4,
   "Promedio": 38.2,
   "Variación": 5.6
 },
 {
   "Periodo": "2009/02",
   "Yucatán": 39.2,
   "Promedio": 38.2,
   "Variación": 1.8
 },
 {
   "Periodo": "2009/01",
   "Yucatán": 38.5,
   "Promedio": 38.2,
   "Variación": 1.2
 },
 {
   "Periodo": "2008/04",
   "Yucatán": 38.1,
   "Promedio": 38.2,
   "Variación": -2.5
 },
 {
   "Periodo": "2008/03",
   "Yucatán": 39,
   "Promedio": 38.2,
   "Variación": -1.4
 },
 {
   "Periodo": "2008/02",
   "Yucatán": 39.6,
   "Promedio": 38.2,
   "Variación": 6.6
 },
 {
   "Periodo": "2008/01",
   "Yucatán": 37.1,
   "Promedio": 38.2,
   "Variación": null
 }
];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Periodo";
categoryAxis.title.text = "";
//categoryAxis.renderer.inversed = true;

// First value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "";

// Second value axis
var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis2.title.text = "";
valueAxis2.renderer.opposite = true;
// Invertir el orden de los valores de la escala
//valueAxis2.renderer.inversed = true;

// First series
var series = chart.series.push(new am4charts.LineSeries());
series.dataFields.valueY = "Yucatán";
series.dataFields.categoryX = "Periodo";
series.name = "Yucatán";
series.stroke = am4core.color('#7D3D9F');
series.strokeWidth = 3;
series.tooltipText = "{name}: [bold]{valueY}[/]";

var series3 = chart.series.push(new am4charts.LineSeries());
series3.dataFields.valueY = "Promedio";
series3.dataFields.categoryX = "Periodo";
series3.name = "Promedio";
series3.stroke = am4core.color('#FF0000');
series3.strokeWidth = 3;
series3.tooltipText = "{name}: [bold]{valueY}[/]";

// Second series
var series2 = chart.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = "Variación";
series2.dataFields.categoryX = "Periodo";
series2.name = "Variación";
series2.stroke = am4core.color('#AA6DCA');
series2.tooltipText = "{name}: [bold]{valueY}[/]";
series2.strokeWidth = 3;
series2.yAxis = valueAxis2;


//Para colocar la etiqueta del valor del promedio nacional
var label = chart.createChild(am4core.Label);
label.text = "Promedio nacional 38.2";
label.fontSize = 14;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(38);//Ajusta la alineación horizontal via porcentaje
label.horizontalCenter = "middle";
label.y = 340; //Ajusta alineación vertical, positivo (hacia abajo) negativo (hacia arriba)
//.-Para colocar la etiqueta del valor del promedio nacional

/*
var bullet = series2.bullets.push(new am4charts.LabelBullet());
bullet.interactionEnabled=false;
bullet.label.text= "[bold]{valueY.value}[/]";
//bullet.label.background.fill = am4core.color("#25132f");
bullet.label.fill = am4core.color("#000000");
//bullet.label.dy = -30;
*/

// Add legend
chart.legend = new am4charts.Legend();

// Add cursor
chart.cursor = new am4charts.XYCursor();
am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_kelly);

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);
// Add data
 chart.data = [
 {
   "Periodo": "2008/03",
   "Yucatan": 3151.88,
   "Variacion": null,
   "Promedio": 3262.22
 },
 {
   "Periodo": "2008/04",
   "Yucatan": 3079.94,
   "Variacion": -2.28245091890692,
   "Promedio": 3262.22
 },
 {
   "Periodo": "2009/01",
   "Yucatan": 3036.99,
   "Variacion": -1.3945197650356,
   "Promedio": 3262.22
 },
 {
   "Periodo": "2009/02",
   "Yucatan": 3016.66,
   "Variacion": -0.669464460798928,
   "Promedio": 3262.22
 },
 {
   "Periodo": "2009/03",
   "Yucatan": 3247.72,
   "Variacion": 7.65950706082877,
   "Promedio": 3262.22
 },
 {
   "Periodo": "2009/04",
   "Yucatan": 2962.19,
   "Variacion": -8.79169871735856,
   "Promedio": 3262.22
 },
 {
   "Periodo": "2010/01",
   "Yucatan": 3371.15,
   "Variacion": 13.8058507967581,
   "Promedio": 3262.22
 },
 {
   "Periodo": "2010/02",
   "Yucatan": 3288.64,
   "Variacion": -2.44749974608037,
   "Promedio": 3262.22
 },
 {
   "Periodo": "2010/03",
   "Yucatan": 3362.51,
   "Variacion": 2.24625381406512,
   "Promedio": 3262.22
 },
 {
   "Periodo": "2010/04",
   "Yucatan": 3304.04,
   "Variacion": -1.73874146528041,
   "Promedio": 3262.22
 },
 {
   "Periodo": "2011/01",
   "Yucatan": 3269.17,
   "Variacion": -1.05542161240214,
   "Promedio": 3262.22
 },
 {
   "Periodo": "2011/02",
   "Yucatan": 3277.35,
   "Variacion": 0.250265889268789,
   "Promedio": 3262.22
 },
 {
   "Periodo": "2011/03",
   "Yucatan": 3263.77,
   "Variacion": -0.414390557486144,
   "Promedio": 3262.22
 },
 {
   "Periodo": "2011/04",
   "Yucatan": 3192.3,
   "Variacion": -2.18983734471644,
   "Promedio": 3262.22
 },
 {
   "Periodo": "2012/01",
   "Yucatan": 3147.03,
   "Variacion": -1.41821774827114,
   "Promedio": 3262.22
 },
 {
   "Periodo": "2012/02",
   "Yucatan": 3155.4,
   "Variacion": 0.265923398288946,
   "Promedio": 3262.22
 },
 {
   "Periodo": "2012/03",
   "Yucatan": 3120.63,
   "Variacion": -1.10163568256624,
   "Promedio": 3262.22
 },
 {
   "Periodo": "2012/04",
   "Yucatan": 3148,
   "Variacion": 0.876853788593094,
   "Promedio": 3262.22
 },
 {
   "Periodo": "2013/01",
   "Yucatan": 3226.71,
   "Variacion": 2.50052915381903,
   "Promedio": 3262.22
 },
 {
   "Periodo": "2013/02",
   "Yucatan": 3020.79,
   "Variacion": -6.38182998222629,
   "Promedio": 3262.22
 },
 {
   "Periodo": "2013/03",
   "Yucatan": 3407.75,
   "Variacion": 12.809937749845,
   "Promedio": 3262.22
 },
 {
   "Periodo": "2013/04",
   "Yucatan": 3392.08,
   "Variacion": -0.45982039246222,
   "Promedio": 3262.22
 },
 {
   "Periodo": "2014/01",
   "Yucatan": 3080.5,
   "Variacion": -9.18547429544437,
   "Promedio": 3262.22
 },
 {
   "Periodo": "2014/02",
   "Yucatan": 3332.81,
   "Variacion": 8.19027602779801,
   "Promedio": 3262.22
 },
 {
   "Periodo": "2014/03",
   "Yucatan": 3310.56,
   "Variacion": -0.667434360198697,
   "Promedio": 3262.22
 },
 {
   "Periodo": "2014/04",
   "Yucatan": 3255.93,
   "Variacion": -1.65029142263139,
   "Promedio": 3262.22
 },
 {
   "Periodo": "2015/01",
   "Yucatan": 3231.15,
   "Variacion": -0.760945397480972,
   "Promedio": 3262.22
 },
 {
   "Periodo": "2015/02",
   "Yucatan": 3237.72,
   "Variacion": 0.20340240240228,
   "Promedio": 3262.22
 },
 {
   "Periodo": "2015/03",
   "Yucatan": 3226.2,
   "Variacion": -0.355838871187238,
   "Promedio": 3262.22
 },
 {
   "Periodo": "2015/04",
   "Yucatan": 3183.52,
   "Variacion": -1.32291126884129,
   "Promedio": 3262.22
 },
 {
   "Periodo": "2016/01",
   "Yucatan": 3343.05,
   "Variacion": 5.01090588958434,
   "Promedio": 3262.22
 },
 {
   "Periodo": "2016/02",
   "Yucatan": 3303.78,
   "Variacion": -1.17450930555611,
   "Promedio": 3262.22
 },
 {
   "Periodo": "2016/03",
   "Yucatan": 3531.17,
   "Variacion": 6.88260470896941,
   "Promedio": 3262.22
 },
 {
   "Periodo": "2016/04",
   "Yucatan": 3468.95,
   "Variacion": -1.76208996582567,
   "Promedio": 3262.22
 },
 {
   "Periodo": "2017/01",
   "Yucatan": 3371.82,
   "Variacion": -2.7999754196218,
   "Promedio": 3262.22
 },
 {
   "Periodo": "2017/02",
   "Yucatan": 3347.44,
   "Variacion": -0.72292612345196,
   "Promedio": 3262.22
 },
 {
   "Periodo": "2017/03",
   "Yucatan": 3427.58,
   "Variacion": 2.39401331962161,
   "Promedio": 3262.22
 },
 {
   "Periodo": "2017/04",
   "Yucatan": 3525.97,
   "Variacion": 2.87070235859594,
   "Promedio": 3262.22
 },
 {
   "Periodo": "2018/01",
   "Yucatan": 3309.49,
   "Variacion": -6.13980416005257,
   "Promedio": 3262.22
 },
 {
   "Periodo": "2018/02",
   "Yucatan": 3308.74,
   "Variacion": -0.022473880749856,
   "Promedio": 3262.22
 },
 {
   "Periodo": "2018/03",
   "Yucatan": 3512.13,
   "Variacion": 6.1468905297197,
   "Promedio": 3262.22
 }
];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Periodo";
categoryAxis.title.text = "";

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
series.dataFields.valueY = "Yucatan";
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
series2.dataFields.valueY = "Variacion";
series2.dataFields.categoryX = "Periodo";
series2.name = "Variacion";
series2.stroke = am4core.color('#AA6DCA');
series2.tooltipText = "{name}: [bold]{valueY}[/]";
series2.strokeWidth = 3;
series2.yAxis = valueAxis2;

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

//Para colocar la etiqueta del valor del promedio nacional
var label = chart.createChild(am4core.Label);
label.text = "Promedio nacional 3,2622.22";
label.fontSize = 14;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(40);//Ajusta la alineación horizontal via porcentaje
label.horizontalCenter = "middle";
label.y = 290; //Ajusta alineación vertical, positivo (hacia abajo) negativo (hacia arriba)
//.-Para colocar la etiqueta del valor del promedio nacional
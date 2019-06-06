am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

//Datos en Excel
//             2014    2015    2016
//Auditorios    0.20    0.14    0.24
//Bibliotecas   0.78    0.77    0.76
//Centros culturales    2.89    2.94    2.76


// Add data
chart.data = [
 {
   "Periodo": "2007",
   "Yucatan": " $100,260.53 ",
   "Nacional": " $131,081.75 "
 },
 {
   "Periodo": "2008",
   "Yucatan": " $100,086.34 ",
   "Nacional": " $130,453.31 "
 },
 {
   "Periodo": "2009",
   "Yucatan": " $96,960.62 ",
   "Nacional": " $121,758.33 "
 },
 {
   "Periodo": "2010",
   "Yucatan": " $99,080.91 ",
   "Nacional": " $126,176.43 "
 },
 {
   "Periodo": "2011",
   "Yucatan": " $100,904.21 ",
   "Nacional": " $128,942.75 "
 },
 {
   "Periodo": "2012",
   "Yucatan": " $105,163.89 ",
   "Nacional": " $131,961.38 "
 },
 {
   "Periodo": "2013",
   "Yucatan": " $104,168.68 ",
   "Nacional": " $132,056.57 "
 },
 {
   "Periodo": "2014",
   "Yucatan": " $106,192.62 ",
   "Nacional": " $133,909.54 "
 },
 {
   "Periodo": "2015",
   "Yucatan": " $109,085.37 ",
   "Nacional": " $136,560.12 "
 },
 {
   "Periodo": "2016",
   "Yucatan": " $112,455.35 ",
   "Nacional": " $138,731.47 "
 },
 {
   "Periodo": "2017",
   "Yucatan": " $114,383.32 ",
   "Nacional": " $139,982.40 "
 }
];

// Create category axis
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Periodo";
categoryAxis.renderer.opposite = false;

// Create value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//valueAxis.renderer.inversed = true;
//valueAxis.title.text = "Place taken";
valueAxis.renderer.minLabelPosition = 0.01;
valueAxis.max = 141000;

// Create series
var series1 = chart.series.push(new am4charts.LineSeries());
series1.dataFields.valueY = "Yucatan";
series1.dataFields.categoryX = "Periodo";
series1.name = "Yucatan";
series1.strokeWidth = 3;
series1.bullets.push(new am4charts.CircleBullet());
series1.tooltipText = "Pib percapita en {name} en {categoryX}: {valueY}";
series1.legendSettings.valueText = "{valueY}";
//series1.visible = false;
series1.stroke = am4core.color('#025744');
series1.bullets.fill = am4core.color('#025744');

var valueLabel = series1.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY}";
valueLabel.label.dy = -25;
valueLabel.label.fontSize = 20;

var series2 = chart.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = "Nacional";
series2.dataFields.categoryX = "Periodo";
series2.name = 'Nacional';
series2.strokeWidth = 3;
series2.bullets.push(new am4charts.CircleBullet());
series2.tooltipText = "Pib percapita en {name} en {categoryX}: {valueY}";
//series2.legendSettings.valueText = "{valueY}";
series2.stroke = am4core.color('#02c298');
series2.bullets.fill = am4core.color('#02c298');

var valueLabel = series2.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY}";
valueLabel.label.dy = 30;
valueLabel.label.fontSize = 20;


// Add chart cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "zoomY";

// Add legend
chart.legend = new am4charts.Legend();
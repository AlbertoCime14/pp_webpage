am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

//Datos en Excel
//             2014    2015    2016
//Auditorios	0.20	0.14	0.24
//Bibliotecas	0.78	0.77	0.76
//Centros culturales	2.89	2.94	2.76


// Add data
chart.data = [
 {
   "Periodo": "2008",
   "MY": 0.7434,
   "MN": 0.755,
   "HY": 0.7389,
   "HN": 0.7434
 },
 {
   "Periodo": "2010",
   "MY": 0.7563,
   "MN": 0.7671,
   "HY": 0.7505,
   "HN": 0.7526
 },
 {
   "Periodo": "2012",
   "MY": 0.7685,
   "MN": 0.7835,
   "HY": 0.7614,
   "HN": 0.7668
 }
];

chart.colors.list = [
  am4core.color("#25132f"),
  am4core.color("#5e2f78"),
  am4core.color("#7e3da1"),
  am4core.color("#a96dca")
];

// Create category axis
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Periodo";
categoryAxis.renderer.opposite = false;

// Create value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//valueAxis.renderer.inversed = true;
valueAxis.title.text = "";
valueAxis.renderer.minLabelPosition = 0.01;

// Mujeres Yucatán
var series1 = chart.series.push(new am4charts.LineSeries());
series1.dataFields.valueY = "MY";
series1.dataFields.categoryX = "Periodo";
series1.name = "Mujeres Yucatán";
series1.strokeWidth = 3;

series1.bullets.push(new am4charts.CircleBullet());
series1.tooltipText = "{name} en {categoryX}: {valueY}";
series1.legendSettings.valueText = "{valueY}";
series1.visible = false;


var bullet = series1.bullets.push(new am4charts.LabelBullet());
bullet.interactionEnabled=false;
bullet.label.text= "{valueY.value}";
bullet.label.background.fill = am4core.color("#25132f");
bullet.label.fill = am4core.color("#FFFFFF");
bullet.label.dy = -30;
// Mujeres Yucatán


//Mujeres nacional
var series2 = chart.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = "MN";
series2.dataFields.categoryX = "Periodo";
series2.name = 'Mujeres Nacional';
series2.strokeWidth = 3;
series2.bullets.push(new am4charts.CircleBullet());
series2.tooltipText = "{name} en {categoryX}: {valueY}";
series2.legendSettings.valueText = "{valueY}";

var bullet = series2.bullets.push(new am4charts.LabelBullet());
bullet.interactionEnabled=false;
bullet.label.text= "{valueY.value}";
bullet.label.background.fill = am4core.color("#5e2f78");
bullet.label.fill = am4core.color("#FFFFFF");
bullet.label.dy = 20;
//Mujeres nacional

//Hombres Yucatán
var series3 = chart.series.push(new am4charts.LineSeries());
series3.dataFields.valueY = "HY";
series3.dataFields.categoryX = "Periodo";
series3.name = 'Hombres Yucatán';
series3.strokeWidth = 3;
series3.bullets.push(new am4charts.CircleBullet());
series3.tooltipText = "{name} en {categoryX}: {valueY}";
series3.legendSettings.valueText = "{valueY}";

var bullet = series3.bullets.push(new am4charts.LabelBullet());
bullet.interactionEnabled=false;
bullet.label.text= "{valueY.value}";
bullet.label.background.fill = am4core.color("#7e3da1");
bullet.label.fill = am4core.color("#FFFFFF");
bullet.label.dy = 20;
//Hombres Yucatán


var series4 = chart.series.push(new am4charts.LineSeries());
series4.dataFields.valueY = "HN";
series4.dataFields.categoryX = "Periodo";
series4.name = 'Hombres Nacional';
series4.strokeWidth = 3;
series4.bullets.push(new am4charts.CircleBullet());
series4.tooltipText = "{name} en {categoryX}: {valueY}";
series4.legendSettings.valueText = "{valueY}";

var bullet = series4.bullets.push(new am4charts.LabelBullet());
bullet.interactionEnabled=false;
bullet.label.text= "{valueY.value}";
bullet.label.background.fill = am4core.color("#a96dca");
bullet.label.fill = am4core.color("#FFFFFF");
bullet.label.dy = 10;
// Add chart cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "zoomY";

// Add legend
chart.legend = new am4charts.Legend();
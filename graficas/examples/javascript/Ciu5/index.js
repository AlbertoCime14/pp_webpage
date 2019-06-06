am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

//Datos en Excel
//             2014    2015    2016
//Auditorios	0.20	0.14	0.24
//Bibliotecas	0.78	0.77	0.76
//Centros culturales	2.89	2.94	2.76
chart.colors.list = [
    am4core.color("#3873B9"),
    am4core.color("#FF0000")
];

// Add data
chart.data = [
  {
    "Año": "2010",
    "Apego a la planeación": 402.8,
    "Correcta planeación": 100
  },
  {
    "Año": "2011",
    "Apego a la planeación": 29.1,
    "Correcta planeación": 100
  },
  {
    "Año": "2012",
    "Apego a la planeación": 46.2,
    "Correcta planeación": 100
  },
  {
    "Año": "2013",
    "Apego a la planeación": 120.6,
    "Correcta planeación": 100
  },
  {
    "Año": "2014",
    "Apego a la planeación": 60.6,
    "Correcta planeación": 100
  },
  {
    "Año": "2015",
    "Apego a la planeación": 18.9,
    "Correcta planeación": 100
  },
  {
    "Año": "2016",
    "Apego a la planeación": 11.2,
    "Correcta planeación": 100
  },
  {
    "Año": "2017",
    "Apego a la planeación": 22.6,
    "Correcta planeación": 100
  },
  {
    "Año": "2018",
    "Apego a la planeación": 46.2,
    "Correcta planeación": 100
  }
 ];

// Create category axis
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Año";
//categoryAxis.renderer.opposite = true;

// Create value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//valueAxis.renderer.inversed = true;
valueAxis.title.text = "Porcentaje de apego";
valueAxis.renderer.minLabelPosition = 0.01;

// Create series
var series1 = chart.series.push(new am4charts.LineSeries());
series1.dataFields.valueY = "Apego a la planeación";
series1.dataFields.categoryX = "Año";
series1.name = "Apego a la planeación";
series1.strokeWidth = 3;
series1.bullets.push(new am4charts.CircleBullet());
series1.legendSettings.valueText = "{valueY}";
series1.visible = false;


var bullet1 = series1.bullets.push(new am4charts.LabelBullet());
bullet1.interactionsEnabled = false;
bullet1.label.text = "{valueY.value}";
bullet1.label.fill = am4core.color("#000000");
//bullet1.label.background.fill = am4core.color("#3813B9");
bullet1.locationY = 0.01;
bullet1.label.dy = 10;


var series2 = chart.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = "Correcta planeación";
series2.dataFields.categoryX = "Año";
series2.name = 'Correcta planeación';
series2.strokeWidth = 3;
/*series2.bullets.push(new am4charts.CircleBullet());
series2.legendSettings.valueText = "{valueY}";
var bullet1 = series2.bullets.push(new am4charts.LabelBullet());
bullet1.interactionsEnabled = false;
bullet1.label.text = "{valueY.value}";
bullet1.label.fill = am4core.color("#FFFFFF");
bullet1.label.background.fill = am4core.color("#2B00FF");
bullet1.locationY = 0.01;
bullet1.label.dy = 20;*/

// Add chart cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "zoomY";

// Add legend
chart.legend = new am4charts.Legend();

//Para colocar la etiqueta del valor del promedio nacional
var label = chart.createChild(am4core.Label);
label.text = "Apego a la planeación";
label.fontSize = 14;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(90);//Ajusta la alineación horizontal via porcentaje
label.horizontalCenter = "middle";
label.y = 480; //Ajusta alineación vertical, positivo (hacia abajo) negativo (hacia arriba)
//.-Para colocar la etiqueta del valor del promedio nacional
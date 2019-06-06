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
    "Año": "2013",
    "Yucatán": "19.7",
    "Nacional": "17.2"
  },
  {
    "Año": "2014",
    "Yucatán": "22.5",
    "Nacional": "17.7"
  },
  {
    "Año": "2015",
    "Yucatán": "25.6",
    "Nacional": "20.3"
  },
  {
    "Año": "2016",
    "Yucatán": "25.4",
    "Nacional": "21.5"
  },
  {
    "Año": "2017",
    "Yucatán": "23.7",
    "Nacional": "21.4"
  }
 ];

// Create category axis
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Año";
categoryAxis.renderer.opposite = false;

// Create value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//valueAxis.renderer.inversed = true;
//valueAxis.title.text = "Place taken";
valueAxis.renderer.minLabelPosition = 0.01;

// Create series
var series1 = chart.series.push(new am4charts.LineSeries());
series1.dataFields.valueY = "Yucatán";
series1.dataFields.categoryX = "Año";
series1.name = "Yucatán";
series1.strokeWidth = 3;
series1.bullets.push(new am4charts.CircleBullet());
series1.tooltipText = "Falta de castigo as los delincuentes {name} en {categoryX}: {valueY}";
series1.legendSettings.valueText = "{valueY}";
series1.visible = false;
series1.stroke = am4core.color('#1D1D1B');

var bullet1 = series1.bullets.push(new am4charts.LabelBullet());
bullet1.interactionsEnabled = false;
bullet1.label.text = "{valueY.value}";
bullet1.label.fill = am4core.color("#FFFFFF");
bullet1.label.background.fill = am4core.color("#1D1D1B");
bullet1.locationY = 0.01;
bullet1.label.dy = -40;

var series2 = chart.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = "Nacional";
series2.dataFields.categoryX = "Año";
series2.name = 'Nacional';
series2.strokeWidth = 3;
series2.bullets.push(new am4charts.CircleBullet());
series2.tooltipText = "Falta de castigo as los delincuentes {name} en {categoryX}: {valueY}";
series2.legendSettings.valueText = "{valueY}";
series2.stroke = am4core.color('#838370');


var bullet1 = series2.bullets.push(new am4charts.LabelBullet());
bullet1.interactionsEnabled = false;
bullet1.label.text = "{valueY.value}";
bullet1.label.fill = am4core.color("#FFFFFF");
bullet1.label.background.fill = am4core.color("#838370");
bullet1.locationY = 0.01;
bullet1.label.dy = -40;

// Add chart cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "zoomY";

// Add legend
chart.legend = new am4charts.Legend();
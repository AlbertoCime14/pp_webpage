
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

// Add data
chart.data = [
  {
  "year": "2012",
  "yucatán": 1.38,
  "promedio_nacional": 2.56

  
}, {
  "year": "2013",
  "yucatán": 1.4,
  "promedio_nacional": 2.4
  
  
}, {
  "year": "2014",
  "yucatán": 1.29,
  "promedio_nacional": 2.17
  
  
}, {
  "year": "2015",
  "yucatán": 1.36,
  "promedio_nacional": 2.13

  
}, {
  "year": "2016",
  "yucatán": 1.25,
  "promedio_nacional": 2.23
  }, {
    "year": "2017",
    "yucatán": 1.17,
    "promedio_nacional": 2.26
    }
];

// Create category axis
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "year";
categoryAxis.renderer.opposite = true;

// Create value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.inversed = false;
valueAxis.title.text = "Índice";
valueAxis.renderer.minLabelPosition = 0.01;
valueAxis.max = 2.8;

// Create series
var series1 = chart.series.push(new am4charts.LineSeries());
series1.dataFields.valueY = "promedio_nacional";
series1.dataFields.categoryX = "year";
series1.name = "Nacional";
series1.strokeWidth = 3;
series1.bullets.push(new am4charts.CircleBullet());
series1.tooltipText = "{name} en {categoryX}: {valueY}";
series1.legendSettings.valueText = "{valueY}";
series1.visible  = false;
series1.stroke = am4core.color('#1D1D1B');

var bullet1 = series1.bullets.push(new am4charts.LabelBullet());
bullet1.interactionsEnabled = false;
bullet1.label.text = "{valueY.value}";
bullet1.label.fill = am4core.color("#FFFFFF");
bullet1.label.background.fill = am4core.color("#1D1D1B");
bullet1.locationY = 0.01;
bullet1.label.dy = -40;

var series2 = chart.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = "yucatán";
series2.dataFields.categoryX = "year";
series2.name = 'Yucatán';
series2.strokeWidth = 3;
series2.bullets.push(new am4charts.CircleBullet());
series2.tooltipText = "{name} en {categoryX}: {valueY}";
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

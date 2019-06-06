
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

// Add data
chart.data = [{
  "year": "2009",
  "yucatán": 67,
  "promedio_nacional": 56
  
}, {
  "year": "2010",
  "yucatán": 64,
  "promedio_nacional": 54
  
  
}, {
  "year": "2011",
  "yucatán": 67,
  "promedio_nacional": 56
 
  
}, {
  "year": "2012",
  "yucatán": 64,
  "promedio_nacional": 54
 
  
}, {
  "year": "2013",
  "yucatán": 67,
  "promedio_nacional": 56
  
  
}, {
  "year": "2014",
  "yucatán": 65,
  "promedio_nacional": 53
  
  
}, {
  "year": "2015",
  "yucatán": 68,
  "promedio_nacional": 58

  
}, {
  "year": "2016",
  "yucatán": 69,
  "promedio_nacional": 58
  
 
}
];

// Create category axis
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "year";
categoryAxis.renderer.opposite = false;

// Create value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.inversed = false;
valueAxis.title.text = "Índice";
valueAxis.renderer.minLabelPosition = 0.01;

// Create series
var series1 = chart.series.push(new am4charts.LineSeries());
series1.dataFields.valueY = "promedio_nacional";
series1.dataFields.categoryX = "year";
series1.name = "Promedio nacional";
series1.strokeWidth = 3;
series1.bullets.push(new am4charts.CircleBullet());
series1.tooltipText = "{name} en {categoryX}: {valueY}";
series1.legendSettings.valueText = "{valueY}";
series1.visible  = false;
series1.stroke = am4core.color('#025744');

var valueLabel = series1.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY}";
valueLabel.label.dy = 25;
valueLabel.label.fontSize = 20;

var series2 = chart.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = "yucatán";
series2.dataFields.categoryX = "year";
series2.name = 'Yucatán';
series2.strokeWidth = 3;
series2.bullets.push(new am4charts.CircleBullet());
series2.tooltipText = "{name} en {categoryX}: {valueY}";
series2.legendSettings.valueText = "{valueY}";
series2.stroke = am4core.color('#02c298');

var valueLabel = series2.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY}";
valueLabel.label.dy = 25;
valueLabel.label.fontSize = 20;



// Add chart cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "zoomY";

// Add legend
chart.legend = new am4charts.Legend();

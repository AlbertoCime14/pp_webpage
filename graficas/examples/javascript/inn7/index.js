
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

//            2017  2016    2015  2014
//Nacional  96.22 97.34  95.33  92.22
//Yucatán 89.79 88.50   86.3   84.3


// Add data
chart.data = [
 {
   "Fila": "Diseños Industriales",
   "2012": 12,
   "2013": 15,
   "2014": 23,
   "2015": 32,
   "2016": 33,
   "2017": 26,
   "2018": 22
 },
 {
   "Fila": "Modelos de Utilidad",
   "2012": 9,
   "2013": 27,
   "2014": 13,
   "2015": 19,
   "2016": 20,
   "2017": 14,
   "2018": 8
 },
 {
   "Fila": "Patentes",
   "2012": 23,
   "2013": 27,
   "2014": 20,
   "2015": 26,
   "2016": 28,
   "2017": 24,
   "2018": 11
 }
];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Fila";
categoryAxis.numberFormatter.numberFormat = "#";
categoryAxis.renderer.inversed = false;
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.cellStartLocation = 0.1;
categoryAxis.renderer.cellEndLocation = 0.9;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.opposite = false;
valueAxis.min = 0;
valueAxis.max = 37;
valueAxis.strictMinMax = true;

// Create series
function createSeries(field, name, color) {
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "Fila";
    series.name = name;
    series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
    series.columns.template.height = am4core.percent(100);
    series.sequencedInterpolation = true;
    series.fill = am4core.color(color);

    var valueLabel = series.bullets.push(new am4charts.LabelBullet());
    valueLabel.label.text = "{valueY}";
    valueLabel.label.dy = -20;
    valueLabel.label.truncate = false;
    valueLabel.label.hideOversized = false;
  

    
    //valueLabel.label.dx = 10;
    //valueLabel.label.hideOversized = false;
    //valueLabel.label.truncate = false;

    //var categoryLabel = series.bullets.push(new am4charts.LabelBullet());
    //categoryLabel.label.text = "{name}";
    //categoryLabel.label.horizontalCenter = "center";
    //categoryLabel.label.dy = -10;
    //categoryLabel.label.fill = am4core.color("#fff");
    //categoryLabel.label.hideOversized = false;
    //categoryLabel.label.truncate = false;
}

createSeries("2012", "2012", "#037199");
createSeries("2013", "2013", "#038BBB");
createSeries("2014", "2014", "#03A4DE");
createSeries("2015", "2015", "#06BCFD");
createSeries("2016", "2016", "#28C5FE");
createSeries("2017", "2017", "#49CFFF");
createSeries("2018", "2018", "#5ED4FF");

// Add legend
chart.legend = new am4charts.Legend();

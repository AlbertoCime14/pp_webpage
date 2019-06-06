
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
   "2012": 19,
   "2013": 8,
   "2014": 6,
   "2015": 14,
   "2016": 7,
   "2017": 15,
   "2018": 1
 },
 {
   "Fila": "Modelos de Utilidad",
   "2012": 4,
   "2013": 5,
   "2014": 8,
   "2015": 7,
   "2016": 3,
   "2017": 2,
   "2018": 0
 },
 {
   "Fila": "Patentes",
   "2012": 2,
   "2013": 2,
   "2014": 3,
   "2015": 6,
   "2016": 7,
   "2017": 2,
   "2018": 1
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

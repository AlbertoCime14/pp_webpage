am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

//            2017	2016    2015  2014
//Nacional	96.22	97.34  95.33  92.22
//Yucatán	89.79	88.50   86.3   84.3


// Add data
chart.data = [
 {
   "Periodo": 2010,
   "Nacional": 1.72,
   "Yucatan": 1.97
 },
 {
   "Periodo": 2011,
   "Nacional": 1.8,
   "Yucatan": 2.11
 },
 {
   "Periodo": 2012,
   "Nacional": 1.87,
   "Yucatan": 2.24
 },
 {
   "Periodo": 2013,
   "Nacional": 1.94,
   "Yucatan": 2.36
 },
 {
   "Periodo": 2014,
   "Nacional": 2.01,
   "Yucatan": 2.49
 },
 {
   "Periodo": 2015,
   "Nacional": 2.08,
   "Yucatan": 2.6
 },
 {
   "Periodo": 2016,
   "Nacional": 2.15,
   "Yucatan": 2.72
 }
];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Periodo";
categoryAxis.numberFormatter.numberFormat = "#";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.cellStartLocation = 0.1;
categoryAxis.renderer.cellEndLocation = 0.9;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.max = 3;

// Create series
function createSeries(field, name, color) {
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "Periodo";
    series.name = name;
    series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
    series.columns.template.height = am4core.percent(100);
    series.sequencedInterpolation = true;
    series.fill = am4core.color(color);
    series.columns.template.stroke = am4core.color("#FFFFFF");


    var valueLabel = series.bullets.push(new am4charts.LabelBullet());
    valueLabel.label.text = "{valueY}";
    valueLabel.label.dy = -20;
  

    
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

createSeries("Nacional", "Estados Unidos Mexicanos", "#a96dca");
createSeries("Yucatan", "Yucatán", "#6E368C");

// Add legend
chart.legend = new am4charts.Legend();
chart.numberFormatter.numberFormat = "#.###";

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
   "Periodo": 2012,
   "Estados unidos": 76.33,
   "Yucatan": 64.13
 },
 {
   "Periodo": 2013,
   "Estados unidos": 76.07,
   "Yucatan": 65.3
 },
 {
   "Periodo": 2014,
   "Estados unidos": 75.56,
   "Yucatan": 66.29
 },
 {
   "Periodo": 2015,
   "Estados unidos": 74.33,
   "Yucatan": 66.65
 },
 {
   "Periodo": 2016,
   "Estados unidos": 72.89,
   "Yucatan": 65.57
 },
 {
   "Periodo": 2017,
   "Estados unidos": 71.63,
   "Yucatan": 64.36
 },
 {
   "Periodo": 2018,
   "Estados unidos": 70.5,
   "Yucatan": 63.47
 }
];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Periodo";
categoryAxis.numberFormatter.numberFormat = "#";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.cellStartLocation = 0.1;
categoryAxis.renderer.cellEndLocation = 0.9;
//categoryAxis.renderer.grid.template.disabled = true;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;

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
}

createSeries("Estados unidos", "Estados Unidos Mexicanos", "#a96dca");
createSeries("Yucatan", "Yucatán", "#6E368C");

// Add legend
chart.legend = new am4charts.Legend();

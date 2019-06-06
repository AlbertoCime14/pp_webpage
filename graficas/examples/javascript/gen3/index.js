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
   "Yucatan": 0.387,
   "Nacional": 0.3927
 },
 {
   "Periodo": 2010,
   "Yucatan": 0.3542,
   "Nacional": 0.4
 },
 {
   "Periodo": 2008,
   "Yucatan": 0.3606,
   "Nacional": 0.419
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
valueAxis.max = 0.43;

// Create series
function createSeries(field, name, color) {
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "Periodo";
    series.name = name;
    series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
    series.columns.template.height = am4core.percent(100);
    series.columns.template.stroke = am4core.color("#ffFFFF");
    series.sequencedInterpolation = true;

    var valueLabel = series.bullets.push(new am4charts.LabelBullet());
    valueLabel.label.text = "{valueY}";
    valueLabel.label.dy = -20;
    series.fill = am4core.color(color);
}

createSeries("Yucatan", "Yucatan", "#6E368C");
createSeries("Nacional", "Nacional", "#a96dca");

// Add legend
chart.legend = new am4charts.Legend();
chart.numberFormatter.numberFormat = "#.###";

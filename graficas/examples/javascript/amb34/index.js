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
   "Periodo": 2011,
   "Enero": "652.05",
   "Febrero": "1,025.37",
   "Marzo": 134.54
 },
 {
   "Periodo": 2012,
   "Enero": "743.71",
   "Febrero": "1,016.18",
   "Marzo": 157.69
 },
 {
   "Periodo": 2013,
   "Enero": "991.27",
   "Febrero": "1,023.93",
   "Marzo": 57.83
 },
 {
   "Periodo": 2014,
   "Enero": "558.71",
   "Febrero": "697.56",
   "Marzo": 74.1
 },
 {
   "Periodo": 2015,
   "Enero": "1,122.72",
   "Febrero": "1,008.55",
   "Marzo": 271.51
 },
 {
   "Periodo": 2016,
   "Enero": "1,161.46",
   "Febrero": "93.1",
   "Marzo": 287.73
 },
 {
   "Periodo": 2017,
   "Enero": "1,120.58",
   "Febrero": "562.56",
   "Marzo": 36.36
 }
];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Periodo";
categoryAxis.numberFormatter.numberFormat = "#";
categoryAxis.renderer.inversed = false;
categoryAxis.renderer.minGridDistance = 40;
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.cellStartLocation = 0.1;
categoryAxis.renderer.cellEndLocation = 0.9;

categoryAxis.renderer.labels.template.horizontalCenter = "middle";
categoryAxis.renderer.labels.template.verticalCenter = "right";
categoryAxis.renderer.labels.template.rotation = 0;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.max = 1500;
valueAxis.strictMinMax = true;

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
   series.stroke = am4core.color(color);
    var valueLabel = series.bullets.push(new am4charts.LabelBullet());
    valueLabel.label.text = "{valueY}";
    valueLabel.label.dy = -20;
    
  

    
    valueLabel.label.dx = 10;
    valueLabel.label.hideOversized = false;
    valueLabel.label.truncate = false;

    //var categoryLabel = series.bullets.push(new am4charts.LabelBullet());
    //categoryLabel.label.text = "{name}";
    //categoryLabel.label.horizontalCenter = "center";
    //categoryLabel.label.dy = -10;
    //categoryLabel.label.fill = am4core.color("#fff");
    //categoryLabel.label.hideOversized = false;
    //categoryLabel.label.truncate = false;
}

createSeries("Enero", "Enero", "#40520f");
createSeries("Febrero", "Febrero", "#789c1a");
createSeries("Marzo", "Marzo", "#aede2c");

// Add legend
chart.legend = new am4charts.Legend();
//chart.exporting.menu = new am4core.ExportMenu();
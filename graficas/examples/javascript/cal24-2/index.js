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
   "Poblacion": "Población de 3 a 15 años",
   "Yucatan": 7.1,
   "Nacional": 8.2
 },
 {
   "Poblacion": "Población de 16 años o más nacida hasta 1981",
   "Yucatan": 34.3,
   "Nacional": 26.1
 },
 {
   "Poblacion": "Población de 16 años o más nacida a partir de 1982",
   "Yucatan": 19.6,
   "Nacional": 17.1
 }
];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Poblacion";
categoryAxis.numberFormatter.numberFormat = "#";
categoryAxis.renderer.inversed = true;
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.cellStartLocation = 0.1;
categoryAxis.renderer.cellEndLocation = 0.9;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.opposite = false;
valueAxis.min = 0;
valueAxis.max = 35;

// Create series
function createSeries(field, name, color) {
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "Poblacion";
    series.name = name;
    series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
    series.columns.template.height = am4core.percent(100);
    series.columns.template.fill = am4core.color(color);
    series.columns.template.stroke = am4core.color(color);
   series.sequencedInterpolation = true;

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

createSeries("Nacional", "Nacional", "#0C3F6C");
createSeries("Yucatan", "Yucatan", "#1577ce");

// Add legend
chart.legend = new am4charts.Legend();

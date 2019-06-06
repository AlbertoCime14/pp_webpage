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
   "Periodo": "Enero",
   "2011": 652.05,
   "2012": 743.71,
   "2013": 991.27,
   "2014": 558.71,
   "2015": 1122.72,
   "2016": 1161.46,
   "2017": 1120.58
 },
 {
   "Periodo": "Febrero",
   "2011": 1025.37,
   "2012": 1016.18,
   "2013": 1023.93,
   "2014": 697.56,
   "2015": 1008.55,
   "2016": 93.1,
   "2017": 562.56
 },
 {
   "Periodo": "Marzo",
   "2011": 134.54,
   "2012": 157.69,
   "2013": 57.83,
   "2014": 74.1,
   "2015": 271.51,
   "2016": 287.73,
   "2017": 36.36
 },
 {
   "Periodo": "Abril",
   "2011": 782.89,
   "2012": 671.04,
   "2013": 889.86,
   "2014": 549.36,
   "2015": 960.44,
   "2016": 890.19,
   "2017": 787.78
 },
 {
   "Periodo": "Mayo",
   "2011": 586.4,
   "2012": 981.94,
   "2013": 721.54,
   "2014": 640.34,
   "2015": 527.83,
   "2016": 780.89,
   "2017": 650
 },
 {
   "Periodo": "Junio",
   "2011": 892.22,
   "2012": 950.49,
   "2013": 963.32,
   "2014": 656.77,
   "2015": 735.66,
   "2016": 461.06,
   "2017": 716.84
 },
 {
   "Periodo": "Julio",
   "2011": 757.47,
   "2012": 1143.23,
   "2013": 1064.44,
   "2014": 611.07,
   "2015": 834.92,
   "2016": 623.71,
   "2017": 914.26
 },
 {
   "Periodo": "Agosto",
   "2011": 573.41,
   "2012": 608.56,
   "2013": 658.6,
   "2014": 478.32,
   "2015": 737.94,
   "2016": 770.73,
   "2017": 602.84
 },
 {
   "Periodo": "Septiembre",
   "2011": 384.21,
   "2012": 674.72,
   "2013": 541.89,
   "2014": 324.44,
   "2015": 566.61,
   "2016": 342.67,
   "2017": 443.48
 },
 {
   "Periodo": "Octubre",
   "2011": 298.73,
   "2012": 692.16,
   "2013": 670.83,
   "2014": 287.66,
   "2015": 475.7,
   "2016": 448.62,
   "2017": 425.89
 },
 {
   "Periodo": "Noviembre",
   "2011": 315.15,
   "2012": 716.58,
   "2013": 529.73,
   "2014": 264.56,
   "2015": 475.6,
   "2016": 443.7,
   "2017": 336.06
 },
 {
   "Periodo": "Diciembre",
   "2011": 436.06,
   "2012": 1104.24,
   "2013": 393.29,
   "2014": 443.16,
   "2015": 738.85,
   "2016": 499.21,
   "2017": 514.56
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
//valueAxis.renderer.opposite = true;

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

createSeries("2011", "2011", "#40520f");
createSeries("2012", "2012", "#587114");
createSeries("2013", "2013", "#709118");
createSeries("2014", "2014", "#89b11d");
createSeries("2015", "2015", "#a1d121");
createSeries("2016", "2016", "#b2e036");
createSeries("2017", "2017", "#bfe655");

// Add legend
chart.legend = new am4charts.Legend();
//chart.exporting.menu = new am4core.ExportMenu();
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
   "Tipo": "Disponen de energía electrica",
   "Estados Unidos Mexicanos": 98.7,
   "Yucatan": 98.6
 },
 {
   "Tipo": "Disponen de drenaje",
   "Estados Unidos Mexicanos": 93.2,
   "Yucatan": 87.3
 },
 {
   "Tipo": "Desalojo en Red pública",
   "Estados Unidos Mexicanos": 81.2,
   "Yucatan": 7.8
 },
 {
   "Tipo": "Desalojo en Fosa séptica o tanque séptico",
   "Estados Unidos Mexicanos": 17.5,
   "Yucatan": 91.9
 }
];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Tipo";
categoryAxis.numberFormatter.numberFormat = "#";
categoryAxis.renderer.inversed = false;
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.cellStartLocation = 0.1;
categoryAxis.renderer.cellEndLocation = 0.9;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.max = 100;
//valueAxis.renderer.opposite = true;

// Create series
function createSeries(field, name, color) {
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "Tipo";
    series.name = name;
    series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
    series.columns.template.height = am4core.percent(100);
    series.sequencedInterpolation = true;
    series.fill = am4core.color(color);

    var valueLabel = series.bullets.push(new am4charts.LabelBullet());
    valueLabel.label.text = "{valueY}";
    valueLabel.label.dy = -20;
    
    //valueLabel.label.dx = 10;
    valueLabel.label.hideOversized = false;
    valueLabel.label.truncate = false;
}

createSeries("Estados Unidos Mexicanos", "Estados Unidos Mexicanos", "#1c3656");
createSeries("Yucatan", "Yucatan", "#6a9ad4");

// Add legend
chart.legend = new am4charts.Legend();

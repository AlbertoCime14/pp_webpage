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
   "Descripcion": "Mercado laboral",
   "Nacional": 0.605,
   "Yucatan": 0.643
 },
 {
   "Descripcion": "Empoderamiento",
   "Nacional": 0.506,
   "Yucatan": 0.483
 }
 ,
 {
   "Descripcion": "Salud reproductiva",
   "Nacional": 0.53,
   "Yucatan": 0.529
 }
];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Descripcion";
categoryAxis.numberFormatter.numberFormat = "#";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.cellStartLocation = 0.1;
categoryAxis.renderer.cellEndLocation = 0.9;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.max = 0.65;
valueAxis.title.text = "Valor del \u00edndice";

// Create series
function createSeries(field, name, color) {
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "Descripcion";
    series.name = name;
    series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
    series.columns.template.height = am4core.percent(100);
    series.sequencedInterpolation = true;
    series.columns.template.stroke = am4core.color("#FFFFFF");

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

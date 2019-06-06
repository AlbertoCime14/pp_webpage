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
   "Descripcion": "Caminar, subir o  bajar usando sus  piernas",
   "Nacional": 64.1,
   "Yucatan": 68.1
 },
 {
   "Descripcion": "Ver (aunque use  lentes)",
   "Nacional": 58.4,
   "Yucatan": 58.2
 },
 {
   "Descripcion": "Escuchar (aunque use aparato auditivo)",
   "Nacional": 33.5,
   "Yucatan": 35.5
 },
 {
   "Descripcion": "Hablar o comunicarse",
   "Nacional": 18,
   "Yucatan": 20.7
 },
 {
   "Descripcion": "Problemas emocionales o mentales",
   "Nacional": 19.6,
   "Yucatan": 22.6
 }
];
chart.numberFormatter.numberFormat = "#.0|#.0|0.0";
chart.padding(40, 40, 40, 40);
// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Descripcion";
categoryAxis.numberFormatter.numberFormat = "#";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.cellStartLocation = 0.1;
categoryAxis.renderer.cellEndLocation = 0.9;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.max = 70;
valueAxis.title.text = "Porcentaje";

// Create series
function createSeries(field, name, color) {
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "Descripcion";
    series.name = name;
    series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
    series.columns.template.height = am4core.percent(100);
   series.sequencedInterpolation = true;
   series.fill = am4core.color(color);

    var valueLabel = series.bullets.push(new am4charts.LabelBullet());
    valueLabel.label.text = "{valueY}";
    valueLabel.label.dy = -20;
}

createSeries("Nacional", "Nacional", "#a96dca");
createSeries("Yucatan", "Yucatan", "#6E368C");

// Add legend
chart.legend = new am4charts.Legend();

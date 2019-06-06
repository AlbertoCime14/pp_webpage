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
   "caracteristicas": "Viviendas que no disponen de agua entubada",
   "Viviendas indígena": 64.1,
   "Viviendas no indígena": 35.9
 },
 {
   "caracteristicas": "Viviendas que no disponen de drenaje",
   "Viviendas indígena": 79.1,
   "Viviendas no indígena": 20.9
 },
 {
   "caracteristicas": "Viviendas que no disponen de electricidad",
   "Viviendas indígena": 79.3,
   "Viviendas no indígena": 20.7
 },
 {
   "caracteristicas": "Viviendas con piso de tierra",
   "Viviendas indígena": 84.4,
   "Viviendas no indígena": 15.6
 },
 {
   "caracteristicas": "Se cocina con leña o carbón",
   "Viviendas indígena": 82.5,
   "Viviendas no indígena": 17.5
 }
];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "caracteristicas";
categoryAxis.numberFormatter.numberFormat = "#";
categoryAxis.renderer.inversed = false;
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.cellStartLocation = 0.1;
categoryAxis.renderer.cellEndLocation = 0.9;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.opposite = false;
valueAxis.min = 0;
valueAxis.max = 85;

// Create series
function createSeries(field, name, color) {
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "caracteristicas";
    series.name = name;
    series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
    series.columns.template.height = am4core.percent(100);
    series.sequencedInterpolation = true;
    series.fill = am4core.color(color);

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

createSeries("Viviendas no indígena", "Viviendas no indígena", "#0C3F6C");
createSeries("Viviendas indígena", "Viviendas indígena", "#84bff4");

// Add legend
chart.legend = new am4charts.Legend();

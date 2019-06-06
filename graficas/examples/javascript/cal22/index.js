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
   "Entidad": "Nacional",
   "valor1": 18.1,
   "valor2": 16.5,
   "valor3": 30.7
 },
 {
   "Entidad": "Yucatan",
   "valor1": 69.5,
   "valor2": 75.9,
   "valor3": 87.6
 }
];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Entidad";
categoryAxis.numberFormatter.numberFormat = "#";
categoryAxis.renderer.inversed = false;
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.cellStartLocation = 0.1;
categoryAxis.renderer.cellEndLocation = 0.9;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.opposite = false;
valueAxis.min = 0;
valueAxis.max = 90;

// Create series
function createSeries(field, name, color) {
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "Entidad";
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

createSeries("valor1", "Población ocupada con menos de 1 salario mínimo", "#0C3F6C");
createSeries("valor2", "Población de 15 años y más con primaria incompleta", "#1784e5");
createSeries("valor3", "Población de 15 años y más analfabeta", "#84bff4");

// Add legend
chart.legend = new am4charts.Legend();

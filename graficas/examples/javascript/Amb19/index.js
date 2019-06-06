am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);


chart.data = [
  {
    "Entidad": "Yucatán",
    "2005": 96.1,
    "2015": 98.3
  },
  {
    "Entidad": "Nacional",
    "2005": 89.2,
    "2015": 94.4
  }
 ];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Entidad";
categoryAxis.numberFormatter.numberFormat = "#";
//categoryAxis.renderer.inversed = true;
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.cellStartLocation = 0.1;
categoryAxis.renderer.cellEndLocation = 0.9;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//valueAxis.renderer.opposite = true;
valueAxis.min = 0;
valueAxis.max = 120;
valueAxis.strictMinMax = true;

// Create series
function createSeries(field, name, color) {
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "Entidad";
    series.name = name;
    series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
    series.columns.template.height = am4core.percent(100);
    series.fill = am4core.color(color);
    series.sequencedInterpolation = true;

    var valueLabel = series.bullets.push(new am4charts.LabelBullet());
    valueLabel.label.text = "{valueY}";
    valueLabel.label.dy = -20;
  
    //Etiquetas debajo de la barra vertical centradas
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    //categoryAxis.renderer.labels.template.rotation = 270;
}

createSeries("2005", "2005","#95C11F");
createSeries("2015", "2015","#627E16");

// Add legend
chart.legend = new am4charts.Legend();
//chart.exporting.menu = new am4core.ExportMenu();
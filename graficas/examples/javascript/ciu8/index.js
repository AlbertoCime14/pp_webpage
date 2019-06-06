am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);



    chart.data = [
      {
        "Entidad federativa": "Nacional",
        "Tierra": 3.6,
        "Cemento o firme": 52.7,
        "Mosaico, madera u otro recubrimiento": 43.2
      },
      {
        "Entidad federativa": "Yucatán ",
        "Tierra": 1.6,
        "Cemento o firme": 37.6,
        "Mosaico, madera u otro recubrimiento": 60.3
      }
     ];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Entidad federativa";
categoryAxis.numberFormatter.numberFormat = "#";
categoryAxis.renderer.inversed = true;
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.cellStartLocation = 0.1;
categoryAxis.renderer.cellEndLocation = 0.9;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//valueAxis.renderer.opposite = true;

// Create series
function createSeries(field, name) {
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "Entidad federativa";
    series.name = name;
    series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
    series.columns.template.height = am4core.percent(100);
   series.sequencedInterpolation = true;

    var valueLabel = series.bullets.push(new am4charts.LabelBullet());
    valueLabel.label.text = "{valueY}";
    valueLabel.label.dy = -20;
    valueLabel.label.truncate = false;
    valueLabel.label.hideOversized = false;
}

createSeries("Tierra", "Tierra");
createSeries("Cemento o firme", "Cemento o firme");
createSeries("Mosaico, madera u otro recubrimiento","Mosaico, madera u otro recubrimiento");

// Add legend
chart.legend = new am4charts.Legend();
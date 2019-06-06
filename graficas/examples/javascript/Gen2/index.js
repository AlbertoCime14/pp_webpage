am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

//            2017	2016    2015  2014
//Nacional	96.22	97.34  95.33  92.22
//Yucat�n	89.79	88.50   86.3   84.3


// Add data
chart.data = [{
    "Descripcion": "IS",
    "Hombres": "0.8277",
    "Mujeres": "0.9080",
  },
  {
    "Descripcion": "IE",
    "Hombres": "0.6865",
    "Mujeres": "0.6506",
  },
  {
    "Descripcion": "II",
    "Hombres": "0.7769",
    "Mujeres": "0.7684",
  }];

chart.colors.list = [
  am4core.color("#6E368C"),
  am4core.color("#a96dca")
];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Descripcion";
categoryAxis.numberFormatter.numberFormat = "#";
categoryAxis.renderer.inversed = true;
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.cellStartLocation = 0.1;
categoryAxis.renderer.cellEndLocation = 0.9;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.opposite = false;
valueAxis.min = 0;
valueAxis.max = 0.9;
valueAxis.title.text = "Valor del índice";

// Create series
function createSeries(field, name) {
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "Descripcion";
    series.name = name;
    series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
    series.columns.template.height = am4core.percent(100);
    series.sequencedInterpolation = true;

    var valueLabel = series.bullets.push(new am4charts.LabelBullet());
    valueLabel.label.text = "{valueY}";
    valueLabel.label.dy = -20;
}

createSeries("Hombres", "Hombres");
createSeries("Mujeres", "Mujeres");

// Add legend
chart.legend = new am4charts.Legend();
chart.numberFormatter.numberFormat = "#.###";

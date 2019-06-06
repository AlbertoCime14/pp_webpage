am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);


// Add data
chart.data = [
    {
      "Enfermedades": "Infecciones respiratorias agudas",
      "Yucatán": 52.7,
      "Nacional": 55.3
    },
    {
      "Enfermedades": "Infecciones intestinales por otros organismos",
      "Yucatán": 15.4,
      "Nacional": 12.1
    },
    {
      "Enfermedades": "Conjuntivitis",
      "Yucatán": 7.9,
      "Nacional": 3
    },
    {
      "Enfermedades": "Infección de vías urinarias",
      "Yucatán": 7.5,
      "Nacional": 9.4
    },
    {
      "Enfermedades": "Gingivitis y enfermedad periodontal",
      "Yucatán": 2.8,
      "Nacional": 2.5
    },
    {
      "Enfermedades": "Obesidad",
      "Yucatán": 1.8,
      "Nacional": 1.5
    },
    {
      "Enfermedades": "Úlceras, gastritis y duodenitis",
      "Yucatán": 1.7,
      "Nacional": 3.2
    },
    {
      "Enfermedades": "Vulvovaginitis",
      "Yucatán": 1.3,
      "Nacional": 1.3
    }
   ];

// Create axes
var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Enfermedades";
categoryAxis.numberFormatter.numberFormat = "#";
categoryAxis.renderer.inversed = false;
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.cellStartLocation = 0.1;
categoryAxis.renderer.cellEndLocation = 0.9;

var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.inversed = false;
valueAxis.renderer.opposite = false;

// Create series
function createSeries(field, name, color) {
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueX = field;
    series.dataFields.categoryY = "Enfermedades";
    series.name = name;
    series.columns.template.tooltipText = "{name}: [bold]{valueX}[/]";
    series.columns.template.height = am4core.percent(100);
    series.sequencedInterpolation = true;
    series.columns.template.fill = am4core.color(color);

    var valueLabel = series.bullets.push(new am4charts.LabelBullet());
    valueLabel.label.text = "{valueX}";
    //valueLabel.label.dy = -20;

    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    //categoryAxis.renderer.labels.template.rotation = 270;
    
    valueLabel.label.dx = 20;
    valueLabel.label.hideOversized = false;
    valueLabel.label.truncate = false;

    //var categoryLabel = series.bullets.push(new am4charts.LabelBullet());
    //categoryLabel.label.text = "{name}";
    //categoryLabel.label.horizontalCenter = "center";
    //categoryLabel.label.dy = -10;
    //categoryLabel.label.fill = am4core.color("#fff");
    //categoryLabel.label.hideOversized = false;
    //categoryLabel.label.truncate = false;
}

createSeries("Yucatán", "Yucatán", "#0C3F6C");
createSeries("Nacional", "Nacional", "#167fdb");

// Add legend
chart.legend = new am4charts.Legend();
am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);



    chart.data = [
      {
        "Entidad": "Estados Unidos Mexicanos",
        "Viviendas particulares que cocinan con gas": 84.1,
        "Viviendas particulares que cocinan Leña o cabón": 15.1,
        "Viviendas particulares que cocinan Otro combustible": 0.8
      },
      {
        "Entidad": "Yucatán",
        "Viviendas particulares que cocinan con gas": 64.9,
        "Viviendas particulares que cocinan Leña o cabón": 32.6,
        "Viviendas particulares que cocinan Otro combustible": 2.3
      }
     ];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Entidad";
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
    series.dataFields.categoryX = "Entidad";
    series.name = name;
    series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
    series.columns.template.height = am4core.percent(100);
   series.sequencedInterpolation = true;

    var valueLabel = series.bullets.push(new am4charts.LabelBullet());
    valueLabel.label.text = "{valueY}";
    valueLabel.label.dy = -20;
    valueLabel.label.hideOversized = false;
    valueLabel.label.truncate = false;
}

createSeries("Viviendas particulares que cocinan con gas", "Viviendas particulares que cocinan con gas");
createSeries("Viviendas particulares que cocinan Leña o cabón", "Viviendas particulares que cocinan Leña o cabón");
createSeries("Viviendas particulares que cocinan Otro combustible","Viviendas particulares que cocinan Otro combustible");

// Add legend
chart.legend = new am4charts.Legend();
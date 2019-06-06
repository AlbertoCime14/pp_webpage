am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

// Add data
chart.data = [{
    "year": "Por Eje",
    "europe": 2.5,
    "namerica": 2.5,
    "asia": 2.1,
    "lamerica": 0.3,
    "meast": 0.2,
    "africa": 0.1
}, {
    "year": "Por política",
    "europe": 2.6,
    "namerica": 2.7,
    "asia": 2.2,
    "lamerica": 0.3,
    "meast": 0.3,
    "africa": 0.1
}, {
    "year": "Total",
    "europe": 2.8,
    "namerica": 2.9,
    "asia": 2.4,
    "lamerica": 0.3,
    "meast": 0.3,
    "africa": 0.1
}];

chart.legend = new am4charts.Legend();
chart.legend.position = "right";

// Create axes
var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "year";
categoryAxis.renderer.grid.template.opacity = 0;

var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.renderer.grid.template.opacity = 0;
valueAxis.renderer.ticks.template.strokeOpacity = 0.5;
valueAxis.renderer.ticks.template.stroke = am4core.color("#495C43");
valueAxis.renderer.ticks.template.length = 10;
valueAxis.renderer.line.strokeOpacity = 0.5;
valueAxis.renderer.baseGrid.disabled = true;
valueAxis.renderer.minGridDistance = 40;

// Create series
function createSeries(field, name) {
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueX = field;
    series.dataFields.categoryY = "year";
    series.stacked = true;
    series.name = name;

    var labelBullet = series.bullets.push(new am4charts.LabelBullet());
    labelBullet.locationX = 0.5;
    labelBullet.label.text = "{valueX}";
    labelBullet.label.fill = am4core.color("#fff");
}

createSeries("europe", "Yucatán con Economía Inclusiva");
createSeries("namerica", "Yucatán con Calidad de Vida y Bienestar Soial");
createSeries("asia", "Yucatán Cultural con Identidad para el Desarrollo");
createSeries("lamerica", "Yucatán Verde y Sustentable");
createSeries("meast", "Igualdad de Oportunidades y no discriminación");
createSeries("africa", "Innovación, Conocimiento y Tecnología");
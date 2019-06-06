am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

// Add data
chart.data = [
    {
    "year": "Yucatán con Economía Inclusiva",
    "Por eje": 1,
    "Por política": 16
}, {
    "year": "Yucatán con Calidad de Vida y Bienestar Social ",
    "Por eje": 2,
    "Por política": 13
}, {
        "year": "Yucatán Cultural con Identidad para el Desarrollo",
    "Por eje": 1,
    "Por política": 12
}, {
        "year": "Yucatán Verde y Sustentable",
    "Por eje": 1,
    "Por política": 13
}, {
        "year": "Igualdad de Oportunidades y no discriminación",
    "Por eje": 2,
    "Por política": 9
    }
    ,

    {
        "year": "Innovación, Conocimiento y Tecnología",
        "Por eje": 1,
        "Por política": 5
    }, {
        "year": "Paz, Justicia y Gobernabilidad",
        "Por eje": 1,
        "Por política": 6
    }, {
        "year": "Gobierno Abierto, Eficiente y con Finanzas Sanas",
        "Por eje": 1,
        "Por política": 6
    }, {
        "year": "Ciudades y Comunidades Sostenibles",
        "Por eje": 1,
        "Por política": 6
    }
];

// Create axes
var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "year";
categoryAxis.numberFormatter.numberFormat = "#";
categoryAxis.renderer.inversed = true;
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.cellStartLocation = 0.1;
categoryAxis.renderer.cellEndLocation = 0.9;

var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.opposite = true;

// Create series
function createSeries(field, name) {
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueX = field;
    series.dataFields.categoryY = "year";
    series.name = name;
    series.columns.template.tooltipText = "{name}: [bold]{valueX}[/]";
    series.columns.template.height = am4core.percent(100);
    series.sequencedInterpolation = true;

    var valueLabel = series.bullets.push(new am4charts.LabelBullet());
    valueLabel.label.text = "{valueX}";
    valueLabel.label.horizontalCenter = "left";
    valueLabel.label.dx = 10;
    valueLabel.label.hideOversized = false;
    valueLabel.label.truncate = false;

    var categoryLabel = series.bullets.push(new am4charts.LabelBullet());
    categoryLabel.label.text = "{name}";
    categoryLabel.label.horizontalCenter = "right";
    categoryLabel.label.dx = -10;
    categoryLabel.label.fill = am4core.color("#fff");
    categoryLabel.label.hideOversized = false;
    categoryLabel.label.truncate = false;
}

createSeries("Por eje", "Por eje");
createSeries("Por política", "Por política");
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);


// Add data
chart.data = [{
    "year": "Yucatán con Economía Inclusiva",
    "europe": 1,
    "namerica": 16,
    "asia": 17,
    "lamerica": 0.3,
    "meast": 0.2,
    "africa": 0.1
}, {
        "year": "Yucatán con Calidad de Vida y Bienestar Social",
    "europe": 2,
    "namerica": 13,
    "asia": 15,
    "lamerica": 0.3,
    "meast": 0.3,
    "africa": 0.1
}, {
    "year": "Yucatán Cultural con Identidad para el Desarrollo ",
    "europe": 1,
    "namerica": 12,
    "asia": 13,
    "lamerica": 0.3,
    "meast": 0.3,
    "africa": 0.1
    },
    {
        "year": "Yucatán Verde y Sustentable",
        "europe": 1,
        "namerica": 13,
        "asia": 14,
        "lamerica": 0.3,
        "meast": 0.2,
        "africa": 0.1
    }, {
        "year": "Igualdad de Oportunidades y no discriminación",
        "europe": 2,
        "namerica": 9,
        "asia": 11,
        "lamerica": 0.3,
        "meast": 0.3,
        "africa": 0.1
    }, {
        "year": "Innovación, Conocimiento y Tecnología",
        "europe": 1,
        "namerica": 5,
        "asia": 6,
        "lamerica": 0.3,
        "meast": 0.3,
        "africa": 0.1
    }
    ,
    {
        "year": "Paz, Justicia y Gobernabilidad ",
        "europe": 1,
        "namerica": 6,
        "asia": 7,
        "lamerica": 0.3,
        "meast": 0.2,
        "africa": 0.1
    }, {
        "year": "Gobierno Abierto, Eficiente y con Finanzas Sanas",
        "europe": 1,
        "namerica": 6,
        "asia": 7,
        "lamerica": 0.3,
        "meast": 0.3,
        "africa": 0.1
    }, {
        "year": "Ciudades y Comunidades Sostenibles",
        "europe": 1,
        "namerica": 6,
        "asia": 7,
        "lamerica": 0.3,
        "meast": 0.3,
        "africa": 0.1
    }

];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "year";
categoryAxis.renderer.grid.template.location = 0;


var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.inside = true;
valueAxis.renderer.labels.template.disabled = true;
valueAxis.min = 0;

// Create series
function createSeries(field, name) {

    // Set up series
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.name = name;
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "year";
    series.sequencedInterpolation = true;

    // Make it stacked
    series.stacked = true;

    // Configure columns
    series.columns.template.width = am4core.percent(60);
    series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{categoryX}: {valueY}";

    // Add label
    var labelBullet = series.bullets.push(new am4charts.LabelBullet());
    labelBullet.label.text = "{valueY}";
    labelBullet.locationY = 0.5;

    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.renderer.labels.template.rotation = 270;

    return series;
}

createSeries("europe", "Por eje");
createSeries("namerica", "Por política");
createSeries("asia", "Total");
//createSeries("lamerica", "Latin America");
//createSeries("meast", "Middle-East");
//createSeries("africa", "Africa");

// Legend
chart.legend = new am4charts.Legend();
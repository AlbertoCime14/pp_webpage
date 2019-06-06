am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);


chart.data = [{
    "Municipio": "Chemax",
    "Pob Ocupada Hombres": 881,
    "Hombres en sector primario": 3841,
    "Hombres en sector secundario": 2593,
    "Hombres en sector comercio": 631,
    "Hombres en sector servicios": 1705,
    "Hombres no especifica":40,
    "Pob Ocupada Mujeres": 1868,
    "Mujeres en sector primario": 152,
    "Mujeres en sector secundario": 480,
    "Mujeres en sector comercio": 395,
    "Mujeres en sector servicios": 841,
    "Mujeres no especifica": 0
}, {


        "Municipio": "Temozon",
        "Pob Ocupada Hombres": 3993,
        "Hombres en sector primario": 1934,
        "Hombres en sector secundario": 1132,
        "Hombres en sector comercio": 327,
        "Hombres en sector servicios": 600,
        "Hombres no especifica": 0,
        "Pob Ocupada Mujeres": 1107,
        "Mujeres en sector primario": 33,
        "Mujeres en sector secundario": 498,
        "Mujeres en sector comercio": 185,
        "Mujeres en sector servicios": 391,
        "Mujeres no especifica": 0


}, {
        "Municipio": "Tizimin",
        "Pob Ocupada Hombres": 19722,
        "Hombres en sector primario": 7858,
        "Hombres en sector secundario": 3763,
        "Hombres en sector comercio": 2741,
        "Hombres en sector servicios": 5360,
        "Hombres no especifica": 0,
        "Pob Ocupada Mujeres": 7361,
        "Mujeres en sector primario": 233,
        "Mujeres en sector secundario": 696,
        "Mujeres en sector comercio": 29.40,
        "Mujeres en sector servicios": 6402.60,
        "Mujeres no especifica": 0
    }
,
    {
        "Municipio": "Valladolid",
        "Pob Ocupada Hombres": 20142,
        "Hombres en sector primario": 3506,
        "Mujeres en sector secundario": 5505,
        "Mujeres en sector comercio": 3444,
        "Mujeres en sector servicios": 7687,
        "Hombres no especifica": 0,
        "Pob Ocupada Mujeres": 8971,
        "Mujeres en sector primario": 80,
        "Mujeres en sector secundario": 1299,
        "Mujeres en sector comercio": 2459,
        "Mujeres en sector servicios": 5133,
        "Mujeres no especifica": 0
    }
];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Municipio";
categoryAxis.title.text = "Hombres y mujeres por sector";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 20;
categoryAxis.renderer.cellStartLocation = 0.1;
categoryAxis.renderer.cellEndLocation = 0.9;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.title.text = "Personas";

// Create series
function createSeries(field, name, stacked) {
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "Municipio";
    series.name = name;
    series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
    series.stacked = stacked;
    series.columns.template.width = am4core.percent(95);
}

createSeries("Pob Ocupada Hombres", "Pob Ocupada Hombres", false);
createSeries("Hombres en sector primario", "Hombres en sector primario", true);
createSeries("Hombres en sector secundario", "Hombres en sector secundario", true);
createSeries("Hombres en sector comercio", "Hombres en sector comercio", true);
createSeries("Hombres en sector servicios", "Hombres en sector servicios", true);
createSeries("Hombres no especifica", "Hombres no especifica", true);

createSeries("Pob Ocupada Mujeres", "Pob Ocupada Mujeres", false);
createSeries("Mujeres en sector primario", "Mujeres en sector primario", true);
createSeries("Mujeres en sector secundario", "Mujeres en sector secundario", true);
createSeries("Mujeres en sector comercio", "Mujeres en sector comercio", true);
createSeries("Mujeres en sector servicios", "Mujeres en sector servicios", true);
createSeries("Mujeres no especifica", "Mujeres no especifica", true);

// Add legend
chart.legend = new am4charts.Legend();
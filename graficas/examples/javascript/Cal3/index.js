am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

//            2017	2016    2015  2014
//Nacional	96.22	97.34  95.33  92.22
//Yucat�n	89.79	88.50   86.3   84.3


// Add data
chart.data = [{
    "Periodo": 2000,
    "Muy bajo": 2,
    "Bajo": 1,
    "Medio":21,
    "Alto":77,
    "Muy alto":5
}, {
    "Periodo": 2005,
    "Muy bajo": 1,
    "Bajo": 4,
    "Medio":23,
    "Alto":69,
    "Muy alto":6
}, {
    "Periodo": 2010,
    "Muy bajo": 1,
    "Bajo": 4,
    "Medio":68,
    "Alto":23,
    "Muy alto":10
}, {
    "Periodo": 2015,
    "Muy bajo": 1,
    "Bajo": 6,
    "Medio":31,
    "Alto":63,
    "Muy alto":5
}];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Periodo";
categoryAxis.numberFormatter.numberFormat = "#";
categoryAxis.renderer.inversed = false;
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.cellStartLocation = 0.1;
categoryAxis.renderer.cellEndLocation = 0.9;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.opposite = false;
valueAxis.title.text = "Número de municipios";
valueAxis.max = 80;

// Create series
function createSeries(field, name, color) {
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "Periodo";
    series.name = name;
    series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
    series.columns.template.height = am4core.percent(100);
    series.sequencedInterpolation = true;
    series.columns.template.fill = am4core.color(color);
    series.columns.template.stroke = am4core.color(color);
    var valueLabel = series.bullets.push(new am4charts.LabelBullet());
    valueLabel.label.text = "{valueY}";
    valueLabel.label.dy = -20;
    valueLabel.label.truncate = false;
    valueLabel.label.hideOversized = false;
  

    
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

createSeries("Muy alto", "Muy alto", "#0C3F6C");
createSeries("Alto", "Alto", "#1261a6");
createSeries("Medio", "Medio", "#3193ea");
createSeries("Bajo", "Bajo", "#65aff1");
createSeries("Muy bajo", "Muy bajo", "#84bff4");

// Add legend
chart.legend = new am4charts.Legend();

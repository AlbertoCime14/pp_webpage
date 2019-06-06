am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

//chart.language = "";

var data = [];

chart.data = [
 {
   "Periodo": "2009",
   "Oro": 76,
   "Plata": 96,
   "Bronce": 110,
   "Lugar": 5
 },
 {
   "Periodo": "2010",
   "Oro": 72,
   "Plata": 76,
   "Bronce": 100,
   "Lugar": 8
 },
 {
   "Periodo": "2011",
   "Oro": 92,
   "Plata": 87,
   "Bronce": 130,
   "Lugar": 5
 },
 {
   "Periodo": "2012",
   "Oro": 75,
   "Plata": 77,
   "Bronce": 82,
   "Lugar": 6
 },
 {
   "Periodo": "2013",
   "Oro": 59,
   "Plata": 70,
   "Bronce": 83,
   "Lugar": 6
 },
 {
   "Periodo": "2014",
   "Oro": 72,
   "Plata": 68,
   "Bronce": 98,
   "Lugar": 6
 },
 {
   "Periodo": "2015",
   "Oro": 80,
   "Plata": 82,
   "Bronce": 117,
   "Lugar": 5
 },
 {
   "Periodo": "2016",
   "Oro": 46,
   "Plata": 50,
   "Bronce": 69,
   "Lugar": 6
 },
 {
   "Periodo": "2017",
   "Oro": 54,
   "Plata": 46,
   "Bronce": 78,
   "Lugar": 4
 },
 {
   "Periodo": "2018",
   "Oro": 57,
   "Plata": 56,
   "Bronce": 62,
   "Lugar": 4
 }
];

chart.numberFormatter.numberFormat = "#.0|#.0|0.0";
chart.padding(40, 40, 40, 40);

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.ticks.template.disabled = true;
categoryAxis.renderer.line.opacity = 0;
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.minGridDistance = 40;
categoryAxis.dataFields.category = "Periodo";

categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.renderer.line.opacity = 0;
valueAxis.renderer.ticks.template.disabled = true;
valueAxis.min = 0;

/*function createSeries(field, name, color){
    var columnSeries = chart.series.push(new am4charts.ColumnSeries());
    columnSeries.dataFields.categoryX = "Periodo";
    columnSeries.dataFields.valueY = field;
    columnSeries.name = name;
    columnSeries.tooltipText = "{name}: {valueY.value}";
    columnSeries.sequencedInterpolation = true;
    columnSeries.defaultState.transitionDuration = 1500;
    columnSeries.fill = am4core.color(color);
}

createSeries("Oro", "Oro", "#ffbf00");
createSeries("Plata", "Plata", "#8a9597");
createSeries("Bronce", "Bronce", "#cd7f32");*/

var columnSeries = chart.series.push(new am4charts.ColumnSeries());
columnSeries.dataFields.categoryX = "Periodo";
columnSeries.dataFields.valueY = "Oro";
columnSeries.tooltipText = "Oro: {valueY.value}";
columnSeries.sequencedInterpolation = true;
columnSeries.defaultState.transitionDuration = 1500;
columnSeries.fill = am4core.color("#43355b");//   chart.colors.getIndex(1);
columnSeries.name = "Oro";
var valueLabel = columnSeries.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY}";
valueLabel.label.dy = -20;

var columnSeries = chart.series.push(new am4charts.ColumnSeries());
columnSeries.dataFields.categoryX = "Periodo";
columnSeries.dataFields.valueY = "Plata";
columnSeries.tooltipText = "Plata: {valueY.value}";
columnSeries.sequencedInterpolation = true;
columnSeries.defaultState.transitionDuration = 1500;
columnSeries.fill = am4core.color("#695292");//   chart.colors.getIndex(1);
columnSeries.name = "Plata";
var valueLabel = columnSeries.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY}";
valueLabel.label.dy = -20;


var columnSeries = chart.series.push(new am4charts.ColumnSeries());
columnSeries.dataFields.categoryX = "Periodo";
columnSeries.dataFields.valueY = "Bronce";
columnSeries.tooltipText = "Bronce: {valueY.value}";
columnSeries.sequencedInterpolation = true;
columnSeries.defaultState.transitionDuration = 1500;
columnSeries.fill = am4core.color("#9580ba");//   chart.colors.getIndex(1);
columnSeries.name = "Bronce";
var valueLabel = columnSeries.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY}";
valueLabel.label.dy = -20;

var columnTemplate = columnSeries.columns.template;
//columnTemplate.column.cornerRadiusTopLeft = 10;
//columnTemplate.column.cornerRadiusTopRight = 10;
columnTemplate.strokeWidth = 1;
columnTemplate.strokeOpacity = 1;
columnTemplate.stroke = columnSeries.fill;

var desaturateFilter = new am4core.DesaturateFilter();
desaturateFilter.saturation = 0.5;

columnTemplate.filters.push(desaturateFilter);

// first way - get properties from data. but can only be done with columns, as they are separate objects.    
columnTemplate.propertyFields.strokeDasharray = "stroke";
columnTemplate.propertyFields.fillOpacity = "opacity";

// add some cool saturation effect on hover
var desaturateFilterHover = new am4core.DesaturateFilter();
desaturateFilterHover.saturation = 1;

var hoverState = columnTemplate.states.create("hover");
hoverState.transitionDuration = 2000;
hoverState.filters.push(desaturateFilterHover);

var lineSeries = chart.series.push(new am4charts.LineSeries());
lineSeries.dataFields.categoryX = "Periodo";
lineSeries.dataFields.valueY = "Lugar";
lineSeries.tooltipText = "Lugar: {valueY.value}";
lineSeries.sequencedInterpolation = true;
lineSeries.defaultState.transitionDuration = 1500;
lineSeries.stroke = am4core.color("#FF0000"); //chart.colors.getIndex(11);
lineSeries.fill = lineSeries.stroke;
lineSeries.strokeWidth = 2;
lineSeries.name = "Lugar";

//Agregar bullet a línea
var circleBullet = lineSeries.bullets.push(new am4charts.CircleBullet());
circleBullet.circle.fill = am4core.color("#fff");
circleBullet.circle.strokeWidth = 1;

/*// second way - add axis range.
var lineSeriesRange = categoryAxis.createSeriesRange(lineSeries);
lineSeriesRange.category = "2018";
lineSeriesRange.endCategory = "2019";
lineSeriesRange.contents.strokeDasharray = "3,3";
lineSeriesRange.locations.category = 0.5;*/

//var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
//bullet.fill = lineSeries.stroke;
//bullet.circle.radius = 4;

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "none";
chart.cursor.lineX.opacity = 0;
chart.cursor.lineY.opacity = 0;
//chart.exporting.menu = new am4core.ExportMenu();

//Leyendas
chart.legend = new am4charts.Legend();
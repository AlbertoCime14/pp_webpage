am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

//chart.language = "";

var data = [];

chart.data = [
 {
   "Año": "2013",
   "Eventos": 196,
   "Bienes": "66"
 },
 {
   "Año": "2014",
   "Eventos": 107,
   "Bienes": "39"
 },
 {
   "Año": "2015",
   "Eventos": 194,
   "Bienes": "12"
 },
 {
   "Año": "2016",
   "Eventos": 200,
   "Bienes": "25"
 },
 {
   "Año": "2017",
   "Eventos": 229,
   "Bienes": "4"
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
categoryAxis.dataFields.category = "Año";

categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 0;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.renderer.line.opacity = 0;
valueAxis.renderer.ticks.template.disabled = true;
valueAxis.min = 0;

var columnSeries = chart.series.push(new am4charts.ColumnSeries());
columnSeries.dataFields.categoryX = "Año";
columnSeries.dataFields.valueY = "Eventos";
columnSeries.tooltipText = "Eventos de preservación del patrimonio cultural: {valueY.value}";
columnSeries.sequencedInterpolation = true;
columnSeries.defaultState.transitionDuration = 1500;
columnSeries.fill = am4core.color("#BCAFD5");//   chart.colors.getIndex(1);
columnSeries.name = "Eventos de preservación del patrimonio cultural";

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
lineSeries.dataFields.categoryX = "Año";
lineSeries.dataFields.valueY = "Bienes";
lineSeries.tooltipText = "Bienes del patrimonio cultural preservados: {valueY.value} mil";
lineSeries.sequencedInterpolation = true;
lineSeries.defaultState.transitionDuration = 1500;
lineSeries.stroke = am4core.color("#43355b"); //chart.colors.getIndex(11);
lineSeries.fill = lineSeries.stroke;
lineSeries.strokeWidth = 2;
lineSeries.name = "Bienes del patrimonio cultural preservados";

//Agregar bullet a línea
var circleBullet = lineSeries.bullets.push(new am4charts.CircleBullet());
circleBullet.circle.fill = am4core.color("#fff");
circleBullet.circle.strokeWidth = 1;

// second way - add axis range.
var lineSeriesRange = categoryAxis.createSeriesRange(lineSeries);
lineSeriesRange.category = "2018";
lineSeriesRange.endCategory = "2019";
lineSeriesRange.contents.strokeDasharray = "3,3";
lineSeriesRange.locations.category = 0.5;

/*var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
bullet.fill = lineSeries.stroke;
bullet.circle.radius = 4;*/

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "none";
chart.cursor.lineX.opacity = 0;
chart.cursor.lineY.opacity = 0;
chart.legend = new am4charts.Legend();
//chart.exporting.menu = new am4core.ExportMenu();
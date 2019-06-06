am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

//Datos en Excel
//             2014    2015    2016
//Auditorios	0.20	0.14	0.24
//Bibliotecas	0.78	0.77	0.76
//Centros culturales	2.89	2.94	2.76
chart.colors.list = [
    am4core.color("#95C11F")
];

// Add data
/*
chart.data = [
 {
   "Descripcion": "2001",
   "Ranking": 1.15
 },
 {
   "Descripcion": "2002",
   "Ranking": 0.94
 },
 {
   "Descripcion": "2003",
   "Ranking": 0.87
 },
 {
   "Descripcion": "2004",
   "Ranking": 1.19
 },
 {
   "Descripcion": "2005",
   "Ranking": 0.85
 },
 {
   "Descripcion": "2006",
   "Ranking": 0.73
 },
 {
   "Descripcion": "2007",
   "Ranking": 0.89
 },
 {
   "Descripcion": "2008",
   "Ranking": 0.61
 },
 {
   "Descripcion": "2009",
   "Ranking": 1.92
 },
 {
   "Descripcion": "2010",
   "Ranking": 0.71
 },
 {
   "Descripcion": "2011",
   "Ranking": 0.48
 },
 {
   "Descripcion": "2012",
   "Ranking": 0.56
 },
 {
   "Descripcion": "2013",
   "Ranking": 0.66
 },
 {
   "Descripcion": "2014",
   "Ranking": 0.68
 },
 {
   "Descripcion": "2015",
   "Ranking": 0.69
 },
 {
   "Descripcion": "2016",
   "Ranking": 0.85
 }
];*/

chart.data = [ 
 {
   "Descripcion": "2006",
   "Ranking": 0.73
 },
 {
   "Descripcion": "2007",
   "Ranking": 0.89
 },
 {
   "Descripcion": "2008",
   "Ranking": 0.61
 },
 {
   "Descripcion": "2009",
   "Ranking": 1.92
 },
 {
   "Descripcion": "2010",
   "Ranking": 0.71
 },
 {
   "Descripcion": "2011",
   "Ranking": 0.48
 },
 {
   "Descripcion": "2012",
   "Ranking": 0.56
 },
 {
   "Descripcion": "2013",
   "Ranking": 0.66
 },
 {
   "Descripcion": "2014",
   "Ranking": 0.68
 },
 {
   "Descripcion": "2015",
   "Ranking": 0.69
 },
 {
   "Descripcion": "2016",
   "Ranking": 0.85
 }
];

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());

// Create value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//valueAxis.renderer.inversed = true;
valueAxis.title.text = "";
categoryAxis.title.text = "Ranking";
valueAxis.renderer.minLabelPosition = 0.01;

categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.ticks.template.disabled = true;
categoryAxis.renderer.line.opacity = 0;
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.minGridDistance = 40;
categoryAxis.dataFields.category = "Descripcion";

categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.renderer.line.opacity = 0;
valueAxis.renderer.ticks.template.disabled = true;
valueAxis.min = 0;

var columnSeries = chart.series.push(new am4charts.ColumnSeries());
columnSeries.dataFields.categoryX = "";
//de esta fila se eliminan los datos para tener solo las lineas
columnSeries.dataFields.valueY = "Ranking";

//aqui cierra
columnSeries.sequencedInterpolation = true;
columnSeries.defaultState.transitionDuration = 1500;
columnSeries.fill = am4core.color("#ffffff");//   chart.colors.getIndex(1);

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
lineSeries.dataFields.categoryX = "Descripcion";
lineSeries.dataFields.valueY = "Ranking";
lineSeries.sequencedInterpolation = true;
lineSeries.defaultState.transitionDuration = 1500;
lineSeries.stroke = am4core.color("#95C11F"); //chart.colors.getIndex(11);
lineSeries.fill = lineSeries.stroke;
lineSeries.strokeWidth = 2;

var bullet1 = lineSeries.bullets.push(new am4charts.LabelBullet());
bullet1.interactionsEnabled = false;
bullet1.label.text = "{valueY.value}";
bullet1.label.fill = am4core.color("#FFFFFF");
bullet1.label.background.fill = am4core.color("#95C11F");
bullet1.locationY = 0.1;
bullet1.label.dy = -20;

// second way - add axis range.
var lineSeriesRange = categoryAxis.createSeriesRange(lineSeries);
lineSeriesRange.category = "2018";
lineSeriesRange.endCategory = "2019";
lineSeriesRange.contents.strokeDasharray = "3,3";
lineSeriesRange.locations.category = 0.5;

var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
bullet.fill = lineSeries.stroke;
bullet.circle.radius = 0;

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "none";
chart.cursor.lineX.opacity = 0;
chart.cursor.lineY.opacity = 0;
//chart.exporting.menu = new am4core.ExportMenu();

//chart.legend = new am4charts.Legend();


/*
// Create category axis
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Descripcion";
categoryAxis.renderer.opposite = true;

// Create value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//valueAxis.renderer.inversed = true;
valueAxis.title.text = "Place taken";
valueAxis.renderer.minLabelPosition = 0.01;

// Create series
var series1 = chart.series.push(new am4charts.LineSeries());
series1.dataFields.valueY = "Ranking";
series1.dataFields.categoryX = "Descripcion";
series1.name = "Ranking";
series1.strokeWidth = 3;
series1.bullets.push(new am4charts.CircleBullet());
series1.tooltipText = "Asistencia a {name} en {categoryX}: {valueY}";
series1.legendSettings.valueText = "{valueY}";
series1.visible = false;

var bullet1 = series1.bullets.push(new am4charts.LabelBullet());
bullet1.interactionsEnabled = false;
bullet1.label.text = "{valueY.value}";
bullet1.locationY = 0.01;
bullet1.label.dy = 10;


// Add chart cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "zoomY";

// Add legend
//chart.legend = new am4charts.Legend();
chart.exporting.menu = new am4core.ExportMenu();
*/
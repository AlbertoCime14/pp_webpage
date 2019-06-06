am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

//chart.language = "";

var data = [];

chart.data = [
 {
   "Estado": "Ciudad de México",
   "2017": " $420.96 ",
   "Nacional 2017": " $333.23 ",
   "opacity": 0.5
 },
 {
   "Estado": "Campeche",
   "2017": " $389.40 ",
   "Nacional 2017": " $333.23 ",
   "opacity": 0.5
 },
 {
   "Estado": "Querétaro",
   "2017": " $371.11 ",
   "Nacional 2017": " $333.23 ",
   "opacity": 0.5
 },
 {
   "Estado": "Nuevo León",
   "2017": " $369.48 ",
   "Nacional 2017": " $333.23 ",
   "opacity": 0.5
 },
 {
   "Estado": "Veracruz",
   "2017": " $333.12 ",
   "Nacional 2017": " $333.23 ",
   "opacity": 0.5
 },
 {
   "Estado": "Jalisco",
   "2017": " $328.99 ",
   "Nacional 2017": " $333.23 ",
   "opacity": 0.5
 },
 {
   "Estado": "Morelos",
   "2017": " $328.27 ",
   "Nacional 2017": " $333.23 ",
   "opacity": 0.5
 },
 {
   "Estado": "Baja California",
   "2017": " $328.22 ",
   "Nacional 2017": " $333.23 ",
   "opacity": 0.5
 },
 {
   "Estado": "Coahuila",
   "2017": " $327.58 ",
   "Nacional 2017": " $333.23 ",
   "opacity": 0.5
 },
 {
   "Estado": "San Luis Potosí",
   "2017": " $326.80 ",
   "Nacional 2017": " $333.23 ",
   "opacity": 0.5
 },
 {
   "Estado": "México",
   "2017": " $323.08 ",
   "Nacional 2017": " $333.23 ",
   "opacity": 0.5
 },
 {
   "Estado": "Chihuahua",
   "2017": " $315.11 ",
   "Nacional 2017": " $333.23 ",
   "opacity": 0.5
 },
 {
   "Estado": "Tamaulipas",
   "2017": " $310.92 ",
   "Nacional 2017": " $333.23 ",
   "opacity": 0.5
 },
 {
   "Estado": "Aguascalientes",
   "2017": " $308.65 ",
   "Nacional 2017": " $333.23 ",
   "opacity": 0.5
 },
 {
   "Estado": "Zacatecas",
   "2017": " $307.12 ",
   "Nacional 2017": " $333.23 ",
   "opacity": 0.5
 },
 {
   "Estado": "Baja California Sur",
   "2017": " $306.02 ",
   "Nacional 2017": " $333.23 ",
   "opacity": 0.5
 },
 {
   "Estado": "Puebla",
   "2017": " $303.93 ",
   "Nacional 2017": " $333.23 ",
   "opacity": 0.5
 },
 {
   "Estado": "[font-size: 20px; font-weight: bold]Yucatán[/]",
   "2017": " $291.57 ",
   "Nacional 2017": " $333.23 ",
   "opacity": 1
 },
 {
   "Estado": "Chiapas",
   "2017": " $291.26 ",
   "Nacional 2017": " $333.23 ",
   "opacity": 0.5
 },
 {
   "Estado": "Hidalgo",
   "2017": " $288.51 ",
   "Nacional 2017": " $333.23 ",
   "opacity": 0.5
 },
 {
   "Estado": "Sonora",
   "2017": " $288.09 ",
   "Nacional 2017": " $333.23 ",
   "opacity": 0.5
 },
 {
   "Estado": "Michoacán",
   "2017": " $285.36 ",
   "Nacional 2017": " $333.23 ",
   "opacity": 0.5
 },
 {
   "Estado": "Guanajuato",
   "2017": " $281.95 ",
   "Nacional 2017": " $333.23 ",
   "opacity": 0.5
 },
 {
   "Estado": "Colima",
   "2017": " $281.41 ",
   "Nacional 2017": " $333.23 ",
   "opacity": 0.5
 },
 {
   "Estado": "Tabasco",
   "2017": " $281.23 ",
   "Nacional 2017": " $333.23 ",
   "opacity": 0.5
 },
 {
   "Estado": "Tlaxcala",
   "2017": " $280.04 ",
   "Nacional 2017": " $333.23 ",
   "opacity": 0.5
 },
 {
   "Estado": "Guerrero",
   "2017": " $271.81 ",
   "Nacional 2017": " $333.23 ",
   "opacity": 0.5
 },
 {
   "Estado": "Oaxaca",
   "2017": " $267.27 ",
   "Nacional 2017": " $333.23 ",
   "opacity": 0.5
 },
 {
   "Estado": "Durango",
   "2017": " $261.65 ",
   "Nacional 2017": " $333.23 ",
   "opacity": 0.5
 },
 {
   "Estado": "Nayarit",
   "2017": " $260.39 ",
   "Nacional 2017": " $333.23 ",
   "opacity": 0.5
 },
 {
   "Estado": "Quintana Roo",
   "2017": " $248.89 ",
   "Nacional 2017": " $333.23 ",
   "opacity": 0.5
 },
 {
   "Estado": "Sinaloa",
   "2017": " $245.65 ",
   "Nacional 2017": " $333.23 ",
   "opacity": 0.5
 }
];
chart.padding(40, 40, 40, 40);

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.ticks.template.disabled = true;
categoryAxis.renderer.line.opacity = 0;
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.minGridDistance = 1;
categoryAxis.dataFields.category = "Estado";

categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.renderer.line.opacity = 0;
valueAxis.renderer.ticks.template.disabled = true;
valueAxis.min = 0;
valueAxis.max = 450;

var columnSeries = chart.series.push(new am4charts.ColumnSeries());
columnSeries.dataFields.categoryX = "Estado";
columnSeries.dataFields.valueY = "2017";
columnSeries.tooltipText = "2017: {valueY.value}";
columnSeries.sequencedInterpolation = true;
columnSeries.defaultState.transitionDuration = 1500;
columnSeries.fill = am4core.color("#00A984");//   chart.colors.getIndex(1);


    var valueLabel = columnSeries.bullets.push(new am4charts.LabelBullet());
    valueLabel.label.text = "{valueY}";
    valueLabel.label.dy = -30;
    valueLabel.label.rotation = -90;
    valueLabel.label.truncate = false;
   valueLabel.label.hideOversized = false;


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
lineSeries.dataFields.categoryX = "Estado";
lineSeries.dataFields.valueY = "Nacional 2017";
lineSeries.tooltipText = "Nacional 2017: {valueY.value}";
lineSeries.sequencedInterpolation = true;
lineSeries.defaultState.transitionDuration = 1500;
lineSeries.stroke = am4core.color("#FF0000"); //chart.colors.getIndex(11);
lineSeries.fill = lineSeries.stroke;
lineSeries.strokeWidth = 2;

// second way - add axis range.
var lineSeriesRange = categoryAxis.createSeriesRange(lineSeries);
lineSeriesRange.category = "2018";
lineSeriesRange.endCategory = "2019";
lineSeriesRange.contents.strokeDasharray = "3,3";
lineSeriesRange.locations.category = 0.5;

//var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
//bullet.fill = lineSeries.stroke;
//bullet.circle.radius = 4;


var label = chart.createChild(am4core.Label);
label.text = "Promedio Nacional: 333.23";
label.fontSize = 14;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(90);
label.horizontalCenter = "middle";
label.y = am4core.percent(17);

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "none";
chart.cursor.lineX.opacity = 0;
chart.cursor.lineY.opacity = 0;
//chart.exporting.menu = new am4core.ExportMenu();
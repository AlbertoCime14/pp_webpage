am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

//chart.language = "";

var data = [];

chart.data = [
 {
   "Entidad": "Chiapas",
   "escolaridad": 7.5,
   "nacional": 9.4,
   "primaria": 6,
   "preparatoria": 13,
   "opacity": 0.5
 },
 {
   "Entidad": "Oaxaca",
   "escolaridad": 7.7,
   "nacional": 9.4,
   "primaria": 6,
   "preparatoria": 13,
   "opacity": 0.5
 },
 {
   "Entidad": "Guerrero",
   "escolaridad": 7.9,
   "nacional": 9.4,
   "primaria": 6,
   "preparatoria": 13,
   "opacity": 0.5
 },
 {
   "Entidad": "Michoacán",
   "escolaridad": 8.1,
   "nacional": 9.4,
   "primaria": 6,
   "preparatoria": 13,
   "opacity": 0.5
 },
 {
   "Entidad": "Veracruz",
   "escolaridad": 8.4,
   "nacional": 9.4,
   "primaria": 6,
   "preparatoria": 13,
   "opacity": 0.5
 },
 {
   "Entidad": "Guanajuato",
   "escolaridad": 8.5,
   "nacional": 9.4,
   "primaria": 6,
   "preparatoria": 13,
   "opacity": 0.5
 },
 {
   "Entidad": "Puebla",
   "escolaridad": 8.7,
   "nacional": 9.4,
   "primaria": 6,
   "preparatoria": 13,
   "opacity": 0.5
 },
 {
   "Entidad": "Zacatecas",
   "escolaridad": 8.9,
   "nacional": 9.4,
   "primaria": 6,
   "preparatoria": 13,
   "opacity": 0.5
 },
 {
   "Entidad": "Hidalgo",
   "escolaridad": 9,
   "nacional": 9.4,
   "primaria": 6,
   "preparatoria": 13,
   "opacity": 0.5
 },
 {
   "Entidad": "San Luis Potosí",
   "escolaridad": 9,
   "nacional": 9.4,
   "primaria": 6,
   "preparatoria": 13,
   "opacity": 0.5
 },
 {
   "Entidad": "[font-size: 20px; font-weight: bold;]Yucatán[/]",
   "escolaridad": 9.1,
   "nacional": 9.4,
   "primaria": 6,
   "preparatoria": 13,
   "opacity": 1
 },
 {
   "Entidad": "Durango",
   "escolaridad": 9.4,
   "nacional": 9.4,
   "primaria": 6,
   "preparatoria": 13,
   "opacity": 0.5
 },
 {
   "Entidad": "Nayarit",
   "escolaridad": 9.4,
   "nacional": 9.4,
   "primaria": 6,
   "preparatoria": 13,
   "opacity": 0.5
 },
 {
   "Entidad": "Tlaxcala",
   "escolaridad": 9.5,
   "nacional": 9.4,
   "primaria": 6,
   "preparatoria": 13,
   "opacity": 0.5
 },
 {
   "Entidad": "Tabasco",
   "escolaridad": 9.5,
   "nacional": 9.4,
   "primaria": 6,
   "preparatoria": 13,
   "opacity": 0.5
 },
 {
   "Entidad": "Campeche",
   "escolaridad": 9.5,
   "nacional": 9.4,
   "primaria": 6,
   "preparatoria": 13,
   "opacity": 0.5
 },
 {
   "Entidad": "Jalisco",
   "escolaridad": 9.5,
   "nacional": 9.4,
   "primaria": 6,
   "preparatoria": 13,
   "opacity": 0.5
 },
 {
   "Entidad": "Chihuahua",
   "escolaridad": 9.5,
   "nacional": 9.4,
   "primaria": 6,
   "preparatoria": 13,
   "opacity": 0.5
 },
 {
   "Entidad": "Morelos",
   "escolaridad": 9.6,
   "nacional": 9.4,
   "primaria": 6,
   "preparatoria": 13,
   "opacity": 0.5
 },
 {
   "Entidad": "México",
   "escolaridad": 9.7,
   "nacional": 9.4,
   "primaria": 6,
   "preparatoria": 13,
   "opacity": 0.5
 },
 {
   "Entidad": "Colima",
   "escolaridad": 9.7,
   "nacional": 9.4,
   "primaria": 6,
   "preparatoria": 13,
   "opacity": 0.5
 },
 {
   "Entidad": "Tamaulipas",
   "escolaridad": 9.7,
   "nacional": 9.4,
   "primaria": 6,
   "preparatoria": 13,
   "opacity": 0.5
 },
 {
   "Entidad": "Querétaro",
   "escolaridad": 9.7,
   "nacional": 9.4,
   "primaria": 6,
   "preparatoria": 13,
   "opacity": 0.5
 },
 {
   "Entidad": "Baja California",
   "escolaridad": 9.8,
   "nacional": 9.4,
   "primaria": 6,
   "preparatoria": 13,
   "opacity": 0.5
 },
 {
   "Entidad": "Sinaloa",
   "escolaridad": 9.9,
   "nacional": 9.4,
   "primaria": 6,
   "preparatoria": 13,
   "opacity": 0.5
 },
 {
   "Entidad": "Aguascalientes",
   "escolaridad": 10,
   "nacional": 9.4,
   "primaria": 6,
   "preparatoria": 13,
   "opacity": 0.5
 },
 {
   "Entidad": "Quintana Roo",
   "escolaridad": 10,
   "nacional": 9.4,
   "primaria": 6,
   "preparatoria": 13,
   "opacity": 0.5
 },
 {
   "Entidad": "Baja California Sur",
   "escolaridad": 10.1,
   "nacional": 9.4,
   "primaria": 6,
   "preparatoria": 13,
   "opacity": 0.5
 },
 {
   "Entidad": "Coahuila",
   "escolaridad": 10.1,
   "nacional": 9.4,
   "primaria": 6,
   "preparatoria": 13,
   "opacity": 0.5
 },
 {
   "Entidad": "Sonora",
   "escolaridad": 10.2,
   "nacional": 9.4,
   "primaria": 6,
   "preparatoria": 13,
   "opacity": 0.5
 },
 {
   "Entidad": "Nuevo León",
   "escolaridad": 10.3,
   "nacional": 9.4,
   "primaria": 6,
   "preparatoria": 13,
   "opacity": 0.5
 },
 {
   "Entidad": "Ciudad de México",
   "escolaridad": 11.1,
   "nacional": 9.4,
   "primaria": 6,
   "preparatoria": 13,
   "opacity": 0.5
 }
];

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.ticks.template.disabled = true;
categoryAxis.renderer.line.opacity = 0;
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.minGridDistance = 40;
categoryAxis.dataFields.category = "Entidad";

categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.renderer.line.opacity = 0;
valueAxis.renderer.ticks.template.disabled = true;
valueAxis.min = 0;

var columnSeries = chart.series.push(new am4charts.ColumnSeries());
columnSeries.dataFields.categoryX = "Entidad";
columnSeries.dataFields.valueY = "escolaridad";
columnSeries.tooltipText = "Grado de escolaridad: {valueY.value}";
columnSeries.sequencedInterpolation = true;
columnSeries.defaultState.transitionDuration = 1500;
columnSeries.stroke = am4core.color("#0C3F6C")
columnSeries.fill = am4core.color("#0C3F6C");//   chart.colors.getIndex(1);
columnSeries.fillOpacity = "opacity";
columnSeries.legendSettings.valueText = "Grado de escolaridad";
//columnSeries.legendSettings.background = am4core.color("#0C3F6C");
//Valores de las barras verticales
var valueLabel = columnSeries.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY}";
valueLabel.label.dy = -23;

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

function createLine(field, name, color){
    var lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.categoryX = "Entidad";
    lineSeries.dataFields.valueY = field;
    lineSeries.name = name;
    lineSeries.tooltipText = "{name}: {valueY.value}";
    lineSeries.sequencedInterpolation = true;
    lineSeries.defaultState.transitionDuration = 1500;
    lineSeries.stroke = am4core.color(color); //chart.colors.getIndex(11);
    lineSeries.fill = lineSeries.stroke;
    lineSeries.strokeWidth = 2;    
    //lineSeries.legendSettings.valueText = name;
}

createLine("nacional", "Escolaridad nacional", "#FF0000");
createLine("primaria", "Límite de primaria completa", "#ff8000");
createLine("preparatoria", "Límite de preparatoria completa", "#ffff00");



// second way - add axis range.
/*var lineSeriesRange = categoryAxis.createSeriesRange(lineSeries);
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

chart.legend = new am4charts.Legend();
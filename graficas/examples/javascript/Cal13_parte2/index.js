am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

//chart.language = "";

var data = [];

chart.data = [
  {
    "Entidad": "Chihuahua",
    "Tasa": 11,
    "Nacional": 5.3,
    "opacity": 0.5
  },
  {
    "Entidad": "Aguascalientes",
    "Tasa": 10.3,
    "Nacional": 5.3,
    "opacity": 0.5
  },
  {
    "Entidad": "Sonora",
    "Tasa": 9,
    "Nacional": 5.3,
    "opacity": 0.5
  },
  {
    "Entidad": "[font-size: 20px; font-weight: bold]Yucatán[/]",
    "Tasa": 8.8,
    "Nacional": 5.3,
    "opacity": 1
  },
  {
    "Entidad": "Quintana Roo",
    "Tasa": 8.5,
    "Nacional": 5.3,
    "opacity": 0.5
  },
  {
    "Entidad": "Guanajuato",
    "Tasa": 8.2,
    "Nacional": 5.3,
    "opacity": 0.5
  },
  {
    "Entidad": "Jalisco",
    "Tasa": 8.1,
    "Nacional": 5.3,
    "opacity": 0.5
  },
  {
    "Entidad": "Campeche",
    "Tasa": 7.9,
    "Nacional": 5.3,
    "opacity": 0.5
  },
  {
    "Entidad": "San Luis Potosí",
    "Tasa": 7.1,
    "Nacional": 5.3,
    "opacity": 0.5
  },
  {
    "Entidad": "Durango",
    "Tasa": 6.8,
    "Nacional": 5.3,
    "opacity": 0.5
  },
  {
    "Entidad": "Zacatecas",
    "Tasa": 6.7,
    "Nacional": 5.3,
    "opacity": 0.5
  },
  {
    "Entidad": "Coahuila",
    "Tasa": 6.6,
    "Nacional": 5.3,
    "opacity": 0.5
  },
  {
    "Entidad": "Querétaro",
    "Tasa": 6.4,
    "Nacional": 5.3,
    "opacity": 0.5
  },
  {
    "Entidad": "Baja California Sur",
    "Tasa": 6.3,
    "Nacional": 5.3,
    "opacity": 0.5
  },
  {
    "Entidad": "Colima",
    "Tasa": 6.2,
    "Nacional": 5.3,
    "opacity": 0.5
  },
  {
    "Entidad": "Nayarit",
    "Tasa": 5.9,
    "Nacional": 5.3,
    "opacity": 0.5
  },
  {
    "Entidad": "Sinaloa",
    "Tasa": 5.5,
    "Nacional": 5.3,
    "opacity": 0.5
  },
  {
    "Entidad": "Nuevo León",
    "Tasa": 5.1,
    "Nacional": 5.3,
    "opacity": 0.5
  },
  {
    "Entidad": "Baja California",
    "Tasa": 4.8,
    "Nacional": 5.3,
    "opacity": 0.5
  },
  {
    "Entidad": "Chiapas",
    "Tasa": 4.8,
    "Nacional": 5.3,
    "opacity": 0.5
  },
  {
    "Entidad": "Puebla",
    "Tasa": 4.7,
    "Nacional": 5.3,
    "opacity": 0.5
  },
  {
    "Entidad": "Tamaulipas",
    "Tasa": 4.5,
    "Nacional": 5.3,
    "opacity": 0.5
  },
  {
    "Entidad": "Michoacán",
    "Tasa": 4.4,
    "Nacional": 5.3,
    "opacity": 0.5
  },
  {
    "Entidad": "Tabasco",
    "Tasa": 4.4,
    "Nacional": 5.3,
    "opacity": 0.5
  },
  {
    "Entidad": "Tlaxcala",
    "Tasa": 4.2,
    "Nacional": 5.3,
    "opacity": 0.5
  },
  {
    "Entidad": "Hidalgo",
    "Tasa": 3.9,
    "Nacional": 5.3,
    "opacity": 0.5
  },
  {
    "Entidad": "Morelos",
    "Tasa": 3.6,
    "Nacional": 5.3,
    "opacity": 0.5
  },
  {
    "Entidad": "México",
    "Tasa": 3.4,
    "Nacional": 5.3,
    "opacity": 0.5
  },
  {
    "Entidad": "Ciudad de México",
    "Tasa": 3.3,
    "Nacional": 5.3,
    "opacity": 0.5
  },
  {
    "Entidad": "Oaxaca",
    "Tasa": 3.2,
    "Nacional": 5.3,
    "opacity": 0.5
  },
  {
    "Entidad": "Veracruz",
    "Tasa": 2.6,
    "Nacional": 5.3,
    "opacity": 0.5
  },
  {
    "Entidad": "Guerrero",
    "Tasa": 2,
    "Nacional": 5.3,
    "opacity": 0.5
  }
 ];

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.ticks.template.disabled = true;
categoryAxis.renderer.line.opacity = 0;
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.minGridDistance = 1;
categoryAxis.dataFields.category = "Entidad";


var  valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.title.text = "Tasa de suicidios";

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
columnSeries.dataFields.valueY = "Tasa";
columnSeries.sequencedInterpolation = true;
columnSeries.defaultState.transitionDuration = 1500;
columnSeries.fill = am4core.color("#0C3F6C");//   chart.colors.getIndex(1);

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
lineSeries.dataFields.categoryX = "Entidad";
lineSeries.dataFields.valueY = "Nacional";
lineSeries.tooltipText = "Nacional: {valueY.value}";
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

//Valores de las barras verticales
var valueLabel = columnSeries.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY}";
valueLabel.label.dy = -20;
valueLabel.label.truncate = false;
valueLabel.label.hideOversized = false;

//var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
//bullet.fill = lineSeries.stroke;
//bullet.circle.radius = 4;

var label = chart.createChild(am4core.Label);
label.text = "Promedio Nacional: 5.3";
label.fontSize = 14;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(90);
label.horizontalCenter = "middle";
label.y = am4core.percent(42);


chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "none";
chart.cursor.lineX.opacity = 0;
chart.cursor.lineY.opacity = 0;
//chart.exporting.menu = new am4core.ExportMenu();
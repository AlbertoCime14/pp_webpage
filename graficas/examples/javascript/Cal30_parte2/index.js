am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

//chart.language = "";

var data = [];

chart.data = [
  {
    "Entidad": "Chiapas",
    "Población no económicamente activa sin acceso a la seguridad social": 68.3,
    "Nacional": 46.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Oaxaca",
    "Población no económicamente activa sin acceso a la seguridad social": 63.4,
    "Nacional": 46.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Guerrero",
    "Población no económicamente activa sin acceso a la seguridad social": 62.5,
    "Nacional": 46.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Tabasco",
    "Población no económicamente activa sin acceso a la seguridad social": 59.9,
    "Nacional": 46.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Hidalgo",
    "Población no económicamente activa sin acceso a la seguridad social": 58.3,
    "Nacional": 46.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Veracruz",
    "Población no económicamente activa sin acceso a la seguridad social": 57.2,
    "Nacional": 46.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Michoacán",
    "Población no económicamente activa sin acceso a la seguridad social": 57.2,
    "Nacional": 46.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Puebla",
    "Población no económicamente activa sin acceso a la seguridad social": 57.1,
    "Nacional": 46.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Tlaxcala",
    "Población no económicamente activa sin acceso a la seguridad social": 56.9,
    "Nacional": 46.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Zacatecas",
    "Población no económicamente activa sin acceso a la seguridad social": 53.7,
    "Nacional": 46.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Guanajuato",
    "Población no económicamente activa sin acceso a la seguridad social": 50.6,
    "Nacional": 46.1,
    "opacity": 0.5
  },
  {
    "Entidad": "San Luis Potosí",
    "Población no económicamente activa sin acceso a la seguridad social": 49.9,
    "Nacional": 46.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Nayarit",
    "Población no económicamente activa sin acceso a la seguridad social": 48.5,
    "Nacional": 46.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Quintana Roo",
    "Población no económicamente activa sin acceso a la seguridad social": 45.8,
    "Nacional": 46.1,
    "opacity": 0.5
  },
  {
    "Entidad": "México",
    "Población no económicamente activa sin acceso a la seguridad social": 45.7,
    "Nacional": 46.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Campeche",
    "Población no económicamente activa sin acceso a la seguridad social": 44.7,
    "Nacional": 46.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Morelos",
    "Población no económicamente activa sin acceso a la seguridad social": 44.6,
    "Nacional": 46.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Querétaro",
    "Población no económicamente activa sin acceso a la seguridad social": 44.2,
    "Nacional": 46.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Durango",
    "Población no económicamente activa sin acceso a la seguridad social": 42.3,
    "Nacional": 46.1,
    "opacity": 0.5
  },
  {
    "Entidad": "[font-size: 20px; font-weight: bold;]Yucatán[/]",
    "Población no económicamente activa sin acceso a la seguridad social": 42.1,
    "Nacional": 46.1,
    "opacity": 1
  },
  {
    "Entidad": "Sinaloa",
    "Población no económicamente activa sin acceso a la seguridad social": 41.6,
    "Nacional": 46.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Colima",
    "Población no económicamente activa sin acceso a la seguridad social": 41.4,
    "Nacional": 46.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Baja California",
    "Población no económicamente activa sin acceso a la seguridad social": 41.2,
    "Nacional": 46.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Jalisco",
    "Población no económicamente activa sin acceso a la seguridad social": 39,
    "Nacional": 46.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Tamaulipas",
    "Población no económicamente activa sin acceso a la seguridad social": 38.8,
    "Nacional": 46.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Baja California Sur",
    "Población no económicamente activa sin acceso a la seguridad social": 37.1,
    "Nacional": 46.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Aguascalientes",
    "Población no económicamente activa sin acceso a la seguridad social": 36.7,
    "Nacional": 46.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Ciudad de México",
    "Población no económicamente activa sin acceso a la seguridad social": 36.3,
    "Nacional": 46.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Chihuahua",
    "Población no económicamente activa sin acceso a la seguridad social": 33.7,
    "Nacional": 46.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Sonora",
    "Población no económicamente activa sin acceso a la seguridad social": 30.6,
    "Nacional": 46.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Nuevo León",
    "Población no económicamente activa sin acceso a la seguridad social": 26.6,
    "Nacional": 46.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Coahuila",
    "Población no económicamente activa sin acceso a la seguridad social": 24.5,
    "Nacional": 46.1,
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
valueAxis.max = 70;
//valueAxis.title.text = "Porcentaje";

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
columnSeries.dataFields.valueY = "Población no económicamente activa sin acceso a la seguridad social";
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
valueLabel.label.dy = -10;
valueLabel.label.truncate = false;
valueLabel.label.hideOversized = false;

//var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
//bullet.fill = lineSeries.stroke;
//bullet.circle.radius = 4;

var label = chart.createChild(am4core.Label);
label.text = "Promedio Nacional: 46.1";
label.fontSize = 14;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(90);
label.horizontalCenter = "middle";
label.y = am4core.percent(29);

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "none";
chart.cursor.lineX.opacity = 0;
chart.cursor.lineY.opacity = 0;
//chart.exporting.menu = new am4core.ExportMenu();
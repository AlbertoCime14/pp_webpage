am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

//chart.language = "";

var data = [];

chart.data = [
  {
    "Entidad": "Baja California Sur",
    "Tasadecrecimiento": 3.13,
    "Promedionacional": 1.35,
    "opacity": 0.5
  },
  {
    "Entidad": "Colima",
    "Tasadecrecimiento": 2.71,
    "Promedionacional": 1.35,
    "opacity": 0.5
  },
  {
    "Entidad": "Baja California",
    "Tasadecrecimiento": 2.67,
    "Promedionacional": 1.35,
    "opacity": 0.5
  },
  
  {
    "Entidad": "México",
    "Tasadecrecimiento": 2.68,
    "Promedionacional": 1.35,
    "opacity": 0.5
  },
  {
    "Entidad": "Quintana Roo",
    "Tasadecrecimiento": 2.38,
    "Promedionacional": 1.35,
    "opacity": 0.5
  },
  {
    "Entidad": "Durango",
    "Tasadecrecimiento":2.35,
    "Promedionacional": 1.35,
    "opacity": 0.5
  },
  {
    "Entidad": "Tabasco",
    "Tasadecrecimiento": 2.31,
    "Promedionacional": 1.35,
    "opacity": 0.5
  },
 
  {
    "Entidad": "Chiapas",
    "Tasadecrecimiento": 2.13,
    "Promedionacional": 1.35,
    "opacity": 0.5
  },
  {
    "Entidad": "Sonora",
    "Tasadecrecimiento": 2.13,
    "Promedionacional": 1.35,
    "opacity": 0.5
  },
  {
    "Entidad": "Puebla",
    "Tasadecrecimiento": 2,
    "Promedionacional": 1.35,
    "opacity": 0.5
  },
  {
    "Entidad": "Nayarit",
    "Tasadecrecimiento": 1.94,
    "Promedionacional": 1.35,
    "opacity": 0.5
  },
  {
    "Entidad": "Campeche",
    "Tasadecrecimiento": 1.95,
    "Promedionacional": 1.35,
    "opacity": 0.5
  },
   {
    "Entidad": "[font-size: 20px; font-weight: bold;]Yucatán[/]",
    "Tasadecrecimiento": 1.88,
    "Promedionacional": 1.35,
    "opacity": 1
  },
  {
    "Entidad": "Tlaxcala",
    "Tasadecrecimiento": 1.78,
    "Promedionacional": 1.35,
    "opacity": 0.5
  },
  {
    "Entidad": "Michoacán",
    "Tasadecrecimiento": 1.72,
    "Promedionacional": 1.35,
    "opacity": 0.5
  },
  {
    "Entidad": "Tamaulipas",
    "Tasadecrecimiento": 1.69,
    "Promedionacional": 1.35,
    "opacity": 0.5
  },
  {
    "Entidad": "Guerrero",
    "Tasadecrecimiento": 1.39,
    "Promedionacional": 1.35,
    "opacity": 0.5
  },
  {
    "Entidad": "Oaxaca",
    "Tasadecrecimiento":1.25,
    "Promedionacional": 1.35,
    "opacity": 0.5
  },
  {
    "Entidad": "Querétaro",
    "Tasadecrecimiento": 1.22,
    "Promedionacional": 1.35,
    "opacity": 0.5
  },
  {
    "Entidad": "Nuevo León",
    "Tasadecrecimiento": 1.23,
    "Promedionacional": 1.35,
    "opacity": 0.5
  },
  {
    "Entidad": "Aguascalientes",
    "Tasadecrecimiento": 1.21,
    "Promedionacional": 1.35,
    "opacity": 0.5
  },
  {
    "Entidad": "Hidalgo",
    "Tasadecrecimiento": 1.15,
    "Promedionacional": 1.35,
    "opacity": 0.5
  },
  {
    "Entidad": "Morelos",
    "Tasadecrecimiento": 1.14,
    "Promedionacional": 1.35,
    "opacity": 0.5
  },
  {
    "Entidad": "San Luis Potosí",
    "Tasadecrecimiento": 0.99,
    "Promedionacional": 1.35,
    "opacity": 0.5
  },
  {
    "Entidad": "Jalisco",
    "Tasadecrecimiento": 0.82,
    "Promedionacional": 1.35,
    "opacity": 0.5
  },
  {
    "Entidad": "Guanajuato",
    "Tasadecrecimiento": 0.64,
    "Promedionacional": 1.35,
    "opacity": 0.5
  },
  {
    "Entidad": "Veracruz",
    "Tasadecrecimiento": 0.57,
    "Promedionacional": 1.35,
    "opacity": 0.5
  },
  {
    "Entidad": "Sinaloa",
    "Tasadecrecimiento": 0.50,
    "Promedionacional": 1.35,
    "opacity": 0.5
  },
  {
    "Entidad": "Coahuila",
    "Tasadecrecimiento": 0.49,
    "Promedionacional": 1.35,
    "opacity": 0.5
  },
  {
    "Entidad": "Ciudad de México",
    "Tasadecrecimiento": 0.20,
    "Promedionacional": 1.35,
    "opacity": 0.5
  },
  
  {
    "Entidad": "Zacatecas",
    "Tasadecrecimiento": -0.24,
    "Promedionacional": 1.35,
    "opacity": 0.5
  },
  
  {
    "Entidad": "Chihuahua ",
    "Tasadecrecimiento": -1.10,
    "Promedionacional": 1.35,
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
//valueAxis.min = 0;

var columnSeries = chart.series.push(new am4charts.ColumnSeries());
columnSeries.dataFields.categoryX = "Entidad";
columnSeries.dataFields.valueY = "Tasadecrecimiento";
columnSeries.tooltipText = "{valueY.value}";
columnSeries.sequencedInterpolation = true;
columnSeries.defaultState.transitionDuration = 1500;
columnSeries.fill = am4core.color("#00A984");//   chart.colors.getIndex(1);
var valueLabel = columnSeries.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY.formatNumber('#.#')}";
valueLabel.label.dy = -20;
valueLabel.label.truncate = false;
valueLabel.label.hideOversized = false;

chart.padding(30, 40, 40, 40);
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
lineSeries.dataFields.valueY = "Promedionacional";
lineSeries.tooltipText = "Promedionacional: {valueY.value.formatNumber('#.#')}";
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
label.text = "Promedio Nacional: 1.4";
label.fontSize = 14;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(90);
label.horizontalCenter = "middle";
label.y = am4core.percent(31);

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "none";
chart.cursor.lineX.opacity = 0;
chart.cursor.lineY.opacity = 0;
//chart.exporting.menu = new am4core.ExportMenu();
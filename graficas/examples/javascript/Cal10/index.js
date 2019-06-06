am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

//chart.language = "";

var data = [];

chart.data = [
  {
    "Entidad": "Chiapas",
    "Tasadecrecimiento": 23,
    "Promedionacional": 5.1,
    "opacity": 0.5
  },
  {
    "Entidad": "[font-size: 20px; font-weight: bold;]Yucatán[/]",
    "Tasadecrecimiento": 13.9,
    "Promedionacional": 5.1,
    "opacity": 1
  },
  {
    "Entidad": "Nayarit",
    "Tasadecrecimiento": 9.3,
    "Promedionacional": 5.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Quintana Roo",
    "Tasadecrecimiento": 7.6,
    "Promedionacional": 5.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Veracruz",
    "Tasadecrecimiento": 7.3,
    "Promedionacional": 5.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Chihuahua",
    "Tasadecrecimiento": 7.3,
    "Promedionacional": 5.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Guerrero",
    "Tasadecrecimiento": 7.1,
    "Promedionacional": 5.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Zacatecas",
    "Tasadecrecimiento": 6.7,
    "Promedionacional": 5.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Oaxaca",
    "Tasadecrecimiento": 6.4,
    "Promedionacional": 5.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Sonora",
    "Tasadecrecimiento": 6.4,
    "Promedionacional": 5.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Tlaxcala",
    "Tasadecrecimiento": 5.6,
    "Promedionacional": 5.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Puebla",
    "Tasadecrecimiento": 5.6,
    "Promedionacional": 5.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Michoacán",
    "Tasadecrecimiento": 5.3,
    "Promedionacional": 5.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Ciudad de México",
    "Tasadecrecimiento": 4.9,
    "Promedionacional": 5.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Tabasco",
    "Tasadecrecimiento": 4.1,
    "Promedionacional": 5.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Campeche",
    "Tasadecrecimiento": 3.5,
    "Promedionacional": 5.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Sinaloa",
    "Tasadecrecimiento": 3.1,
    "Promedionacional": 5.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Durango",
    "Tasadecrecimiento": 3.1,
    "Promedionacional": 5.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Morelos",
    "Tasadecrecimiento": 2.9,
    "Promedionacional": 5.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Guanajuato",
    "Tasadecrecimiento": 2.7,
    "Promedionacional": 5.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Querétaro",
    "Tasadecrecimiento": 2.7,
    "Promedionacional": 5.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Aguascalientes",
    "Tasadecrecimiento": 2.4,
    "Promedionacional": 5.1,
    "opacity": 0.5
  },
  {
    "Entidad": "San Luis Potosí",
    "Tasadecrecimiento": 2.3,
    "Promedionacional": 5.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Jalisco",
    "Tasadecrecimiento": 2.2,
    "Promedionacional": 5.1,
    "opacity": 0.5
  },
  {
    "Entidad": "México",
    "Tasadecrecimiento": 2.1,
    "Promedionacional": 5.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Nuevo León",
    "Tasadecrecimiento": 2.1,
    "Promedionacional": 5.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Coahuila",
    "Tasadecrecimiento": 1.9,
    "Promedionacional": 5.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Colima",
    "Tasadecrecimiento": 1.6,
    "Promedionacional": 5.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Baja California Sur",
    "Tasadecrecimiento": 1.4,
    "Promedionacional": 5.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Baja California",
    "Tasadecrecimiento": 1.3,
    "Promedionacional": 5.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Tamaulipas",
    "Tasadecrecimiento": 1.3,
    "Promedionacional": 5.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Hidalgo",
    "Tasadecrecimiento": 0.7,
    "Promedionacional": 5.1,
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
valueAxis.max = 24;
valueAxis.title.text = "Fallecimientos en memores de 5 años por EDA's";

var columnSeries = chart.series.push(new am4charts.ColumnSeries());
columnSeries.dataFields.categoryX = "Entidad";
columnSeries.dataFields.valueY = "Tasadecrecimiento";
columnSeries.tooltipText = "{valueY.value}";
columnSeries.sequencedInterpolation = true;
columnSeries.defaultState.transitionDuration = 1500;
columnSeries.fill = am4core.color("#0C3F6C");//   chart.colors.getIndex(1);
var valueLabel = columnSeries.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY}";
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
lineSeries.tooltipText = "Promedionacional: {valueY.value}";
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
label.text = "Promedio Nacional: 5.1";
label.fontSize = 14;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(90);
label.horizontalCenter = "middle";
label.y = am4core.percent(62);

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "none";
chart.cursor.lineX.opacity = 0;
chart.cursor.lineY.opacity = 0;
//chart.exporting.menu = new am4core.ExportMenu();
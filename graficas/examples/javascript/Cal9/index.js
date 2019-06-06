am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

//chart.language = "";

var data = [];

chart.data = [
  {
    "Entidad": "Chiapas",
    "Tasadecrecimiento": 18.9,
    "Promedionacional": 14.6,
    "opacity": 0.5
  },
  {
    "Entidad": "Puebla",
    "Tasadecrecimiento": 17.4,
    "Promedionacional": 14.6,
    "opacity": 0.5
  },
  {
    "Entidad": "Oaxaca",
    "Tasadecrecimiento": 17.2,
    "Promedionacional": 14.6,
    "opacity": 0.5
  },
  {
    "Entidad": "Guerrero",
    "Tasadecrecimiento": 17.1,
    "Promedionacional": 14.6,
    "opacity": 0.5
  },
  {
    "Entidad": "Campeche",
    "Tasadecrecimiento": 16.9,
    "Promedionacional": 14.6,
    "opacity": 0.5
  },
  {
    "Entidad": "Tabasco",
    "Tasadecrecimiento": 16.5,
    "Promedionacional": 14.6,
    "opacity": 0.5
  },
  {
    "Entidad": "Chihuahua",
    "Tasadecrecimiento": 15.7,
    "Promedionacional": 14.6,
    "opacity": 0.5
  },
  {
    "Entidad": "México",
    "Tasadecrecimiento": 15.7,
    "Promedionacional": 14.6,
    "opacity": 0.5
  },
  {
    "Entidad": "Baja California",
    "Tasadecrecimiento": 15.6,
    "Promedionacional": 14.6,
    "opacity": 0.5
  },
  {
    "Entidad": "Durango",
    "Tasadecrecimiento": 15.4,
    "Promedionacional": 14.6,
    "opacity": 0.5
  },
  {
    "Entidad": "Tlaxcala",
    "Tasadecrecimiento": 15.4,
    "Promedionacional": 14.6,
    "opacity": 0.5
  },
  {
    "Entidad": "Hidalgo",
    "Tasadecrecimiento": 15.4,
    "Promedionacional": 14.6,
    "opacity": 0.5
  },
  {
    "Entidad": "Coahuila",
    "Tasadecrecimiento": 15,
    "Promedionacional": 14.6,
    "opacity": 0.5
  },
  {
    "Entidad": "Veracruz",
    "Tasadecrecimiento": 14.5,
    "Promedionacional": 14.6,
    "opacity": 0.5
  },
  {
    "Entidad": "San Luis Potosí",
    "Tasadecrecimiento": 14.2,
    "Promedionacional": 14.6,
    "opacity": 0.5
  },
  {
    "Entidad": "Tamaulipas",
    "Tasadecrecimiento": 14,
    "Promedionacional": 14.6,
    "opacity": 0.5
  },
  {
    "Entidad": "Michoacán",
    "Tasadecrecimiento": 14,
    "Promedionacional": 14.6,
    "opacity": 0.5
  },
  {
    "Entidad": "Ciudad de México",
    "Tasadecrecimiento": 13.71,
    "Promedionacional": 14.6,
    "opacity": 0.5
  },
  {
    "Entidad": "Quintana Roo",
    "Tasadecrecimiento": 13.5,
    "Promedionacional": 14.6,
    "opacity": 0.5
  },
  {
    "Entidad": "Morelos",
    "Tasadecrecimiento": 13.2,
    "Promedionacional": 14.6,
    "opacity": 0.5
  },
  {
    "Entidad": "Nayarit",
    "Tasadecrecimiento": 13.2,
    "Promedionacional": 14.6,
    "opacity": 0.5
  },
  {
    "Entidad": "Baja California Sur",
    "Tasadecrecimiento": 13.1,
    "Promedionacional": 14.6,
    "opacity": 0.5
  },
  {
    "Entidad": "Jalisco",
    "Tasadecrecimiento": 12.8,
    "Promedionacional": 14.6,
    "opacity": 0.5
  },
  {
    "Entidad": "Sonora",
    "Tasadecrecimiento": 12.6,
    "Promedionacional": 14.6,
    "opacity": 0.5
  },
  {
    "Entidad": "Querétaro",
    "Tasadecrecimiento": 12.6,
    "Promedionacional": 14.6,
    "opacity": 0.5
  },
  {
    "Entidad": "Guanajuato",
    "Tasadecrecimiento": 12.4,
    "Promedionacional": 14.6,
    "opacity": 0.5
  },
  {
    "Entidad": "Zacatecas",
    "Tasadecrecimiento": 12.2,
    "Promedionacional": 14.6,
    "opacity": 0.5
  },
  {
    "Entidad": "[font-size: 20px; font-weight: bold;]Yucatán[/]",
    "Tasadecrecimiento": 11.9,
    "Promedionacional": 14.6,
    "opacity": 1
  },
  {
    "Entidad": "Nuevo León",
    "Tasadecrecimiento": 11.2,
    "Promedionacional": 14.6,
    "opacity": 0.5
  },
  {
    "Entidad": "Sinaloa",
    "Tasadecrecimiento": 11,
    "Promedionacional": 14.6,
    "opacity": 0.5
  },
  {
    "Entidad": "Aguascalientes",
    "Tasadecrecimiento": 10.9,
    "Promedionacional": 14.6,
    "opacity": 0.5
  },
  {
    "Entidad": "Colima",
    "Tasadecrecimiento": 10.6,
    "Promedionacional": 14.6,
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
valueAxis.max = 19;
valueAxis.title.text = "Fallecimientos de niños menores de 5 años por cada mil nacidos vivos";

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
label.text = "Promedio Nacional: 14.6";
label.fontSize = 14;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(90);
label.horizontalCenter = "middle";
label.y = am4core.percent(18);

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "none";
chart.cursor.lineX.opacity = 0;
chart.cursor.lineY.opacity = 0;
//chart.exporting.menu = new am4core.ExportMenu();
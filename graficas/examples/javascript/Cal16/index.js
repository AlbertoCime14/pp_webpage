﻿am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

//chart.language = "";

var data = [];

chart.data = [
  {
    "Entidades": "Tabasco",
    "Incidencia de VIH": 19.9,
    "Nacional": 6.7,
    "opacity": 0.5
  },
  {
    "Entidades": "Campeche",
    "Incidencia de VIH": 19.7,
    "Nacional": 6.7,
    "opacity": 0.5
  },
  {
    "Entidades": "[font-size: 20px; font-weight: bold;]Yucatán[/]",
    "Incidencia de VIH": 17.4,
    "Nacional": 6.7,
    "opacity": 1
  },
  {
    "Entidades": "Veracruz",
    "Incidencia de VIH": 13.1,
    "Nacional": 6.7,
    "opacity": 0.5
  },
  {
    "Entidades": "Colima",
    "Incidencia de VIH": 11.9,
    "Nacional": 6.7,
    "opacity": 0.5
  },
  {
    "Entidades": "Tamaulipas",
    "Incidencia de VIH": 9.2,
    "Nacional": 6.7,
    "opacity": 0.5
  },
  {
    "Entidades": "Ciudad de México",
    "Incidencia de VIH": 8.3,
    "Nacional": 6.7,
    "opacity": 0.5
  },
  {
    "Entidades": "Quintana Roo",
    "Incidencia de VIH": 7.7,
    "Nacional": 6.7,
    "opacity": 0.5
  },
  {
    "Entidades": "Baja California Sur",
    "Incidencia de VIH": 7.3,
    "Nacional": 6.7,
    "opacity": 0.5
  },
  {
    "Entidades": "Chiapas",
    "Incidencia de VIH": 7.1,
    "Nacional": 6.7,
    "opacity": 0.5
  },
  {
    "Entidades": "Baja California",
    "Incidencia de VIH": 6.9,
    "Nacional": 6.7,
    "opacity": 0.5
  },
  {
    "Entidades": "Puebla",
    "Incidencia de VIH": 6.9,
    "Nacional": 6.7,
    "opacity": 0.5
  },
  {
    "Entidades": "Oaxaca",
    "Incidencia de VIH": 6.8,
    "Nacional": 6.7,
    "opacity": 0.5
  },
  {
    "Entidades": "Querétaro",
    "Incidencia de VIH": 6.8,
    "Nacional": 6.7,
    "opacity": 0.5
  },
  {
    "Entidades": "San Luis Potosí",
    "Incidencia de VIH": 6.5,
    "Nacional": 6.7,
    "opacity": 0.5
  },
  {
    "Entidades": "Nuevo León",
    "Incidencia de VIH": 5.9,
    "Nacional": 6.7,
    "opacity": 0.5
  },
  {
    "Entidades": "México",
    "Incidencia de VIH": 5.3,
    "Nacional": 6.7,
    "opacity": 0.5
  },
  {
    "Entidades": "Chihuahua",
    "Incidencia de VIH": 5.1,
    "Nacional": 6.7,
    "opacity": 0.5
  },
  {
    "Entidades": "Hidalgo",
    "Incidencia de VIH": 5.1,
    "Nacional": 6.7,
    "opacity": 0.5
  },
  {
    "Entidades": "Sonora",
    "Incidencia de VIH": 4.8,
    "Nacional": 6.7,
    "opacity": 0.5
  },
  {
    "Entidades": "Aguascalientes",
    "Incidencia de VIH": 4.7,
    "Nacional": 6.7,
    "opacity": 0.5
  },
  {
    "Entidades": "Sinaloa",
    "Incidencia de VIH": 4.7,
    "Nacional": 6.7,
    "opacity": 0.5
  },
  {
    "Entidades": "Guanajuato",
    "Incidencia de VIH": 4.3,
    "Nacional": 6.7,
    "opacity": 0.5
  },
  {
    "Entidades": "Morelos",
    "Incidencia de VIH": 4.2,
    "Nacional": 6.7,
    "opacity": 0.5
  },
  {
    "Entidades": "Zacatecas",
    "Incidencia de VIH": 3.8,
    "Nacional": 6.7,
    "opacity": 0.5
  },
  {
    "Entidades": "Tlaxcala",
    "Incidencia de VIH": 3.7,
    "Nacional": 6.7,
    "opacity": 0.5
  },
  {
    "Entidades": "Guerrero",
    "Incidencia de VIH": 3.6,
    "Nacional": 6.7,
    "opacity": 0.5
  },
  {
    "Entidades": "Coahuila",
    "Incidencia de VIH": 3.5,
    "Nacional": 6.7,
    "opacity": 0.5
  },
  {
    "Entidades": "Durango",
    "Incidencia de VIH": 3.1,
    "Nacional": 6.7,
    "opacity": 0.5
  },
  {
    "Entidades": "Michoacán",
    "Incidencia de VIH": 2.6,
    "Nacional": 6.7,
    "opacity": 0.5
  },
  {
    "Entidades": "Jalisco",
    "Incidencia de VIH": 2.5,
    "Nacional": 6.7,
    "opacity": 0.5
  },
  {
    "Entidades": "Nayarit",
    "Incidencia de VIH": 1.6,
    "Nacional": 6.7,
    "opacity": 0.5
  }
 ];

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.ticks.template.disabled = true;
categoryAxis.renderer.line.opacity = 0;
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.minGridDistance = 1;
categoryAxis.dataFields.category = "Entidades";


var  valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.max = 20;
valueAxis.title.text = "Casos de VIH por cada 100 mil habitantes";

categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.renderer.line.opacity = 0;
valueAxis.renderer.ticks.template.disabled = true;
valueAxis.min = 0;

var columnSeries = chart.series.push(new am4charts.ColumnSeries());
columnSeries.dataFields.categoryX = "Entidades";
columnSeries.dataFields.valueY = "Incidencia de VIH";
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
lineSeries.dataFields.categoryX = "Entidades";
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
label.text = "Promedio Nacional: 6.7";
label.fontSize = 14;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(90);
label.horizontalCenter = "middle";
label.y = am4core.percent(54);

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "none";
chart.cursor.lineX.opacity = 0;
chart.cursor.lineY.opacity = 0;
//chart.exporting.menu = new am4core.ExportMenu();
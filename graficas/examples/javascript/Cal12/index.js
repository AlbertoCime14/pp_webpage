am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

//chart.language = "";

var data = [];

chart.data = [
  {
    "Entidades": "Quintana Roo",
    "Tasa de mortalidad por SIDA": 8.8,
    "Nacional": 3.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Campeche",
    "Tasa de mortalidad por SIDA": 8.6,
    "Nacional": 3.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Tabasco",
    "Tasa de mortalidad por SIDA": 8.1,
    "Nacional": 3.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Veracruz",
    "Tasa de mortalidad por SIDA": 8,
    "Nacional": 3.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Baja California",
    "Tasa de mortalidad por SIDA": 7.9,
    "Nacional": 3.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Colima",
    "Tasa de mortalidad por SIDA": 6,
    "Nacional": 3.8,
    "opacity": 0.5
  },
  {
    "Entidades": "[font-size: 20px; font-weight: bold;]Yucatán[/]",
    "Tasa de mortalidad por SIDA": 5.4,
    "Nacional": 3.8,
    "opacity": 1
  },
  {
    "Entidades": "Chiapas",
    "Tasa de mortalidad por SIDA": 5.3,
    "Nacional": 3.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Tamaulipas",
    "Tasa de mortalidad por SIDA": 5.2,
    "Nacional": 3.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Nayarit",
    "Tasa de mortalidad por SIDA": 4.8,
    "Nacional": 3.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Baja California Sur",
    "Tasa de mortalidad por SIDA": 4.6,
    "Nacional": 3.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Morelos",
    "Tasa de mortalidad por SIDA": 4.5,
    "Nacional": 3.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Ciudad de México",
    "Tasa de mortalidad por SIDA": 3.9,
    "Nacional": 3.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Nuevo León",
    "Tasa de mortalidad por SIDA": 3.9,
    "Nacional": 3.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Guerrero",
    "Tasa de mortalidad por SIDA": 3.8,
    "Nacional": 3.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Sonora",
    "Tasa de mortalidad por SIDA": 3.6,
    "Nacional": 3.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Puebla",
    "Tasa de mortalidad por SIDA": 3.2,
    "Nacional": 3.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Chihuahua",
    "Tasa de mortalidad por SIDA": 3.2,
    "Nacional": 3.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Jalisco",
    "Tasa de mortalidad por SIDA": 3.1,
    "Nacional": 3.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Sinaloa",
    "Tasa de mortalidad por SIDA": 2.8,
    "Nacional": 3.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Querétaro",
    "Tasa de mortalidad por SIDA": 2.6,
    "Nacional": 3.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Oaxaca",
    "Tasa de mortalidad por SIDA": 2.6,
    "Nacional": 3.8,
    "opacity": 0.5
  },
  {
    "Entidades": "México",
    "Tasa de mortalidad por SIDA": 2.5,
    "Nacional": 3.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Coahuila",
    "Tasa de mortalidad por SIDA": 2.3,
    "Nacional": 3.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Aguascalientes",
    "Tasa de mortalidad por SIDA": 2.3,
    "Nacional": 3.8,
    "opacity": 0.5
  },
  {
    "Entidades": "San Luis Potosí",
    "Tasa de mortalidad por SIDA": 2,
    "Nacional": 3.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Durango",
    "Tasa de mortalidad por SIDA": 1.9,
    "Nacional": 3.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Guanajuato",
    "Tasa de mortalidad por SIDA": 1.7,
    "Nacional": 3.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Hidalgo",
    "Tasa de mortalidad por SIDA": 1.6,
    "Nacional": 3.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Tlaxcala",
    "Tasa de mortalidad por SIDA": 1.6,
    "Nacional": 3.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Michoacán",
    "Tasa de mortalidad por SIDA": 1.5,
    "Nacional": 3.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Zacatecas",
    "Tasa de mortalidad por SIDA": 1,
    "Nacional": 3.8,
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
valueAxis.title.text = "Defunciones de SIDA por cada 100 mil habitantes";
valueAxis.min = 0;
valueAxis.max = 9;

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
columnSeries.dataFields.valueY = "Tasa de mortalidad por SIDA";
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
valueLabel.label.dy = -20;
valueLabel.label.truncate = false;
valueLabel.label.hideOversized = false;

//var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
//bullet.fill = lineSeries.stroke;
//bullet.circle.radius = 4;

var label = chart.createChild(am4core.Label);
label.text = "Promedio Nacional: 3.8";
label.fontSize = 14;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(90);
label.horizontalCenter = "middle";
label.y = am4core.percent(47);

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "none";
chart.cursor.lineX.opacity = 0;
chart.cursor.lineY.opacity = 0;
chart.exporting.menu = new am4core.ExportMenu();
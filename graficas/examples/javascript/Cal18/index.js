am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

//chart.language = "";

var data = [];

chart.data = [
  {
    "Entidades": "Chiapas",
    "Línea de bienestar mínimo": 49.9,
    "Nacional": 17.5,
    "opacity": 0.5
  },
  {
    "Entidades": "Oaxaca",
    "Línea de bienestar mínimo": 40.2,
    "Nacional": 17.5,
    "opacity": 0.5
  },
  {
    "Entidades": "Guerrero",
    "Línea de bienestar mínimo": 35.2,
    "Nacional": 17.5,
    "opacity": 0.5
  },
  {
    "Entidades": "Veracruz",
    "Línea de bienestar mínimo": 30.6,
    "Nacional": 17.5,
    "opacity": 0.5
  },
  {
    "Entidades": "Puebla",
    "Línea de bienestar mínimo": 23.1,
    "Nacional": 17.5,
    "opacity": 0.5
  },
  {
    "Entidades": "Zacatecas",
    "Línea de bienestar mínimo": 21,
    "Nacional": 17.5,
    "opacity": 0.5
  },
  {
    "Entidades": "Michoacán",
    "Línea de bienestar mínimo": 21,
    "Nacional": 17.5,
    "opacity": 0.5
  },
  {
    "Entidades": "San Luis Potosí",
    "Línea de bienestar mínimo": 20.4,
    "Nacional": 17.5,
    "opacity": 0.5
  },
  {
    "Entidades": "Tlaxcala",
    "Línea de bienestar mínimo": 19.6,
    "Nacional": 17.5,
    "opacity": 0.5
  },
  {
    "Entidades": "Tabasco",
    "Línea de bienestar mínimo": 19.6,
    "Nacional": 17.5,
    "opacity": 0.5
  },
  {
    "Entidades": "Hidalgo",
    "Línea de bienestar mínimo": 18.2,
    "Nacional": 17.5,
    "opacity": 0.5
  },
  {
    "Entidades": "México",
    "Línea de bienestar mínimo": 16.8,
    "Nacional": 17.5,
    "opacity": 0.5
  },
  {
    "Entidades": "Nayarit",
    "Línea de bienestar mínimo": 16.4,
    "Nacional": 17.5,
    "opacity": 0.5
  },
  {
    "Entidades": "Morelos",
    "Línea de bienestar mínimo": 16.4,
    "Nacional": 17.5,
    "opacity": 0.5
  },
  {
    "Entidades": "Campeche",
    "Línea de bienestar mínimo": 15.8,
    "Nacional": 17.5,
    "opacity": 0.5
  },
  {
    "Entidades": "Guanajuato",
    "Línea de bienestar mínimo": 15.6,
    "Nacional": 17.5,
    "opacity": 0.5
  },
  {
    "Entidades": "Durango",
    "Línea de bienestar mínimo": 12.8,
    "Nacional": 17.5,
    "opacity": 0.5
  },
  {
    "Entidades": "Tamaulipas",
    "Línea de bienestar mínimo": 12.1,
    "Nacional": 17.5,
    "opacity": 0.5
  },
  {
    "Entidades": "[font-size: 20px; font-weigh: bold]Yucatán[/]",
    "Línea de bienestar mínimo": 11.8,
    "Nacional": 17.5,
    "opacity": 1
  },
  {
    "Entidades": "Chihuahua",
    "Línea de bienestar mínimo": 11.2,
    "Nacional": 17.5,
    "opacity": 0.5
  },
  {
    "Entidades": "Querétaro",
    "Línea de bienestar mínimo": 10,
    "Nacional": 17.5,
    "opacity": 0.5
  },
  {
    "Entidades": "Aguascalientes",
    "Línea de bienestar mínimo": 9.6,
    "Nacional": 17.5,
    "opacity": 0.5
  },
  {
    "Entidades": "Quintana Roo",
    "Línea de bienestar mínimo": 9.3,
    "Nacional": 17.5,
    "opacity": 0.5
  },
  {
    "Entidades": "Coahuila",
    "Línea de bienestar mínimo": 8.8,
    "Nacional": 17.5,
    "opacity": 0.5
  },
  {
    "Entidades": "Sinaloa",
    "Línea de bienestar mínimo": 8.7,
    "Nacional": 17.5,
    "opacity": 0.5
  },
  {
    "Entidades": "Colima",
    "Línea de bienestar mínimo": 8,
    "Nacional": 17.5,
    "opacity": 0.5
  },
  {
    "Entidades": "Jalisco",
    "Línea de bienestar mínimo": 7.7,
    "Nacional": 17.5,
    "opacity": 0.5
  },
  {
    "Entidades": "Ciudad de México",
    "Línea de bienestar mínimo": 7.5,
    "Nacional": 17.5,
    "opacity": 0.5
  },
  {
    "Entidades": "Sonora",
    "Línea de bienestar mínimo": 7.5,
    "Nacional": 17.5,
    "opacity": 0.5
  },
  {
    "Entidades": "Baja California Sur",
    "Línea de bienestar mínimo": 6.1,
    "Nacional": 17.5,
    "opacity": 0.5
  },
  {
    "Entidades": "Baja California",
    "Línea de bienestar mínimo": 5.4,
    "Nacional": 17.5,
    "opacity": 0.5
  },
  {
    "Entidades": "Nuevo León",
    "Línea de bienestar mínimo": 3.1,
    "Nacional": 17.5,
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
valueAxis.max = 50;
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
columnSeries.dataFields.categoryX = "Entidades";
columnSeries.dataFields.valueY = "Línea de bienestar mínimo";
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



var label = chart.createChild(am4core.Label);
label.text = "Promedio Nacional: 17.5";
label.fontSize = 14;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(90);
label.horizontalCenter = "middle";
label.y = am4core.percent(53);


//var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
//bullet.fill = lineSeries.stroke;
//bullet.circle.radius = 4;

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "none";
chart.cursor.lineX.opacity = 0;
chart.cursor.lineY.opacity = 0;
//chart.exporting.menu = new am4core.ExportMenu();
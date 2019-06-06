am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

//chart.language = "";

var data = [];

chart.data = [
  {
    "Entidades": "[font-size: 20px; font-weight: bold;]Yucatán[/]",
    "Tasa de obesidad": 982.3,
    "Nacional": 559.8,
    "opacity": 1
  },
  {
    "Entidades": "Ciudad de México",
    "Tasa de obesidad": 935.8,
    "Nacional": 559.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Baja California Sur",
    "Tasa de obesidad": 873.6,
    "Nacional": 559.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Nayarit",
    "Tasa de obesidad": 864.8,
    "Nacional": 559.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Tamaulipas",
    "Tasa de obesidad": 861,
    "Nacional": 559.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Sinaloa",
    "Tasa de obesidad": 857.6,
    "Nacional": 559.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Baja California",
    "Tasa de obesidad": 832.4,
    "Nacional": 559.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Campeche",
    "Tasa de obesidad": 829.7,
    "Nacional": 559.8,
    "opacity": 0.5
  },
  {
    "Entidades": "San Luis Potosí",
    "Tasa de obesidad": 819.5,
    "Nacional": 559.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Colima",
    "Tasa de obesidad": 807.2,
    "Nacional": 559.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Sonora",
    "Tasa de obesidad": 807.1,
    "Nacional": 559.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Chihuahua",
    "Tasa de obesidad": 795.9,
    "Nacional": 559.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Aguascalientes",
    "Tasa de obesidad": 785.2,
    "Nacional": 559.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Quintana Roo",
    "Tasa de obesidad": 749.3,
    "Nacional": 559.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Jalisco",
    "Tasa de obesidad": 650,
    "Nacional": 559.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Nuevo León",
    "Tasa de obesidad": 595.9,
    "Nacional": 559.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Hidalgo",
    "Tasa de obesidad": 559.5,
    "Nacional": 559.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Querétaro",
    "Tasa de obesidad": 546.1,
    "Nacional": 559.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Coahuila",
    "Tasa de obesidad": 507.6,
    "Nacional": 559.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Zacatecas",
    "Tasa de obesidad": 468.6,
    "Nacional": 559.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Tlaxcala",
    "Tasa de obesidad": 466.6,
    "Nacional": 559.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Michoacán",
    "Tasa de obesidad": 454.5,
    "Nacional": 559.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Morelos",
    "Tasa de obesidad": 443.1,
    "Nacional": 559.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Durango",
    "Tasa de obesidad": 436.8,
    "Nacional": 559.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Guerrero",
    "Tasa de obesidad": 423.4,
    "Nacional": 559.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Veracruz",
    "Tasa de obesidad": 422,
    "Nacional": 559.8,
    "opacity": 0.5
  },
  {
    "Entidades": "México",
    "Tasa de obesidad": 398.7,
    "Nacional": 559.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Tabasco",
    "Tasa de obesidad": 358.5,
    "Nacional": 559.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Puebla",
    "Tasa de obesidad": 344.4,
    "Nacional": 559.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Oaxaca",
    "Tasa de obesidad": 307,
    "Nacional": 559.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Guanajuato",
    "Tasa de obesidad": 259.8,
    "Nacional": 559.8,
    "opacity": 0.5
  },
  {
    "Entidades": "Chiapas",
    "Tasa de obesidad": 240.1,
    "Nacional": 559.8,
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
valueAxis.max = 1000;
valueAxis.title.text = "Casos de obesidad por cada 100 mil habitantes";

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
columnSeries.dataFields.valueY = "Tasa de obesidad";
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
label.text = "Promedio Nacional: 559.8";
label.fontSize = 14;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(90);
label.horizontalCenter = "middle";
label.y = am4core.percent(37);


chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "none";
chart.cursor.lineX.opacity = 0;
chart.cursor.lineY.opacity = 0;
//chart.exporting.menu = new am4core.ExportMenu();
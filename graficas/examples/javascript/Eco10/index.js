am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

//chart.language = "";

var data = [];

chart.data = [
  {
    "Entidad": "Querétaro",
    "Promedio": "6.47%",
    "Crecimiento promedio de empleos formales": "3.56%",
    "opacity": 0.5
  },
  {
    "Entidad": "Guanajuato",
    "Promedio": "5.33%",
    "Crecimiento promedio de empleos formales": "3.56%",
    "opacity": 0.5
  },
  {
    "Entidad": "Quintana Roo",
    "Promedio": "5.33%",
    "Crecimiento promedio de empleos formales": "3.56%",
    "opacity": 0.5
  },
  {
    "Entidad": "Aguascalientes",
    "Promedio": "4.77%",
    "Crecimiento promedio de empleos formales": "3.56%",
    "opacity": 0.5
  },
  {
    "Entidad": "San Luis Potosí",
    "Promedio": "4.62%",
    "Crecimiento promedio de empleos formales": "3.56%",
    "opacity": 0.5
  },
  {
    "Entidad": "Baja California Sur",
    "Promedio": "4.36%",
    "Crecimiento promedio de empleos formales": "3.56%",
    "opacity": 0.5
  },
  {
    "Entidad": "Coahuila",
    "Promedio": "4.32%",
    "Crecimiento promedio de empleos formales": "3.56%",
    "opacity": 0.5
  },
  {
    "Entidad": "Tlaxcala",
    "Promedio": "4.28%",
    "Crecimiento promedio de empleos formales": "3.56%",
    "opacity": 0.5
  },
  {
    "Entidad": "Zacatecas",
    "Promedio": "4.17%",
    "Crecimiento promedio de empleos formales": "3.56%",
    "opacity": 0.5
  },
  {
    "Entidad": "Baja California",
    "Promedio": "4.14%",
    "Crecimiento promedio de empleos formales": "3.56%",
    "opacity": 0.5
  },
  {
    "Entidad": "Puebla",
    "Promedio": "4.12%",
    "Crecimiento promedio de empleos formales": "3.56%",
    "opacity": 0.5
  },
  {
    "Entidad": "Michoacán",
    "Promedio": "3.89%",
    "Crecimiento promedio de empleos formales": "3.56%",
    "opacity": 0.5
  },
  {
    "Entidad": "Jalisco",
    "Promedio": "3.88%",
    "Crecimiento promedio de empleos formales": "3.56%",
    "opacity": 0.5
  },
  {
    "Entidad": "Sinaloa",
    "Promedio": "3.77%",
    "Crecimiento promedio de empleos formales": "3.56%",
    "opacity": 0.5
  },
  {
    "Entidad": "Nuevo León",
    "Promedio": "3.68%",
    "Crecimiento promedio de empleos formales": "3.56%",
    "opacity": 0.5
  },
  {
    "Entidad": "Hidalgo",
    "Promedio": "3.62%",
    "Crecimiento promedio de empleos formales": "3.56%",
    "opacity": 0.5
  },
  {
    "Entidad": "Durango",
    "Promedio": "3.54%",
    "Crecimiento promedio de empleos formales": "3.56%",
    "opacity": 0.5
  },
  {
    "Entidad": "México",
    "Promedio": "3.53%",
    "Crecimiento promedio de empleos formales": "3.56%",
    "opacity": 0.5
  },
  {
    "Entidad": "[font-size: 20px; font-weight: bold]Yucatán[/]",
    "Promedio": "3.46%",
    "Crecimiento promedio de empleos formales": "3.56%",
    "opacity": 1
  },
  {
    "Entidad": "Chihuahua",
    "Promedio": "3.44%",
    "Crecimiento promedio de empleos formales": "3.56%",
    "opacity": 0.5
  },
  {
    "Entidad": "Colima",
    "Promedio": "3.31%",
    "Crecimiento promedio de empleos formales": "3.56%",
    "opacity": 0.5
  },
  {
    "Entidad": "Ciudad de México",
    "Promedio": "3.13%",
    "Crecimiento promedio de empleos formales": "3.56%",
    "opacity": 0.5
  },
  {
    "Entidad": "Sonora",
    "Promedio": "2.97%",
    "Crecimiento promedio de empleos formales": "3.56%",
    "opacity": 0.5
  },
  {
    "Entidad": "Nayarit",
    "Promedio": "2.88%",
    "Crecimiento promedio de empleos formales": "3.56%",
    "opacity": 0.5
  },
  {
    "Entidad": "Oaxaca",
    "Promedio": "2.69%",
    "Crecimiento promedio de empleos formales": "3.56%",
    "opacity": 0.5
  },
  {
    "Entidad": "Chiapas",
    "Promedio": "2.46%",
    "Crecimiento promedio de empleos formales": "3.56%",
    "opacity": 0.5
  },
  {
    "Entidad": "Tamaulipas",
    "Promedio": "2.44%",
    "Crecimiento promedio de empleos formales": "3.56%",
    "opacity": 0.5
  },
  {
    "Entidad": "Morelos",
    "Promedio": "2.37%",
    "Crecimiento promedio de empleos formales": "3.56%",
    "opacity": 0.5
  },
  {
    "Entidad": "Veracruz",
    "Promedio": "1.33%",
    "Crecimiento promedio de empleos formales": "3.56%",
    "opacity": 0.5
  },
  {
    "Entidad": "Tabasco",
    "Promedio": "0.96%",
    "Crecimiento promedio de empleos formales": "3.56%",
    "opacity": 0.5
  },
  {
    "Entidad": "Guerrero",
    "Promedio": "0.81%",
    "Crecimiento promedio de empleos formales": "3.56%",
    "opacity": 0.5
  },
  {
    "Entidad": "Campeche",
    "Promedio": "0.44%",
    "Crecimiento promedio de empleos formales": "3.56%",
    "opacity": 0.5
  }
 ];

 chart.numberFormatter.numberFormat = "#.#";

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.ticks.template.disabled = true;
categoryAxis.renderer.line.opacity = 0;
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.minGridDistance = 40;
categoryAxis.dataFields.category = "Entidad";

//Etiquetas debajo de la barra vertical centradas
categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.minGridDistance = 1;
categoryAxis.renderer.labels.template.rotation = 270;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.renderer.line.opacity = 0;
valueAxis.renderer.ticks.template.disabled = true;
valueAxis.max = 7;


var columnSeries = chart.series.push(new am4charts.ColumnSeries());
columnSeries.dataFields.categoryX = "Entidad";
columnSeries.dataFields.valueY = "Promedio";
columnSeries.tooltipText = "Promedio: {valueY.value}";
columnSeries.sequencedInterpolation = true;
columnSeries.defaultState.transitionDuration = 1500;
columnSeries.fill = am4core.color("#00A984");//   chart.colors.getIndex(1);

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
hoverState.properties.fillOpacity = 1;
hoverState.properties.tension = 0.8;


var lineSeries = chart.series.push(new am4charts.LineSeries());
lineSeries.dataFields.categoryX = "Entidad";
lineSeries.dataFields.valueY = "Crecimiento promedio de empleos formales";
lineSeries.tooltipText = "Crecimiento promedio de empleos formales: {valueY.value}";
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
label.text = "Crecimiento promedio de empleos formales: 3.6";
label.fontSize = 14;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(90);
label.horizontalCenter = "middle";
label.y = am4core.percent(39);

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "none";
chart.cursor.lineX.opacity = 0;
chart.cursor.lineY.opacity = 0;
//chart.exporting.menu = new am4core.ExportMenu();
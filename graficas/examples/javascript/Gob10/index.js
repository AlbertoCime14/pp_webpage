am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

//chart.language = "";

var data = [];

chart.data = [
  {
    "Estado": "Sonora",
    "Promedio del estado": 35.1,
    "Promedio Nacional": 20.2,
    "opacity": 0.5
  },
  {
    "Estado": "Tabasco",
    "Promedio del estado": 33.8,
    "Promedio Nacional": 20.2,
    "opacity": 0.5
  },
  {
    "Estado": "Guerrero",
    "Promedio del estado": 32.2,
    "Promedio Nacional": 20.2,
    "opacity": 0.5
  },
  {
    "Estado": "[font-size: 20px;font-weight: bold]Yucatán[/]",
    "Promedio del estado": 31.8,
    "Promedio Nacional": 20.2
  },
  {
    "Estado": "Baja California Sur",
    "Promedio del estado": 31.1,
    "Promedio Nacional": 20.2,
    "opacity": 0.5
  },
  {
    "Estado": "Colima",
    "Promedio del estado": 30.7,
    "Promedio Nacional": 20.2,
    "opacity": 0.5
  },
  {
    "Estado": "Durango",
    "Promedio del estado": 29.2,
    "Promedio Nacional": 20.2,
    "opacity": 0.5
  },
  {
    "Estado": "Nayarit",
    "Promedio del estado": 29.1,
    "Promedio Nacional": 20.2,
    "opacity": 0.5
  },
  {
    "Estado": "Hidalgo",
    "Promedio del estado": 29,
    "Promedio Nacional": 20.2,
    "opacity": 0.5
  },
  {
    "Estado": "Zacatecas",
    "Promedio del estado": 29,
    "Promedio Nacional": 20.2,
    "opacity": 0.5
  },
  {
    "Estado": "Nuevo León",
    "Promedio del estado": 28.1,
    "Promedio Nacional": 20.2,
    "opacity": 0.5
  },
  {
    "Estado": "Campeche",
    "Promedio del estado": 26,
    "Promedio Nacional": 20.2,
    "opacity": 0.5
  },
  {
    "Estado": "Chihuahua",
    "Promedio del estado": 25.6,
    "Promedio Nacional": 20.2,
    "opacity": 0.5
  },
  {
    "Estado": "Quintana Roo",
    "Promedio del estado": 25.3,
    "Promedio Nacional": 20.2,
    "opacity": 0.5
  },
  {
    "Estado": "Tamaulipas",
    "Promedio del estado": 25.1,
    "Promedio Nacional": 20.2,
    "opacity": 0.5
  },
  {
    "Estado": "Ciudad de México",
    "Promedio del estado": 24.1,
    "Promedio Nacional": 20.2,
    "opacity": 0.5
  },
  {
    "Estado": "Veracruz",
    "Promedio del estado": 22.9,
    "Promedio Nacional": 20.2,
    "opacity": 0.5
  },
  {
    "Estado": "San Luis Potosí",
    "Promedio del estado": 21.8,
    "Promedio Nacional": 20.2,
    "opacity": 0.5
  },
  {
    "Estado": "Tlaxcala",
    "Promedio del estado": 20.2,
    "Promedio Nacional": 20.2,
    "opacity": 0.5
  },
  {
    "Estado": "Aguascalientes",
    "Promedio del estado": 19.1,
    "Promedio Nacional": 20.2,
    "opacity": 0.5
  },
  {
    "Estado": "Guanajuato",
    "Promedio del estado": 18.5,
    "Promedio Nacional": 20.2,
    "opacity": 0.5
  },
  {
    "Estado": "Jalisco",
    "Promedio del estado": 18.4,
    "Promedio Nacional": 20.2,
    "opacity": 0.5
  },
  {
    "Estado": "Querétaro",
    "Promedio del estado": 18.4,
    "Promedio Nacional": 20.2,
    "opacity": 0.5
  },
  {
    "Estado": "México",
    "Promedio del estado": 17.7,
    "Promedio Nacional": 20.2,
    "opacity": 0.5
  },
  {
    "Estado": "Michoacán",
    "Promedio del estado": 16.5,
    "Promedio Nacional": 20.2,
    "opacity": 0.5
  },
  {
    "Estado": "Baja California",
    "Promedio del estado": 15.6,
    "Promedio Nacional": 20.2,
    "opacity": 0.5
  },
  {
    "Estado": "Oaxaca",
    "Promedio del estado": 9.7,
    "Promedio Nacional": 20.2,
    "opacity": 0.5
  },
  {
    "Estado": "Morelos",
    "Promedio del estado": 9.5,
    "Promedio Nacional": 20.2,
    "opacity": 0.5
  },
  {
    "Estado": "Sinaloa",
    "Promedio del estado": 8.7,
    "Promedio Nacional": 20.2,
    "opacity": 0.5
  },
  {
    "Estado": "Chiapas",
    "Promedio del estado": 8.6,
    "Promedio Nacional": 20.2,
    "opacity": 0.5
  },
  {
    "Estado": "Coahuila",
    "Promedio del estado": 8.5,
    "Promedio Nacional": 20.2,
    "opacity": 0.5
  },
  {
    "Estado": "Puebla",
    "Promedio del estado": 6.7,
    "Promedio Nacional": 20.2,
    "opacity": 0.5
  }
 ];

//Para colocar la etiqueta del valor del promedio nacional
var label = chart.createChild(am4core.Label);
label.text = "Promedio nacional 20.2";
label.fontSize = 14;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(90);//Ajusta la alineación horizontal via porcentaje
label.horizontalCenter = "middle";
label.y = 280; //Ajusta alineación vertical, positivo (hacia abajo) negativo (hacia arriba)
//.-Para colocar la etiqueta del valor del promedio nacional

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.ticks.template.disabled = true;
categoryAxis.renderer.line.opacity = 0;
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.minGridDistance = 40;
categoryAxis.dataFields.category = "Estado";

categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.renderer.line.opacity = 0;
valueAxis.renderer.ticks.template.disabled = true;
valueAxis.min = 0;

var columnSeries = chart.series.push(new am4charts.ColumnSeries());
columnSeries.dataFields.categoryX = "Estado";
columnSeries.dataFields.valueY = "Promedio del estado";
columnSeries.tooltipText = "Promedio del estado: {valueY.value}";
columnSeries.sequencedInterpolation = true;
columnSeries.defaultState.transitionDuration = 1500;
columnSeries.fill = am4core.color("#4E8994");//   chart.colors.getIndex(1);

var valueLabel = columnSeries.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY}";
valueLabel.label.dy = -12;
valueLabel.label.hideOversized = false;
valueLabel.label.truncate = false;

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
lineSeries.dataFields.categoryX = "Estado";
lineSeries.dataFields.valueY = "Promedio Nacional";
lineSeries.tooltipText = "Promedio Nacional: {valueY.value}";
lineSeries.sequencedInterpolation = true;
lineSeries.defaultState.transitionDuration = 1500;
lineSeries.stroke = am4core.color("#FF0000"); //chart.colors.getIndex(11);
lineSeries.strokeWidth = 3;

// second way - add axis range.
var lineSeriesRange = categoryAxis.createSeriesRange(lineSeries);
lineSeriesRange.category = "2018";
lineSeriesRange.endCategory = "2019";
lineSeriesRange.contents.strokeDasharray = "3,3";
lineSeriesRange.locations.category = 0.5;

/*var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
bullet.fill = lineSeries.stroke;
bullet.circle.radius = 4;*/

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "none";
chart.cursor.lineX.opacity = 0;
chart.cursor.lineY.opacity = 0;
//chart.exporting.menu = new am4core.ExportMenu();
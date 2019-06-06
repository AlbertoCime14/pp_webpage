am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

//chart.language = "";

var data = [];

chart.data = [

  {
    "Entidad": "Nuevo León",
    "Tasa de pantallas": 10.17,
    "Promedio nacional": 5.17,
    "opacity": 0.5
  },
  {
    "Entidad": "Ciudad de México",
    "Tasa de pantallas": 9.7,
    "Promedio nacional": 5.17,
    "opacity": 0.5
  },
  {
    "Entidad": "Quintana Roo",
    "Tasa de pantallas": 9.42,
    "Promedio nacional": 5.17,
    "opacity": 0.5
  },
  {
    "Entidad": "Baja California Sur",
    "Tasa de pantallas": 9.08,
    "Promedio nacional": 5.17,
    "opacity": 0.5
  },
  {
    "Entidad": "Querétaro",
    "Tasa de pantallas": 7.92,
    "Promedio nacional": 5.17,
    "opacity": 0.5
  },
  {
    "Entidad": "Baja California",
    "Tasa de pantallas": 7.64,
    "Promedio nacional": 5.17,
    "opacity": 0.5
  },
  {
    "Entidad": "Morelos",
    "Tasa de pantallas": 6.85,
    "Promedio nacional": 5.17,
    "opacity": 0.5
  },
  {
    "Entidad": "Aguascalientes",
    "Tasa de pantallas": 6.52,
    "Promedio nacional": 5.17,
    "opacity": 0.5
  },
  {
    "Entidad": "Colima",
    "Tasa de pantallas": 6.31,
    "Promedio nacional": 5.17,
    "opacity": 0.5
  },
  {
    "Entidad": "Coahuila",
    "Tasa de pantallas": 6.16,
    "Promedio nacional": 5.17,
    "opacity": 0.5
  },
  {
    "Entidad": "Tamaulipas",
    "Tasa de pantallas": 5.9,
    "Promedio nacional": 5.17,
    "opacity": 0.5
  },
  {
    "Entidad": "Sinaloa",
    "Tasa de pantallas": 5.8,
    "Promedio nacional": 5.17,
    "opacity": 0.5
  },
  {
    "Entidad": "México",
    "Tasa de pantallas": 5.73,
    "Promedio nacional": 5.17,
    "opacity": 0.5
  },
  {
    "Entidad": "[font-size: 20px;font-weight: bold]Yucatán[/]",
    "Tasa de pantallas": 5.71,
    "Promedio nacional": 5.17
  },
  {
    "Entidad": "Chihuahua",
    "Tasa de pantallas": 5.63,
    "Promedio nacional": 5.17,
    "opacity": 0.5
  },
  {
    "Entidad": "Sonora",
    "Tasa de pantallas": 5.43,
    "Promedio nacional": 5.17,
    "opacity": 0.5
  },
  {
    "Entidad": "Jalisco",
    "Tasa de pantallas": 4.53,
    "Promedio nacional": 5.17,
    "opacity": 0.5
  },
  {
    "Entidad": "Tabasco",
    "Tasa de pantallas": 4.29,
    "Promedio nacional": 5.17,
    "opacity": 0.5
  },
  {
    "Entidad": "Campeche",
    "Tasa de pantallas": 4.24,
    "Promedio nacional": 5.17,
    "opacity": 0.5
  },
  {
    "Entidad": "Tlaxcala",
    "Tasa de pantallas": 3.64,
    "Promedio nacional": 5.17,
    "opacity": 0.5
  },
  {
    "Entidad": "Puebla",
    "Tasa de pantallas": 3.61,
    "Promedio nacional": 5.17,
    "opacity": 0.5
  },
  {
    "Entidad": "Guanajuato",
    "Tasa de pantallas": 3.55,
    "Promedio nacional": 5.17,
    "opacity": 0.5
  },
  {
    "Entidad": "Veracruz ",
    "Tasa de pantallas": 3.37,
    "Promedio nacional": 5.17,
    "opacity": 0.5
  },
  {
    "Entidad": "San Luis Potosí",
    "Tasa de pantallas": 3.36,
    "Promedio nacional": 5.17,
    "opacity": 0.5
  },
  {
    "Entidad": "Michoacán",
    "Tasa de pantallas": 3.3,
    "Promedio nacional": 5.17,
    "opacity": 0.5
  },
  {
    "Entidad": "Guerrero",
    "Tasa de pantallas": 3.17,
    "opacity": 0.5,
    "Promedio nacional": 5.17,
    "opacity": 0.5
  },
  {
    "Entidad": "Hidalgo",
    "Tasa de pantallas": 2.82,
    "Promedio nacional": 5.17,
    "opacity": 0.5
  },
  {
    "Entidad": "Durango",
    "Tasa de pantallas": 2.72,
    "Promedio nacional": 5.17,
    "opacity": 0.5
  },
  {
    "Entidad": "Nayarit",
    "Tasa de pantallas": 2.71,
    "Promedio nacional": 5.17,
    "opacity": 0.5
  },
  {
    "Entidad": "Oaxaca",
    "Tasa de pantallas": 2.05,
    "Promedio nacional": 5.17,
    "opacity": 0.5
  },
  {
    "Entidad": "Zacatecas",
    "Tasa de pantallas": 1.7,
    "Promedio nacional": 5.17,
    "opacity": 0.5
  },
  {
    "Entidad": "Chiapas",
    "Tasa de pantallas": 1.62,
    "Promedio nacional": 5.17,
    "opacity": 0.5
  }
];

chart.numberFormatter.numberFormat = "#.0|#.0|0.0";
chart.padding(40, 40, 40, 40);


var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.ticks.template.disabled = true;
categoryAxis.renderer.line.opacity = 0;
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.minGridDistance = 1;
categoryAxis.dataFields.category = "Entidad";

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
columnSeries.dataFields.valueY = "Tasa de pantallas";
columnSeries.tooltipText = "Tasa de pantallas: {valueY.value}";
columnSeries.sequencedInterpolation = true;
columnSeries.defaultState.transitionDuration = 1500;
columnSeries.fill = am4core.color("#7E65AA");//   chart.colors.getIndex(1);

//Valores de las barras verticales
var valueLabel = columnSeries.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY}";
valueLabel.label.dy = -20;
//valueLabel.label.rotation = -90;

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
lineSeries.dataFields.valueY = "Promedio nacional";
lineSeries.tooltipText = "Promedio nacional: {valueY.value}";
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


/*var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
bullet.fill = lineSeries.stroke;
bullet.circle.radius = 4;*/

//Para colocar la etiqueta del valor del promedio nacional
var label = chart.createChild(am4core.Label);
label.text = "Promedio nacional 5.17";
label.fontSize = 14;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(90);//Ajusta la alineación horizontal via porcentaje
label.horizontalCenter = "middle";
label.y = 255; //Ajusta alineación vertical, positivo (hacia abajo) negativo (hacia arriba)
//.-Para colocar la etiqueta del valor del promedio nacional

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "none";
chart.cursor.lineX.opacity = 0;
chart.cursor.lineY.opacity = 0;
chart.numberFormatter.numberFormat = "#.#";
//chart.exporting.menu = new am4core.ExportMenu();
//Formato a 1 decimal
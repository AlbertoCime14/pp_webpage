am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

//chart.language = "";

var data = [];

chart.data = [

    {
        "Entidad": "Oaxaca",
        "Promedio Estatal": 208.295351,
        "Promedio Nacional": 56.5,
        "opacity": 0.5
      },
      {
        "Entidad": "Morelos",
        "Promedio Estatal": 125.2119542,
        "Promedio Nacional": 56.5,
        "opacity": 0.5
      },
      {
        "Entidad": "Aguascalientes",
        "Promedio Estatal": 113.180243,
        "Promedio Nacional": 56.5,
        "opacity": 0.5
      },
      {
        "Entidad": "Coahuila",
        "Promedio Estatal": 110.1845886,
        "Promedio Nacional": 56.5,
        "opacity": 0.5
      },
      {
        "Entidad": "Baja California",
        "Promedio Estatal": 105.2933555,
        "Promedio Nacional": 56.5,
        "opacity": 0.5
      },
      {
        "Entidad": "Sinaloa",
        "Promedio Estatal": 97.28725381,
        "Promedio Nacional": 56.5,
        "opacity": 0.5
      },
      {
        "Entidad": "Michoacán",
        "Promedio Estatal": 93.52241256,
        "Promedio Nacional": 56.5,
        "opacity": 0.5
      },
      {
        "Entidad": "Baja California Sur",
        "Promedio Estatal": 91.26950294,
        "Promedio Nacional": 56.5,
        "opacity": 0.5
      },
      {
        "Entidad": "Querétaro",
        "Promedio Estatal": 86.25336927,
        "Promedio Nacional": 56.5,
        "opacity": 0.5
      },
      {
        "Entidad": "Guanajuato",
        "Promedio Estatal": 76.91896991,
        "Promedio Nacional": 56.5,
        "opacity": 0.5
      },
      {
        "Entidad": "Campeche",
        "Promedio Estatal": 75.831881,
        "Promedio Nacional": 56.5,
        "opacity": 0.5
      },
      {
        "Entidad": "Chihuahua",
        "Promedio Estatal": 69.59095233,
        "Promedio Nacional": 56.5,
        "opacity": 0.5
      },
      {
        "Entidad": "Zacatecas",
        "Promedio Estatal": 68.25296108,
        "Promedio Nacional": 56.5,
        "opacity": 0.5
      },
      {
        "Entidad": "[font-size: 20px;font-weight: bold]Yucatán[/]",
        "Promedio Estatal": 67.14870081,
        "Promedio Nacional": 56.5
      },
      {
        "Entidad": "Chiapas",
        "Promedio Estatal": 64.11348726,
        "Promedio Nacional": 56.5,
        "opacity": 0.5
      },
      {
        "Entidad": "Ciudad de México",
        "Promedio Estatal": 62.7585765,
        "Promedio Nacional": 56.5,
        "opacity": 0.5
      },
      {
        "Entidad": "Quintana Roo",
        "Promedio Estatal": 61.72017557,
        "Promedio Nacional": 56.5,
        "opacity": 0.5
      },
      {
        "Entidad": "San Luis Potosí",
        "Promedio Estatal": 57.05351735,
        "Promedio Nacional": 56.5,
        "opacity": 0.5
      },
      {
        "Entidad": "Hidalgo",
        "Promedio Estatal": 52.59442696,
        "Promedio Nacional": 56.5,
        "opacity": 0.5
      },
      {
        "Entidad": "Jalisco",
        "Promedio Estatal": 52.52284254,
        "Promedio Nacional": 56.5,
        "opacity": 0.5
      },
      {
        "Entidad": "Tamaulipas",
        "Promedio Estatal": 48.05538131,
        "Promedio Nacional": 56.5,
        "opacity": 0.5
      },
      {
        "Entidad": "Puebla",
        "Promedio Estatal": 46.6652709,
        "Promedio Nacional": 56.5,
        "opacity": 0.5
      },
      {
        "Entidad": "Tabasco",
        "Promedio Estatal": 44.3728604,
        "Promedio Nacional": 56.5,
        "opacity": 0.5
      },
      {
        "Entidad": "Nayarit",
        "Promedio Estatal": 43.69836722,
        "Promedio Nacional": 56.5,
        "opacity": 0.5
      },
      {
        "Entidad": "Nuevo León",
        "Promedio Estatal": 43.50157917,
        "Promedio Nacional": 56.5,
        "opacity": 0.5
      },
      {
        "Entidad": "Durango",
        "Promedio Estatal": 43.35895653,
        "Promedio Nacional": 56.5,
        "opacity": 0.5
      },
      {
        "Entidad": "Colima",
        "Promedio Estatal": 39.70741902,
        "Promedio Nacional": 56.5,
        "opacity": 0.5
      },
      {
        "Entidad": "Tlaxcala",
        "Promedio Estatal": 39.58155581,
        "Promedio Nacional": 56.5,
        "opacity": 0.5
      },
      {
        "Entidad": "Guerrero",
        "Promedio Estatal": 37.08952852,
        "Promedio Nacional": 56.5,
        "opacity": 0.5
      },
      {
        "Entidad": "México",
        "Promedio Estatal": 36.369067,
        "Promedio Nacional": 56.5,
        "opacity": 0.5
      },
      {
        "Entidad": "Veracruz ",
        "Promedio Estatal": 20.92198767,
        "Promedio Nacional": 56.5,
        "opacity": 0.5
      },
      {
        "Entidad": "Sonora",
        "Promedio Estatal": 18.46816116,
        "Promedio Nacional": 56.5,
        "opacity": 0.5
      }

];

//Para colocar la etiqueta del valor del promedio nacional
var label = chart.createChild(am4core.Label);
label.text = "Promedio nacional 56.5";
label.fontSize = 14;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(90);//Ajusta la alineación horizontal via porcentaje
label.horizontalCenter = "middle";
label.y = 440; //Ajusta alineación vertical, positivo (hacia abajo) negativo (hacia arriba)
//.-Para colocar la etiqueta del valor del promedio nacional


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

var columnSeries = chart.series.push(new am4charts.ColumnSeries());
columnSeries.dataFields.categoryX = "Entidad";
columnSeries.dataFields.valueY = "Promedio Estatal";
columnSeries.tooltipText = "Promedio Estatal: {valueY.value}";
columnSeries.sequencedInterpolation = true;
columnSeries.defaultState.transitionDuration = 1500;
columnSeries.fill = am4core.color("#4E8994");//   chart.colors.getIndex(1);


var valueLabel = columnSeries.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY}";
valueLabel.label.labelColor = am4core.color('#fff');
valueLabel.label.dy = -10;
valueLabel.label.rotation = 0
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
lineSeries.dataFields.categoryX = "Entidad";
lineSeries.dataFields.valueY = "Promedio Nacional";
lineSeries.tooltipText = "Promedio Nacional: {valueY.value}";
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

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "none";
chart.cursor.lineX.opacity = 0;
chart.cursor.lineY.opacity = 0;
//chart.exporting.menu = new am4core.ExportMenu();
chart.numberFormatter.numberFormat = "#.#";
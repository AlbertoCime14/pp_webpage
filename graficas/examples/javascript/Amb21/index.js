am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);


chart.data = [{
    "country": "Ciudad de México",
    "visits": 583,
    "stroke": "3,3",
    "opacity": 0.5,"promedio":359
  },
  {
    "country": "Nuevo León",
    "visits": 466,
    "stroke": "3,3",
      "opacity": 0.5, "promedio": 359
  },
  {
    "country": "Baja California",
    "visits": 449,
    "stroke": "3,3",
      "opacity": 0.5, "promedio": 359
  },
  {
    "country": "México",
    "visits": 434,
    "stroke": "3,3",
      "opacity": 0.5, "promedio": 359
  },
  {
    "country": "Jalisco",
    "visits": 425,
    "stroke": "3,3",
      "opacity": 0.5, "promedio": 359
  },
  {
    "country": "Baja California Sur",
    "visits": 407,
    "stroke": "3,3",
      "opacity": 0.5, "promedio": 359
  },
  {
    "country": "Guanajuato",
    "visits": 383,
    "stroke": "3,3",
      "opacity": 0.5, "promedio": 359
  },
  {
    "country": "Querétaro",
    "visits": 380,
    "stroke": "3,3",
      "opacity": 0.5, "promedio": 359
  },
  {
    "country": "Tamaulipas",
    "visits": 375,
    "stroke": "3,3",
      "opacity": 0.5, "promedio": 359
  },
  {
    "country": "Chihuahua",
    "visits": 374,
    "stroke": "3,3",
      "opacity": 0.5, "promedio": 359
  },
  {
    "country": "Coahuila",
    "visits": 369,
    "stroke": "3,3",
      "opacity": 0.5, "promedio": 359
  },
  {
    "country": "Sonora",
    "visits": 364,
    "stroke": "3,3",
      "opacity": 0.5, "promedio": 359
  },
  {
    "country": "Morelos",
    "visits": 361,
    "stroke": "3,3",
      "opacity": 0.5, "promedio": 359
  },
  {
    "country": "Aguascalientes",
    "visits": 359,
    "stroke": "3,3",
      "opacity": 0.5, "promedio": 359
  },
  
  {
    "country": "Quintana Roo",
    "visits": 357,
    "stroke": "3,3",
      "opacity": 0.5, "promedio": 359
  },
  {
    "country": "Sinaloa",
    "visits": 356,
    "stroke": "3,3",
      "opacity": 0.5, "promedio": 359
  },
  {
    "country": "Colima",
    "visits": 353,
    "stroke": "3,3",
      "opacity": 0.5, "promedio": 359
  },
  {
    "country": "Tabasco",
    "visits": 347,
    "stroke": "3,3",
      "opacity": 0.5, "promedio": 359
  },
  {
    "country": "Durango",
    "visits": 341,
    "stroke": "3,3",
      "opacity": 0.5, "promedio": 359
  },
  {
    "country": "Puebla",
    "visits": 338,
    "stroke": "3,3",
      "opacity": 0.5, "promedio": 359
  },
  {
    "country": "Campeche",
    "visits": 332,
    "stroke": "3,3",
      "opacity": 0.5, "promedio": 359
  },
  {
      "country": "[font - size: 20px; font-weight: bold]Yucatán[/]",
      "visits": 324, "promedio": 359
  },
  {
    "country": "Nayarit",
    "visits": 322,
    "stroke": "3,3",
      "opacity": 0.5, "promedio": 359
  },
  {
    "country": "San Luis Potosí",
    "visits": 318,
    "stroke": "3,3",
      "opacity": 0.5, "promedio": 359
  },
  {
    "country": "Veracruz",
    "visits": 314,
    "stroke": "3,3",
      "opacity": 0.5, "promedio": 359
  },
  {
    "country": "Guerrero",
    "visits": 309,
    "stroke": "3,3",
      "opacity": 0.5, "promedio": 359
  },
  {
    "country": "Michoacán",
    "visits": 306,
    "stroke": "3,3",
      "opacity": 0.5, "promedio": 359
  },
  {
    "country": "Hidalgo",
    "visits": 302,
    "stroke": "3,3",
      "opacity": 0.5, "promedio": 359
  },
  {
    "country": "Zacatecas",
    "visits": 300,
    "stroke": "3,3",
      "opacity": 0.5, "promedio": 359
  },
  {
    "country": "Tlaxcala",
    "visits": 296,
    "stroke": "3,3",
      "opacity": 0.5, "promedio": 359
  },
  {
    "country": "Chiapas",
    "visits": 282,
    "stroke": "3,3",
      "opacity": 0.5, "promedio": 359
  },
  {
    "country": "Oaxaca",
    "visits": 253,
    "stroke": "3,3",
      "opacity": 0.5, "promedio": 359
  }];

chart.padding(40, 40, 40, 40);

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "country";
categoryAxis.renderer.minGridDistance = 1;

categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.max = 700;
valueAxis.strictMinMax = true;


var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryX = "country";
series.dataFields.valueY = "visits";
series.tooltipText = "{valueY.value}"
series.columns.template.strokeOpacity = 0;
series.fill = am4core.color("#95c11f");

var columnTemplate = series.columns.template;
//columnTemplate.column.cornerRadiusTopLeft = 10;
//columnTemplate.column.cornerRadiusTopRight = 10;
columnTemplate.strokeWidth = 1;
columnTemplate.strokeOpacity = 1;
columnTemplate.stroke = series.fill;

var desaturateFilter = new am4core.DesaturateFilter();
desaturateFilter.saturation = 1;

columnTemplate.filters.push(desaturateFilter);

// first way - get properties from data. but can only be done with columns, as they are separate objects.    
//columnTemplate.propertyFields.strokeDasharray = "stroke";
columnTemplate.propertyFields.fillOpacity = "opacity";

// add some cool saturation effect on hover
var desaturateFilterHover = new am4core.DesaturateFilter();
desaturateFilterHover.saturation = 1;

//Valores de las barras verticales
var valueLabel = series.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY}";
valueLabel.label.dy = -20;

var lineSeries = chart.series.push(new am4charts.LineSeries());
lineSeries.dataFields.categoryX = "country";
lineSeries.dataFields.valueY = "promedio";
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

//Para colocar la etiqueta del valor del promedio nacional
var label = chart.createChild(am4core.Label);
label.text = "Promedio nacional: 359";
label.fontSize = 16;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(90);//Ajusta la alineación horizontal via porcentaje
label.horizontalCenter = "middle";
label.y = 255; //Ajusta alineación vertical, positivo (hacia abajo) negativo (hacia arriba
//label.x = 1250;
//.-Para colocar la etiqueta del valor del promedio nacional


chart.cursor = new am4charts.XYCursor();

//chart.exporting.menu = new am4core.ExportMenu();
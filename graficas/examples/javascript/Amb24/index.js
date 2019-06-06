am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);


chart.data = [ {
    "country": "Aguascalientes",
    "visits": 3.1,
    "stroke": "3,3",
    "opacity": 0.5,
    "promedio": 2.8
  },
  {
    "country": "Colima",
    "visits": 3.1,
    "stroke": "3,3",
      "opacity": 0.5,
      "promedio": 2.8
  },
  {
    "country": "Jalisco",
    "visits": 3.1,
    "stroke": "3,3",
      "opacity": 0.5,
      "promedio": 2.8
  },
  {
    "country": "Querétaro",
    "visits": 3.1,
    "stroke": "3,3",
      "opacity": 0.5,
      "promedio": 2.8
  },
  {
    "country": "Chihuahua",
    "visits": 3,
    "stroke": "3,3",
      "opacity": 0.5,
      "promedio": 2.8
  },
  {
    "country": "Baja California",
    "visits": 3,
    "stroke": "3,3",
      "opacity": 0.5,
      "promedio": 2.8
  },
  {
    "country": "Nuevo León",
    "visits": 3,
    "stroke": "3,3",
      "opacity": 0.5,
      "promedio": 2.8
  },
  {
    "country": "Tlaxcala",
    "visits": 3,
    "stroke": "3,3",
      "opacity": 0.5,
      "promedio": 2.8
  },
  {
    "country": "Baja California Sur",
    "visits": 3,
    "stroke": "3,3",
      "opacity": 0.5,
      "promedio": 2.8
  },
  {
    "country": "Morelos",
    "visits": 3,
    "stroke": "3,3",
      "opacity": 0.5,
      "promedio": 2.8
  },
  {
    "country": "Guanajuato",
    "visits": 3,
    "stroke": "3,3",
      "opacity": 0.5,
      "promedio": 2.8
  },
  {
    "country": "Chiapas",
    "visits": 3,
    "stroke": "3,3",
      "opacity": 0.5,
      "promedio": 2.8
  },
  {
    "country": "México",
    "visits": 3,
    "stroke": "3,3",
      "opacity": 0.5,
      "promedio": 2.8
  },
  {
    "country": "Coahuila",
    "visits": 2.9,
    "stroke": "3,3",
      "opacity": 0.5,
      "promedio": 2.8
  },
  {
    "country": "Sonora",
    "visits": 2.9,
    "stroke": "3,3",
      "opacity": 0.5,
      "promedio": 2.8
  },
  {
    "country": "Tamaulipas",
    "visits": 2.9,
    "stroke": "3,3",
      "opacity": 0.5,
      "promedio": 2.8
  },
  {
    "country": "Quintana Roo",
    "visits": 2.8,
    "stroke": "3,3",
      "opacity": 0.5,
      "promedio": 2.8
  },
  {
    "country": "Sinaloa",
    "visits": 2.8,
    "stroke": "3,3",
      "opacity": 0.5,
      "promedio": 2.8
  },
  {
    "country": "Michoacán",
    "visits": 2.8,
    "stroke": "3,3",
      "opacity": 0.5,
      "promedio": 2.8
  },
  
  {
    "country": "Nayarit",
    "visits": 2.7,
    "stroke": "3,3",
      "opacity": 0.5,
      "promedio": 2.8
  },
  {
    "country": "Puebla",
    "visits": 2.7,
    "stroke": "3,3",
      "opacity": 0.5,
      "promedio": 2.8
  },
  {
    "country": "Durango",
    "visits": 2.7,
    "stroke": "3,3",
      "opacity": 0.5,
      "promedio": 2.8
  },
  {
    "country": "Zacatecas",
    "visits": 2.7,
    "stroke": "3,3",
      "opacity": 0.5,
      "promedio": 2.8
  },
  {
    "country": "Hidalgo",
    "visits": 2.7,
    "stroke": "3,3",
      "opacity": 0.5,
      "promedio": 2.8
  },
  {
      "country": "[font - size: 20px; font-weight: bold]Yucatán[/]",
      "visits": 2.5,
      "promedio": 2.8
  },
  {
    "country": "San Luis Potosí",
    "visits": 2.5,
    "stroke": "3,3",
      "opacity": 0.5,
      "promedio": 2.8
  },
  {
    "country": "Campeche",
    "visits": 2.5,
    "stroke": "3,3",
      "opacity": 0.5,
      "promedio": 2.8
  },
  {
    "country": "Veracruz",
    "visits": 2.4,
    "stroke": "3,3",
      "opacity": 0.5,
      "promedio": 2.8
  },
  {
    "country": "Tabasco",
    "visits": 2.3,
    "stroke": "3,3",
      "opacity": 0.5,
      "promedio": 2.8
  },
  {
    "country": "Guerrero",
    "visits": 2.2,
    "stroke": "3,3",
      "opacity": 0.5,
      "promedio": 2.8
  },
  {
    "country": "Ciudad de México",
    "visits": 2.2,
    "stroke": "3,3",
      "opacity": 0.5,
      "promedio": 2.8
  },
  {
    "country": "Oaxaca",
    "visits": 2.1,
    "stroke": "3,3",
      "opacity": 0.5,
      "promedio": 2.8
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
valueAxis.max = 4;
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
label.text = "Promedio nacional: 2.8";
label.fontSize = 16;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(90);//Ajusta la alineación horizontal via porcentaje
label.horizontalCenter = "middle";
label.y = 140; //Ajusta alineación vertical, positivo (hacia abajo) negativo (hacia arriba
//label.x = 1250;
//.-Para colocar la etiqueta del valor del promedio nacional


chart.cursor = new am4charts.XYCursor();

//chart.exporting.menu = new am4core.ExportMenu();
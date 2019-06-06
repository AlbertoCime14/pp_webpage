am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);


chart.data = [
  {
    "country": "Guanajuato",
        "visits": 14.41 ,"stroke": "3,3",
        "opacity": 0.5, "promedio": 6.13
  },
  {
      "country": "[font - size: 20px; font-weight: bold]Yucatán[/]",
      "visits": 13.4,"promedio": 6.13
  },
  {
    "country": "San Luis Potosí",
      "visits": 10.93, "stroke": "3,3",
      "opacity": 0.5, "promedio": 6.13
  },
  {
    "country": "Durango",
      "visits": 10.51, "stroke": "3,3",
      "opacity": 0.5, "promedio": 6.13
  },
  {
    "country": "Zacatecas",
      "visits": 10.38, "stroke": "3,3",
      "opacity": 0.5, "promedio": 6.13
  },
  {
    "country": "Campeche",
      "visits": 9.61, "stroke": "3,3",
      "opacity": 0.5, "promedio": 6.13
  },
  {
    "country": "Puebla",
      "visits": 8.41, "stroke": "3,3",
      "opacity": 0.5, "promedio": 6.13
  },
  {
    "country": "Tabasco",
      "visits": 7.89, "stroke": "3,3",
      "opacity": 0.5, "promedio": 6.13
  },
  {
    "country": "Aguascalientes",
      "visits": 7.8, "stroke": "3,3",
      "opacity": 0.5, "promedio": 6.13  },
  {
    "country": "Quintana Roo",
      "visits": 7.72, "stroke": "3,3",
      "opacity": 0.5, "promedio": 6.13
  },
  {
    "country": "Tlaxcala",
      "visits": 7.69, "stroke": "3,3",
      "opacity": 0.5, "promedio": 6.13
  },
  {
    "country": "Nayarit",
      "visits": 7.17, "stroke": "3,3",
      "opacity": 0.5, "promedio": 6.13
  },
  {
    "country": "Sinaloa",
      "visits": 6.77, "stroke": "3,3",
      "opacity": 0.5, "promedio": 6.13
  },
  {
    "country": "Ciudad de México",
      "visits": 6.43, "stroke": "3,3",
      "opacity": 0.5, "promedio": 6.13
  },
  {
    "country": "Promedio",
      "visits": 6.13, "stroke": "3,3",
      "opacity": 0.5, "promedio": 6.13
  },
  {
    "country": "Michoacán",
      "visits": 5.63, "stroke": "3,3",
      "opacity": 0.5, "promedio": 6.13
  },
  {
    "country": "Jalisco",
      "visits": 5.46, "stroke": "3,3",
      "opacity": 0.5, "promedio": 6.13
  },
  {
    "country": "Sonora",
      "visits": 5.35, "stroke": "3,3",
      "opacity": 0.5, "promedio": 6.13
  },
  {
    "country": "Chiapas",
      "visits": 5.33, "stroke": "3,3",
      "opacity": 0.5, "promedio": 6.13
  },
  {
    "country": "Hidalgo",
      "visits": 5.32, "stroke": "3,3",
      "opacity": 0.5, "promedio": 6.13
  },
  {
    "country": "Oaxaca",
      "visits": 5.08, "stroke": "3,3",
      "opacity": 0.5, "promedio": 6.13
  },
  {
    "country": "Tamaulipas",
      "visits": 4.87, "stroke": "3,3",
      "opacity": 0.5, "promedio": 6.13
  },
  {
    "country": "Morelos",
      "visits": 4.38, "stroke": "3,3",
      "opacity": 0.5, "promedio": 6.13
  },
  {
    "country": "Chihuahua",
      "visits": 4.09, "stroke": "3,3",
      "opacity": 0.5, "promedio": 6.13
  },
  {
    "country": "Veracruz",
      "visits": 3.85, "stroke": "3,3",
      "opacity": 0.5, "promedio": 6.13
  },
  {
    "country": "México",
      "visits": 3.84, "stroke": "3,3",
      "opacity": 0.5, "promedio": 6.13
  },
  {
    "country": "Querétaro",
      "visits": 3.24, "stroke": "3,3",
      "opacity": 0.5, "promedio": 6.13
  },
  {
    "country": "Baja California",
      "visits": 2.09, "stroke": "3,3",
      "opacity": 0.5, "promedio": 6.13
  },
  {
    "country": "Colima",
      "visits": 1.97, "stroke": "3,3",
      "opacity": 0.5, "promedio": 6.13
  },
  {
    "country": "Guerrero",
      "visits": 1.8, "stroke": "3,3",
      "opacity": 0.5, "promedio": 6.13
  },
  {
    "country": "Nuevo León",
      "visits": 1.78, "stroke": "3,3",
      "opacity": 0.5, "promedio": 6.13
  },
  {
    "country": "Coahuila",
      "visits": 1.6, "stroke": "3,3",
      "opacity": 0.5, "promedio": 6.13
  },
  {
    "country": "Baja California Sur",
      "visits": 1.48, "stroke": "3,3",
      "opacity": 0.5, "promedio": 6.13
  }
 ];

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
valueAxis.max = 18;
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
//var valueLabel = series.bullets.push(new am4charts.LabelBullet());
//valueLabel.label.text = "{valueY}";
//valueLabel.label.dy = -20;

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
label.text = "Promedio nacional: 6.13";
label.fontSize = 16;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(90);//Ajusta la alineación horizontal via porcentaje
label.horizontalCenter = "middle";
label.y = 350; //Ajusta alineación vertical, positivo (hacia abajo) negativo (hacia arriba
//label.x = 1250;
//.-Para colocar la etiqueta del valor del promedio nacional
//Valores de las barras verticales
var valueLabel = series.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY.value}";
valueLabel.label.dy = -40;
valueLabel.label.truncate = false;
valueLabel.label.hideOversized = false;
valueLabel.label.rotation = 270;

chart.cursor = new am4charts.XYCursor();

//chart.exporting.menu = new am4core.ExportMenu();
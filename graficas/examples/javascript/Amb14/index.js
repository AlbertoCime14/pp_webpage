am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);


chart.data = [ 
    {
        "country": "Ciudad de México",
        "visits": 21,
        "stroke": "3,3",
        "opacity": 0.5, "promedio": 11.5
    }, 
    {
        "country": "Morelos",
        "visits": 20.3,
        "stroke": "3,3",
        "opacity": 0.5, "promedio": 11.5
    },
    {
    "country": "México",
        "visits": 19.2,
        "stroke": "3,3",
        "opacity": 0.5, "promedio": 11.5
    },
  {
    "country": "Tlaxcala",
      "visits": 17.7,
      "stroke": "3,3",
      "opacity": 0.5, "promedio": 11.5
  },
  {
    "country": "Puebla",
      "visits": 17.2,
      "stroke": "3,3",
      "opacity": 0.5, "promedio": 11.5
  },
  {
    "country": "Hidalgo",
      "visits": 16.3,
      "stroke": "3,3",
      "opacity": 0.5, "promedio": 11.5
  },
  {
    "country": "Tabasco",
      "visits": 15.9,
      "stroke": "3,3",
      "opacity": 0.5, "promedio": 11.5
  },
  {
    "country": "Queretaro",
      "visits": 14.8,
      "stroke": "3,3",
      "opacity": 0.5, "promedio": 11.5
  },
  {
    "country": "Veracruz",
      "visits": 14,
      "stroke": "3,3",
      "opacity": 0.5, "promedio": 11.5
  },
  {
    "country": "Guanajuato",
      "visits": 13.2,
      "stroke": "3,3",
      "opacity": 0.5, "promedio": 11.5
  },
  {
    "country": "Baja California",
      "visits": 12.6,
      "stroke": "3,3",
      "opacity": 0.5, "promedio": 11.5
  },
  {
    "country": "Michoacan",
      "visits": 12.2,
      "stroke": "3,3",
      "opacity": 0.5, "promedio": 11.5
  },
  
  {
    "country": "Nuevo León",
      "visits": 11.5,
      "stroke": "3,3",
      "opacity": 0.5, "promedio": 11.5
  },
  {
    "country": "Guerrero",
      "visits": 11.1,
      "stroke": "3,3",
      "opacity": 0.5, "promedio": 11.5
  },
  {
    "country": "Chiapas",
      "visits": 11.1,
      "stroke": "3,3",
      "opacity": 0.5, "promedio": 11.5
  },
  {
    "country": "San Luis Potosí",
      "visits": 10.5,
      "stroke": "3,3",
      "opacity": 0.5, "promedio": 11.5
  },
  {
    "country": "Oaxaca",
      "visits": 10.4,
      "stroke": "3,3",
      "opacity": 0.5, "promedio": 11.5
  },
  {
    "country": "Jalisco ",
      "visits": 10.3,
      "stroke": "3,3",
      "opacity": 0.5, "promedio": 11.5
  },
  {
    "country": "Tamaulipas",
      "visits": 10.2,
      "stroke": "3,3",
      "opacity": 0.5, "promedio": 11.5
  },
  {
    "country": "Aguascalientes",
      "visits": 9.8,
      "stroke": "3,3",
      "opacity": 0.5, "promedio": 11.5
  },
  {
    "country": "Colima",
      "visits": 9.7,
      "stroke": "3,3",
      "opacity": 0.5, "promedio": 11.5
  },
  {
    "country": "Coahuila",
      "visits": 9.3,
      "stroke": "3,3",
      "opacity": 0.5, "promedio": 11.5
  },
  {
    "country": "Campeche",
      "visits": 9.2,
      "stroke": "3,3",
      "opacity": 0.5, "promedio": 11.5
  },
  {
    "country": "Sonora",
      "visits": 9.1,
      "stroke": "3,3",
      "opacity": 0.5, "promedio": 11.5
  },
  {
    "country": "Sinaloa",
      "visits": 8.1,
      "stroke": "3,3",
      "opacity": 0.5, "promedio": 11.5
  },
  {
    "country": "Chihuahua",
      "visits": 7.7,
      "stroke": "3,3",
      "opacity": 0.5, "promedio": 11.5
  },
  {
    "country": "Durango",
      "visits": 6.8,
      "stroke": "3,3",
      "opacity": 0.5, "promedio": 11.5
  },
  {
    "country": "Nayarit",
      "visits": 6.6,
      "stroke": "3,3",
      "opacity": 0.5, "promedio": 11.5
  },
  {
    "country": "Zacatecas",
      "visits": 6.4,
      "stroke": "3,3",
      "opacity": 0.5, "promedio": 11.5
  },
  {
      "country": "[font - size: 20px; font-weight: bold]Yucatán[/]",
      "visits": 6, "promedio": 11.5
  },
  {
    "country": "Baja California Sur",
      "visits": 5.8,
      "stroke": "3,3",
      "opacity": 0.5, "promedio": 11.5
  },
  {
    "country": "Quintana Roo",
      "visits": 4.5,
      "stroke": "3,3",
      "opacity": 0.5, "promedio": 11.5
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
valueAxis.max = 24;
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
label.text = "Promedio nacional: 11.5";
label.fontSize = 16;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(90);//Ajusta la alineación horizontal via porcentaje
label.horizontalCenter = "right";
label.y = 270; //Ajusta alineación vertical, positivo (hacia abajo) negativo (hacia arriba
//label.x = 1250;
//.-Para colocar la etiqueta del valor del promedio nacional


chart.cursor = new am4charts.XYCursor();

//chart.exporting.menu = new am4core.ExportMenu();
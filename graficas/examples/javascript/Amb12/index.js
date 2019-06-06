am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);


chart.data = [
  {
    "country": "Veracruz",
        "visits": 343,
        "stroke": "3,3",
        "opacity": 0.5
  },
  {
    "country": "Jalisco",
      "visits": 279,
      "stroke": "3,3",
      "opacity": 0.5
  },
  {
    "country": "Oaxaca",
      "visits": 263,
      "stroke": "3,3",
      "opacity": 0.5
  },
  {
    "country": "Chiapas",
      "visits": 222,
      "stroke": "3,3",
      "opacity": 0.5
  },
  {
    "country": "Sinaloa",
      "visits": 211,
      "stroke": "3,3",
      "opacity": 0.5
  },
  {
    "country": "Michoacán",
      "visits": 210,
      "stroke": "3,3",
      "opacity": 0.5
  },
  {
    "country": "Guerrero",
      "visits": 206,
      "stroke": "3,3",
      "opacity": 0.5
  },
  {
    "country": "Tamaulipas",
      "visits": 191,
      "stroke": "3,3",
      "opacity": 0.5
  },
  {
    "country": "Sonora",
      "visits": 157,
      "stroke": "3,3",
      "opacity": 0.5
  },
  {
    "country": "Nayarit",
      "visits": 139,
      "stroke": "3,3",
      "opacity": 0.5
  },
  {
    "country": "Tabasco",
      "visits": 127,
      "stroke": "3,3",
      "opacity": 0.5
  },
  {
    "country": "Guanajuato",
      "visits": 122,
      "stroke": "3,3",
      "opacity": 0.5
  },
  {
    "country": "Quintana Roo",
      "visits": 121,
      "stroke": "3,3",
      "opacity": 0.5
  },
  {
    "country": "Baja California",
      "visits": 119,
      "stroke": "3,3",
      "opacity": 0.5
  },
  {
    "country": "México",
      "visits": 112,
      "stroke": "3,3",
      "opacity": 0.5
  },
  {
    "country": "Nuevo León",
      "visits": 103,
      "stroke": "3,3",
      "opacity": 0.5
  },
  {
    "country": "Puebla",
      "visits": 99,
      "stroke": "3,3",
      "opacity": 0.5
  },
  {
    "country": "Baja California Sur",
      "visits": 97,
      "stroke": "3,3",
      "opacity": 0.5
  },
  {
    "country": "Durango",
      "visits": 80,
      "stroke": "3,3",
      "opacity": 0.5
  },
  {
    "country": "San Luis Potosí",
      "visits": 79,
      "stroke": "3,3",
      "opacity": 0.5
  },
  {
    "country": "Chihuahua",
      "visits": 76,
      "stroke": "3,3",
      "opacity": 0.5
  },
  {
    "country": "Morelos",
      "visits": 76,
      "stroke": "3,3",
      "opacity": 0.5
  },
  {
    "country": "Querétaro",
      "visits": 56,
      "stroke": "3,3",
      "opacity": 0.5
  },
  {
    "country": "Campeche",
      "visits": 53,
      "stroke": "3,3",
      "opacity": 0.5
  },
  {
    "country": "Colima",
      "visits": 51,
      "stroke": "3,3",
      "opacity": 0.5
  },
  {
    "country": "Coahuila",
      "visits": 50,
      "stroke": "3,3",
      "opacity": 0.5
  },
  {
    "country": "Hidalgo",
      "visits": 48,
      "stroke": "3,3",
      "opacity": 0.5
  },
  {
    "country": "Tlaxcala",
      "visits": 34,
      "stroke": "3,3",
      "opacity": 0.5
  },
  {
    "country": "Aguascalientes",
      "visits": 32,
      "stroke": "3,3",
      "opacity": 0.5
  },
  {
    "country": "Zacatecas",
      "visits": 23,
      "stroke": "3,3",
      "opacity": 0.5
  },
  {
      "country": "[font - size: 20px; font-weight: bold]Yucatán[/]",
    "visits": 22
  },
  {
    "country": "Ciudad de México",
      "visits": 9,
      "stroke": "3,3",
      "opacity": 0.5
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
valueAxis.max = 400;
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



chart.cursor = new am4charts.XYCursor();

//chart.exporting.menu = new am4core.ExportMenu();

//Valores de las barras verticales
var valueLabel = series.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY.value}";
valueLabel.label.dy = -40;
valueLabel.label.truncate = false;
valueLabel.label.hideOversized = false;
//valueLabel.label.rotation = 270;



//var label = categoryAxis.renderer.labels.template;
//label.wrap = true;
//label.maxWidth = 120;
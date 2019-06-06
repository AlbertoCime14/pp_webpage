am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);


chart.data = [{
    "country": "Baja California",
    "visits": 47794.53,
    "stroke": "3,3",
    "opacity": 0.5,
  },
  {
    "country": "Nayarit",
      "visits": 31056.91,
      "stroke": "3,3",
      "opacity": 0.5,
  },
  {
    "country": "Baja California Sur",
      "visits": 29347.26,
      "stroke": "3,3",
      "opacity": 0.5,
  },
  {
    "country": "Coahuila",
      "visits": 23540.84,
      "stroke": "3,3",
      "opacity": 0.5,
  },
  {
    "country": "Campeche",
      "visits": 17121.91,
      "stroke": "3,3",
      "opacity": 0.5,
  },
  {
    "country": "Chihuahua",
      "visits": 16544.57,
      "stroke": "3,3",
      "opacity": 0.5,
  },
  {
    "country": "Quintana Roo",
      "visits": 13205.36,
      "stroke": "3,3",
      "opacity": 0.5,
  },
  {
    "country": "Chiapas",
      "visits": 11074.31,
      "stroke": "3,3",
      "opacity": 0.5,
  },
  {
    "country": "Sonora",
      "visits": 9831.77,
      "stroke": "3,3",
      "opacity": 0.5,
  },
  {
    "country": "Colima",
      "visits": 6516.31,
      "stroke": "3,3",
      "opacity": 0.5,
  },
  {
    "country": "Tamaulipas",
      "visits": 5728.37,
      "stroke": "3,3",
      "opacity": 0.5,
  },
  {
    "country": "Oaxaca",
      "visits": 5240.2,
      "stroke": "3,3",
      "opacity": 0.5,
  },
  {
      "country": "[font - size: 20px; font-weight: bold]Yucatán[/]",
    "visits": 4815.05
  },
  {
    "country": "Querétaro",
      "visits": 3860.73,
      "stroke": "3,3",
      "opacity": 0.5,
  },
  {
    "country": "Durango",
      "visits": 3517.13,
      "stroke": "3,3",
      "opacity": 0.5,
  },
  {
    "country": "Michoacán",
      "visits": 3505.31,
      "stroke": "3,3",
      "opacity": 0.5,
  },
  {
    "country": "Tabasco",
      "visits": 3488.35,
      "stroke": "3,3",
      "opacity": 0.5,
  },
  {
    "country": "Veracruz",
      "visits": 3383.49,
      "stroke": "3,3",
      "opacity": 0.5,
  },
  {
    "country": "México",
      "visits": 2493.396,
      "stroke": "3,3",
      "opacity": 0.5,
  },
  {
    "country": "Guanajuato",
      "visits": 2368.82,
      "stroke": "3,3",
      "opacity": 0.5,
  },
  {
    "country": "Jalisco",
      "visits": 1986.97,
      "stroke": "3,3",
      "opacity": 0.5,
  },
  {
    "country": "Nuevo León",
      "visits": 1834.43,
      "stroke": "3,3",
      "opacity": 0.5,
  },
  {
    "country": "Morelos",
      "visits": 1243.82,
      "stroke": "3,3",
      "opacity": 0.5,
  },
  {
    "country": "Hidalgo",
      "visits": 1220.32,
      "stroke": "3,3",
      "opacity": 0.5,
  },
  {
    "country": "Aguascalientes",
      "visits": 976.99,
      "stroke": "3,3",
      "opacity": 0.5,
  },
  {
    "country": "San Luis Potosí",
      "visits": 747.26,
      "stroke": "3,3",
      "opacity": 0.5,
  },
  {
    "country": "Sinaloa",
      "visits": 510.02,
      "stroke": "3,3",
      "opacity": 0.5,
  },
  {
    "country": "Tlaxcala",
      "visits": 463.91,
      "stroke": "3,3",
      "opacity": 0.5,
  },
  {
    "country": "Puebla",
      "visits": 395.57,
      "stroke": "3,3",
      "opacity": 0.5,
  },
  {
    "country": "Distrito Federal",
      "visits": 64.32,
      "stroke": "3,3",
      "opacity": 0.5,
  },
  {
    "country": "Guerrero",
      "visits": 58.28,
      "stroke": "3,3",
      "opacity": 0.5,
  },
  {
    "country": "Zacatecas",
      "visits": 11.25,
      "stroke": "3,3",
      "opacity": 0.5,
  }];

/*
chart.padding(40, 40, 40, 40);

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "country";
categoryAxis.renderer.minGridDistance = 1;
categoryAxis.renderer.labels.template.rotation = -90;

categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.max = 70000;
valueAxis.strictMinMax = true;



var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

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
columnTemplate.stroke = "0.5";

chart.cursor = new am4charts.XYCursor();
chart.exporting.menu = new am4core.ExportMenu();



*/

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
valueAxis.max = 60000;
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

chart.exporting.menu = new am4core.ExportMenu();

//Valores de las barras verticales
var valueLabel = series.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY.value}";
valueLabel.label.dy = -40;
valueLabel.label.truncate = false;
valueLabel.label.hideOversized = false;
valueLabel.label.rotation = 270;



//var label = categoryAxis.renderer.labels.template;
//label.wrap = true;
//label.maxWidth = 120;
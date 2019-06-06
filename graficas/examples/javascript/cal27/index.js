am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

//Datos en Excel
//             2014    2015    2016
//Auditorios	0.20	0.14	0.24
//Bibliotecas	0.78	0.77	0.76
//Centros culturales	2.89	2.94	2.76


// Add data
chart.data = [
 {
   "Entidad federativa": "Ciudad de México",
   "Lenguaje y comunicación": 541,
   "Matemáticas": 534,
   "Promedio": 538
 },
 {
   "Entidad federativa": "Aguascalientes",
   "Lenguaje y comunicación": 519,
   "Matemáticas": 533,
   "Promedio": 526
 },
 {
   "Entidad federativa": "Jalisco",
   "Lenguaje y comunicación": 513,
   "Matemáticas": 535,
   "Promedio": 524
 },
 {
   "Entidad federativa": "Nuevo León",
   "Lenguaje y comunicación": 517,
   "Matemáticas": 526,
   "Promedio": 522
 },
 {
   "Entidad federativa": "Colima",
   "Lenguaje y comunicación": 519,
   "Matemáticas": 523,
   "Promedio": 521
 },
 {
   "Entidad federativa": "Querétaro",
   "Lenguaje y comunicación": 518,
   "Matemáticas": 520,
   "Promedio": 519
 },
 {
   "Entidad federativa": "México",
   "Lenguaje y comunicación": 517,
   "Matemáticas": 514,
   "Promedio": 516
 },
 {
   "Entidad federativa": "Coahuila",
   "Lenguaje y comunicación": 516,
   "Matemáticas": 514,
   "Promedio": 515
 },
 {
   "Entidad federativa": "Sonora",
   "Lenguaje y comunicación": 514,
   "Matemáticas": 512,
   "Promedio": 513
 },
 {
   "Entidad federativa": "Hidalgo",
   "Lenguaje y comunicación": 510,
   "Matemáticas": 515,
   "Promedio": 513
 },
 {
   "Entidad federativa": "Puebla",
   "Lenguaje y comunicación": 505,
   "Matemáticas": 513,
   "Promedio": 509
 },
 {
   "Entidad federativa": "Quintana Roo",
   "Lenguaje y comunicación": 516,
   "Matemáticas": 500,
   "Promedio": 508
 },
 {
   "Entidad federativa": "Yucatán",
   "Lenguaje y comunicación": 510,
   "Matemáticas": 504,
   "Promedio": 507
 },
 {
   "Entidad federativa": "Nayarit",
   "Lenguaje y comunicación": 504,
   "Matemáticas": 508,
   "Promedio": 506
 },
 {
   "Entidad federativa": "Baja California",
   "Lenguaje y comunicación": 511,
   "Matemáticas": 496,
   "Promedio": 504
 },
 {
   "Entidad federativa": "Sinaloa",
   "Lenguaje y comunicación": 498,
   "Matemáticas": 507,
   "Promedio": 503
 },
 {
   "Entidad federativa": "Nacional",
   "Lenguaje y comunicación": 501,
   "Matemáticas": 503,
   "Promedio": 502
 },
 {
   "Entidad federativa": "Campeche",
   "Lenguaje y comunicación": 498,
   "Matemáticas": 504,
   "Promedio": 501
 },
 {
   "Entidad federativa": "Tamaulipas",
   "Lenguaje y comunicación": 498,
   "Matemáticas": 503,
   "Promedio": 501
 },
 {
   "Entidad federativa": "Tlaxcala",
   "Lenguaje y comunicación": 499,
   "Matemáticas": 498,
   "Promedio": 499
 },
 {
   "Entidad federativa": "Baja California Sur",
   "Lenguaje y comunicación": 505,
   "Matemáticas": 491,
   "Promedio": 498
 },
 {
   "Entidad federativa": "San Luis Potosí",
   "Lenguaje y comunicación": 493,
   "Matemáticas": 502,
   "Promedio": 498
 },
 {
   "Entidad federativa": "Guanajuato",
   "Lenguaje y comunicación": 498,
   "Matemáticas": 495,
   "Promedio": 497
 },
 {
   "Entidad federativa": "Morelos",
   "Lenguaje y comunicación": 499,
   "Matemáticas": 489,
   "Promedio": 494
 },
 {
   "Entidad federativa": "Durango",
   "Lenguaje y comunicación": 489,
   "Matemáticas": 495,
   "Promedio": 492
 },
 {
   "Entidad federativa": "Chihuahua",
   "Lenguaje y comunicación": 493,
   "Matemáticas": 489,
   "Promedio": 491
 },
 {
   "Entidad federativa": "Veracruz",
   "Lenguaje y comunicación": 492,
   "Matemáticas": 487,
   "Promedio": 490
 },
 {
   "Entidad federativa": "Zacatecas",
   "Lenguaje y comunicación": 482,
   "Matemáticas": 490,
   "Promedio": 486
 },
 {
   "Entidad federativa": "Tabasco",
   "Lenguaje y comunicación": 483,
   "Matemáticas": 479,
   "Promedio": 481
 },
 {
   "Entidad federativa": "Guerrero",
   "Lenguaje y comunicación": 454,
   "Matemáticas": 453,
   "Promedio": 454
 }
];

// Create category axis
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Entidad federativa";
categoryAxis.renderer.opposite = false;

// Create value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//valueAxis.renderer.inversed = true;
//valueAxis.title.text = "";
valueAxis.renderer.minLabelPosition = 0.01;

// Create series
var series1 = chart.series.push(new am4charts.LineSeries());
series1.dataFields.valueY = "Lenguaje y comunicación";
series1.dataFields.categoryX = "Entidad federativa";
series1.name = "Lenguaje y comunicación";
series1.strokeWidth = 0;
series1.fill = am4core.color("#0C3F6C");
series1.bullets.push(new am4charts.CircleBullet());
series1.tooltipText = "Asistencia a {name} en {categoryX}: {valueY}";
series1.legendSettings.valueText = "{valueY}";
series1.visible = false;

var series2 = chart.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = "Matemáticas";
series2.dataFields.categoryX = "Entidad federativa";
series2.name = 'Matemáticas';
series2.strokeWidth = 0;
series2.fill = am4core.color("#84bff4");
series2.bullets.push(new am4charts.CircleBullet());
series2.tooltipText = "Asistencia a {name} en {categoryX}: {valueY}";
series2.legendSettings.valueText = "{valueY}";

var series3 = chart.series.push(new am4charts.LineSeries());
series3.dataFields.valueY = "Promedio";
series3.dataFields.categoryX = "Entidad federativa";
series3.name = 'Promedio';
series3.strokeWidth = 3;
series3.stroke = am4core.color('#167dd8');
//series3.bullets.push(new am4charts.CircleBullet());
series3.tooltipText = "Asistencia a {name} en {categoryX}: {valueY}";
series3.legendSettings.valueText = "{valueY}";

// Add chart cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "zoomY";

// Add legend
chart.legend = new am4charts.Legend();
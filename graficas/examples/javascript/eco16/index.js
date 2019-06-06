am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);



  chart.data = [
    {
      "lugar": "1",
      "entidad": "Nuevo León",
      "proporcion": 99.8,
      "opacity": 0.5,
      "Promedio Nacional": 76.4
    },
    {
      "lugar": "2",
      "entidad": "Sonora",
      "proporcion": 99.8,
      "opacity": 0.5,
      "Promedio Nacional": 76.4
    },
    {
      "lugar": "3",
      "entidad": "Zacatecas",
      "proporcion": 99.7,
      "opacity": 0.5,
      "Promedio Nacional": 76.4
    },
    {
      "lugar": "4",
      "entidad": "Baja California",
      "proporcion": 99.4,
      "opacity": 0.5,
      "Promedio Nacional": 76.4
    },
    {
      "lugar": "5",
      "entidad": "Sinaloa",
      "proporcion": 99.2,
      "opacity": 0.5,
      "Promedio Nacional": 76.4
    },
    {
      "lugar": "6",
      "entidad": "Baja California Sur",
      "proporcion": 98.9,
      "opacity": 0.5,
      "Promedio Nacional": 76.4
    },
    {
      "lugar": "7",
      "entidad": "Tamaulipas",
      "proporcion": 98.2,
      "opacity": 0.5,
      "Promedio Nacional": 76.4
    },
    {
      "lugar": "8",
      "entidad": "Querétaro",
      "proporcion": 97.7,
      "opacity": 0.5,
      "Promedio Nacional": 76.4
    },
    {
      "lugar": "9",
      "entidad": "Chihuahua",
      "proporcion": 97,
      "opacity": 0.5,
      "Promedio Nacional": 76.4
    },
    {
      "lugar": "10",
      "entidad": "Durango",
      "proporcion": 96.8,
      "opacity": 0.5,
      "Promedio Nacional": 76.4
    },
    {
      "lugar": "11",
      "entidad": "Aguascalientes",
      "proporcion": 96.7,
      "opacity": 0.5,
      "Promedio Nacional": 76.4
    },
    {
      "lugar": "12",
      "entidad": "Ciudad de México",
      "proporcion": 96.4,
      "opacity": 0.5,
      "Promedio Nacional": 76.4
    },
    {
      "lugar": "13",
      "entidad": "Tlaxcala",
      "proporcion": 93.3,
      "opacity": 0.5,
      "Promedio Nacional": 76.4
    },
    {
      "lugar": "14",
      "entidad": "Coahuila",
      "proporcion": 91.1,
      "opacity": 0.5,
      "Promedio Nacional": 76.4
    },
    {
      "lugar": "15",
      "entidad": "Morelos",
      "proporcion": 90.9,
      "opacity": 0.5,
      "Promedio Nacional": 76.4
    },
    {
      "lugar": "16",
      "entidad": "Guanajuato",
      "proporcion": 90.3,
      "opacity": 0.5,
      "Promedio Nacional": 76.4
    },
    {
      "lugar": "17",
      "entidad": "Jalisco",
      "proporcion": 89.3,
      "opacity": 0.5,
      "Promedio Nacional": 76.4
    },
    {
      "lugar": "18",
      "entidad": "San Luis Potosí",
      "proporcion": 87.6,
      "opacity": 0.5,
      "Promedio Nacional": 76.4
    },
    {
      "lugar": "19",
      "entidad": "Michoacán",
      "proporcion": 86.3,
      "opacity": 0.5,
      "Promedio Nacional": 76.4
    },
    {
      "lugar": "20",
      "entidad": "México",
      "proporcion": 84.6,
      "opacity": 0.5,
      "Promedio Nacional": 76.4
    },
    {
      "lugar": "21",
      "entidad": "Colima",
      "proporcion": 79.3,
      "opacity": 0.5,
      "Promedio Nacional": 76.4
    },
    {
      "lugar": "22",
      "entidad": "Campeche",
      "proporcion": 77.9,
      "opacity": 0.5,
      "Promedio Nacional": 76.4
    },
    {
      "lugar": "23",
      "entidad": "Puebla",
      "proporcion": 76.7,
      "opacity": 0.5,
      "Promedio Nacional": 76.4
    },
    {
      "lugar": "24",
      "entidad": "Hidalgo",
      "proporcion": 69.8,
      "opacity": 0.5,
      "Promedio Nacional": 76.4
    },
    {
      "lugar": "25",
      "entidad": "Nayarit",
      "proporcion": 64.9,
      "opacity": 0.5,
      "Promedio Nacional": 76.4
    },
    {
      "lugar": "26",
      "entidad": "Veracruz",
      "proporcion": 61.7,
      "opacity": 0.5,
      "Promedio Nacional": 76.4
    },
    {
      "lugar": "27",
      "entidad": "Guerrero",
      "proporcion": 61.4,
      "opacity": 0.5,
      "Promedio Nacional": 76.4
    },
    {
      "lugar": "28",
      "entidad": "Oaxaca",
      "proporcion": 46.2,
      "opacity": 0.5,
      "Promedio Nacional": 76.4
    },
    {
      "lugar": "29",
      "entidad": "Quintana Roo",
      "proporcion": 41.2,
      "opacity": 0.5,
      "Promedio Nacional": 76.4
    },
    {
      "lugar": "30",
      "entidad": "Tabasco",
      "proporcion": 40,
      "opacity": 0.5,
      "Promedio Nacional": 76.4
    },
    {
      "lugar": "31",
      "entidad": "Chiapas",
      "proporcion": 18.8,
      "opacity": 0.5,
      "Promedio Nacional": 76.4
    },
    {
      "lugar": "32",
      "entidad": "[font-size: 20px; font-weight: bold;]Yucatán[/]",
      "proporcion": 4.5,
      "opacity": 1,
      "Promedio Nacional": 76.4
    }
];

//Formato a 1 decimal

chart.padding(40, 40, 40, 40);

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "entidad";
categoryAxis.renderer.minGridDistance = 1;

//Etiquetas debajo de la barra vertical centradas
categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.max = 100;

var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryX = "entidad";
series.dataFields.valueY = "proporcion";
series.tooltipText = "{valueY.value}"
series.columns.template.strokeOpacity = 0;
series.columns.template.fill = am4core.color('#00A984');
series.columns.template.propertyFields.fillOpacity = "opacity";

var desaturateFilter = new am4core.DesaturateFilter();
desaturateFilter.saturation = 0.5;

//Valores de las barras verticales
var valueLabel = series.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY}";
valueLabel.label.dy = -20;
valueLabel.label.rotation = -90;
valueLabel.label.truncate = false;
valueLabel.label.hideOversized = false;


var lineSeries = chart.series.push(new am4charts.LineSeries());
lineSeries.dataFields.categoryX = "entidad";
lineSeries.dataFields.valueY = "Promedio Nacional";
lineSeries.tooltipText = "Promedio Nacional: {valueY.value}";
lineSeries.sequencedInterpolation = true;
lineSeries.defaultState.transitionDuration = 1500;
lineSeries.stroke = am4core.color("#FF0000"); //chart.colors.getIndex(11);
lineSeries.fill = lineSeries.stroke;
lineSeries.strokeWidth = 2;



var label = chart.createChild(am4core.Label);
label.text = "Promedio Nacional: 76.4";
label.fontSize = 14;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(90);
label.horizontalCenter = "middle";
label.y = am4core.percent(21);

chart.cursor = new am4charts.XYCursor();
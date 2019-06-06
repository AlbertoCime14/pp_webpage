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
      "Año": "2007",
      "Yucatán": 7.4,
      "Nacional": 4.1
    },
    {
      "Año": "2008",
      "Yucatán": 8.3,
      "Nacional": 4.3
    },
    {
      "Año": "2009",
      "Yucatán": 11.3,
      "Nacional": 4.7
    },
    {
      "Año": "2010",
      "Yucatán": 10.5,
      "Nacional": 4.4
    },
    {
      "Año": "2011",
      "Yucatán": 9.3,
      "Nacional": 5
    },
    {
      "Año": "2012",
      "Yucatán": 7.9,
      "Nacional": 4.8
    },
    {
      "Año": "2013",
      "Yucatán": 8.1,
      "Nacional": 5
    },
    {
      "Año": "2014",
      "Yucatán": 8.7,
      "Nacional": 5.3
    },
    {
      "Año": "2015",
      "Yucatán": 9,
      "Nacional": 5.3
    },
    {
      "Año": "2016",
      "Yucatán": 10.4,
      "Nacional": 5.2
    },
    {
      "Año": "2017",
      "Yucatán": 8.8,
      "Nacional": 5.3
    }
   ];

// Create category axis
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Año";
categoryAxis.renderer.opposite = false;

// Create value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//valueAxis.renderer.inversed = true;
valueAxis.title.text = "Tasa de suicidios";
valueAxis.renderer.minLabelPosition = 0.01;
valueAxis.min = 0;

// Create series
var series1 = chart.series.push(new am4charts.LineSeries());
series1.dataFields.valueY = "Yucatán";
series1.dataFields.categoryX = "Año";
series1.name = "Yucatán";
series1.strokeWidth = 3;
series1.stroke = am4core.color('#0C3F6C');
series1.bullets.push(new am4charts.CircleBullet());
series1.visible = false;
var bullet1 = series1.bullets.push(new am4charts.LabelBullet());
bullet1.interactionsEnabled = false;
bullet1.label.text = "{valueY.value}";
bullet1.label.fill = am4core.color("#000000");
bullet1.locationY = 0.03;

var series2 = chart.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = "Nacional";
series2.dataFields.categoryX = "Año";
series2.name = 'Nacional';
series2.strokeWidth = 3;
series2.stroke = am4core.color('#167fdb');
series2.bullets.push(new am4charts.CircleBullet());
var bullet1 = series2.bullets.push(new am4charts.LabelBullet());
bullet1.interactionsEnabled = false;
bullet1.label.text = "{valueY.value}";
bullet1.label.fill = am4core.color("#000000");
bullet1.locationY = -0.04;

// Add chart cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "zoomY";

// Add legend
chart.legend = new am4charts.Legend();
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
      "Año": "2008",
      "Yucatán Dengue": 37.5,
      "Yucatán Chikungunya": null,
      "Yucatán Zika": null,
      "Nacional Dengue": 32.48,
      "Nacional Chikungunya": null,
      "Nacional Zika": null
    },
    {
      "Año": "2009",
      "Yucatán Dengue": 167.1,
      "Yucatán Chikungunya": null,
      "Yucatán Zika": null,
      "Nacional Dengue": 50.59,
      "Nacional Chikungunya": null,
      "Nacional Zika": null
    },
    {
      "Año": "2010",
      "Yucatán Dengue": 131,
      "Yucatán Chikungunya": null,
      "Yucatán Zika": null,
      "Nacional Dengue": 26.39,
      "Nacional Chikungunya": null,
      "Nacional Zika": null
    },
    {
      "Año": "2011",
      "Yucatán Dengue": 319.1,
      "Yucatán Chikungunya": null,
      "Yucatán Zika": null,
      "Nacional Dengue": 14.34,
      "Nacional Chikungunya": null,
      "Nacional Zika": null
    },
    {
      "Año": "2012",
      "Yucatán Dengue": 296.9,
      "Yucatán Chikungunya": null,
      "Yucatán Zika": null,
      "Nacional Dengue": 44.53,
      "Nacional Chikungunya": null,
      "Nacional Zika": null
    },
    {
      "Año": "2013",
      "Yucatán Dengue": 147.5,
      "Yucatán Chikungunya": null,
      "Yucatán Zika": null,
      "Nacional Dengue": 54,
      "Nacional Chikungunya": null,
      "Nacional Zika": null
    },
    {
      "Año": "2014",
      "Yucatán Dengue": 55.6,
      "Yucatán Chikungunya": null,
      "Yucatán Zika": null,
      "Nacional Dengue": 26.81,
      "Nacional Chikungunya": 0.19,
      "Nacional Zika": null
    },
    {
      "Año": "2015",
      "Yucatán Dengue": 78.2,
      "Yucatán Chikungunya": 78.8,
      "Yucatán Zika": null,
      "Nacional Dengue": 22.04,
      "Nacional Chikungunya": 10.4,
      "Nacional Zika": 0.006
    },
    {
      "Año": "2016",
      "Yucatán Dengue": 20.3,
      "Yucatán Chikungunya": 0.51,
      "Yucatán Zika": 59.83,
      "Nacional Dengue": 14.55,
      "Nacional Chikungunya": 0.62,
      "Nacional Zika": 3.08
    },
    {
      "Año": "2017",
      "Yucatán Dengue": 5.8,
      "Yucatán Chikungunya": 0,
      "Yucatán Zika": 0.69,
      "Nacional Dengue": 11.45,
      "Nacional Chikungunya": 0.05,
      "Nacional Zika": 1.31
    },
    {
      "Año": "2018",
      "Yucatán Dengue": 0.86,
      "Yucatán Chikungunya": 0.13,
      "Yucatán Zika": 1.18,
      "Nacional Dengue": 10.19,
      "Nacional Chikungunya": 0.01,
      "Nacional Zika": 0.34
    }
   ];

// Create category axis
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Año";
categoryAxis.renderer.opposite = false;

// Create value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//valueAxis.renderer.inversed = true;
valueAxis.title.text = "Casos por cada 100 mil habitantes";
valueAxis.renderer.minLabelPosition = 0.01;
valueAxis.min = -20;
valueAxis.max = 330;

// Create series
var series1 = chart.series.push(new am4charts.LineSeries());
series1.dataFields.valueY = "Yucatán Dengue";
series1.dataFields.categoryX = "Año";
series1.name = "Yucatán Dengue";
series1.strokeWidth = 3;
series1.bullets.push(new am4charts.CircleBullet());
series1.legendSettings.valueText = "{valueY}";
series1.visible = false;
series1.stroke = am4core.color('#0C3F6C');

var bullet1 = series1.bullets.push(new am4charts.LabelBullet());
bullet1.interactionsEnabled = false;
bullet1.label.text = "{valueY.value}";
bullet1.label.fill = am4core.color("#fff");
bullet1.label.background.fill = am4core.color("#0C3F6C");
bullet1.dx = -23;
bullet1.dy = -13;
bullet1.label.fontSize = 13;

var series2 = chart.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = "Yucatán Chikungunya";
series2.dataFields.categoryX = "Año";
series2.name = 'Yucatán Chikungunya';
series2.strokeWidth = 3;
series2.bullets.push(new am4charts.CircleBullet());
series2.legendSettings.valueText = "{valueY}";
series2.stroke = am4core.color('#0f4c83');

var bullet1 = series2.bullets.push(new am4charts.LabelBullet());
bullet1.interactionsEnabled = false;
bullet1.label.text = "{valueY.value}";
bullet1.label.fill = am4core.color("#fff");
bullet1.label.background.fill = am4core.color("#0f4c83");
bullet1.dx = 23;
bullet1.dy = 7;
bullet1.label.fontSize = 13;

var series3 = chart.series.push(new am4charts.LineSeries());
series3.dataFields.valueY = "Yucatán Zika";
series3.dataFields.categoryX = "Año";
series3.name = 'Yucatán Zika';
series3.strokeWidth = 3;
series3.bullets.push(new am4charts.CircleBullet());
series3.legendSettings.valueText = "{valueY}";
series3.stroke = am4core.color('#115b9d');

var bullet1 = series3.bullets.push(new am4charts.LabelBullet());
bullet1.interactionsEnabled = false;
bullet1.label.text = "{valueY.value}";
bullet1.label.fill = am4core.color("#fff");
bullet1.label.background.fill = am4core.color("#115b9d");
bullet1.dx = 23;
bullet1.dy = -13;
bullet1.label.fontSize = 13;

var series4 = chart.series.push(new am4charts.LineSeries());
series4.dataFields.valueY = "Nacional Dengue";
series4.dataFields.categoryX = "Año";
series4.name = 'Nacional Dengue';
series4.strokeWidth = 3;
series4.bullets.push(new am4charts.CircleBullet());
series4.legendSettings.valueText = "{valueY}";
series4.stroke = am4core.color('#1368b3');

var bullet1 = series4.bullets.push(new am4charts.LabelBullet());
bullet1.interactionsEnabled = false;
bullet1.label.text = "{valueY.value}";
bullet1.label.fill = am4core.color("#fff");
bullet1.label.background.fill = am4core.color("#1368b3");
bullet1.dx = 23;
bullet1.dy = -23;
bullet1.label.fontSize = 13;

var series5 = chart.series.push(new am4charts.LineSeries());
series5.dataFields.valueY = "Nacional Chikungunya";
series5.dataFields.categoryX = "Año";
series5.name = 'Nacional Chikungunya';
series5.strokeWidth = 3;
series5.bullets.push(new am4charts.CircleBullet());
series5.legendSettings.valueText = "{valueY}";
series5.stroke = am4core.color('#1577ce');

var bullet1 = series5.bullets.push(new am4charts.LabelBullet());
bullet1.interactionsEnabled = false;
bullet1.label.text = "{valueY.value}";
bullet1.label.fill = am4core.color("#fff");
bullet1.label.background.fill = am4core.color("#1577ce");
bullet1.dx = -23;
bullet1.dy = 23;
bullet1.label.fontSize = 13;

var series6 = chart.series.push(new am4charts.LineSeries());
series6.dataFields.valueY = "Nacional Zika";
series6.dataFields.categoryX = "Año";
series6.name = 'Nacional Zika';
series6.strokeWidth = 3;
series6.bullets.push(new am4charts.CircleBullet());
series6.legendSettings.valueText = "{valueY}";
series6.stroke = am4core.color('#1784e5');

var bullet1 = series6.bullets.push(new am4charts.LabelBullet());
bullet1.interactionsEnabled = false;
bullet1.label.text = "{valueY.value}";
bullet1.label.fill = am4core.color("#fff");
bullet1.label.background.fill = am4core.color("#1784e5");
bullet1.dx = 20;
bullet1.dy = 23;
bullet1.label.fontSize = 13;

// Add chart cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "zoomY";

// Add legend
chart.legend = new am4charts.Legend();
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

//Datos en Excel
//             2014    2015    2016
//Auditorios  0.20  0.14  0.24
//Bibliotecas 0.78  0.77  0.76
//Centros culturales  2.89  2.94  2.76


// Add data
chart.data = [
    {
      "Año": "2015",
      "Desarrollo Tecnológico": "36060261.29",
      "Servicios Científicos y Tecnológicos": "47455193.53",
      "Innovación": "3051781.69",
      "Investigación Científica": "11794700.31" 
    },
    {
      "Año": "2016",
      "Desarrollo Tecnológico": "28433948.89",
      "Servicios Científicos y Tecnológicos": "63332265.91",
      "Innovación": "17893236.69",
      "Investigación Científica": "10990838.54"
    },
    {
      "Año": "2017",
      "Desarrollo Tecnológico": "12508000.00",
      "Servicios Científicos y Tecnológicos": "56778619.88",
      "Innovación": "3169688.82",
      "Investigación Científica": "23751237.95"
    }
   ];

// Create category axis
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Año";
categoryAxis.renderer.opposite = true;

// Create value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//valueAxis.renderer.inversed = true;
valueAxis.title.text = "Millones";
valueAxis.renderer.minLabelPosition = 0.01;

// Create series
var series1 = chart.series.push(new am4charts.LineSeries());
series1.dataFields.valueY = "Desarrollo Tecnológico";
series1.dataFields.categoryX = "Año";
series1.name = "Desarrollo Tecnológico";
series1.strokeWidth = 3;
series1.bullets.push(new am4charts.CircleBullet());
series1.tooltipText = "Asistencia a {name} en {categoryX}: {valueY}";
series1.legendSettings.valueText = "{valueY}";
series1.visible = false;
series1.stroke = am4core.color('#037199');


//Valores de las barras verticales
var valueLabel = series1.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "$ {valueY}";
valueLabel.label.dy = -20;
valueLabel.label.truncate = false;
valueLabel.label.hideOversized = false;
valueLabel.label.background.fill = am4core.color("#037199");

var series2 = chart.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = "Servicios Científicos y Tecnológicos";
series2.dataFields.categoryX = "Año";
series2.name = 'Servicios Científicos y Tecnológicos';
series2.strokeWidth = 3;
series2.bullets.push(new am4charts.CircleBullet());
series2.tooltipText = "Asistencia a {name} en {categoryX}: {valueY}";
series2.legendSettings.valueText = "{valueY}";
series2.stroke = am4core.color('#039FD7');

//Valores de las barras verticales
var valueLabel = series2.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "$ {valueY}";
valueLabel.label.dy = 22;
valueLabel.label.truncate = false;
valueLabel.label.hideOversized = false;
valueLabel.label.background.fill = am4core.color("#039FD7");

var series3 = chart.series.push(new am4charts.LineSeries());
series3.dataFields.valueY = "Innovación";
series3.dataFields.categoryX = "Año";
series3.name = 'Innovación';
series3.strokeWidth = 3;
series3.bullets.push(new am4charts.CircleBullet());
series3.tooltipText = "Asistencia a {name} en {categoryX}: {valueY}";
series3.legendSettings.valueText = "{valueY}";
series3.stroke = am4core.color('#1AC2FD');

//Valores de las barras verticales
var valueLabel = series3.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "$ {valueY}";
valueLabel.label.dy = -20;
valueLabel.label.truncate = false;
valueLabel.label.hideOversized = false;
valueLabel.label.background.fill = am4core.color("#1AC2FD");

var series4 = chart.series.push(new am4charts.LineSeries());
series4.dataFields.valueY = "Investigación Científica";
series4.dataFields.categoryX = "Año";
series4.name = 'Investigación Científica';
series4.strokeWidth = 3;
series4.bullets.push(new am4charts.CircleBullet());
series4.tooltipText = "Asistencia a {name} en {categoryX}: {valueY}";
series4.legendSettings.valueText = "{valueY}";
series4.stroke = am4core.color('#5ED4FF');

//Valores de las barras verticales
var valueLabel = series4.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "$ {valueY}";
valueLabel.label.dy = 20;
valueLabel.label.truncate = false;
valueLabel.label.hideOversized = false;
valueLabel.label.background.fill = am4core.color("#5ED4FF");

// Add chart cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "zoomY";

// Add legend
chart.legend = new am4charts.Legend();
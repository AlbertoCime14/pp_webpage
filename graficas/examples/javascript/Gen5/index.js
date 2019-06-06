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
      "Periodo": 2015,
      "Delitos sexuales": 644
    },
    {
      "Periodo": 2016,
      "Delitos sexuales": 653
    },
    {
      "Periodo": 2017,
      "Delitos sexuales": 635
    },
    {
      "Periodo": 2018,
      "Delitos sexuales": 332
    }];

chart.colors.list = [
  am4core.color("#6E368C")
];
   
// Create category axis
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Periodo";
categoryAxis.numberFormatter.numberFormat = "#";

// Create value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//valueAxis.renderer.inversed = true;
valueAxis.title.text = "Casos reportados";
valueAxis.renderer.minLabelPosition = 0.01;
valueAxis.min = 0;

// Create series
var series1 = chart.series.push(new am4charts.LineSeries());
series1.dataFields.valueY = "Delitos sexuales";
series1.dataFields.categoryX = "Periodo";
series1.name = "Delitos sexuales";
series1.strokeWidth = 3;
//Circulos
series1.bullets.push(new am4charts.CircleBullet());
series1.tooltipText = "{name} en {categoryX}: {valueY}";
series1.legendSettings.valueText = "{valueY}";
series1.visible = false;
//Cuadro de texto con el valor
var bullet = series1.bullets.push(new am4charts.LabelBullet());
bullet.interactionEnabled=false;
bullet.label.text= "{valueY.value}";
//bullet.label.background.fill = am4core.color("#25132f");
bullet.label.fill = am4core.color("#000000");
bullet.label.dy = -30;

// Add chart cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "zoomY";

// Add legend
chart.legend = new am4charts.Legend();
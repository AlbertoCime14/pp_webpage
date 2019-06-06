am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_kelly);

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);
// Add data
chart.data = [
    {
      "Periodo": "2011",
      "Aprobado": "$795,088.83",
      "Ejercido": "$231,396.00",
      "Variación": -70.9
    },
    {
      "Periodo": "2012",
      "Aprobado": "$261,122.72",
      "Ejercido": "$120,637.64",
      "Variación": -53.8
    },
    {
      "Periodo": "2013",
      "Aprobado": "$431,716.48",
      "Ejercido": "$520,437.65",
      "Variación": 20.6
    },
    {
      "Periodo": "2014",
      "Aprobado": "$564,224.72",
      "Ejercido": "$342,138.57",
      "Variación": -39.4
    },
    {
      "Periodo": "2015",
      "Aprobado": "$847,794.87",
      "Ejercido": "$159,897.86",
      "Variación": -81.1
    },
    {
      "Periodo": "2016",
      "Aprobado": "$1,339,728.18",
      "Ejercido": "$149,793.06",
      "Variación": -88.8
    },
    {
      "Periodo": "2017",
      "Aprobado": "$1,725,276.74",
      "Ejercido": "$390,008.19",
      "Variación": -77.4
    },
    {
      "Periodo": "2018",
      "Aprobado": "$766,764.27",
      "Ejercido": "354,006.68",
      "Variación": -53.8
    }
];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Periodo";
categoryAxis.title.text = "";

// First value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "Miles de pesos";

// Second value axis
var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis2.title.text = "Valoración entre lo ejercido y lo Aprobado";
valueAxis2.renderer.opposite = true;
// Invertir el orden de los valores de la escala
//valueAxis2.renderer.inversed = true;

// First series
var series = chart.series.push(new am4charts.LineSeries());
series.dataFields.valueY = "Aprobado";
series.dataFields.categoryX = "Periodo";
series.name = "Aprobado";
series.stroke = am4core.color('#3873B9');
series.strokeWidth = 3;
series.tooltipText = "{name}: [bold]{valueY}[/]";

//Agregar bullet a línea
var circleBullet = series.bullets.push(new am4charts.CircleBullet());
circleBullet.circle.fill = am4core.color("#3873B9");
circleBullet.circle.strokeWidth = 1;


var series3 = chart.series.push(new am4charts.LineSeries());
series3.dataFields.valueY = "Ejercido";
series3.dataFields.categoryX = "Periodo";
series3.name = "Ejercido";
series3.stroke = am4core.color('#6a9ad4');
series3.strokeWidth = 3;
series3.tooltipText = "{name}: [bold]{valueY}[/]";

//Agregar bullet a línea
var circleBullet = series3.bullets.push(new am4charts.CircleBullet());
circleBullet.circle.fill = am4core.color("#6a9ad4");
circleBullet.circle.strokeWidth = 1;

// Serie inversa
var series2 = chart.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = "Variación";
series2.dataFields.categoryX = "Periodo";
series2.name = "Variación";
series2.stroke = am4core.color('#FF0000');
series2.tooltipText = "{name}: [bold]{valueY}[/]";
series2.strokeWidth = 3;
series2.yAxis = valueAxis2;
series2.legendSettings.valueText = "{valueY}";
series2.visible = false;

//Agregar bullet a línea
var circleBullet = series2.bullets.push(new am4charts.CircleBullet());
circleBullet.circle.fill = am4core.color("#FF0000");
circleBullet.circle.strokeWidth = 1;


var bullet1 = series2.bullets.push(new am4charts.LabelBullet());
bullet1.interactionsEnabled = false;
bullet1.label.text = "{valueY.value}";
bullet1.label.fill = am4core.color("#000000");
//bullet1.label.background.fill = am4core.color("#3813B9");
bullet1.locationY = 0.01;
bullet1.label.dy = -20;


// Add legend
chart.legend = new am4charts.Legend();
// Add cursor
chart.cursor = new am4charts.XYCursor();
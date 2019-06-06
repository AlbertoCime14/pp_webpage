am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

//Colores de la gráfica
chart.colors.list = [
  am4core.color("#95C11F")
];


// Add data
chart.data = [
    {
      "Año": "1987",
      "SUPERFICIE (ha)": "949.76"
    },
    {
      "Año": "1993",
      "SUPERFICIE (ha)": "1,489.19"
    },
    //{
    //  "Año": 1993,
    //  "SUPERFICIE (ha)": "12,246.19"
    //},
    {
      "Año": "1994",
      "SUPERFICIE (ha)": "13,601.93"
    },
   
    {
      "Año": "1999",
      "SUPERFICIE (ha)": "19,285.21"
    },
    {
      "Año": "1999",
      "SUPERFICIE (ha)": "79,723.03"
    },
    
    {
      "Año": "2000",
      "SUPERFICIE (ha)": "162,847.36"
    },
    {
      "Año": "2002",
      "SUPERFICIE (ha)": "168,214.78"
    },
    {
      "Año": "2005",
      "SUPERFICIE (ha)": "237,254.07"
    },
    
    {
      "Año": "2006",
      "SUPERFICIE (ha)": "287,579.52"
    },
    {
      "Año": "2010",
      "SUPERFICIE (ha)": "342,356.24"
    },
    {
      "Año": "2011",
      "SUPERFICIE (ha)": "478,205.09"
    },
    {
      "Año": "2013",
      "SUPERFICIE (ha)": "697,412.92"
    },
    {
      "Año": "2017",
      "SUPERFICIE (ha)": "697,865.24"
    }
   ];

// Create category axis
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Año";
//categoryAxis.renderer.opposite = true;

// Create value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//valueAxis.renderer.inversed = true;
valueAxis.title.text = "";
valueAxis.renderer.minLabelPosition = 0.01;
valueAxis.min = -100000;
valueAxis.max = 750000;
valueAxis.strictMinMax = true;


// Primera gráfica inferior
var series1 = chart.series.push(new am4charts.LineSeries());
series1.dataFields.valueY = "SUPERFICIE (ha)";
series1.dataFields.categoryX = "Año";
series1.name = "SUPERFICIE (ha)";
series1.strokeWidth = 3;
series1.bullets.push(new am4charts.CircleBullet());
series1.tooltipText = "Asistencia a {name} en {categoryX}: {valueY}";
series1.legendSettings.valueText = "{valueY}";
series1.visible = false;
var bullet1 = series1.bullets.push(new am4charts.LabelBullet());
bullet1.interactionsEnabled = false;
bullet1.label.text = "{valueY.value}";
bullet1.locationY = 0.01;
bullet1.label.dy = 10;

// Add chart cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "zoomY";

// Add legend
chart.legend = new am4charts.Legend();
//chart.exporting.menu = new am4core.ExportMenu();
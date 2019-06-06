am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

chart.colors.list = [
  am4core.color("#233b3f"),
  am4core.color("#355a61"),
  am4core.color("#467983"),
  am4core.color("#5699a5")
];


chart.data = [
  {
        "Estado": "Estados Unidos Mexicanos",
        "2016": 24724,
        "2017": 30097,
        "2018": 25541
      },
      {
        "Estado": "Aguascalientes",
        "2016": 8456,
        "2017": 20186,
        "2018": 24443
      },
      {
        "Estado": "Baja Californi",
        "2016": 36112,
        "2017": 24351,
        "2018": 19467
      },
      {
        "Estado": "Baja California Sur",
        "2016": 9463,
        "2017": 31604,
        "2018": 22469
      },
      {
        "Estado": "Campeche",
        "2016": 15268,
        "2017": 17460,
        "2018": 27698
      },
      {
        "Estado": "Coahuila de Zaragoza",
        "2016": 22349,
        "2017": 20350,
        "2018": 22455
      },
      {
        "Estado": "Colima",
        "2016": 10687,
        "2017": 9230,
        "2018": 12601
      },
      {
        "Estado": "Chiapas",
        "2016": 11298,
        "2017": 14116,
        "2018": 21173
      },
      {
        "Estado": "Chihuahua",
        "2016": 44006,
        "2017": 36472,
        "2018": 40673
      },
      {
        "Estado": "Ciudad de México",
        "2016": 30891,
        "2017": 25889,
        "2018": 34111
      },
      {
        "Estado": "Durango",
        "2016": 9570,
        "2017": 23365,
        "2018": 46676
      },
      {
        "Estado": "Guanajuato",
        "2016": 28422,
        "2017": 17259,
        "2018": 13245
      },
      {
        "Estado": "Guerrero",
        "2016": 31384,
        "2017": 14819,
        "2018": 22613
      },
      {
        "Estado": "Hidalgo",
        "2016": 13027,
        "2017": 26962,
        "2018": 24552
      },
      {
        "Estado": "Jalisco",
        "2016": 32437,
        "2017": 22332,
        "2018": 25129
      },
      {
        "Estado": "Estado de México",
        "2016": 24824,
        "2017": 62160,
        "2018": 21124
      },
      {
        "Estado": "Michoacán de Ocampo",
        "2016": 20752,
        "2017": 29144,
        "2018": 26727
      },
      {
        "Estado": "Morelos",
        "2016": 41501,
        "2017": 29740,
        "2018": 29689
      },
      {
        "Estado": "Nayarit",
        "2016": 16824,
        "2017": 9879,
        "2018": 21640
      },
      {
        "Estado": "Nuevo León",
        "2016": 8745,
        "2017": 16292,
        "2018": 22559
      },
      {
        "Estado": "Oaxaca",
        "2016": 27195,
        "2017": 19414,
        "2018": 24780
      },
      {
        "Estado": "Puebla",
        "2016": 39890,
        "2017": 28296,
        "2018": 13406
      },
      {
        "Estado": "Querétaro",
        "2016": 12877,
        "2017": 28905,
        "2018": 20663
      },
      {
        "Estado": "Quintana Roo",
        "2016": 37310,
        "2017": 18186,
        "2018": 22046
      },
      {
        "Estado": "San Luis Potosí",
        "2016": 31904,
        "2017": 15684,
        "2018": 28007
      },
      {
        "Estado": "Sinaloa",
        "2016": 20045,
        "2017": 58232,
        "2018": 40682
      },
      {
        "Estado": "Sonora",
        "2016": 9458,
        "2017": 33256,
        "2018": 61652
      },
      {
        "Estado": "Tabasco",
        "2016": 20115,
        "2017": 16343,
        "2018": 26861
      },
      {
        "Estado": "Tamaulipas",
        "2016": 11274,
        "2017": 10441,
        "2018": 17083
      },
      {
        "Estado": "Tlaxcala",
        "2016": 21718,
        "2017": 28711,
        "2018": 23364
      },
      {
        "Estado": "Veracruz de Ignacio de la Llave",
        "2016": 14843,
        "2017": 10461,
        "2018": 14277
      },
      {
        "Estado": "[font-size: 20px;font-weight: bold]Yucatán[/]",
        "2016": 18505,
        "2017": 21584,
        "2018": 19158
      },
      {
        "Estado": "Zacatecas",
        "2016": 26729,
        "2017": 13252,
        "2018": 14721
      }
];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Estado";
categoryAxis.title.text = "Estados por año";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 40;
categoryAxis.renderer.cellStartLocation = 0.1;
categoryAxis.renderer.cellEndLocation = 0.9;
categoryAxis.renderer.labels.template.rotation = -90;
categoryAxis.renderer.grid.template.disabled = true;

categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";


var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.title.text = "";

// Create series
function createSeries(field, name, stacked) {
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "Estado";
    series.name = name;
    series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
    series.stacked = stacked;
    series.columns.template.width = am4core.percent(100);
}

//createSeries("a1", "Año", false);
createSeries("2016", "2016", false);
createSeries("2017", "2017", false);
createSeries("2018", "2018", false);

// Add legend
chart.legend = new am4charts.Legend();
//chart.exporting.menu = new am4core.ExportMenu();
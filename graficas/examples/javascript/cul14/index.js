am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);


chart.data = [
  {
    "Entidad": "Jalisco",
    "Oro": 173,
    "Plata": 101,
    "Bronce": 61
  },
  {
    "Entidad": "Nuevo León",
    "Oro": 158,
    "Plata": 101,
    "Bronce": 70
  },
  {
    "Entidad": "Estado de México",
    "Oro": 85,
    "Plata": 66,
    "Bronce": 46
  },
  {
    "Entidad": "Querétaro",
    "Oro": 57,
    "Plata": 35,
    "Bronce": 33
  },
  {
    "Entidad": "Sinaloa",
    "Oro": 55,
    "Plata": 48,
    "Bronce": 39
  },
  {
    "Entidad": "Aguascalientes",
    "Oro": 49,
    "Plata": 31,
    "Bronce": 8
  },
  {
    "Entidad": "Sonora",
    "Oro": 47,
    "Plata": 30,
    "Bronce": 10
  },
  {
    "Entidad": "Guanajuato",
    "Oro": 44,
    "Plata": 22,
    "Bronce": 7
  },
  {    
    "Entidad": "[font-size: 20px;font-weight: bold]Yucatán[/]",
    "Oro": 41,
    "Plata": 17,
    "Bronce": 10
  },
  {
    "Entidad": "Veracruz",
    "Oro": 40,
    "Plata": 11,
    "Bronce": 10
  },
  {
    "Entidad": "Puebla",
    "Oro": 38,
    "Plata": 29,
    "Bronce": 18
  },
  {
    "Entidad": "Ciudad de México",
    "Oro": 30,
    "Plata": 29,
    "Bronce": 16
  },
  {
    "Entidad": "Morelos",
    "Oro": 20,
    "Plata": 7,
    "Bronce": 6
  },
  {
    "Entidad": "Hidalgo",
    "Oro": 19,
    "Plata": 18,
    "Bronce": 6
  },
  {
    "Entidad": "Chihuahua",
    "Oro": 19,
    "Plata": 6,
    "Bronce": 5
  },
  {
    "Entidad": "Michoacán",
    "Oro": 18,
    "Plata": 28,
    "Bronce": 18
  },
  {
    "Entidad": "Tamaulipas",
    "Oro": 16,
    "Plata": 11,
    "Bronce": 8
  },
  {
    "Entidad": "Quintana Roo",
    "Oro": 16,
    "Plata": 4,
    "Bronce": 9
  },
  {
    "Entidad": "Campeche",
    "Oro": 14,
    "Plata": 3,
    "Bronce": 4
  },
  {
    "Entidad": "San Luis Potosí",
    "Oro": 12,
    "Plata": 8,
    "Bronce": 7
  },
  {
    "Entidad": "Durango",
    "Oro": 11,
    "Plata": 9,
    "Bronce": 11
  },
  {
    "Entidad": "Coahuila",
    "Oro": 10,
    "Plata": 11,
    "Bronce": 9
  },
  {
    "Entidad": "Tabasco",
    "Oro": 10,
    "Plata": 7,
    "Bronce": 4
  },
  {
    "Entidad": "Colima",
    "Oro": 9,
    "Plata": 16,
    "Bronce": 14
  },
  {
    "Entidad": "Nayarit",
    "Oro": 9,
    "Plata": 5,
    "Bronce": 3
  },
  {
    "Entidad": "Tlaxcala",
    "Oro": 7,
    "Plata": 6,
    "Bronce": 7
  },
  {
    "Entidad": "Baja California Sur",
    "Oro": 7,
    "Plata": 3,
    "Bronce": 0
  },
  {
    "Entidad": "Baja California",
    "Oro": 5,
    "Plata": 8,
    "Bronce": 3
  },
  {
    "Entidad": "Oaxaca",
    "Oro": 5,
    "Plata": 2,
    "Bronce": 7
  },
  {
    "Entidad": "Chiapas",
    "Oro": 2,
    "Plata": 6,
    "Bronce": 5
  },
  {
    "Entidad": "UNAM",
    "Oro": 2,
    "Plata": 1,
    "Bronce": 0
  },
  {
    "Entidad": "Zacatecas",
    "Oro": 1,
    "Plata": 2,
    "Bronce": 4
  },
  {
    "Entidad": "Guerrero",
    "Oro": 1,
    "Plata": 1,
    "Bronce": 0
  }
 ];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Entidad";
categoryAxis.title.text = "";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 20;
categoryAxis.renderer.cellStartLocation = 0.1;
categoryAxis.renderer.cellEndLocation = 0.9;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.title.text = "";

// Create series
function createSeries(field, name, stacked, color) {
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "Entidad";
    series.name = name;
    series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
    series.stacked = stacked;
    series.columns.template.width = am4core.percent(95);
    series.fill = am4core.color(color);
    var bullet1 = series.bullets.push(new am4charts.LabelBullet());
bullet1.interactionsEnabled = false;
bullet1.label.text = "{valueY.value}";
bullet1.label.fill = am4core.color("#ffffff");
bullet1.locationY = 0.5;
}



createSeries("Oro", "Oro", true, "#43355b");
createSeries("Plata", "Plata", true, "#695292");
createSeries("Bronce", "Bronce", true, "#9580ba");

// Add legend
chart.legend = new am4charts.Legend();

//Etiquetas debajo de la barra vertical centradas
categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;

//chart.exporting.menu = new am4core.ExportMenu();
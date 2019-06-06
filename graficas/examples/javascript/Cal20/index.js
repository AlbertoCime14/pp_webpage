am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);


chart.data = [
  {
    "Entidad federativa": "Aguascalientes",
    "Severa": 3.86,
    "Moderada": 10.29,
    "Leve": 79.46
  },
  {
    "Entidad federativa": "Baja California",
    "Severa": 6.83,
    "Moderada": 3.91,
    "Leve": 36.68
  },
  {
    "Entidad federativa": "Baja California Sur",
    "Severa": 5.56,
    "Moderada": 5.43,
    "Leve": 68.9
  },
  {
    "Entidad federativa": "Campeche",
    "Severa": 4.92,
    "Moderada": 9.3,
    "Leve": 62.78
  },
  {
    "Entidad federativa": "Coahuila",
    "Severa": 2.41,
    "Moderada": 3.07,
    "Leve": 40.66
  },
  {
    "Entidad federativa": "Colima",
    "Severa": 8.56,
    "Moderada": 19.12,
    "Leve": 126.5
  },
  {
    "Entidad federativa": "Chiapas",
    "Severa": 4.38,
    "Moderada": 11.98,
    "Leve": 54.76
  },
  {
    "Entidad federativa": "Chihuahua",
    "Severa": 10.36,
    "Moderada": 15.18,
    "Leve": 77.92
  },
  {
    "Entidad federativa": "Ciudad de México",
    "Severa": 3.99,
    "Moderada": 9.01,
    "Leve": 53.79
  },
  {
    "Entidad federativa": "Durango",
    "Severa": 1.89,
    "Moderada": 6.34,
    "Leve": 53.41
  },
  {
    "Entidad federativa": "Guanajuato",
    "Severa": 2.13,
    "Moderada": 3.67,
    "Leve": 42.63
  },
  {
    "Entidad federativa": "Guerrero",
    "Severa": 9.73,
    "Moderada": 17.13,
    "Leve": 118.62
  },
  {
    "Entidad federativa": "Hidalgo",
    "Severa": 7.36,
    "Moderada": 15.91,
    "Leve": 151.57
  },
  {
    "Entidad federativa": "Jalisco",
    "Severa": 4.41,
    "Moderada": 7.87,
    "Leve": 65.02
  },
  {
    "Entidad federativa": "México",
    "Severa": 3.1,
    "Moderada": 12.66,
    "Leve": 60.91
  },
  {
    "Entidad federativa": "Michoacán",
    "Severa": 2.21,
    "Moderada": 5.77,
    "Leve": 51.35
  },
  {
    "Entidad federativa": "Morelos",
    "Severa": 4.73,
    "Moderada": 15.47,
    "Leve": 133.5
  },
  {
    "Entidad federativa": "Nayarit",
    "Severa": 5.12,
    "Moderada": 10.88,
    "Leve": 63.15
  },
  {
    "Entidad federativa": "Nuevo León",
    "Severa": 1.87,
    "Moderada": 2.47,
    "Leve": 24.57
  },
  {
    "Entidad federativa": "Oaxaca",
    "Severa": 5.22,
    "Moderada": 10.17,
    "Leve": 91
  },
  {
    "Entidad federativa": "Puebla",
    "Severa": 4.61,
    "Moderada": 19.72,
    "Leve": 87.11
  },
  {
    "Entidad federativa": "Querétaro",
    "Severa": 1.79,
    "Moderada": 6.3,
    "Leve": 39.21
  },
  {
    "Entidad federativa": "Quintana Roo",
    "Severa": 4.21,
    "Moderada": 5.89,
    "Leve": 45.47
  },
  {
    "Entidad federativa": "San Luis Potosí",
    "Severa": 3.71,
    "Moderada": 10.35,
    "Leve": 90.33
  },
  {
    "Entidad federativa": "Sinaloa",
    "Severa": 8.04,
    "Moderada": 17.03,
    "Leve": 82.14
  },
  {
    "Entidad federativa": "Sonora",
    "Severa": 5.38,
    "Moderada": 6.28,
    "Leve": 52.89
  },
  {
    "Entidad federativa": "Tabasco",
    "Severa": 5.02,
    "Moderada": 6.62,
    "Leve": 46.52
  },
  {
    "Entidad federativa": "Tamaulipas",
    "Severa": 7.15,
    "Moderada": 7.78,
    "Leve": 63.35
  },
  {
    "Entidad federativa": "Tlaxcala",
    "Severa": 1.68,
    "Moderada": 2.74,
    "Leve": 68.85
  },
  {
    "Entidad federativa": "Veracruz",
    "Severa": 4.18,
    "Moderada": 10.41,
    "Leve": 59.22
  },
  {
    "Entidad federativa": "Yucatán",
    "Severa": 8.19,
    "Moderada": 14.08,
    "Leve": 100.7
  },
  {
    "Entidad federativa": "Zacatecas",
    "Severa": 8.69,
    "Moderada": 23.62,
    "Leve": 109.85
  }
 ];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Entidad federativa";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 1;
categoryAxis.renderer.cellStartLocation = 0.1;
categoryAxis.renderer.cellEndLocation = 0.9;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.title.text = "Casos de desnutrición por cada 100 mil habitantes";

// Create series
function createSeries(field, name, stacked, color) {
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "Entidad federativa";
    series.name = name;
    series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
    series.stacked = stacked;
    series.stroke = am4core.color(color);
    series.columns.template.width = am4core.percent(95);
    series.columns.template.fill = am4core.color(color);

    if(name == "Leve" || name == "Moderada")
    {
      var bullet1 = series.bullets.push(new am4charts.LabelBullet());
      bullet1.interactionsEnabled = false;
      bullet1.label.text = "{valueY}";
      bullet1.label.fill = am4core.color("#ffffff");
      bullet1.locationY = 0.5;      
      bullet1.label.truncate = false;
      bullet1.label.hideOversized = false;
      if(name == "Leve") { bullet1.label.rotation = -90; bullet1.label.fontSize = 13;}
      else bullet1.label.fontSize = 10;

    }


}

createSeries("Severa", "Severa", false, "#0C3F6C");
createSeries("Moderada", "Moderada", true, "#1261a6");
createSeries("Leve", "Leve", true, "#84BFF4");


// Add legend
chart.legend = new am4charts.Legend();

//Etiquetas debajo de la barra vertical centradas
categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;
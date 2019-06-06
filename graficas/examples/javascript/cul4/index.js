am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);


chart.data = [
    {      
      "Estado": "[font-size: 20px;font-weight: bold]Yucatán[/]",
      "Se considera completa o parcialmente": 68.016784,
      "No se considera": 29.669865,
      "No sabe": 1.885727,
      "No especificado": 0.427623
    },
    {
      "Estado": "Oaxaca",
      "Se considera completa o parcialmente": 67.254452,
      "No se considera": 29.318386,
      "No sabe": 1.287511,
      "No especificado": 2.139652
    },
    {
      "Estado": "Quintana Roo",
      "Se considera completa o parcialmente": 46.515828,
      "No se considera": 50.630277,
      "No sabe": 2.110735,
      "No especificado": 0.743159
    },
    {
      "Estado": "Campeche",
      "Se considera completa o parcialmente": 45.998082,
      "No se considera": 51.479502,
      "No sabe": 2.112606,
      "No especificado": 0.409809
    },
    {
      "Estado": "Hidalgo",
      "Se considera completa o parcialmente": 37.665003,
      "No se considera": 60.047006,
      "No sabe": 1.648988,
      "No especificado": 0.639003
    },
    {
      "Estado": "Puebla",
      "Se considera completa o parcialmente": 37.17605,
      "No se considera": 60.849849,
      "No sabe": 1.282258,
      "No especificado": 0.691843
    },
    {
      "Estado": "Chiapas",
      "Se considera completa o parcialmente": 37.146611,
      "No se considera": 61.501161,
      "No sabe": 0.729334,
      "No especificado": 0.622893
    },
    {
      "Estado": "Guerrero",
      "Se considera completa o parcialmente": 35.430458,
      "No se considera": 62.295631,
      "No sabe": 1.667246,
      "No especificado": 0.606665
    },
    {
      "Estado": "Veracruz",
      "Se considera completa o parcialmente": 31.105337,
      "No se considera": 66.160107,
      "No sabe": 2.16133,
      "No especificado": 0.573226
    },
    {
      "Estado": "Morelos",
      "Se considera completa o parcialmente": 30.181462,
      "No se considera": 67.256729,
      "No sabe": 1.882172,
      "No especificado": 0.679637
    },
    {
      "Estado": "Michoacán",
      "Se considera completa o parcialmente": 29.686718,
      "No se considera": 67.812666,
      "No sabe": 1.870554,
      "No especificado": 0.630062
    },
    {
      "Estado": "Tabasco",
      "Se considera completa o parcialmente": 27.249974,
      "No se considera": 70.568186,
      "No sabe": 1.380762,
      "No especificado": 0.801078
    },
    {
      "Estado": "Tlaxcala",
      "Se considera completa o parcialmente": 27.067825,
      "No se considera": 71.002721,
      "No sabe": 1.303377,
      "No especificado": 0.626077
    },
    {
      "Estado": "San Luis Potosí",
      "Se considera completa o parcialmente": 24.860992,
      "No se considera": 73.236638,
      "No sabe": 1.273153,
      "No especificado": 0.629218
    },
    {
      "Estado": "Nayarit",
      "Se considera completa o parcialmente": 23.600694,
      "No se considera": 74.644681,
      "No sabe": 1.245925,
      "No especificado": 0.5087
    },
    {
      "Estado": "Promedio nacional",
      "Se considera completa o parcialmente": 23.089394,
      "No se considera": 74.665327,
      "No sabe": 1.279739,
      "No especificado": 0.965541
    },
    {
      "Estado": "Colima",
      "Se considera completa o parcialmente": 22.168482,
      "No se considera": 75.285806,
      "No sabe": 1.804186,
      "No especificado": 0.741527
    },
    {
      "Estado": "Querétaro",
      "Se considera completa o parcialmente": 21.478218,
      "No se considera": 76.151949,
      "No sabe": 1.474069,
      "No especificado": 0.895764
    },
    {
      "Estado": "Sonora",
      "Se considera completa o parcialmente": 19.441995,
      "No se considera": 77.887508,
      "No sabe": 1.34402,
      "No especificado": 1.326478
    },
    {
      "Estado": "México",
      "Se considera completa o parcialmente": 18.561044,
      "No se considera": 79.224645,
      "No sabe": 1.073821,
      "No especificado": 1.14049
    },
    {
      "Estado": "Baja California Sur",
      "Se considera completa o parcialmente": 16.117602,
      "No se considera": 81.36663,
      "No sabe": 1.479715,
      "No especificado": 1.036053
    },
    {
      "Estado": "Sinaloa",
      "Se considera completa o parcialmente": 14.308026,
      "No se considera": 84.134252,
      "No sabe": 0.905532,
      "No especificado": 0.652188
    },
    {
      "Estado": "Aguascalientes",
      "Se considera completa o parcialmente": 13.112779,
      "No se considera": 85.241485,
      "No sabe": 1.194169,
      "No especificado": 0.451566
    },
    {
      "Estado": "Chihuahua",
      "Se considera completa o parcialmente": 12.838985,
      "No se considera": 83.608692,
      "No sabe": 0.790705,
      "No especificado": 2.761618
    },
    {
      "Estado": "Jalisco",
      "Se considera completa o parcialmente": 12.689032,
      "No se considera": 85.323493,
      "No sabe": 1.106385,
      "No especificado": 0.88109
    },
    {
      "Estado": "Ciudad de México",
      "Se considera completa o parcialmente": 10.764619,
      "No se considera": 87.273549,
      "No sabe": 0.799302,
      "No especificado": 1.16253
    },
    {
      "Estado": "Guanajuato",
      "Se considera completa o parcialmente": 10.395449,
      "No se considera": 87.562809,
      "No sabe": 1.32404,
      "No especificado": 0.717703
    },
    {
      "Estado": "Baja California",
      "Se considera completa o parcialmente": 9.694472,
      "No se considera": 88.409224,
      "No sabe": 1.076222,
      "No especificado": 0.820082
    },
    {
      "Estado": "Durango",
      "Se considera completa o parcialmente": 9.450156,
      "No se considera": 88.657726,
      "No sabe": 1.108076,
      "No especificado": 0.784042
    },
    {
      "Estado": "Zacatecas",
      "Se considera completa o parcialmente": 8.936056,
      "No se considera": 89.238157,
      "No sabe": 1.089343,
      "No especificado": 0.736445
    },
    {
      "Estado": "Nuevo León",
      "Se considera completa o parcialmente": 8.033102,
      "No se considera": 89.675562,
      "No sabe": 1.028283,
      "No especificado": 1.263052
    },
    {
      "Estado": "Coahuila",
      "Se considera completa o parcialmente": 7.901344,
      "No se considera": 89.828777,
      "No sabe": 1.152419,
      "No especificado": 1.11746
    },
    {
      "Estado": "Tamaulipas",
      "Se considera completa o parcialmente": 7.597703,
      "No se considera": 89.832606,
      "No sabe": 1.116193,
      "No especificado": 1.453498
    }
   ];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Estado";
categoryAxis.title.text = "Hombres y mujeres por sector";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 1;
categoryAxis.renderer.cellStartLocation = 0.1;
categoryAxis.renderer.cellEndLocation = 0.9;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.title.text = "";

chart.colors.list = [
  am4core.color("#43355b"),
  am4core.color("#6d5597"),
  am4core.color("#9d89c0"),
  am4core.color("#bdafd5")
];

// Create series
function createSeries(field, name, stacked) {
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "Estado";
    series.name = name;
    series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
    series.stacked = stacked;
    series.columns.template.width = am4core.percent(95);
}

createSeries("Se considera completa o parcialmente", "Se considera completa o parcialmente", false);
createSeries("No se considera", "No se considera", true);
createSeries("No sabe", "No sabe", true);
createSeries("No especificado", "No especificado", true);

// Add legend
chart.legend = new am4charts.Legend();

//Etiquetas debajo de la barra vertical centradas
categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;
//chart.exporting.menu = new am4core.ExportMenu();
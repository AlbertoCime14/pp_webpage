am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.PieChart);


chart.data = [
  {
    "lugar": "Catedral",
    "value": 7117
  },
  {
    "lugar": "Casa de Montejo",
    "value": 5676
  },
  {
    "lugar": "Paseo Montejo",
    "value": 4198
  },
  {
    "lugar": "Monumento a la Patria",
    "value": 3642
  },
  {
    "lugar": "Zona Arqueológica de Dzibilchaltún",
    "value": 3443
  },
  {
    "lugar": "Teatro Peón Contreras",
    "value": 3381
  },
  {
    "lugar": "Haciendas",
    "value": 3117
  },
  {
    "lugar": "Ateneo Peninsular",
    "value": 2865
  },
  {
    "lugar": "Plaza Grande",
    "value": 2692
  },
  {
    "lugar": "XEFC,La Voz en Yucatán desde Mérida",
    "value": 2514
  },
  {
    "lugar": "Edificio Central de la UADY",
    "value": 2272
  },
  {
    "lugar": "Palacio Cantón",
    "value": 1638
  },
  {
    "lugar": "Parque de las Américas",
    "value": 1441
  },
  {
    "lugar": "Trova Yucateca",
    "value": 1219
  },
  {
    "lugar": "Cementerio General y el Paseo de las Ánimas",
    "value": 1097
  },
  {
    "lugar": "Casas gemelas",
    "value": 1034
  },
  {
    "lugar": "Otros",
    "value": 10472
  } 
];

chart.innerRadius = am4core.percent(50);

var series = chart.series.push(new am4charts.PieSeries());
series.dataFields.value = "value";
series.dataFields.category = "lugar";



series.labels.template.bent = true;
series.labels.template.radius = 4;

series.slices.template.states.getKey("hover").properties.scale = 1.1;
series.labels.template.states.create("hover").properties.fill = am4core.color("#000000");



//chart.legend = new am4charts.Legend();
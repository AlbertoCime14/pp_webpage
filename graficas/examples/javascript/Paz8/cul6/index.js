am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.PieChart);


chart.data = [
    {
        "country": "Sinaloa",
        "value": 672
      },
      {
        "country": "Oaxaca",
        "value": 390
      },
      {
        "country": "Sonora",
        "value": 379
      },
      {
        "country": "Baja California",
        "value": 343
      },
      {
        "country": "Puebla",
        "value": 231
      },
      {
        "country": "Michoacán",
        "value": 221
      },
      {
        "country": "Veracruz",
        "value": 218
      },
      {
        "country": "Jalisco",
        "value": 189
      },
      {
        "country": "Yucatán",
        "value": 188
      },
      {
        "country": "Ciudad de México",
        "value": 179
      },
      {
        "country": "Guanajuato",
        "value": 101
      },
      {
        "country": "Zacatecas",
        "value": 93
      },
      {
        "country": "Hidalgo",
        "value": 53
      },
      {
        "country": "Resto de entidades",
        "value": 264
      }
];

chart.innerRadius = am4core.percent(50);

var series = chart.series.push(new am4charts.PieSeries());
series.dataFields.value = "value";
series.dataFields.category = "country";



series.labels.template.bent = true;
series.labels.template.radius = 4;

series.slices.template.states.getKey("hover").properties.scale = 1.1;
series.labels.template.states.create("hover").properties.fill = am4core.color("#000000");



//chart.legend = new am4charts.Legend();
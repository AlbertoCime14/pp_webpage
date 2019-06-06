am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.PieChart);

chart.data = [
    {
        "country": "Sinaloa",
        "value": 672,
        "color":"#43355b"
      },
      {
        "country": "Oaxaca",
        "value": 390,
        "color":"#43355b"
      },
      {
        "country": "Sonora",
        "value": 379,
        "color":"#43355b"
      },
      {
        "country": "Baja California",
        "value": 343,
        "color":"#43355b"
      },
      {
        "country": "Puebla",
        "value": 231,
        "color":"#43355b"
      },
      {
        "country": "Michoacán",
        "value": 221,
        "color":"#43355b"
      },
      {
        "country": "Veracruz",
        "value": 218,
        "color":"#43355b"
      },
      {
        "country": "Jalisco",
        "value": 189,
        "color":"#43355b"
      },
      {
        "country": "Yucatán",
        "value": 188,
        "color":"#43355b"
      },
      {
        "country": "Ciudad de México",
        "value": 179,
        "color":"#43355b"
      },
      {
        "country": "Guanajuato",
        "value": 101,
        "color":"#43355b"
      },
      {
        "country": "Zacatecas",
        "value": 93,
        "color":"#43355b"
      },
      {
        "country": "Hidalgo",
        "value": 53,
        "color":"#43355b"
      },
      {
        "country": "Resto de entidades",
        "value": 264,
        "color":"#43355b"
      }
];


chart.innerRadius = am4core.percent(50);
/*
chart.colors.list = [
  am4core.color("#43355b"),
  am4core.color("#4b3b66"),
  am4core.color("#534272"),
  am4core.color("#5c487e"),
  
  am4core.color("#644e8a"),
  am4core.color("#6c5496"),
  am4core.color("#745aa2"),
  am4core.color("#7e65aa"),
  am4core.color("#8870b1"),
  am4core.color("#917cb8"),
  am4core.color("#9b87be"),
  am4core.color("#a593c5"),
  am4core.color("#af9ecc"),
  am4core.color("#b9aad2")
];*/



var series = chart.series.push(new am4charts.PieSeries());
series.dataFields.value = "value";
series.dataFields.category = "country";

var colorSet = new am4core.ColorSet();
colorSet.list = ["#43355b", "#4b3b66", "#534272", "#5c487e", "#644e8a","#6c5496", "#745aa2", "#7e65aa", "#8870b1", "#917cb8","#9b87be", "#a593c5", "#af9ecc", "#b9aad2"].map(function(color) {
  return new am4core.color(color);
});
series.colors = colorSet;



series.labels.template.bent = true;
series.labels.template.radius = 4;

series.slices.template.states.getKey("hover").properties.scale = 1.1;
series.labels.template.states.create("hover").properties.fill = am4core.color("#000000");
chart.exporting.menu = new am4core.ExportMenu();



//chart.legend = new am4charts.Legend();
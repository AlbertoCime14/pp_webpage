
am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.PieChart);

chart.data = [
    {
        "trabajadores": "Biología Y Química",
        "porcentaje": 6
      },
      {
        "trabajadores": "Biotecnología Y Ciencias Agropecuarias",
        "porcentaje": 6
      },
      {
        "trabajadores": "Ciencias Sociales",
        "porcentaje": 6
      },
      {
        "trabajadores": "Físico Matemáticas y Ciencias de la Tierra",
        "porcentaje": 5
      },
      {
        "trabajadores": "Humanidades Y Ciencias de la Conducta",
        "porcentaje": 10
      },
      {
        "trabajadores": "Ingenierías",
        "porcentaje": 9
      },
      {
        "trabajadores": "Medicina Y Ciencias de la Salud",
        "porcentaje": 7
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
series.dataFields.value = "porcentaje";
series.dataFields.category = "trabajadores";

var colorSet = new am4core.ColorSet();
colorSet.list = ["#035877","#03688c","#0378a1","#0387b6","#0397cc","#03a7e1","#03b6f7","#11bffd","#26c5fe","#3bcbfe","#50d1ff"].map(function(color) {
  return new am4core.color(color);
});
series.colors = colorSet;



series.labels.template.bent = true;
series.labels.template.radius = 4;

series.slices.template.states.getKey("hover").properties.scale = 1.1;
series.labels.template.states.create("hover").properties.fill = am4core.color("#000000");
//chart.exporting.menu = new am4core.ExportMenu();

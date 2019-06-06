

am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.PieChart);


chart.data = [
  {
    "country": "Emplea transporte público",
    "value": "35.4%"
  },
  {
    "country": "Utiliza vehículos particulares",
    "value": "31.6%"
  },
  {
    "country": "Utilizan bicicleta",
    "value": "13.4%"
  },
  {
    "country": "Camina para llegar al trabajo",
    "value": "12.0%"
  },
  {
    "country": "Transporte proporcionado por la empresa",
    "value": "3.9%"
  },
  {
    "country": "No especificado",
    "value": "3.7%"
  }
 ];


chart.innerRadius = am4core.percent(50);

var series = chart.series.push(new am4charts.PieSeries());
series.dataFields.value = "value";
series.dataFields.category = "country";

var colorSet = new am4core.ColorSet();
colorSet.list = ["#40520F", "#627E16", "#95C11F", "#A6D822"].map(function (color) {
    return new am4core.color(color);
});
series.colors = colorSet;




series.labels.template.bent = true;
series.labels.template.radius = 4;

series.slices.template.states.getKey("hover").properties.scale = 1.1;
series.labels.template.states.create("hover").properties.fill = am4core.color("#000000");
//chart.exporting.menu = new am4core.ExportMenu();
chart.legend = new am4charts.Legend();
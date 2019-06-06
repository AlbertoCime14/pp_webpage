am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv", am4charts.PieChart3D);
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

chart.legend = new am4charts.Legend();

chart.data = [
  {
    "Tipo de transporte": "Emplea transporte público",
    "Porcentaje de población que trabaja y se traslada al lugar según medio de transporte": "35.4%"
  },
  {
    "Tipo de transporte": "Utiliza vehículos particulares",
    "Porcentaje de población que trabaja y se traslada al lugar según medio de transporte": "31.6%"
  },
  {
    "Tipo de transporte": "Utilizan bicicleta",
    "Porcentaje de población que trabaja y se traslada al lugar según medio de transporte": "13.4%"
  },
  {
    "Tipo de transporte": "Camina para llegar al trabajo",
    "Porcentaje de población que trabaja y se traslada al lugar según medio de transporte": "12.0%"
  },
  {
    "Tipo de transporte": "Transporte proporcionado por la empresa",
    "Porcentaje de población que trabaja y se traslada al lugar según medio de transporte": "3.9%"
  },
  {
    "Tipo de transporte": "No especificado",
    "Porcentaje de población que trabaja y se traslada al lugar según medio de transporte": "3.7%"
  }
 ];

var series = chart.series.push(new am4charts.PieSeries3D());
series.dataFields.value = "Porcentaje de población que trabaja y se traslada al lugar según medio de transporte";
series.dataFields.category = "Tipo de transporte";

var colorSet = new am4core.ColorSet();
colorSet.list = ["#40520F", "#627E16","#95C11F", "#A6D822"].map(function(color) {
  return new am4core.color(color);
});
series.colors = colorSet;

// This creates initial animation
/*pieSeries.hiddenState.properties.opacity = 1;
pieSeries.hiddenState.properties.endAngle = -90;
pieSeries.hiddenState.properties.startAngle = -90;*/
chart.exporting.menu = new am4core.ExportMenu();
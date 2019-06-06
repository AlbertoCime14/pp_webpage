am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);


chart.data = [
 {
   "Entidad": "Promedio",
   "Porcentaje": 73.9
 },
 {
   "Entidad": "Yucatán",
   "Porcentaje": 68.5
 }
];

chart.padding(40, 40, 40, 40);

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "Entidad";
categoryAxis.renderer.minGridDistance = 0.1;
categoryAxis.renderer.labels.template.rotation = 0;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.max = 80;
valueAxis.strictMinMax = true;


var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryX = "Entidad";
series.dataFields.valueY = "Porcentaje";
series.tooltipText = "{valueY.value}%"
series.columns.template.strokeOpacity = 0;
series.fill = am4core.color("#95C11F"); //chart.colors.getIndex(11);
//Valores de las barras verticales
var valueLabel = series.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY}%";
valueLabel.label.dy = -20;


chart.cursor = new am4charts.XYCursor();

//chart.exporting.menu = new am4core.ExportMenu();
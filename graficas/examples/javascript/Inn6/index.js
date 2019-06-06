
am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);


chart.data = [
    {
      "estado": "CIUDAD DE MÉXICO",
      "opacity": 0.5,
      "Promedio Nacional": 3,
      "valor": 11
    },
    {
        "estado": "JALISCO",
        "opacity": 0.5,
        "Promedio Nacional": 3,
        "valor": 6
      },
      {
        "estado": "QUERÉTARO",
        "opacity": 0.5,
        "Promedio Nacional": 3,
        "valor": 5
      },
      {
        "estado": "NUEVO LEÓN",
        "opacity": 0.5,
        "Promedio Nacional": 3,
        "valor": 4
      },
      {
        "estado": "PUEBLA",
        "opacity": 0.5,
        "Promedio Nacional": 3,
        "valor": 3
      },
      {
        "estado": "BAJA CALIFORNIA",
        "opacity": 0.5,
        "Promedio Nacional": 3,
        "valor": 3
      },      
      {
        "estado": "CHIHUAHUA",
        "opacity": 0.5,
        "Promedio Nacional": 3,
        "valor": 2
      },
      {
        "estado": "SONORA",
        "opacity": 0.5,
        "Promedio Nacional": 3,
        "valor": 2
      },
      {
        "estado": "TAMAULIPAS",
        "opacity": 0.5,
        "Promedio Nacional": 3,
        "valor": 2
      },
      {
        "estado": "SAN LUIS POTOSÍ",
        "opacity": 0.5,
        "Promedio Nacional": 3,
        "valor": 2
      },
      {
        "estado": "MÉXICO",
        "opacity": 0.5,
        "Promedio Nacional": 3,
        "valor": 1
      },
      {
        "estado": "MICHOACÁN DE OCAMPO",
        "opacity": 0.5,
        "Promedio Nacional": 3,
        "valor": 1
      },
      {
        "estado": "CHIAPAS",
        "opacity": 0.5,
        "Promedio Nacional": 3,
        "valor": 1
      },
      {
        "estado": "GUANAJUATO",
        "opacity": 0.5,
        "Promedio Nacional": 3,
        "valor": 1
      },
      {
        "estado": "[font-size: 20px; font-weight: bold]YUCATÁN[/]",
        "opacity": 1,
        "Promedio Nacional": 3,
        "valor": 1
      },
      {
        "estado": "HIDALGO",
        "opacity": 0.5,
        "Promedio Nacional": 3,
        "valor": 1
      },
      {
        "estado": "COAHUILA DE ZARAGOZA",
        "opacity": 0.5,
        "Promedio Nacional": 3,
        "valor": 1
      },
      {
        "estado": "ZACATECAS",
        "opacity": 0.5,
        "Promedio Nacional": 3,
        "valor": 1
      }
  ];

chart.padding(40, 40, 40, 40);

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "estado";
categoryAxis.renderer.minGridDistance = 10;
categoryAxis.renderer.labels.template.rotation = -90;
categoryAxis.renderer.labels.template.dx = -25;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryX = "estado";
series.dataFields.valueY = "valor";
series.tooltipText = "{valueY.value}"
series.columns.template.strokeOpacity = 0;
series.columns.template.fill = am4core.color('#00A8E4');
series.columns.template.propertyFields.fillOpacity = "opacity";

var valueLabel = series.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY}";
valueLabel.label.dy = -10;
valueLabel.label.truncate = false;
valueLabel.label.hideOversized = false;


var lineSeries = chart.series.push(new am4charts.LineSeries());
lineSeries.dataFields.categoryX = "estado";
lineSeries.dataFields.valueY = "Promedio Nacional";
lineSeries.tooltipText = "Promedio Nacional: {valueY.value}";
lineSeries.sequencedInterpolation = true;
lineSeries.defaultState.transitionDuration = 1500;
lineSeries.stroke = am4core.color("#FF0000"); //chart.colors.getIndex(11);
lineSeries.fill = lineSeries.stroke;
lineSeries.strokeWidth = 2;

var label = chart.createChild(am4core.Label);
label.text = "Promedio Nacional: 3";
label.fontSize = 14;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(90);
label.horizontalCenter = "middle";
label.y = am4core.percent(47);

chart.cursor = new am4charts.XYCursor();

// as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
//series.columns.template.adapter.add("fill", function (fill, target) {
//  return chart.colors.getIndex(target.dataItem.index);
//});
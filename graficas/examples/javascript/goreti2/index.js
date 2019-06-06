am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);


// Add data
chart.data = [
  {
    "Año": "1970",
    "Índice de Moran 2015": 0.1673
  },
  {
    "Año": "1980",
    "Índice de Moran 2015": 0.4352
  },
  {
    "Año": "1990",
    "Índice de Moran 2015": 0.3457
  },
  {
    "Año": "2000",
    "Índice de Moran 2015": 0.4547
  },
  {
    "Año": "2010",
    "Índice de Moran 2015": 0.3143
  },
  {
    "Año": "2015",
    "Índice de Moran 2015": 0.6082
  }
 ];

 chart.padding(40, 40, 40, 40);

  var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.dataFields.category = "Año";
  categoryAxis.renderer.minGridDistance = 40;
  // Establece ancho de la columnas
  categoryAxis.renderer.cellStartLocation = 0.2;
  categoryAxis.renderer.cellEndLocation = 0.8;
 //categoryAxis.renderer.labels.template.rotation = -90;
 
 var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
 
 var series = chart.series.push(new am4charts.ColumnSeries());
 series.dataFields.categoryX = "Año";
 series.dataFields.valueY = "Índice de Moran 2015";
 series.tooltipText = "{valueY.value}";
 series.columns.template.strokeOpacity = 0;
 
 
 chart.cursor = new am4charts.XYCursor();

//Valores de las barras verticales
var valueLabel = series.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY}";
valueLabel.label.dy = -10;
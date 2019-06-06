am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

// Add data
chart.data = [
    {
      "Región": "I Poniente",
      "Indice DESCA, 2015": 64
    },
    {
      "Región": "II Noroeste",
      "Indice DESCA, 2015": 80.7
    },
    {
      "Región": "III Centro",
      "Indice DESCA, 2015": 62.69
    },
    {
      "Región": "IV Litoral Centro",
      "Indice DESCA, 2015": 67.29
    },
    {
      "Región": "V Noreste",
      "Indice DESCA, 2015": 60.04
    },
    {
      "Región": "VI Oriente",
      "Indice DESCA, 2015": 55.12
    },
    {
      "Región": "VII Sur",
      "Indice DESCA, 2015": 61.18
    }
   ];

   chart.padding(40, 40, 40, 40);

   var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
   categoryAxis.renderer.grid.template.location = 0;
   categoryAxis.dataFields.category = "Región";
   categoryAxis.renderer.minGridDistance = 40;
   categoryAxis.renderer.cellStartLocation = 0.2;
   categoryAxis.renderer.cellEndLocation = 0.8;
  // categoryAxis.renderer.labels.template.rotation = -90;
   
  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

  valueAxis.min = 0;
  valueAxis.max = 100;
  valueAxis.strictMinMax = true;
     
  var series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.categoryX = "Región";
  series.dataFields.valueY = "Indice DESCA, 2015";
  series.tooltipText = "{valueY.value}";
  series.columns.template.strokeOpacity = 0;

     
  chart.cursor = new am4charts.XYCursor();
    
  //Valores de las barras verticales
  var valueLabel = series.bullets.push(new am4charts.LabelBullet());
  valueLabel.label.text = "{valueY}";
  valueLabel.label.dy = -10;

  valueLabel.label.truncate = false;
  valueLabel.label.hideOversized = false;
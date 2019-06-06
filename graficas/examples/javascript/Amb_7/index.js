am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);


chart.data = [
    {
      "Descripcion": "Índice general",
      "Ranking": 2
    },
    {
      "Descripcion": "Resultado: Potencial de aprovechamiento forestal",
      "Ranking": 4
    },
    {
      "Descripcion": "Resultado: Sofisticación de la producción",
      "Ranking": 4
    },
    {
      "Descripcion": "Resultado: Permanencia de los bosques ",
      "Ranking": 9
    },
    {
      "Descripcion": "Resultado: Condición sociopolítica de los bosques ",
      "Ranking": 1
    }
   ];

chart.padding(40, 40, 40, 40);

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "Descripcion";
categoryAxis.renderer.minGridDistance = 40;
categoryAxis.renderer.labels.template.rotation = -90;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryX = "Descripcion";
series.dataFields.valueY = "Ranking";
series.tooltipText = "{valueY.value}";
series.columns.template.strokeOpacity = 0;


chart.cursor = new am4charts.XYCursor();

// as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
//series.columns.template.adapter.add("fill", function (fill, target) {
//	return chart.colors.getIndex(target.dataItem.index);
//});


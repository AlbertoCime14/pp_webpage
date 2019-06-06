am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

//chart.language = "";

var data = [];

chart.data = [

  {
    "Año": "2002",
    "Deportistas de alto rendimiento": 55,
    "Talento deportivo": 120
  },
  {
    "Año": "2003",
    "Deportistas de alto rendimiento": 70,
    "Talento deportivo": 558
  },
  {
    "Año": "2004",
    "Deportistas de alto rendimiento": 120,
    "Talento deportivo": 673
  },
  {
    "Año": "2005",
    "Deportistas de alto rendimiento": 160,
    "Talento deportivo": 1113
  },
  {
    "Año": "2006",
    "Deportistas de alto rendimiento": 225,
    "Talento deportivo": 1318
  },
  {
    "Año": "2007",
    "Deportistas de alto rendimiento": 248,
    "Talento deportivo": 1756
  },
  {
    "Año": "2008",
    "Deportistas de alto rendimiento": 270,
    "Talento deportivo": 2133
  },
  {
    "Año": "2009",
    "Deportistas de alto rendimiento": 285,
    "Talento deportivo": 2465
  },
  {
    "Año": "2010",
    "Deportistas de alto rendimiento": 300,
    "Talento deportivo": 2692
  },
  {
    "Año": "2011",
    "Deportistas de alto rendimiento": 847,
    "Talento deportivo": 3284
  },
  {
    "Año": "2012",
    "Deportistas de alto rendimiento": 979,
    "Talento deportivo": 3839
  },
  {
    "Año": "2013",
    "Deportistas de alto rendimiento": 1072,
    "Talento deportivo": 3839
  },
  {
    "Año": "2014",
    "Deportistas de alto rendimiento": 1242,
    "Talento deportivo": 3964
  },
  {
    "Año": "2015",
    "Deportistas de alto rendimiento": 1394,
    "Talento deportivo": 3917
  },
  {
    "Año": "2016",
    "Deportistas de alto rendimiento": 1634,
    "Talento deportivo": 3967
  },
  {
    "Año": "2017",
    "Deportistas de alto rendimiento": 1942,
    "Talento deportivo": 3898
  },
  {
    "Año": "2018",
    "Deportistas de alto rendimiento": 1563,
    "Talento deportivo": 4311
  }
];

chart.numberFormatter.numberFormat = "#.0|#.0|0.0";
chart.padding(40, 40, 40, 40);

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.ticks.template.disabled = true;
categoryAxis.renderer.line.opacity = 0;
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.minGridDistance = 40;
categoryAxis.dataFields.category = "Año";

categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.renderer.line.opacity = 0;
valueAxis.renderer.ticks.template.disabled = true;
valueAxis.min = 0;

var columnSeries = chart.series.push(new am4charts.ColumnSeries());
columnSeries.dataFields.categoryX = "Año";
columnSeries.dataFields.valueY = "Deportistas de alto rendimiento";
columnSeries.tooltipText = "Deportistas de alto rendimiento: {valueY.value}";
columnSeries.sequencedInterpolation = true;
columnSeries.defaultState.transitionDuration = 1500;
columnSeries.fill = am4core.color("#BCAFD5");//   chart.colors.getIndex(1);
columnSeries.name = "Deportistas del alto rendimiento";
var valueLabel = columnSeries.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY}";
valueLabel.label.dy = -20;

var columnTemplate = columnSeries.columns.template;
//columnTemplate.column.cornerRadiusTopLeft = 10;
//columnTemplate.column.cornerRadiusTopRight = 10;
columnTemplate.strokeWidth = 1;
columnTemplate.strokeOpacity = 1;
columnTemplate.stroke = columnSeries.fill;

var desaturateFilter = new am4core.DesaturateFilter();
desaturateFilter.saturation = 0.5;

columnTemplate.filters.push(desaturateFilter);

// first way - get properties from data. but can only be done with columns, as they are separate objects.    
columnTemplate.propertyFields.strokeDasharray = "stroke";
columnTemplate.propertyFields.fillOpacity = "opacity";

// add some cool saturation effect on hover
var desaturateFilterHover = new am4core.DesaturateFilter();
desaturateFilterHover.saturation = 1;

var hoverState = columnTemplate.states.create("hover");
hoverState.transitionDuration = 2000;
hoverState.filters.push(desaturateFilterHover);

var lineSeries = chart.series.push(new am4charts.LineSeries());
lineSeries.dataFields.categoryX = "Año";
lineSeries.dataFields.valueY = "Talento deportivo";
lineSeries.tooltipText = "Talento deportivo: {valueY.value}";
lineSeries.sequencedInterpolation = true;
lineSeries.defaultState.transitionDuration = 1500;
lineSeries.stroke = am4core.color("#43355b"); //chart.colors.getIndex(11);
lineSeries.fill = lineSeries.stroke;
lineSeries.strokeWidth = 2;
lineSeries.name = "Talento deportivo";

var valueLabel = lineSeries.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY}";
valueLabel.label.dy = -20;

// second way - add axis range.
var lineSeriesRange = categoryAxis.createSeriesRange(lineSeries);
lineSeriesRange.category = "2018";
lineSeriesRange.endCategory = "2019";
lineSeriesRange.contents.strokeDasharray = "3,3";
lineSeriesRange.locations.category = 0.5;

/*var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
bullet.fill = lineSeries.stroke;
bullet.circle.radius = 4;*/

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "none";
chart.cursor.lineX.opacity = 0;
chart.cursor.lineY.opacity = 0;
//chart.exporting.menu = new am4core.ExportMenu();
chart.numberFormatter.numberFormat = "#.";
chart.legend = new am4charts.Legend();
am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

//chart.language = "";

var data = [];

chart.data = [
  {
    "Entidad": "CiudaddeMéxico",
    "Tasadecrecimiento": 5843.9,
    "Promedionacional": 987.6
  },
  {
    "Entidad": "NuevoLeón",
    "Tasadecrecimiento": 4260.5,
    "Promedionacional": 987.6
  },
  {
    "Entidad": "Coahuila",
    "Tasadecrecimiento": 2737.8,
    "Promedionacional": 987.6
  },
  {
    "Entidad": "EstadodeMéxico",
    "Tasadecrecimiento": 2347.2,
    "Promedionacional": 987.6
  },
  {
    "Entidad": "Guanajuato",
    "Tasadecrecimiento": 2298.9,
    "Promedionacional": 987.6
  },
  {
    "Entidad": "BajaCalifornia",
    "Tasadecrecimiento": 1476.8,
    "Promedionacional": 987.6
  },
  {
    "Entidad": "Tamaulipas",
    "Tasadecrecimiento": 1371.8,
    "Promedionacional": 987.6
  },
  {
    "Entidad": "SanLuisPotosí",
    "Tasadecrecimiento": 1342.9,
    "Promedionacional": 987.6
  },
  {
    "Entidad": "Aguascalientes",
    "Tasadecrecimiento": 1140.9,
    "Promedionacional": 987.6
  },
  {
    "Entidad": "Chihuahua",
    "Tasadecrecimiento": 1137.8,
    "Promedionacional": 987.6
  },
  {
    "Entidad": "Querétaro",
    "Tasadecrecimiento": 1067.7,
    "Promedionacional": 987.6
  },
  {
    "Entidad": "Jalisco",
    "Tasadecrecimiento": 842.6,
    "Promedionacional": 987.6
  },
  {
    "Entidad": "Veracruz",
    "Tasadecrecimiento": 817.4,
    "Promedionacional": 987.6
  },
  {
    "Entidad": "Puebla",
    "Tasadecrecimiento": 594.7,
    "Promedionacional": 987.6
  },
  {
    "Entidad": "Tabasco",
    "Tasadecrecimiento": 525,
    "Promedionacional": 987.6
  },
  {
    "Entidad": "BajaCaliforniaSur",
    "Tasadecrecimiento": 433.3,
    "Promedionacional": 987.6
  },
  {
    "Entidad": "Michoacán",
    "Tasadecrecimiento": 427.2,
    "Promedionacional": 987.6
  },
  {
    "Entidad": "Oaxac",
    "Tasadecrecimiento": 426.5,
    "Promedionacional": 987.6
  },
  {
    "Entidad": "Guerrero",
    "Tasadecrecimiento": 399.7,
    "Promedionacional": 987.6
  },
  {
    "Entidad": "Sinaloa",
    "Tasadecrecimiento": 399.1,
    "Promedionacional": 987.6
  },
  {
    "Entidad": "QuintanaRoo",
    "Tasadecrecimiento": 274.6,
    "Promedionacional": 987.6
  },
  {
    "Entidad": "Morelos",
    "Tasadecrecimiento": 254.5,
    "Promedionacional": 987.6
  },
  {
    "Entidad": "Zacatecas",
    "Tasadecrecimiento": 242.9,
    "Promedionacional": 987.6
  },
  {
    "Entidad": "Durango",
    "Tasadecrecimiento": 170.4,
    "Promedionacional": 987.6
  },
  {
    "Entidad": "Hidalgo",
    "Tasadecrecimiento": 148.5,
    "Promedionacional": 987.6
  },
  {
    "Entidad": "Campeche",
    "Tasadecrecimiento": 111.3,
    "Promedionacional": 987.6
  },
  {
    "Entidad": "Tlaxcala",
    "Tasadecrecimiento": 100.9,
    "Promedionacional": 987.6
  },
  {
    "Entidad": "Colima",
    "Tasadecrecimiento": 97.5,
    "Promedionacional": 987.6
  },
  {
    "Entidad": "Nayarit",
    "Tasadecrecimiento": 94.9,
    "Promedionacional": 987.6
  },
  {
    "Entidad": "Sonora",
    "Tasadecrecimiento": 80.8,
    "Promedionacional": 987.6
  },
  {
    "Entidad": "Yucatán",
    "Tasadecrecimiento": 69.4,
    "Promedionacional": 987.6
  },
  {
    "Entidad": "Chiapas",
    "Tasadecrecimiento": 66.8,
    "Promedionacional": 987.6
  }
];

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.ticks.template.disabled = true;
categoryAxis.renderer.line.opacity = 0;
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.minGridDistance = 40;
categoryAxis.dataFields.category = "Entidad";

categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.renderer.line.opacity = 0;
valueAxis.renderer.ticks.template.disabled = true;
valueAxis.min = 0;

var columnSeries = chart.series.push(new am4charts.ColumnSeries());
columnSeries.dataFields.categoryX = "Entidad";
columnSeries.dataFields.valueY = "Tasadecrecimiento";
columnSeries.tooltipText = "{valueY.value}";
columnSeries.sequencedInterpolation = true;
columnSeries.defaultState.transitionDuration = 1500;
columnSeries.fill = am4core.color("#7CDDFF");//   chart.colors.getIndex(1);
var valueLabel = columnSeries.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY}";
valueLabel.label.dy = -20;
chart.numberFormatter.numberFormat = "#.0|#.0|0.0";

chart.padding(30, 40, 40, 40);
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
lineSeries.dataFields.categoryX = "Entidad";
lineSeries.dataFields.valueY = "Promedionacional";
lineSeries.tooltipText = "Promedionacional: {valueY.value}";
lineSeries.sequencedInterpolation = true;
lineSeries.defaultState.transitionDuration = 1500;
lineSeries.stroke = am4core.color("#FF0000"); //chart.colors.getIndex(11);
lineSeries.fill = lineSeries.stroke;
lineSeries.strokeWidth = 2;

// second way - add axis range.
var lineSeriesRange = categoryAxis.createSeriesRange(lineSeries);
lineSeriesRange.category = "2018";
lineSeriesRange.endCategory = "2019";
lineSeriesRange.contents.strokeDasharray = "3,3";
lineSeriesRange.locations.category = 0.5;

//var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
//bullet.fill = lineSeries.stroke;
//bullet.circle.radius = 4;

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "none";
chart.cursor.lineX.opacity = 0;
chart.cursor.lineY.opacity = 0;
chart.exporting.menu = new am4core.ExportMenu();
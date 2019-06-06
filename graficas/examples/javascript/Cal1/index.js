am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

//chart.language = "";

var data = [];

chart.data = [
  {
    "Entidad": "Chiapas",
    "Pobreza": 77.1,
    "pobrezaNacional": 43.6,
    "pobrezaExtrema": 28.1,
    "pobrezaModerada": 49,
    "opacity": 0.5
  },
  {
    "Entidad": "Oaxaca",
    "Pobreza": 70.4,
    "pobrezaNacional": 43.6,
    "pobrezaExtrema": 26.9,
    "pobrezaModerada": 43.5,
    "opacity": 0.5
  },
  {
    "Entidad": "Guerrero",
    "Pobreza": 64.4,
    "pobrezaNacional": 43.6,
    "pobrezaExtrema": 23,
    "pobrezaModerada": 41.4,
    "opacity": 0.5
  },
  {
    "Entidad": "Veracruz",
    "Pobreza": 62.2,
    "pobrezaNacional": 43.6,
    "pobrezaExtrema": 16.4,
    "pobrezaModerada": 45.8,
    "opacity": 0.5
  },
  {
    "Entidad": "Puebla",
    "Pobreza": 59.4,
    "pobrezaNacional": 43.6,
    "pobrezaExtrema": 9,
    "pobrezaModerada": 50.5,
    "opacity": 0.5
  },
  {
    "Entidad": "Michoacán",
    "Pobreza": 55.3,
    "pobrezaNacional": 43.6,
    "pobrezaExtrema": 9.4,
    "pobrezaModerada": 45.9,
    "opacity": 0.5
  },
  {
    "Entidad": "Tlaxcala",
    "Pobreza": 53.9,
    "pobrezaNacional": 43.6,
    "pobrezaExtrema": 5.7,
    "pobrezaModerada": 48.2,
    "opacity": 0.5
  },
  {
    "Entidad": "Tabasco",
    "Pobreza": 50.9,
    "pobrezaNacional": 43.6,
    "pobrezaExtrema": 11.8,
    "pobrezaModerada": 39.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Hidalgo",
    "Pobreza": 50.6,
    "pobrezaNacional": 43.6,
    "pobrezaExtrema": 8,
    "pobrezaModerada": 42.6,
    "opacity": 0.5
  },
  {
    "Entidad": "Morelos",
    "Pobreza": 49.5,
    "pobrezaNacional": 43.6,
    "pobrezaExtrema": 5.9,
    "pobrezaModerada": 43.6,
    "opacity": 0.5
  },
  {
    "Entidad": "Zacatecas",
    "Pobreza": 49.0,
    "pobrezaNacional": 43.6,
    "pobrezaExtrema": 3.5,
    "pobrezaModerada": 45.5,
    "opacity": 0.5
  },
  {
    "Entidad": "México",
    "Pobreza": 47.9,
    "pobrezaNacional": 43.6,
    "pobrezaExtrema": 6.1,
    "pobrezaModerada": 41.7,
    "opacity": 0.5
  },
  {
    "Entidad": "SanLuisPotosí",
    "Pobreza": 45.5,
    "pobrezaNacional": 43.6,
    "pobrezaExtrema": 7.7,
    "pobrezaModerada": 37.8,
    "opacity": 0.5
  },
  {
    "Entidad": "Campeche",
    "Pobreza": 43.8,
    "pobrezaNacional": 43.6,
    "pobrezaExtrema": 6.7,
    "pobrezaModerada": 37.1,
    "opacity": 0.5
  },
  {
    "Entidad": "Guanajuato",
    "Pobreza": 42.4,
    "pobrezaNacional": 43.6,
    "pobrezaExtrema": 4.4,
    "pobrezaModerada": 38,
    "opacity": 0.5
  },
  {
    "Entidad": "[font-size: 20px; font-weight: bold]Yucatán[/]",
    "Pobreza": 41.9,
    "pobrezaNacional": 43.6,
    "pobrezaExtrema": 6.1,
    "pobrezaModerada": 35.7,
    "opacity": 1
  },
  {
    "Entidad": "Nayarit",
    "Pobreza": 37.5,
    "pobrezaNacional": 43.6,
    "pobrezaExtrema": 7.9,
    "pobrezaModerada": 29.6,
    "opacity": 0.5
  },
  {
    "Entidad": "Durango",
    "Pobreza": 36.0,
    "pobrezaNacional": 43.6,
    "pobrezaExtrema": 2.8,
    "pobrezaModerada": 33.2,
    "opacity": 0.5
  },
  {
    "Entidad": "Colima",
    "Pobreza": 33.6,
    "pobrezaNacional": 43.6,
    "pobrezaExtrema": 2.6,
    "pobrezaModerada": 31,
    "opacity": 0.5
  },
  {
    "Entidad": "Tamaulipas",
    "Pobreza": 32.2,
    "pobrezaNacional": 43.6,
    "pobrezaExtrema": 2.9,
    "pobrezaModerada": 29.3,
    "opacity": 0.5
  },
  {
    "Entidad": "Jalisco",
    "Pobreza": 31.8,
    "pobrezaNacional": 43.6,
    "pobrezaExtrema": 1.8,
    "pobrezaModerada": 30,
    "opacity": 0.5
  },
  {
    "Entidad": "Querétaro",
    "Pobreza": 31.1,
    "pobrezaNacional": 43.6,
    "pobrezaExtrema": 2.9,
    "pobrezaModerada": 28.2,
    "opacity": 0.5
  },
  {
    "Entidad": "Sinaloa",
    "Pobreza": 30.8,
    "pobrezaNacional": 43.6,
    "pobrezaExtrema": 2.9,
    "pobrezaModerada": 27.9,
    "opacity": 0.5
  },
  {
    "Entidad": "Chihuahua",
    "Pobreza": 30.6,
    "pobrezaNacional": 43.6,
    "pobrezaExtrema": 3.2,
    "pobrezaModerada": 27.4,
    "opacity": 0.5
  },
  {
    "Entidad": "QuintanaRoo",
    "Pobreza": 28.8,
    "pobrezaNacional": 43.6,
    "pobrezaExtrema": 4.2,
    "pobrezaModerada": 24.6,
    "opacity": 0.5
  },
  {
    "Entidad": "Aguascalientes",
    "Pobreza": 28.2,
    "pobrezaNacional": 43.6,
    "pobrezaExtrema": 2.3,
    "pobrezaModerada": 25.9,
    "opacity": 0.5
  },
  {
    "Entidad": "Sonora",
    "Pobreza": 27.9,
    "pobrezaNacional": 43.6,
    "pobrezaExtrema": 2.5,
    "pobrezaModerada": 25.3,
    "opacity": 0.5
  },
  {
    "Entidad": "DistritoFederal",
    "Pobreza": 27.6,
    "pobrezaNacional": 43.6,
    "pobrezaExtrema": 1.8,
    "pobrezaModerada": 25.8,
    "opacity": 0.5
  },
  {
    "Entidad": "Coahuila",
    "Pobreza": 24.8,
    "pobrezaNacional": 43.6,
    "pobrezaExtrema": 1.7,
    "pobrezaModerada": 23.2,
    "opacity": 0.5
  },
  {
    "Entidad": "BajaCalifornia",
    "Pobreza": 22.2,
    "pobrezaNacional": 43.6,
    "pobrezaExtrema": 1.1,
    "pobrezaModerada": 21.1,
    "opacity": 0.5
  },
  {
    "Entidad": "BajaCaliforniaSur",
    "Pobreza": 22.1,
    "pobrezaNacional": 43.6,
    "pobrezaExtrema": 1.6,
    "pobrezaModerada": 20.5,
    "opacity": 0.5
  },
  {
    "Entidad": "NuevoLeón",
    "Pobreza": 14.2,
    "pobrezaNacional": 43.6,
    "pobrezaExtrema": 0.6,
    "pobrezaModerada": 13.6,
    "opacity": 0.5
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
valueAxis.max = 80;
valueAxis.renderer.ticks.template.disabled = true;
//valueAxis.min = 0;

var columnSeries = chart.series.push(new am4charts.ColumnSeries());
columnSeries.dataFields.categoryX = "Entidad";
columnSeries.dataFields.valueY = "Pobreza";
columnSeries.tooltipText = "{valueY.value}";
columnSeries.sequencedInterpolation = true;
columnSeries.defaultState.transitionDuration = 1500;
columnSeries.fill = am4core.color("#0C3F6C");//   chart.colors.getIndex(1);

columnSeries.legendSettings.valueText = "Entidades";

var valueLabel = columnSeries.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY}";
valueLabel.label.dy = -20;
//chart.numberFormatter.numberFormat = "#.0|#.0|0.0";

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
lineSeries.dataFields.valueY = "pobrezaNacional";
lineSeries.tooltipText = "pobrezaNacional: {valueY.value}";
lineSeries.sequencedInterpolation = true;
lineSeries.defaultState.transitionDuration = 1500;
lineSeries.stroke = am4core.color("#f88437"); //chart.colors.getIndex(11);
lineSeries.fill = lineSeries.stroke;
lineSeries.strokeWidth = 2;
lineSeries.legendSettings.valueText = "Pobreza Nacional";

var lineSeries1 = chart.series.push(new am4charts.LineSeries());
lineSeries1.dataFields.categoryX = "Entidad";
lineSeries1.dataFields.valueY = "pobrezaExtrema";
lineSeries1.tooltipText = "pobrezaExtrema: {valueY.value}";
lineSeries1.sequencedInterpolation = true;
lineSeries1.defaultState.transitionDuration = 1500;
lineSeries1.stroke = am4core.color("#f7f429"); //chart.colors.getIndex(11);
lineSeries1.fill = lineSeries1.stroke;
lineSeries1.strokeWidth = 2;
lineSeries1.legendSettings.valueText = "Pobreza Extrema";

var lineSeries2 = chart.series.push(new am4charts.LineSeries());
lineSeries2.dataFields.categoryX = "Entidad";
lineSeries2.dataFields.valueY = "pobrezaModerada";
lineSeries2.tooltipText = "pobrezaModerada: {valueY.value}";
lineSeries2.sequencedInterpolation = true;
lineSeries2.defaultState.transitionDuration = 1500;
lineSeries2.stroke = am4core.color("#b01d06"); //chart.colors.getIndex(11);
lineSeries2.fill = lineSeries2.stroke;
lineSeries2.strokeWidth = 2;
lineSeries2.legendSettings.valueText = "Pobreza Moderada";



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
//chart.exporting.menu = new am4core.ExportMenu();
chart.legend = new am4charts.Legend();
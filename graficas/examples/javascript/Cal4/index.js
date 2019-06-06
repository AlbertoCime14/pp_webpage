am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

//chart.language = "";

var data = [];

chart.data = [
  {
    "Entidad": "Ciudad de México",
    "IdhNacional": 0.746,
    "DHalto":0.733,
    "promedioMundial":0.7,
    "IndiceDesarrolloHumano":0.830
  },
  {
    "Entidad": "Nuevo León",
    "IdhNacional": 0.746,
    "DHalto":0.733,
    "promedioMundial":0.7,
    "IndiceDesarrolloHumano":0.790
  },
  {
    "Entidad": "Sonora",
    "IdhNacional": 0.746,
    "DHalto":0.733,
    "promedioMundial":0.7,
    "IndiceDesarrolloHumano":0.779
  },
  {
    "Entidad": "Baja California Sur",
    "IdhNacional": 0.746,
    "DHalto":0.733,
    "promedioMundial":0.7,
    "IndiceDesarrolloHumano":0.776
  },
  {
    "Entidad": "Coahuila",
    "IdhNacional": 0.746,
    "DHalto":0.733,
    "promedioMundial":0.7,
    "IndiceDesarrolloHumano":0.768
  },
  {
    "Entidad": "Colima",
    "IdhNacional": 0.746,
    "DHalto":0.733,
    "promedioMundial":0.7,
    "IndiceDesarrolloHumano":0.763
  },
  {
    "Entidad": "Querétaro",
    "IdhNacional": 0.746,
    "DHalto":0.733,
    "promedioMundial":0.7,
    "IndiceDesarrolloHumano":0.760
  },
  {
    "Entidad": "Baja California",
    "IdhNacional": 0.746,
    "DHalto":0.733,
    "promedioMundial":0.7,
    "IndiceDesarrolloHumano":0.760
  },
  {
    "Entidad": "Aguascalientes",
    "IdhNacional": 0.746,
    "DHalto":0.733,
    "promedioMundial":0.7,
    "IndiceDesarrolloHumano":0.760
  },
  {
    "Entidad": "Tamaulipas",
    "IdhNacional": 0.746,
    "DHalto":0.733,
    "promedioMundial":0.7,
    "IndiceDesarrolloHumano":0.758
  },
  {
    "Entidad": "Sinaloa",
    "IdhNacional": 0.746,
    "DHalto":0.733,
    "promedioMundial":0.7,
    "IndiceDesarrolloHumano":0.757
  },
  {
    "Entidad": "Quintana Roo",
    "IdhNacional": 0.746,
    "DHalto":0.733,
    "promedioMundial":0.7,
    "IndiceDesarrolloHumano":0.754
  },
  {
    "Entidad": "Jalisco",  
    "IdhNacional": 0.746,
    "DHalto":0.733,
    "promedioMundial":0.7,
    "IndiceDesarrolloHumano":0.751
  },
  {
    "Entidad": "Morelos",
    "IdhNacional": 0.746,
    "DHalto":0.733,
    "promedioMundial":0.7,
    "IndiceDesarrolloHumano":0.749
  },
  
  {
    "Entidad": "Campeche",
    "IdhNacional": 0.746,
    "DHalto":0.733,
    "promedioMundial":0.7,
    "IndiceDesarrolloHumano":0.749
  },
  {
    "Entidad": "Estado de México",
    "IdhNacional": 0.746,
    "DHalto":0.733,
    "promedioMundial":0.7,
    "IndiceDesarrolloHumano":0.745
  },
  {
    "Entidad": "Tabasco",
    "IdhNacional": 0.746,
    "DHalto":0.733,
    "promedioMundial":0.7,
    "IndiceDesarrolloHumano":0.742
  },
  
  {
    "Entidad": "Yucatán",
    "IdhNacional": 0.746,
    "DHalto":0.733,
    "promedioMundial":0.7,
    "IndiceDesarrolloHumano":0.739
  },
  {
    "Entidad": "Chihuahua",
    "IdhNacional": 0.746,
    "DHalto":0.733,
    "promedioMundial":0.7,
    "IndiceDesarrolloHumano":0.734
  },
  {
    "Entidad": "Nayarit",
    "IdhNacional": 0.746,
    "DHalto":0.733,
    "promedioMundial":0.7,
    "IndiceDesarrolloHumano":0.733
  },
  {
    "Entidad": "Durango",
    "IdhNacional": 0.746,
    "DHalto":0.733,
    "promedioMundial":0.7,
    "IndiceDesarrolloHumano":0.731
  },
  {
    "Entidad": "Tlaxcala",
    "IdhNacional": 0.746,
    "DHalto":0.733,
    "promedioMundial":0.7,
    "IndiceDesarrolloHumano":0.727
  },
  {
    "Entidad": "San Luis Potosí",   
    "IdhNacional": 0.746,
    "DHalto":0.733,
    "promedioMundial":0.7,
    "IndiceDesarrolloHumano":0.726
  },
  {
    "Entidad": "Hidalgo",
    "IdhNacional": 0.746,
    "DHalto":0.733,
    "promedioMundial":0.7,
    "IndiceDesarrolloHumano":0.723
  },
  {
    "Entidad": "Zacatecas",  
    "IdhNacional": 0.746,
    "DHalto":0.733,
    "promedioMundial":0.7,
    "IndiceDesarrolloHumano":0.720
  },
  {
    "Entidad": "Guanajuato",
    "IdhNacional": 0.746,
    "DHalto":0.733,
    "promedioMundial":0.7,
    "IndiceDesarrolloHumano":0.720
  },
  {
    "Entidad": "Puebla",
    "IdhNacional": 0.746,
    "DHalto":0.733,
    "promedioMundial":0.7,
    "IndiceDesarrolloHumano":0.717
  },
  {
    "Entidad": "Veracruz",
    "IdhNacional": 0.746,
    "DHalto":0.733,
    "promedioMundial":0.7,
    "IndiceDesarrolloHumano":0.713
  },
  {
    "Entidad": "Michoacán",
    "IdhNacional": 0.746,
    "DHalto":0.733,
    "promedioMundial":0.7,
    "IndiceDesarrolloHumano":0.700
  },
  
  {
    "Entidad": "Oaxaca",
    "IdhNacional": 0.746,
    "DHalto":0.733,
    "promedioMundial":0.7,
    "IndiceDesarrolloHumano":0.681
  },
  {
    "Entidad": "Guerrero  ",
    "IdhNacional": 0.746,
    "DHalto":0.733,
    "promedioMundial":0.7,
    "IndiceDesarrolloHumano":0.679
  },
  {
    "Entidad": "Chiapas",
    "IdhNacional": 0.746,
    "DHalto":0.733,
    "promedioMundial":0.7,
    "IndiceDesarrolloHumano":0.667
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
//valueAxis.min = 0;

var columnSeries = chart.series.push(new am4charts.ColumnSeries());
columnSeries.dataFields.categoryX = "Entisdad";
columnSeries.dataFields.valueY = "Tasadecrecimiento";
columnSeries.tooltipText = "{valueY.value}";
columnSeries.sequencedInterpolation = true;
columnSeries.defaultState.transitionDuration = 1500;
columnSeries.fill = am4core.color("#7CDDFF");//   chart.colors.getIndex(1);
var valueLabel = columnSeries.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY}";
valueLabel.label.dy = -20;
chart.numberFormatter.numberFormat = "#.000|#.000|0.000";

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
lineSeries.dataFields.valueY = "IdhNacional";
lineSeries.tooltipText = "IdhNacional: {valueY.value}";
lineSeries.sequencedInterpolation = true;
lineSeries.defaultState.transitionDuration = 1500;
lineSeries.stroke = am4core.color("#ff700b"); //chart.colors.getIndex(11);
lineSeries.fill = lineSeries.stroke;
lineSeries.strokeWidth = 2;

var lineSeries2 = chart.series.push(new am4charts.LineSeries());
lineSeries2.dataFields.categoryX = "Entidad";
lineSeries2.dataFields.valueY = "DHalto";
lineSeries2.tooltipText = "DHalto: {valueY.value}";
lineSeries2.sequencedInterpolation = true;
lineSeries2.defaultState.transitionDuration = 1500;
lineSeries2.stroke = am4core.color("#ffff00"); //chart.colors.getIndex(11);
lineSeries2.fill = lineSeries2.stroke;
lineSeries2.strokeWidth = 2;

var lineSeries3 = chart.series.push(new am4charts.LineSeries());
lineSeries3.dataFields.categoryX = "Entidad";
lineSeries3.dataFields.valueY = "promedioMundial";
lineSeries3.tooltipText = "promedioMundial: {valueY.value}";
lineSeries3.sequencedInterpolation = true;
lineSeries3.defaultState.transitionDuration = 1500;
lineSeries3.stroke = am4core.color("#000000"); //chart.colors.getIndex(11);
lineSeries3.fill = lineSeries3.stroke;
lineSeries3.bullets.push(new am4charts.CircleBullet());
lineSeries3.strokeWidth = 2;

var lineSeries4 = chart.series.push(new am4charts.LineSeries());
lineSeries4.dataFields.categoryX = "Entidad";
lineSeries4.dataFields.valueY = "IndiceDesarrolloHumano";
lineSeries4.tooltipText = "IndiceDesarrolloHumano: {valueY.value}";
lineSeries4.sequencedInterpolation = true;
lineSeries4.defaultState.transitionDuration = 1500;
lineSeries4.stroke = am4core.color("#0C3F6C"); //chart.colors.getIndex(11);
lineSeries4.fill = lineSeries4.stroke;
lineSeries4.bullets.push(new am4charts.CircleBullet());
lineSeries4.strokeWidth = 2;
// second way - add axis range.
var lineSeriesRange = categoryAxis.createSeriesRange(lineSeries);
lineSeriesRange.category = "2018";
lineSeriesRange.endCategory = "2019";
lineSeriesRange.contents.strokeDasharray = "3,3";
lineSeriesRange.locations.category = 0.5;

//var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
//bullet.fill = lineSeries.stroke;
//bullet.circle.radius = 4;

var label = chart.createChild(am4core.Label);
label.text = "IDH nacional: 0.746";
label.fontSize = 14;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(90);
label.horizontalCenter = "middle";
label.y = am4core.percent(39);

var label = chart.createChild(am4core.Label);
label.text = "IDH promedio mundial: 0.700";
label.fontSize = 14;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(75);
label.horizontalCenter = "middle";
label.y = am4core.percent(63);

var label = chart.createChild(am4core.Label);
label.text = "Umbral IDH alto: 0.733";
label.fontSize = 14;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(90);
label.horizontalCenter = "middle";
label.y = am4core.percent(48);

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "none";
chart.cursor.lineX.opacity = 0;
chart.cursor.lineY.opacity = 0;
//chart.exporting.menu = new am4core.ExportMenu();
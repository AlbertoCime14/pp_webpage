am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

//chart.language = "";

var data = [];

chart.data = [

    {
        "Entidad": "Ciudad de México",
        "Gobierno Abierto": 0.61,
        "Federación": 0.64,
        "opacity": 0.5
      },
      {
        "Entidad": "Quintana Roo",
        "Gobierno Abierto": 0.58,
        "Federación": 0.64,
        "opacity": 0.5
      },
      {
        "Entidad": "Aguascalientes",
        "Gobierno Abierto": 0.57,
        "Federación": 0.64,
        "opacity": 0.5
      },
      {
        "Entidad": "Zacatecas",
        "Gobierno Abierto": 0.57,
        "Federación": 0.64,
        "opacity": 0.5
      },
      {
        "Entidad": "Jalisco",
        "Gobierno Abierto": 0.56,
        "Federación": 0.64,
        "opacity": 0.5
      },
      {
        "Entidad": "Chiahuahua",
        "Gobierno Abierto": 0.56,
        "Federación": 0.64,
        "opacity": 0.5
      },
      {
        "Entidad": "Sonora",
        "Gobierno Abierto": 0.56,
        "Federación": 0.64,
        "opacity": 0.5
      },
      {
        "Entidad": "Sinaloa",
        "Gobierno Abierto": 0.55,
        "Federación": 0.64,
        "opacity": 0.5
      },
      {
        "Entidad": "Veracruz",
        "Gobierno Abierto": 0.55,
        "Federación": 0.64,
        "opacity": 0.5
      },
      {
        "Entidad": "Estado de México",
        "Gobierno Abierto": 0.55,
        "Federación": 0.64,
        "opacity": 0.5
      },
      {
        "Entidad": "Guanajuato",
        "Gobierno Abierto": 0.54,
        "Federación": 0.64,
        "opacity": 0.5
      },
      {
        "Entidad": "Nuevo León",
        "Gobierno Abierto": 0.54,
        "Federación": 0.64,
        "opacity": 0.5
      },
      {
        "Entidad": "Campeche",
        "Gobierno Abierto": 0.54,
        "Federación": 0.64
      },
      {
        "Entidad": "Baja California",
        "Gobierno Abierto": 0.54,
        "Federación": 0.64,
        "opacity": 0.5
      },
      {
        "Entidad": "Tamaulipas",
        "Gobierno Abierto": 0.53,
        "Federación": 0.64,
        "opacity": 0.5
      },
      {
        "Entidad": "Hidalgo",
        "Gobierno Abierto": 0.53,
        "Federación": 0.64,
        "opacity": 0.5
      },
      {
        "Entidad": "Tabasco",
        "Gobierno Abierto": 0.52,
        "Federación": 0.64,
        "opacity": 0.5
      },
      {
        "Entidad": "Guerrero",
        "Gobierno Abierto": 0.52,
        "Federación": 0.64,
        "opacity": 0.5
      },
      {
        "Entidad": "Oaxaca",
        "Gobierno Abierto": 0.51,
        "Federación": 0.64,
        "opacity": 0.5
      },
      {
        "Entidad": "Puebla",
        "Gobierno Abierto": 0.51,
        "Federación": 0.64,
        "opacity": 0.5
      },
      {
        "Entidad": "Tlaxcala",
        "Gobierno Abierto": 0.5,
        "Federación": 0.64,
        "opacity": 0.5
      },
      {
        "Entidad": "San Luis Potosí",
        "Gobierno Abierto": 0.49,
        "Federación": 0.64,
        "opacity": 0.5
      },
      {
        "Entidad": "[font-size: 20px;font-weight:bold]Yucatán[/]",
        "Gobierno Abierto": 0.49,
        "Federación": 0.64
      },
      {
        "Entidad": "Coahuila",
        "Gobierno Abierto": 0.48,
        "Federación": 0.64,
        "opacity": 0.5
      },
      {
        "Entidad": "Baja California Sur",
        "Gobierno Abierto": 0.48,
        "Federación": 0.64,
        "opacity": 0.5
      },
      {
        "Entidad": "Chiapas",
        "Gobierno Abierto": 0.48,
        "Federación": 0.64,
        "opacity": 0.5
      },
      {
        "Entidad": "Nayarit",
        "Gobierno Abierto": 0.48,
        "Federación": 0.64,
        "opacity": 0.5
      },
      {
        "Entidad": "Morelos",
        "Gobierno Abierto": 0.47,
        "Federación": 0.64,
        "opacity": 0.5
      },
      {
        "Entidad": "Querétaro",
        "Gobierno Abierto": 0.47,
        "Federación": 0.64,
        "opacity": 0.5
      },
      {
        "Entidad": "Durango",
        "Gobierno Abierto": 0.47,
        "Federación": 0.64,
        "opacity": 0.5
      },
      {
        "Entidad": "Michoacán",
        "Gobierno Abierto": 0.45,
        "Federación": 0.64,
        "opacity": 0.5
      },
      {
        "Entidad": "Colima",
        "Gobierno Abierto": 0.42,
        "Federación": 0.64,
        "opacity": 0.5
      }

];

//Para colocar la etiqueta del valor del promedio nacional
var label = chart.createChild(am4core.Label);
label.text = "Federación 0.64";
label.fontSize = 14;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(90);//Ajusta la alineación horizontal via porcentaje
label.horizontalCenter = "middle";
label.y = 10; //Ajusta alineación vertical, positivo (hacia abajo) negativo (hacia arriba)
//.-Para colocar la etiqueta del valor del promedio nacional

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.ticks.template.disabled = true;
categoryAxis.renderer.line.opacity = 0;
//categoryAxis.renderer.grid.template.disabled = true;
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
columnSeries.dataFields.valueY = "Gobierno Abierto";
columnSeries.tooltipText = "Gobierno Abierto: {valueY.value}";
columnSeries.sequencedInterpolation = true;
columnSeries.defaultState.transitionDuration = 1500;
columnSeries.fill = am4core.color("#4E8994");//   chart.colors.getIndex(1);

var valueLabel = columnSeries.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY}";
valueLabel.label.dy = -12;
valueLabel.label.hideOversized = false;
valueLabel.label.truncate = false;

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
lineSeries.dataFields.valueY = "Federación";
lineSeries.tooltipText = "Federacion: {valueY.value}";
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

/*var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
bullet.fill = lineSeries.stroke;
bullet.circle.radius = 4;*/

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "none";
chart.cursor.lineX.opacity = 0;
chart.cursor.lineY.opacity = 0;
//chart.exporting.menu = new am4core.ExportMenu();
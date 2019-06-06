am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

//chart.language = "";

var data = [];

chart.data = [
    {
      "Estados": "Aguascalientes",
      "tcm": "4.09%",
      "Promedio": "1.99%",
      "opacity": 0.5
    },
    {
      "Estados": "Guanajuato",
      "tcm": "3.99%",
      "Promedio": "1.99%",
      "opacity": 0.5
    },
    {
      "Estados": "Querétaro",
      "tcm": "3.98%",
      "Promedio": "1.99%",
      "opacity": 0.5
    },
    {
      "Estados": "Quintana Roo",
      "tcm": "3.61%",
      "Promedio": "1.99%",
      "opacity": 0.5
    },
    {
      "Estados": "Baja California Sur",
      "tcm": "3.48%",
      "Promedio": "1.99%",
      "opacity": 0.5
    },
    {
      "Estados": "Colima",
      "tcm": "3.16%",
      "Promedio": "1.99%",
      "opacity": 0.5
    },
    {
      "Estados": "San Luis Potosí",
      "tcm": "3.07%",
      "Promedio": "1.99%",
      "opacity": 0.5
    },
    {
      "Estados": "Zacatecas",
      "tcm": "3.01%",
      "Promedio": "1.99%",
      "opacity": 0.5
    },
    {
      "Estados": "Nayarit",
      "tcm": "2.88%",
      "Promedio": "1.99%",
      "opacity": 0.5
    },
    {
      "Estados": "Hidalgo",
      "tcm": "2.78%",
      "Promedio": "1.99%",
      "opacity": 0.5
    },
    {
      "Estados": "Sonora",
      "tcm": "2.77%",
      "Promedio": "1.99%",
      "opacity": 0.5
    },
    {
      "Estados": "México",
      "tcm": "2.72%",
      "Promedio": "1.99%",
      "opacity": 0.5
    },
    {
      "Estados": "Jalisco",
      "tcm": "2.71%",
      "Promedio": "1.99%",
      "opacity": 0.5
    },
    {
      "Estados": "[font-size: 20px; font-weight: bold]Yucatán[/]",
      "tcm": "2.70%",
      "Promedio": "1.99%",
      "opacity": 1
    },
    {
      "Estados": "Michoacán",
      "tcm": "2.52%",
      "Promedio": "1.99%",
      "opacity": 0.5
    },
    {
      "Estados": "Chihuahua",
      "tcm": "2.50%",
      "Promedio": "1.99%",
      "opacity": 0.5
    },
    {
      "Estados": "Nuevo León",
      "tcm": "2.42%",
      "Promedio": "1.99%",
      "opacity": 0.5
    },
    {
      "Estados": "Ciudad de México",
      "tcm": "2.37%",
      "Promedio": "1.99%",
      "opacity": 0.5
    },
    {
      "Estados": "Puebla",
      "tcm": "2.34%",
      "Promedio": "1.99%",
      "opacity": 0.5
    },
    {
      "Estados": "Sinaloa",
      "tcm": "2.32%",
      "Promedio": "1.99%",
      "opacity": 0.5
    },
    {
      "Estados": "Durango",
      "tcm": "2.10%",
      "Promedio": "1.99%",
      "opacity": 0.5
    },
    {
      "Estados": "Coahuila",
      "tcm": "2.04%",
      "Promedio": "1.99%",
      "opacity": 0.5
    },
    {
      "Estados": "Tlaxcala",
      "tcm": "1.95%",
      "Promedio": "1.99%",
      "opacity": 0.5
    },
    {
      "Estados": "Morelos",
      "tcm": "1.78%",
      "Promedio": "1.99%",
      "opacity": 0.5
    },
    {
      "Estados": "Baja California",
      "tcm": "1.67%",
      "Promedio": "1.99%",
      "opacity": 0.5
    },
    {
      "Estados": "Guerrero",
      "tcm": "1.47%",
      "Promedio": "1.99%",
      "opacity": 0.5
    },
    {
      "Estados": "Veracruz",
      "tcm": "1.20%",
      "Promedio": "1.99%",
      "opacity": 0.5
    },
    {
      "Estados": "Oaxaca",
      "tcm": "1.19%",
      "Promedio": "1.99%",
      "opacity": 0.5
    },
    {
      "Estados": "Chiapas",
      "tcm": "1.10%",
      "Promedio": "1.99%",
      "opacity": 0.5
    },
    {
      "Estados": "Tabasco",
      "tcm": "1.04%",
      "Promedio": "1.99%",
      "opacity": 0.5
    },
    {
      "Estados": "Tamaulipas",
      "tcm": "0.56%",
      "Promedio": "1.99%",
      "opacity": 0.5
    },
    {
      "Estados": "Campeche",
      "tcm": "-5.50%",
      "Promedio": "1.99%",
      "opacity": 0.5
    }
   ];

chart.numberFormatter.numberFormat = "#.#";


var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.ticks.template.disabled = true;
categoryAxis.renderer.line.opacity = 0;
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.minGridDistance = 40;
categoryAxis.dataFields.category = "Estados";

//Etiquetas debajo de la barra vertical centradas
categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.minGridDistance = 1;
categoryAxis.renderer.labels.template.rotation = 270;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.renderer.line.opacity = 0;
valueAxis.renderer.ticks.template.disabled = true;


var columnSeries = chart.series.push(new am4charts.ColumnSeries());
columnSeries.dataFields.categoryX = "Estados";
columnSeries.dataFields.valueY = "tcm";
columnSeries.tooltipText = "tcm: {valueY.value}";
columnSeries.sequencedInterpolation = true;
columnSeries.defaultState.transitionDuration = 1500;
columnSeries.fill = am4core.color("#00A984");//   chart.colors.getIndex(1);
columnSeries.propertyFields.fillOpacity = "opacity";

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
hoverState.properties.fillOpacity = 1;
hoverState.properties.tension = 0.8;


var lineSeries = chart.series.push(new am4charts.LineSeries());
lineSeries.dataFields.categoryX = "Estados";
lineSeries.dataFields.valueY = "Promedio";
lineSeries.tooltipText = "Promedio: {valueY.value}";
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

//Valores de las barras verticales
var valueLabel = columnSeries.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY}";
valueLabel.label.dy = -10;

//var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
//bullet.fill = lineSeries.stroke;
//bullet.circle.radius = 4;

var label = chart.createChild(am4core.Label);
label.text = "Promedio Nacional: 2";
label.fontSize = 14;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(90);
label.horizontalCenter = "middle";
label.y = am4core.percent(20);

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "none";
chart.cursor.lineX.opacity = 0;
chart.cursor.lineY.opacity = 0;
//chart.exporting.menu = new am4core.ExportMenu();
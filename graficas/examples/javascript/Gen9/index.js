am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

//chart.language = "";

var data = [];

chart.data = [
    {
      "Estado": "Puebla",
      "Tasa de mortalidad infantil": 14.4,
      "Nacional": 12.1,
      "opacity": 0.5
    },
    {
      "Estado": "Campeche",
      "Tasa de mortalidad infantil": 14.1,
      "Nacional": 12.1,
      "opacity": 0.5
    },
    {
      "Estado": "Tabasco",
      "Tasa de mortalidad infantil": 14,
      "Nacional": 12.1,
      "opacity": 0.5
    },
    {
      "Estado": "México",
      "Tasa de mortalidad infantil": 13.8,
      "Nacional": 12.1,
      "opacity": 0.5
    },
    {
      "Estado": "Chiapas",
      "Tasa de mortalidad infantil": 13.5,
      "Nacional": 12.1,
      "opacity": 0.5
    },
    {
      "Estado": "Guerrero",
      "Tasa de mortalidad infantil": 13.3,
      "Nacional": 12.1,
      "opacity": 0.5
    },
    {
      "Estado": "Tlaxcala",
      "Tasa de mortalidad infantil": 13.2,
      "Nacional": 12.1,
      "opacity": 0.5
    },
    {
      "Estado": "Coahuila",
      "Tasa de mortalidad infantil": 13,
      "Nacional": 12.1,
      "opacity": 0.5
    },
    {
      "Estado": "Durango",
      "Tasa de mortalidad infantil": 13,
      "Nacional": 12.1,
      "opacity": 0.5
    },
    {
      "Estado": "Baja California",
      "Tasa de mortalidad infantil": 12.9,
      "Nacional": 12.1,
      "opacity": 0.5
    },
    {
      "Estado": "Hidalgo",
      "Tasa de mortalidad infantil": 12.5,
      "Nacional": 12.1,
      "opacity": 0.5
    },
    {
      "Estado": "Chihuahua",
      "Tasa de mortalidad infantil": 12.4,
      "Nacional": 12.1,
      "opacity": 0.5
    },
    {
      "Estado": "Oaxaca",
      "Tasa de mortalidad infantil": 12.4,
      "Nacional": 12.1,
      "opacity": 0.5
    },
    {
      "Estado": "Tamaulipas",
      "Tasa de mortalidad infantil": 12,
      "Nacional": 12.1,
      "opacity": 0.5
    },
    {
      "Estado": "Ciudad de México",
      "Tasa de mortalidad infantil": 11.9,
      "Nacional": 12.1,
      "opacity": 0.5
    },
    {
      "Estado": "Quintana Roo",
      "Tasa de mortalidad infantil": 11.8,
      "Nacional": 12.1,
      "opacity": 0.5
    },
    {
      "Estado": "Michoacán",
      "Tasa de mortalidad infantil": 11.7,
      "Nacional": 12.1,
      "opacity": 0.5
    },
    {
      "Estado": "San Luis Potosí",
      "Tasa de mortalidad infantil": 11.7,
      "Nacional": 12.1,
      "opacity": 0.5
    },
    {
      "Estado": "Baja California Sur",
      "Tasa de mortalidad infantil": 11.6,
      "Nacional": 12.1,
      "opacity": 0.5
    },
    {
      "Estado": "Veracruz",
      "Tasa de mortalidad infantil": 11.2,
      "Nacional": 12.1,
      "opacity": 0.5
    },
    {
      "Estado": "Jalisco",
      "Tasa de mortalidad infantil": 10.8,
      "Nacional": 12.1,
      "opacity": 0.5
    },
    {
      "Estado": "Morelos",
      "Tasa de mortalidad infantil": 10.7,
      "Nacional": 12.1,
      "opacity": 0.5
    },
    {
      "Estado": "Querétaro",
      "Tasa de mortalidad infantil": 10.7,
      "Nacional": 12.1,
      "opacity": 0.5
    },
    {
      "Estado": "Guanajuato",
      "Tasa de mortalidad infantil": 10.7,
      "Nacional": 12.1,
      "opacity": 0.5
    },
    {
      "Estado": "Sonora",
      "Tasa de mortalidad infantil": 10.4,
      "Nacional": 12.1,
      "opacity": 0.5
    },
    {
      "Estado": "Nayarit",
      "Tasa de mortalidad infantil": 10.2,
      "Nacional": 12.1,
      "opacity": 0.5
    },
    {
      "Estado": "Nuevo León",
      "Tasa de mortalidad infantil": 10,
      "Nacional": 12.1,
      "opacity": 0.5
    },
    {
      "Estado": "Zacatecas",
      "Tasa de mortalidad infantil": 9.9,
      "Nacional": 12.1,
      "opacity": 0.5
    },
    {
      "Estado": "[font-size: 20px;font-weight: bold]Yucatán[/]",
      "Tasa de mortalidad infantil": 9.8,
      "Nacional": 12.1
    },
    {
      "Estado": "Aguascalientes",
      "Tasa de mortalidad infantil": 9.4,
      "Nacional": 12.1,
      "opacity": 0.5
    },
    {
      "Estado": "Sinaloa",
      "Tasa de mortalidad infantil": 9,
      "Nacional": 12.1,
      "opacity": 0.5
    },
    {
      "Estado": "Colima",
      "Tasa de mortalidad infantil": 8.8,
      "Nacional": 12.1,
      "opacity": 0.5
    }
   ];

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.ticks.template.disabled = true;
categoryAxis.renderer.line.opacity = 0;
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.minGridDistance = 1;
categoryAxis.dataFields.category = "Estado";

categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.renderer.line.opacity = 0;
valueAxis.renderer.ticks.template.disabled = true;
valueAxis.min = 0;
valueAxis.title.text = "Tasa por cada mil nacidos vivos";

var columnSeries = chart.series.push(new am4charts.ColumnSeries());
columnSeries.dataFields.categoryX = "Estado";
columnSeries.dataFields.valueY = "Tasa de mortalidad infantil";
columnSeries.tooltipText = "Tasa de mortalidad infantil: {valueY.value}";
columnSeries.sequencedInterpolation = true;
columnSeries.defaultState.transitionDuration = 1500;
columnSeries.fill = am4core.color("#6E368C");//   chart.colors.getIndex(1);

//Valores de las barras verticales
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
lineSeries.dataFields.categoryX = "Estado";
lineSeries.dataFields.valueY = "Nacional";
lineSeries.tooltipText = "Nacional: {valueY.value}";
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
//chart.exporting.menu = new am4core.ExportMenu();

//Para colocar la etiqueta del valor del promedio nacional
var label = chart.createChild(am4core.Label);
label.text = "Promedio nacional 12.1";
label.fontSize = 14;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(90);//Ajusta la alineación horizontal via porcentaje
label.horizontalCenter = "middle";
label.y = 90; //Ajusta alineación vertical, positivo (hacia abajo) negativo (hacia arriba)
//.-Para colocar la etiqueta del valor del promedio nacional
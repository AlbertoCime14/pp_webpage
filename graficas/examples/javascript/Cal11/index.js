am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

//chart.language = "";

var data = [];

chart.data = [
    {
      "Entidad Federativa": "Chiapas",
      "Tasa mortalidad menores 5 años (Ira’s)": 46.9,
      "Nacional": 13.1,
      "opacity": 0.5
    },
    {
      "Entidad Federativa": "[font-size: 20px; font-weight: bold;]Yucatán[/]",
      "Tasa mortalidad menores 5 años (Ira’s)": 21.6,
      "Nacional": 13.1,
      "opacity": 1
    },
    {
      "Entidad Federativa": "Veracruz",
      "Tasa mortalidad menores 5 años (Ira’s)": 21,
      "Nacional": 13.1,
      "opacity": 0.5
    },
    {
      "Entidad Federativa": "Puebla",
      "Tasa mortalidad menores 5 años (Ira’s)": 20.9,
      "Nacional": 13.1,
      "opacity": 0.5
    },
    {
      "Entidad Federativa": "Tabasco",
      "Tasa mortalidad menores 5 años (Ira’s)": 18.5,
      "Nacional": 13.1,
      "opacity": 0.5
    },
    {
      "Entidad Federativa": "Chihuahua",
      "Tasa mortalidad menores 5 años (Ira’s)": 17.2,
      "Nacional": 13.1,
      "opacity": 0.5
    },
    {
      "Entidad Federativa": "Sinaloa",
      "Tasa mortalidad menores 5 años (Ira’s)": 17.2,
      "Nacional": 13.1,
      "opacity": 0.5
    },
    {
      "Entidad Federativa": "Ciudad de México",
      "Tasa mortalidad menores 5 años (Ira’s)": 17,
      "Nacional": 13.1,
      "opacity": 0.5
    },
    {
      "Entidad Federativa": "Tlaxcala",
      "Tasa mortalidad menores 5 años (Ira’s)": 16.1,
      "Nacional": 13.1,
      "opacity": 0.5
    },
    {
      "Entidad Federativa": "Guanajuato",
      "Tasa mortalidad menores 5 años (Ira’s)": 14.9,
      "Nacional": 13.1,
      "opacity": 0.5
    },
    {
      "Entidad Federativa": "Guerrero",
      "Tasa mortalidad menores 5 años (Ira’s)": 14.8,
      "Nacional": 13.1,
      "opacity": 0.5
    },
    {
      "Entidad Federativa": "Oaxaca",
      "Tasa mortalidad menores 5 años (Ira’s)": 13.7,
      "Nacional": 13.1,
      "opacity": 0.5
    },
    {
      "Entidad Federativa": "Michoacán",
      "Tasa mortalidad menores 5 años (Ira’s)": 13.5,
      "Nacional": 13.1,
      "opacity": 0.5
    },
    {
      "Entidad Federativa": "Campeche",
      "Tasa mortalidad menores 5 años (Ira’s)": 13,
      "Nacional": 13.1,
      "opacity": 0.5
    },
    {
      "Entidad Federativa": "Durango",
      "Tasa mortalidad menores 5 años (Ira’s)": 12.8,
      "Nacional": 13.1,
      "opacity": 0.5
    },
    {
      "Entidad Federativa": "Quintana Roo",
      "Tasa mortalidad menores 5 años (Ira’s)": 12,
      "Nacional": 13.1,
      "opacity": 0.5
    },
    {
      "Entidad Federativa": "Aguascalientes",
      "Tasa mortalidad menores 5 años (Ira’s)": 10.3,
      "Nacional": 13.1,
      "opacity": 0.5
    },
    {
      "Entidad Federativa": "Nayarit",
      "Tasa mortalidad menores 5 años (Ira’s)": 10.2,
      "Nacional": 13.1,
      "opacity": 0.5
    },
    {
      "Entidad Federativa": "Jalisco",
      "Tasa mortalidad menores 5 años (Ira’s)": 10,
      "Nacional": 13.1,
      "opacity": 0.5
    },
    {
      "Entidad Federativa": "Zacatecas",
      "Tasa mortalidad menores 5 años (Ira’s)": 8.7,
      "Nacional": 13.1,
      "opacity": 0.5
    },
    {
      "Entidad Federativa": "Hidalgo",
      "Tasa mortalidad menores 5 años (Ira’s)": 8.6,
      "Nacional": 13.1,
      "opacity": 0.5
    },
    {
      "Entidad Federativa": "Querétaro",
      "Tasa mortalidad menores 5 años (Ira’s)": 8,
      "Nacional": 13.1,
      "opacity": 0.5
    },
    {
      "Entidad Federativa": "San Luis Potosí",
      "Tasa mortalidad menores 5 años (Ira’s)": 7.7,
      "Nacional": 13.1,
      "opacity": 0.5
    },
    {
      "Entidad Federativa": "Baja California",
      "Tasa mortalidad menores 5 años (Ira’s)": 6.9,
      "Nacional": 13.1,
      "opacity": 0.5
    },
    {
      "Entidad Federativa": "Colima",
      "Tasa mortalidad menores 5 años (Ira’s)": 6.2,
      "Nacional": 13.1,
      "opacity": 0.5
    },
    {
      "Entidad Federativa": "Baja California Sur",
      "Tasa mortalidad menores 5 años (Ira’s)": 5.6,
      "Nacional": 13.1,
      "opacity": 0.5
    },
    {
      "Entidad Federativa": "Coahuila",
      "Tasa mortalidad menores 5 años (Ira’s)": 5.2,
      "Nacional": 13.1,
      "opacity": 0.5
    },
    {
      "Entidad Federativa": "Sonora",
      "Tasa mortalidad menores 5 años (Ira’s)": 4.9,
      "Nacional": 13.1,
      "opacity": 0.5
    },
    {
      "Entidad Federativa": "Tamaulipas",
      "Tasa mortalidad menores 5 años (Ira’s)": 4.2,
      "Nacional": 13.1,
      "opacity": 0.5
    },
    {
      "Entidad Federativa": "Nuevo León",
      "Tasa mortalidad menores 5 años (Ira’s)": 3.4,
      "Nacional": 13.1,
      "opacity": 0.5
    },
    {
      "Entidad Federativa": "Morelos",
      "Tasa mortalidad menores 5 años (Ira’s)": 2.9,
      "Nacional": 13.1,
      "opacity": 0.5
    },
    {
      "Entidad Federativa": "México",
      "Tasa mortalidad menores 5 años (Ira’s)": 2.7,
      "Nacional": 13.1,
      "opacity": 0.5
    }
   ];

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.ticks.template.disabled = true;
categoryAxis.renderer.line.opacity = 0;
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.minGridDistance = 1;
categoryAxis.dataFields.category = "Entidad Federativa";

var  valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "Fallecimientos en memores de 5 años por IRA's";
valueAxis.min = 0;

categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.renderer.line.opacity = 0;
valueAxis.renderer.ticks.template.disabled = true;
valueAxis.min = 0;

var columnSeries = chart.series.push(new am4charts.ColumnSeries());
columnSeries.dataFields.categoryX = "Entidad Federativa";
columnSeries.dataFields.valueY = "Tasa mortalidad menores 5 años (Ira’s)";
columnSeries.sequencedInterpolation = true;
columnSeries.defaultState.transitionDuration = 1500;
columnSeries.fill = am4core.color("#0C3F6C");//   chart.colors.getIndex(1);

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
lineSeries.dataFields.categoryX = "Entidad Federativa";
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

//Valores de las barras verticales
var valueLabel = columnSeries.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY}";
valueLabel.label.dy = -20;
valueLabel.label.truncate = false;
valueLabel.label.hideOversized = false;

//var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
//bullet.fill = lineSeries.stroke;
//bullet.circle.radius = 4;

var label = chart.createChild(am4core.Label);
label.text = "Promedio Nacional: 13.1";
label.fontSize = 14;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(90);
label.horizontalCenter = "middle";
label.y = am4core.percent(57);

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "none";
chart.cursor.lineX.opacity = 0;
chart.cursor.lineY.opacity = 0;
//chart.exporting.menu = new am4core.ExportMenu();
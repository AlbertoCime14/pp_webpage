am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

//chart.language = "";

var data = [];

chart.data = [

    {
        "Estado": "Ciudad de México",
        "GobiernoAbierto": 0.61,
        "Federacion": 0.64
    },
    {
        "Estado": "Quintana Roó",
        "GobiernoAbierto": 0.58,
        "Federacion": 0.64
    },
    {
        "Estado": "Aguascalientes",
        "GobiernoAbierto": 0.57,
        "Federacion": 0.64
    },
    {
        "Estado": "Zacatecas",
        "GobiernoAbierto": 0.57,
        "Federacion": 0.64
    },

    {
        "Estado": "Jalisco",
        "GobiernoAbierto": 0.56,
        "Federacion": 0.64
    },
    {
        "Estado": "Chiahuahua",
        "GobiernoAbierto": 0.56,
        "Federacion": 0.64
    },
    {
        "Estado": "Sonora",
        "GobiernoAbierto": 0.56,
        "Federacion": 0.64
    },
    {
        "Estado": "Sinaloa",
        "GobiernoAbierto": 0.55,
        "Federacion": 0.64
    },
    {
        "Estado": "Veracruz",
        "GobiernoAbierto": 0.55,
        "Federacion": 0.64
    },
    {
        "Estado": "Estado de México",
        "GobiernoAbierto": 0.55,
        "Federacion": 0.64
    },
    {
        "Estado": "Guanajuato",
        "GobiernoAbierto": 0.54,
        "Federacion": 0.64
    },
    {
        "Estado": "Nuevo León",
        "GobiernoAbierto": 0.54,
        "Federacion": 0.64
    },
    {
        "Estado": "Campeche",
        "GobiernoAbierto": 0.54,
        "Federacion": 0.64
    },
    {
        "Estado": "Baja California",
        "GobiernoAbierto": 0.54,
        "Federacion": 0.64
    },
    {
        "Estado": "Tamaulipas",
        "GobiernoAbierto": 0.53,
        "Federacion": 0.64
    },
    {
        "Estado": "Hidalgo",
        "GobiernoAbierto": 0.53,
        "Federacion": 0.64
    },
    {
        "Estado": "Tabasco",
        "GobiernoAbierto": 0.52,
        "Federacion": 0.64
    },
    {
        "Estado": "Guerrero",
        "GobiernoAbierto": 0.52,
        "Federacion": 0.64
    },
    {
        "Estado": "Oaxaca",
        "GobiernoAbierto": 0.51,
        "Federacion": 0.64
    },
    {
        "Estado": "Puebla",
        "GobiernoAbierto": 0.51,
        "Federacion": 0.64
    },
    {
        "Estado": "Tlaxcala",
        "GobiernoAbierto": 0.5,
        "Federacion": 0.64
    },
    {
        "Estado": "San Luis Potosí",
        "GobiernoAbierto": 0.49,
        "Federacion": 0.64
    },
    {
        "Estado": "Yucatán",
        "GobiernoAbierto": 0.49,
        "Federacion": 0.64,
        "stroke": "3,3",
        "opacity": 0.5
    },
    {
        "Estado": "Coahuila",
        "GobiernoAbierto": 0.48,
        "Federacion": 0.64
    },
    {
        "Estado": "Baja California Sur",
        "GobiernoAbierto": 0.48,
        "Federacion": 0.64
    },
    {
        "Estado": "Chiapas",
        "GobiernoAbierto": 0.48,
        "Federacion": 0.64
    },
    {
        "Estado": "Nayarit",
        "GobiernoAbierto": 0.48,
        "Federacion": 0.64
    },
    {
        "Estado": "Morelos",
        "GobiernoAbierto": 0.47,
        "Federacion": 0.64
    },
    {
        "Estado": "Querétaro",
        "GobiernoAbierto": 0.47,
        "Federacion": 0.64
    },
    {
        "Estado": "Durango",
        "GobiernoAbierto": 0.47,
        "Federacion": 0.64
    },
    {
        "Estado": "Michoacán",
        "GobiernoAbierto": 0.45,
        "Federacion": 0.64
    },
    {
        "Estado": "Colima",
        "GobiernoAbierto": 0.42,
        "Federacion": 0.64
    }
   
];

//Formato a 1 decimal
chart.numberFormatter.numberFormat = "#.0|#.0|0.0";


var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.ticks.template.disabled = true;
categoryAxis.renderer.line.opacity = 0;
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.minGridDistance = 40;
categoryAxis.dataFields.category = "Estado";

//Etiquetas debajo de la barra vertical centradas
categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;


var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.renderer.line.opacity = 0;
valueAxis.renderer.ticks.template.disabled = true;
valueAxis.min = 0;

var columnSeries = chart.series.push(new am4charts.ColumnSeries());
columnSeries.dataFields.categoryX = "Estado";
columnSeries.dataFields.valueY = "GobiernoAbierto";
columnSeries.tooltipText = "Estado: {valueY.value}";
columnSeries.sequencedInterpolation = true;
columnSeries.defaultState.transitionDuration = 1500;
columnSeries.fill = am4core.color("#7CDDFF");//   chart.colors.getIndex(1);


//var valueLabel = chart.series.push(new am4charts.LabelBullet());
//valueLabel.label.text = "Hello";
//valueLabel.label.fontSize = 20;




////Valores de las barras verticales
//var valueLabel = series.bullets.push(new am4charts.LabelBullet());
//valueLabel.label.text = "{valueY}";
//valueLabel.label.dy = -20;


var columnTemplate = columnSeries.columns.template;

columnTemplate.strokeWidth = 1;
columnTemplate.strokeOpacity = 1;
columnTemplate.stroke = columnSeries.fill;

//Valores de las barras verticales
//var valueLabel = columnTemplate.bullets.push(new am4charts.LabelBullet());
//valueLabel.label.text = "{valueY}";
//valueLabel.label.dy = -20;


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
lineSeries.dataFields.valueY = "Federacion";
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

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "none";
chart.cursor.lineX.opacity = 0;
chart.cursor.lineY.opacity = 0;
chart.exporting.menu = new am4core.ExportMenu();

//createSeries("Estado", "Estado");
//createSeries("Federacion", "Federacion");
chart.legend = new am4charts.Legend();
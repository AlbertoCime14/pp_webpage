am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

//chart.language = "";

var data = [];

chart.data = [

    {
        "año": "2008",
        
        "Participantes en eventos de activación física": 251223
    },
    {
        "año": "2009",
        
        "Participantes en eventos de activación física": 636865
    },
    {
        "año": "2010",
        
        "Participantes en eventos de activación física": 1716678
    },
    {
        "año": "2011",
       
        "Participantes en eventos de activación física": 3263735
    },

    {
        "año": "2012",
        
        "Participantes en eventos de activación física": 1350000
    },
    {
        "año": "2013",
        
        "Participantes en eventos de activación física": 1031026
    },
    {
        "año": "2014",
      
        "Participantes en eventos de activación física": 436525
    },
    {
        "año": "2015",
       
        "Participantes en eventos de activación física": 195968
    },
    {
        "año": "2016",
      
        "Participantes en eventos de activación física": 454577
    },
    {
        "año": "2017",
        
        "Participantes en eventos de activación física": 428815
    },
    {
        "año": "2018",
 
        "Participantes en eventos de activación física": 228815
    }
];

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());

// Create value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//valueAxis.renderer.inversed = true;
valueAxis.title.text = "Participantes";
categoryAxis.title.text = "";
valueAxis.renderer.minLabelPosition = 0.01;

categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.ticks.template.disabled = true;
categoryAxis.renderer.line.opacity = 0;
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.minGridDistance = 40;
categoryAxis.dataFields.category = "año";

categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.renderer.line.opacity = 0;
valueAxis.renderer.ticks.template.disabled = true;
valueAxis.min = 0;



var columnSeries = chart.series.push(new am4charts.ColumnSeries());
columnSeries.dataFields.categoryX = "año";
//de esta fila se eliminan los datos para tener solo las lineas
columnSeries.dataFields.valueY = "GobienoAbierto";

//aqui cierra
columnSeries.sequencedInterpolation = true;
columnSeries.defaultState.transitionDuration = 1500;
columnSeries.fill = am4core.color("#ffffff");//   chart.colors.getIndex(1);

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
lineSeries.dataFields.categoryX = "año";
lineSeries.dataFields.valueY = "Participantes en eventos de activación física";
lineSeries.sequencedInterpolation = true;
lineSeries.defaultState.transitionDuration = 1500;
lineSeries.stroke = am4core.color("#7E65AA"); //chart.colors.getIndex(11);
lineSeries.fill = lineSeries.stroke;
lineSeries.strokeWidth = 2;

var bullet1 = lineSeries.bullets.push(new am4charts.LabelBullet());
bullet1.interactionsEnabled = false;
bullet1.label.text = "{valueY.value}";
//bullet1.label.background.fill = am4core.color("#000000");
bullet1.label.fill = am4core.color("#000000");
bullet1.locationY = 0.1;
bullet1.label.dy = -20;

// second way - add axis range.
var lineSeriesRange = categoryAxis.createSeriesRange(lineSeries);
lineSeriesRange.category = "2018";
lineSeriesRange.endCategory = "2019";
lineSeriesRange.contents.strokeDasharray = "3,3";
lineSeriesRange.locations.category = 0.5;

var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
bullet.fill = lineSeries.stroke;
bullet.circle.radius = 4;

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "none";
chart.cursor.lineX.opacity = 0;
chart.cursor.lineY.opacity = 0;
//chart.exporting.menu = new am4core.ExportMenu();
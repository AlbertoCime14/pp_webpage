am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

//chart.language = "";

var data = [];

chart.data = [
    
        {
            "country": "Nayarit",
            "visits": 5.47,
            "promedio": 2.54,
            "stroke": 3.3,
            "opacity": 0.5
        },
        {
            "country": "Colima",
            "visits": 5.06,
            "promedio": 2.54,
            "stroke": 3.3,
            "opacity": 0.5
        },
        {
            "country": "Hidalgo",
            "visits": 4.81,
            "promedio": 2.54,
            "stroke": 3.3,
            "opacity": 0.5
        },
        {
            "country": "Tabasco",
            "visits": 4.33,
            "promedio": 2.54,
            "stroke": 3.3,
            "opacity": 0.5
        },
        {
            "country": "[font - size: 20px; font-weight: bold]Yucatán[/]",
            "visits": 4.2,
            "promedio": 2.54
        },
        {
            "country": "Tlaxcala",
            "visits": 4.09,
            "promedio": 2.54,
            "stroke": 3.3,
            "opacity": 0.5
        },
        {
            "country": "Sinaloa",
            "visits": 4.04,
            "promedio": 2.54,
            "stroke": 3.3,
            "opacity": 0.5
        },
        {
            "country": "Guerrero",
            "visits": 3.94,
            "promedio": 2.54,
            "stroke": 3.3,
            "opacity": 0.5
        },
        {
            "country": "Jalisco",
            "visits": 3.85,
            "promedio": 2.54,
            "stroke": 3.3,
            "opacity": 0.5
        },
        {
            "country": "Oaxaca",
            "visits": 3.74,
            "promedio": 2.54,
            "stroke": 3.3,
            "opacity": 0.5
        },
        {
            "country": "Veracruz",
            "visits": 3.71,
            "promedio": 2.54,
            "stroke": 3.3,
            "opacity": 0.5
        },
        {
            "country": "Chiapas",
            "visits": 3.65,
            "promedio": 2.54,
            "stroke": 3.3,
            "opacity": 0.5
        },
        {
            "country": "Zacatecas",
            "visits": 3.52,
            "promedio": 2.54,
            "stroke": 3.3,
            "opacity": 0.5
        },
        {
            "country": "Sonora",
            "visits": 3.46,
            "promedio": 2.54,
            "stroke": 3.3,
            "opacity": 0.5
        },
        {
            "country": "Durango",
            "visits": 3.33,
            "promedio": 2.54,
            "stroke": 3.3,
            "opacity": 0.5
        },
        {
            "country": "Guanajuato",
            "visits": 3.21,
            "promedio": 2.54,
            "stroke": 3.3,
            "opacity": 0.5
        },
        {
            "country": "Morelos",
            "visits": 3.09,
            "promedio": 2.54,
            "stroke": 3.3,
            "opacity": 0.5
        },
        {
            "country": "Michoacán",
            "visits": 2.96,
            "promedio": 2.54,
            "stroke": 3.3,
            "opacity": 0.5
        },
        {
            "country": "San Luis Potosí",
            "visits": 2.83,
            "promedio": 2.54,
            "stroke": 3.3,
            "opacity": 0.5
        },
        {
            "country": "Aguascalientes",
            "visits": 2.71,
            "promedio": 2.54,
            "stroke": 3.3,
            "opacity": 0.5
        },
        {
            "country": "Tamaulipas",
            "visits": 2.63,
            "promedio": 2.54,
            "stroke": 3.3,
            "opacity": 0.5
        },
        {
            "country": "Baja California Sur",
            "visits": 2.56,
            "promedio": 2.54,
            "stroke": 3.3,
            "opacity": 0.5
        },
        {
            "country": "Baja California",
            "visits": 2.44,
            "promedio": 2.54,
            "stroke": 3.3,
            "opacity": 0.5
        },
        {
            "country": "México",
            "visits": 2.42,
            "promedio": 2.54,
            "stroke": 3.3,
            "opacity": 0.5
        },
        {
            "country": "Campeche",
            "visits": 2.4,
            "promedio": 2.54,
            "stroke": 3.3,
            "opacity": 0.5
        },
        {
            "country": "Puebla",
            "visits": 2.21,
            "promedio": 2.54,
            "stroke": 3.3,
            "opacity": 0.5
        },
        {
            "country": "Quintana Roo",
            "visits": 2.19,
            "promedio": 2.54,
            "stroke": 3.3,
            "opacity": 0.5
        },
        {
            "country": "Querétaro",
            "visits": 2.14,
            "promedio": 2.54,
            "stroke": 3.3,
            "opacity": 0.5
        },
        {
            "country": "Chihuahua",
            "visits": 1.43,
            "promedio": 2.54,
            "stroke": 3.3,
            "opacity": 0.5
        },
        {
            "country": "Coahuila",
            "visits": 1.3,
            "promedio": 2.54,
            "stroke": 3.3,
            "opacity": 0.5
        },
        {
            "country": "Nuevo León",
            "visits": 1.28,
            "promedio": 2.54,
            "stroke": 3.3,
            "opacity": 0.5
        },
        {
            "country": "Ciudad de México",
            "visits": 0.08,
            "promedio": 2.54,
            "stroke": 3.3,
            "opacity": 0.5
        }
    
];

chart.padding(40, 40, 40, 40);

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "country";
categoryAxis.renderer.minGridDistance = 1;

categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.max = 6;
valueAxis.strictMinMax = true;


var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryX = "country";
series.dataFields.valueY = "visits";
series.tooltipText = "{valueY.value}"
series.columns.template.strokeOpacity = 0;
series.fill = am4core.color("#3873B9");

var columnTemplate = series.columns.template;
//columnTemplate.column.cornerRadiusTopLeft = 10;
//columnTemplate.column.cornerRadiusTopRight = 10;
columnTemplate.strokeWidth = 1;
columnTemplate.strokeOpacity = 1;
columnTemplate.stroke = series.fill;

var desaturateFilter = new am4core.DesaturateFilter();
desaturateFilter.saturation = 1;

columnTemplate.filters.push(desaturateFilter);

// first way - get properties from data. but can only be done with columns, as they are separate objects.    
//columnTemplate.propertyFields.strokeDasharray = "stroke";
columnTemplate.propertyFields.fillOpacity = "opacity";

// add some cool saturation effect on hover
var desaturateFilterHover = new am4core.DesaturateFilter();
desaturateFilterHover.saturation = 1;

//Valores de las barras verticales
var valueLabel = series.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY}";
valueLabel.label.dy = -20;

var lineSeries = chart.series.push(new am4charts.LineSeries());
lineSeries.dataFields.categoryX = "country";
lineSeries.dataFields.valueY = "promedio";
lineSeries.tooltipText = "Promedio promedio: {valueY.value}";
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

//Para colocar la etiqueta del valor del promedio promedio
var label = chart.createChild(am4core.Label);
label.text = "Promedio: 2.54";
label.fontSize = 16;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(90);//Ajusta la alineación horizontal via visits
label.horizontalCenter = "middle";
label.y = 290; //Ajusta alineación vertical, positivo (hacia abajo) negativo (hacia arriba
//label.x = 1350;
//.-Para colocar la etiqueta del valor del promedio promedio
//Valores de las barras verticales
//var valueLabel = series.bullets.push(new am4charts.LabelBullet());
//valueLabel.label.text = "{valueY.value}";
//valueLabel.label.dy = -40;
valueLabel.label.truncate = false;
valueLabel.label.hideOversized = false;

chart.cursor = new am4charts.XYCursor();

//chart.exporting.menu = new am4core.ExportMenu();
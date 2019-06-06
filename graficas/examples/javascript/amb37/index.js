am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);


chart.data = [
    
        {
            "country": "Quintana Roo",
            "visits": 598.6,
            "stroke": 3.3,
        "opacity": 1,"promedio": 171.4
        },
        {
            "country": "Guerrero",
            "visits": 593.4,
            "stroke": 3.3,
            "opacity": 1, "promedio": 171.4
        },
        {
            "country": "Oaxaca",
            "visits": 374.6,
            "stroke": 3.3,
            "opacity": 1, "promedio": 171.4
        },
        {
            "country": "Veracruz",
            "visits": 328.1,
            "stroke": 3.3,
            "opacity": 1, "promedio": 171.4
        },
        {
            "country": "Morelos",
            "visits": 286.6,
            "stroke": 3.3,
            "opacity": 1, "promedio": 171.4
        },
        {
            "country": "Nayarit",
            "visits": 262.8,
            "stroke": 3.3,
            "opacity": 1, "promedio": 171.4
        },
        {
            "country": "Ciudad de México ",
            "visits": 249.9,
            "stroke": 3.3,
            "opacity": 1, "promedio": 171.4
        },
        {
            "country": "Puebla",
            "visits": 243.6,
            "stroke": 3.3,
            "opacity": 1, "promedio": 171.4
        },
        {
            "country": "Chiapas ",
            "visits": 234.3,
            "stroke": 3.3,
            "opacity": 1, "promedio": 171.4
        },
        {
            "country": "Baja California Sur",
            "visits": 222.7,
            "stroke": 3.3,
            "opacity": 1, "promedio": 171.4
        },
        {
            "country": "Querétaro",
            "visits": 218.6,
            "stroke": 3.3,
            "opacity": 1, "promedio": 171.4
        },
        {
            "country": "Coahuila",
            "visits": 210.7,
            "stroke": 3.3,
            "opacity": 1, "promedio": 171.4
        },
        {
            "country": "Nuevo León",
            "visits": 187.9,
            "stroke": 3.3,
            "opacity": 1, "promedio": 171.4
        },
        {
            "country": "Durango ",
            "visits": 184.6,
            "stroke": 3.3,
            "opacity": 1, "promedio": 171.4
        },
        {
            "country": "Tabasco",
            "visits": 175.2,
            "stroke": 3.3,
            "opacity": 1, "promedio": 171.4
        },
       
        {
            "country": "Michoacán",
            "visits": 145.1,
            "stroke": 3.3,
            "opacity": 1, "promedio": 171.4
        },
        {
            "country": "Tamaulipas",
            "visits": 131.8,
            "stroke": 3.3,
            "opacity": 1, "promedio": 171.4
        },
        {
            "country": "Hidalgo",
            "visits": 126.9,
            "stroke": 3.3,
            "opacity": 1, "promedio": 171.4
        },
        {
            "country": "Tlaxcala",
            "visits": 115.5,
            "stroke": 3.3,
            "opacity": 1, "promedio": 171.4
        },
        {
            "country": "Campeche",
            "visits": 107.9,
            "stroke": 3.3,
            "opacity": 1, "promedio": 171.4
        },
        {
            "country": "México",
            "visits": 106.5,
            "stroke": 3.3,
            "opacity": 1, "promedio": 171.4
        },
        {
            "country": "[font - size: 20px; font-weight: bold]Yucatán[/]",
            "visits": 105.5,
            "stroke": 3.3,
            "opacity": 0.5
        },
        {
            "country": "Aguascalientes",
            "visits": 95.6,
            "stroke": 3.3,
            "opacity": 1, "promedio": 171.4
        },
        {
            "country": "San Luis Potosí",
            "visits": 93.9,
            "stroke": 3.3,
            "opacity": 1, "promedio": 171.4
        },
        {
            "country": "Colima",
            "visits": 90.8,
            "stroke": 3.3,
            "opacity": 1, "promedio": 171.4
        },
        {
            "country": "Baja California ",
            "visits": 81.1,
            "stroke": 3.3,
            "opacity": 1, "promedio": 171.4
        },
        {
            "country": "Zacatecas",
            "visits": 78.8,
            "stroke": 3.3,
            "opacity": 1, "promedio": 171.4
        },
        {
            "country": "Guanajuato",
            "visits": 78.4,
            "stroke": 3.3,
            "opacity": 1, "promedio": 171.4
        },
        {
            "country": "Sinaloa",
            "visits": 70.8,
            "stroke": 3.3,
            "opacity": 1, "promedio": 171.4
        },
        {
            "country": "Jalisco",
            "visits": 69.1,
            "stroke": 3.3,
            "opacity": 1, "promedio": 171.4
        },
        {
            "country": "Chihuahua",
            "visits": 52.2,
            "stroke": 3.3,
            "opacity": 1, "promedio": 171.4
        },
        {
            "country": "Sonora ",
            "visits": 47.2,
            "stroke": 3.3,
            "opacity": 1, "promedio": 171.4
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
valueAxis.max = 700;
valueAxis.strictMinMax = true;


var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryX = "country";
series.dataFields.valueY = "visits";
series.tooltipText = "{valueY.value}"
series.columns.template.strokeOpacity = 0;
series.fill = am4core.color("#95c11f");

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

////Valores de las barras verticales
//var valueLabel = series.bullets.push(new am4charts.LabelBullet());
//valueLabel.label.text = "{valueY}";
//valueLabel.label.dy = -20;

var lineSeries = chart.series.push(new am4charts.LineSeries());
lineSeries.dataFields.categoryX = "country";
lineSeries.dataFields.valueY = "promedio";
lineSeries.tooltipText = "Promedio nacional: {valueY.value}";
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

//Para colocar la etiqueta del valor del promedio nacional
var label = chart.createChild(am4core.Label);
label.text = "Promedio nacional: 171.4";
label.fontSize = 16;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(90);//Ajusta la alineación horizontal via porcentaje
label.horizontalCenter = "middle";
label.y = 320; //Ajusta alineación vertical, positivo (hacia abajo) negativo (hacia arriba
label.x = 1250;
//.-Para colocar la etiqueta del valor del promedio nacional

//Valores de las barras verticales
var valueLabel = series.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY.value}";
valueLabel.label.dy = -40;
valueLabel.label.truncate = false;
valueLabel.label.hideOversized = false;
valueLabel.label.rotation = 270;


chart.cursor = new am4charts.XYCursor();

//chart.exporting.menu = new am4core.ExportMenu();
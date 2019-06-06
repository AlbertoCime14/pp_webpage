am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

    chart.data = [
        {
          "country": "Baja California",
            "visits": -10,
            "stroke": "3,3",
            "opacity": 0.5
        },
        {
          "country": "Chiapas",
            "visits": -21,
            "stroke": "3,3",
            "opacity": 0.5
        },
        {
          "country": "Quintana Roo",
            "visits": -22,
            "stroke": "3,3",
            "opacity": 0.5
        },
        {
          "country": "Coahuila",
            "visits": -35,
            "stroke": "3,3",
            "opacity": 0.5
        },
        {
          "country": "Oaxaca",
            "visits": -36,
            "stroke": "3,3",
            "opacity": 0.5
        },
        {
          "country": "Hidalgo",
            "visits": -39,
            "stroke": "3,3",
            "opacity": 0.5
        },
        {
          "country": "Durango",
            "visits": -43,
            "stroke": "3,3",
            "opacity": 0.5
        },
        {
          "country": "Nuevo León",
            "visits": -45,
            "stroke": "3,3",
            "opacity": 0.5
        },
        {
          "country": "Sonora",
            "visits": -47,
            "stroke": "3,3",
            "opacity": 0.5
        },
        {
          "country": "Veracruz",
            "visits": -58,
            "stroke": "3,3",
            "opacity": 0.5
        },
        {
          "country": "Tamaulipas",
            "visits": -64,
            "stroke": "3,3",
            "opacity": 0.5
        },
        {
            "country": "[font - size: 20px; font-weight: bold]Yucatán[/]",
          "visits": -77
        },
        {
          "country": "Querétaro",
            "visits": -82,
            "stroke": "3,3",
            "opacity": 0.5
        },
        {
          "country": "Chihuahua",
            "visits": -86,
            "stroke": "3,3",
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
valueAxis.min = -100;
valueAxis.max = 10;
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
valueLabel.label.dy = 20;

//var lineSeries = chart.series.push(new am4charts.LineSeries());
//lineSeries.dataFields.categoryX = "country";
//lineSeries.dataFields.valueY = "promedio";
//lineSeries.tooltipText = "Promedio promedio: {valueY.value}";
//lineSeries.sequencedInterpolation = true;
//lineSeries.defaultState.transitionDuration = 1500;
//lineSeries.stroke = am4core.color("#FF0000"); //chart.colors.getIndex(11);
//lineSeries.fill = lineSeries.stroke;
//lineSeries.strokeWidth = 2;

//// second way - add axis range.
//var lineSeriesRange = categoryAxis.createSeriesRange(lineSeries);
//lineSeriesRange.category = "2018";
//lineSeriesRange.endCategory = "2019";
//lineSeriesRange.contents.strokeDasharray = "3,3";
//lineSeriesRange.locations.category = 0.5;

//Para colocar la etiqueta del valor del promedio promedio
//var label = chart.createChild(am4core.Label);
//label.text = "Promedio promedio: 13";
//label.fontSize = 16;
//label.align = "center";
//label.isMeasured = false;
//label.x = am4core.percent(10);//Ajusta la alineación horizontal via visits
//label.horizontalCenter = "middle";
//label.y = 320; //Ajusta alineación vertical, positivo (hacia abajo) negativo (hacia arriba
//label.x = 1250;
//.-Para colocar la etiqueta del valor del promedio promedio
//Valores de las barras verticales
//var valueLabel = series.bullets.push(new am4charts.LabelBullet());
//valueLabel.label.text = "{valueY.value}";
//valueLabel.label.dy = -40;
valueLabel.label.truncate = false;
valueLabel.label.hideOversized = false;

chart.cursor = new am4charts.XYCursor();

//chart.exporting.menu = new am4core.ExportMenu();
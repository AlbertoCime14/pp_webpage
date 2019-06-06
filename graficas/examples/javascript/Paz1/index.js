am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);



    chart.data = [
        {
          "Entidad": "[font-size: 20px; font-weight: bold;]Yucatán[/]",
          "Porcentaje": 66.6,
          "opacity": 1,
          "Promedio Nacional": 19
        },
        {
          "Entidad": "Campeche",
          "Porcentaje": 39.5,
          "opacity": 0.5,
          "Promedio Nacional": 19
        },
        {
          "Entidad": "Aguascalientes",
          "Porcentaje": 37.3,
          "opacity": 0.5,
          "Promedio Nacional": 19
        },
        {
          "Entidad": "Durango",
          "Porcentaje": 35.9,
          "opacity": 0.5,
          "Promedio Nacional": 19
        },
        {
          "Entidad": "Coahuila",
          "Porcentaje": 34.3,
          "opacity": 0.5,
          "Promedio Nacional": 19
        },
        {
          "Entidad": "Baja California Sur",
          "Porcentaje": 33.8,
          "opacity": 0.5,
          "Promedio Nacional": 19
        },
        {
          "Entidad": "Querétaro",
          "Porcentaje": 33.6,
          "opacity": 0.5,
          "Promedio Nacional": 19
        },
        {
          "Entidad": "Hidalgo",
          "Porcentaje": 32.4,
          "opacity": 0.5,
          "Promedio Nacional": 19
        },
        {
          "Entidad": "Sonora",
          "Porcentaje": 32.3,
          "opacity": 0.5,
          "Promedio Nacional": 19
        },
        {
          "Entidad": "Tlaxcala",
          "Porcentaje": 30,
          "opacity": 0.5,
          "Promedio Nacional": 19
        },
        {
          "Entidad": "Sinaloa",
          "Porcentaje": 26.6,
          "opacity": 0.5,
          "Promedio Nacional": 19
        },
        {
          "Entidad": "Chiapas",
          "Porcentaje": 25.9,
          "opacity": 0.5,
          "Promedio Nacional": 19
        },
        {
          "Entidad": "Jalisco",
          "Porcentaje": 25.4,
          "opacity": 0.5,
          "Promedio Nacional": 19
        },
        {
          "Entidad": "Baja California",
          "Porcentaje": 25,
          "opacity": 0.5,
          "Promedio Nacional": 19
        },
        {
          "Entidad": "Quintana Roo",
          "Porcentaje": 23.8,
          "opacity": 0.5,
          "Promedio Nacional": 19
        },
        {
          "Entidad": "Nuevo León",
          "Porcentaje": 23.3,
          "opacity": 0.5,
          "Promedio Nacional": 19
        },
        {
          "Entidad": "Oaxaca",
          "Porcentaje": 21.8,
          "opacity": 0.5,
          "Promedio Nacional": 19
        },        
        {
          "Entidad": "Colima",
          "Porcentaje": 18.4,
          "opacity": 0.5,
          "Promedio Nacional": 19
        },
        {
          "Entidad": "Chihuahua",
          "Porcentaje": 18,
          "opacity": 0.5,
          "Promedio Nacional": 19
        },
        {
          "Entidad": "Puebla",
          "Porcentaje": 16.7,
          "opacity": 0.5,
          "Promedio Nacional": 19
        },
        {
          "Entidad": "Nayarit",
          "Porcentaje": 15.4,
          "opacity": 0.5,
          "Promedio Nacional": 19
        },
        {
          "Entidad": "San Luis Potosí",
          "Porcentaje": 15.2,
          "opacity": 0.5,
          "Promedio Nacional": 19
        },
        {
          "Entidad": "Michoacán",
          "Porcentaje": 14.6,
          "opacity": 0.5,
          "Promedio Nacional": 19
        },
        {
          "Entidad": "Guanajuato",
          "Porcentaje": 13.9,
          "opacity": 0.5,
          "Promedio Nacional": 19
        },
        {
          "Entidad": "Guerrero",
          "Porcentaje": 13.5,
          "opacity": 0.5,
          "Promedio Nacional": 19
        },
        {
          "Entidad": "Tamaulipas",
          "Porcentaje": 12.7,
          "opacity": 0.5,
          "Promedio Nacional": 19
        },
        {
          "Entidad": "Morelos",
          "Porcentaje": 12.6,
          "opacity": 0.5,
          "Promedio Nacional": 19
        },
        {
          "Entidad": "Ciudad de México",
          "Porcentaje": 11,
          "opacity": 0.5,
          "Promedio Nacional": 19
        },
        {
          "Entidad": "Veracruz",
          "Porcentaje": 9.7,
          "opacity": 0.5,
          "Promedio Nacional": 19
        },
        {
          "Entidad": "Zacatecas",
          "Porcentaje": 8.9,
          "opacity": 0.5,
          "Promedio Nacional": 19
        },
        {
          "Entidad": "Estado de México",
          "Porcentaje": 7.7,
          "opacity": 0.5,
          "Promedio Nacional": 19
        },
        {
          "Entidad": "Tabasco",
          "Porcentaje": 6.8,
          "opacity": 0.5,
          "Promedio Nacional": 19
        }
       ];

chart.padding(40, 40, 40, 40);

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "Entidad";
categoryAxis.renderer.minGridDistance = 1;
categoryAxis.renderer.labels.template.rotation = -90;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryX = "Entidad";
series.dataFields.valueY = "Porcentaje";
series.tooltipText = "{valueY.value}"
series.columns.template.strokeOpacity = 0;
series.columns.template.propertyFields.fillOpacity = "opacity";
series.columns.template.fill = am4core.color('#1D1D1B');


//Valores de las barras verticales
var valueLabel = series.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY}";
valueLabel.label.dy = -20;
valueLabel.label.truncate = false;
valueLabel.label.hideOversized = false;


var lineSeries = chart.series.push(new am4charts.LineSeries());
lineSeries.dataFields.categoryX = "Entidad";
lineSeries.dataFields.valueY = "Promedio Nacional";
lineSeries.tooltipText = "Promedio Nacional: {valueY.value}";
lineSeries.sequencedInterpolation = true;
lineSeries.defaultState.transitionDuration = 1500;
lineSeries.stroke = am4core.color("#FF0000"); //chart.colors.getIndex(11);
lineSeries.fill = lineSeries.stroke;
lineSeries.strokeWidth = 2;



var label = chart.createChild(am4core.Label);
label.text = "Promedio Nacional: 19";
label.fontSize = 14;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(90);
label.horizontalCenter = "middle";
label.y = am4core.percent(60);

chart.cursor = new am4charts.XYCursor();

// as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
//series.columns.template.adapter.add("fill", function (fill, target) {
//	return chart.colors.getIndex(target.dataItem.index);
//});
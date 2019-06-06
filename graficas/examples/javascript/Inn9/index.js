
am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);



    chart.data = [
      {
        "Entidad federativa": "Ciudad de México",
        "opacity": 0.5,
        "Promedio Nacional": 20.36,
        "2018": 100.33
      },
      {
        "Entidad federativa": "Morelos",
        "opacity": 0.5,
        "Promedio Nacional": 20.36,
        "2018": 56.09
      },
      {
        "Entidad federativa": "Querétaro",
        "opacity": 0.5,
        "Promedio Nacional": 20.36,
        "2018": 34.21
      },
      {
        "Entidad federativa": "Baja California Sur",
        "opacity": 0.5,
        "Promedio Nacional": 20.36,
        "2018": 32.93
      },
      {
        "Entidad federativa": "Colima",
        "opacity": 0.5,
        "Promedio Nacional": 20.36,
        "2018": 29.86
      },
      {
        "Entidad federativa": "[font-size: 20px; font-weight: bold;]Yucatán[/]",
        "opacity": 1,
        "Promedio Nacional": 20.36,
        "2018": 29.84
      },
      {
        "Entidad federativa": "Baja California",
        "opacity": 0.5,
        "Promedio Nacional": 20.36,
        "2018": 26.13
      },
      {
        "Entidad federativa": "San Luis Potosí",
        "opacity": 0.5,
        "Promedio Nacional": 20.36,
        "2018": 25.38
      },
      {
        "Entidad federativa": "Nuevo León",
        "opacity": 0.5,
        "Promedio Nacional": 20.36,
        "2018": 24.29
      },
      {
        "Entidad federativa": "Sonora",
        "opacity": 0.5,
        "Promedio Nacional": 20.36,
        "2018": 20.93
      },
      {
        "Entidad federativa": "Jalisco",
        "opacity": 0.5,
        "Promedio Nacional": 20.36,
        "2018": 19.3
      },
      {
        "Entidad federativa": "Aguascalientes",
        "opacity": 0.5,
        "Promedio Nacional": 20.36,
        "2018": 17.55
      },
      {
        "Entidad federativa": "Puebla",
        "opacity": 0.5,
        "Promedio Nacional": 20.36,
        "2018": 16.52
      },
      {
        "Entidad federativa": "Guanajuato",
        "opacity": 0.5,
        "Promedio Nacional": 20.36,
        "2018": 16.43
      },
      {
        "Entidad federativa": "Michoacán",
        "opacity": 0.5,
        "Promedio Nacional": 20.36,
        "2018": 16.06
      },
      {
        "Entidad federativa": "Campeche",
        "opacity": 0.5,
        "Promedio Nacional": 20.36,
        "2018": 15.92
      },
      {
        "Entidad federativa": "Zacatecas",
        "opacity": 0.5,
        "Promedio Nacional": 20.36,
        "2018": 15.4
      },
      {
        "Entidad federativa": "Coahuila",
        "opacity": 0.5,
        "Promedio Nacional": 20.36,
        "2018": 15.2
      },
      {
        "Entidad federativa": "Sinaloa",
        "opacity": 0.5,
        "Promedio Nacional": 20.36,
        "2018": 14.69
      },
      {
        "Entidad federativa": "Chihuahua",
        "opacity": 0.5,
        "Promedio Nacional": 20.36,
        "2018": 14.14
      },
      {
        "Entidad federativa": "Hidalgo",
        "opacity": 0.5,
        "Promedio Nacional": 20.36,
        "2018": 13.77
      },
      {
        "Entidad federativa": "Tlaxcala",
        "opacity": 0.5,
        "Promedio Nacional": 20.36,
        "2018": 12.46
      },
      {
        "Entidad federativa": "Nayarit",
        "opacity": 0.5,
        "Promedio Nacional": 20.36,
        "2018": 11.1
      },
      {
        "Entidad federativa": "Durango",
        "opacity": 0.5,
        "Promedio Nacional": 20.36,
        "2018": 10.62
      },
      {
        "Entidad federativa": "Quintana Roo",
        "opacity": 0.5,
        "Promedio Nacional": 20.36,
        "2018": 9.73
      },
      {
        "Entidad federativa": "México",
        "opacity": 0.5,
        "Promedio Nacional": 20.36,
        "2018": 9.43
      },
      {
        "Entidad federativa": "Veracruz",
        "opacity": 0.5,
        "Promedio Nacional": 20.36,
        "2018": 9.17
      },
      {
        "Entidad federativa": "Tamaulipas",
        "opacity": 0.5,
        "Promedio Nacional": 20.36,
        "2018": 7.99
      },
      {
        "Entidad federativa": "Tabasco",
        "opacity": 0.5,
        "Promedio Nacional": 20.36,
        "2018": 7.87
      },
      {
        "Entidad federativa": "Oaxaca",
        "opacity": 0.5,
        "Promedio Nacional": 20.36,
        "2018": 7.62
      },
      {
        "Entidad federativa": "Chiapas",
        "opacity": 0.5,
        "Promedio Nacional": 20.36,
        "2018": 6.61
      },
      {
        "Entidad federativa": "Guerrero",
        "opacity": 0.5,
        "Promedio Nacional": 20.36,
        "2018": 4.13
      }
     ];

chart.padding(40, 40, 40, 40);

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "Entidad federativa";
categoryAxis.renderer.minGridDistance = 1;
categoryAxis.renderer.labels.template.rotation = -90;

// Create value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//valueAxis.renderer.inversed = true;
//valueAxis.title.text = "Place taken";
valueAxis.renderer.minLabelPosition = 0.01;

//Etiquetas debajo de la barra vertical centradas
categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryX = "Entidad federativa";
series.dataFields.valueY = "2018";
series.tooltipText = "{valueY.value}"
series.columns.template.fill = am4core.color('#00A8E4');
series.columns.template.propertyFields.fillOpacity = "opacity";

//Valores de las barras verticales
var valueLabel = series.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY}";
valueLabel.label.dy = -10;
valueLabel.label.truncate = false;
valueLabel.label.hideOversized = false;


var lineSeries = chart.series.push(new am4charts.LineSeries());
lineSeries.dataFields.categoryX = "Entidad federativa";
lineSeries.dataFields.valueY = "Promedio Nacional";
lineSeries.tooltipText = "Promedio Nacional: {valueY.value}";
lineSeries.sequencedInterpolation = true;
lineSeries.defaultState.transitionDuration = 1500;
lineSeries.stroke = am4core.color("#FF0000"); //chart.colors.getIndex(11);
lineSeries.fill = lineSeries.stroke;
lineSeries.strokeWidth = 2;

var label = chart.createChild(am4core.Label);
label.text = "Promedio Nacional: 20.36";
label.fontSize = 14;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(90);
label.horizontalCenter = "middle";
label.y = am4core.percent(62);


chart.cursor = new am4charts.XYCursor();

// as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
//series.columns.template.adapter.add("fill", function (fill, target) {
//  return chart.colors.getIndex(target.dataItem.index);
//});
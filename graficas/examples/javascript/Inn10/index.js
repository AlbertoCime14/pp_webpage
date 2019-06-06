
am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);



    chart.data = [
        {
            "ESTADOS": "CIUDAD DE MEXICO",
            "opacity": 0.5,
            "Promedio Nacional": 439,
            "HERRAMIENTAS": 2681
          },
          {
            "ESTADOS": "MEXICO",
            "opacity": 0.5,
            "Promedio Nacional": 439,
            "HERRAMIENTAS": 1119
          },
          {
            "ESTADOS": "JALISCO",
            "opacity": 0.5,
            "Promedio Nacional": 439,
            "HERRAMIENTAS": 968
          },
          {
            "ESTADOS": "NUEVOLEON",
            "opacity": 0.5,
            "Promedio Nacional": 439,
            "HERRAMIENTAS": 741
          },
          {
            "ESTADOS": "PUEBLA",
            "opacity": 0.5,
            "Promedio Nacional": 439,
            "HERRAMIENTAS": 532
          },
          {
            "ESTADOS": "[font-size: 20px; font-weight: bold]YUCATÁN[/]",
            "opacity": 1,
            "Promedio Nacional": 439,
            "HERRAMIENTAS": 527
          },
          {
            "ESTADOS": "QUERETARO",
            "opacity": 0.5,
            "Promedio Nacional": 439,
            "HERRAMIENTAS": 492
          },
          {
            "ESTADOS": "GUANAJUATO",
            "opacity": 0.5,
            "Promedio Nacional": 439,
            "HERRAMIENTAS": 492
          },
          {
            "ESTADOS": "SINALOA",
            "opacity": 0.5,
            "Promedio Nacional": 439,
            "HERRAMIENTAS": 464
          },
          {
            "ESTADOS": "COAHUILA DE ZARAGOZA",
            "opacity": 0.5,
            "Promedio Nacional": 439,
            "HERRAMIENTAS": 462
          },          
          {
            "ESTADOS": "SONORA",
            "opacity": 0.5,
            "Promedio Nacional": 439,
            "HERRAMIENTAS": 420
          },
          {
            "ESTADOS": "VERACRUZ DE IGNACIO DE LA LLAVE",
            "opacity": 0.5,
            "Promedio Nacional": 439,
            "HERRAMIENTAS": 417
          },
          {
            "ESTADOS": "CHIAPAS",
            "opacity": 0.5,
            "Promedio Nacional": 439,
            "HERRAMIENTAS": 398
          },
          {
            "ESTADOS": "MICHOACAN DE OCAMPO",
            "opacity": 0.5,
            "Promedio Nacional": 439,
            "HERRAMIENTAS": 390
          },
          {
            "ESTADOS": "CHIHUAHUA",
            "opacity": 0.5,
            "Promedio Nacional": 439,
            "HERRAMIENTAS": 369
          },
          {
            "ESTADOS": "MORELOS",
            "opacity": 0.5,
            "Promedio Nacional": 439,
            "HERRAMIENTAS": 354
          },
          {
            "ESTADOS": "HIDALGO",
            "opacity": 0.5,
            "Promedio Nacional": 439,
            "HERRAMIENTAS": 317
          },
          {
            "ESTADOS": "BAJA CALIFORNIA",
            "opacity": 0.5,
            "Promedio Nacional": 439,
            "HERRAMIENTAS": 316
          },
          {
            "ESTADOS": "SAN LUIS POTOSI",
            "opacity": 0.5,
            "Promedio Nacional": 439,
            "HERRAMIENTAS": 310
          },
          {
            "ESTADOS": "AGUASCALIENTES",
            "opacity": 0.5,
            "Promedio Nacional": 439,
            "HERRAMIENTAS": 273
          },
          {
            "ESTADOS": "TAMAULIPAS",
            "opacity": 0.5,
            "Promedio Nacional": 439,
            "HERRAMIENTAS": 234
          },
          {
            "ESTADOS": "TABASCO",
            "opacity": 0.5,
            "Promedio Nacional": 439,
            "HERRAMIENTAS": 230
          },
          {
            "ESTADOS": "OAXACA",
            "opacity": 0.5,
            "Promedio Nacional": 439,
            "HERRAMIENTAS": 209
          },
          {
            "ESTADOS": "GUERRERO",
            "opacity": 0.5,
            "Promedio Nacional": 439,
            "HERRAMIENTAS": 178
          },
          {
            "ESTADOS": "ZACATECAS",
            "opacity": 0.5,
            "Promedio Nacional": 439,
            "HERRAMIENTAS": 175
          },
          {
            "ESTADOS": "DURANGO",
            "opacity": 0.5,
            "Promedio Nacional": 439,
            "HERRAMIENTAS": 171
          },
          {
            "ESTADOS": "QUINTANA ROO",
            "opacity": 0.5,
            "Promedio Nacional": 439,
            "HERRAMIENTAS": 167
          },
          {
            "ESTADOS": "CAMPECHE",
            "opacity": 0.5,
            "Promedio Nacional": 439,
            "HERRAMIENTAS": 160
          },
          {
            "ESTADOS": "COLIMA",
            "opacity": 0.5,
            "Promedio Nacional": 439,
            "HERRAMIENTAS": 159
          },
          {
            "ESTADOS": "NAYARIT",
            "opacity": 0.5,
            "Promedio Nacional": 439,
            "HERRAMIENTAS": 129
          },
          {
            "ESTADOS": "BAJA CALIFORNIA SUR",
            "opacity": 0.5,
            "Promedio Nacional": 439,
            "HERRAMIENTAS": 107
          },
          {
            "ESTADOS": "TLAXCALA",
            "opacity": 0.5,
            "Promedio Nacional": 439,
            "HERRAMIENTAS": 99
          }

    ];

//Formato a 1 decimal

chart.padding(40, 40, 40, 40);

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "ESTADOS";
categoryAxis.renderer.minGridDistance = 40;

//Etiquetas debajo de la barra vertical centradas
categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryX = "ESTADOS";
series.dataFields.valueY = "HERRAMIENTAS";
series.tooltipText = "{valueY.value}"
series.columns.template.strokeOpacity = 0;
series.columns.template.fill = am4core.color('#00A8E4');
series.columns.template.propertyFields.fillOpacity = "opacity";

//Valores de las barras verticales
var valueLabel = series.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY}";
valueLabel.label.dy = -20;
valueLabel.label.truncate = false;
valueLabel.label.hideOversized = false;


var lineSeries = chart.series.push(new am4charts.LineSeries());
lineSeries.dataFields.categoryX = "ESTADOS";
lineSeries.dataFields.valueY = "Promedio Nacional";
lineSeries.tooltipText = "Promedio Nacional: {valueY.value}";
lineSeries.sequencedInterpolation = true;
lineSeries.defaultState.transitionDuration = 1500;
lineSeries.stroke = am4core.color("#FF0000"); //chart.colors.getIndex(11);
lineSeries.fill = lineSeries.stroke;
lineSeries.strokeWidth = 2;

var label = chart.createChild(am4core.Label);
label.text = "Promedio Nacional: 439";
label.fontSize = 14;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(90);
label.horizontalCenter = "middle";
label.y = am4core.percent(50);

chart.cursor = new am4charts.XYCursor();


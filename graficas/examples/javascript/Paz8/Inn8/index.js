am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);



    chart.data = [
        {
            "ESTADOS": "CIUDADDEMEXICO",
            "HERRAMIENTAS": 2681
          },
          {
            "ESTADOS": "MEXICO",
            "HERRAMIENTAS": 1119
          },
          {
            "ESTADOS": "JALISCO",
            "HERRAMIENTAS": 968
          },
          {
            "ESTADOS": "NUEVOLEON",
            "HERRAMIENTAS": 741
          },
          {
            "ESTADOS": "PUEBLA",
            "HERRAMIENTAS": 532
          },
          {
            "ESTADOS": "YUCATAN",
            "HERRAMIENTAS": 527
          },
          {
            "ESTADOS": "QUERETARO",
            "HERRAMIENTAS": 492
          },
          {
            "ESTADOS": "GUANAJUATO",
            "HERRAMIENTAS": 492
          },
          {
            "ESTADOS": "SINALOA",
            "HERRAMIENTAS": 464
          },
          {
            "ESTADOS": "COAHUILADEZARAGOZA",
            "HERRAMIENTAS": 462
          },
          {
            "ESTADOS": "PROMEDIONACIONAL",
            "HERRAMIENTAS": 439
          },
          {
            "ESTADOS": "SONORA",
            "HERRAMIENTAS": 420
          },
          {
            "ESTADOS": "VERACRUZDEIGNACIODELALLAVE",
            "HERRAMIENTAS": 417
          },
          {
            "ESTADOS": "CHIAPAS",
            "HERRAMIENTAS": 398
          },
          {
            "ESTADOS": "MICHOACANDEOCAMPO",
            "HERRAMIENTAS": 390
          },
          {
            "ESTADOS": "CHIHUAHUA",
            "HERRAMIENTAS": 369
          },
          {
            "ESTADOS": "MORELOS",
            "HERRAMIENTAS": 354
          },
          {
            "ESTADOS": "HIDALGO",
            "HERRAMIENTAS": 317
          },
          {
            "ESTADOS": "BAJACALIFORNIA",
            "HERRAMIENTAS": 316
          },
          {
            "ESTADOS": "SANLUISPOTOSI",
            "HERRAMIENTAS": 310
          },
          {
            "ESTADOS": "AGUASCALIENTES",
            "HERRAMIENTAS": 273
          },
          {
            "ESTADOS": "TAMAULIPAS",
            "HERRAMIENTAS": 234
          },
          {
            "ESTADOS": "TABASCO",
            "HERRAMIENTAS": 230
          },
          {
            "ESTADOS": "OAXACA",
            "HERRAMIENTAS": 209
          },
          {
            "ESTADOS": "GUERRERO",
            "HERRAMIENTAS": 178
          },
          {
            "ESTADOS": "ZACATECAS",
            "HERRAMIENTAS": 175
          },
          {
            "ESTADOS": "DURANGO",
            "HERRAMIENTAS": 171
          },
          {
            "ESTADOS": "QUINTANAROO",
            "HERRAMIENTAS": 167
          },
          {
            "ESTADOS": "CAMPECHE",
            "HERRAMIENTAS": 160
          },
          {
            "ESTADOS": "COLIMA",
            "HERRAMIENTAS": 159
          },
          {
            "ESTADOS": "NAYARIT",
            "HERRAMIENTAS": 129
          },
          {
            "ESTADOS": "BAJACALIFORNIASUR",
            "HERRAMIENTAS": 107
          },
          {
            "ESTADOS": "TLAXCALA",
            "HERRAMIENTAS": 99
          }

    ];

//Formato a 1 decimal
chart.numberFormatter.numberFormat = "#.0|#.0|0.0";

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

//Valores de las barras verticales
var valueLabel = series.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY}";
valueLabel.label.dy = -20;

chart.cursor = new am4charts.XYCursor();


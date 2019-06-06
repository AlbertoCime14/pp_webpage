am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);



    chart.data = [
        {
            "ESTADOS": "Baja California",
            "HERRAMIENTAS": 1.01,
            "Nacional": 1.22
        },
        {
            "ESTADOS": "Nayarit",
            "HERRAMIENTAS": 1.02,
            "Nacional": 1.22
        },
        {
            "ESTADOS": "Quintana Roo",
            "HERRAMIENTAS": 1.4,
            "Nacional": 1.22
        },
        {
            "ESTADOS": "Oaxaca",
            "HERRAMIENTAS": 1.46,
            "Nacional": 1.22
        },
        {
            "ESTADOS": "Zacatecas",
            "HERRAMIENTAS": 1.55,
            "Nacional": 1.22
        },
        {
            "ESTADOS": "Guerrero",
            "HERRAMIENTAS": 1.65,
            "Nacional": 1.22
        },
        {
            "ESTADOS": "Chihuahua",
            "HERRAMIENTAS": 1.76,
            "Nacional": 1.22
        },
        {
            "ESTADOS": "Campeche",
            "HERRAMIENTAS": 1.8,
            "Nacional": 1.22
        },
        {
            "ESTADOS": "San Luis Potosí",
            "HERRAMIENTAS": 1.83,
            "Nacional": 1.22
        },
        {
            "ESTADOS": "Tabasco",
            "HERRAMIENTAS": 1.83,
            "Nacional": 1.22
        },
        {
            "ESTADOS": "Tlaxcala",
            "HERRAMIENTAS": 1.85,
            "Nacional": 1.22
        },
        {
            "ESTADOS": "Durango",
            "HERRAMIENTAS": 1.87,
            "Nacional": 1.22
        },
        {
            "ESTADOS": "Ciudad de México",
            "HERRAMIENTAS": 1.89,
            "Nacional": 1.22
        },
        {
            "ESTADOS": "Coahuila",
            "HERRAMIENTAS": 1.95,
            "Nacional": 1.22
        },
        {
            "ESTADOS": "Veracruz",
            "HERRAMIENTAS": 2.05,
            "Nacional": 1.22
        },
        {
            "ESTADOS": "Michoacán",
            "HERRAMIENTAS": 2.08,
            "Nacional": 1.22
        },
        {
            "ESTADOS": "Hidalgo",
            "HERRAMIENTAS": 2.19,
            "Nacional": 1.22
        },
        {
            "ESTADOS": "Chiapas",
            "HERRAMIENTAS": 2.2,
            "Nacional": 1.22
        },
        {
            "ESTADOS": "Sinaloa",
            "HERRAMIENTAS": 2.26,
            "Nacional": 1.22
        },
        {
            "ESTADOS": "Tamaulipas",
            "HERRAMIENTAS": 2.28,
            "Nacional": 1.22
        },
        {
            "ESTADOS": "Baja California Sur",
            "HERRAMIENTAS": 2.29,
            "Nacional": 1.22
        },
        {
            "ESTADOS": "Puebla",
            "HERRAMIENTAS": 2.33,
            "Nacional": 1.22
        },
        {
            "ESTADOS": "Estado de México",
            "HERRAMIENTAS": 2.38,
            "Nacional": 1.22
        },
        {
            "ESTADOS": "Sonora",
            "HERRAMIENTAS": 2.43,
            "Nacional": 1.22
        },
        {
            "ESTADOS": "Jalisco",
            "HERRAMIENTAS": 2.44,
            "Nacional": 1.22
        },
        {
            "ESTADOS": "Guanajuato",
            "HERRAMIENTAS": 2.55,
            "Nacional": 1.22
        },
        {
            "ESTADOS": "Querétaro",
            "HERRAMIENTAS": 2.7,
            "Nacional": 1.22
        },
        {
            "ESTADOS": "Yucatán",
            "HERRAMIENTAS": 2.88,
            "Nacional": 1.22
        },
        {
            "ESTADOS": "Morelos",
            "HERRAMIENTAS": 2.96,
            "Nacional": 1.22
        },
        {
            "ESTADOS": "Aguascalientes",
            "HERRAMIENTAS": 3.1,
            "Nacional": 1.22
        },
        {
            "ESTADOS": "Colima",
            "HERRAMIENTAS": 3.51,
            "Nacional": 1.22
        },
        {
            "ESTADOS": "Nuevo León",
            "HERRAMIENTAS": 3.55,
            "Nacional": 1.22
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

// Create category axis
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Estados";
categoryAxis.renderer.opposite = true;

// Create value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//valueAxis.renderer.inversed = true;
valueAxis.title.text = "Place taken";
valueAxis.renderer.minLabelPosition = 0.01;

// Create series
var series1 = chart.series.push(new am4charts.LineSeries());
series1.dataFields.valueY = "Nacional";
series1.dataFields.categoryX = "Estados";
series1.name = "Nacional";
series1.strokeWidth = 3;
series1.bullets.push(new am4charts.CircleBullet());
series1.tooltipText = "Asistencia a {name} en {categoryX}: {valueY}";
series1.legendSettings.valueText = "{valueY}";
series1.visible = true;


// Add chart cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "zoomY";


chart.cursor = new am4charts.XYCursor();




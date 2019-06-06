am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);



    chart.data = [
        {
          "Entidad": "Michoacán de Ocampo",
          "Sin derechohabiencia": 23.9
        },
        {
          "Entidad": "México",
          "Sin derechohabiencia": 19.4
        },
        {
          "Entidad": "Ciudad de México",
          "Sin derechohabiencia": 19.1
        },
        {
          "Entidad": "Veracruz",
          "Sin derechohabiencia": 18.8
        },
        {
          "Entidad": "Puebla",
          "Sin derechohabiencia": 18.1
        },
        {
          "Entidad": "Jalisco",
          "Sin derechohabiencia": 17.3
        },
        {
          "Entidad": "Quintana Roo",
          "Sin derechohabiencia": 17.3
        },
        {
          "Entidad": "Baja California",
          "Sin derechohabiencia": 16.1
        },
        {
          "Entidad": "Hidalgo",
          "Sin derechohabiencia": 16
        },
        {
          "Entidad": "Chiapas",
          "Sin derechohabiencia": 15.8
        },
        {
          "Entidad": "Nacional",
          "Sin derechohabiencia": 15.7
        },
        {
          "Entidad": "Oaxaca",
          "Sin derechohabiencia": 15.1
        },
        {
          "Entidad": "Tlaxcala",
          "Sin derechohabiencia": 15.1
        },
        {
          "Entidad": "Durango",
          "Sin derechohabiencia": 14.2
        },
        {
          "Entidad": "Nayarit",
          "Sin derechohabiencia": 14.1
        },
        {
          "Entidad": "Morelos",
          "Sin derechohabiencia": 13.6
        },
        {
          "Entidad": "Guanajuato",
          "Sin derechohabiencia": 13.3
        },
        {
          "Entidad": "Coahuila ",
          "Sin derechohabiencia": 13.2
        },
        {
          "Entidad": "Guerrero",
          "Sin derechohabiencia": 13.1
        },
        {
          "Entidad": "Tabasco",
          "Sin derechohabiencia": 12.9
        },
        {
          "Entidad": "Tamaulipas",
          "Sin derechohabiencia": 12.9
        },
        {
          "Entidad": "Sinaloa",
          "Sin derechohabiencia": 12.3
        },
        {
          "Entidad": "Querétaro",
          "Sin derechohabiencia": 12.2
        },
        {
          "Entidad": "Aguascalientes",
          "Sin derechohabiencia": 11.8
        },
        {
          "Entidad": "Yucatán",
          "Sin derechohabiencia": 11.8
        },
        {
          "Entidad": "Zacatecas",
          "Sin derechohabiencia": 11.6
        },
        {
          "Entidad": "Sonora",
          "Sin derechohabiencia": 11.4
        },
        {
          "Entidad": "Baja California Sur",
          "Sin derechohabiencia": 11.2
        },
        {
          "Entidad": "Nuevo León",
          "Sin derechohabiencia": 10.5
        },
        {
          "Entidad": "Campeche",
          "Sin derechohabiencia": 10.4
        },
        {
          "Entidad": "Colima",
          "Sin derechohabiencia": 10.4
        },
        {
          "Entidad": "Chihuahua",
          "Sin derechohabiencia": 9.8
        },
        {
          "Entidad": "San Luis Potosí",
          "Sin derechohabiencia": 8.8
        }
       ];

chart.padding(40, 40, 40, 40);

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "Entidad";
categoryAxis.renderer.minGridDistance = 1;
categoryAxis.renderer.labels.template.rotation = -90;

//Etiquetas debajo de la barra vertical centradas
categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryX = "Entidad";
series.dataFields.valueY = "Sin derechohabiencia";
series.tooltipText = "{valueY.value}"
series.columns.template.strokeOpacity = 0;

chart.cursor = new am4charts.XYCursor();

//Valores de las barras verticales
var valueLabel = series.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY}";
valueLabel.label.dy = -10;

// as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
//series.columns.template.adapter.add("fill", function (fill, target) {
//	return chart.colors.getIndex(target.dataItem.index);
//});
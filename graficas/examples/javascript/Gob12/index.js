am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

//            2017	2016    2015  2014
//Nacional	96.22	97.34  95.33  92.22
//Yucat�n	89.79	88.50   86.3   84.3


// Add data
chart.data = [
    {
      "Descripcion": "Recursos Federales",
      "Promedio nacional": 100,
      "Yucatán": 100
    },
    {
      "Descripcion": "Acceso Público",
      "Promedio nacional": 94.8,
      "Yucatán": 95.83
    },
    {
      "Descripcion": "Poderes y Dependencias",
      "Promedio nacional": 94.7,
      "Yucatán": 100
    },
    {
      "Descripcion": "Municipios",
      "Promedio nacional": 89.1,
      "Yucatán": 50
    },
    {
      "Descripcion": "Ley de Ingresos",
      "Promedio nacional": 87.8,
      "Yucatán": 83.3
    },
    {
      "Descripcion": "Resignación y excedentes",
      "Promedio nacional": 87.1,
      "Yucatán": 93.3
    },
    {
      "Descripcion": "Tabuladores Plazas",
      "Promedio nacional": 75.4,
      "Yucatán": 100
    },
    {
      "Descripcion": "Armonización Contable",
      "Promedio nacional": 72.4,
      "Yucatán": 83.3
    },
    {
      "Descripcion": "Deuda Pública",
      "Promedio nacional": 72.1,
      "Yucatán": 84.62
    },
    {
      "Descripcion": "Rubros Específicos",
      "Promedio nacional": 68.6,
      "Yucatán": 85.71
    }
   ];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Descripcion";
categoryAxis.numberFormatter.numberFormat = "#";
categoryAxis.renderer.inversed = true;
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.cellStartLocation = 0.1;
categoryAxis.renderer.cellEndLocation = 0.9;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.opposite = true;

// Create series
function createSeries(field, name, color) {
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "Descripcion";
    series.name = name;
    series.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
    series.columns.template.height = am4core.percent(100);
    series.fill = am4core.color(color);
   series.sequencedInterpolation = true;

    var valueLabel = series.bullets.push(new am4charts.LabelBullet());
    valueLabel.label.text = "{valueY}";
    valueLabel.label.dy = -20;
  
    //Etiquetas debajo de la barra vertical centradas
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.renderer.labels.template.rotation = 270;
    
    //valueLabel.label.dx = 10;
    //valueLabel.label.hideOversized = false;
    //valueLabel.label.truncate = false;

    //var categoryLabel = series.bullets.push(new am4charts.LabelBullet());
    //categoryLabel.label.text = "{name}";
    //categoryLabel.label.horizontalCenter = "center";
    //categoryLabel.label.dy = -10;
    //categoryLabel.label.fill = am4core.color("#fff");
    //categoryLabel.label.hideOversized = false;
    //categoryLabel.label.truncate = false;
}

createSeries("Promedio nacional", "Promedio nacional","#406F77");
createSeries("Yucatán", "Yucatán","#60A1AD");

// Add legend
chart.legend = new am4charts.Legend();
chart.numberFormatter.numberFormat = "#.#";
//chart.exporting.menu = new am4core.ExportMenu();
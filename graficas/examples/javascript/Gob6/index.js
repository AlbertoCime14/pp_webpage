am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

//chart.language = "";

var data = [];

chart.data = [
{
      "Estado": "Promedio nacional",
      "Muy Frecuente": 53.6,
      "Frecuente": 37.5,
      "Poco Frecuente": 7,
      "Nada": 0.8,
      "No sabe o No responde": 1.1
    },
    {
      "Estado": "Aguascalientes",
      "Muy Frecuente": 34.6,
      "Frecuente": 49.1,
      "Poco Frecuente": 12.9,
      "Nada": 1.2,
      "No sabe o No responde": 2.2
    },
    {
      "Estado": "Baja California",
      "Muy Frecuente": 51.8,
      "Frecuente": 36.9,
      "Poco Frecuente": 8.3,
      "Nada": 1.4,
      "No sabe o No responde": 1.6
    },
    {
      "Estado": "Baja California Sur",
      "Muy Frecuente": 42.5,
      "Frecuente": 46.9,
      "Poco Frecuente": 7.8,
      "Nada": 1,
      "No sabe o No responde": 1.7
    },
    {
      "Estado": "Campeche",
      "Muy Frecuente": 31.7,
      "Frecuente": 51.9,
      "Poco Frecuente": 15,
      "Nada": 0.8,
      "No sabe o No responde": 0.5
    },
    {
      "Estado": "Coahuila de Zaragoza",
      "Muy Frecuente": 50.6,
      "Frecuente": 35.2,
      "Poco Frecuente": 11,
      "Nada": 1.9,
      "No sabe o No responde": 1.3
    },
    {
      "Estado": "Colima",
      "Muy Frecuente": 42.7,
      "Frecuente": 42.3,
      "Poco Frecuente": 12.3,
      "Nada": 1.4,
      "No sabe o No responde": 1.2
    },
    {
      "Estado": "Chiapas",
      "Muy Frecuente": 52.3,
      "Frecuente": 37.6,
      "Poco Frecuente": 8.1,
      "Nada": 0.5,
      "No sabe o No responde": 1.6
    },
    {
      "Estado": "Chihuahua",
      "Muy Frecuente": 44.1,
      "Frecuente": 43.2,
      "Poco Frecuente": 10.8,
      "Nada": 0.5,
      "No sabe o No responde": 1.3
    },
    {
      "Estado": "Ciudad de México",
      "Muy Frecuente": 68.3,
      "Frecuente": 28,
      "Poco Frecuente": 3,
      "Nada": 0.5,
      "No sabe o No responde": 0.3
    },
    {
      "Estado": "Durango",
      "Muy Frecuente": 43.1,
      "Frecuente": 40.8,
      "Poco Frecuente": 13,
      "Nada": 2.2,
      "No sabe o No responde": 0.9
    },
    {
      "Estado": "Guanajuato",
      "Muy Frecuente": 42.8,
      "Frecuente": 48.1,
      "Poco Frecuente": 7.9,
      "Nada": 0.8,
      "No sabe o No responde": 0.5
    },
    {
      "Estado": "Guerrero",
      "Muy Frecuente": 54,
      "Frecuente": 38.3,
      "Poco Frecuente": 6.4,
      "Nada": 0.8,
      "No sabe o No responde": 0.4
    },
    {
      "Estado": "Hidalgo",
      "Muy Frecuente": 31.9,
      "Frecuente": 50.1,
      "Poco Frecuente": 15.1,
      "Nada": 1.7,
      "No sabe o No responde": 1.2
    },
    {
      "Estado": "Jalisco",
      "Muy Frecuente": 49.9,
      "Frecuente": 41.8,
      "Poco Frecuente": 7.3,
      "Nada": 0.4,
      "No sabe o No responde": 0.6
    },
    {
      "Estado": "Estado de México",
      "Muy Frecuente": 63.3,
      "Frecuente": 30.1,
      "Poco Frecuente": 4.5,
      "Nada": 0.5,
      "No sabe o No responde": 1.7
    },
    {
      "Estado": "Michoacán de Ocampo",
      "Muy Frecuente": 59.1,
      "Frecuente": 30.9,
      "Poco Frecuente": 6.4,
      "Nada": 1.8,
      "No sabe o No responde": 1.9
    },
    {
      "Estado": "Morelos",
      "Muy Frecuente": 55.9,
      "Frecuente": 37.2,
      "Poco Frecuente": 5.2,
      "Nada": 0.7,
      "No sabe o No responde": 1
    },
    {
      "Estado": "Nayarit",
      "Muy Frecuente": 53.2,
      "Frecuente": 40.3,
      "Poco Frecuente": 4.6,
      "Nada": 1.2,
      "No sabe o No responde": 0.7
    },
    {
      "Estado": "Nuevo León",
      "Muy Frecuente": 45.1,
      "Frecuente": 44.7,
      "Poco Frecuente": 7.8,
      "Nada": 1,
      "No sabe o No responde": 1.5
    },
    {
      "Estado": "Oaxaca",
      "Muy Frecuente": 49.6,
      "Frecuente": 44.7,
      "Poco Frecuente": 4.1,
      "Nada": 0.8,
      "No sabe o No responde": 0.7
    },
    {
      "Estado": "Puebla",
      "Muy Frecuente": 53.8,
      "Frecuente": 40.9,
      "Poco Frecuente": 4.2,
      "Nada": 0.3,
      "No sabe o No responde": 0.9
    },
    {
      "Estado": "Querétaro",
      "Muy Frecuente": 25.8,
      "Frecuente": 49.3,
      "Poco Frecuente": 19.4,
      "Nada": 2.2,
      "No sabe o No responde": 3.3
    },
    {
      "Estado": "Quintana Roo",
      "Muy Frecuente": 55.8,
      "Frecuente": 37.2,
      "Poco Frecuente": 5.5,
      "Nada": 1,
      "No sabe o No responde": 0.4
    },
    {
      "Estado": "San Luis Potosí",
      "Muy Frecuente": 48.9,
      "Frecuente": 41.2,
      "Poco Frecuente": 7.6,
      "Nada": 1.2,
      "No sabe o No responde": 1.2
    },
    {
      "Estado": "Sinaloa",
      "Muy Frecuente": 56.5,
      "Frecuente": 35.7,
      "Poco Frecuente": 6.2,
      "Nada": 0.3,
      "No sabe o No responde": 1.4
    },
    {
      "Estado": "Sonora",
      "Muy Frecuente": 51.7,
      "Frecuente": 39.8,
      "Poco Frecuente": 7.2,
      "Nada": 0.8,
      "No sabe o No responde": 0.5
    },
    {
      "Estado": "Tabasco",
      "Muy Frecuente": 48.9,
      "Frecuente": 45.6,
      "Poco Frecuente": 4.3,
      "Nada": 0.7,
      "No sabe o No responde": 0.6
    },
    {
      "Estado": "Tamaulipas",
      "Muy Frecuente": 43.1,
      "Frecuente": 42.9,
      "Poco Frecuente": 11.8,
      "Nada": 1.2,
      "No sabe o No responde": 1
    },
    {
      "Estado": "Tlaxcala",
      "Muy Frecuente": 26.7,
      "Frecuente": 57.7,
      "Poco Frecuente": 11.7,
      "Nada": 1.7,
      "No sabe o No responde": 2.2
    },
    {
      "Estado": "Veracruz de Ignacio de la Llave",
      "Muy Frecuente": 57.9,
      "Frecuente": 37.1,
      "Poco Frecuente": 4.2,
      "Nada": 0,
      "No sabe o No responde": 0.8
    },
    {
      "Estado": "[bold]Yucatán[/]",
      "Muy Frecuente": 31,
      "Frecuente": 44.1,
      "Poco Frecuente": 21,
      "Nada": 2.2,
      "No sabe o No responde": 1.8
    },
    {
      "Estado": "Zacatecas",
      "Muy Frecuente": 47.1,
      "Frecuente": 43.7,
      "Poco Frecuente": 6.8,
      "Nada": 0.9,
      "No sabe o No responde": 1.5
    }
];

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.ticks.template.disabled = true;
categoryAxis.renderer.line.opacity = 0;
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.minGridDistance = 40;
categoryAxis.dataFields.category = "Estado";

categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.renderer.line.opacity = 0;
valueAxis.renderer.ticks.template.disabled = true;
valueAxis.min = 0;
//valueAxis.title.text = "Personas";

// Create series
function createSeries(field, name, stacked, color) {
    var columnSeries = chart.series.push(new am4charts.ColumnSeries());
    columnSeries.dataFields.valueY = field;
    columnSeries.dataFields.categoryX = "Estado";
    columnSeries.name = name;
    columnSeries.columns.template.tooltipText = "{name}: [bold]{valueY}[/]";
    columnSeries.stacked = stacked;
    columnSeries.columns.template.width = am4core.percent(95);
    //columnSeries.columns.template.stroke = am4core.color(color);
    columnSeries.columns.template.fill = am4core.color(color);
    columnSeries.columns.template.labelText = "[bold]{valueY}[/]";


    var columnTemplate = columnSeries.columns.template;
    //columnTemplate.column.cornerRadiusTopLeft = 10;
    //columnTemplate.column.cornerRadiusTopRight = 10;
    columnTemplate.strokeWidth = 0;
    columnTemplate.strokeOpacity = 0;
    columnTemplate.stroke = columnSeries.fill;

    var desaturateFilter = new am4core.DesaturateFilter();
    desaturateFilter.saturation = 0.5;

    columnTemplate.filters.push(desaturateFilter);

    // first way - get properties from data. but can only be done with columns, as they are separate objects.    
    //columnTemplate.propertyFields.strokeDasharray = "stroke";
    columnTemplate.propertyFields.fillOpacity = "opacity";

    // add some cool saturation effect on hover
    var desaturateFilterHover = new am4core.DesaturateFilter();
    desaturateFilterHover.saturation = 1;

    var hoverState = columnTemplate.states.create("hover");
    hoverState.transitionDuration = 2000;
    hoverState.filters.push(desaturateFilterHover);
}

createSeries("Muy Frecuente", "Muy Frecuente", true, "#233b3f");
createSeries("Frecuente", "Frecuente", true, "#3e6a72");
createSeries("Poco Frecuente", "Poco Frecuente", true, "#4c8690");
createSeries("Estado", "Estado", true, "#5d9fab");
createSeries("Nada", "Nada", true, "#7ab1bb");
createSeries("No sabe o No responde", "No sabe o No responde", true, "#8fbec7");


chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "none";
chart.cursor.lineX.opacity = 0;
chart.cursor.lineY.opacity = 0;

chart.addClassNames = true;

chart.legend = new am4charts.Legend();
//chart.exporting.menu = new am4core.ExportMenu();
am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);


chart.data = [
{'country': 'Ciudad de México ', 'visits':1063.0940715596,'stroke': 3.3,'opacity': 0.5,'promedio': 70},
{'country': 'Chihuahua', 'visits':694.178657663294,'stroke': 3.3,'opacity': 0.5,'promedio': 70},
{'country': 'Tlaxcala', 'visits':255.428227433456,'stroke': 3.3,'opacity': 0.5,'promedio': 70},
{'country': 'México', 'visits':228.614946068581,'stroke': 3.3,'opacity': 0.5,'promedio': 70},
{'country': 'Morelos', 'visits':130.591153234428,'stroke': 3.3,'opacity': 0.5,'promedio': 70},
{'country': 'Quintana Roo', 'visits':110.982539691391,'stroke': 3.3,'opacity': 0.5,'promedio': 70},
{'country': '[font-size: 20px;font-weight: bold]Yucatán[/]', 'visits':101.675670726124,'promedio': 70},
{'country': 'Guerrero', 'visits':101.085267177611,'stroke': 3.3,'opacity': 0.5,'promedio': 70},
{'country': 'Michoacán', 'visits':97.036483734444,'stroke': 3.3,'opacity': 0.5,'promedio': 70},
{'country': 'Oaxaca', 'visits':87.634003179391,'stroke': 3.3,'opacity': 0.5,'promedio': 70},
{'country': 'Tabasco', 'visits':83.0340318930648,'stroke': 3.3,'opacity': 0.5,'promedio': 70},
{'country': 'Guanajuato', 'visits':81.2186157882115,'stroke': 3.3,'opacity': 0.5,'promedio': 70},
{'country': 'Durango ', 'visits':77.0778303580691,'stroke': 3.3,'opacity': 0.5,'promedio': 70},
{'country': 'Campeche', 'visits':74.9073360175905,'stroke': 3.3,'opacity': 0.5,'promedio': 70},
{'country': 'San Luis Potosí', 'visits':64.6574192661413,'stroke': 3.3,'opacity': 0.5,'promedio': 70},
{'country': 'Sinaloa', 'visits':57.7891041760156,'stroke': 3.3,'opacity': 0.5,'promedio': 70},
{'country': 'Veracruz', 'visits':56.8368532809534,'stroke': 3.3,'opacity': 0.5,'promedio': 70},
{'country': 'Querétaro', 'visits':54.1807613078209,'stroke': 3.3,'opacity': 0.5,'promedio': 70},
{'country': 'Puebla', 'visits':53.8123844255654,'stroke': 3.3,'opacity': 0.5,'promedio': 70},
{'country': 'Nayarit', 'visits':52.3569681070565,'stroke': 3.3,'opacity': 0.5,'promedio': 70},
{'country': 'Aguascalientes', 'visits':51.5920072022544,'stroke': 3.3,'opacity': 0.5,'promedio': 70},
{'country': 'Jalisco', 'visits':51.403404013733,'stroke': 3.3,'opacity': 0.5,'promedio': 70},
{'country': 'Tamaulipas', 'visits':34.1519740184131,'stroke': 3.3,'opacity': 0.5,'promedio': 70},
{'country': 'Sonora ', 'visits':32.390453466599,'stroke': 3.3,'opacity': 0.5,'promedio': 70},
{'country': 'Chiapas ', 'visits':31.7807235886432,'stroke': 3.3,'opacity': 0.5,'promedio': 70},
{'country': 'Baja California Sur', 'visits':22.4999751117483,'stroke': 3.3,'opacity': 0.5,'promedio': 70},
{'country': 'Nuevo León', 'visits':22.1422238229549,'stroke': 3.3,'opacity': 0.5,'promedio': 70},
{'country': 'Baja California ', 'visits':11.6150466030609,'stroke': 3.3,'opacity': 0.5,'promedio': 70},
{'country': 'Zacatecas', 'visits':5.86363068392128,'stroke': 3.3,'opacity': 0.5,'promedio': 70},
{'country': 'Hidalgo', 'visits':4.25446952128761,'stroke': 3.3,'opacity': 0.5,'promedio': 70},
{'country': 'Coahuila', 'visits':-15.8697930311763,'stroke': 3.3,'opacity': 0.5,'promedio': 70},
{'country': 'Colima', 'visits':-90.4290334574771,'stroke': 3.3,'opacity': 0.5,'promedio': 70}
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
valueAxis.min = -300;
valueAxis.max = 1500;
valueAxis.strictMinMax = true;
valueAxis.numberFormatter.numberFormat = "#.#";


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

//Valores de las barras verticales
var valueLabel = series.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY.value}";
valueLabel.label.dy = -40;
valueLabel.label.truncate = false;
valueLabel.label.hideOversized = false;
//valueLabel.label.rotation = 270;



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
label.text = "Promedio nacional: 70";
label.fontSize = 16;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(90);//Ajusta la alineación horizontal via porcentaje
label.horizontalCenter = "middle";
label.y = 360; //Ajusta alineación vertical, positivo (hacia abajo) negativo (hacia arriba
//label.x = 1400;
//.-Para colocar la etiqueta del valor del promedio nacional


chart.cursor = new am4charts.XYCursor();

//chart.exporting.menu = new am4core.ExportMenu();
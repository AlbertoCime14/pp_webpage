am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_kelly);

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);
// Add data
 chart.data = [
 { 'Periodo':'2008/01','Yucatan':57.1567615856192,'Promedio':55.5},
{ 'Periodo':'2008/02','Yucatan':57.7407413114325,'Variacion':1.02171590834182,'Promedio':55.5},
{ 'Periodo':'2008/03','Yucatan':57.1889915363323,'Variacion':-0.955564065456444,'Promedio':55.5},
{ 'Periodo':'2008/04','Yucatan':57.8600237069654,'Variacion':1.17335898501868,'Promedio':55.5},
{ 'Periodo':'2009/01','Yucatan':54.2203346736602,'Variacion':-6.29050733151878,'Promedio':55.5},
{ 'Periodo':'2009/02','Yucatan':55.1798387815849,'Variacion':1.76963885173287,'Promedio':55.5},
{ 'Periodo':'2009/03','Yucatan':55.5176791865283,'Variacion':0.612253338181418,'Promedio':55.5},
{ 'Periodo':'2009/04','Yucatan':56.2453471854051,'Variacion':1.3106959972732,'Promedio':55.5},
{ 'Periodo':'2010/01','Yucatan':55.5307438567881,'Variacion':-1.2705110100243,'Promedio':55.5},
{ 'Periodo':'2010/02','Yucatan':55.8170146711256,'Variacion':0.515517701466074,'Promedio':55.5},
{ 'Periodo':'2010/03','Yucatan':56.2599915482067,'Variacion':0.793623377550869,'Promedio':55.5},
{ 'Periodo':'2010/04','Yucatan':54.1130409131947,'Variacion':-3.81612328038194,'Promedio':55.5},
{ 'Periodo':'2011/01','Yucatan':54.1494060080432,'Variacion':0.067202090725,'Promedio':55.5},
{ 'Periodo':'2011/02','Yucatan':56.2588408600815,'Variacion':3.89558262508905,'Promedio':55.5},
{ 'Periodo':'2011/03','Yucatan':54.9441083557242,'Variacion':-2.33693493192836,'Promedio':55.5},
{ 'Periodo':'2011/04','Yucatan':56.812190302868,'Variacion':3.39996771819324,'Promedio':55.5},
{ 'Periodo':'2012/01','Yucatan':54.6779354804925,'Variacion':-3.75668463229055,'Promedio':55.5},
{ 'Periodo':'2012/02','Yucatan':56.8605359431695,'Variacion':3.99173897751822,'Promedio':55.5},
{ 'Periodo':'2012/03','Yucatan':55.7377789825608,'Variacion':-1.9745803341195,'Promedio':55.5},
{ 'Periodo':'2012/04','Yucatan':55.6770795509706,'Variacion':-0.10890177667308,'Promedio':55.5},
{ 'Periodo':'2013/01','Yucatan':56.0469474270276,'Variacion':0.664309046092114,'Promedio':55.5},
{ 'Periodo':'2013/02','Yucatan':56.3337011355123,'Variacion':0.511631269228449,'Promedio':55.5},
{ 'Periodo':'2013/03','Yucatan':54.4698284509049,'Variacion':-3.30862813384814,'Promedio':55.5},
{ 'Periodo':'2013/04','Yucatan':56.2248708561572,'Variacion':3.22204503881295,'Promedio':55.5},
{ 'Periodo':'2014/01','Yucatan':55.6041516097547,'Variacion':-1.10399408117899,'Promedio':55.5},
{ 'Periodo':'2014/02','Yucatan':54.5531993361608,'Variacion':-1.89006080152024,'Promedio':55.5},
{ 'Periodo':'2014/03','Yucatan':56.1943991952256,'Variacion':3.00843924652631,'Promedio':55.5},
{ 'Periodo':'2014/04','Yucatan':53.6988720457695,'Variacion':-4.4408823391568,'Promedio':55.5},
{ 'Periodo':'2015/01','Yucatan':54.040978005474,'Variacion':0.637082208007702,'Promedio':55.5},
{ 'Periodo':'2015/02','Yucatan':54.4446155388758,'Variacion':0.746910119504113,'Promedio':55.5},
{ 'Periodo':'2015/03','Yucatan':54.0042838865489,'Variacion':-0.80876988104091,'Promedio':55.5},
{ 'Periodo':'2015/04','Yucatan':53.7321367032548,'Variacion':-0.503936287472679,'Promedio':55.5},
{ 'Periodo':'2016/01','Yucatan':53.9409634402927,'Variacion':0.388644021716703,'Promedio':55.5},
{ 'Periodo':'2016/02','Yucatan':55.330005789415,'Variacion':2.57511594256177,'Promedio':55.5},
{ 'Periodo':'2016/03','Yucatan':55.6486292698168,'Variacion':0.575860197113416,'Promedio':55.5},
{ 'Periodo':'2016/04','Yucatan':56.2626748306031,'Variacion':1.10343339780926,'Promedio':55.5},
{ 'Periodo':'2017/01','Yucatan':55.6623859591848,'Variacion':-1.06693980196566,'Promedio':55.5},
{ 'Periodo':'2017/02','Yucatan':55.3197144592953,'Variacion':-0.615624885610959,'Promedio':55.5},
{ 'Periodo':'2017/03','Yucatan':54.3582272850869,'Variacion':-1.73805520076552,'Promedio':55.5},
{ 'Periodo':'2017/04','Yucatan':55.3310090838623,'Variacion':1.78957601702794,'Promedio':55.5},
{ 'Periodo':'2018/01','Yucatan':54.1548435807955,'Variacion':-2.125689595294,'Promedio':55.5},
{ 'Periodo':'2018/02','Yucatan':56.2948229046925,'Variacion':3.95159358313779,'Promedio':55.5},
{ 'Periodo':'2018/03','Yucatan':55.7415702586536,'Variacion':-0.982777132056218,'Promedio':55.5},
{ 'Periodo':'2018/04','Yucatan':56.0352689697928,'Variacion':0.526893501163135,'Promedio':55.5}
];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Periodo";
categoryAxis.title.text = "";

// First value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "";

// Second value axis
var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis2.title.text = "";
valueAxis2.renderer.opposite = true;
// Invertir el orden de los valores de la escala
//valueAxis2.renderer.inversed = true;

// First series
var series = chart.series.push(new am4charts.LineSeries());
series.dataFields.valueY = "Yucatan";
series.dataFields.categoryX = "Periodo";
series.name = "Yucatán";
series.stroke = am4core.color('#7D3D9F');
series.strokeWidth = 3;
series.tooltipText = "{name}: [bold]{valueY}[/]";

var series3 = chart.series.push(new am4charts.LineSeries());
series3.dataFields.valueY = "Promedio";
series3.dataFields.categoryX = "Periodo";
series3.name = "Promedio";
series3.stroke = am4core.color('#FF0000');
series3.strokeWidth = 3;
series3.tooltipText = "{name}: [bold]{valueY}[/]";

// Second series
var series2 = chart.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = "Variacion";
series2.dataFields.categoryX = "Periodo";
series2.name = "Variacion";
series2.stroke = am4core.color('#AA6DCA');
series2.tooltipText = "{name}: [bold]{valueY}[/]";
series2.strokeWidth = 3;
series2.yAxis = valueAxis2;


//Para colocar la etiqueta del valor del promedio nacional
var label = chart.createChild(am4core.Label);
label.text = "Promedio nacional 55.5";
label.fontSize = 14;
label.align = "center";
label.isMeasured = false;
label.x = am4core.percent(71);//Ajusta la alineación horizontal via porcentaje
label.horizontalCenter = "middle";
label.y = 340; //Ajusta alineación vertical, positivo (hacia abajo) negativo (hacia arriba)
//.-Para colocar la etiqueta del valor del promedio nacional

/*
var bullet = series2.bullets.push(new am4charts.LabelBullet());
bullet.interactionEnabled=false;
bullet.label.text= "[bold]{valueY.value}[/]";
//bullet.label.background.fill = am4core.color("#25132f");
bullet.label.fill = am4core.color("#000000");
//bullet.label.dy = -30;
*/

// Add legend
chart.legend = new am4charts.Legend();

// Add cursor
chart.cursor = new am4charts.XYCursor();
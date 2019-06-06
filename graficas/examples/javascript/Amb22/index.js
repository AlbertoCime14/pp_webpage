am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);

//chart.language = "";

var data = [];

chart.data = [
 {
   "Descripcion": "2001",
   "Ranking": 257
 },
 {
   "Descripcion": "2002",
   "Ranking": 259
 },
 {
   "Descripcion": "2003",
   "Ranking": 262
 },
 {
   "Descripcion": "2004",
   "Ranking": 272
 },
 {
   "Descripcion": "2005",
   "Ranking": 275
 },
 {
   "Descripcion": "2006",
   "Ranking": 279
 },
 {
   "Descripcion": "2007",
   "Ranking": 290
 },
 {
   "Descripcion": "2008",
   "Ranking": 292
 },
 {
   "Descripcion": "2009",
   "Ranking": 293
 },
 {
   "Descripcion": "2010",
   "Ranking": 299
 },
 {
   "Descripcion": "2011",
   "Ranking": 302
    },
    {
        "Descripcion": "2012",
        "Ranking": 305
    },
    {
        "Descripcion": "2013",
        "Ranking": 309
    },
    {
        "Descripcion": "2014",
        "Ranking": 314
    },
    {
        "Descripcion": "2015",
        "Ranking": 319
    },
    {
        "Descripcion": "2016",
        "Ranking": 324
    }
];

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());

// Create value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "";
categoryAxis.title.text = "Ranking";
valueAxis.renderer.minLabelPosition = 0.01;

categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.ticks.template.disabled = true;
categoryAxis.renderer.line.opacity = 0;
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.minGridDistance = 40;
categoryAxis.dataFields.category = "Descripcion";

categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;

var lineSeries = chart.series.push(new am4charts.LineSeries());
lineSeries.dataFields.categoryX = "Descripcion";
lineSeries.dataFields.valueY = "Ranking";
lineSeries.sequencedInterpolation = true;
lineSeries.defaultState.transitionDuration = 1500;
lineSeries.stroke = am4core.color("#95C11F"); //chart.colors.getIndex(11);
lineSeries.fill = lineSeries.stroke;
lineSeries.strokeWidth = 2;

var bullet1 = lineSeries.bullets.push(new am4charts.LabelBullet());
bullet1.interactionsEnabled = false;
bullet1.label.text = "{valueY.value}";
bullet1.label.fill = am4core.color("#FFFFFF");
bullet1.label.background.fill = am4core.color("#95C11F");
//bullet1.locationY = 0.1;
//bullet1.label.dy = -220;


//chart.exporting.menu = new am4core.ExportMenu();

chart.legend = new am4charts.Legend();


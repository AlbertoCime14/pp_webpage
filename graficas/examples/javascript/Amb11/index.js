am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.XYChart);


chart.data = [
    {
	"country": "1991",
	"visits": 7226
}
,
    {
        "country": "1995",
        "visits": 1087
    }
    ,
    {
        "country": "2000",
        "visits": 1108
    },
    {
        "country": "2005",
        "visits": 4323
    },
    {
        "country": "2010",
        "visits": 3463
    },
    {
        "country": "2011",
        "visits": 7458
    },
    {
        "country": "2012",
        "visits": 749
    },
    {
        "country": "2013",
        "visits": 2598
    },
    {
        "country": "2014",
        "visits": 984
    },
    {
        "country": "2015",
        "visits": 8646
    },
    {
        "country": "2016",
        "visits": 7021
    },
    {
        "country": "2017",
        "visits": 11008
    },{
        "country": "2018",
        "visits": 1851
    }
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
valueAxis.min = 0;
valueAxis.max = 12000;
valueAxis.strictMinMax = true;

var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryX = "country";
series.dataFields.valueY = "visits";
series.tooltipText = "{valueY.value}"
series.columns.template.strokeOpacity = 0;
series.fill = am4core.color("#95c11f");

var columnTemplate = series.columns.template;
//columnTemplate.column.cornerRadiusTopLeft = 10;
//columnTemplate.column.cornerRadiusTopRight = 10;
//columnTemplate.strokeWidth = 1;
columnTemplate.strokeOpacity = 1;
//columnTemplate.stroke = series.fill;
//columnTemplate.stroke = "0.5";

var desaturateFilter = new am4core.DesaturateFilter();
desaturateFilter.saturation = 1;

columnTemplate.filters.push(desaturateFilter);

// first way - get properties from data. but can only be done with columns, as they are separate objects.    
//columnTemplate.propertyFields.strokeDasharray = "stroke";
columnTemplate.propertyFields.fillOpacity = "opacity";

// add some cool saturation effect on hover
var desaturateFilterHover = new am4core.DesaturateFilter();
desaturateFilterHover.saturation = 1;

//Valores de las barras verticales
var valueLabel = series.bullets.push(new am4charts.LabelBullet());
valueLabel.label.text = "{valueY}";
valueLabel.label.dy = -20;

chart.cursor = new am4charts.XYCursor();

//chart.exporting.menu = new am4core.ExportMenu();
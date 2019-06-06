

am4core.useTheme(am4themes_animated);

var chart = am4core.create("chartdiv", am4charts.PieChart);

chart.data = [
    {
        "country": " Mero",
        "value": "7,111.20"
    },
    {
        "country": " Pepino de mar",
        "value": "2,006.46"
    },
    {
        "country": " Pulpo",
        "value": "25,121.75"
    },
    {
        "country": "Otros",
        "value": "13,973.18"
    }
];

chart.innerRadius = am4core.percent(50);

var series = chart.series.push(new am4charts.PieSeries());
series.dataFields.value = "value";
series.dataFields.category = "country";

var colorSet = new am4core.ColorSet();
colorSet.list = ["#40520F", "#627E16", "#95C11F", "#A6D822"].map(function (color) {
    return new am4core.color(color);
});
series.colors = colorSet;




series.labels.template.bent = true;
series.labels.template.radius = 4;

series.slices.template.states.getKey("hover").properties.scale = 1.1;
series.labels.template.states.create("hover").properties.fill = am4core.color("#000000");
//chart.exporting.menu = new am4core.ExportMenu();
chart.legend = new am4charts.Legend();
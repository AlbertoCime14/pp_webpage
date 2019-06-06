am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv", am4charts.RadarChart);
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

var label = chart.createChild(am4core.Label);
label.text = "Drag slider to change radius";
label.exportable = false;

chart.data = [
    {
        category: "Yucatán con Economía Inclusiva ",
        value1: 1,
        value2: 16
        
    },
    {
        category: "Yucatán con Calidad de Vida y Bienestar Social",
        value1: 2,
        value2: 13
    },
    {
        category: "Yucatán Cultural con Identidad para el Desarrollo",
        value1: 1,
        value2: 12
    },
    {
        category: "Yucatán Verde y Sustentable",
        value1: 1,
        value2: 13
    },
    {
        category: "Igualdad de Oportunidades y no discriminación",
        value1: 2,
        value2: 9
    },

    {
        category: "Innovación, Conocimiento y Tecnología",
        value1: 1,
        value2: 5
    },
    {
        category: "Paz, Justicia y Gobernabilidad",
        value1: 1,
        value2: 6
    },
    {
        category: "Gobierno Abierto, Eficiente y con Finanzas Sanas",
        value1: 1,
        value2: 6
    },
    {
        category: "Ciudades y Comunidades Sostenibles",
        value1: 1,
        value2: 6
    }
    
];
chart.radius = am4core.percent(95);
chart.startAngle = 270 - 180;
chart.endAngle = 270 + 180;
chart.innerRadius = am4core.percent(60);

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "category";
categoryAxis.renderer.labels.template.location = 0.5;
categoryAxis.renderer.grid.template.strokeOpacity = 0.1;
categoryAxis.renderer.axisFills.template.disabled = true;
categoryAxis.mouseEnabled = false;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.renderer.grid.template.strokeOpacity = 0.05;
valueAxis.renderer.axisFills.template.disabled = true;
valueAxis.renderer.axisAngle = 260;
valueAxis.renderer.labels.template.horizontalCenter = "right";
valueAxis.min = 0;

var series1 = chart.series.push(new am4charts.RadarColumnSeries());
series1.columns.template.radarColumn.strokeOpacity = 1;
series1.name = "Por eje";
series1.dataFields.categoryX = "category";
series1.columns.template.tooltipText = "{name}: {valueY.value}";
series1.dataFields.valueY = "value1";
series1.stacked = true;

var series2 = chart.series.push(new am4charts.RadarColumnSeries());
series2.columns.template.radarColumn.strokeOpacity = 1;
series2.columns.template.tooltipText = "{name}: {valueY.value}";
series2.name = "Por política";
series2.dataFields.categoryX = "category";
series2.dataFields.valueY = "value2";
series2.stacked = true;

//var series3 = chart.series.push(new am4charts.RadarColumnSeries());
//series3.columns.template.radarColumn.strokeOpacity = 1;
//series3.columns.template.tooltipText = "{name}: {valueY.value}";
//series3.name = "Series 3";
//series3.dataFields.categoryX = "category";
//series3.dataFields.valueY = "value3";
//series3.stacked = true;

//var series4 = chart.series.push(new am4charts.RadarColumnSeries());
//series4.columns.template.radarColumn.strokeOpacity = 1;
//series4.columns.template.tooltipText = "{name}: {valueY.value}";
//series4.name = "Series 4";
//series4.dataFields.categoryX = "category";
//series4.dataFields.valueY = "value4";
//series4.stacked = true;

chart.seriesContainer.zIndex = -1;
chart.legend = new am4charts.Legend();
chart.exporting.menu = new am4core.ExportMenu();

var slider = chart.createChild(am4core.Slider);
slider.start = 0.5;
slider.exportable = false;
slider.events.on("rangechanged", () => {
    var start = slider.start;

    chart.startAngle = 270 - start * 179 - 1;
    chart.endAngle = 270 + start * 179 + 1;

    valueAxis.renderer.axisAngle = chart.startAngle;
});


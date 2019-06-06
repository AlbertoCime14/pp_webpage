am4core.useTheme(am4themes_animated);
// Themes end




//var temperatures = {
//    "Región I Poniente": [
//        ["CELESTUN", 1,1860,1],
//        ["CUNCUNUL", 1,144],
//        ["HALACHO", 2291],
//        ["HUNUCMA", 2472],
//        ["KINCHIL", 177],
//        ["KOPOMA", 57],
//        ["MAXCANU", 2583],
//        ["OPICHEN", 611],
//        ["SAMAHIL", 565],
//        ["TETIZ", 131]    ],
//    "Región II Noroeste": [
//        ["C2ELESTUN", 1860],
//        ["CU2NCUNUL", 144],
//        ["HA2LACHO", 2291],
//        ["HU2NUCMA", 2472],
//        ["KI2NCHIL", 177],
//        ["KO2POMA", 57],
//        ["MA2XCANU", 2583],
//        ["OP2ICHEN", 611],
//        ["SA2MAHIL", 565],
//        ["TE2TIZ", 131]     ],
//    "Región III Centro ": [
//        ["CE3LESTUN", 1860],
//        ["CU3NCUNUL", 144],
//        ["HA3LACHO", 2291],
//        ["HUN3UCMA", 2472],
//        ["KIN3CHIL", 177],
//        ["KOP3OMA", 57],
//        ["MAX3CANU", 2583],
//        ["OPI3CHEN", 611],
//        ["SAM3AHIL", 565],
//        ["TET3IZ", 131]    ],
//    "Región IV Litoral Centro": [
//        ["CEL4ESTUN", 1860],
//        ["CUNC5UNUL", 144],
//        ["HALA5CHO", 2291],
//        ["HUNU5CMA", 2472],
//        ["KINC4HIL", 177],
//        ["KOPO4MA", 57],
//        ["MAXC4ANU", 2583],
//        ["OPIC4HEN", 611],
//        ["SAMAH4IL", 565],
//        ["TETIZ4", 131]
//    ],
//    "Región V Noreste": [
//        ["CELES6TUN", 1860],
//        ["CUNCU6NUL", 144],
//        ["HALAC6HO", 2291],
//        ["HUNUC6MA", 2472],
//        ["KINCH6IL", 177],
//        ["KOPOM6A", 57],
//        ["MAXCA6NU", 2583],
//        ["OPICH6EN", 611],
//        ["SAMAH6IL", 565],
//        ["TETI6Z", 131]     ],


//    "Región VI Oriente ": [
//        ["CE7LESTUN", 1860],
//        ["CUNC7UNUL", 144],
//        ["HALA7CHO", 2291],
//        ["HUNU7CMA", 2472],
//        ["KINC7HIL", 177],
//        ["KOPO7MA", 57],
//        ["MAX7CANU", 2583],
//        ["OPI7CHEN", 611],
//        ["SAM7AHIL", 565],
//        ["TET7IZ", 131]     ],


//    "Región VII Sur ": [
//        ["CELE8STUN", 1860],
//        ["CUN8CUNUL", 144],
//        ["HALA8CHO", 2291],
//        ["HUNU8CMA", 2472],
//        ["KINC8HIL", 177],
//        ["KOPO8MA", 57],
//        ["MAXC8ANU", 2583],
//        ["OPIC8HEN", 611],
//        ["SAMA8HIL", 565],
//        ["TETI8Z", 131]     ]
//}




// disclaimer: this data is not accuarate, don't use it for any puroposes
// first temperature is average for 1973-1980 period
am4core.useTheme(am4themes_animated);
// Themes end

/**
 * This is a copy of a chart created by Antti Lipponen: https://twitter.com/anttilip?lang=en Thanks a lot!
 */

// disclaimer: this data is not accuarate, don't use it for any puroposes
// first temperature is average for 1973-1980 period

var temperatures = {
    "Región 1": [
        ["Sonora", 35.1, 35.1, 35.1],
        ["Tabasco", 33.8, 33.8, 33.8],
        ["Guerrero", 32.2, 32.2, 32.2],
        ["Yucatán", 31.8, 31.8, 31.8],
        ["Baja California Sur", 31.1, 31.1, 31.1],
        ["Colima", 30.7, 30.7, 30.7],
        ["Durango", 29.2, 29.2, 29.2]

           ],
    "Región 2": [

        ["Nayarit", 29.1, 29.1, 29.1],
        ["Hidalgo", 29, 29, 29],
        ["Zacatecas", 29, 29, 29],
        ["Nuevo León", 28.1, 28.1, 28.1],
        ["Campeche", 26, 26, 26],
        ["Chihuahua", 25.6, 25.6, 25.6],
        ["Quintana Roo", 25.3, 25.3, 25.3],
        ["Tamaulipas", 25.1, 25.1, 25.1],
        ["Mex", 24.1, 24.1, 24.1],
        ["Veracruz", 22.9, 22.9, 22.9],
        ["SLP", 21.8, 21.8, 21.8],
        ["Tlaxcala", 20.2, 20.2, 20.2]


    ],
    "Región 4": [

        ["Aguascalientes", 19.1, 19.1, 19.1],
        ["Guanajuato", 18.5, 18.5, 18.5],
        ["Jalisco", 18.4, 18.4, 18.4],
        ["Querétaro", 18.4, 18.4, 18.4],
        ["México", 17.7, 17.7, 17.7],
        ["Michoacán", 16.5, 16.5, 16.5],
        ["Baja California", 15.6, 15.6, 15.6],
        ["Oaxaca", 9.7, 9.7, 9.7],
        ["Morelos", 9.5, 9.5, 9.5],
        ["Sinaloa", 8.7, 8.7, 8.7],
        ["Chiapas", 8.6, 8.6, 8.6],

    ],
    "Región 5": [

        ["Morelos", 9.5, 9.5, 9.5],
        ["Sinaloa", 8.7, 8.7, 8.7],
        ["Chiapas", 8.6, 8.6, 8.6],
        ["Coahuila", 8.5, 8.5, 8.5],
        ["Puebla", 6.7, 6.7, 6.7]

    ]
}

var startYear = 1973;
var endYear = 1975;
var currentYear = 1973;
var colorSet = new am4core.ColorSet();

var chart = am4core.create("chartdiv", am4charts.RadarChart);
//chart.numberFormatter.numberFormat = "+#.0°C|#.0°C|0.0°C";
chart.hiddenState.properties.opacity = 0;
//chart.fontSize = 0;
//chart.axisLabel.fçontSize = 5;

chart.startAngle = 270 - 180;
chart.endAngle = 270 + 180;

chart.padding(5, 15, 5, 10)
chart.radius = am4core.percent(75);
chart.innerRadius = am4core.percent(20);

// year label goes in the middle
var yearLabel = chart.radarContainer.createChild(am4core.Label);
yearLabel.horizontalCenter = "middle";
yearLabel.verticalCenter = "middle";
yearLabel.fill = am4core.color("#673AB7");
yearLabel.fontSize = 30;
yearLabel.text = "2018"; //"Participación";//String(currentYear);

// zoomout button
var zoomOutButton = chart.zoomOutButton;
zoomOutButton.dx = 0;
zoomOutButton.dy = 0;
zoomOutButton.marginBottom = 15;
zoomOutButton.parent = chart.rightAxesContainer;

// scrollbar
chart.scrollbarX = new am4core.Scrollbar();
chart.scrollbarX.parent = chart.rightAxesContainer;
chart.scrollbarX.orientation = "vertical";
chart.scrollbarX.align = "center";
chart.scrollbarX.exportable = false;

// vertical orientation for zoom out button and scrollbar to be positioned properly
chart.rightAxesContainer.layout = "vertical";
chart.rightAxesContainer.padding(120, 20, 120, 20);



// category axis
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "country";

var categoryAxisRenderer = categoryAxis.renderer;
var categoryAxisLabel = categoryAxisRenderer.labels.template;
categoryAxisLabel.location = 0.5;
categoryAxisLabel.radius = 28;
categoryAxisLabel.relativeRotation = 90;

categoryAxisRenderer.fontSize = 14;
categoryAxisRenderer.minGridDistance = 10;
categoryAxisRenderer.grid.template.radius = -25;
categoryAxisRenderer.grid.template.strokeOpacity = 0.05;
categoryAxisRenderer.grid.template.interactionsEnabled = false;

categoryAxisRenderer.ticks.template.disabled = true;
categoryAxisRenderer.axisFills.template.disabled = true;
categoryAxisRenderer.line.disabled = true;

categoryAxisRenderer.tooltipLocation = 0.5;
categoryAxis.tooltip.defaultState.properties.opacity = 0;

// value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.max = 38;
valueAxis.strictMinMax = true;
valueAxis.tooltip.defaultState.properties.opacity = 0;
valueAxis.tooltip.animationDuration = 10;
valueAxis.cursorTooltipEnabled = true;
valueAxis.zIndex = 10;

var valueAxisRenderer = valueAxis.renderer;
valueAxisRenderer.axisFills.template.disabled = true;
valueAxisRenderer.ticks.template.disabled = true;
valueAxisRenderer.minGridDistance = 20;
valueAxisRenderer.grid.template.strokeOpacity = 0.05;


// series
var series = chart.series.push(new am4charts.RadarColumnSeries());
series.columns.template.width = am4core.percent(90);
series.columns.template.strokeOpacity = 0;
series.dataFields.valueY = "value" + currentYear;
series.dataFields.categoryX = "country";
series.tooltipText = "{categoryX}:{valueY.value}";

// this makes columns to be of a different color, depending on value
series.heatRules.push({ target: series.columns.template, property: "fill", minValue: 0, maxValue: 100, min: am4core.color("#673AB7"), max: am4core.color("#F44336"), dataField: "valueY" });

// cursor
var cursor = new am4charts.RadarCursor();
chart.cursor = cursor;
cursor.behavior = "zoomX";

cursor.xAxis = categoryAxis;
cursor.innerRadius = am4core.percent(40);
cursor.lineY.disabled = true;

cursor.lineX.fillOpacity = 0.2;
cursor.lineX.fill = am4core.color("#000000");
cursor.lineX.strokeOpacity = 0;
cursor.fullWidthLineX = true;

// year slider
var yearSliderContainer = chart.createChild(am4core.Container);
yearSliderContainer.layout = "vertical";
yearSliderContainer.padding(0, 38, 0, 38);
yearSliderContainer.width = am4core.percent(100);

//var yearSlider = yearSliderContainer.createChild(am4core.Slider);
//yearSlider.events.on("rangechanged", function () {
//    updateRadarData(startYear + Math.round(yearSlider.start * (endYear - startYear)));
//})
//yearSlider.orientation = "horizontal";
//yearSlider.start = 0.5;
//yearSlider.exportable = false;

chart.data = generateRadarData();

function generateRadarData() {
    var data = [];
    var i = 0;
    for (var continent in temperatures) {
        var continentData = temperatures[continent];

        continentData.forEach(function (country) {
            var rawDataItem = { "country": country[0] }

            for (var y = 2; y < country.length; y++) {
                rawDataItem["value" + (startYear + y - 2)] = country[y];
            }

            data.push(rawDataItem);
        });

        createRange(continent, continentData, i);
        i++;

    }
    return data;
}


function updateRadarData(year) {
    if (currentYear != year) {
        currentYear = year;
        yearLabel.text = String(currentYear);
        series.dataFields.valueY = "value" + currentYear;
        chart.invalidateRawData();
    }
}

function createRange(name, continentData, index) {

    var axisRange = categoryAxis.axisRanges.create();
    axisRange.axisFill.interactionsEnabled = true;
    axisRange.text = name;
    // first country
    axisRange.category = continentData[0][0];
    // last country
    axisRange.endCategory = continentData[continentData.length - 1][0];

    // every 3rd color for a bigger contrast
    axisRange.axisFill.fill = colorSet.getIndex(index * 3);
    axisRange.grid.disabled = true;
    axisRange.label.interactionsEnabled = false;
    axisRange.label.bent = true;

    var axisFill = axisRange.axisFill;
    axisFill.innerRadius = -0.001; // almost the same as 100%, we set it in pixels as later we animate this property to some pixel value
    axisFill.radius = -20; // negative radius means it is calculated from max radius
    axisFill.disabled = false; // as regular fills are disabled, we need to enable this one
    axisFill.fillOpacity = 1;
    axisFill.togglable = true;

    axisFill.showSystemTooltip = true;
    axisFill.readerTitle = "click to zoom";
    axisFill.cursorOverStyle = am4core.MouseCursorStyle.pointer;

    axisFill.events.on("hit", function (event) {
        var dataItem = event.target.dataItem;
        if (!event.target.isActive) {
            categoryAxis.zoom({ start: 0, end: 1 });
        }
        else {
            categoryAxis.zoomToCategories(dataItem.category, dataItem.endCategory);
        }
    })

    // hover state
    var hoverState = axisFill.states.create("hover");
    hoverState.properties.innerRadius = -10;
    hoverState.properties.radius = -25;

    var axisLabel = axisRange.label;
    axisLabel.location = 0.5;
    axisLabel.fill = am4core.color("#ffffff");
    axisLabel.radius = 3;
    axisLabel.relativeRotation = 0;
}

var slider = yearSliderContainer.createChild(am4core.Slider);
slider.start = 1;
slider.exportable = false;
slider.events.on("rangechanged", function () {
    var start = slider.start;

    chart.startAngle = 270 - start * 179 - 1;
    chart.endAngle = 270 + start * 179 + 1;

    valueAxis.renderer.axisAngle = chart.startAngle;
})

am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv", am4charts.ChordDiagram);

// colors of main characters
//chart.colors.saturation = 0.45;
chart.colors.step = 3;
var colors = {
    Rachel: chart.colors.next(),
    Monica: chart.colors.next(),
    Phoebe: chart.colors.next(),
    Ross: chart.colors.next(),
    Joey: chart.colors.next(),
    Chandler: chart.colors.next()
}



chart.data = [


    { "from": "Yucatán con Economía Inclusiva", "to": "Por Eje", "value": 1 },
    { "from": "Yucatán con Economía Inclusiva", "to": "Por política pública", "value": 16 },
    { "from": "Yucatán con Calidad de Vida y Bienestar Scoial ", "to": "Por Eje", "value": 2 },
    { "from": "Yucatán Cultural con Identidad para el Desarrollo", "to": "Por Eje", "value": 1 },
    { "from": "Yucatán Verde y Sustentable", "to": "Por Eje", "value": 1 },
    { "from": "Igualdad de Oportunidades y no discriminación", "to": "Por Eje", "value": 2 },
    { "from": "Innovación, Conocimiento y Tecnología", "to": "Por Eje", "value": 1 },
    { "from": "Paz, Justicia y Gobernabilidad", "to": "Por Eje", "value": 1 },
    { "from": "Gobierno Abiero, Eficiente y con Finanzas Sanas", "to": "Por Eje", "value": 1 },
    { "from": "Ciudades y Comunidades Sostenibles", "to": "Por Eje", "value": 1 },
   
    { "from": "Yucatán con Calidad de Vida y Bienestar Scoial ", "to": "Por política pública", "value": 13 },
    { "from": "Yucatán Cultural con Identidad para el Desarrollo", "to": "Por política pública", "value": 12 },
    { "from": "Yucatán Verde y Sustentable", "to": "Por política pública", "value": 13 },
    { "from": "Igualdad de Oportunidades y no discriminación", "to": "Por política pública", "value": 9 },
    { "from": "Innovación, Conocimiento y Tecnología", "to": "Por política pública", "value": 5 },
    { "from": "Paz, Justicia y Gobernabilidad", "to": "Por política pública", "value": 6 },
    { "from": "Gobierno Abiero, Eficiente y con Finanzas Sanas", "to": "Por política pública", "value": 6 },
    { "from": "Ciudades y Comunidades Sostenibles", "to": "Por política pública", "value": 6 },





]



chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";


chart.nodePadding = 0.5;
chart.minNodeSize = 0.01;
chart.startAngle = 80;
chart.endAngle = chart.startAngle + 360;
chart.sortBy = "value";
chart.fontSize = 10;

var nodeTemplate = chart.nodes.template;
nodeTemplate.readerTitle = "Click to show/hide or drag to rearrange";
nodeTemplate.showSystemTooltip = true;
nodeTemplate.propertyFields.fill = "color";
nodeTemplate.tooltipText = "{name}'s kisses: {total}";

// when rolled over the node, make all the links rolled-over
nodeTemplate.events.on("over", function (event) {
    var node = event.target;
    node.outgoingDataItems.each(function (dataItem) {
        if (dataItem.toNode) {
            dataItem.link.isHover = true;
            dataItem.toNode.label.isHover = true;
        }
    })
    node.incomingDataItems.each(function (dataItem) {
        if (dataItem.fromNode) {
            dataItem.link.isHover = true;
            dataItem.fromNode.label.isHover = true;
        }
    })

    node.label.isHover = true;
})

// when rolled out from the node, make all the links rolled-out
nodeTemplate.events.on("out", function (event) {
    var node = event.target;
    node.outgoingDataItems.each(function (dataItem) {
        if (dataItem.toNode) {
            dataItem.link.isHover = false;
            dataItem.toNode.label.isHover = false;
        }
    })
    node.incomingDataItems.each(function (dataItem) {
        if (dataItem.fromNode) {
            dataItem.link.isHover = false;
            dataItem.fromNode.label.isHover = false;
        }
    })

    node.label.isHover = false;
})

var label = nodeTemplate.label;
label.relativeRotation = 90;

//label.fillOpacity = 0.4;
let labelHS = label.states.create("hover");
labelHS.properties.fillOpacity = 1;

nodeTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;
// this adapter makes non-main character nodes to be filled with color of the main character which he/she kissed most
nodeTemplate.adapter.add("fill", function (fill, target) {
    let node = target;
    let counters = {};
    let mainChar = false;
    node.incomingDataItems.each(function (dataItem) {
        if (colors[dataItem.toName]) {
            mainChar = true;
        }

        if (isNaN(counters[dataItem.fromName])) {
            counters[dataItem.fromName] = dataItem.value;
        }
        else {
            counters[dataItem.fromName] += dataItem.value;
        }
    })
    if (mainChar) {
        return fill;
    }

    let count = 0;
    let color;
    let biggest = 0;
    let biggestName;

    for (var name in counters) {
        if (counters[name] > biggest) {
            biggestName = name;
            biggest = counters[name];
        }
    }
    if (colors[biggestName]) {
        fill = colors[biggestName];
    }

    return fill;
})

// link template
var linkTemplate = chart.links.template;
linkTemplate.strokeOpacity = 0;
linkTemplate.fillOpacity = 0.15;
linkTemplate.tooltipText = "{fromName} & {toName}:{value.value}";

var hoverState = linkTemplate.states.create("hover");
hoverState.properties.fillOpacity = 0.7;
hoverState.properties.strokeOpacity = 0.7;

// data credit label
var creditLabel = chart.chartContainer.createChild(am4core.TextLink);
creditLabel.text = "Data source: notrudedude";
creditLabel.url = "https://www.reddit.com/user/notrudedude";
creditLabel.y = am4core.percent(99);
creditLabel.x = am4core.percent(99);
creditLabel.horizontalCenter = "right";
creditLabel.verticalCenter = "bottom";

//var titleImage = chart.chartContainer.createChild(am4core.Image);
//titleImage.href = "//www.amcharts.com/wp-content/uploads/2018/11/whokissed.png";
//titleImage.x = 30
//titleImage.y = 30;
//titleImage.width = 200;
//titleImage.height = 200;
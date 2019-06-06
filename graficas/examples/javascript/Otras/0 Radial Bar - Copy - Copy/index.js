am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv", am4charts.SankeyDiagram);
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

chart.data = [
    { from: "Yucatán con Economía Inclusiva", to: "Por Eje", value: 1 },
    { from: "Yucatán con Calidad de Vida y Bienestar Scoial ", to: "Por Eje", value: 2 },
    { from: "Yucatán Cultural con Identidad para el Desarrollo", to: "Por Eje", value: 1 },
    { from: "Yucatán Verde y Sustentable", to: "Por Eje", value: 1 },
    { from: "Igualdad de Oportunidades y no discriminación", to: "Por Eje", value: 2 },
    { from: "Innovación, Conocimiento y Tecnología", to: "Por Eje", value: 1 },
    { from: "Paz, Justicia y Gobernabilidad", to: "Por Eje", value: 1 },
    { from: "Gobierno Abiero, Eficiente y con Finanzas Sanas", to: "Por Eje", value: 1 },
    { from: "Ciudades y Comunidades Sostenibles", to: "Por Eje", value: 1 },
    { from: "Yucatán con Economía Inclusiva", to: "Por política pública", value: 16 },
    { from: "Yucatán con Calidad de Vida y Bienestar Scoial ", to: "Por política pública", value: 13 },
    { from: "Yucatán Cultural con Identidad para el Desarrollo", to: "Por política pública", value: 12 },
    { from: "Yucatán Verde y Sustentable", to: "Por política pública", value: 13 },
    { from: "Igualdad de Oportunidades y no discriminación", to: "Por política pública", value: 9 },
    { from: "Innovación, Conocimiento y Tecnología", to: "Por política pública", value: 5 },
    { from: "Paz, Justicia y Gobernabilidad", to: "Por política pública", value: 6 },
    { from: "Gobierno Abiero, Eficiente y con Finanzas Sanas", to: "Por política pública", value: 6 },
    { from: "Ciudades y Comunidades Sostenibles", to: "Por política pública", value: 6 },
];

let hoverState = chart.links.template.states.create("hover");
hoverState.properties.fillOpacity = 0.6;

chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";
chart.fontSize = 10;

// for right-most label to fit
chart.paddingRight = 500;

//// make nodes draggable
var nodeTemplate = chart.nodes.template;
//nodeTemplate.inert = true;
//nodeTemplate.readerTitle = "Drag me!";
//nodeTemplate.showSystemTooltip = true;
nodeTemplate.width = 25;

var bullet1 = chart.bullets.push(new am4charts.LabelBullet());
bullet1.interactionsEnabled = false;
bullet1.label.text = "{from}";
//bullet1.label.fill = am4core.color("#000");

labelBullet.label.hideOversized = false;

//// make nodes draggable
//var nodeTemplate = chart.nodes.template;
//nodeTemplate.readerTitle = "Click to show/hide or drag to rearrange";
//nodeTemplate.showSystemTooltip = true;
//nodeTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer
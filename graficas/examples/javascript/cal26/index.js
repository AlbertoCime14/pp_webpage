var chart = AmCharts.makeChart("chartdiv", {
    "theme": "none",
    "type": "serial",
    "hideCredits":true,
    "dataProvider": [{
        "exp": "Eficiencia Terminal Media Superior",
        "muy": 46.5,
        "muy_dos": 53.1,
        "label": 0,
        "label_dos": 0,
        "label_tres": 0
    },
    {
        "exp": "Eficiencia Terminal Secundaria",
        "muy": 51.6,
        "muy_dos": 48.9,
        "label": 0,
        "label_dos": 0,
        "label_tres": 0
    },
    {
        "exp": "Eficiencia Terminal Primaria",
        "muy": 35.2,
        "muy_dos": 40.8,
        "label": 0,
        "label_dos": 0,
        "label_tres": 0
    }],
    "valueAxes": [{
        "stackType": "regular",
        "position": "left",
        "title": ""
    }],
    "startDuration": 1,    
    "graphs": [
     // 1200 stack
     {
        "fillAlphas": 0,
        "lineAlpha": 0,
        "title": "2013",
        "type": "column",
        "valueField": "label",
         "showAllValueLabels": true,
         "labelText": "\n[[title]]"
     },
     {
        "fillAlphas": 1,        
        "lineAlpha": 0.2,
        "fillColors": "#4D8691",
        "labelText": "[[value]]",
        "color": "#fff",
        "title": "2013",

        "type": "column",
        "valueField": "muy"
    },
    // 0100 stack
    {
        "newStack": true,
        "fillAlphas": 0,
        "lineAlpha": 0,
        "title": "2015",
        "type": "column",
        "valueField": "label_dos",
         "showAllValueLabels": true,
         "labelText": "\n[[title]]"
     },
    {
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "fillColors": "#4D8691",
        "labelText": "[[value]]",
        "color": "#fff",
        "title": "2015",
        "type": "column",
        "valueField": "muy_dos"
    }
    ],
    "plotAreaFillAlphas": 0.1,
    "depth3D": 0,
    "angle": 0,
    "categoryField": "exp",
    "categoryAxis": {
        "labelOffset": 15,
        "gridPosition": "start",
        "tickPosition": "start"
    },
    "legend": { 
        "generateFromData": true //custom property for the plugin
      },
});
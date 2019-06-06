// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud);
chart.fontFamily = "Courier New";
var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
series.randomness = 0.1;
series.rotationThreshold = 0.5;

series.data = [
    {
        "tag": "Yucatán",
        "count": 398
    },
    {
        "tag": "estado",
        "count": 232
    },
    {
        "tag": "desarrollo",
        "count": 196
    },
    {
        "tag": "personas",
        "count": 189
    },
    {
        "tag": "mujeres",
        "count": 173
    },
    {
        "tag": "salud",
        "count": 153
    },
    {
        "tag": "educación",
        "count": 143
    },
    {
        "tag": "servicios",
        "count": 138
    },
    {
        "tag": "gobierno",
        "count": 134
    },
    {
        "tag": "social",
        "count": 130
    },
    {
        "tag": "recursos",
        "count": 127
    },
    {
        "tag": "propuesta",
        "count": 124
    },
    {
        "tag": "población",
        "count": 121
    },
    {
        "tag": "calidad",
        "count": 120
    },
    {
        "tag": "atención",
        "count": 118
    },
    {
        "tag": "vida",
        "count": 115
    },
    {
        "tag": "programas",
        "count": 111
    },
    {
        "tag": "información",
        "count": 103
    },
    {
        "tag": "apoyo",
        "count": 99
    },
    {
        "tag": "trabajo",
        "count": 97
    },
    {
        "tag": "espacios",
        "count": 96
    },
    {
        "tag": "violencia",
        "count": 94
    },
    {
        "tag": "empresas",
        "count": 93
    },
    {
        "tag": "acciones",
        "count": 92
    },
    {
        "tag": "género",
        "count": 91
    },
    {
        "tag": "programa",
        "count": 89
    },
    {
        "tag": "sociedad",
        "count": 87
    },
    {
        "tag": "actividades",
        "count": 87
    },
    {
        "tag": "municipios",
        "count": 85
    },
    {
        "tag": "ciudad",
        "count": 81
    },
    {
        "tag": "público",
        "count": 78
    },
    {
        "tag": "seguridad",
        "count": 77
    },
    {
        "tag": "servicio",
        "count": 76
    },
    {
        "tag": "maya",
        "count": 76
    },
    {
        "tag": "tener",
        "count": 75
    },
    {
        "tag": "cultura",
        "count": 75
    },
    {
        "tag": "comunidades",
        "count": 74
    },
    {
        "tag": "instituciones",
        "count": 74
    },
    {
        "tag": "promover",
        "count": 72
    },
    {
        "tag": "mérida",
        "count": 72
    },
    {
        "tag": "nivel",
        "count": 71
    },
    {
        "tag": "escuelas",
        "count": 69
    },
    {
        "tag": "capacitación",
        "count": 69
    },
    {
        "tag": "turismo",
        "count": 69
    },
    {
        "tag": "cultural",
        "count": 68
    },
    {
        "tag": "estatal",
        "count": 68
    },
    {
        "tag": "públicos",
        "count": 67
    },
    {
        "tag": "proyecto",
        "count": 67
    },
    {
        "tag": "sociales",
        "count": 66
    },
    {
        "tag": "acceso",
        "count": 65
    },
    {
        "tag": "derechos",
        "count": 65
    },
    {
        "tag": "discapacidad",
        "count": 63
    },
    {
        "tag": "jóvenes",
        "count": 61
    },
    {
        "tag": "padres",
        "count": 57
    },
    {
        "tag": "familia",
        "count": 54
    },
    {
        "tag": "residuos",
        "count": 48
    },
    {
        "tag": "talleres",
        "count": 48
    },
    {
        "tag": "infraestructura",
        "count": 44
    },
    {
        "tag": "impulsar",
        "count": 43
    },
    {
        "tag": "económico",
        "count": 43
    },
    {
        "tag": "ciudadanos",
        "count": 43
    },
    {
        "tag": "comunidad",
        "count": 43
    },
    {
        "tag": "país",
        "count": 41
    },
    {
        "tag": "adolescentes",
        "count": 41
    },
    {
        "tag": "comunicación",
        "count": 40
    },
    {
        "tag": "igualdad",
        "count": 39
    },
    {
        "tag": "agua",
        "count": 38
    },
    {
        "tag": "parques",
        "count": 38
    },
    {
        "tag": "universidades",
        "count": 37
    },
    {
        "tag": "perspectiva",
        "count": 36
    },
    {
        "tag": "prevención",
        "count": 36
    },
    {
        "tag": "tecnología",
        "count": 36
    },
    {
        "tag": "gente",
        "count": 36
    },
    {
        "tag": "integral",
        "count": 36
    },
    {
        "tag": "ley",
        "count": 35
    },
    {
        "tag": "hijos",
        "count": 34
    },
    {
        "tag": "ambiente",
        "count": 33
    },
    {
        "tag": "deporte",
        "count": 31
    },
    {
        "tag": "construcción",
        "count": 31
    },
    {
        "tag": "cenotes",
        "count": 31
    },
    {
        "tag": "estudiantes",
        "count": 31
    },
    {
        "tag": "empleo",
        "count": 31
    },
    {
        "tag": "económica",
        "count": 31
    },
    {
        "tag": "docentes",
        "count": 31
    },
    {
        "tag": "oportunidades",
        "count": 31
    },
    {
        "tag": "turista",
        "count": 31
    },
    {
        "tag": "sustentable",
        "count": 30
    },
    {
        "tag": "economía",
        "count": 30
    },
    {
        "tag": "edad",
        "count": 30
    },
    {
        "tag": "ciencia",
        "count": 27
    },
    {
        "tag": "laboral",
        "count": 27
    },
    {
        "tag": "pacientes",
        "count": 27
    },
    {
        "tag": "pueblos",
        "count": 26
    },
    {
        "tag": "alimentos",
        "count": 25
    },
    {
        "tag": "trabajar",
        "count": 25
    },
    {
        "tag": "derecho",
        "count": 24
    },
    {
        "tag": "cambio",
        "count": 23
    },
    {
        "tag": "administración",
        "count": 23
    },
    {
        "tag": "inclusión",
        "count": 23
    },
    {
        "tag": "indígenas",
        "count": 23
    },
    {
        "tag": "innovación",
        "count": 23
    }];

series.dataFields.word = "tag";
series.dataFields.value = "count";

series.heatRules.push({
    "target": series.labels.template,
    "property": "fill",
    "min": am4core.color("#0000CC"),
    "max": am4core.color("#CC00CC"),
    "dataField": "value"
});

series.labels.template.url = "https://stackoverflow.com/questions/tagged/{word}";
series.labels.template.urlTarget = "_blank";
series.labels.template.tooltipText = "{word}: {value}";

var hoverState = series.labels.template.states.create("hover");
hoverState.properties.fill = am4core.color("#FF0000");

//var subtitle = chart.titles.create();
//subtitle.text = "(click to open)";

var title = chart.titles.create();
title.text = "Palabras mas utilizadas en las propuestas";
title.fontSize = 20;
title.fontWeight = "800";
chart.exporting.menu = new am4core.ExportMenu();
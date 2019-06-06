am4core.useTheme(am4themes_animated);

var mainContainer = am4core.create("chartdiv", am4core.Container);
mainContainer.width = am4core.percent(100);
mainContainer.height = am4core.percent(100);
mainContainer.layout = "horizontal";

var usData = [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 798
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 122
    },
    {
      "age": "POBREZA",
      "male": 352
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 798
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 552
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 362
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 798
    },
    {
      "age": "INSEGURIDAD",
      "male": 522
    },
    {
      "age": "CORRUPCION",
      "male": 362
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 792
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 552
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 352
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 362
    }
];

var maleChart = mainContainer.createChild(am4charts.XYChart);
maleChart.paddingRight = 0;
maleChart.data = JSON.parse(JSON.stringify(usData));

// Create axes
var maleCategoryAxis = maleChart.yAxes.push(new am4charts.CategoryAxis());
maleCategoryAxis.dataFields.category = "age";
maleCategoryAxis.renderer.grid.template.location = 0;
//maleCategoryAxis.renderer.inversed = true;
maleCategoryAxis.renderer.minGridDistance = 15;

var maleValueAxis = maleChart.xAxes.push(new am4charts.ValueAxis());
maleValueAxis.renderer.inversed = true;
maleValueAxis.min = 0;
maleValueAxis.max = 10;
maleValueAxis.strictMinMax = true;

maleValueAxis.numberFormatter = new am4core.NumberFormatter();
maleValueAxis.numberFormatter.numberFormat = "#.#'%'";

// Create series
var maleSeries = maleChart.series.push(new am4charts.ColumnSeries());
maleSeries.dataFields.valueX = "male";
maleSeries.dataFields.valueXShow = "percent";
maleSeries.calculatePercent = true;
maleSeries.dataFields.categoryY = "age";
maleSeries.interpolationDuration = 1000;
maleSeries.columns.template.tooltipText = "{categoryY}: {valueX}";
//maleSeries.sequencedInterpolation = true;


var mapChart = mainContainer.createChild(am4maps.MapChart);
mapChart.projection = new am4maps.projections.Mercator();
mapChart.geodata = am4geodata_yucatanLow;
mapChart.zoomControl = new am4maps.ZoomControl();
mapChart.zIndex = -1;

var polygonSeries = mapChart.series.push(new am4maps.MapPolygonSeries())
polygonSeries.useGeodata = true;

var selectedStateId = "MX";
var selectedPolygon;
var selectedStateName;

var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.togglable = true;

var hoverState = polygonTemplate.states.create("hover");
hoverState.properties.fill = mapChart.colors.getIndex(2);

var activeState = polygonTemplate.states.create("active");
activeState.properties.fill = mapChart.colors.getIndex(6);

polygonTemplate.events.on("hit", function(event) {
  var id = event.target.dataItem.dataContext.id;
  var stateId = id.split("-")[1];
  showState(stateId, event.target.dataItem.dataContext.name, event.target);
})


mapChart.seriesContainer.background.events.on("over", function(event) {
  showState(selectedStateId, selectedStateName, selectedPolygon);
});


function showState(id, stateName, polygon) {
  if(selectedStateId != id){

    var newData = stateData[id];

    if (selectedPolygon) {
      selectedPolygon.isActive = false;
    }

    for (var i = 0; i < maleChart.data.length; i++) {      
      maleChart.data[i].male = newData[i].male;
    }

    maleChart.invalidateRawData();

    selectedStateName = stateName;
    selectedStateId = id;
    selectedPolygon = polygon;

    label.text = " Prioridades en "+ stateName;
    label.hide(0);
    label.show();
   }
}

var label = mainContainer.createChild(am4core.Label);
label.isMeasured = false;
label.x = am4core.percent(80);
label.horizontalCenter = "middle";
label.y = 50;
label.showOnInit = true;
label.text = "Prioridades en el Estado";
label.hiddenState.properties.dy = -100;

var stateData = {
  "ABA": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 29      
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 11      
    },
    {
      "age": "POBREZA",
      "male": 14      
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0      
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0      
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 1      
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0      
    },
    {
      "age": "INSEGURIDAD",
      "male": 14      
    },
    {
      "age": "CORRUPCION",
      "male": 0      
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 0      
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 7      
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 1      
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 1      
    }
  ],
  "ACA": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 9      
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 5      
    },
    {
      "age": "POBREZA",
      "male": 116      
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0      
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 1      
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0      
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0      
    },
    {
      "age": "INSEGURIDAD",
      "male": 3      
    },
    {
      "age": "CORRUPCION",
      "male": 2      
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 2      
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 4      
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 2      
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 0      
    }
  ],
  "AKIL": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male":403      
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male":207      
    },
    {
      "age": "POBREZA",
      "male":421      
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male":1      
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male":0      
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male":0      
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male":0      
    },
    {
      "age": "INSEGURIDAD",
      "male":60      
    },
    {
      "age": "CORRUPCION",
      "male":32      
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male":1      
    },
    {
      "age": "SALARIOS BAJOS",
      "male":139      
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male":9      
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male":5      
    }
  ]  ,
  "BACA": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 203      
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 49      
    },
    {
      "age": "POBREZA",
      "male": 180      
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 3      
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 2      
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 1      
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0      
    },
    {
      "age": "INSEGURIDAD",
      "male": 32      
    },
    {
      "age": "CORRUPCION",
      "male": 9      
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 1      
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 97      
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 6      
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 10      
    }
  ]  ,
  "BOK": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 23      
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 6      
    },
    {
      "age": "POBREZA",
      "male": 19      
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0      
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0      
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0      
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0      
    },
    {
      "age": "INSEGURIDAD",
      "male": 0      
    },
    {
      "age": "CORRUPCION",
      "male": 1      
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 0      
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 6      
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 2      
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 0      
    }
  ]  ,
  "BUC": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 559      
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 259      
    },
    {
      "age": "POBREZA",
      "male": 195      
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 11      
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 11      
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 9      
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 4      
    },
    {
      "age": "INSEGURIDAD",
      "male": 36      
    },
    {
      "age": "CORRUPCION",
      "male": 43      
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 14      
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 106      
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 18      
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 4      
    }
  ]  ,
  "CAC": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 200      
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 108      
    },
    {
      "age": "POBREZA",
      "male": 99      
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 3      
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 4      
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 1      
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0      
    },
    {
      "age": "INSEGURIDAD",
      "male": 32      
    },
    {
      "age": "CORRUPCION",
      "male": 19      
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 2      
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 103      
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 8      
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 11      
    }
  ]  ,
  "CAL": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 203      
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 231      
    },
    {
      "age": "POBREZA",
      "male": 123      
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 1      
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 1      
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 1      
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 2      
    },
    {
      "age": "INSEGURIDAD",
      "male": 18      
    },
    {
      "age": "CORRUPCION",
      "male": 13      
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 0      
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 117      
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 8      
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 0      
    }
  ]  ,
  "CANSA": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 171      
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 128      
    },
    {
      "age": "POBREZA",
      "male": 50      
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0      
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 1      
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 2      
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0      
    },
    {
      "age": "INSEGURIDAD",
      "male": 6      
    },
    {
      "age": "CORRUPCION",
      "male": 5      
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 0      
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 53      
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 2      
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 5      
    }
  ]  ,
  "CANTAM": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 159      
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 73      
    },
    {
      "age": "POBREZA",
      "male": 93      
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 1      
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0      
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0      
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0      
    },
    {
      "age": "INSEGURIDAD",
      "male": 2      
    },
    {
      "age": "CORRUPCION",
      "male": 1      
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 1      
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 9      
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 1      
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 0      
    }
  ]  ,
  "CELES": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 67
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 28
    },
    {
      "age": "POBREZA",
      "male": 16
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 1
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 1
    },
    {
      "age": "INSEGURIDAD",
      "male": 9
    },
    {
      "age": "CORRUPCION",
      "male": 5
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 4
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 12
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 3
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 3
    }
  ]  ,
  "CENOT": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 177
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 78
    },
    {
      "age": "POBREZA",
      "male": 39
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 0
    },
    {
      "age": "CORRUPCION",
      "male": 4
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 0
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 0
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 0
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 0
    }
  ]  ,
  "CHACS": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 45
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 2
    },
    {
      "age": "POBREZA",
      "male": 14
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 0
    },
    {
      "age": "CORRUPCION",
      "male": 0
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 1
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 0
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 1
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 0
    }
  ]  ,
  "CHANK": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 199
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 152
    },
    {
      "age": "POBREZA",
      "male": 236
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 1
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 5
    },
    {
      "age": "CORRUPCION",
      "male": 68
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 17
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 10
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 16
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 1
    }
  ]  ,
  "CHAPAB": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 47
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 75
    },
    {
      "age": "POBREZA",
      "male": 143
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 4
    },
    {
      "age": "CORRUPCION",
      "male": 5
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 1
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 165
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 8
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 1
    }
  ]  ,
  "CHEMAX": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 905
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 1040
    },
    {
      "age": "POBREZA",
      "male": 1197
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 2
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 1
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 1
    },
    {
      "age": "INSEGURIDAD",
      "male": 76
    },
    {
      "age": "CORRUPCION",
      "male": 14
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 2
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 212
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 15
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 0
    }
  ]  ,
  "CHICHIM": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 156
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 213
    },
    {
      "age": "POBREZA",
      "male": 538
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 1
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 1
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 2
    },
    {
      "age": "CORRUPCION",
      "male": 6
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 1
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 23
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 4
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 0
    }
  ]  ,
  "CHICXU": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 88
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 89
    },
    {
      "age": "POBREZA",
      "male": 128
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 1
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 1
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 22
    },
    {
      "age": "CORRUPCION",
      "male": 5
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 17
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 68
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 3
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 247
    }
  ]  ,
  "CHIKIN": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 42
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 9
    },
    {
      "age": "POBREZA",
      "male": 0
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 0
    },
    {
      "age": "CORRUPCION",
      "male": 0
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 0
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 0
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 2
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 0
    }
  ]  ,
  "CHOCHOLA": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 0
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 0
    },
    {
      "age": "POBREZA",
      "male": 0
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 3
    },
    {
      "age": "CORRUPCION",
      "male": 0
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 0
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 1
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 0
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 0
    }
  ]  ,
  "CHUMAYEL": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 138
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 101
    },
    {
      "age": "POBREZA",
      "male": 51
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 1
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 1
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 11
    },
    {
      "age": "CORRUPCION",
      "male": 8
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 0
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 74
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 6
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 20
    }
  ]  ,
  "CONKAL": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 316
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 190
    },
    {
      "age": "POBREZA",
      "male": 179
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 1
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 1
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 3
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 83
    },
    {
      "age": "CORRUPCION",
      "male": 38
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 4
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 266
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 9
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 8
    }
  ]  ,
  "CUNCUNUL": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 12
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 17
    },
    {
      "age": "POBREZA",
      "male": 38
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 0
    },
    {
      "age": "CORRUPCION",
      "male": 0
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 0
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 1
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 0
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 1
    }
  ]  ,
  "CUZAMA": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 39
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 34
    },
    {
      "age": "POBREZA",
      "male": 42
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 1
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 5
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 7
    },
    {
      "age": "CORRUPCION",
      "male": 0
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 0
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 13
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 0
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 0
    }
  ]  ,
  "DZAN": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 259
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 143
    },
    {
      "age": "POBREZA",
      "male": 174
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 1
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 5
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 5
    },
    {
      "age": "CORRUPCION",
      "male": 9
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 31
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 66
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 22
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 2
    }
  ]  ,
  "DZEMUL": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 37
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 28
    },
    {
      "age": "POBREZA",
      "male": 33
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 2
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 11
    },
    {
      "age": "CORRUPCION",
      "male": 4
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 1
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 11
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 0
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 3
    }
  ]  ,
  "DZIDZANTUN": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 205
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 429
    },
    {
      "age": "POBREZA",
      "male": 315
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 3
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 3
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 2
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 5
    },
    {
      "age": "INSEGURIDAD",
      "male": 7
    },
    {
      "age": "CORRUPCION",
      "male": 22
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 3
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 38
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 14
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 8
    }
  ]  ,
  "DZILAMB": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 27
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 36
    },
    {
      "age": "POBREZA",
      "male": 263
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 1
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 2
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 2
    },
    {
      "age": "CORRUPCION",
      "male": 2
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 0
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 12
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 0
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 2
    }
  ]  ,
  "DZILAMG": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 186
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 458
    },
    {
      "age": "POBREZA",
      "male": 159
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 4
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 1
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 31
    },
    {
      "age": "CORRUPCION",
      "male": 19
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 25
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 44
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 1
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 0
    }
  ]  ,
  "DZITAS": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 138
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 68
    },
    {
      "age": "POBREZA",
      "male": 29
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 7
    },
    {
      "age": "CORRUPCION",
      "male": 4
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 14
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 15
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 12
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 0
    }
  ],
  "DZONCAUICH": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 9
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 19
    },
    {
      "age": "POBREZA",
      "male": 46
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 2
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 7
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 2
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 4
    },
    {
      "age": "CORRUPCION",
      "male": 25
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 7
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 66
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 12
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 4
    }
  ],
  "ESPITA": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 686
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 693
    },
    {
      "age": "POBREZA",
      "male": 422
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 1
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 12
    },
    {
      "age": "CORRUPCION",
      "male": 20
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 51
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 205
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 1
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 2
    }
  ],
  "HALACHO": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 913
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 434
    },
    {
      "age": "POBREZA",
      "male": 534
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 7
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 5
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 1
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 127
    },
    {
      "age": "CORRUPCION",
      "male": 66
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 14
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 97
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 30
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 10
    }
  ],
  "HOCABA": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 318
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 91
    },
    {
      "age": "POBREZA",
      "male": 268
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 2
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 3
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 1
    },
    {
      "age": "INSEGURIDAD",
      "male": 17
    },
    {
      "age": "CORRUPCION",
      "male": 19
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 1
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 98
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 4
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 4
    }
  ],
  "HOCTUN": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male":484
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male":163
    },
    {
      "age": "POBREZA",
      "male":204
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male":3
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male":0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male":1
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male":0
    },
    {
      "age": "INSEGURIDAD",
      "male":21
    },
    {
      "age": "CORRUPCION",
      "male":22
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male":7
    },
    {
      "age": "SALARIOS BAJOS",
      "male":178
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male":5
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male":7
    }
  ]  ,
  "HOMUN": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 269
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 216
    },
    {
      "age": "POBREZA",
      "male": 209
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 1
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 1
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 2
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 2
    },
    {
      "age": "INSEGURIDAD",
      "male": 16
    },
    {
      "age": "CORRUPCION",
      "male": 15
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 10
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 147
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 11
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 13
    }
  ]  ,
  "HUHI": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 239
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 92
    },
    {
      "age": "POBREZA",
      "male": 44
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 2
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 1
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 9
    },
    {
      "age": "CORRUPCION",
      "male": 4
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 0
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 48
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 4
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 0
    }
  ]  ,
  "HUNUCMA": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 121
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 151
    },
    {
      "age": "POBREZA",
      "male": 472
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 6
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 4
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 198
    },
    {
      "age": "CORRUPCION",
      "male": 14
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 1
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 181
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 23
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 10
    }
  ]  ,
  "IXIL": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 195
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 109
    },
    {
      "age": "POBREZA",
      "male": 112
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 5
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 14
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 2
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 1
    },
    {
      "age": "INSEGURIDAD",
      "male": 39
    },
    {
      "age": "CORRUPCION",
      "male": 18
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 8
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 99
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 20
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 5
    }
  ]  ,
  "IZAMAL": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 530
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 1155
    },
    {
      "age": "POBREZA",
      "male": 707
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 12
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 25
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 9
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 5
    },
    {
      "age": "INSEGURIDAD",
      "male": 63
    },
    {
      "age": "CORRUPCION",
      "male": 93
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 41
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 376
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 47
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 13
    }
  ]  ,
  "KANASIN": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 326
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 527
    },
    {
      "age": "POBREZA",
      "male": 403
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 16
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 8
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 5
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 1
    },
    {
      "age": "INSEGURIDAD",
      "male": 794
    },
    {
      "age": "CORRUPCION",
      "male": 37
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 215
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 448
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 80
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 7
    }
  ]  ,
  "KANTUNIL": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 3
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 8
    },
    {
      "age": "POBREZA",
      "male": 105
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 13
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 29
    },
    {
      "age": "CORRUPCION",
      "male": 0
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 0
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 5
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 0
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 0
    }
  ]  ,
  "KAUA": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 37
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 39
    },
    {
      "age": "POBREZA",
      "male": 76
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 2
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 1
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 1
    },
    {
      "age": "CORRUPCION",
      "male": 0
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 4
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 13
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 0
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 1
    }
  ]  ,
  "KINCHIL": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 2
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 2
    },
    {
      "age": "POBREZA",
      "male": 2
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 0
    },
    {
      "age": "CORRUPCION",
      "male": 0
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 0
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 0
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 0
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 0
    }
  ]  ,
  "KOPOMA": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 0
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 0
    },
    {
      "age": "POBREZA",
      "male": 0
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 0
    },
    {
      "age": "CORRUPCION",
      "male": 0
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 0
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 0
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 0
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 0
    }
  ]  ,
  "MAMA": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 142
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 168
    },
    {
      "age": "POBREZA",
      "male": 24
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 6
    },
    {
      "age": "CORRUPCION",
      "male": 7
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 1
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 36
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 7
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 1
    }
  ]  ,
  "MANI": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 132
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 97
    },
    {
      "age": "POBREZA",
      "male": 135
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 23
    },
    {
      "age": "CORRUPCION",
      "male": 6
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 34
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 48
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 21
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 5
    }
  ]  ,
  "MAXCANU": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 334
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 726
    },
    {
      "age": "POBREZA",
      "male": 989
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 1
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 1
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 35
    },
    {
      "age": "CORRUPCION",
      "male": 12
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 47
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 220
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 39
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 2
    }
  ]  ,
  "MAYAPAN": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 216
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 284
    },
    {
      "age": "POBREZA",
      "male": 34
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 4
    },
    {
      "age": "CORRUPCION",
      "male": 0
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 0
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 4
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 0
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 0
    }
  ]  ,
  "MOCOCHA": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 59
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 63
    },
    {
      "age": "POBREZA",
      "male": 13
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 1
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 1
    },
    {
      "age": "CORRUPCION",
      "male": 2
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 0
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 53
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 5
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 1
    }
  ]  ,
  "MOTUL": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 666
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 577
    },
    {
      "age": "POBREZA",
      "male": 1004
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 4
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 7
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 4
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 4
    },
    {
      "age": "INSEGURIDAD",
      "male": 225
    },
    {
      "age": "CORRUPCION",
      "male": 101
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 5
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 751
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 49
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 40
    }
  ]  ,
  "MUNA": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 485
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 64
    },
    {
      "age": "POBREZA",
      "male": 55
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 3
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 27
    },
    {
      "age": "CORRUPCION",
      "male": 22
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 2
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 57
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 16
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 2
    }
  ]  ,
  "MUXUPIP": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 116
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 71
    },
    {
      "age": "POBREZA",
      "male": 92
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 1
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 2
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 18
    },
    {
      "age": "CORRUPCION",
      "male": 9
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 14
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 71
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 9
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 0
    }
  ]  ,
  "OPICHEN": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 229
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 91
    },
    {
      "age": "POBREZA",
      "male": 118
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 1
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 9
    },
    {
      "age": "CORRUPCION",
      "male": 8
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 5
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 71
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 28
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 2
    }
  ]  ,
  "OXKUTZ": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 737
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 539
    },
    {
      "age": "POBREZA",
      "male": 950
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 4
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 4
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 4
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 8
    },
    {
      "age": "INSEGURIDAD",
      "male": 155
    },
    {
      "age": "CORRUPCION",
      "male": 82
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 9
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 471
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 126
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 11
    }
  ]  ,
  "PANABA": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 268
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 193
    },
    {
      "age": "POBREZA",
      "male": 34
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 1
    },
    {
      "age": "CORRUPCION",
      "male": 1
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 1
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 57
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 0
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 0
    }
  ]  ,
  "PETO": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 196
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 480
    },
    {
      "age": "POBREZA",
      "male": 1218
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 6
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 1
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 2
    },
    {
      "age": "INSEGURIDAD",
      "male": 37
    },
    {
      "age": "CORRUPCION",
      "male": 14
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 44
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 45
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 61
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 2
    }
  ]  ,
  "PROGRESO": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 459
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 562
    },
    {
      "age": "POBREZA",
      "male": 737
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 38
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 67
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 7
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 4
    },
    {
      "age": "INSEGURIDAD",
      "male": 892
    },
    {
      "age": "CORRUPCION",
      "male": 147
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 27
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 496
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 32
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 18
    }
  ]  ,
  "QUINTANA": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 15
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 16
    },
    {
      "age": "POBREZA",
      "male": 8
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 0
    },
    {
      "age": "CORRUPCION",
      "male": 0
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 0
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 3
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 0
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 0
    }
  ]  ,
  "RIOLAG": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 92
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 142
    },
    {
      "age": "POBREZA",
      "male": 52
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 4
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 4
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 5
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 3
    },
    {
      "age": "INSEGURIDAD",
      "male": 16
    },
    {
      "age": "CORRUPCION",
      "male": 12
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 15
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 114
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 9
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 9
    }
  ]  ,
  "SACALUM": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 55
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 26
    },
    {
      "age": "POBREZA",
      "male": 81
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 1
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 1
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 5
    },
    {
      "age": "CORRUPCION",
      "male": 4
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 13
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 151
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 3
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 0
    }
  ]  ,
  "SAMAHIL": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 105
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 31
    },
    {
      "age": "POBREZA",
      "male": 152
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 1
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 2
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 16
    },
    {
      "age": "CORRUPCION",
      "male": 10
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 9
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 73
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 10
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 1
    }
  ],
  "SANF": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 101
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 40
    },
    {
      "age": "POBREZA",
      "male": 3
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 3
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 1
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 4
    },
    {
      "age": "CORRUPCION",
      "male": 11
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 9
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 19
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 11
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 0
    }
  ],
  "SANAHCAT": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 104
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 5
    },
    {
      "age": "POBREZA",
      "male": 3
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 1
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 1
    },
    {
      "age": "CORRUPCION",
      "male": 0
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 0
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 12
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 1
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 0
    }
  ],
  "SANTAE": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 191
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 216
    },
    {
      "age": "POBREZA",
      "male": 223
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 2
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 1
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 2
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 10
    },
    {
      "age": "CORRUPCION",
      "male": 9
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 4
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 44
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 5
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 0
    }
  ],
  "SEYE": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 28
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 6
    },
    {
      "age": "POBREZA",
      "male": 30
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 7
    },
    {
      "age": "CORRUPCION",
      "male": 4
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 11
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 4
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 1
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 1
    }
  ],
  "SINANCHE": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male":141
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male":174
    },
    {
      "age": "POBREZA",
      "male":70
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male":0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male":1
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male":0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male":0
    },
    {
      "age": "INSEGURIDAD",
      "male":11
    },
    {
      "age": "CORRUPCION",
      "male":20
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male":7
    },
    {
      "age": "SALARIOS BAJOS",
      "male":3
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male":10
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male":0
    }
  ]  ,
  "SOTUTA": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 365
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 166
    },
    {
      "age": "POBREZA",
      "male": 143
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 11
    },
    {
      "age": "CORRUPCION",
      "male": 15
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 0
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 124
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 6
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 0
    }
  ]  ,
  "SUCILA": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 200
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 142
    },
    {
      "age": "POBREZA",
      "male": 75
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 2
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 1
    },
    {
      "age": "INSEGURIDAD",
      "male": 7
    },
    {
      "age": "CORRUPCION",
      "male": 22
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 5
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 16
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 24
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 0
    }
  ]  ,
  "SUDZAL": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 93
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 21
    },
    {
      "age": "POBREZA",
      "male": 3
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 0
    },
    {
      "age": "CORRUPCION",
      "male": 0
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 0
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 7
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 0
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 0
    }
  ]  ,
  "SUMA": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 0
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 0
    },
    {
      "age": "POBREZA",
      "male": 0
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 0
    },
    {
      "age": "CORRUPCION",
      "male": 0
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 0
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 0
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 0
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 0
    }
  ]  ,
  "TAHDZIU": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 153
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 175
    },
    {
      "age": "POBREZA",
      "male": 150
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 2
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 3
    },
    {
      "age": "CORRUPCION",
      "male": 12
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 40
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 16
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 9
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 8
    }
  ]  ,
  "TAHMEK": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 201
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 37
    },
    {
      "age": "POBREZA",
      "male": 43
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 2
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 2
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 1
    },
    {
      "age": "INSEGURIDAD",
      "male": 15
    },
    {
      "age": "CORRUPCION",
      "male": 6
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 0
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 53
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 10
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 6
    }
  ]  ,
  "TEABO": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 259
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 327
    },
    {
      "age": "POBREZA",
      "male": 25
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 1
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 1
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 3
    },
    {
      "age": "CORRUPCION",
      "male": 2
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 6
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 114
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 4
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 1
    }
  ]  ,
  "TECOH": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 547
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 112
    },
    {
      "age": "POBREZA",
      "male": 641
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 1
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 3
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 1
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 2
    },
    {
      "age": "INSEGURIDAD",
      "male": 26
    },
    {
      "age": "CORRUPCION",
      "male": 14
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 8
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 89
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 8
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 2
    }
  ]  ,
  "TEKAL": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 18
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 97
    },
    {
      "age": "POBREZA",
      "male": 6
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 1
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 1
    },
    {
      "age": "CORRUPCION",
      "male": 0
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 0
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 4
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 1
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 0
    }
  ]  ,
  "TEKANTO": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 153
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 159
    },
    {
      "age": "POBREZA",
      "male": 123
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 8
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 1
    },
    {
      "age": "INSEGURIDAD",
      "male": 11
    },
    {
      "age": "CORRUPCION",
      "male": 12
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 1
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 103
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 8
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 3
    }
  ]  ,
  "TEKAX": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 397
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 564
    },
    {
      "age": "POBREZA",
      "male": 1180
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 7
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 2
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 7
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 3
    },
    {
      "age": "INSEGURIDAD",
      "male": 46
    },
    {
      "age": "CORRUPCION",
      "male": 26
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 81
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 245
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 47
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 4
    }
  ]  ,
  "TEKIT": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 383
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 111
    },
    {
      "age": "POBREZA",
      "male": 60
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 1
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 1
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 2
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 1
    },
    {
      "age": "INSEGURIDAD",
      "male": 21
    },
    {
      "age": "CORRUPCION",
      "male": 1
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 3
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 66
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 3
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 2
    }
  ]  ,
  "TEKOM": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 1
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 0
    },
    {
      "age": "POBREZA",
      "male": 4
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 0
    },
    {
      "age": "CORRUPCION",
      "male": 0
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 0
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 2
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 0
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 0
    }
  ]  ,
  "TELCHACP": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 217
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 133
    },
    {
      "age": "POBREZA",
      "male": 62
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 3
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 1
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 31
    },
    {
      "age": "CORRUPCION",
      "male": 27
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 4
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 67
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 9
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 4
    }
  ]  ,
  "TELPUER": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 101
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 203
    },
    {
      "age": "POBREZA",
      "male": 34
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 6
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 19
    },
    {
      "age": "CORRUPCION",
      "male": 6
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 0
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 19
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 0
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 0
    }
  ]  ,
  "TEMAX": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 80
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 180
    },
    {
      "age": "POBREZA",
      "male": 134
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 18
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 11
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 5
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 5
    },
    {
      "age": "INSEGURIDAD",
      "male": 26
    },
    {
      "age": "CORRUPCION",
      "male": 39
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 15
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 76
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 18
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 6
    }
  ]  ,
  "TEMOZON": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 343
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 153
    },
    {
      "age": "POBREZA",
      "male": 271
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 1
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 2
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 2
    },
    {
      "age": "INSEGURIDAD",
      "male": 0
    },
    {
      "age": "CORRUPCION",
      "male": 5
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 7
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 118
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 61
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 1
    }
  ]  ,
  "TEPAKAN": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 33
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 75
    },
    {
      "age": "POBREZA",
      "male": 30
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 1
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 2
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 4
    },
    {
      "age": "CORRUPCION",
      "male": 1
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 1
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 28
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 1
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 1
    }
  ]  ,
  "TETIZ": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 2
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 7
    },
    {
      "age": "POBREZA",
      "male": 2
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 1
    },
    {
      "age": "CORRUPCION",
      "male": 0
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 0
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 4
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 0
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 0
    }
  ]  ,
  "TEYA": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 54
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 49
    },
    {
      "age": "POBREZA",
      "male": 12
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 2
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 1
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 1
    },
    {
      "age": "INSEGURIDAD",
      "male": 1
    },
    {
      "age": "CORRUPCION",
      "male": 7
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 1
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 16
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 1
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 0
    }
  ]  ,
  "TICUL": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 437
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 731
    },
    {
      "age": "POBREZA",
      "male": 980
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 4
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 1
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 2
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 2
    },
    {
      "age": "INSEGURIDAD",
      "male": 109
    },
    {
      "age": "CORRUPCION",
      "male": 49
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 7
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 460
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 34
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 2
    }
  ]  ,
  "TIMUCUY": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 15
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 1
    },
    {
      "age": "POBREZA",
      "male": 45
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 0
    },
    {
      "age": "CORRUPCION",
      "male": 0
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 3
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 0
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 0
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 0
    }
  ]  ,
  "TINUM": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 167
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 225
    },
    {
      "age": "POBREZA",
      "male": 177
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 1
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 3
    },
    {
      "age": "CORRUPCION",
      "male": 3
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 8
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 83
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 2
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 2
    }
  ]  ,
  "TIXCACAL": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 168
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 552
    },
    {
      "age": "POBREZA",
      "male": 286
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 4
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 16
    },
    {
      "age": "CORRUPCION",
      "male": 7
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 5
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 51
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 11
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 0
    }
  ]  ,
  "TIXKOKOB": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 32
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 19
    },
    {
      "age": "POBREZA",
      "male": 367
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 1
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 4
    },
    {
      "age": "INSEGURIDAD",
      "male": 397
    },
    {
      "age": "CORRUPCION",
      "male": 626
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 2
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 19
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 0
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 2
    }
  ]  ,
  "TIXMEHUAC": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 122
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 63
    },
    {
      "age": "POBREZA",
      "male": 209
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 2
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 1
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 2
    },
    {
      "age": "CORRUPCION",
      "male": 9
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 17
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 0
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 7
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 0
    }
  ]  ,
  "TIXPEHUAL": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 62
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 23
    },
    {
      "age": "POBREZA",
      "male": 4
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 1
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 5
    },
    {
      "age": "CORRUPCION",
      "male": 2
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 23
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 22
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 12
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 1
    }
  ],
  "TIZIMIN": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 2445
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 1500
    },
    {
      "age": "POBREZA",
      "male": 1198
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 11
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 12
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 7
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 4
    },
    {
      "age": "INSEGURIDAD",
      "male": 126
    },
    {
      "age": "CORRUPCION",
      "male": 118
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 370
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 1426
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 50
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 38
    }
  ],
  "TUNKAS": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 166
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 162
    },
    {
      "age": "POBREZA",
      "male": 26
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 2
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 4
    },
    {
      "age": "CORRUPCION",
      "male": 3
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 0
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 82
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 0
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 0
    }
  ],
  "TZUCACAB": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 259
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 271
    },
    {
      "age": "POBREZA",
      "male": 422
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 1
    },
    {
      "age": "INSEGURIDAD",
      "male": 25
    },
    {
      "age": "CORRUPCION",
      "male": 17
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 141
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 66
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 15
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 0
    }
  ]  ,
  "UAYMA": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 258
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 62
    },
    {
      "age": "POBREZA",
      "male": 83
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 1
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 3
    },
    {
      "age": "CORRUPCION",
      "male": 6
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 3
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 51
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 0
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 1
    }
  ]  ,
  "UCU": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 0
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 0
    },
    {
      "age": "POBREZA",
      "male": 0
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 0
    },
    {
      "age": "CORRUPCION",
      "male": 0
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 0
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 0
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 0
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 0
    }
  ]  ,
  "UMAN": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 159
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 194
    },
    {
      "age": "POBREZA",
      "male": 375
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 5
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 5
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 2
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 274
    },
    {
      "age": "CORRUPCION",
      "male": 26
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 7
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 426
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 19
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 4
    }
  ]  ,
  "VALLADOLID": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 1224
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 828
    },
    {
      "age": "POBREZA",
      "male": 2156
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 21
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 13
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 2
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 4
    },
    {
      "age": "INSEGURIDAD",
      "male": 436
    },
    {
      "age": "CORRUPCION",
      "male": 157
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 549
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 593
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 102
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 28
    }
  ]  ,
  "XOCCHEL": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 93
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 90
    },
    {
      "age": "POBREZA",
      "male": 44
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 2
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 11
    },
    {
      "age": "CORRUPCION",
      "male": 12
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 0
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 36
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 3
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 3
    }
  ]  ,
  "YAXCABA": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 787
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 347
    },
    {
      "age": "POBREZA",
      "male": 438
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 4
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 1
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0
    },
    {
      "age": "INSEGURIDAD",
      "male": 27
    },
    {
      "age": "CORRUPCION",
      "male": 23
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 58
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 130
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 25
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 4
    }
  ]  ,
  "YAXKUKUL": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 200
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 41
    },
    {
      "age": "POBREZA",
      "male": 74
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 3
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 0
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 1
    },
    {
      "age": "INSEGURIDAD",
      "male": 13
    },
    {
      "age": "CORRUPCION",
      "male": 6
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 0
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 121
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 1
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 2
    }
  ],
  "YOBAIN": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 109
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 157
    },
    {
      "age": "POBREZA",
      "male": 51
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 0
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 1
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 1
    },
    {
      "age": "INSEGURIDAD",
      "male": 3
    },
    {
      "age": "CORRUPCION",
      "male": 12
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 9
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 56
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 1
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 2
    }
  ],
  "MERIDA": [
    {
      "age": "SERVICIOS DE SALUD DEFICIENTES",
      "male": 171      
    },
    {
      "age": "FALTA DE OPORTUNIDADES DE  TRABAJO",
      "male": 128      
    },
    {
      "age": "POBREZA",
      "male": 50      
    },
    {
      "age": "AUSENCIA DE ESPACIOS CULTURALES",
      "male": 0      
    },
    {
      "age": "DETERIORO DEL MEDIO AMBIENTE",
      "male": 1      
    },
    {
      "age": "DISCRIMINACION POR GENERO",
      "male": 2      
    },
    {
      "age": "FALTA DE CENTROS DE INVESTIGACION",
      "male": 0      
    },
    {
      "age": "INSEGURIDAD",
      "male": 6      
    },
    {
      "age": "CORRUPCION",
      "male": 5      
    },
    {
      "age": "INFRAESTRUCTURA INSUFICIENTE",
      "male": 0      
    },
    {
      "age": "SALARIOS BAJOS",
      "male": 53      
    },
    {
      "age": "INSUFICIENTES SERVICIOS EDUCATIVOS",
      "male": 2      
    },
    {
      "age": "TRAMITES COMPLICADOS O EXCESIVOS",
      "male": 5      
    }
  ]
}
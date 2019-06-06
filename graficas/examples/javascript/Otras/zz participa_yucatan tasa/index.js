/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_yucatanLow;

// Set projection
chart.projection = new am4maps.projections.Miller();
chart.homeZoomLevel = 1;
chart.homeGeoPoint = {
  latitude: 20.833106,
  longitude: -88.878280
};

// Create map polygon series
var yucatanSeries = chart.series.push(new am4maps.MapPolygonSeries());

// Make map load polygon (like country names) data from GeoJSON
yucatanSeries.useGeodata = true;

// Configure series
var polygonTemplate = yucatanSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}: {value}";
polygonTemplate.fill = am4core.color("#cacaca");

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
//hs.properties.fill = am4core.color("#367B25");
//hs.properties.fill = am4core.color("#0000FF");
hs.properties.fill = am4core.color("#D1A000");


// comienza la carga de la capa de regiones
var regionSeries = chart.series.push(new am4maps.MapPolygonSeries());
regionSeries.geodata = am4geodata_regionesLow;

var rgPolygonTemplate = regionSeries.mapPolygons.template;
rgPolygonTemplate.tooltipText = false;
rgPolygonTemplate.fill = am4core.color('#E2A9F3');
rgPolygonTemplate.fillOpacity = .25;
rgPolygonTemplate.stroke = am4core.color('#000');

var hs = rgPolygonTemplate.states.create('hover');
hs.properties.fill = am4core.color('#BF00FF');


// Add heat rule
yucatanSeries.heatRules.push({
  "property": "fill",
  "target": yucatanSeries.mapPolygons.template,
    "min": am4core.color("#000000"),
//    "min": am4core.color("#83D2D0"),

    
    "max": am4core.color("#00ff00")
    //"max": am4core.color("#041984")

    
});

// Add heat legend
var heatLegend = chart.createChild(am4maps.HeatLegend);
heatLegend.series = yucatanSeries;
heatLegend.width = am4core.percent(100);

yucatanSeries.mapPolygons.template.events.on("over", function(ev) {
  if (!isNaN(ev.target.dataItem.value)) {
    heatLegend.valueAxis.showTooltipAt(ev.target.dataItem.value)
  }
  else {
    heatLegend.valueAxis.hideTooltip();
  }
});

yucatanSeries.mapPolygons.template.events.on("out", function(ev) {
  heatLegend.valueAxis.hideTooltip();
});

chart.exporting.menu = new am4core.ExportMenu();

// Add expectancy data
yucatanSeries.data = [
    {
        "id": "MX-ABA",
        "value": 3.3
    },
    {
        "id": "MX-ACA",
        "value": 2.06
    },
    {
        "id": "MX-AKIL",
        "value": 11.75
    },
    {
        "id": "MX-BACA",
        "value": 10.63
    },
    {
        "id": "MX-BOK",
        "value": 4.61
    },
    {
        "id": "MX-BUC",
        "value": 15.44
    },
    {
        "id": "MX-CAC",
        "value": 8.79
    },
    {
        "id": "MX-CAL",
        "value": 17.37
    },
    {
        "id": "MX-CANSA",
        "value": 11.43
    },
    {
        "id": "MX-CANTAM",
        "value": 21.53
    },
    {
        "id": "MX-CELES",
        "value": 24.29
    },
    {
        "id": "MX-CENOT",
        "value": 9.51
    },
    {
        "id": "MX-CHACS",
        "value": 3.42
    },
    {
        "id": "MX-CHANK",
        "value": 44.82
    },
    {
        "id": "MX-CHAPAB",
        "value": 8.72
    },
    {
        "id": "MX-CHEMAX",
        "value": 15.41
    },
    {
        "id": "MX-CHICHIM",
        "value": 21.61
    },
    {
        "id": "MX-CHICXU",
        "value": 21.67
    },
    {
        "id": "MX-CHIKIN",
        "value": 0.15
    },
    {
        "id": "MX-CHOCHOLA",
        "value": 1.26
    },
    {
        "id": "MX-CHUMAYEL",
        "value": 4.86
    },
    {
        "id": "MX-CONKAL",
        "value": 25.72
    },
    {
        "id": "MX-CUNCUNUL",
        "value": 2.96
    },
    {
        "id": "MX-CUZAMA",
        "value": 5.45
    },
    {
        "id": "MX-DZAN",
        "value": 15.79
    },
    {
        "id": "MX-DZEMUL",
        "value": 3.85
    },
    {
        "id": "MX-DZIDZANTUN",
        "value": 13.62
    },
    {
        "id": "MX-DZILAMB",
        "value": 62.35
    },
    {
        "id": "MX-DZILAMG",
        "value": 15.6
    },
    {
        "id": "MX-DZITAS",
        "value": 8.83
    },
    {
        "id": "MX-DZONCAUICH",
        "value": 8.22
    },
    {
        "id": "MX-ESPITA",
        "value": 13.02
    },
    {
        "id": "MX-HALACHO",
        "value": 10.95
    },
    {
        "id": "MX-HOCABA",
        "value": 15.26
    },
    {
        "id": "MX-HOCTUN",
        "value": 18.33
    },
    {
        "id": "MX-HOMUN",
        "value": 11.92
    },
    {
        "id": "MX-HUHI",
        "value": 9.21
    },
    {
        "id": "MX-HUNUCMA",
        "value": 7.15
    },
    {
        "id": "MX-IXIL",
        "value": 15.89
    },
    {
        "id": "MX-IZAMAL",
        "value": 11.23
    },
    {
        "id": "MX-KANASIN",
        "value": 2.83
    },
    {
        "id": "MX-KANTUNIL",
        "value": 5.47
    },
    {
        "id": "MX-KAUA",
        "value": 8.37
    },
    {
        "id": "MX-KINCHIL",
        "value": 2.4
    },
    {
        "id": "MX-KOPOMA",
        "value": 2.08
    },
    {
        "id": "MX-MAMA",
        "value": 13.19
    },
    {
        "id": "MX-MANI",
        "value": 11.51
    },
    {
        "id": "MX-MAXCANU",
        "value": 10.9
    },
    {
        "id": "MX-MAYAPAN",
        "value": 15.65
    },
    {
        "id": "MX-MERIDA",
        "value": 1.45
    },
    {
        "id": "MX-MOCOCHA",
        "value": 7.41
    },
    {
        "id": "MX-MOTUL",
        "value": 9.55
    },
    {
        "id": "MX-MUNA",
        "value": 6.01
    },
    {
        "id": "MX-MUXUPIP",
        "value": 14.88
    },
    {
        "id": "MX-OPICHEN",
        "value": 8.55
    },
    {
        "id": "MX-OXKUTZ",
        "value": 10.46
    },
    {
        "id": "MX-PANABA",
        "value": 10.07
    },
    {
        "id": "MX-PETO",
        "value": 8.52
    },
    {
        "id": "MX-PROGRESO",
        "value": 13.69
    },
    {
        "id": "MX-QUINTANA",
        "value": 8.7
    },
    {
        "id": "MX-RIOLAG",
        "value": 49.3
    },
    {
        "id": "MX-SACALUM",
        "value": 7.51
    },
    {
        "id": "MX-SAMAHIL",
        "value": 10.29
    },
    {
        "id": "MX-SANF",
        "value": 55.91
    },
    {
        "id": "MX-SANAHCAT",
        "value": 9.79
    },
    {
        "id": "MX-SANTAE",
        "value": 17.88
    },
    {
        "id": "MX-SEYE",
        "value": 1.29
    },
    {
        "id": "MX-SINANCHE",
        "value": 14.11
    },
    {
        "id": "MX-SOTUTA",
        "value": 9.56
    },
    {
        "id": "MX-SUCILA",
        "value": 14.01
    },
    {
        "id": "MX-SUDZAL",
        "value": 7.08
    },
    {
        "id": "MX-SUMA",
        "value": 2.09
    },
    {
        "id": "MX-TAHDZIU",
        "value": 12.91
    },
    {
        "id": "MX-TAHMEK",
        "value": 11.3
    },
    {
        "id": "MX-TEABO",
        "value": 12.15
    },
    {
        "id": "MX-TECOH",
        "value": 9.11
    },
    {
        "id": "MX-TEKAL",
        "value": 10.08
    },
    {
        "id": "MX-TEKANTO",
        "value": 17.27
    },
    {
        "id": "MX-TEKAX",
        "value": 5.85
    },
    {
        "id": "MX-TEKIT",
        "value": 6.34
    },
    {
        "id": "MX-TEKOM",
        "value": 2.35
    },
    {
        "id": "MX-TELCHACP",
        "value": 15.99
    },
    {
        "id": "MX-TELPUER",
        "value": 22.77
    },
    {
        "id": "MX-TEMAX",
        "value": 9.33
    },
    {
        "id": "MX-TEMOZON",
        "value": 6.23
    },
    {
        "id": "MX-TEPAKAN",
        "value": 8.55
    },
    {
        "id": "MX-TETIZ",
        "value": 2.49
    },
    {
        "id": "MX-TEYA",
        "value": 9.23
    },
    {
        "id": "MX-TICUL",
        "value": 7.24
    },
    {
        "id": "MX-TIMUCUY",
        "value": 1.33
    },
    {
        "id": "MX-TINUM",
        "value": 5.47
    },
    {
        "id": "MX-TIXCACAL",
        "value": 15.67
    },
    {
        "id": "MX-TIXKOKOB",
        "value": 7.93
    },
    {
        "id": "MX-TIXMEHUAC",
        "value": 9.28
    },
    {
        "id": "MX-TIXPEHUAL",
        "value": 3.4
    },
    {
        "id": "MX-TIZIMIN",
        "value": 10.16
    },
    {
        "id": "MX-TUNKAS",
        "value": 13.06
    },
    {
        "id": "MX-TZUCACAB",
        "value": 8.46
    },
    {
        "id": "MX-UAYMA",
        "value": 11.59
    },
    {
        "id": "MX-UCU",
        "value": 0.83
    },
    {
        "id": "MX-UMAN",
        "value": 3.08
    },
    {
        "id": "MX-VALLADOLID",
        "value": 7.68
    },
    {
        "id": "MX-XOCCHEL",
        "value": 12.42
    },
    {
        "id": "MX-YAXCABA",
        "value": 11.85
    },
    {
        "id": "MX-YAXKUKUL",
        "value": 16.69
    },
    {
        "id": "MX-YOBAIN",
        "value": 23.56
    }
];
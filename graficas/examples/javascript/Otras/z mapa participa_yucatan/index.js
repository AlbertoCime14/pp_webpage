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

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

// Make map load polygon (like country names) data from GeoJSON
polygonSeries.useGeodata = true;

// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}: {value}";
polygonTemplate.fill = am4core.color("#cacaca");

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
//hs.properties.fill = am4core.color("#367B25");
//hs.properties.fill = am4core.color("#0000FF");
hs.properties.fill = am4core.color("#D1A000");




// Add heat rule
polygonSeries.heatRules.push({
  "property": "fill",
  "target": polygonSeries.mapPolygons.template,
    "min": am4core.color("#CDEDF5"),
//    "min": am4core.color("#83D2D0"),

    
    "max": am4core.color("#360051")
    //"max": am4core.color("#041984")

    
});

// Add heat legend
var heatLegend = chart.createChild(am4maps.HeatLegend);
heatLegend.series = polygonSeries;
heatLegend.width = am4core.percent(100);

polygonSeries.mapPolygons.template.events.on("over", function(ev) {
  if (!isNaN(ev.target.dataItem.value)) {
    heatLegend.valueAxis.showTooltipAt(ev.target.dataItem.value)
  }
  else {
    heatLegend.valueAxis.hideTooltip();
  }
});

polygonSeries.mapPolygons.template.events.on("out", function(ev) {
  heatLegend.valueAxis.hideTooltip();
});

chart.exporting.menu = new am4core.ExportMenu();

// Add expectancy data
polygonSeries.data = [
    {
        "id": "MX-ABA",
        "value": 230
    },
    {
        "id": "MX-ACA",
        "value": 351
    },
    {
        "id": "MX-AKIL",
        "value": 1357
    },
    {
        "id": "MX-BACA",
        "value": 657
    },
    {
        "id": "MX-BOK",
        "value": 103
    },
    {
        "id": "MX-BUC",
        "value": 1428
    },
    {
        "id": "MX-CAC",
        "value": 659
    },
    {
        "id": "MX-CAL",
        "value": 775
    },
    {
        "id": "MX-CANSA",
        "value": 562
    },
    {
        "id": "MX-CANTAM",
        "value": 564
    },
    {
        "id": "MX-CELES",
        "value": 1860
    },
    {
        "id": "MX-CENOT",
        "value": 376
    },
    {
        "id": "MX-CHACS",
        "value": 346
    },
    {
        "id": "MX-CHANK",
        "value": 779
    },
    {
        "id": "MX-CHAPAB",
        "value": 474
    },
    {
        "id": "MX-CHEMAX",
        "value": 3481
    },
    {
        "id": "MX-CHICHIM",
        "value": 1031
    },
    {
        "id": "MX-CHICXU",
        "value": 715
    },
    {
        "id": "MX-CHIKIN",
        "value": 55
    },
    {
        "id": "MX-CHOCHOLA",
        "value": 57
    },
    {
        "id": "MX-CHUMAYEL",
        "value": 419
    },
    {
        "id": "MX-CONKAL",
        "value": 1142
    },
    {
        "id": "MX-CUNCUNUL",
        "value": 144
    },
    {
        "id": "MX-CUZAMA",
        "value": 189
    },
    {
        "id": "MX-DZAN",
        "value": 870
    },
    {
        "id": "MX-DZEMUL",
        "value": 146
    },
    {
        "id": "MX-DZIDZANTUN",
        "value": 1168
    },
    {
        "id": "MX-DZILAMB",
        "value": 1700
    },
    {
        "id": "MX-DZILAMG",
        "value": 972
    },
    {
        "id": "MX-DZITAS",
        "value": 331
    },
    {
        "id": "MX-DZONCAUICH",
        "value": 237
    },
    {
        "id": "MX-ESPITA",
        "value": 2214
    },
    {
        "id": "MX-HALACHO",
        "value": 2291
    },
    {
        "id": "MX-HOCABA",
        "value": 997
    },
    {
        "id": "MX-HOCTUN",
        "value": 1122
    },
    {
        "id": "MX-HOMUN",
        "value": 949
    },
    {
        "id": "MX-HUHI",
        "value": 494
    },
    {
        "id": "MX-HUNUCMA",
        "value": 2472
    },
    {
        "id": "MX-IXIL",
        "value": 664
    },
    {
        "id": "MX-IZAMAL",
        "value": 3200
    },
    {
        "id": "MX-KANASIN",
        "value": 2984
    },
    {
        "id": "MX-KANTUNIL",
        "value": 321
    },
    {
        "id": "MX-KAUA",
        "value": 253
    },
    {
        "id": "MX-KINCHIL",
        "value": 177
    },
    {
        "id": "MX-KOPOMA",
        "value": 57
    },
    {
        "id": "MX-MAMA",
        "value": 427
    },
    {
        "id": "MX-MANI",
        "value": 676
    },
    {
        "id": "MX-MAXCANU",
        "value": 2583
    },
    {
        "id": "MX-MAYAPAN",
        "value": 570
    },
    {
        "id": "MX-MERIDA",
        "value": 10371
    },
    {
        "id": "MX-MOCOCHA",
        "value": 248
    },
    {
        "id": "MX-MOTUL",
        "value": 3588
    },
    {
        "id": "MX-MUNA",
        "value": 811
    },
    {
        "id": "MX-MUXUPIP",
        "value": 455
    },
    {
        "id": "MX-OPICHEN",
        "value": 611
    },
    {
        "id": "MX-OXKUTZ",
        "value": 3446
    },
    {
        "id": "MX-PANABA",
        "value": 790
    },
    {
        "id": "MX-PETO",
        "value": 2266
    },
    {
        "id": "MX-PROGRESO",
        "value": 8233
    },
    {
        "id": "MX-QUINTANA",
        "value": 87
    },
    {
        "id": "MX-RIOLAG",
        "value": 1849
    },
    {
        "id": "MX-SACALUM",
        "value": 383
    },
    {
        "id": "MX-SAMAHIL",
        "value": 565
    },
    {
        "id": "MX-SANF",
        "value": 995
    },
    {
        "id": "MX-SANAHCAT",
        "value": 187
    },
    {
        "id": "MX-SANTAE",
        "value": 762
    },
    {
        "id": "MX-SEYE",
        "value": 129
    },
    {
        "id": "MX-SINANCHE",
        "value": 472
    },
    {
        "id": "MX-SOTUTA",
        "value": 867
    },
    {
        "id": "MX-SUCILA",
        "value": 597
    },
    {
        "id": "MX-SUDZAL",
        "value": 131
    },
    {
        "id": "MX-SUMA",
        "value": 42
    },
    {
        "id": "MX-TAHDZIU",
        "value": 639
    },
    {
        "id": "MX-TAHMEK",
        "value": 435
    },
    {
        "id": "MX-TEABO",
        "value": 849
    },
    {
        "id": "MX-TECOH",
        "value": 1620
    },
    {
        "id": "MX-TEKAL",
        "value": 287
    },
    {
        "id": "MX-TEKANTO",
        "value": 660
    },
    {
        "id": "MX-TEKAX",
        "value": 2640
    },
    {
        "id": "MX-TEKIT",
        "value": 704
    },
    {
        "id": "MX-TEKOM",
        "value": 79
    },
    {
        "id": "MX-TELCHACP",
        "value": 608
    },
    {
        "id": "MX-TELPUER",
        "value": 434
    },
    {
        "id": "MX-TEMAX",
        "value": 672
    },
    {
        "id": "MX-TEMOZON",
        "value": 1010
    },
    {
        "id": "MX-TEPAKAN",
        "value": 206
    },
    {
        "id": "MX-TETIZ",
        "value": 131
    },
    {
        "id": "MX-TEYA",
        "value": 194
    },
    {
        "id": "MX-TICUL",
        "value": 3017
    },
    {
        "id": "MX-TIMUCUY",
        "value": 101
    },
    {
        "id": "MX-TINUM",
        "value": 712
    },
    {
        "id": "MX-TIXCACAL",
        "value": 1146
    },
    {
        "id": "MX-TIXKOKOB",
        "value": 1502
    },
    {
        "id": "MX-TIXMEHUAC",
        "value": 483
    },
    {
        "id": "MX-TIXPEHUAL",
        "value": 203
    },
    {
        "id": "MX-TIZIMIN",
        "value": 8092
    },
    {
        "id": "MX-TUNKAS",
        "value": 474
    },
    {
        "id": "MX-TZUCACAB",
        "value": 1277
    },
    {
        "id": "MX-UAYMA",
        "value": 522
    },
    {
        "id": "MX-UCU",
        "value": 33
    },
    {
        "id": "MX-UMAN",
        "value": 1655
    },
    {
        "id": "MX-VALLADOLID",
        "value": 6337
    },
    {
        "id": "MX-XOCCHEL",
        "value": 451
    },
    {
        "id": "MX-YAXCABA",
        "value": 1895
    },
    {
        "id": "MX-YAXKUKUL",
        "value": 529
    },
    {
        "id": "MX-YOBAIN",
        "value": 534
    }
];
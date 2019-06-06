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
polygonTemplate.tooltipText = "{name}: ${value}";
polygonTemplate.fill = am4core.color("#cacaca");

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#367B25");


// Add heat rule
polygonSeries.heatRules.push({
  "property": "fill",
  "target": polygonSeries.mapPolygons.template,
  "min": am4core.color("#ffffff"),
  "max": am4core.color("#AAAA00")
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
  { id: "MX-ABA", value: 6410.60 },
  { id: "MX-ACA", value: 8175 },
  { id: "MX-AKIL", value: 4666 },
  { id: "MX-BACA", value: 6241 },
  { id: "MX-BOK", value: 6268 },
  { id: "MX-BUC", value: 4831 },
  { id: "MX-CAC", value: 6806 },
  { id: "MX-CAL", value: 2940 },
  { id: "MX-CANSA", value: 4882 },
  { id: "MX-CANTAM", value: 4297 },
  { id: "MX-CELES", value: 5639 },
  { id: "MX-CENOT", value: 3532 },
  { id: "MX-CHACS", value: 11461 },
  { id: "MX-CHANK", value: 5623 },
  { id: "MX-CHAPAB", value: 5748 },
  { id: "MX-CHEMAX", value: 3371 },
  { id: "MX-CHICHIM", value: 3054 },
  { id: "MX-CHICXU", value: 4424 },
  { id: "MX-CHIKIN", value: 4003 },
  { id: "MX-CHOCHOLA", value: 7686 },
  { id: "MX-CHUMAYEL", value: 3987 },
  { id: "MX-CONKAL", value: 1855 },
  { id: "MX-CUNCUNUL", value: 6823 },
  { id: "MX-CUZAMA", value: 4091 },
  { id: "MX-DZAN", value: 4318 },
  { id: "MX-DZEMUL", value: 6209 },
  { id: "MX-DZIDZANTUN", value: 6804 },
  { id: "MX-DZILAMB", value: 5961 },
  { id: "MX-DZILAMG", value: 5049 },
  { id: "MX-DZITAS", value: 3951 },
  { id: "MX-DZONCAUICH", value: 3513 },
  { id: "MX-ESPITA", value: 4556 },
  { id: "MX-HALACHO", value: 5594 },
  { id: "MX-HOCABA", value: 5947 },
  { id: "MX-HOCTUN", value: 6028 },
  { id: "MX-HOMUN", value: 6156 },
  { id: "MX-HUHI", value: 4523 },
  { id: "MX-HUNUCMA", value: 6784 },
  { id: "MX-IXIL", value: 6805 },
  { id: "MX-IZAMAL", value: 6218 },
  { id: "MX-KANASIN", value: 7879 },
  { id: "MX-KANTUNIL", value: 4251 },
  { id: "MX-KAUA", value: 3432 },
  { id: "MX-KINCHIL", value: 5818 },
  { id: "MX-KOPOMA", value: 5676 },
  { id: "MX-MAMA", value: 3857 },
  { id: "MX-MANI", value: 4842 },
  { id: "MX-MAXCANU", value: 6784 },
  { id: "MX-MAYAPAN", value: 3746 },
  { id: "MX-MERIDA", value: 11879 },
  { id: "MX-MOCOCHA", value: 6376 },
  { id: "MX-MOTUL", value: 6775 },
  { id: "MX-MUNA", value: 5964 },
  { id: "MX-MUXUPIP", value: 5643 },
  { id: "MX-OPICHEN", value: 5444 },
  { id: "MX-OXKUTZ", value: 5296 },
  { id: "MX-PANABA", value: 5703 },
  { id: "MX-PETO", value: 5015 },
  { id: "MX-PROGRESO", value: 9170 },
  { id: "MX-QUINTANA", value: 2814 },
  { id: "MX-RIOLAG", value: 5750 },
  { id: "MX-SACALUM", value: 5146 },
  { id: "MX-SAMAHIL", value: 6228 },
  { id: "MX-SANF", value: 5839 },
  { id: "MX-SANAHCAT", value: 5668 },
  { id: "MX-SANTAE", value: 4330 },
  { id: "MX-SEYE", value: 7091 },
  { id: "MX-SINANCHE", value: 4767 },
  { id: "MX-SOTUTA", value: 5124 },
  { id: "MX-SUCILA", value: 5413 },
  { id: "MX-SUDZAL", value: 3759 },
  { id: "MX-SUMA", value: 5497 },
  { id: "MX-TAHDZIU", value: 2133 },
  { id: "MX-TAHMEK", value: 5161 },
  { id: "MX-TEABO", value: 5311 },
  { id: "MX-TECOH", value: 6787 },
  { id: "MX-TEKAL", value: 3946 },
  { id: "MX-TEKANTO", value: 5582 },
  { id: "MX-TEKAX", value: 5719 },
  { id: "MX-TEKIT", value: 5538 },
  { id: "MX-TEKOM", value: 3915 },
  { id: "MX-TELCHACP", value: 5803 },
  { id: "MX-TELPUER", value: 5556 },
  { id: "MX-TEMAX", value: 5146 },
  { id: "MX-TEMOZON", value: 3696 },
  { id: "MX-TEPAKAN", value: 4852 },
  { id: "MX-TETIZ", value: 5292 },
  { id: "MX-TEYA", value: 4691 },
  { id: "MX-TICUL", value: 7424 },
  { id: "MX-TIMUCUY", value: 7193 },
  { id: "MX-TINUM", value: 5270 },
  { id: "MX-TIXCACAL", value: 2698 },
  { id: "MX-TIXKOKOB", value: 8157 },
  { id: "MX-TIXMEHUAC", value: 2594 },
  { id: "MX-TIXPEHUAL", value: 6850 },
  { id: "MX-TIZIMIN", value: 5780 },
  { id: "MX-TUNKAS", value: 3404 },
  { id: "MX-TZUCACAB", value: 4469 },
  { id: "MX-UAYMA", value: 4107 },
  { id: "MX-UCU", value: 6750 },
  { id: "MX-UMAN", value: 7951 },
  { id: "MX-VALLADOLID", value: 6438 },
  { id: "MX-XOCCHEL", value: 6086 },
  { id: "MX-YAXCABA", value: 3798 },
  { id: "MX-YAXKUKUL", value: 6442 },
  { id: "MX-YOBAIN", value: 4990 }
];
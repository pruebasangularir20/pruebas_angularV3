import { Component, NgZone } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-amcharts2',
  templateUrl: './amcharts2.component.html',
  styleUrls: ['./amcharts2.component.css']
})
export class Amcharts2Component {
  private chart: am4charts.XYChart3D;

  constructor(private zone: NgZone) {}

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("chartdiv", am4charts.XYChart3D);

// Add data
chart.data = [{
    "country": "ARMENIA","2018": 22,"2019": 9
}, {
    "country": "BOGOTA","2018": 10,"2019": 10
}, {
    "country": "BUCARAMANGA",
    "2018": 4,
    "2019": 1
}, {
    "country": "CALI",
    "2018": 34,
    "2019": 32
}, {
    "country": "FLORENCIA",
    "2018": 8,
    "2019": 10
}, {
    "country": "IBAGUE",
    "2018": 8,
    "2019": 3
}, {
    "country": "MANIZALES",
    "2018": 8,
    "2019": 11
}, {
    "country": "MEDELLIN",
    "2018": 54,
    "2019": 48
}, {
  "country": "NEIVA",
  "2018": 7,
  "2019": 7
}, {
  "country": "PASTO",
  "2018": 4,
  "2019": 6
}, {
  "country": "PEREIRA",
  "2018": 10,
  "2019": 11
}, {
  "country": "POPAYAN",
  "2018": 11,
  "2019": 7
}, {
  "country": "VALLEDUPAR",
  "2018": 5,
  "2019": 8
}, {
  "country": "VILLAVICENCIO",
  "2018": 4,
  "2019": 3
}];

// Create axes
let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "country";
categoryAxis.renderer.grid.template.location = 30;
categoryAxis.renderer.minGridDistance = 30;

let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "Reportes por ciudad";
valueAxis.renderer.labels.template.adapter.add("text", function(text) {
  return text + "%";
});

// Create series
let series = chart.series.push(new am4charts.ColumnSeries3D());
series.dataFields.valueY = "2018";
series.dataFields.categoryX = "country";
series.name = "Año 2018";
series.clustered = false;
series.columns.template.tooltipText = "Reportes por ciudad {category} (Año 2018): [bold]{valueY}[/]";
series.columns.template.fillOpacity = 0.9;

let series2 = chart.series.push(new am4charts.ColumnSeries3D());
series2.dataFields.valueY = "2019";
series2.dataFields.categoryX = "country";
series2.name = "Año 2019";
series2.clustered = false;
series2.columns.template.tooltipText = "Reportes por ciudad {category} (Año 2019): [bold]{valueY}[/]";

      this.chart = chart;
    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}

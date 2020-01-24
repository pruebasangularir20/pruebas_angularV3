import { Component, NgZone } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-amcharts',
  templateUrl: './amcharts.component.html',
  styleUrls: ['./amcharts.component.css']
})
export class AmchartsComponent {
  private chart: am4charts.XYChart;

  constructor(private zone: NgZone) {}

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      
      /*am*/
      let data = {
        "ARMENIA" : { "Biologico" : 15,  "Controlado" : 3,  "Entorno" : 13,  "Individual" : 0 },
        "BOGOTA" : { "Biologico" : 4,  "Controlado" : 4,  "Entorno" : 9,  "Individual" : 3 },
        "BUCARAMANGA" : { "Biologico" : 2,  "Controlado" : 0,  "Entorno" : 3,  "Individual" : 0 },
        "CALI" : { "Biologico" : 41,  "Controlado" : 6,  "Entorno" : 4,  "Individual" : 15 },
        "FLORENCIA" : { "Biologico" : 8,  "Controlado" : 0,  "Entorno" : 10,  "Individual" : 0 },
        "IBAGUE" : { "Biologico" : 5,  "Controlado" : 0,  "Entorno" : 5,  "Individual" : 1 },
        "MANIZALES" : { "Biologico" : 6,  "Controlado" : 5,  "Entorno" : 6,  "Individual" : 2 },
        "MEDELLIN" : { "Biologico" : 37,  "Controlado" : 29,  "Entorno" : 29,  "Individual" : 7 },
        "NEIVA" : { "Biologico" : 9,  "Controlado" : 0,  "Entorno" : 4,  "Individual" : 1 },
        "PASTO" : { "Biologico" : 4,  "Controlado" : 0,  "Entorno" : 2,  "Individual" : 4 },
        "PEREIRA" : { "Biologico" : 8,  "Controlado" : 2,  "Entorno" : 9,  "Individual" : 2 },
        "POPAYAN" : { "Biologico" : 4,  "Controlado" : 0,  "Entorno" : 3,  "Individual" : 11 },
        "VALLEDUPAR" : { "Biologico" : 6,  "Controlado" : 0,  "Entorno" : 7,  "Individual" : 0 },
        "VILLAVICENCIO" : { "Biologico" : 4,  "Controlado" : 2,  "Entorno" : 0,  "Individual" : 1 },

    }
    
    function processData(data) {
        let treeData = [];
    
        let smallBrands = { name: "Other", children: [] };
    
        for (var brand in data) {
            let brandData = { name: brand, children: [] }
            let brandTotal = 0;
            for (var model in data[brand]) {
                brandTotal += data[brand][model];
            }
    
            for (var model in data[brand]) {
                // do not add very small
                if (data[brand][model] > 0) {
                    brandData.children.push({ name: model, count: data[brand][model] });
                }
            }
    
            // only bigger brands
            if (brandTotal > 2) {
                treeData.push(brandData);
            }
        }
    
        return treeData;
    }
    
    // create chart
    let chart = am4core.create("chartdiv", am4charts.TreeMap);
    chart.padding(0,0,0,0);
    chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
    
    // only one level visible initially
    chart.maxLevels = 4;
    // define data fields
    chart.dataFields.value = "count";
    chart.dataFields.name = "name";
    chart.dataFields.children = "children";
    chart.homeText = "Gráfico de Descripción del Riesgo por Sede";
    
    // enable navigation
    chart.navigationBar = new am4charts.NavigationBar();
    chart.zoomable = false;
    
    // level 0 series template
    let level0SeriesTemplate = chart.seriesTemplates.create("0");
    level0SeriesTemplate.strokeWidth = 2;
    
    // by default only current level series bullets are visible, but as we need brand bullets to be visible all the time, we modify it's hidden state
    level0SeriesTemplate.bulletsContainer.hiddenState.properties.opacity = 1;
    level0SeriesTemplate.bulletsContainer.hiddenState.properties.visible = true;
    // create hover state
    let columnTemplate = level0SeriesTemplate.columns.template;
    let hoverState = columnTemplate.states.create("hover");
    
    // darken
    hoverState.adapter.add("fill", function (fill, target) {
        if (fill instanceof am4core.Color) {
            return am4core.color(am4core.colors.brighten(fill.rgb, -0.002));
        }
        return fill;
    })
    
    // add logo
    let image = columnTemplate.createChild(am4core.Image);
    image.opacity = 0.01;
    image.align = "center";
    image.valign = "middle";
    image.width = am4core.percent(80);
    image.height = am4core.percent(80);
    
    // add adapter for href to load correct image
    image.adapter.add("href", function (href, target) {
        let dataItem = target.parent.dataItem;
        if (dataItem) {
            return ("none.png");
        }
    });
    
    // level1 series template
    let level1SeriesTemplate = chart.seriesTemplates.create("1");
    level1SeriesTemplate.columns.template.fillOpacity = 0;
    level1SeriesTemplate.columns.template.strokeOpacity = 0.4;
    
    let bullet1 = level1SeriesTemplate.bullets.push(new am4charts.LabelBullet());
    bullet1.locationX = 0.5;
    bullet1.locationY = 0.5;
    bullet1.label.text = "{name}";
    bullet1.label.fill = am4core.color("#ffffff");
    bullet1.label.fontSize = 14;
    bullet1.label.fillOpacity = 0.7;
    
    chart.data = processData(data);

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

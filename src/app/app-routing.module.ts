import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PowerbiComponent } from './powerbi/powerbi.component';
import { DatasqlComponent } from './datasql/datasql.component';
import { AmchartsComponent } from './amcharts/amcharts.component';
import { Amcharts2Component } from './amcharts2/amcharts2.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'powerbi',
    component: PowerbiComponent
  },
  {
    path: 'datasql',
    component: DatasqlComponent
  },
  {
    path: 'amcharts',
    component: AmchartsComponent
  },
  {
    path: 'amcharts2',
    component: Amcharts2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

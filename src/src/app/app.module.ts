import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PowerbiComponent } from './powerbi/powerbi.component';
import { DatasqlComponent } from './datasql/datasql.component';
import { AmchartsComponent } from './amcharts/amcharts.component';
import { Amcharts2Component } from './amcharts2/amcharts2.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PowerbiComponent,
    DatasqlComponent,
    AmchartsComponent,
    Amcharts2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

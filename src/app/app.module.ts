import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShortDetailComponent } from './short-detail/short-detail.component';
import { TableComponent } from './widget/table/table.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { LeftBarComponent } from './left-bar/left-bar.component';
import { ContentComponent } from './content/content.component';
import { PieChartComponent } from './widget/pie-chart/pie-chart.component';
import { SumBoxComponent } from './widget/sum-box/sum-box.component';

@NgModule({
  declarations: [
    AppComponent,
    ShortDetailComponent,
    TableComponent,
    NavigationComponent,
    FooterComponent,
    LeftBarComponent,
    ContentComponent,
    PieChartComponent,
    SumBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

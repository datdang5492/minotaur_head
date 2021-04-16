import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TableComponent} from './widget/table/table.component';
import {NavigationComponent} from './navigation/navigation.component';
import {FooterComponent} from './footer/footer.component';
import {LeftBarComponent} from './left-bar/left-bar.component';
import {ContentComponent} from './content/content.component';
import {PieChartComponent} from './widget/pie-chart/pie-chart.component';
import {SumBoxComponent} from './widget/sum-box/sum-box.component';
import {SecurityPageComponent} from './security-page/security-page.component';
import {InvestorPageComponent} from './investor-page/investor-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {DashboardService} from './services/dashboard.service';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'security', component: SecurityPageComponent},
  {path: 'investor', component: InvestorPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SecurityPageComponent,
    TableComponent,
    NavigationComponent,
    FooterComponent,
    LeftBarComponent,
    ContentComponent,
    PieChartComponent,
    SumBoxComponent,
    InvestorPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    DashboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

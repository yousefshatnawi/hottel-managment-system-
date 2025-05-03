import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';

import { NgChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart/chart.component';
import {  MatDialogModule } from '@angular/material/dialog';
import { HeaderDashComponent } from './header-dash/header-dash.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient) {
return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    ChartComponent,
    HeaderDashComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgChartsModule,
    MatDialogModule,
     HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }), 
  ],
  exports: [
    HeaderComponent,  
    FooterComponent,
    MainLayoutComponent,
    ChartComponent,
    HeaderDashComponent,
    
  ],
})
export class SharedModule { }

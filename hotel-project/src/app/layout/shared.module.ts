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
    MatDialogModule
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

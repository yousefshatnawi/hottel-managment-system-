import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeModule } from './employee/employee.module';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';
// import { HeaderComponent } from './layout/header/header.component';
// import { FooterComponent } from './layout/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminModule } from './admin/admin.module';
import { CustomerModule } from './customer/customer.module';
import { SharedModule } from './layout/shared.module';
import { PolicyComponent } from './policy/policy.component';
// import { TermsPopupComponent } from './components/terms-popup/terms-popup.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PolicyComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeModule,
    AuthModule,
    AdminModule   ,
    CustomerModule,
    SharedModule,
    
  ],
  exports: [
    AboutComponent,
    ContactComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

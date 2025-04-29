import { Component, OnInit } from '@angular/core';
import { PolicyComponent } from '../../policy/policy.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent  {

  constructor(
    private dialog: MatDialog
  ) {}


  openModal() {
    this.dialog.open(PolicyComponent, {
          width: '1000px',  // عرض المودال
          height: '650px'  // ارتفاع المودال
        });
  }
  
subscribeNewsletter() {
throw new Error('Method not implemented.');
}
newsletterEmail: any;

}

import { Component, OnInit } from '@angular/core';
// import { TermsPopupComponent } from '../components/terms-popup/terms-popup.component';
import { MatDialog } from '@angular/material/dialog';
// import { MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-policy',
  // template: `
  //   <h2>Terms & Conditions</h2>
  //   <p>Please read and accept the terms and conditions to continue.</p>
  //   <button mat-button mat-dialog-close>Close</button>`,
  standalone: false,
  templateUrl: './policy.component.html',
  styleUrl: './policy.component.scss'
})
export class PolicyComponent implements OnInit{

  // constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
  }

  
}

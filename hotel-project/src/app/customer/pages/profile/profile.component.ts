import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{
  customer = {
    id: 1,
    name: 'Yousef',
    phone: '0790000000',
    email: 'yousef@example.com',
    address: 'Amman, Jordan'
  };

  isEditing = false;

  constructor() {}

  ngOnInit(): void {}

  enableEdit() {
    this.isEditing = true;
  }

  saveProfile() {
    // هون لاحقًا منربطها مع السيرفس
    console.log('Saved', this.customer);
    this.isEditing = false;
  }
}


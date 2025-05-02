import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../../../models/customer.model';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{
  isEditing = false;
loading = false;
loadingForGet = false;
success: string = '';
errors: string[] = [];

showRequests = false;
  showReservations = false;

customer: Customer | undefined;
customerData: any = {};

previewUrl: string | ArrayBuffer | null = null;
  profileImage: any;

constructor(
  private route: ActivatedRoute,
  private customerService: CustomerService
) {}

ngOnInit(): void {
  this.loadingForGet = true;

  const storedImage = localStorage.getItem('profileImage');
  if (storedImage) {
    this.profileImage = storedImage;
  }

  const id = +this.route.snapshot.paramMap.get('id')!;
  if (id) {
    setTimeout(() => {
      this.customer = this.customerService.getcustomerById(id);
      if (this.customer) {
        this.customerData = { ...this.customer };
      }
      this.loadingForGet = false;
    }, 1500);
  } else  {
    this.loadingForGet = false;
  
    const newCustomer = JSON.parse(localStorage.getItem('newCustomer') || '{}');
    let customer ={};
    try{
       customer = JSON.parse(localStorage.getItem('customer') || '{}') ?? {};
       this.customerData = customer;

    }
    catch (e){

    }
  
    if (Object.keys(newCustomer).length > 0) {
      console.log('newCustomer is', newCustomer);
      this.customerData = newCustomer;
    } else if (true){
      console.log('customer is');
    }
    //  else if (Object.keys(customer).length > 0) {
    //   console.log('customer is', customer);
    //   this.customerData = customer;
    // }
  }
  
}

toggleRequests() {
  this.showRequests = !this.showRequests;
}

toggleReservations() {
  this.showReservations = !this.showReservations;

}
enableEdit() {
  this.isEditing = true;
}

saveProfile() {
  this.errors = [];
  this.success = '';
  this.loading = true;

  const user = JSON.parse(localStorage.getItem('user') || '{}');

  // لو المستخدم ناوي يغيّر الباسورد
  const isChangingPassword = this.customerData.newPassword || this.customerData.confirmPassword;

  if (isChangingPassword) {
    if (this.customerData.newPassword !== this.customerData.confirmPassword) {
      this.errors.push('Passwords do not match.');
      this.loading = false;
      return;
    }

    if (!this.customerData.oldPassword) {
      this.errors.push('Please enter your current password.');
      this.loading = false;
      return;
    }

    if (this.customerData.oldPassword !== user?.password) {
      this.errors.push('Current password is incorrect.');
      this.loading = false;
      return;
    }

    // ✅ كل شيء تمام: نحط الباسورد الجديدة
    this.customerData.password = this.customerData.newPassword;
  }

  // ❌ حذف الحقول المؤقتة (ما بنرسلهم للسيرفر)
  delete this.customerData.oldPassword;
  delete this.customerData.newPassword;
  delete this.customerData.confirmPassword;

  this.customerService.updateCustomer(this.customerData)
    .then((updated: Customer) => {
      this.customer = updated;
      this.success = 'Customer updated successfully!';
      this.isEditing = false;
      this.loading = false;

      // مسح الفيلدات من الفورم (لو ضلي منهم اشي)
      this.customerData.oldPassword = '';
      this.customerData.newPassword = '';
      this.customerData.confirmPassword = '';
    })
    .catch((err: any) => {
      this.errors.push(err.message || 'Update failed.');
      this.loading = false;
    });
}


onFileSelected(event: any): void {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      const base64Image = reader.result as string;
      localStorage.setItem('profileImage', base64Image);
      this.profileImage = base64Image; // لتحديث العرض مباشرة
        };
    reader.readAsDataURL(file);
  }
}
}


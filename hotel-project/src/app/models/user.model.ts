export interface User {
    email: string;
    password: string;
    userType: 'admin' | 'employee' | 'customer';
  }
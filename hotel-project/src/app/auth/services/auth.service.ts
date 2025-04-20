import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { users } from '../../shared/dataBase/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
  private User: User[] =users;
  loginUser(email: string, password: string): Promise<User> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = this.User.find((u: User) => u.email === email && u.password === password);
        if (user) {
          resolve(user);
        } else {
          reject('Incorrect email address or password');
        }
      }, 1500);
    });
  }
  registerUser(newUser: User): Promise<void> {
    return new Promise((resolve, reject) => {
      const user: User[] = users;
  
      const userExists = user.some(user => user.email === newUser.email);
      if (userExists) {
        reject('Email already exists');
        return;
      }
  
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('user', JSON.stringify(newUser)); // لحفظ المستخدم الحالي كـ جلسة
  
      resolve();
    });
  }
  
}


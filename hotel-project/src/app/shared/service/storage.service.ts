import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getItem(key: string): any {
    return localStorage.getItem(key);
  }

  addItem(key: string, value: string): void {
    localStorage.setItem(key, value)
  }
}

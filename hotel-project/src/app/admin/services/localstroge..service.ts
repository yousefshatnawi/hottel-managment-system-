import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

 
  getItem(key: string): any {
    const data = localStorage.getItem(key);
 
  }

  addItem(key: string, value: string): void {
    localStorage.setItem(key, value)
}


}
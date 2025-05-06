import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private languageSource: BehaviorSubject<string>;
  currentLanguage;

  constructor() {
    const savedLang = localStorage.getItem('language') || 'en';
    this.languageSource = new BehaviorSubject<string>(savedLang);
    this.currentLanguage = this.languageSource.asObservable();
  }

  changeLanguage(language: string) {
    this.languageSource.next(language);
    localStorage.setItem('language', language); 
  }
}

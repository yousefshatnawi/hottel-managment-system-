import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
 

    constructor(
      private languageService: LanguageService,
      private translate: TranslateService
    ) {}
  
    ngOnInit() {
      const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
      
      this.languageService.changeLanguage(savedLanguage);
      this.translate.use(savedLanguage);
  
      this.setDirection(savedLanguage);
  
      this.languageService.currentLanguage.subscribe(lang => {
        this.translate.use(lang);
        this.setDirection(lang);
      });
    }
  
    setDirection(language: string) {
      if (language === 'ar') {
        document.documentElement.setAttribute('dir', 'ltr');
      } else {
        document.documentElement.setAttribute('dir', 'ltr');
      }
    }
  }
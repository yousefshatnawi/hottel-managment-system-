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
      // نحمل اللغة المحفوظة أو نستخدم الإنجليزية كافتراضي
      const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
      
      // نضبط اللغة في السيرفيس و ngx-translate
      this.languageService.changeLanguage(savedLanguage);
      this.translate.use(savedLanguage);
  
      // نضبط اتجاه الصفحة حسب اللغة
      this.setDirection(savedLanguage);
  
      // في حال تغيرت اللغة لاحقًا، نحدث ngx-translate تلقائيًا
      this.languageService.currentLanguage.subscribe(lang => {
        this.translate.use(lang);
        this.setDirection(lang);
      });
    }
  
    // دالة لتحديد اتجاه الصفحة
    setDirection(language: string) {
      if (language === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
      } else {
        document.documentElement.setAttribute('dir', 'ltr');
      }
    }
  }
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../auth/components/login/login.component';

import { MyRequestsComponent } from '../../customer/pages/my-requests/my-requests.component';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  showMyRequest: boolean = false;

  menuOpen: boolean = false;
  languageMenuOpen: boolean = false;
isDarkTheme = false;
  isLoggedIn = false;
  profileLink = '/'; 
  selectedLanguage: string = 'en';
  selectedFlag: string = 'assets/img/flag.jpg';
  

  constructor(private dialog: MatDialog,private languageService: LanguageService,
    private translate: TranslateService) {}

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '400px',  
      backdropClass: 'custom-backdrop'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {

    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    this.selectedLanguage = savedLang;
   
    switch (savedLang) {
      case 'en':
        this.selectedFlag = 'assets/img/flag.jpg';
        break;
      case 'it':
        this.selectedFlag = 'assets/img/italy.png';
        break;
      case 'ar':
        this.selectedFlag = 'assets/img/qatar.png';
        break;
    }
   
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    this.showMyRequest = user !== null;
    if (user) {
      this.isLoggedIn = true;
      if (user.userType === 'customer') {
        this.profileLink = '/customer/profile';
      }
    } else {
      this.isLoggedIn = false;
    }
    
     const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-theme');}
  } 
  toggleMenu() {
  this.menuOpen = !this.menuOpen;
  if (!this.menuOpen) {
    this.languageMenuOpen = false; 
  }
}
toggleLanguageMenu() {
  this.languageMenuOpen = !this.languageMenuOpen;
}

toggleDarkTheme() {
  this.isDarkTheme = !this.isDarkTheme;
  sessionStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
  
  const body = document.body;
  body.classList.toggle('dark-theme');
}
 

  
  logout(): void {
    localStorage.clear();

    this.isLoggedIn = false;
  }
reqestService() {
    this.dialog.open(MyRequestsComponent, {
      width: '65vw', 
      maxWidth: '90vw',
      height: '400px', 
    });
  }
 
  changeLanguage(language: string) {
    this.languageService.changeLanguage(language);
    this.translate.use(language);
    localStorage.setItem('selectedLanguage', language); 
  
    if (language === 'ar') {
      document.documentElement.setAttribute('dir', 'ltr');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
    }
  
    switch (language) {
      case 'en':
        this.selectedFlag = 'assets/img/flag.jpg';
        break;
      case 'it':
        this.selectedFlag = 'assets/img/italy.png';
        break;
      case 'ar':
        this.selectedFlag = 'assets/img/qatar.png';
        break;
    }
  
    this.languageMenuOpen = false;
  }
  
}
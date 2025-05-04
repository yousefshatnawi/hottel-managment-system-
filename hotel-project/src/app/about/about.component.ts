import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements AfterViewInit ,OnInit {
 constructor(
    private languageService: LanguageService,
    private translate: TranslateService
  ) {}
  @ViewChild('hotelVideo') hotelVideo!: ElementRef<HTMLVideoElement>;
  ngOnInit(): void {
    this.languageService.currentLanguage.subscribe(language => {
      this.translate.use(language);
    });
  }
  ngAfterViewInit(): void {
   
    const elements = document.querySelectorAll('.set-bg');
    elements.forEach((el: any) => {
      const bg = el.getAttribute('data-setbg');
      el.style.backgroundImage = `url(${bg})`;
    });
    const videoElement = this.hotelVideo.nativeElement;

    // تغيير سرعة التشغيل
    videoElement.playbackRate =3; // أو 2 مثلاً حسب رغبتك

    // في حال احتجت تتأكد من التشغيل
    videoElement.play().catch(error => {
      console.error('Video failed to play:', error);
    });
  }
}

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('hotelVideo') hotelVideo!: ElementRef<HTMLVideoElement>;
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

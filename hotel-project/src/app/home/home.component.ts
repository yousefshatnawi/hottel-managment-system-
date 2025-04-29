import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { Room } from '../models/room.model';
import { Rooms } from '../shared/dataBase/room';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit {
room :Room []= Rooms
  Math = Math;
  loading = true;
  @ViewChild('hotelVideo') hotelVideo!: ElementRef<HTMLVideoElement>;

  heroImages = [
    'assets/img/hero/hero-1.jpg',
    'assets/img/hero/hero-2.jpg',
    'assets/img/hero/hero-3.jpg'
  ];
  currentHeroIndex = 0;

  testimonials = [
    {
      text: 'After a construction project took longer than expected... we absolutely love our vacation at casa serene Hotel.',
      author: 'yousef shatnawi',
      rating: 4.5,
      image: 'assets/img/room/avatar/avatar-1.jpg'
    },
    {
      text: 'Great experience, lovely view and friendly staff. Will visit again!',
      author: 'Reema Bshara',
      rating: 5,
      image: 'assets/img/room/avatar/avatar-2.jpg'
    },
    {
      text: 'After a construction project took longer than expected... we absolutely love our vacation at casa serene Hotel.',
      author: 'Duaa Mehdawi',
      rating: 4.5,
      image: 'assets/img/room/avatar/avatar-2.jpg'
    },
    {
      text: 'Great experience, lovely view and friendly staff. Will visit again!',
      author: 'Anagheem Alraba',
      rating: 5,
      image: 'assets/img/room/avatar/avatar-2.jpg'
    }
  ];
  currentTestimonialIndex = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.currentHeroIndex = (this.currentHeroIndex + 1) % this.heroImages.length;
    }, 3000); // Hero slider

    setInterval(() => {
      this.currentTestimonialIndex = (this.currentTestimonialIndex + 1) % this.testimonials.length;
    }, 4000); 
    setTimeout(() => {
      this.loading = false;
    }, 2000); // 2 ثوانٍ
  
  }

  ngAfterViewInit(): void {
    // إعداد الخلفيات
    const elements = document.querySelectorAll('.set-bg');
    elements.forEach((el: any) => {
      const bg = el.getAttribute('data-setbg');
      el.style.backgroundImage = `url(${bg})`;
    });

    // إعداد سلايدر Swiper
    new Swiper('.testimonial-slider', {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    const videoElement = this.hotelVideo.nativeElement;

    // تغيير سرعة التشغيل
    videoElement.playbackRate =3.5; // أو 2 مثلاً حسب رغبتك

    // في حال احتجت تتأكد من التشغيل
    videoElement.play().catch(error => {
      console.error('Video failed to play:', error);
    });
  }
}
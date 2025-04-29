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
  
    blogs = [
      {
        image: 'assets/img/blog/blog-1.jpg',
        tag: 'Travel Trip',
        title: 'Tremblant In Canada',
        date: '15th April, 2019',
      },
      {
        image: 'assets/img/blog/blog-2.jpg',
        tag: 'Camping',
        title: 'Choosing A Static Caravan',
        date: '15th April, 2019',
      },
      {
        image: 'assets/img/blog/blog-3.jpg',
        tag: 'Event',
        title: 'Copper Canyon',
        date: '21st April, 2019',
      },
      {
        image: 'assets/img/blog/blog-wide.jpg',
        tag: 'Event',
        title: 'Trip To Iqaluit In Nunavut A Canadian Arctic City',
        date: '08th April, 2019',
      },
      {
        image: 'assets/img/blog/blog-10.jpg',
        tag: 'Travel',
        title: 'Traveling To Barcelona',
        date: '12th April, 2019',
      },
    ];
  

  ngOnInit(): void {
    setInterval(() => {
      this.currentHeroIndex = (this.currentHeroIndex + 1) % this.heroImages.length;
    }, 3000); // Hero slider

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
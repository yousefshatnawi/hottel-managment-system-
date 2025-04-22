import { AfterViewInit, Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit {

  Math = Math;
  
  heroImages = [
    'assets/img/hero/hero-1.jpg',
    'assets/img/hero/hero-2.jpg',
    'assets/img/hero/hero-3.jpg'
  ];
  currentHeroIndex = 0;

  testimonials = [
    {
      text: 'After a construction project took longer than expected... we absolutely love our vacation at Sona Hotel.',
      author: 'yousef shatnawi',
      rating: 4.5,
      image: 'assets/img/yousef.png'
    },
    {
      text: 'Great experience, lovely view and friendly staff. Will visit again!',
      author: 'Reema Bshara',
      rating: 5,
      image: 'assets/img/reema2.png'
    },
    {
      text: 'After a construction project took longer than expected... we absolutely love our vacation at Sona Hotel.',
      author: 'Duaa Mehdawi',
      rating: 4.5,
      image: 'assets/img/duaa.png'
    },
    {
      text: 'Great experience, lovely view and friendly staff. Will visit again!',
      author: 'Anagheem Alraba',
      rating: 5,
      image: 'assets/img/anagheem.jpeg'
    }
  ];
  currentTestimonialIndex = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.currentHeroIndex = (this.currentHeroIndex + 1) % this.heroImages.length;
    }, 3000); // Hero slider

    setInterval(() => {
      this.currentTestimonialIndex = (this.currentTestimonialIndex + 1) % this.testimonials.length;
    }, 4000); // Testimonial slider
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
  }
}
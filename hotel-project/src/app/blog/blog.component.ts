import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface Comment {
  name: string;
  email: string;
  website: string;
  message: string;
  date: string;
}

@Component({
  selector: 'app-blog',
  standalone: false,
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']  // ملاحظة هنا: styleUrls بدلاً من styleUrl
})
export class BlogComponent {
  commentForm: FormGroup;
  comments: Comment[] = [];  // تحديد نوع المصفوفة

  constructor() {
    this.commentForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      website: new FormControl(''),
      message: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if (this.commentForm.valid) {
      const { name, email, website, message } = this.commentForm.value;
      const newComment: Comment = { // استخدام واجهة Comment هنا
        name,
        email,
        website,
        message,
        date: new Date().toLocaleDateString() // إضافة التاريخ
      };
      this.comments.push(newComment); // إضافة التعليق إلى المصفوفة
      this.commentForm.reset(); // إعادة تعيين النموذج بعد الإرسال
    }
  }
  blogs = [
    {
      image: 'assets/img/blog/blog-1.jpg',
      tag: 'Travel Trip',
      title: 'Tremblant In Canada',
      date: '15th April, 2019'
    },
    {
      image: 'assets/img/blog/blog-2.jpg',
      tag: 'Camping',
      title: 'Choosing A Static Caravan',
      date: '15th April, 2019'
    },
    {
      image: 'assets/img/blog/blog-3.jpg',
      tag: 'Event',
      title: 'Copper Canyon',
      date: '21th April, 2019'
    }
  ];
  
}

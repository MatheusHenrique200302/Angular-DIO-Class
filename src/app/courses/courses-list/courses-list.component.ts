import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/classes/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
})
export class CoursesListComponent implements OnInit {
  courses: Course[] = [];

  constructor() {}

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular Forms',
        imageUrl: '/assets/images/forms.png',
        price: 9.99,
        code: 'XPS-8796',
        duration: 120,
        rating: 5,
       releaseDate: 'Março,20 2020',
      },
      {
        id: 2,
        name: 'Angular Http Client',
        imageUrl: '/assets/images/http.png',
        price: 10.99,
        code: 'LKL-8796',
        duration: 120,
        rating: 4,
        releaseDate: 'Março,21 2020',
      },
    ];
  }
}

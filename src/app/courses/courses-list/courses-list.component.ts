import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/classes/course';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
})
export class CoursesListComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courselist: CoursesService) {}

  ngOnInit(): void {
    this.courses = this.courselist.retrieveall();
  }
}

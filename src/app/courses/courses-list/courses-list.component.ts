import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/classes/course';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
})
export class CoursesListComponent implements OnInit {

  
  
  filteredCourses: Course[] = [];
  _courses: Course[] = [];

  _filterby: string = "";

  constructor(private courselist: CoursesService) {}

  

  ngOnInit(): void {
    this._courses = this.courselist.retrieveall();
    this.filteredCourses = this._courses;
  }

  set filter(value: string){
    this._filterby=value;
    this.filteredCourses = this._courses.filter((course: Course) => course.name.toLowerCase().indexOf(this._filterby.toLocaleLowerCase()) > -1);
  }

  get filter(){
    return this._filterby;
  }

}

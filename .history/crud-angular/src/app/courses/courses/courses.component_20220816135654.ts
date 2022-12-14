import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [];
  displayedColumns = ['_id', 'name', 'category']

  coursesService: CoursesService;

  constructor() {
    this.coursesService = new CoursesService();
  }

  ngOnInit(): void {
  }

}


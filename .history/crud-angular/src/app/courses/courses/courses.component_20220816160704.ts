import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { catchError, Observable, of } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  displayedColumns = ['_id', 'name', 'category']

  constructor(private coursesService: CoursesService) {
    this.courses$ = this.coursesService.list().pipe(
      catchError(error => {
        console.log(error)
        return of([])
      })
    );
  }

  ngOnInit(): void {
  }

}


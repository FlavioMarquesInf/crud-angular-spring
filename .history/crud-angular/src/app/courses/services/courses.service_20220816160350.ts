import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/coursesx.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(), // Como o retorno não é um stream, compensa fazer assim
      delay(4000),
      tap(courses => console.log)
    );
  }
}


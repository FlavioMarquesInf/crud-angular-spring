import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  // private readonly API = '/assets/courses.json'; // antes de ter o back-end
  // private readonly API = 'http://localhost:8080/api/courses'; // antes de configurar o proxy
  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(), // Como o retorno não é um stream, compensa fazer assim
      delay(3000),
      tap(courses => console.log)
    );
  }

  save(record: Partial<Course>) {
    // console.log(record);
    return this.httpClient.post<Course>(this.API, record)
    .pipe(first());
  }
}


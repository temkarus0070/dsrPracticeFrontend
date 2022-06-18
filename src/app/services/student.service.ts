import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../entities/student";
import {BACKEND_URL} from "../app.module";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) {
  }

  public create(student: Student): Observable<HttpEvent<any>> {
    return this.httpClient.post(`${BACKEND_URL}/students`, student, {
      reportProgress: true, observe: "events"
    });
  }

  public update(student: Student): Observable<any> {
    return this.httpClient.patch(`${BACKEND_URL}/students`, student);
  }

  public getList(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${BACKEND_URL}/students`);
  }

  public get(id: number): Observable<Student> {
    return this.httpClient.get<Student>(`${BACKEND_URL}/students/${id}`);
  }
}

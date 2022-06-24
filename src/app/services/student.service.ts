import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../entities/student";
import {BACKEND_URL} from "../app.module";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) {
  }

  public create(student: Student): Observable<any> {
    return this.httpClient.post(`${BACKEND_URL}/students`, student);
  }

  public update(student: Student): Observable<any> {
    return this.httpClient.put(`${BACKEND_URL}/students/${student.id}`, student);
  }

  public getList(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${BACKEND_URL}/students`);
  }

  public get(id: number): Observable<Student> {
    return this.httpClient.get<Student>(`${BACKEND_URL}/students/${id}`);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete(`${BACKEND_URL}/students/${id}`);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Mentor} from "../../mentor/models/mentor";
import {BACKEND_URL} from "../../app.module";

@Injectable({
  providedIn: 'root'
})
export class MentorsRegisterService {

  constructor(private httpClient: HttpClient) {
  }

  public getNewRegistratedMentors(): Observable<Mentor[]> {
    return this.httpClient.get<Mentor[]>(`${BACKEND_URL}/mentors/new`);
  }

  public approveMentorRegister(id: number): Observable<any> {
    return this.httpClient.post(`${BACKEND_URL}/mentors/${id}/approve-register`, null);
  }
}

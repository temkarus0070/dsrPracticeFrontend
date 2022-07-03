import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {MentorStudentsStats} from "../models/MentorStudentsStats";
import {BACKEND_URL} from "../../app.module";
import {ProgLanguagesStats} from "../models/progLanguagesStats";
import {StudentRating} from "../models/studentRating";

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private httpClient: HttpClient) {
  }

  public getStatsByMentors(beginDate: Date, endDate: Date): Observable<MentorStudentsStats[]> {
    return this.httpClient.get<MentorStudentsStats[]>(`${BACKEND_URL}/mentors/practice-tickets/stats`, {params: this.getHttpParamsWithDate(beginDate, endDate)});
  }

  public getStatsByProgLanguages(beginDate: Date, endDate: Date): Observable<ProgLanguagesStats[]> {
    return this.httpClient.get<ProgLanguagesStats[]>(`${BACKEND_URL}/students/practice-tickets/stats/programming-languages`, {params: this.getHttpParamsWithDate(beginDate, endDate)});
  }

  public getStudentsRating(beginDate: Date, endDate: Date): Observable<StudentRating[]> {
    return this.httpClient.get<StudentRating[]>(`${BACKEND_URL}/students/practice-tickets/stats/students-rating`, {params: this.getHttpParamsWithDate(beginDate, endDate)});
  }

  private getHttpParamsWithDate(beginDate: Date, endDate: Date): HttpParams {
    beginDate = new Date(beginDate)
    endDate = new Date(endDate)
    var params = new HttpParams();
    params = params.set("beginOfPractice", beginDate.toLocaleDateString()).set("endOfPractice", endDate.toLocaleDateString());
    console.log(params);
    return params;
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Mentor} from "../models/mentor";
import {BACKEND_URL} from "../../app.module";
import {PracticeTicket} from "../../practice-ticket/models/practiceTicket";

@Injectable({
  providedIn: 'root'
})
export class MentorService {

  constructor(private  httpClient:HttpClient) { }

  public getAll():Observable<Mentor[]>{
    return this.httpClient.get<Mentor[]>(BACKEND_URL+"/mentors");
  }

  public get(id:number):Observable<Mentor>{
    return this.httpClient.get<Mentor>(`${BACKEND_URL}/mentors/${id}`);
  }

  public create(mentor:Mentor):Observable<any>{
    return this.httpClient.post(BACKEND_URL+"/mentors",mentor);
  }

  public update(mentor:Mentor):Observable<any>{
    return this.httpClient.put(`${BACKEND_URL}/mentors/${mentor.id}`,mentor);
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(`${BACKEND_URL}/mentors/${id}`);
  }

  public getMentorPracticeTickets(id:number):Observable<PracticeTicket[]>{
    return this.httpClient.get<PracticeTicket[]>(`${BACKEND_URL}/mentors/${id}/practice-tickets`);
  }
}

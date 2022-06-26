import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {PracticeTicket} from "../entity/practiceTicket";
import {BACKEND_URL} from "../../app.module";
import {PracticeTicketId} from "../entity/PracticeTicketId";

@Injectable({
  providedIn: 'root'
})
export class PracticeTicketService {

  constructor(private httpClient:HttpClient) { }

  public create(practiceTicket:PracticeTicket):Observable<any>{
    return this.httpClient.post(`${BACKEND_URL}/practice-tickets`,practiceTicket);
  }

  public getList():Observable<PracticeTicket[]>{
    return this.httpClient.get<PracticeTicket[]>(`${BACKEND_URL}/practice-tickets`);
  }

  public get(id:PracticeTicketId){
  var httpParams=PracticeTicketService.getHttpParamsFromId(id);
    return this.httpClient.get<PracticeTicket>(`${BACKEND_URL}/practice-tickets/practice-ticket`,{params:httpParams})
  }

  public update(practiceTicket:PracticeTicket):Observable<any>{
    return this.httpClient.patch(`${BACKEND_URL}/practice-tickets`,practiceTicket);
  }

  public delete(id:PracticeTicketId):Observable<any>{
    var httpParams=PracticeTicketService.getHttpParamsFromId(id);
    return this.httpClient.delete(`${BACKEND_URL}/practice-tickets`,{params:httpParams});
  }

  private static getHttpParamsFromId(id:PracticeTicketId):HttpParams{
    var httpParams=new HttpParams();
    httpParams=httpParams.set("mentorId",id.mentorId);
    httpParams=httpParams.set("studentId",id.studentId);
    httpParams=httpParams.set("programmingLanguageId",id.programmingLanguageId);
    httpParams=httpParams.set("beginOfPractice",id.beginOfPractice.toDateString());
    httpParams=httpParams.set("endOfPractice",id.endOfPractice.toDateString());
    return httpParams;
  }
}

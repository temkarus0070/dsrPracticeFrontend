import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProgrammingLanguage} from "../practice-ticket/models/programmingLanguage";
import {BACKEND_URL} from "../app.module";

@Injectable({
  providedIn: 'root'
})
export class ProgLanguagesService {

  constructor(private httpClient: HttpClient) {
  }

  public getList(): Observable<ProgrammingLanguage[]> {
    return this.httpClient.get<ProgrammingLanguage[]>(`${BACKEND_URL}/programming-languages`);
  }

  public create(progLanguage: ProgrammingLanguage): Observable<any> {
    return this.httpClient.post(`${BACKEND_URL}/programming-languages`, progLanguage);
  }
}

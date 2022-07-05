import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProgrammingLanguage} from "../models/programmingLanguage";
import {Observable} from "rxjs";
import {BACKEND_URL} from "../../app.module";

@Injectable({
  providedIn: 'root'
})
export class ProgLangService {

  constructor(private httpClient: HttpClient) {
  }

  public create(progLang: ProgrammingLanguage): Observable<any> {
    return this.httpClient.post(`${BACKEND_URL}/programming-languages`, progLang);
  }
}

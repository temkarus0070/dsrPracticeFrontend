import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../models/user";
import {BACKEND_URL} from "../../app.module";
import {Observable} from "rxjs";
import {Mentor} from "../../mentor/entity/mentor";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  public login(user: User): Observable<any> {
    return this.httpClient.post(`${BACKEND_URL}/login`, null, {
      headers: this.setUserInHeaders(user),
      observe: 'response'
    });
  }

  public getAuth(): Observable<User | null> {
    return this.httpClient.get<User>(BACKEND_URL + "/current-user");
  }

  public logout(): void {
    localStorage.removeItem("jwt");
  }

  public register(mentor: Mentor): Observable<any> {
    return this.httpClient.post(`${BACKEND_URL}/register`, mentor);
  }


  private setUserInHeaders(user: User): HttpHeaders {
    var headers = new HttpHeaders();
    headers = headers.set("username", user.username).set("password", user.password)
    return headers;
  }
}

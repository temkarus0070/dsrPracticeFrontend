import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../models/user";
import {BACKEND_URL} from "../../app.module";
import {Observable, tap} from "rxjs";
import {Mentor} from "../../mentor/models/mentor";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser!: User | null;

  constructor(private httpClient: HttpClient) {
  }

  public login(user: User): Observable<any> {
    return this.httpClient.post(`${BACKEND_URL}/login`, null, {
      headers: this.setUserInHeaders(user),
      observe: 'response'
    });
  }

  public getAuth(): Observable<User | null> {
    var httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set("check-auth", "true")
    return this.httpClient.get<User>(BACKEND_URL + "/current-user", {headers: httpHeaders})
      .pipe(tap((e) => {
        if (e) {
          this.currentUser = e;
        } else this.currentUser = null;
        return e;
      }, error => {
        this.currentUser = null;
      }));
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

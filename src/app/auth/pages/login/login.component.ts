import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: User = new User();

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  public isValid(): boolean {
    return this.user.username !== "" && this.user.password !== ""
  };

  login() {
    this.authService.login(this.user)
      .subscribe(e => {
        console.log(e);
        var jwt = e.headers.get("token")
        console.log(jwt);
        if (jwt != null) {
          localStorage.setItem("jwt", jwt);
          location.href = "/"
        }
      }, error => alert("неверный логин или пароль"))
  }
}

import {Component, OnInit} from '@angular/core';
import {Mentor} from "../../../mentor/entity/mentor";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public mentor: Mentor = new Mentor();

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  register() {
    this.authService.register(this.mentor).subscribe(e => {
      location.href = "/login"
    })
  }
}

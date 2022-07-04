import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth/services/auth.service";
import {User} from "../../auth/models/user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public hasAuth = false;
  public currentUser!: User;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.checkAuth();
  }

  checkAuth(): void {
    this.authService.getAuth().subscribe(e => {
        if (e) {
          this.currentUser = e;
          this.hasAuth = true;
        }
      },
      error => {
        this.hasAuth = false;
      });
  }

  hasAdminRole(): boolean {
    if (this.currentUser) {
      return this.currentUser.roles.filter(e => e === 'admin').length > 0;
    }
    return false;
  }

  logout() {
    this.authService.logout();
    this.hasAuth = false;
  }
}

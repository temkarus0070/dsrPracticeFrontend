import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable} from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class HasAdminRoleGuard implements CanActivate {
  constructor(private authService: AuthService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.currentUser != null && this.authService.currentUser.roles.filter(e => e === "admin").length > 0) {
      return true;
    } else return this.authService.getAuth().pipe(map((e) => {
      if (e && e.roles.filter(e => e === "admin").length > 0) {
        return true;
      }
      return false;
    }))
  }

}

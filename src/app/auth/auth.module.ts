import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {AuthInterceptor} from "./interceptors/auth.interceptor";
import {MentorsTicketsComponent} from './pages/mentors-tickets/mentors-tickets.component';


export const ROUTES: Routes = [{component: LoginComponent, path: "login"}, {
  component: RegisterComponent,
  path: "register"
},
  {component: MentorsTicketsComponent, path: "mentors-tickets"}]

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    MentorsTicketsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class AuthModule {
}

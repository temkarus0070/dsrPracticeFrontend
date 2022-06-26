import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {LoadingInterceptor} from "./interceptors/loading.interceptor";
import {ErrorsInterceptor} from "./interceptors/errors.interceptor";
import {HeaderComponent} from "./student/pages/header/header.component";
import {HomePageComponent} from "./student/pages/home-page/home-page.component";
import {MentorModule} from "./mentor/mentor.module";
import {StudentModule} from "./student/student.module";

export const BACKEND_URL = "http://localhost:8080"
export const ROUTES: Routes = [{component: HomePageComponent, path: ""}]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MentorModule,
    StudentModule
  ],
  providers: [HttpClient,
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorsInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

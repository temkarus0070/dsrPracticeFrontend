import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {RouterModule, Routes} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {CreateStudentComponent} from './components/student/create/create-student.component';
import {FormsModule} from "@angular/forms";
import {HomePageComponent} from './components/home-page/home-page.component';
import {UpdateStudentComponent} from './components/student/update-student/update-student.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {ListStudentsComponent} from './components/student/list-students/list-students.component';
import {LoadingInterceptor} from "./interceptors/loading.interceptor";
import {ErrorsInterceptor} from "./interceptors/errors.interceptor";

export const BACKEND_URL = "http://localhost:8080"
export const ROUTES: Routes = [{
  component: CreateStudentComponent,
  path: "students/create"
}, {component: ListStudentsComponent, path: "students/list"},
  {component: UpdateStudentComponent, path: "students/edit"}, {component: HomePageComponent, path: ""}]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateStudentComponent,
    HomePageComponent,
    UpdateStudentComponent,
    ListStudentsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  providers: [HttpClient,
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorsInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

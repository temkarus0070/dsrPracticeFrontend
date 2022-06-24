import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {CreateStudentComponent} from './pages/student/create/create-student.component';
import {FormsModule} from "@angular/forms";
import {UpdateStudentComponent} from './pages/student/update-student/update-student.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {ListStudentsComponent} from './pages/student/list-students/list-students.component';
import {LoadingInterceptor} from "./interceptors/loading.interceptor";
import {ErrorsInterceptor} from "./interceptors/errors.interceptor";
import {StudentComponent} from './components/student/student.component';
import {StudentInputFormComponent} from './components/student-input-form/student-input-form.component';
import {HeaderComponent} from "./pages/header/header.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";

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
    ListStudentsComponent,
    StudentComponent,
    StudentInputFormComponent,
    HeaderComponent
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

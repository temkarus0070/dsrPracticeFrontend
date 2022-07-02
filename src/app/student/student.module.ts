import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {CreateStudentComponent} from "./pages/student/create/create-student.component";
import {ListStudentsComponent} from "./pages/student/list-students/list-students.component";
import {UpdateStudentComponent} from "./pages/student/update-student/update-student.component";
import {StudentInputFormComponent} from "./components/student-input-form/student-input-form.component";
import {StudentComponent} from "./components/student/student.component";


export const ROUTES: Routes = [{
  component: CreateStudentComponent,
  path: "students/create"
}, {component: ListStudentsComponent, path: "students"},
  {component: UpdateStudentComponent, path: "students/edit"},
  {component: StudentComponent, path: "students/:id"}]

@NgModule({
  declarations: [
    CreateStudentComponent,
    ListStudentsComponent,
    UpdateStudentComponent,
    StudentInputFormComponent,
    StudentComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    FormsModule
  ]
})
export class StudentModule { }

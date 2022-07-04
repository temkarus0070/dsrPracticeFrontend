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
import {HasAdminRoleGuard} from "../auth/guards/has-admin-role.guard";


export const ROUTES: Routes = [{
  component: CreateStudentComponent,
  path: "students/create", canActivate: [HasAdminRoleGuard]
}, {component: ListStudentsComponent, path: "students", canActivate: [HasAdminRoleGuard]},
  {component: UpdateStudentComponent, path: "students/edit", canActivate: [HasAdminRoleGuard]},
  {component: StudentComponent, path: "students/:id", canActivate: [HasAdminRoleGuard]}]

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
  ],
  providers: [
    HasAdminRoleGuard]
})
export class StudentModule { }

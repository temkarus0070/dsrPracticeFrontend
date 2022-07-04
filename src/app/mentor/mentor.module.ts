import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './pages/list/list.component';
import {MentorComponent} from './components/mentor/mentor.component';
import {HttpClientModule} from "@angular/common/http";
import {MentorInputFormComponent} from './components/mentor-input-form/mentor-input-form.component';
import {CreateComponent} from './pages/create/create.component';
import {UpdateComponent} from './pages/update/update.component';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {HasAdminRoleGuard} from "../auth/guards/has-admin-role.guard";

export const ROUTES: Routes = [{
  component: CreateComponent,
  path: "mentors/create", canActivate: [HasAdminRoleGuard]
}, {component: ListComponent, path: "mentors", canActivate: [HasAdminRoleGuard]},
  {component: UpdateComponent, path: "mentors/edit", canActivate: [HasAdminRoleGuard]},
  {component: MentorComponent, path: 'mentors/:id', canActivate: [HasAdminRoleGuard]}]

@NgModule({
  declarations: [
    ListComponent,
    MentorComponent,
    MentorInputFormComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    HasAdminRoleGuard
  ]
})
export class MentorModule {
}

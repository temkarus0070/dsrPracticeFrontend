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

export const ROUTES: Routes = [{
  component: CreateComponent,
  path: "mentors/create"
}, {component: ListComponent, path: "mentors"},
  {component: UpdateComponent, path: "mentors/edit"},
  {component: MentorComponent, path: 'mentors/:id'}]

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
  ]
})
export class MentorModule {
}

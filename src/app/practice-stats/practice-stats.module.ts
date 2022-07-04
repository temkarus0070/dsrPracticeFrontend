import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {StatsByMentorsComponent} from "./pages/stats-by-mentors/stats-by-mentors.component";
import {StatsByProgLanguagesComponent} from "./pages/stats-by-prog-languages/stats-by-prog-languages.component";
import {StatsByStudentsComponent} from "./pages/stats-by-students/stats-by-students.component";
import {StatsComponent} from "./pages/stats/stats.component";
import {HasAdminRoleGuard} from "../auth/guards/has-admin-role.guard";


export const ROUTES: Routes = [{
  component: StatsByMentorsComponent,
  path: "stats/mentors",
  canActivate: [HasAdminRoleGuard]
},
  {
    component: StatsByProgLanguagesComponent,
    path: "stats/students/programming-languages",
    canActivate: [HasAdminRoleGuard]
  },
  {component: StatsByStudentsComponent, path: "stats/students", canActivate: [HasAdminRoleGuard]},
  {component: StatsComponent, path: "stats", canActivate: [HasAdminRoleGuard]}]

@NgModule({
  declarations: [],
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
export class PracticeStatsModule {
}

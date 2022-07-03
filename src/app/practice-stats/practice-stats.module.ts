import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {StatsByMentorsComponent} from "./pages/stats-by-mentors/stats-by-mentors.component";
import {StatsByProgLanguagesComponent} from "./pages/stats-by-prog-languages/stats-by-prog-languages.component";
import {StatsByStudentsComponent} from "./pages/stats-by-students/stats-by-students.component";
import {StatsComponent} from "./pages/stats/stats.component";


export const ROUTES: Routes = [{component: StatsByMentorsComponent, path: "stats/mentors"},
  {component: StatsByProgLanguagesComponent, path: "stats/students/programming-languages"},
  {component: StatsByStudentsComponent, path: "stats/students"},
  {component: StatsComponent, path: "stats"}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ]
})
export class PracticeStatsModule {
}

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
import {HeaderComponent} from "./pages/header/header.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {MentorModule} from "./mentor/mentor.module";
import {StudentModule} from "./student/student.module";
import {PracticeTicketModule} from "./practice-ticket/practice-ticket.module";
import {StatsComponent} from './practice-stats/pages/stats/stats.component';
import {StatsByMentorsComponent} from './practice-stats/pages/stats-by-mentors/stats-by-mentors.component';
import {
  StatsByProgLanguagesComponent
} from './practice-stats/pages/stats-by-prog-languages/stats-by-prog-languages.component';
import {StatsByStudentsComponent} from './practice-stats/pages/stats-by-students/stats-by-students.component';
import {PracticeStatsModule} from "./practice-stats/practice-stats.module";
import {MatListModule} from "@angular/material/list";
import {AuthModule} from "./auth/auth.module";

export const BACKEND_URL = "http://localhost:8080"
export const ROUTES: Routes = [{component: HomePageComponent, path: ""}]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    StatsComponent,
    StatsByMentorsComponent,
    StatsByProgLanguagesComponent,
    StatsByStudentsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MentorModule,
    StudentModule,
    PracticeTicketModule,
    PracticeStatsModule,
    MatListModule,
    AuthModule
  ],
  providers: [HttpClient,
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorsInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

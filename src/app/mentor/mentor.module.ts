import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './pages/list/list.component';
import {MentorComponent} from './components/mentor/mentor.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    ListComponent,
    MentorComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class MentorModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PracticeTicketComponent} from './components/practice-ticket/practice-ticket.component';
import {
  PracticeTicketInputFormComponent
} from './components/practice-ticket-input-form/practice-ticket-input-form.component';
import {ListComponent} from './pages/list/list.component';
import {CreateComponent} from './pages/create/create.component';
import {UpdateComponent} from './pages/update/update.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";


export const ROUTES:Routes=[{component:ListComponent,path:"practice-tickets"},{component:UpdateComponent,path:"practice-tickets/edit"},
  {component:CreateComponent,path:"practice-tickets/create"}]

@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    UpdateComponent,
    PracticeTicketComponent,
    PracticeTicketInputFormComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ]
})
export class PracticeTicketModule { }

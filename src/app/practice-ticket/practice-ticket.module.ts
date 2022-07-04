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
import {UpdateReviewsComponent} from "./components/update-reviews/update-reviews.component";
import {HasAdminRoleGuard} from "../auth/guards/has-admin-role.guard";
import {HasAuthGuard} from "../auth/guards/has-auth.guard";
import {CreateProgLanguageComponent} from "./pages/create-prog-language/create-prog-language.component";


export const ROUTES: Routes = [{
  component: ListComponent,
  path: "practice-tickets",
  canActivate: [HasAuthGuard]
}, {component: UpdateComponent, path: "practice-tickets/edit", canActivate: [HasAuthGuard]},
  {component: CreateComponent, path: "practice-tickets/create", canActivate: [HasAdminRoleGuard]},
  {component: CreateProgLanguageComponent, path: "programming-languages/create", canActivate: [HasAdminRoleGuard]}]

@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    UpdateComponent,
    PracticeTicketComponent,
    PracticeTicketInputFormComponent,
    UpdateReviewsComponent,
    CreateProgLanguageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [
    HasAdminRoleGuard,
    HasAuthGuard
  ]
})
export class PracticeTicketModule { }

import {Component} from '@angular/core';
import {LoadingProgressService} from "./services/loading-progress.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dsrPracticeFrontend';
  public isLoading = false;

  constructor(private loadingService: LoadingProgressService) {
    this.loadingService.isLoadingObservable.subscribe(val => {
      this.isLoading = val;
    })
  }
}

import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingProgressService {

  private isLoadingSubject: Subject<boolean> = new Subject();
  public isLoadingObservable = this.isLoadingSubject;

  constructor() {
  }

  public isLoading() {
    this.isLoadingSubject.next(true);
  }

  public isLoaded() {
    this.isLoadingSubject.next(false);
  }
}

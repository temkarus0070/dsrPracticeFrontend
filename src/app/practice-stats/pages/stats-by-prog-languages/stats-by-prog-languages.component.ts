import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {StatsService} from "../../services/stats.service";
import {ProgLanguagesStats} from "../../models/progLanguagesStats";

@Component({
  selector: 'app-stats-by-prog-languages',
  templateUrl: './stats-by-prog-languages.component.html',
  styleUrls: ['./stats-by-prog-languages.component.css']
})
export class StatsByProgLanguagesComponent implements OnInit {
  public progLanguagesStats!: Observable<ProgLanguagesStats[]>
  public beginDate: Date = new Date();
  public endDate: Date = new Date();

  constructor(private statsService: StatsService) {
  }

  ngOnInit(): void {
  }

  getStats() {
    this.progLanguagesStats = this.statsService.getStatsByProgLanguages(this.beginDate, this.endDate);
  }
}

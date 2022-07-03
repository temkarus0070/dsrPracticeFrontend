import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {StatsService} from "../../services/stats.service";
import {MentorStudentsStats} from "../../models/MentorStudentsStats";

@Component({
  selector: 'app-stats-by-mentors',
  templateUrl: './stats-by-mentors.component.html',
  styleUrls: ['./stats-by-mentors.component.css']
})
export class StatsByMentorsComponent implements OnInit {
  public mentorsStats!: Observable<MentorStudentsStats[]>
  public beginDate: Date = new Date();
  public endDate: Date = new Date();

  constructor(private statsService: StatsService) {
  }

  ngOnInit(): void {
  }

  getStats() {
    this.mentorsStats = this.statsService.getStatsByMentors(this.beginDate, this.endDate);
  }
}

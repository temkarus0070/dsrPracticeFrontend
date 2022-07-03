import {Component, OnInit} from '@angular/core';
import {StatsService} from "../../services/stats.service";
import {Observable} from "rxjs";
import {StudentRating} from "../../models/studentRating";

@Component({
  selector: 'app-stats-by-students',
  templateUrl: './stats-by-students.component.html',
  styleUrls: ['./stats-by-students.component.css']
})
export class StatsByStudentsComponent implements OnInit {
  public studentsStats!: Observable<StudentRating[]>
  public beginDate: Date = new Date();
  public endDate: Date = new Date();

  constructor(private statsService: StatsService) {
  }

  ngOnInit(): void {
  }

  getStats() {
    this.studentsStats = this.statsService.getStudentsRating(this.beginDate, this.endDate);
  }
}

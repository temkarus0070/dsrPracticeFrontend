import {Component, Input, OnInit} from '@angular/core';
import {MentorReview} from "../../../student/entities/MentorReview";
import {PracticeTicket} from "../../entity/practiceTicket";

@Component({
  selector: 'app-update-reviews',
  templateUrl: './update-reviews.component.html',
  styleUrls: ['./update-reviews.component.css']
})
export class UpdateReviewsComponent implements OnInit {
  @Input() public practiceTicket = new PracticeTicket();

  constructor() {
  }

  ngOnInit(): void {
  }

  addNewWeeklyReview() {
    this.practiceTicket.weeklyMentorReviews.push(new MentorReview());
  }
}

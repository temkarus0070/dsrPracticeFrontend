import {Component, Input, OnInit} from '@angular/core';
import {MentorReview} from "../../../student/entities/MentorReview";
import {PracticeTicket} from "../../entity/practiceTicket";

@Component({
  selector: 'app-update-reviews',
  templateUrl: './update-reviews.component.html',
  styleUrls: ['./update-reviews.component.css']
})
export class UpdateReviewsComponent implements OnInit {
  @Input() public practiceTicket!: PracticeTicket;

  private endOfReviews!: Date;
  private maxEndOfWeeklyReview!: Date;

  constructor() {

  }

  ngOnInit(): void {

  }


  initMaxWeeklyReviewDate() {
    this.maxEndOfWeeklyReview = new Date(this.practiceTicket.id.beginOfPractice);
    var date = new Date(this.practiceTicket.id.beginOfPractice);
    var endPractice = new Date(this.practiceTicket.id.endOfPractice)
    console.log(date < this.practiceTicket.id.endOfPractice);
    while (date < endPractice) {
      date = new Date(date.getTime() + (1000 * 60 * 60 * 24 * 7))
      console.log(date)
    }
    this.endOfReviews = date;
  }

  addNewWeeklyReview() {
    if (!this.endOfReviews) {
      this.initMaxWeeklyReviewDate();
    }
    var endPractice = new Date(this.practiceTicket.id.endOfPractice)
    var newMaxEndOfReviews = new Date(this.maxEndOfWeeklyReview.getTime());
    newMaxEndOfReviews.setDate(newMaxEndOfReviews.getDate() + 7)
    if (newMaxEndOfReviews <= endPractice) {
      var mentorReview = new MentorReview();
      var practiceTicket1 = new PracticeTicket();
      practiceTicket1.id = this.practiceTicket.id;
      mentorReview.practiceTicket = practiceTicket1;
      this.practiceTicket.weeklyMentorReviews.push(mentorReview);
      this.maxEndOfWeeklyReview = newMaxEndOfReviews;
    }
  }
}

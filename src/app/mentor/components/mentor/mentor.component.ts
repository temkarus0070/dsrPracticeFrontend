import {Component, Input, OnInit} from '@angular/core';
import {Mentor} from "../../entity/mentor";
import {MentorService} from "../../services/mentor.service";

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})
export class MentorComponent implements OnInit {
  @Input() public mentor: Mentor = new Mentor();
  public isDelete = false;

  constructor(private mentorService: MentorService) {
  }

  ngOnInit(): void {
  }

  delete() {
    this.mentorService.getMentorPracticeTickets(this.mentor.id).subscribe(tickets => {
      if (tickets.length > 0) {
        var b = confirm('У данного ментора есть назначенные студенты по практике, при удалении ментора все прохождения практики и его оценки для студентов будут удалены, продолжить?');
        if (!b) {
          return;
        }
        this.mentorService.delete(this.mentor.id).subscribe(e => {
          this.isDelete = true;
        });
      }
    })

  }
}

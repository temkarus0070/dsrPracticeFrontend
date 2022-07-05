import {Component, OnInit} from '@angular/core';
import {MentorsRegisterService} from "../../services/mentors-register.service";
import {Mentor} from "../../../mentor/models/mentor";
import {Observable} from "rxjs";

@Component({
  selector: 'app-mentors-tickets',
  templateUrl: './mentors-tickets.component.html',
  styleUrls: ['./mentors-tickets.component.css']
})
export class MentorsTicketsComponent implements OnInit {

  public registratedMentors!: Observable<Mentor[]>;
  private alreadyRegistratedMentorsId = new Set();

  constructor(private mentorsRegisterService: MentorsRegisterService) {
    this.registratedMentors = this.mentorsRegisterService.getNewRegistratedMentors();
  }

  ngOnInit(): void {
  }

  approveRegister(id: number) {
    this.mentorsRegisterService.approveMentorRegister(id)
      .subscribe(e => {
        this.alreadyRegistratedMentorsId = this.alreadyRegistratedMentorsId.add(id);
      })
  }

  isRegistrated(id: number): boolean {
    return this.alreadyRegistratedMentorsId.has(id);
  }
}

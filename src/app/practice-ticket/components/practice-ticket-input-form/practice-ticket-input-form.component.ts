import {Component, Input, OnInit} from '@angular/core';
import {PracticeTicket} from "../../entity/practiceTicket";
import {StudentService} from "../../../student/services/student.service";
import {MentorService} from "../../../mentor/services/mentor.service";
import {Student} from "../../../student/entities/student";
import {Mentor} from "../../../mentor/entity/mentor";
import {Observable} from "rxjs";
import {ProgrammingLanguage} from "../../entity/programmingLanguage";
import {ProgLanguagesService} from "../../../services/prog-languages.service";
import {PracticeTicketService} from "../../services/practice-ticket.service";

@Component({
  selector: 'app-practice-ticket-input-form',
  templateUrl: './practice-ticket-input-form.component.html',
  styleUrls: ['./practice-ticket-input-form.component.css']
})
export class PracticeTicketInputFormComponent implements OnInit {

  @Input() public practiceTicket: PracticeTicket = new PracticeTicket();
  public students: Observable<Student[]> = this.studentService.getList();
  public mentors: Observable<Mentor[]> = this.mentorService.getAll();
  public progLanguages: Observable<ProgrammingLanguage[]> = this.progLanguagesService.getList();

  constructor(private studentService: StudentService, private mentorService: MentorService, private progLanguagesService: ProgLanguagesService, private practiceTicketaService: PracticeTicketService) {
  }

  ngOnInit(): void {

  }

  submitPracticeTicket() {
    console.log(this.practiceTicket);
    this.practiceTicketaService.create(this.practiceTicket).subscribe(e => {
      location.href = "/practice-tickets"
    });
  }

}

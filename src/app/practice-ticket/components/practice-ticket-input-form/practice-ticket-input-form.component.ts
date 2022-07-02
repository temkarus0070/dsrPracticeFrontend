import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {PracticeTicket} from "../../entity/practiceTicket";
import {StudentService} from "../../../student/services/student.service";
import {MentorService} from "../../../mentor/services/mentor.service";
import {Student} from "../../../student/entities/student";
import {Mentor} from "../../../mentor/entity/mentor";
import {Observable} from "rxjs";
import {ProgrammingLanguage} from "../../entity/programmingLanguage";
import {ProgLanguagesService} from "../../../services/prog-languages.service";
import {PracticeTicketService} from "../../services/practice-ticket.service";
import {Mark} from "../../entity/mark";
import {MentorReview} from "../../../student/entities/MentorReview";

@Component({
  selector: 'app-practice-ticket-input-form',
  templateUrl: './practice-ticket-input-form.component.html',
  styleUrls: ['./practice-ticket-input-form.component.css']
})
export class PracticeTicketInputFormComponent implements OnInit, OnChanges {

  @Input() public practiceTicket!: PracticeTicket | null;
  @Output() public ticketUpdate = new EventEmitter<PracticeTicket>();
  @Input() public isUpdate = false;
  public students: Observable<Student[]> = this.studentService.getList();
  public mentors: Observable<Mentor[]> = this.mentorService.getAll();
  public progLanguages: Observable<ProgrammingLanguage[]> = this.progLanguagesService.getList();
  public marksValues: string[] = [];

  constructor(private studentService: StudentService, private mentorService: MentorService, private progLanguagesService: ProgLanguagesService, private practiceTicketaService: PracticeTicketService) {


  }

  initMarks() {
    var values = Object.values(Mark);
    values = values.filter(e => !Number.isInteger(e))
    this.marksValues = values.map(e => e.toString());
  }

  ngOnInit(): void {

  }

  submitPracticeTicket() {
    if (this.practiceTicket)
      this.ticketUpdate.emit(this.practiceTicket);
    console.log(this.practiceTicket)
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (this.isUpdate && this.practiceTicket) {
      this.initMarks()
      var mentorReview = new MentorReview();
      var practiceTicket1 = new PracticeTicket();
      practiceTicket1.id = this.practiceTicket.id;
      mentorReview.practiceTicket = practiceTicket1
      if (!this.practiceTicket.finalMentorReview)
        this.practiceTicket.finalMentorReview = mentorReview;
    }
  }

}

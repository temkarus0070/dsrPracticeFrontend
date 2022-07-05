import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {PracticeTicket} from "../../entity/practiceTicket";
import {StudentService} from "../../../student/services/student.service";
import {MentorService} from "../../../mentor/services/mentor.service";
import {Student} from "../../../student/entities/student";
import {Mentor} from "../../../mentor/entity/mentor";
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

  @Input() public practiceTicket: PracticeTicket | null = new PracticeTicket();
  @Output() public ticketUpdate = new EventEmitter<PracticeTicket>();
  @Input() public isUpdate = false;
  public students: Student[] = [];
  public mentors: Mentor[] = [];
  public progLanguages: ProgrammingLanguage[] = [];
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

    if (!this.isUpdate) {
      this.studentService.getList().subscribe(e => {
        this.students = e;
      });
      this.mentorService.getAll().subscribe(e => {
        console.log(e);
        this.mentors = e;
      });
      this.progLanguagesService.getList().subscribe(e => {
        this.progLanguages = e;
      });
    }

  }

  public isValid(): boolean {
    if (this.isUpdate) {
      return this.practiceTicket?.practiceTask.taskText !== "" && this.practiceTicket?.practiceTask.taskName !== "";
    }
    console.log(this.practiceTicket?.id.endOfPractice)
    return this.practiceTicket?.mentor.id !== undefined && this.practiceTicket?.student.id !== undefined && this.practiceTicket?.id.beginOfPractice !== undefined && this.practiceTicket?.id.endOfPractice !== undefined && this.practiceTicket.id.beginOfPractice < this.practiceTicket.id.endOfPractice;
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {PracticeTicket} from "../../entity/practiceTicket";
import {StudentService} from "../../../student/services/student.service";
import {MentorService} from "../../../mentor/services/mentor.service";
import {Student} from "../../../student/entities/student";
import {Mentor} from "../../../mentor/entity/mentor";
import {Observable} from "rxjs";

@Component({
  selector: 'app-practice-ticket-input-form',
  templateUrl: './practice-ticket-input-form.component.html',
  styleUrls: ['./practice-ticket-input-form.component.css']
})
export class PracticeTicketInputFormComponent implements OnInit {

  @Input() public practiceTicket:PracticeTicket|null=new PracticeTicket();
  public students:Observable<Student[]>=new Observable<Student[]>();
  public mentors:Observable<Mentor[]>=new Observable<Mentor[]>();
  constructor(private studentService:StudentService,private mentorService:MentorService) { }

  ngOnInit(): void {
  }

  submitPracticeTicket() {

  }

  loadStudents() {
    this.students=this.studentService.getList();
  }

  loadMentors() {
    this.mentors=this.mentorService.getAll();
  }
}

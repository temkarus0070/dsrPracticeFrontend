import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Mentor} from "../../entity/mentor";

@Component({
  selector: 'app-mentor-input-form',
  templateUrl: './mentor-input-form.component.html',
  styleUrls: ['./mentor-input-form.component.css']
})
export class MentorInputFormComponent implements OnInit {
@Input() public mentor:Mentor|null=new Mentor();
  @Output() public mentorSent = new EventEmitter<Mentor | null>();

  constructor() { }

  ngOnInit(): void {
  }


  submitMentor() {
  this.mentorSent.emit(this.mentor);
  }
}

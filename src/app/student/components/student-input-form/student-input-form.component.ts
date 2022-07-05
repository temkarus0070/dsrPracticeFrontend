import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Student} from "../../models/student";

@Component({
  selector: 'app-student-input-form',
  templateUrl: './student-input-form.component.html',
  styleUrls: ['./student-input-form.component.css']
})
export class StudentInputFormComponent implements OnInit {
  @Input() public student: Student | null = new Student();
  @Output() public studentSent = new EventEmitter<Student | null>();

  constructor() {
  }

  ngOnInit(): void {
  }

  submitStudent() {
    this.studentSent.emit(this.student);
  }

}

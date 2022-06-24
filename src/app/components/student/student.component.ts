import {Component, Input, OnInit} from '@angular/core';
import {Student} from "../../entities/student";
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public isDelete = false;
  @Input() public student: Student = new Student();

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
  }

  delete() {
    this.studentService.delete(this.student.id).subscribe(e => {
      this.isDelete = false;
    }).unsubscribe();
  }
}

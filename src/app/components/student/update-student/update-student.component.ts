import {Component, OnInit} from '@angular/core';
import {Student} from "../../../entities/student";
import {StudentService} from "../../../services/student.service";

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  public student: Student = new Student();

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
  }

  updateStudent() {
    console.log(this.student);
    this.studentService.update(this.student);
  }

}

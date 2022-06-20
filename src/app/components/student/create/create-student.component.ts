import {Component, OnInit} from '@angular/core';
import {Student} from "../../../entities/student";
import {StudentService} from "../../../services/student.service";
import {LoadingProgressService} from "../../../services/loading-progress.service";

@Component({
  selector: 'app-create',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  public student: Student = new Student();

  constructor(private studentService: StudentService, private loadingProgressService: LoadingProgressService) {
  }

  ngOnInit(): void {
  }

  createStudent() {
    console.log(this.student);
    this.studentService.create(this.student).subscribe(event => {
        location.href = "/"
    });
  }

}

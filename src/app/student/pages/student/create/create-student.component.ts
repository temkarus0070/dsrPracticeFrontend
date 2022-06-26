import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../../services/student.service";
import {LoadingProgressService} from "../../../../services/loading-progress.service";

@Component({
  selector: 'app-create',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  constructor(private studentService: StudentService, private loadingProgressService: LoadingProgressService) {
  }

  ngOnInit(): void {
  }

  createStudent(student: any) {
    this.studentService.create(student).subscribe(event => {
      location.href = "/"
    });
  }

}

import {Component, OnInit} from '@angular/core';
import {Student} from "../../../entities/student";
import {StudentService} from "../../../services/student.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  public student: Student = new Student();

  constructor(private studentService: StudentService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(params => {
      var id = Number.parseInt(<string>params.get('id'));
      console.log(id)
      this.studentService.get(id).subscribe(student => {
        this.student = student;
      })
    })
  }

  ngOnInit(): void {

  }

  updateStudent() {
    console.log(this.student);
    this.studentService.update(this.student).subscribe(e => {
    });
  }

}

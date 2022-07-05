import {Component, OnInit} from '@angular/core';
import {Student} from "../../../models/student";
import {StudentService} from "../../../services/student.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  public currentStudent: Observable<Student> = new Observable<Student>();

  constructor(private studentService: StudentService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(params => {
      var id = Number.parseInt(<string>params.get('id'));
      console.log(id)
      this.currentStudent = this.studentService.get(id);
    })
  }

  ngOnInit(): void {

  }

  updateStudent(student: any) {
    this.studentService.update(student).subscribe(e => {
    });
  }

}

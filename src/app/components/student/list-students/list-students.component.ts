import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../../services/student.service";
import {Student} from "../../../entities/student";

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  public students: Student[] = [];

  constructor(private studentsService: StudentService) {
  }

  ngOnInit(): void {
    this.studentsService.getList().subscribe(students => {
      this.students = students;
    })
  }

}

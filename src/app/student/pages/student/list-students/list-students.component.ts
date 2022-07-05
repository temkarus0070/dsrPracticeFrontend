import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../../services/student.service";
import {Student} from "../../../models/student";
import {Observable} from "rxjs";

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  public students: Observable<Student[]> = new Observable<Student[]>();
  public deletedStudents: Set<number> = new Set();

  constructor(private studentsService: StudentService) {
    this.students = this.studentsService.getList();
  }

  ngOnInit(): void {

  }

  removeStudent($event: Student) {
    this.studentsService.delete($event.id).subscribe(
      e => {
        this.deletedStudents = this.deletedStudents.add($event.id);
      }
    ).unsubscribe();
  }
}

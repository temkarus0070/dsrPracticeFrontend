import {Component, Input, OnInit} from '@angular/core';
import {Student} from "../../entities/student";
import {StudentService} from "../../services/student.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public isDelete = false;
  @Input() public student: Student = new Student();

  constructor(private studentService: StudentService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(params => {
      if (params.has("id")) {
        var id = Number.parseInt(params.get("id") as string);
        this.studentService.get(id).subscribe(student => {
          this.student = student;
        })

      }
    })
  }

  ngOnInit(): void {
  }

  delete() {
    this.studentService.getStudentsPracticeTickets(this.student.id).subscribe(tickets => {
      if (tickets.length > 0) {
        var confirm1 = confirm("У данного студента есть записи на практику, при его удалении заявки будут удалены, продолжить?");
        if (!confirm1) {
          return;
        }
      }
      this.studentService.delete(this.student.id).subscribe(e => {
        this.isDelete = true;
      })
    })

  }
}

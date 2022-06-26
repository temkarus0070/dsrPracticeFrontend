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

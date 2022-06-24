import {Component, Input, OnInit} from '@angular/core';
import {Mentor} from "../../../entities/mentor";
import {MentorService} from "../../services/mentor.service";

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})
export class MentorComponent implements OnInit {
  @Input() public mentor: Mentor = new Mentor();
  public isDelete = false;

  constructor(private mentorService: MentorService) {
  }

  ngOnInit(): void {
  }

  delete() {
    this.mentorService.delete(this.mentor.id).subscribe(e => {
      this.isDelete = true;
    }).unsubscribe();
  }
}

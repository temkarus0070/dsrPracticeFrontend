import {Component, OnInit} from '@angular/core';
import {MentorService} from "../../services/mentor.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private mentorService:MentorService) { }

  ngOnInit(): void {
  }

  createMentor(mentor: any) {
    this.mentorService.create(mentor).subscribe(e=>{
      location.href="/mentors";
    })
  }
}

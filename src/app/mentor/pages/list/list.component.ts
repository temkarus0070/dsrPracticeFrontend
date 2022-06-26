import {Component, OnInit} from '@angular/core';
import {MentorService} from "../../services/mentor.service";
import {Observable} from "rxjs";
import {Mentor} from "../../entity/mentor";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public mentors = new Observable<Mentor[]>()

  constructor(private mentorService: MentorService) {
    this.mentors = this.mentorService.getAll();
  }

  ngOnInit(): void {
  }

}

import {Component, OnInit} from '@angular/core';
import {MentorService} from "../../services/mentor.service";
import {Mentor} from "../../models/mentor";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  public mentor:Observable<Mentor>=new Observable<Mentor>();

  constructor(private mentorService:MentorService,private activatedRoute:ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(params=>{
      var id = Number.parseInt(<string>params.get("id"));
     this.mentor= this.mentorService.get(id);
    })

  }

  ngOnInit(): void {
  }

  updateMentor(mentor:any) {
    this.mentorService.update(mentor).subscribe(e=>{
      location.href="/mentors"
    });
  }
}

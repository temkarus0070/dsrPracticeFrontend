import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PracticeTicketService} from "../../services/practice-ticket.service";
import {PracticeTicketId} from "../../entity/PracticeTicketId";
import {Observable} from "rxjs";
import {PracticeTicket} from "../../entity/practiceTicket";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  public practiceTicket = new Observable<PracticeTicket>()

  constructor(private activatedRoute: ActivatedRoute, private practiceTioketService: PracticeTicketService) {
    this.activatedRoute.paramMap.subscribe(params => {
      var paramsObject = {...params.keys, ...params};
      console.log(paramsObject);
      console.log(params);
      var beginOfPractice = new Date(params.get("beginOfPractice") as string);
      var endOfPractice = new Date(params.get("endOfPractice") as string);
      var mentorId = Number.parseInt(params.get("mentorId") as string)
      var studentId = Number.parseInt(params.get("studentId") as string)
      var programmingLanguageId = Number.parseInt(params.get("programmingLanguageId") as string)
      this.practiceTicket = this.practiceTioketService.get(PracticeTicketId.build(mentorId, studentId, programmingLanguageId, beginOfPractice, endOfPractice));
      console.log(PracticeTicketId.build(mentorId, studentId, programmingLanguageId, beginOfPractice, endOfPractice))
    })
  }

  ngOnInit(): void {
  }

  update(practiceTicket: any) {
    this.practiceTioketService.update(practiceTicket).subscribe(e => {
      location.href = "/practice-tickets"
    })
  }
}

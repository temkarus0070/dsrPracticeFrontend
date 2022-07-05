import {Component, OnInit} from '@angular/core';
import {PracticeTicketService} from "../../services/practice-ticket.service";
import {Observable} from "rxjs";
import {PracticeTicket} from "../../models/practiceTicket";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public practiceTickets=new Observable<PracticeTicket[]>()

  constructor(private practiceTicketService:PracticeTicketService) {
    this.practiceTickets=this.practiceTicketService.getList()
    this.practiceTickets.subscribe(array=>{
      console.log(array);
    });
  }

  ngOnInit(): void {
  }

}

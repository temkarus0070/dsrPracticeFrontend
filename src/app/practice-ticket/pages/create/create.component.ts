import {Component, OnInit} from '@angular/core';
import {PracticeTicketService} from "../../services/practice-ticket.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private practiceTicketService: PracticeTicketService) {
  }

  ngOnInit(): void {
  }

  create(practiceTicket: any) {
    this.practiceTicketService.create(practiceTicket).subscribe(e => {
      location.href = "/practice-tickets"
    });
  }
}

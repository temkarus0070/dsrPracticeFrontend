import {Component, Input, OnInit} from '@angular/core';
import {PracticeTicket} from "../../entity/practiceTicket";
import {PracticeTicketService} from "../../services/practice-ticket.service";

@Component({
  selector: 'app-practice-ticket',
  templateUrl: './practice-ticket.component.html',
  styleUrls: ['./practice-ticket.component.css']
})
export class PracticeTicketComponent implements OnInit {
  @Input() public practiceTicket: PracticeTicket = new PracticeTicket();
  public isDeleted = false;

  constructor(private practiceTicketService:PracticeTicketService) { }

  ngOnInit(): void {

  }

  delete() {
    console.log(this.practiceTicket.id);
    this.practiceTicketService.delete(this.practiceTicket.id).subscribe(e => {
      this.isDeleted = true;
    })
  }
}

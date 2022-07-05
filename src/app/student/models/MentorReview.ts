import {PracticeTicket} from "../../practice-ticket/models/practiceTicket";

export class MentorReview {
  public id: number = 0
  public textReview: string = ""
  public practiceTicket!: PracticeTicket
}

import {Mentor} from "../../mentor/entity/mentor";
import {Student} from "./student";
import {PracticeTask} from "./practiceTask";
import {PracticeTicketId} from "./PracticeTicketId";
import {MentorReview} from "./MentorReview";

export class PracticeTicket {
  public id: PracticeTicketId = new PracticeTicketId();
  public mentor: Mentor = new Mentor();
  public student: Student = new Student();
  public practiceTask: PracticeTask = new PracticeTask();
  public finalMark = 0;
  public isRecommendToHire = false;
  public finalMentorReview: MentorReview = new MentorReview();
  public weeklyMentorReviews: MentorReview[] = [];

}

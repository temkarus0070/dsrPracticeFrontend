import {Mentor} from "../../mentor/entity/mentor";
import {Student} from "../../student/entities/student";
import {PracticeTask} from "./practiceTask";
import {PracticeTicketId} from "./PracticeTicketId";
import {MentorReview} from "../../student/entities/MentorReview";
import {ProgrammingLanguage} from "./programmingLanguage";
import {Mark} from "./mark";

export class PracticeTicket {
  public id: PracticeTicketId = new PracticeTicketId();
  public mentor: Mentor = new Mentor();
  public student: Student = new Student();
  public practiceTask: PracticeTask = new PracticeTask();
  public finalMark:Mark = Mark.НЕУДОВЛЕТВОРИТЕЛЬНО;
  public isRecommendToHire = false;
  public finalMentorReview: MentorReview = new MentorReview();
  public weeklyMentorReviews: MentorReview[] = [];
  public programmingLanguage:ProgrammingLanguage=new ProgrammingLanguage();

}

import {Mentor} from "../../mentor/models/mentor";
import {Student} from "../../student/models/student";
import {PracticeTask} from "./practiceTask";
import {PracticeTicketId} from "./PracticeTicketId";
import {MentorReview} from "../../student/models/MentorReview";
import {ProgrammingLanguage} from "./programmingLanguage";
import {Mark} from "./mark";

export class PracticeTicket {
  public id: PracticeTicketId = new PracticeTicketId();
  public mentor: Mentor = new Mentor();
  public student: Student = new Student();
  public practiceTask: PracticeTask = new PracticeTask();
  public finalMark: Mark | null = null;
  public recommendToHire = false;
  public finalMentorReview: MentorReview | null = null;
  public weeklyMentorReviews: MentorReview[] = [];
  public programmingLanguage:ProgrammingLanguage=new ProgrammingLanguage();


}

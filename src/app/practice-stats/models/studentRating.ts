import {Student} from "../../student/entities/student";
import {Mark} from "../../practice-ticket/entity/mark";

export class StudentRating {
  student!: Student
  recommendToHire!: boolean
  finalMark!: Mark
}

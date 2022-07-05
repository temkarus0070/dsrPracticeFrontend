import {Student} from "../../student/entities/student";
import {Mark} from "../../practice-ticket/entity/mark";
import {ProgrammingLanguage} from "../../practice-ticket/entity/programmingLanguage";

export class StudentRating {
  student!: Student
  recommendToHire!: boolean
  finalMark!: Mark
  programmingLanguage!: ProgrammingLanguage
}

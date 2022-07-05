import {Student} from "../../student/models/student";
import {Mark} from "../../practice-ticket/models/mark";
import {ProgrammingLanguage} from "../../practice-ticket/models/programmingLanguage";

export class StudentRating {
  student!: Student
  recommendToHire!: boolean
  finalMark!: Mark
  programmingLanguage!: ProgrammingLanguage
}

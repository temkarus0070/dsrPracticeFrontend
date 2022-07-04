import {Person} from "../../student/entities/person";
import {User} from "../../auth/models/user";

export class Mentor extends Person {
  public jobName: string = "";
  public user: User = new User();
}

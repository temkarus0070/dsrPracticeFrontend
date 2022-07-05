export class PracticeTicketId {
  public mentorId: number = 0;
  public studentId: number = 0;
  public programmingLanguageId: number = 0;
  public beginOfPractice!: Date
  public endOfPractice!: Date


  static build(mentorId: number, studentId: number, programmingLanguageId: number, beginOfPractice: Date, endOfPractice: Date): PracticeTicketId {
    var id = new PracticeTicketId();
    id.mentorId = mentorId;
    id.studentId = studentId;
    id.programmingLanguageId = programmingLanguageId;
    id.beginOfPractice = beginOfPractice;
    id.endOfPractice = endOfPractice;
    return id;
  }

}

import {Component, OnInit} from '@angular/core';
import {ProgLangService} from "../../services/prog-lang.service";
import {ProgrammingLanguage} from "../../models/programmingLanguage";

@Component({
  selector: 'app-create-prog-language',
  templateUrl: './create-prog-language.component.html',
  styleUrls: ['./create-prog-language.component.css']
})
export class CreateProgLanguageComponent implements OnInit {

  public progLang: ProgrammingLanguage = new ProgrammingLanguage();

  constructor(private progLangService: ProgLangService) {
  }

  ngOnInit(): void {
  }

  create() {
    this.progLangService.create(this.progLang)
      .subscribe(e => {
        location.href = "/";
      })
  }
}

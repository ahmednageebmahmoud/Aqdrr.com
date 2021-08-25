import { Component, OnInit, Input } from '@angular/core';
import { UserLanguageResult } from 'src/app/_models/Users/language';

@Component({
  selector: 'app-language-skills',
  templateUrl: './language-skills.component.html',
  styleUrls: []
})
export class LanguageSkillsComponent implements OnInit {
  @Input('Languages') userLanguages: UserLanguageResult[];
  constructor() { }

  ngOnInit(): void {
  }

}

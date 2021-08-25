import { Component, OnInit, Input } from '@angular/core';
import { UserSkillResult } from 'src/app/_models/Users/user-skill';

@Component({
  selector: 'app-general-skills',
  templateUrl: './general-skills.component.html',
  styleUrls: []
})
export class GeneralSkillsComponent implements OnInit {
  @Input('GeneralSkills') UserSkills: UserSkillResult[];

  constructor() { }

  ngOnInit(): void {
  }

}

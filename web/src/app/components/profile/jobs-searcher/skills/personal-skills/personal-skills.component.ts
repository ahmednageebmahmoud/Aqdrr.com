import { Component, OnInit, Input } from '@angular/core';
import { UserSkillResult } from 'src/app/_models/Users/user-skill';

@Component({
  selector: 'app-personal-skills',
  templateUrl: './personal-skills.component.html',
  styleUrls: []
})
export class PersonalSkillsComponent implements OnInit {
  @Input('PersonalSkills') UserSkills: UserSkillResult[];
  constructor() { }

  ngOnInit(): void {
  }

}

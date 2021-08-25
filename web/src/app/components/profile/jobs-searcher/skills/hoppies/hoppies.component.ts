import { Component, OnInit, Input } from '@angular/core';
import { UserHobbyResult } from 'src/app/_models/Users/hobby';

@Component({
  selector: 'app-hoppies',
  templateUrl: './hoppies.component.html',
  styleUrls: []
})
export class HoppiesComponent implements OnInit {
  @Input('Hoppies') UserHoppies: UserHobbyResult[];
  constructor() { }

  ngOnInit(): void {
  }

}

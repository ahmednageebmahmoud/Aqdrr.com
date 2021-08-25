import { Component, Input, OnInit } from '@angular/core';
import { TaskerCard } from '../_models/tasker-card';

@Component({
  selector: 'app-tasker-card',
  templateUrl: './tasker-card.component.html',
  styleUrls: []
})
export class TaskerCardComponent implements OnInit {
  @Input() taskerCard: TaskerCard;
  
  constructor() { }

  ngOnInit(): void {
  }

}

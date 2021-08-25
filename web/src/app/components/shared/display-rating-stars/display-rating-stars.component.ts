import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-rating-stars',
  templateUrl: './display-rating-stars.component.html',
  styleUrls: ['./display-rating-stars.component.css']
})
export class DisplayRatingStarsComponent implements OnInit {
  @Input('Rating') rating: Number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}

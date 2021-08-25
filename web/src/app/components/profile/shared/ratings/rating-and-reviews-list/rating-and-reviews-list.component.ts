import { Component, Input, OnInit } from '@angular/core';
import { RatingAndReview } from 'src/app/_models/Users/rating-and-review';

@Component({
  selector: 'app-rating-and-reviews-list',
  templateUrl: './rating-and-reviews-list.component.html',
  styleUrls: []
})
export class RatingAndReviewsListComponent implements OnInit {
  @Input('RatingsAndReviews') ratingsAndReviews: RatingAndReview[];
  constructor() { }

  ngOnInit(): void {
  }

}

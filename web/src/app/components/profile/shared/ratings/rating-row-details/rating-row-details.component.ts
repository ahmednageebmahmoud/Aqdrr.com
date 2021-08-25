import { Component, Input, OnInit } from '@angular/core';
import { RateType, RatingAndReview, RatingEmployerByWorker, RatingTaskOrder, RatingWorkerByEmployer } from 'src/app/_models/Users/rating-and-review';

@Component({
  selector: 'app-rating-row-details',
  templateUrl: './rating-row-details.component.html',
  styleUrls: ['./rating-row-details.component.css']
})
export class RatingRowDetailsComponent implements OnInit {
  @Input('RatingAndReview') ratingAndReview: RatingAndReview;
  RateTypeEnum = RateType;
  constructor() { }

  ngOnInit(): void {

  }

  get getServiceOrderReviewDetails(): RatingTaskOrder {
    return JSON.parse(this.ratingAndReview?.details) as RatingTaskOrder;
  }

  get getRatingWorkerByEmployerDetails(): RatingWorkerByEmployer {
    return JSON.parse(this.ratingAndReview?.details) as RatingWorkerByEmployer;
  }

  get getRatingEmployerByWorkerDetails(): RatingEmployerByWorker {
    return JSON.parse(this.ratingAndReview?.details) as RatingEmployerByWorker;
  }

}

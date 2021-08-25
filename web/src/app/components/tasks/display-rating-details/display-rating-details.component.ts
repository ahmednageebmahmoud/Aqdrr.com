import { Component, Input, OnInit } from '@angular/core';
import { OrderServiceDetails } from '../_models/order-service';

@Component({
  selector: 'app-display-rating-details',
  templateUrl: './display-rating-details.component.html',
  styleUrls: ['./display-rating-details.component.css']
})
export class DisplayRatingDetailsComponent implements OnInit {
  @Input('OrderDetails') orderService: OrderServiceDetails;
  
  constructor() { }

  ngOnInit(): void {
  }

}

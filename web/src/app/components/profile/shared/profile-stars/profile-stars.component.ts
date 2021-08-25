import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-stars',
  templateUrl: './profile-stars.component.html',
  styles: [
  `.star {
    font-size: 1.3rem;
    color: #fbedd9;
  }
  .filled {
    color: #EDB867;
  }
  .bad {
    color: #deb0b0;
  }
  .filled.bad {
    color: #ff1e1e;
  }`]
})
export class ProfileStarsComponent implements OnInit {
  @Input('Rating') rating: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}

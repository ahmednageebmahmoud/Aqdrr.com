import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-since-profile',
  templateUrl: './since-profile.component.html',
  styleUrls: []
})
export class SinceProfileComponent implements OnInit {
  @Input('MemberSince') createdDate: any;
  @Input('LastActivity') lastActive: any;
  constructor() { }

  ngOnInit(): void {
  }

}

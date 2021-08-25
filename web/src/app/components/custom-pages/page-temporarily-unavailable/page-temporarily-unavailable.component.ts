import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-page-temporarily-unavailable',
  templateUrl: './page-temporarily-unavailable.component.html',
  styleUrls: ['../../../../assets/css/custom-pages.css']
})
export class PageTemporarilyUnavailableComponent implements OnInit {
  constructor(private _location: Location) { }

  ngOnInit() {}

  goBack() {
    this._location.back();
  }
}

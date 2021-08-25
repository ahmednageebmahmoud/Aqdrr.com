import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-page-error',
  templateUrl: './page-error.component.html',
  styleUrls: ['../../../../assets/css/custom-pages.css']
})
export class PageErrorComponent implements OnInit {
  constructor(private _location: Location) { }

  ngOnInit() {}

  goBack() {
    this._location.back();
  }
}

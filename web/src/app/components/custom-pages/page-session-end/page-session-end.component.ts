import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-page-session-end',
  templateUrl: './page-session-end.component.html',
  styleUrls: ['../../../../assets/css/custom-pages.css']
})
export class PageSessionEndComponent implements OnInit {
  constructor(private _location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this._location.back();
  }
}

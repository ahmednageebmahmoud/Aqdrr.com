import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-page-working-on-it',
  templateUrl: './page-working-on-it.component.html',
  styleUrls: ['../../../../assets/css/custom-pages.css']
})
export class PageWorkingOnItComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this._location.back();
  }
}

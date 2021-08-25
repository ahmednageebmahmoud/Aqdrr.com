import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: []
})
export class BreadcrumbsComponent implements OnInit {
  @Input() title: string = '';
  @Input() subTitle: string = '';
  @Input() currentPageTitle: string = '';
  @Input() links = [];
  // [
  //   { title: 'One', path: 'one' },
  //   { title: 'Two', path: 'two', param: 3 }
  // ];
  constructor() { }

  ngOnInit(): void {
  }

}

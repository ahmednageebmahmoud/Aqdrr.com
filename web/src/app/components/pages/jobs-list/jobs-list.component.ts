import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
})
export class JobsListComponent implements OnInit {

  categoryId: string;
  categoryName: string;
  getAllJobOffersEvent = new EventEmitter();

  isNotFirstTime: boolean = false;
  query={};
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(parms => {
      debugger
      this.categoryId = parms.categoryId;
      this.categoryName = parms.categoryName;
      this.query={Categories:[this.categoryId]};

      if (this.isNotFirstTime)
        this.getAllJobOffersEvent.emit(this.query);

      this.isNotFirstTime = true;
    });
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { JobCategoryWithIcon } from 'src/app/_models/Users/job-category';
import { JobCategoriesService } from 'src/app/_services/settings/job-categories.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: []
})
export class FeaturesComponent implements OnInit {
  @Input('Random') random: number = 7;
  jobCategories: JobCategoryWithIcon[];

  @Input('isGoToJobsList') isGoToJobsList =false;

  constructor(private jobCategoriesService: JobCategoriesService) { }

  ngOnInit(): void {
    this. getJobCategories();
  }

  getJobCategories() {
    this.jobCategoriesService.getRandomJobCategories(this.random).subscribe((result: JobCategoryWithIcon[]) => { this.jobCategories = result });
  }

}

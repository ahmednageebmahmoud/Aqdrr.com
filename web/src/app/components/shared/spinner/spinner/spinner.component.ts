import { Component, Input, OnInit } from '@angular/core';
import { AppTranslationService } from 'src/app/_helpers/app-translation';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: []
})
export class SpinnerComponent implements OnInit {
  @Input() waitingText: string = null;
  @Input() textClass: string = 'h3';

  constructor(private appTranslation: AppTranslationService) { }

  ngOnInit(): void {
    if (this.waitingText === null)
      this.waitingText = this.appTranslation.getTranslation('Common.Data.waitSearch');
  }
}

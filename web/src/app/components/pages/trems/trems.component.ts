import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from 'src/app/_services/settings/app-settings.service';

@Component({
  selector: 'app-trems',
  templateUrl: './trems.component.html',
  styleUrls: []
})
export class TremsComponent implements OnInit {
  trems: string;
  constructor(private appSettingsService: AppSettingsService,) { }

  ngOnInit(): void {
    this.getTrems();
  }


  async getTrems() {
    this.trems = await this.appSettingsService.readHtmlFile('terms').toPromise();
  }

}

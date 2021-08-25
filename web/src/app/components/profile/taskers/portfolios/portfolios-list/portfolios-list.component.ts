import { Component, OnInit, Input } from '@angular/core';
import { Portfolio } from '../../../models/portfolio';
import { PortfoliosService } from 'src/app/_services/users/portfolios.service';

@Component({
  selector: 'app-portfolios-list',
  templateUrl: './portfolios-list.component.html',
  styleUrls: []
})
export class PortfoliosListComponent implements OnInit {
  @Input('UserPortfolios') userPortfolios: Portfolio[];
  @Input('IsCurrentUserProfile') isCurrentUserProfile: boolean;

  constructor(private portfoliosService: PortfoliosService) { }

  ngOnInit(): void {
  }

  getImageUrl(imageName: string, size: number): string {
    return `${this.portfoliosService.portfoliosUrl}/images/${size ?? 200}/${imageName}`;
  }

}

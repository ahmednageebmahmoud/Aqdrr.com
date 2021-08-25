import { Component, OnInit, Input } from '@angular/core';
import { Portfolio } from '../../../models/portfolio';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { AppTitleService } from 'src/app/_helpers/app-title.service';
import { PortfoliosService } from 'src/app/_services/users/portfolios.service';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: []
})
export class PortfolioDetailsComponent implements OnInit {
  portfolioId: number = 0;
  userId: any;
  portfolio: Portfolio;

  constructor(private router: Router, private route: ActivatedRoute, private alertify: AlertifyService
    , private appTranslation: AppTranslationService, private appTitle: AppTitleService, private portfoliosService: PortfoliosService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('portfolioId') || +paramMap.get('portfolioId') == 0) {
        this.alertify.error(this.appTranslation.get('Common.Messages.ErrorOnAction'));
        this.router.navigate(['./profile/', paramMap.get('userId') ?? '']);
        return;
      }
      this.userId = paramMap.get('userId') ?? null;
      this.portfolioId = +paramMap.get('portfolioId');
      this.portfoliosService.getPortfolio(this.portfolioId).subscribe(
        (result: Portfolio) => {
          this.portfolio = result;
        },
        (error: any) => {
          this.alertify.error(this.appTranslation.get('Common.Messages.ErrorOnAction'));
          this.router.navigate(['./profile/', paramMap.get('userId') ?? '']);
        }
      );
      console.log(this.portfolioId);
      // تم اضافة ال setTimeout لحل مشكلة ال Expression has changed after it was checked.
      // setTimeout(() => {
      //   this.appTitle.changeNavgationTitle(`تذكرة رقم #${this.ticket?.id}`, ``);
      //   this.appTitle.changeTabTitle(`تذكرة رقم #${this.ticket?.id}`);
      // }, 0);
    });
  }

  getImageUrl(imageName: string, size: number): string {
    return `${this.portfoliosService.portfoliosUrl}/images/w/${size ?? 200}/${imageName}`;
  }

  get currentUrl(): string {
    return window.location.href;
  }



}

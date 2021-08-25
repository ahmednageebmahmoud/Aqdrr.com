import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { AppTitleService } from 'src/app/_helpers/app-title.service';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { PermissionsService } from 'src/app/_helpers/permissions.service';
import { UrlService } from 'src/app/_helpers/url.service';
import { SubscriptionPackage } from 'src/app/_models/settings/subscription-package';
import { SubscriptionPackagesService } from 'src/app/_services/settings/subscription-packages.service';
import { AuthService } from 'src/app/_services/users/auth.service';

@Component({
  selector: 'app-subscription-package-details',
  templateUrl: './subscription-package-details.component.html'
})
export class SubscriptionPackageDetailsComponent implements OnInit {
	isLoadingData = true;
	isSubmitting = false;
	currentUserId: number = 0;
	previousUrl: any;
	@Output() viewedSuccessfully: EventEmitter<SubscriptionPackage> = new EventEmitter<SubscriptionPackage>();
	subscriptionPackage: SubscriptionPackage;
	paramSubscriptionPackageId: number = 0;

	constructor(private appTranslation: AppTranslationService,
		private router: Router, private activatedRoute: ActivatedRoute, private urlService: UrlService,
		public authService: AuthService, public permissions: PermissionsService,
		private appTitle: AppTitleService, private alertify: AlertifyService,
		private subscriptionPackagesService: SubscriptionPackagesService) {
		this.urlService.previousUrl$.subscribe((previousUrl: string) => {
		if (previousUrl != null)
			this.previousUrl = [`${previousUrl}`];
		else
			this.previousUrl = ['/SubscriptionPackages']
		});
	}

	ngOnInit(): void {
		try { this.currentUserId = this.authService.getCurrentUserIdUsingToken(); } catch (error) { console.log('anonymous user'); }
		this.activatedRoute.paramMap.subscribe(paramMap => {
			if (!paramMap.has('subscriptionPackageId') || +paramMap.get('subscriptionPackageId') == 0) {
				this.alertify.error(this.appTranslation.get('Common.Messages.ErrorOnAction'));
				this.router.navigate([this.previousUrl]);
				return;
			}
			this.paramSubscriptionPackageId = +paramMap.get('subscriptionPackageId');
			this.getSubscriptionPackageDetails();
		});
	}

	getSubscriptionPackageDetails() {
		this.isLoadingData = true;
		this.subscriptionPackagesService.getSubscriptionPackage(this.paramSubscriptionPackageId).subscribe((subscriptionPackageResult: SubscriptionPackage) => {
			this.subscriptionPackage = subscriptionPackageResult;
		},
			error => {
				this.alertify.error(this.appTranslation.get('Common.Messages.ErrorOnAction'));
				this.isLoadingData = false;
				this.router.navigate([this.previousUrl]);
			},
			() => {
				setTimeout(() => {
					this.appTitle.changeNavigationTitle(`السجل رقم #${this.paramSubscriptionPackageId}`, ``);
					this.appTitle.changeTabTitle(`السجل رقم #${this.paramSubscriptionPackageId}`);
				}, 0);
				this.isLoadingData = false;
			}
		);
	}



}

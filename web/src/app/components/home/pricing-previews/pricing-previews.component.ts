import { Component, OnInit } from '@angular/core';
import { PermissionsService } from 'src/app/_helpers/permissions.service';
import { AuthService } from 'src/app/_services/users/auth.service';

@Component({
  selector: 'app-pricing-previews',
  templateUrl: './pricing-previews.component.html'
})
export class PricingPreviewsComponent implements OnInit {

  constructor(public authService: AuthService,public permissions: PermissionsService) { }

  ngOnInit(): void {
  }

  loggedIn(): boolean {
    return this.authService.loggedIn();
  }


}

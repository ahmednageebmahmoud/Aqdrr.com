import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PermissionsService } from 'src/app/_helpers/permissions.service';
import { AuthService } from 'src/app/_services/users/auth.service';

@Component({
  selector: 'app-subscription-packages-businesses',
  templateUrl: './subscription-packages-businesses.component.html',
  styleUrls: []
})
export class SubscriptionPackagesBusinessesComponent implements OnInit {
  message: string = '';
  constructor(public authService: AuthService, public permissions: PermissionsService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (paramMap.has('message')) {
        this.message = paramMap.get('message');
      }
    });
  }

  loggedIn(): boolean {
    return this.authService.loggedIn();
  }

}

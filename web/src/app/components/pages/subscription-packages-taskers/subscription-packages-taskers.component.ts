import { Component, OnInit } from '@angular/core';
import { PermissionsService } from 'src/app/_helpers/permissions.service';
import { AuthService } from 'src/app/_services/users/auth.service';

@Component({
  selector: 'app-subscription-packages-taskers',
  templateUrl: './subscription-packages-taskers.component.html',
  styleUrls: []
})
export class SubscriptionPackagesTaskersComponent implements OnInit {

  constructor(public authService: AuthService,public permissions: PermissionsService) { }

  ngOnInit(): void {
  }

  loggedIn(): boolean {
    return this.authService.loggedIn();
  }

}

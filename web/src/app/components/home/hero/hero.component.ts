import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PermissionsService } from 'src/app/_helpers/permissions.service';
import { AuthService } from 'src/app/_services/users/auth.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: []
})
export class HeroComponent implements OnInit {

  constructor(public authService: AuthService,
    private permissions: PermissionsService,
    private router: Router) { }

  ngOnInit(): void {
  }


  startNow() {
    if (this.authService.loggedIn()) {
      if (this.permissions.canApplyToTheJobs)
        this.router.navigate(['/jobs']);
      else if (this.permissions.canManageOrders)
        this.router.navigate(['/profile']);
      else if (this.permissions.canManageJobs)
        this.router.navigate(['/jobs/new']);
      else if (this.permissions.canOrderService)
        this.router.navigate(['/taskers/list']);
      else
        this.router.navigate(['/']);
    } else {
      this.router.navigate(['/register']);
    }
  }


}

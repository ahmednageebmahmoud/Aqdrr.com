import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PermissionsService } from 'src/app/_helpers/permissions.service';
import { AuthService } from 'src/app/_services/users/auth.service';

@Component({
  selector: 'app-aqdrr',
  templateUrl: './aqdrr.component.html',
  styleUrls: []
})
export class AqdrrComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }


   

}

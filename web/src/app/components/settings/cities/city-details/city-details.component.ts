import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { AppTitleService } from 'src/app/_helpers/app-title.service';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { PermissionsService } from 'src/app/_helpers/permissions.service';
import { UrlService } from 'src/app/_helpers/url.service';
import { City } from 'src/app/_models/settings/city';
import { CitiesService } from 'src/app/_services/settings/cities.service';
import { AuthService } from 'src/app/_services/users/auth.service';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: []
})
export class CityDetailsComponent implements OnInit {
  city: City;

  constructor(private appTranslation: AppTranslationService,
    public activeModal: NgbActiveModal,
    public authService: AuthService, public permissions: PermissionsService,
    private appTitle: AppTitleService) { }

  ngOnInit(): void {

  }

}
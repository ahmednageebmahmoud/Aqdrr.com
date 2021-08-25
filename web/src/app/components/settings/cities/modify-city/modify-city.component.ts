import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { City } from 'src/app/_models/settings/city';
import { CitiesService } from 'src/app/_services/settings/cities.service';

@Component({
  selector: 'app-modify-city',
  templateUrl: './modify-city.component.html',
  styleUrls: []
})
export class ModifyCityComponent implements OnInit {
  @Output() updatedSuccessfully: EventEmitter<City> = new EventEmitter<City>();
  edtCityForm: FormGroup;
  isSubmitting: boolean = false;
  city: City;

  constructor(private appTranslation: AppTranslationService,
    private alertify: AlertifyService,
    private formBuilder: FormBuilder,
    private citiesService: CitiesService,
    public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.initEdtForm();
  }

  initEdtForm() {
    this.edtCityForm = this.formBuilder.group({
      id: [''],
      code: ['', Validators.required],
      arName: ['', Validators.required],
      enName: ['', Validators.required]
    });
    if (this.city) { this.edtCityForm.patchValue(this.city); }
  }
  get updateValidator() { return this.edtCityForm.controls; }
  editCity() {
    if (this.edtCityForm.valid) {
      this.isSubmitting = true;
      this.edtCityForm.disable();
      Object.assign(this.city, this.edtCityForm.getRawValue());
      this.citiesService.updateCity(this.city).subscribe(
        returnCity => {
          this.alertify.success(this.appTranslation.get('Common.Data.SavedSuccessfully'));
          this.updatedSuccessfully.emit(returnCity);
        },
        error => { this.alertify.error(error); },
        () => { this.isSubmitting = false; this.edtCityForm.enable(); });
    } else {
      this.alertify.warning(this.appTranslation.get('Common.Data.Invalid'));
      this.edtCityForm.markAllAsTouched();
      this.isSubmitting = false;
    }
  }



}

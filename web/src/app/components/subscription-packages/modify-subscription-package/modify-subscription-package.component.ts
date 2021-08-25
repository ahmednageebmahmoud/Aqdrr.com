import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { zip } from 'rxjs';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { KeyValuePairResource } from 'src/app/_models/data/key-value-pair-resource';
import { SubscriptionPackage } from 'src/app/_models/settings/subscription-package';
import { SubscriptionPackagesService } from 'src/app/_services/settings/subscription-packages.service';

@Component({
  selector: 'app-modify-subscription-package',
  templateUrl: './modify-subscription-package.component.html'
})
export class ModifySubscriptionPackageComponent implements OnInit {
  isLoadingOptions = true;
  public subscriptionsPackageColorsOptions: KeyValuePairResource[] = []
  @Output() updatedSuccessfully: EventEmitter<SubscriptionPackage> = new EventEmitter<SubscriptionPackage>();
  edtSubscriptionPackageForm: FormGroup;
  isSubmitting: boolean = false;
  subscriptionPackage: SubscriptionPackage;

  constructor(private appTranslation: AppTranslationService,
    private alertify: AlertifyService,
    private formBuilder: FormBuilder,
    private subscriptionPackagesService: SubscriptionPackagesService,
    public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.initEdtForm();
    this.getAllDefaultValues();
  }

  getAllDefaultValues(): void {
    zip(
      this.subscriptionPackagesService.getSubscriptionPackageColorsAsList(),
    ).subscribe(
      ([subscriptionPackageColors]) => {
        this.subscriptionsPackageColorsOptions = <KeyValuePairResource[]>subscriptionPackageColors;
      },
      error => { this.alertify.error(error); },
      () => {
        this.isLoadingOptions = false;
        this.enableAllControls();
      }
    );
  }

  enableAllControls(): void {
    this.edtSubscriptionPackageForm.controls.color.enable();
  }

  initEdtForm() {
    this.edtSubscriptionPackageForm = this.formBuilder.group({
      id: ['', Validators.required],
      category: ['', Validators.required],
      arTitle: ['', Validators.required],
      enTitle: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      isFree: ['', Validators.required],
      oldPrice: ['', Validators.required],
      price: ['', Validators.required],
      priceSaudiRiyal: ['', Validators.required],
      totalDays: ['', Validators.required],
      employmentBags: ['', Validators.required],
      color: [{ value: 0, disabled: true }, Validators.required]
    });

    this.edtSubscriptionPackageForm.controls.category.valueChanges.subscribe(value => {
      if (value == 1) {
        console.log('category 1 :', value);
        this.edtSubscriptionPackageForm.controls.employmentBags.disable();
        this.edtSubscriptionPackageForm.controls.employmentBags.setValidators(null);
      } else if (value == 2) {
        console.log('category 2 : ', value);
        this.edtSubscriptionPackageForm.controls.employmentBags.enable();
        this.edtSubscriptionPackageForm.controls.employmentBags.setValidators([Validators.required]);
      }
    });

    if (this.subscriptionPackage) { this.edtSubscriptionPackageForm.patchValue(this.subscriptionPackage); }
  }

  get updateValidator() { return this.edtSubscriptionPackageForm.controls; }

  editSubscriptionPackage() {
    if (this.edtSubscriptionPackageForm.valid) {
      this.isSubmitting = true;
      this.edtSubscriptionPackageForm.disable();
      Object.assign(this.subscriptionPackage, this.edtSubscriptionPackageForm.getRawValue());
      this.subscriptionPackagesService.updateSubscriptionPackage(this.subscriptionPackage).subscribe(
        returnSubscriptionPackage => {
          this.alertify.success(this.appTranslation.get('Common.Data.SavedSuccessfully'));
          this.updatedSuccessfully.emit(returnSubscriptionPackage);
        },
        error => { this.alertify.error(error); },
        () => { this.isSubmitting = false; this.edtSubscriptionPackageForm.enable(); });
    } else {
      this.alertify.warning(this.appTranslation.get('Common.Data.Invalid'));
      this.edtSubscriptionPackageForm.markAllAsTouched();
      this.isSubmitting = false;
    }
  }



}

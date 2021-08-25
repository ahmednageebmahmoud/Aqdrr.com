import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { zip } from 'rxjs';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { RegularExpression } from 'src/app/_helpers/RegularExpression/RegularExpression';
import { KeyValuePairResource } from 'src/app/_models/data/key-value-pair-resource';
import { Ticket } from 'src/app/_models/tickets/ticket';
import { TicketsService } from 'src/app/_services/tickets/tickets.service';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: []
})
export class CreateTicketComponent implements OnInit {
  isLoadingOptions = true;
  public categoryOptions: KeyValuePairResource[] = []
  @Output() addSuccessfully: EventEmitter<Ticket> = new EventEmitter<Ticket>();
  addTicketForm: FormGroup;
  isSubmitting: boolean = false;

  constructor(private appTranslation: AppTranslationService,
    private alertify: AlertifyService,
    private formBuilder: FormBuilder,
    private ticketsService: TicketsService) { }

  ngOnInit(): void {
    this.initAddForm();
    this.getAllDefaultValues();
  }

  getAllDefaultValues(): void {
    zip(
      this.ticketsService.getTicketCategoriesAsList(),
    ).subscribe(
      ([categories]) => {
        this.categoryOptions = <KeyValuePairResource[]>categories;
      },
      error => { this.alertify.error(error); },
      () => {
        this.isLoadingOptions = false;
        this.enableAllControls();
      }
    );
  }

  enableAllControls(): void {
    this.addTicketForm.controls.category.enable();
  }


  initAddForm() {
    this.addTicketForm = this.formBuilder.group({
      category: [{ value: null, disabled: true }, Validators.required],
      fullName: ['', [Validators.required, Validators.maxLength(100)]],
      phone: ['', [Validators.required, Validators.pattern(RegularExpression.SaudiPhone)]],
      email: ['', [Validators.required, Validators.pattern(RegularExpression.Email)]],
      title: ['', [Validators.required, Validators.maxLength(100)]],
      message: ['', [Validators.required, Validators.maxLength(300)]]
    });
  }

  get addValidator() { return this.addTicketForm.controls; }

  addNewTicket() {
    if (this.addTicketForm.valid) {
      this.isSubmitting = true;
      this.addTicketForm.disable();
      let ticket = {} as Ticket;
      Object.assign(ticket, this.addTicketForm.getRawValue());
      this.ticketsService.addNew(ticket).subscribe(
        returnTicket => {
          this.alertify.success(this.appTranslation.get('Common.Data.SavedSuccessfully'));
          this.addTicketForm.reset();
          this.addSuccessfully.emit(returnTicket);
        },
        error => { this.alertify.error(error); this.isSubmitting = false; this.addTicketForm.enable(); },
        () => { this.isSubmitting = false; this.addTicketForm.enable(); });
    } else {
      this.alertify.warning(this.appTranslation.get('Common.Data.Invalid'));
      this.addTicketForm.markAllAsTouched();
      this.isSubmitting = false;
    }
  }



}

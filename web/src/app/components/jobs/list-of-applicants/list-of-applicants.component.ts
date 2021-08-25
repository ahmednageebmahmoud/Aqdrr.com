import { Component, OnInit } from "@angular/core";
import { NgbModalRef, NgbModal, NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";
import { AlertifyService } from "src/app/_helpers/Alertify";
import { AppTranslationService } from "src/app/_helpers/app-translation";
import { Column, Pagination, PaginationResult } from "src/app/_models/data/Pagination";
import { RatingTheWorkerComponent } from "../rating/rating-the-worker/rating-the-worker.component";
import { ApplicantReturn, ApplicantStatus } from "../_models/applicant";
import { ApplicantsService } from "../_services/applicants.service";

 

@Component({
  selector: 'app-list-of-applicants',
  templateUrl: './list-of-applicants.component.html',
  styleUrls: []
})
export class ListOfApplicantsComponent implements OnInit {
  applicants: ApplicantReturn[];
  isLoading: boolean = true;
  ApplicantStatusEnum = ApplicantStatus;
  ratingModalRef: NgbModalRef | null;
  columns: Column[] = <Column[]>[
    // { title: '#', align: 'center', key: 'id' },
    { title: this.appTranslation.get('Applicants.Applicant'), align: 'center', key: 'jobOfferId' },
    { title: this.appTranslation.get('JobsOffers.jobOfferCaption'), align: 'center', key: 'jobOfferId' },
  ];
  entityCaption: string;
  private readonly PAGE_SIZE = 10;
  query: Pagination = <Pagination>{ pageSize: this.PAGE_SIZE };

  constructor(private appTranslation: AppTranslationService,
    private alertify: AlertifyService,
    private modalService: NgbModal,
    private applicantsService: ApplicantsService) { }

  ngOnInit(): void {
    this.getAllApplicants();
    this.entityCaption = this.appTranslation.get(this.appTranslation.get('Applicants.applicantCaption'));
  }

  changeApplicantStatus(applicant: any, checkboxInput: any) {
    this.applicantsService.changeApplicantStatus(applicant.id, checkboxInput.currentTarget.checked).subscribe(
      result => {
        this.alertify.info('تم تغيير الحالة بنجاح');
        applicant.hasSeen = result;
      },
      error => { this.alertify.error(error); }
    );
  }

  getAllApplicants() {
    this.isLoading = true;
    this.applicantsService.getPagedApplicants(this.query).subscribe(
      (res: PaginationResult<ApplicantReturn[]>) => {
        this.applicants = res.items;
        this.query = res.pagination;
      },
      error => {
        this.alertify.error(this.appTranslation.getWithValue('Common.Data.errorGettingData', this.entityCaption));
        this.isLoading = false;
      },
      () => { this.isLoading = false; }
    );
  }

  onFilterChange() {
    this.query.pageNumber = 1;
    this.getAllApplicants();
  }

  resetFilter() {
    this.query = <Pagination>{
      pageNumber: 1,
      pageSize: this.PAGE_SIZE,
      filterText: ''
    };
    this.getAllApplicants();
  }

  refreshData() {
    this.resetFilter();
    this.alertify.info('تم تحديث البيانات');
  }

  sortBy(columnName: string) {
    if (this.query.sortBy === columnName) {
      this.query.isSortAscending = !this.query.isSortAscending;
    } else {
      this.query.sortBy = columnName;
      this.query.isSortAscending = true;
    }
    this.getAllApplicants();
  }

  onPageChange(event: any) {
    this.query.pageNumber = event;
    this.getAllApplicants();
  }

  
  isRatingAllowedToWorker(applicant: ApplicantReturn): boolean {
    if ((<ApplicantStatus>applicant.status === <ApplicantStatus>this.ApplicantStatusEnum.RequestAccept ||
         <ApplicantStatus>applicant.status === <ApplicantStatus>this.ApplicantStatusEnum.Accepted) &&
      (applicant.workerRating <= 0) && (applicant.jobOffer.isPassEndDate)) {
      return true;
    }
    return false;
  }

  getApplicantStatusStyle(applicantStatus: ApplicantStatus): string {
    if ((<ApplicantStatus>applicantStatus === <ApplicantStatus>this.ApplicantStatusEnum.RequestAccept) ||
      (<ApplicantStatus>applicantStatus === <ApplicantStatus>this.ApplicantStatusEnum.Accepted)) {
      return 'text-success';
    } else if ((<ApplicantStatus>applicantStatus === <ApplicantStatus>this.ApplicantStatusEnum.Rejected)) {
      return 'text-danger';
    } else if ((<ApplicantStatus>applicantStatus === <ApplicantStatus>this.ApplicantStatusEnum.RequestDiscard)) {
      return 'text-warning';
    }
    return 'text-secondary';
  }

  getApplicantStatusIcon(applicantStatus: ApplicantStatus): string {
    if ((<ApplicantStatus>applicantStatus === <ApplicantStatus>this.ApplicantStatusEnum.RequestAccept) ||
      (<ApplicantStatus>applicantStatus === <ApplicantStatus>this.ApplicantStatusEnum.Accepted)) {
      return 'fa-check-circle text-success';
    } else if ((<ApplicantStatus>applicantStatus === <ApplicantStatus>this.ApplicantStatusEnum.Rejected)) {
      return 'fa-times-circle-o text-danger';
    } else if ((<ApplicantStatus>applicantStatus === <ApplicantStatus>this.ApplicantStatusEnum.RequestDiscard)) {
      return 'fa-times-circle-o text-warning';
    }
    return 'fa-info-circle text-secondary';
  }


  showRatingModal(currentApplicant: ApplicantReturn) {
    const config: NgbModalOptions = {
      backdrop: 'static',
      size: 'lg',
      keyboard: false,
    };
    this.ratingModalRef = this.modalService.open(RatingTheWorkerComponent, config);
    this.ratingModalRef.componentInstance.applicantDetails = currentApplicant;
    this.ratingModalRef.componentInstance.ratingSuccessfully.subscribe((applicantReturn: ApplicantReturn) => {
      this.ratingModalRef.close();
      this.updateRatedApplicantUI(currentApplicant, applicantReturn);
    });
  }

  updateRatedApplicantUI(currentApplicant: ApplicantReturn, newApplicantReview: ApplicantReturn) {
    if (newApplicantReview) {
      currentApplicant.workerRating = newApplicantReview.workerRating;
      currentApplicant.workerRatingComment = newApplicantReview.workerRatingComment;
    }
  }

  
}
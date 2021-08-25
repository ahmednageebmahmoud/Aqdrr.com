import { Component, OnInit } from "@angular/core";
import { NgbModalRef, NgbModal, NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";
import { AlertifyService } from "src/app/_helpers/Alertify";
import { AppTranslationService } from "src/app/_helpers/app-translation";
import { Column, Pagination, PaginationResult } from "src/app/_models/data/Pagination";
import { RatingTheEmployerComponent } from "../rating/rating-the-employer/rating-the-employer.component";
import { ApplicantReturn, ApplicantStatus, ApplicantUpdate, ApplicantResult } from "../_models/applicant";
import { ApplicantsService } from "../_services/applicants.service";

 
@Component({
  selector: 'app-user-jobs-requests',
  templateUrl: './user-jobs-requests.component.html',
  styleUrls: []
})
export class UserJobsRequestsComponent implements OnInit {
  applicants: ApplicantReturn[];
  isLoading: boolean = true;
  isSubmitting: boolean = false;
  ApplicantStatusEnum = ApplicantStatus;
  ratingModalRef: NgbModalRef | null;
  columns: Column[] = <Column[]>[
    // { title: '#', align: 'center', key: 'id' },
    { title: this.appTranslation.get('JobsOffers.jobOfferCaption'), align: 'center', key: 'jobOfferId' },
    { title: this.appTranslation.get('Applicants.Status'), align: 'center', key: 'status' },
    { title: this.appTranslation.get('JobsOffers.CreatedBy'), align: 'center', key: 'jobOfferId' },
    { title: this.appTranslation.get('Applicants.CreatedDate'), align: 'center', key: 'createdDate' },
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

  getAllApplicants() {
    this.isLoading = true;
    this.applicantsService.getPagedUserRequests(this.query).subscribe(
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

  getApplicantStatusStyle(applicantStatus: ApplicantStatus): string {
    if ((<ApplicantStatus>applicantStatus === <ApplicantStatus>this.ApplicantStatusEnum.RequestAccept) ||
      (<ApplicantStatus>applicantStatus === <ApplicantStatus>this.ApplicantStatusEnum.Accepted)) {
      return 'alert-success';
    } else if ((<ApplicantStatus>applicantStatus === <ApplicantStatus>this.ApplicantStatusEnum.Rejected)) {
      return 'alert-danger';
    } else if ((<ApplicantStatus>applicantStatus === <ApplicantStatus>this.ApplicantStatusEnum.RequestDiscard)) {
      return 'alert-warning';
    }
    return 'alert-secondary';
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


  requestedUserAcceptOrDiscardTheApplicant(applicantDetails: ApplicantReturn, status: ApplicantStatus) {
    this.isSubmitting = true;
    let applicant = {} as ApplicantUpdate;
    applicant.id = applicantDetails.id;
    applicant.status = status;
    this.applicantsService.requestedUserAcceptOrDiscardTheApplicant(applicant).subscribe(
      (result: ApplicantResult) => {
        applicantDetails.status = result.status;
        applicantDetails.statusDescription = result.statusDescription;
      },
      error => { this.alertify.error(error); this.isSubmitting = false; },
      () => { this.isSubmitting = false; });
  }


  isRatingAllowedToWorker(applicant: ApplicantReturn): boolean {
    if ((<ApplicantStatus>applicant.status === <ApplicantStatus>this.ApplicantStatusEnum.RequestAccept ||
         <ApplicantStatus>applicant.status === <ApplicantStatus>this.ApplicantStatusEnum.Accepted) &&
      (applicant.employerRating <= 0) && (applicant.jobOffer.isPassEndDate)) {
      return true;
    }
    return false;
  }


  showRatingModal(currentApplicant: ApplicantReturn) {
    const config: NgbModalOptions = {
      backdrop: 'static',
      size: 'lg',
      keyboard: false,
    };
    this.ratingModalRef = this.modalService.open(RatingTheEmployerComponent, config);
    this.ratingModalRef.componentInstance.applicantDetails = currentApplicant;
    this.ratingModalRef.componentInstance.ratingSuccessfully.subscribe((applicantReturn: ApplicantReturn) => {
      this.ratingModalRef.close();
      this.updateRatedApplicantUI(currentApplicant, applicantReturn);
    });
  }

  updateRatedApplicantUI(currentApplicant: ApplicantReturn, newApplicantReview: ApplicantReturn) {
    if (newApplicantReview) {
      currentApplicant.employerRating = newApplicantReview.employerRating;
      currentApplicant.employerRatingComment = newApplicantReview.employerRatingComment;
    }
  }


}
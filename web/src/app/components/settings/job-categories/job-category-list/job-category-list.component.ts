import { Component, OnInit } from '@angular/core';
import { NgbModalRef, NgbModal, NgbModalOptions, NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { AlertifyService, ConfirmResult } from 'src/app/_helpers/Alertify';
import { enterItem } from 'src/app/_helpers/animations/enter-leave';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { QueryStringBuilder } from 'src/app/_helpers/url/query-string-builder';
import { Column, Pagination, PaginationResult } from 'src/app/_models/data/Pagination';
import { JobCategory } from 'src/app/_models/settings/job-category';
import { JobCategoriesService } from 'src/app/_services/settings/job-categories.service';
import { CreateJobCategoryComponent } from '../create-job-category/create-job-category.component';
import { ModifyJobCategoryComponent } from '../modify-job-category/modify-job-category.component';

@Component({
  selector: 'app-job-category-list',
  templateUrl: './job-category-list.component.html',
  styleUrls: [],
  animations: [enterItem]
})
export class JobCategoryListComponent implements OnInit {
	addModalRef: NgbModalRef | null;
	edtModalRef: NgbModalRef | null;
	isLoadingData = true;
	jobCategories: JobCategory[];
	columns: Column[] = <Column[]> [
		{title: '' , align: 'center', key: 'id'},
		{title: this.appTranslation.get('JobCategories.Icon'), align: 'center', key: 'icon'},
		{title: this.appTranslation.get('JobCategories.ArName'), align: 'center', key: 'arName'},
		{title: this.appTranslation.get('JobCategories.EnName'), align: 'center', key: 'enName'},
		{title: this.appTranslation.get('JobCategories.IsEnabled'), align: 'center', key: 'isEnabled'},
		{title: this.appTranslation.get('JobCategories.UpdatedBy'), align: 'center', key: 'updatedBy'},
		{}
	];
	entityCaption: string;
	private readonly PAGE_SIZE = 10;
	query: Pagination = <Pagination>{ pageSize: this.PAGE_SIZE };


	constructor(private appTranslation: AppTranslationService,
		private alertify: AlertifyService,
		private modalService: NgbModal,
		private jobCategoriesService: JobCategoriesService,
		private queryStringBuilder: QueryStringBuilder<Pagination>) {

		queryStringBuilder.getQueryParams(this.query);
	}

	ngOnInit(): void {
		this.getAllJobCategories();
		this.entityCaption = this.appTranslation.get(this.appTranslation.get('JobCategories.jobCategoryCaption'));
	}



	showJobCategoryAddModal() {
		const config: NgbModalOptions = {
			backdrop: 'static',
			size: 'lg',
			keyboard: false,
		};
		this.addModalRef = this.modalService.open(CreateJobCategoryComponent, config);
		this.addModalRef.componentInstance.addSuccessfully.subscribe((newJobCategory: JobCategory) => {
			this.addNewJobCategoryToJobCategoriesList(newJobCategory);
			this.addModalRef.close();
		});
	}
	
	addNewJobCategoryToJobCategoriesList(newJobCategory: JobCategory) {
		if (newJobCategory) {
			this.jobCategories.unshift(newJobCategory);
		}
	}
	
	changeJobCategoryStatus(jobCategory: any, checkboxInput: any) {
		this.jobCategoriesService.changeJobCategoryStatus(jobCategory.id, checkboxInput.currentTarget.checked).subscribe(
			result => {
				this.alertify.info('تم تغيير الحالة بنجاح');
				jobCategory.isEnabled = result;
			},
			error => { this.alertify.error(error); }
		);
	}
	async removeJobCategory(id: number) {
		const confirm = await this.alertify.promisifyConfirm(`تنبيه على أنت على وشك حذف سجل`, `هل أنت متأكد من الحذف؟`);
		if (confirm === ConfirmResult.Ok) {
			this.jobCategoriesService.removeJobCategory(id).subscribe(
				() => {
					this.alertify.info('تم الحذف بنجاح');
					this.jobCategories.splice(this.jobCategories.findIndex(e => e.id === id), 1);
				},
				error => { this.alertify.error(error); }
			);
		}
	}
	getAllJobCategories() {
		this.queryStringBuilder.setQueryParams(this.query);
		this.isLoadingData = true;
		this.jobCategoriesService.getPagedJobCategories(this.query).subscribe((res: PaginationResult<JobCategory[]>) => {
			this.jobCategories = res.items;
			this.query = res.pagination;
		},
			error => {this.alertify.error(this.appTranslation.getWithValue('Common.Data.errorGettingData', this.entityCaption)); this.isLoadingData = false; },
			() => { this.isLoadingData = false; }
		);
	}
	onFilterChange() {
		this.query.pageNumber = 1;
		this.query.refreshCounter = true;
		this.getAllJobCategories();
	}
	
	resetFilter() {
		this.query = <Pagination>{
			pageNumber: 1,
			refreshCounter: true,
			pageSize: this.PAGE_SIZE,
			filterText: ''
	};
		this.getAllJobCategories();
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
		this.getAllJobCategories();
	}
	
	onPageChange(event: any) {
			this.query.pageNumber = event;
			this.getAllJobCategories();
	}

	
	getJobCategoryToEdit(currentJobCategory: JobCategory) {
		this.jobCategoriesService.getJobCategory(currentJobCategory.id).subscribe(
			(result: JobCategory) => {
				this.showJobCategoryEditModal(currentJobCategory, result);
			},
			error => this.alertify.error(this.appTranslation.getWithValue('Common.Data.errorGettingData', this.entityCaption))
		);
	}
	
	
	showJobCategoryEditModal(currentJobCategory: JobCategory, apiJobCategory: JobCategory) {
		const config: NgbModalOptions = {
			backdrop: 'static',
			size: 'lg',
			keyboard: false,
		};
		this.edtModalRef = this.modalService.open(ModifyJobCategoryComponent, config);
		this.edtModalRef.componentInstance.jobCategory= apiJobCategory;
		this.edtModalRef.componentInstance.updatedSuccessfully.subscribe((updatedJobCategory: JobCategory) => {
			this.applyChangedJobCategory(currentJobCategory, updatedJobCategory);
			this.edtModalRef.close();
		});
	}
	
	
	applyChangedJobCategory(currentJobCategory: JobCategory, updatedJobCategory: JobCategory) {
	    if (updatedJobCategory) {
	      Object.assign(currentJobCategory, updatedJobCategory);
	    }
	}
	
	
	toggleMoreInfo(popover: NgbPopover, vJobCategory: JobCategory) {
		if (popover.isOpen()) { popover.close(); } else {
		popover.placement = 'auto';
		popover.open({ vJobCategory });
		}
	}

}
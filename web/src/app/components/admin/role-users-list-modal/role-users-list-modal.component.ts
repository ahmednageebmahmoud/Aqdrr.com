import { Component, OnInit, Optional, Input } from '@angular/core';
import { BaseUserInfo } from 'src/app/_models/Users/User';
import { AdminService } from 'src/app/_services/users/admin.service';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { Role } from 'src/app/_models/Users/role';
import { PaginationResult } from 'src/app/_models/data/Pagination';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-role-users-list-modal',
  templateUrl: './role-users-list-modal.component.html',
  styleUrls: []
})
export class RoleUsersListModalComponent implements OnInit {
  @Input() showAsModal: boolean = false;
  @Input() showModalButton: boolean = false;
  
  users: BaseUserInfo[];
  selectedRole: Role;
  entityName: string;
  /* -------------------------------------------*/
  private readonly PAGE_SIZE = 15;
  queryResult: any = {};
  query: any = { pageSize: this.PAGE_SIZE };
  columns = [
    { title: '#', align: 'center', key: 'id', isSortable: true, style: 'd-none d-sm-table-cell' },
    { title: 'إسم المستخدم', align: 'center', key: 'userName', isSortable: true, style: 'd-none d-sm-table-cell' },
    { title: 'الاسم', align: 'center', key: 'fullName', isSortable: true },
    { title: '' },
  ];

  constructor(private appTranslation: AppTranslationService, 
    private adminService: AdminService, private alertify: AlertifyService, @Optional() public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.getUsersInRole();
    this.entityName = this.appTranslation.get('users.management.Users');
  }

  getUsersInRole() {
    this.adminService.getUsersInRole(this.selectedRole.id, this.query).subscribe((res: PaginationResult<BaseUserInfo[]>) => {
      this.users = res.items;
      this.query = res.pagination;
    },
      () => this.alertify.error(this.appTranslation.getWithValue('Common.Data.errorGettingData', this.entityName))
    );
  }

  onFilterChange() {
    this.query.pageNumber = 1;
    this.getUsersInRole();
  }

  resetFilter() {
    this.query = {
      pageNumber: 1,
      pageSize: this.PAGE_SIZE,
      filterText: ''
    };
    this.getUsersInRole();
  }

  sortBy(columnName) {
    if (this.query.sortBy === columnName) {
      this.query.isSortAscending = !this.query.isSortAscending;
    } else {
      this.query.sortBy = columnName;
      this.query.isSortAscending = true;
    }
    this.getUsersInRole();
  }

  onPageChange(event: any) {
    this.query.pageNumber = event;
    this.getUsersInRole();
  }

  removeUserFromRole(user: BaseUserInfo) {
    this.adminService.removeUserFromRole(this.selectedRole.id, user.id).subscribe(() => {
      this.alertify.success(this.appTranslation.get('roles.management.RemoveUserFromRole'));
      this.selectedRole.usersCount -= 1;
      this.users.splice(this.users.findIndex(u => u.id == user.id), 1);
    },
      () => this.alertify.error(this.appTranslation.get('Common.Messages.ErrorOnAction'))
    );
  }

}

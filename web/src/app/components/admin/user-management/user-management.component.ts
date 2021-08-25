import { Component, OnInit } from '@angular/core';
import { User, UserWithRoles } from 'src/app/_models/Users/User';
import { AdminService } from 'src/app/_services/users/admin.service';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { RolesModalComponent } from '../roles-modal/roles-modal.component';
import { AccountService } from 'src/app/_services/users/account.service';
import { Role } from 'src/app/_models/Users/role';
import { PaginationResult } from 'src/app/_models/data/Pagination';
import { AppTranslationService } from 'src/app/_helpers/app-translation';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: []
})
export class UserManagementComponent implements OnInit {
  users: UserWithRoles[];
  bsModalRef: NgbModalRef | null;
  availableRoles: Role[];
  entityName: string;
  /* -------------------------------------------*/
  private readonly PAGE_SIZE = 20;
  queryResult: any = {};
  query: any = { pageSize: this.PAGE_SIZE };
  columns = [
    { title: '#', align: 'center', key: 'id', isSortable: true },
    { title: 'إسم المستخدم', align: 'center', key: 'userName', isSortable: true },
    { title: 'الاسم', align: 'center', key: 'arFullName', isSortable: true },
    { title: 'الصلاحيات', align: 'center' },
    { title: '' },
  ];

  constructor(private appTranslation: AppTranslationService, private adminService: AdminService, private accountService: AccountService,
    private alertify: AlertifyService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getUsersWithRoles();
    this.entityName = this.appTranslation.get('users.management.Users');
  }

  getUsersWithRoles() {
    this.adminService.getUsersWithRoles(this.query).subscribe((res: PaginationResult<UserWithRoles[]>) => {
      this.users = res.items;
      this.query = res.pagination;
    },
      error => this.alertify.error(this.appTranslation.getWithValue('Common.Data.errorGettingData', this.entityName))
    );
  }

  onFilterChange() {
    this.query.pageNumber = 1;
    this.getUsersWithRoles();
  }

  resetFilter() {
    this.query = {
      pageNumber: 1,
      pageSize: this.PAGE_SIZE,
      filterText: ''
    };
    this.getUsersWithRoles();
  }

  sortBy(columnName) {
    if (this.query.sortBy === columnName) {
      this.query.isSortAscending = !this.query.isSortAscending;
    } else {
      this.query.sortBy = columnName;
      this.query.isSortAscending = true;
    }
    this.getUsersWithRoles();
  }

  onPageChange(event: any) {
    this.query.pageNumber = event;
    this.getUsersWithRoles();
  }

  editRolesModal(user: UserWithRoles) {
    const roles = [];
    const currentUserRoles = Array.from(user.userRoles).map(r => r.name) as any[];
    this.accountService.getRoles().subscribe(
      results => {
        this.availableRoles = results;
        this.availableRoles.forEach(aRole => {
          if (currentUserRoles.indexOf(aRole.name) >= 0) {
            roles.push({
              name: (aRole.description === null || aRole.description === '') ? aRole.name : aRole.description,
              value: aRole.name, checked: true
            });
          } else {
            roles.push({
              name: (aRole.description === null || aRole.description === '') ? aRole.name : aRole.description,
              value: aRole.name, checked: false
            });
          }
        });
        this.showModalWithRoles(user, roles);
      },
      error => {
        this.alertify.error(error);
        return null;
      }
    );
  }

  showModalWithRoles(user: UserWithRoles, roles: any[]) {
    const config: NgbModalOptions = {
      backdrop: 'static',
      size: 'lg',
      keyboard: false,
    };
    this.bsModalRef = this.modalService.open(RolesModalComponent,  config );
    this.bsModalRef.componentInstance.user = user;
    this.bsModalRef.componentInstance.roles = roles;
    this.bsModalRef.componentInstance.updateSelectedRoles.subscribe(selectedRole => {
      const roleToUpdate = {
        updatedRoles: [...selectedRole // (...) is the same for each
          .filter(el => el.checked === true) // condation (el.checked === true)
          .map(el => ({ 'name': el.value, 'description': el.name }))],
          // return Value (el.value) Admin Or moderator ...etc
          roleNames: [...selectedRole.filter(el => el.checked === true).map(el => el.value )]
      };
      if (roleToUpdate) {
        this.adminService.updateUserRoles(user.userName, roleToUpdate).subscribe(
          () => {user.userRoles = [...roleToUpdate.updatedRoles];},
          error => this.alertify.error(error)
        );
      }
    });
  }

}

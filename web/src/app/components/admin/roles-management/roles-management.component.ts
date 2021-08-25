import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/_models/Users/role';
import { AccountService } from 'src/app/_services/users/account.service';
import { AlertifyService } from 'src/app/_helpers/Alertify';
import { Permission } from 'src/app/_models/Users/permission.model';
import { PermissionsModalComponent } from '../permissions-modal/permissions-modal.component';
import { RoleUsersListModalComponent } from '../role-users-list-modal/role-users-list-modal.component';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-roles-management',
  templateUrl: './roles-management.component.html',
  styleUrls: []
})
export class RolesManagementComponent implements OnInit {
  roles: Role[];
  private roleEdit: Role = new Role();
  allPermissions: Permission[];
  bsModalRef: NgbModalRef | null;
  bsRoleUsersListModal: NgbModalRef | null;
  isNewRole = true;
  constructor(private accountService: AccountService,
    private alertify: AlertifyService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getRolesWithPermissions();
  }

  getRolesWithPermissions() {
    this.accountService.getRolesAndPermissions().subscribe(
      results => {
        this.roles = results[0];
        this.allPermissions = results[1];
        this.alertify.success('تم تحديث البيانات بنجاح');
      },
      error => {
        this.alertify.error('حدثت مشكلة في جلب الصلاحيات');
      }
    );
  }

  addNewRole() {
    const newRoles = new Role();
    this.isNewRole = true;
    const permissionList = [];
    this.allPermissions.forEach(aPer => {
      permissionList.push({
        name: aPer.name, groupName: aPer.groupName,
        description: aPer.description, value: aPer.value, checked: false
      });
    });
    this.showModalWithRoles(newRoles, permissionList);
  }

  editPermissionsModal(role: Role) {
    this.isNewRole = false;
    const permissionList = [];
    const currentRolePermissions = role.permissions as Permission[];
    const currentRolePermissionValues = [...currentRolePermissions.map(el => el.value)];
    this.allPermissions.forEach(aPer => {
      if (currentRolePermissionValues.indexOf(aPer.value) >= 0) {
        permissionList.push({
          name: aPer.name, groupName: aPer.groupName,
          description: aPer.description, value: aPer.value, checked: true
        });
      } else {
        permissionList.push({
          name: aPer.name, groupName: aPer.groupName,
          description: aPer.description, value: aPer.value, checked: false
        });
      }
    });
    this.showModalWithRoles(role, permissionList);
  }

  showModalWithRoles(role: Role, permissions: Permission[]) {
    const config: NgbModalOptions = {
      backdrop: 'static',
      size: 'lg',
      keyboard: false,
    };
    this.roleEdit = role;
    this.bsModalRef = this.modalService.open(PermissionsModalComponent, config);
    this.bsModalRef.componentInstance.role = role;
    this.bsModalRef.componentInstance.permissions = permissions;
    this.bsModalRef.componentInstance.updateSelectedRole.subscribe((tempRole: Role) => {
      if (this.isNewRole) {
        this.accountService.newRole(tempRole).subscribe(role => this.saveSuccessHelper(role), error => this.saveFailedHelper(error));
      } else {
        this.accountService.updateRole(tempRole).subscribe(
          response => this.saveSuccessHelper(tempRole),
          error => this.saveFailedHelper(error));
      }
    });
  }

  private saveSuccessHelper(role?: Role) {
    if (role) {
      if (this.isNewRole) {
        this.roles.push(role);
        this.alertify.success(`Role ${this.roleEdit.name} was created successfully`);
      } else {
        Object.assign(this.roleEdit, role);
        this.alertify.success(`Changes to role ${this.roleEdit.name} was saved successfully`);
      }
    } else {
      this.alertify.error(`No selected role or new to save`);
    }
    this.roleEdit = new Role();
  }

  private saveFailedHelper(error: any) {
    this.alertify.error(error);
  }

  showUsersListInSelectedRole(role: Role) {
    const config: NgbModalOptions = {
      backdrop: 'static',
      size: 'lg',
      keyboard: false,
    };
    this.bsRoleUsersListModal = this.modalService.open(RoleUsersListModalComponent, config);
    this.bsRoleUsersListModal.componentInstance.showAsModal = true;
    this.bsRoleUsersListModal.componentInstance.selectedRole = role;
  }



}

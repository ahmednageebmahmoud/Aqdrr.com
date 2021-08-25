import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';

// Components
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { RolesManagementComponent } from './roles-management/roles-management.component';
import { RoleUsersListModalComponent } from './role-users-list-modal/role-users-list-modal.component';
import { PermissionsModalComponent } from './permissions-modal/permissions-modal.component';
import { RolesModalComponent } from './roles-modal/roles-modal.component';



@NgModule({
  declarations: [
    AdminPanelComponent,
    UserManagementComponent,
    RolesManagementComponent,
    RoleUsersListModalComponent,
    PermissionsModalComponent,
    RolesModalComponent,
  ],
  imports: [
    SharedModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }

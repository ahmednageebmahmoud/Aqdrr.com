import { Injectable } from '@angular/core';
import { AccountService } from '../_services/users/account.service';
import { Permission } from '../_models/Users/permission.model';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  constructor(private accountService: AccountService) { }

  public get canViewUsers() { return this.accountService.userHasPermission(Permission.viewUsersPermission); }
  public get canManageUsers() { return this.accountService.userHasPermission(Permission.manageUsersPermission); }

  public get canViewRoles() { return this.accountService.userHasPermission(Permission.viewRolesPermission); }
  public get canManageRoles() { return this.accountService.userHasPermission(Permission.manageRolesPermission); }
  public get canAssignRoles() { return this.accountService.userHasPermission(Permission.assignRolesPermission); }

  public get canAddJobs() { return this.accountService.userHasPermission(Permission.addJobsPermission); }
  public get canViewJobs() { return this.accountService.userHasPermission(Permission.viewJobsPermission); }
  public get canApplyToTheJobs() { return this.accountService.userHasPermission(Permission.applyJobPermission); }
  public get canManageAppliesToTheJobs() { return this.accountService.userHasPermission(Permission.manageAppliesToTheJobs); }
  public get canManageJobs() { return this.accountService.userHasPermission(Permission.manageJobs); }

  public get canViewPortfolio() { return this.accountService.userHasPermission(Permission.portfolioView); }
  public get canManagePortfolio() { return this.accountService.userHasPermission(Permission.portfolioManage); }

  public get canAddServicesProvider() { return this.accountService.userHasPermission(Permission.addServicesProvider); }
  public get canOrderService() { return this.accountService.userHasPermission(Permission.canOrderService); }
  public get canConfirmOrDiscardOrder() { return this.accountService.userHasPermission(Permission.confirmOrDiscardOrder); }
  public get canManageOrders() { return this.accountService.userHasPermission(Permission.manageOrders); }
  public get canViewOrdersDetails() { return this.accountService.userHasPermission(Permission.viewOrdersDetails); }

	public get canCreateJobCategory() { return this.accountService.userHasPermission(Permission.createJobCategoryPermission);}
	public get canModifyJobCategory() { return this.accountService.userHasPermission(Permission.modifyJobCategoryPermission);}
	public get canViewJobCategory() { return this.accountService.userHasPermission(Permission.viewJobCategoryPermission);}
	public get canManageJobCategories() { return this.accountService.userHasPermission(Permission.manageJobCategoriesPermission);}
	public get canDeleteJobCategory() { return this.accountService.userHasPermission(Permission.deleteJobCategoryPermission);}

  public get canManageTickets() { return this.accountService.userHasPermission(Permission.manageTicketsPermission);}
  public get canManageSubscriptionPackages() { return this.accountService.userHasPermission(Permission.manageSubscriptionPackagesPermission);}

  public get canCreateInvoice() { return this.accountService.userHasPermission(Permission.createInvoicePermission);}
	public get canViewInvoice() { return this.accountService.userHasPermission(Permission.viewInvoicePermission);}
	public get canManageInvoices() { return this.accountService.userHasPermission(Permission.manageInvoicesPermission);}
}

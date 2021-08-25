export type PermissionNames =
  'View Users' | 'Manage Users' |
  'View Roles' | 'Manage Roles' | 'Assign Roles' |
  'Add new Jobs' | 'view Jobs' | 'Can apply to jobs' | 'Can approval or rejection apply' | 'Manage Jobs' |
  'View portfolio' | 'Manage portfolio' |
  'Create New Service' | 'Can Order Service' | 'Confirm or discard order' | 'Manage Orders' | 'View Orders Details' |
  'Create job category' | 'Modify job category' | 'View job category' | 'Manage job categories' | 'Delete job category' |
  'Manage All tickets' | 'Manage All subscription packages' |
  'Create invoice' | 'View invoice' | 'Manage All invoices'
  ;

export type PermissionValues =
  'users.view' | 'users.manage' |
  'roles.view' | 'roles.manage' | 'roles.assign' |
  'jobs.add' | 'jobs.view' | 'jobs.apply' | 'jobs.approvalRejection' | 'jobs.manageJobs' |
  'portfolio.view' | 'portfolio.manage' |
  'servicesProvider.add' | 'servicesProvider.canOrder' | 'servicesProvider.confirmOrDiscard' | 'servicesProvider.manageOrders' | 'servicesProvider.view' |
  'jobCategory.create' | 'jobCategory.modify' | 'jobCategory.view' | 'jobCategory.manage' | 'jobCategory.delete' |
  'ticket.manage' |  'subscriptionPackage.manage' |
  'invoice.create' | 'invoice.view' | 'invoice.manage'
  ;

export class Permission {

  public static readonly viewUsersPermission: PermissionValues = 'users.view';
  public static readonly manageUsersPermission: PermissionValues = 'users.manage';

  public static readonly viewRolesPermission: PermissionValues = 'roles.view';
  public static readonly manageRolesPermission: PermissionValues = 'roles.manage';
  public static readonly assignRolesPermission: PermissionValues = 'roles.assign';

  public static readonly addJobsPermission: PermissionValues = 'jobs.add';
  public static readonly viewJobsPermission: PermissionValues = 'jobs.view';
  public static readonly applyJobPermission: PermissionValues = 'jobs.apply';
  public static readonly manageAppliesToTheJobs: PermissionValues = 'jobs.approvalRejection';
  public static readonly manageJobs: PermissionValues = 'jobs.manageJobs';

  public static readonly portfolioView: PermissionValues = 'portfolio.view';
  public static readonly portfolioManage: PermissionValues = 'portfolio.manage';

  public static readonly addServicesProvider: PermissionValues = 'servicesProvider.add';
  public static readonly canOrderService: PermissionValues = 'servicesProvider.canOrder';
  public static readonly confirmOrDiscardOrder: PermissionValues = 'servicesProvider.confirmOrDiscard';
  public static readonly manageOrders: PermissionValues = 'servicesProvider.manageOrders';
  public static readonly viewOrdersDetails: PermissionValues = 'servicesProvider.view';

	public static readonly createJobCategoryPermission: PermissionValues = 'jobCategory.create';
	public static readonly modifyJobCategoryPermission: PermissionValues = 'jobCategory.modify';
	public static readonly viewJobCategoryPermission: PermissionValues = 'jobCategory.view';
	public static readonly manageJobCategoriesPermission: PermissionValues = 'jobCategory.manage';
  public static readonly deleteJobCategoryPermission: PermissionValues = 'jobCategory.delete';

  public static readonly manageTicketsPermission: PermissionValues = 'ticket.manage';
	public static readonly manageSubscriptionPackagesPermission: PermissionValues = 'subscriptionPackage.manage';

  public static readonly createInvoicePermission: PermissionValues = 'invoice.create';
	public static readonly viewInvoicePermission: PermissionValues = 'invoice.view';
	public static readonly manageInvoicesPermission: PermissionValues = 'invoice.manage';

  constructor(name?: PermissionNames, value?: PermissionValues, groupName?: string, description?: string) {
    this.name = name;
    this.value = value;
    this.groupName = groupName;
    this.description = description;
  }

  public name: PermissionNames;
  public value: PermissionValues;
  public groupName: string;
  public description: string;

}



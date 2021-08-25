"use strict";
(self["webpackChunkpart_time_app_spa"] = self["webpackChunkpart_time_app_spa"] || []).push([["src_app_components_admin_admin_module_ts"],{

/***/ 72796:
/*!***************************************!*\
  !*** ./src/app/_models/Users/role.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Role": function() { return /* binding */ Role; }
/* harmony export */ });
class Role {
    constructor(name, description, permissions) {
        this.name = name;
        this.description = description;
        this.permissions = permissions;
    }
}


/***/ }),

/***/ 4121:
/*!**************************************************!*\
  !*** ./src/app/_services/users/admin.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminService": function() { return /* binding */ AdminService; }
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _utilities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities.service */ 72569);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 53882);




class AdminService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ApiUrl + 'admin/';
    }
    getUsersWithRoles(query) {
        return _utilities_service__WEBPACK_IMPORTED_MODULE_1__.Utilities.getPaginationResult(this.http, this.baseUrl + 'usersWithRoles', query);
    }
    getUsersInRole(roleId, query) {
        return _utilities_service__WEBPACK_IMPORTED_MODULE_1__.Utilities.getPaginationResult(this.http, `${this.baseUrl}Role/${roleId}/Users`, query);
    }
    updateUserRoles(userName, roles) {
        return this.http.post(`${this.baseUrl}editRoles/${userName}`, roles);
    }
    getPhotosForApproval() {
        return this.http.get(this.baseUrl + 'photosForModeration');
    }
    approvePhoto(photoId) {
        return this.http.post(this.baseUrl + 'approvePhoto/' + photoId, {});
    }
    rejectPhoto(photoId) {
        return this.http.post(this.baseUrl + 'rejectPhoto/' + photoId, {});
    }
    removeUserFromRole(roleId, userId) {
        return this.http.delete(`${this.baseUrl}Roles/${roleId}/Users/${userId}`);
    }
}
AdminService.ɵfac = function AdminService_Factory(t) { return new (t || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
AdminService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AdminService, factory: AdminService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 43914:
/*!***********************************************************************!*\
  !*** ./src/app/components/admin/admin-panel/admin-panel.component.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPanelComponent": function() { return /* binding */ AdminPanelComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user-management/user-management.component */ 85555);
/* harmony import */ var _roles_management_roles_management_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../roles-management/roles-management.component */ 20467);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 70325);





const _c0 = function () { return ["/profile"]; };
class AdminPanelComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminPanelComponent.ɵfac = function AdminPanelComponent_Factory(t) { return new (t || AdminPanelComponent)(); };
AdminPanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AdminPanelComponent, selectors: [["app-admin-panel"]], decls: 24, vars: 5, consts: [["id", "breadcrumbs", 1, "breadcrumbs"], [1, "container"], [1, "d-flex", "justify-content-between", "align-items-center"], [3, "routerLink"], ["id", "profile", 1, "content"], [1, "container-fluid"], [1, "col-md-12"], ["id", "user-tab", "role", "tablist", 1, "nav", "nav-tabs"], [1, "nav-item"], ["id", "user-management-tab", "data-toggle", "tab", "href", "#user-management", "role", "tab", "aria-controls", "user-management", "aria-selected", "true", 1, "nav-link", "active"], ["id", "roles-management-tab", "data-toggle", "tab", "href", "#roles-management", "role", "tab", "aria-controls", "roles-management", "aria-selected", "false", 1, "nav-link"], ["id", "myTabContent", 1, "tab-content", "p-2"], ["id", "user-management", "role", "tabpanel", "aria-labelledby", "user-management-tab", 1, "tab-pane", "fade", "show", "active"], ["id", "roles-management", "role", "tabpanel", "aria-labelledby", "roles-management-tab", 1, "tab-pane", "fade"]], template: function AdminPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "article", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0627\u062A");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "app-user-management");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "app-roles-management");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 2, "Portfolios.portfolio"));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_0__.UserManagementComponent, _roles_management_roles_management_component__WEBPACK_IMPORTED_MODULE_1__.RolesManagementComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 18955:
/*!**********************************************************!*\
  !*** ./src/app/components/admin/admin-routing.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminRoutingModule": function() { return /* binding */ AdminRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-panel/admin-panel.component */ 43914);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);

//components



const routes = [
    { path: '', component: _admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_0__.AdminPanelComponent, data: { title: 'sideMenu.Admin' } },
];
class AdminRoutingModule {
}
AdminRoutingModule.ɵfac = function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); };
AdminRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AdminRoutingModule });
AdminRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 81100:
/*!**************************************************!*\
  !*** ./src/app/components/admin/admin.module.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminModule": function() { return /* binding */ AdminModule; }
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 4065);
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-routing.module */ 18955);
/* harmony import */ var _admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-panel/admin-panel.component */ 43914);
/* harmony import */ var _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-management/user-management.component */ 85555);
/* harmony import */ var _roles_management_roles_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./roles-management/roles-management.component */ 20467);
/* harmony import */ var _role_users_list_modal_role_users_list_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./role-users-list-modal/role-users-list-modal.component */ 14295);
/* harmony import */ var _permissions_modal_permissions_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./permissions-modal/permissions-modal.component */ 99334);
/* harmony import */ var _roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./roles-modal/roles-modal.component */ 76143);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);


// Components







class AdminModule {
}
AdminModule.ɵfac = function AdminModule_Factory(t) { return new (t || AdminModule)(); };
AdminModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_1__.AdminRoutingModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_2__.AdminPanelComponent,
        _user_management_user_management_component__WEBPACK_IMPORTED_MODULE_3__.UserManagementComponent,
        _roles_management_roles_management_component__WEBPACK_IMPORTED_MODULE_4__.RolesManagementComponent,
        _role_users_list_modal_role_users_list_modal_component__WEBPACK_IMPORTED_MODULE_5__.RoleUsersListModalComponent,
        _permissions_modal_permissions_modal_component__WEBPACK_IMPORTED_MODULE_6__.PermissionsModalComponent,
        _roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_7__.RolesModalComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _admin_routing_module__WEBPACK_IMPORTED_MODULE_1__.AdminRoutingModule] }); })();


/***/ }),

/***/ 99334:
/*!***********************************************************************************!*\
  !*** ./src/app/components/admin/permissions-modal/permissions-modal.component.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PermissionsModalComponent": function() { return /* binding */ PermissionsModalComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_models_Users_role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_models/Users/role */ 72796);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _pipes_group_by_pipe_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_pipes/group-by-pipe.pipe */ 34402);








function PermissionsModalComponent_ng_template_28_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function PermissionsModalComponent_ng_template_28_div_4_Template_input_change_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const permission_r6 = restoredCtx.$implicit; return permission_r6.checked = !permission_r6.checked; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const permission_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("name", "checkboxes-", permission_r6.value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "checkboxes-", permission_r6.value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", permission_r6.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", permission_r6.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("for", "checkboxes-", permission_r6.value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](permission_r6.name);
} }
function PermissionsModalComponent_ng_template_28_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 33);
} }
function PermissionsModalComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PermissionsModalComponent_ng_template_28_Template_label_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const permissionGroup_r2 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.toggleGroup(permissionGroup_r2.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, PermissionsModalComponent_ng_template_28_div_4_Template, 4, 6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, PermissionsModalComponent_ng_template_28_div_5_Template, 1, 0, "div", 29);
} if (rf & 2) {
    const permissionGroup_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](permissionGroup_r2.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", permissionGroup_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (i_r3 + 1) % 2 === 0);
} }
class PermissionsModalComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.updateSelectedRole = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.tempRole = new src_app_models_Users_role__WEBPACK_IMPORTED_MODULE_0__.Role();
    }
    ngOnInit() {
        Object.assign(this.tempRole, this.role);
    }
    toggleGroup(groupName) {
        this.permissions.forEach(p => {
            if (p.groupName !== groupName) {
                return;
            }
        });
    }
    selectAll() {
        this.permissions.forEach(p => p.checked = true);
    }
    selectNone() {
        this.permissions.forEach(p => p.checked = false);
    }
    updateTheRole() {
        this.tempRole.permissions = [...this.permissions.filter(el => el.checked === true)];
        this.updateSelectedRole.emit(this.tempRole);
        this.activeModal.dismiss();
    }
}
PermissionsModalComponent.ɵfac = function PermissionsModalComponent_Factory(t) { return new (t || PermissionsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbActiveModal)); };
PermissionsModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PermissionsModalComponent, selectors: [["app-permissions-modal"]], outputs: { updateSelectedRole: "updateSelectedRole" }, decls: 48, vars: 19, consts: [[1, "modal-header"], [1, "modal-title"], ["aria-hidden", "true", 1, "fa", "fa-shield"], [1, "modal-body"], ["id", "rolesForm"], ["rolesForm", "ngForm"], [1, "row"], [1, "col-sm-5"], [1, "form-group", "row", "has-feedback-icon"], ["for", "roleName", 1, "col-form-label", "col-md-3"], [1, "col-md-9"], ["type", "text", "id", "roleName", "name", "roleName", "placeholder", "Enter role name", "required", "", "minlength", "2", "maxlength", "200", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-sm-7"], [1, "form-group", "row"], ["for", "roleDescription", 1, "col-form-label", "col-md-3"], ["type", "text", "id", "roleDescription", "name", "roleDescription", "placeholder", "Enter role description", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-12"], [1, "edit-separator-hr"], [1, "col-sm-12", "card", "card-body", "bg-light", "well-sm", "permissionsRow"], ["ngFor", "", 3, "ngForOf"], [1, "modal-footer"], ["href", "javascript:;", 1, "btn", "btn-link", 3, "click"], [1, ""], ["type", "button", "form", "rolesForm", 1, "btn", "btn-default", 3, "click"], ["type", "button", 1, "btn", "btn-default", 3, "click"], [1, "form-group", "row", "col-sm-6", "permissionsColumn"], ["for", "checkboxes", 1, "col-md-5", "col-form-label", "group-name", 3, "click"], [1, "col-md-7"], ["class", "animated-checkbox", 4, "ngFor", "ngForOf"], ["class", "clearfix", 4, "ngIf"], [1, "animated-checkbox"], ["type", "checkbox", "value", "permission.value", 1, "", 3, "name", "id", "checked", "change"], [1, "label-text", 3, "title", "for"], [1, "clearfix"]], template: function PermissionsModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PermissionsModalComponent_Template_input_ngModelChange_14_listener($event) { return ctx.tempRole.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PermissionsModalComponent_Template_input_ngModelChange_21_listener($event) { return ctx.tempRole.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "hr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, PermissionsModalComponent_ng_template_28_Template, 6, 3, "ng-template", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "groupBy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PermissionsModalComponent_Template_a_click_32_listener() { return ctx.selectAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PermissionsModalComponent_Template_a_click_36_listener() { return ctx.selectNone(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PermissionsModalComponent_Template_button_click_42_listener() { return ctx.updateTheRole(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "\u0627\u0639\u062A\u0645\u0627\u062F");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PermissionsModalComponent_Template_button_click_45_listener() { return ctx.activeModal.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "\u0625\u063A\u0644\u0627\u0642");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u062A\u0639\u062F\u064A\u0644 \u0623\u0630\u0648\u0646\u0627\u062A \u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0629 ", ctx.role.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 8, "roles.editor.Name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.tempRole.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 10, "roles.editor.Description"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.tempRole.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](29, 12, ctx.permissions, "groupName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](34, 15, "roles.editor.SelectAll"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](38, 17, "roles.editor.SelectNone"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe, _pipes_group_by_pipe_pipe__WEBPACK_IMPORTED_MODULE_1__.GroupByPipe], styles: [".role-badge[_ngcontent-%COMP%] {\n  border-radius: 5px !important;\n  margin-right: 5px;\n  background-color: #1188a4 !important;\n  color: #fff !important;\n  font-family: 'arial' !important;\n  font-size: 0.9rem !important;\n  padding: 5px;\n}\n\n[type=\"checkbox\"][_ngcontent-%COMP%]:before {\n    content: \"\";\n    position: absolute;\n    top: -1.2em;\n    width: 27px;\n    height: 25px;\n    border: 3px solid #333;\n    border-radius: 5px;\n    text-align: center;\n  }\n\n\n\n.separator-hr[_ngcontent-%COMP%] {\n    margin: 0 5px;\n    border-top-style: dashed;\n  }\n\n.edit-separator-hr[_ngcontent-%COMP%] {\n    margin: 10px 5px;\n    border-top-style: dashed;\n  }\n\n.last-separator-hr[_ngcontent-%COMP%] {\n    margin-top: 5px;\n  }\n\n.edit-last-separator-hr[_ngcontent-%COMP%] {\n    margin-top: 15px;\n  }\n\n.form-group[_ngcontent-%COMP%] {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\ninput.form-control[_ngcontent-%COMP%] {\n    border-left-width: 5px;\n  }\n\n.invalid-feedback[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n.group-name[_ngcontent-%COMP%] {\n    color: #1188a4;\n    font-weight: 500;\n  }\n\n.permissionsColumn[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n\n.permissionsRow[_ngcontent-%COMP%] {\n    margin: 0 15px;\n  }\n\n.well-sm[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n\n@media (min-width: 992px) {\n    .user-enabled[_ngcontent-%COMP%] {\n      margin-left: 40px;\n    }\n  }\n\n\n\n.animated-checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%] {\n  display: none;\n}\n\n.animated-checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%] + .label-text[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n}\n\n.animated-checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%] + .label-text[_ngcontent-%COMP%]:before {\n  content: \"\uF096\";\n  font-family: \"FontAwesome\";\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-feature-settings: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  font-size: 18px;\n  -webkit-font-smoothing: antialiased;\n  width: 1em;\n  display: inline-block;\n  margin-right: 2px;\n  vertical-align: -2px;\n}\n\n.animated-checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:checked + .label-text[_ngcontent-%COMP%]:before {\n  content: \"\uF14A\";\n  color: #1188a4;\n  -webkit-animation: tick 180ms ease-in;\n  animation: tick 180ms ease-in;\n}\n\n.animated-checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:disabled + .label-text[_ngcontent-%COMP%] {\n  cursor: not-allowed !important;\n}\n\n.animated-checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:disabled + .label-text[_ngcontent-%COMP%]:before {\n  content: \"\uF0C8\";\n  color: #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcm1pc3Npb25zLW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyxzQkFBc0I7RUFDdEIsK0JBQStCO0VBQy9CLDRCQUE0QjtFQUM1QixZQUFZO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCOztBQUVBLE1BQU07O0FBR047SUFDRSxhQUFhO0lBQ2Isd0JBQXdCO0VBQzFCOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtFQUMxQjs7QUFFQTtJQUNFLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0FBR0E7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFFQTtJQUNFLGNBQWM7SUFDZCxnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCOztBQUdBO0lBQ0UsZUFBZTtFQUNqQjs7QUFFQTtJQUNFO01BQ0UsaUJBQWlCO0lBQ25CO0VBQ0Y7O0FBRUYsc0NBQXNDOztBQUN0QztFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsNkJBQW9CO0VBQXBCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLGVBQWU7RUFDZixtQ0FBbUM7RUFDbkMsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxxQ0FBcUM7RUFDckMsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYiIsImZpbGUiOiJwZXJtaXNzaW9ucy1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvbGUtYmFkZ2Uge1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTg4YTQgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6ICdhcmlhbCcgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAwLjlyZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG5bdHlwZT1cImNoZWNrYm94XCJdOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMS4yZW07XG4gICAgd2lkdGg6IDI3cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICMzMzM7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLyog4pyUICovXG4gIFxuICBcbiAgLnNlcGFyYXRvci1ociB7XG4gICAgbWFyZ2luOiAwIDVweDtcbiAgICBib3JkZXItdG9wLXN0eWxlOiBkYXNoZWQ7XG4gIH1cbiAgIFxuICAuZWRpdC1zZXBhcmF0b3ItaHIge1xuICAgIG1hcmdpbjogMTBweCA1cHg7XG4gICAgYm9yZGVyLXRvcC1zdHlsZTogZGFzaGVkO1xuICB9XG4gIFxuICAubGFzdC1zZXBhcmF0b3ItaHIge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxuICBcbiAgLmVkaXQtbGFzdC1zZXBhcmF0b3ItaHIge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gIH1cbiAgXG4gIFxuICAuZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIFxuICBpbnB1dC5mb3JtLWNvbnRyb2wge1xuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiA1cHg7XG4gIH1cbiAgXG4gIC5pbnZhbGlkLWZlZWRiYWNrIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgLmdyb3VwLW5hbWUge1xuICAgIGNvbG9yOiAjMTE4OGE0O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgXG4gIC5wZXJtaXNzaW9uc0NvbHVtbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICBcbiAgLnBlcm1pc3Npb25zUm93IHtcbiAgICBtYXJnaW46IDAgMTVweDtcbiAgfVxuICBcbiAgXG4gIC53ZWxsLXNtIHtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gIH1cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgIC51c2VyLWVuYWJsZWQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgfVxuICB9XG4gIFxuLyogQ3VzdG9tIENoZWNrYm94IGFuZCBSYWRpbyBCdXR0b25zICovXG4uYW5pbWF0ZWQtY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmFuaW1hdGVkLWNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSsubGFiZWwtdGV4dCB7XG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xufVxuXG4uYW5pbWF0ZWQtY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdKy5sYWJlbC10ZXh0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74KWXCI7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnRBd2Vzb21lXCI7XG4gIHNwZWFrOiBub25lO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIHdpZHRoOiAxZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHZlcnRpY2FsLWFsaWduOiAtMnB4O1xufVxuXG4uYW5pbWF0ZWQtY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQrLmxhYmVsLXRleHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCLvhYpcIjtcbiAgY29sb3I6ICMxMTg4YTQ7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiB0aWNrIDE4MG1zIGVhc2UtaW47XG4gIGFuaW1hdGlvbjogdGljayAxODBtcyBlYXNlLWluO1xufVxuXG4uYW5pbWF0ZWQtY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmRpc2FibGVkKy5sYWJlbC10ZXh0IHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZCAhaW1wb3J0YW50O1xufVxuXG4uYW5pbWF0ZWQtY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmRpc2FibGVkKy5sYWJlbC10ZXh0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74OIXCI7XG4gIGNvbG9yOiAjY2NjO1xufVxuIl19 */"] });


/***/ }),

/***/ 14295:
/*!*******************************************************************************************!*\
  !*** ./src/app/components/admin/role-users-list-modal/role-users-list-modal.component.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleUsersListModalComponent": function() { return /* binding */ RoleUsersListModalComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_helpers_app_translation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_helpers/app-translation */ 4093);
/* harmony import */ var src_app_services_users_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/users/admin.service */ 4121);
/* harmony import */ var src_app_helpers_Alertify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_helpers/Alertify */ 99771);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 70325);








function RoleUsersListModalComponent_ng_container_0_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", ctx_r3.selectedRole.description);
} }
function RoleUsersListModalComponent_ng_container_0_ng_template_11_Template(rf, ctx) { }
function RoleUsersListModalComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RoleUsersListModalComponent_ng_container_0_button_1_Template, 2, 1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RoleUsersListModalComponent_ng_container_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.activeModal.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, RoleUsersListModalComponent_ng_container_0_ng_template_11_Template, 0, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RoleUsersListModalComponent_ng_container_0_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.activeModal.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.showModalButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u00A0", ctx_r0.selectedRole.description, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 4, "Common.Form.Close"));
} }
function RoleUsersListModalComponent_ng_template_1_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 1, "Common.Data.Loading"), "");
} }
function RoleUsersListModalComponent_ng_template_1_th_17_div_1_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 40);
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("fa-sort-asc", ctx_r19.query.isSortAscending)("fa-sort-desc", !ctx_r19.query.isSortAscending);
} }
function RoleUsersListModalComponent_ng_template_1_th_17_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RoleUsersListModalComponent_ng_template_1_th_17_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const c_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r20.sortBy(c_r16.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, RoleUsersListModalComponent_ng_template_1_th_17_div_1_i_2_Template, 1, 4, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("align-middle text-", c_r16.align, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", c_r16.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r17.query.sortBy === c_r16.key);
} }
function RoleUsersListModalComponent_ng_template_1_th_17_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("align-middle text-", c_r16.align, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", c_r16.title, " ");
} }
function RoleUsersListModalComponent_ng_template_1_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RoleUsersListModalComponent_ng_template_1_th_17_div_1_Template, 3, 5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, RoleUsersListModalComponent_ng_template_1_th_17_div_2_Template, 2, 4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](c_r16.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", c_r16.isSortable);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !c_r16.isSortable);
} }
const _c0 = function (a0) { return { "value": a0 }; };
function RoleUsersListModalComponent_ng_template_1_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 1, "Common.Messages.NotFoundAnyRecord", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 4, "users.management.User"))));
} }
function RoleUsersListModalComponent_ng_template_1_tr_25_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RoleUsersListModalComponent_ng_template_1_tr_25_Template_button_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27); const user_r25 = restoredCtx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r26.removeUserFromRole(user_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](user_r25.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](user_r25.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](user_r25.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 4, "Common.CRUD.Remove"));
} }
function RoleUsersListModalComponent_ng_template_1_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "\u00AB");
} }
function RoleUsersListModalComponent_ng_template_1_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "\u2039");
} }
function RoleUsersListModalComponent_ng_template_1_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "\u00BB");
} }
function RoleUsersListModalComponent_ng_template_1_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "\u203A");
} }
function RoleUsersListModalComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, RoleUsersListModalComponent_ng_template_1_p_0_Template, 5, 3, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RoleUsersListModalComponent_ng_template_1_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r28.query.filterText = $event; })("keyup.esc", function RoleUsersListModalComponent_ng_template_1_Template_input_keyup_esc_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r30.resetFilter(); })("keyup.enter", function RoleUsersListModalComponent_ng_template_1_Template_input_keyup_enter_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r31.onFilterChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RoleUsersListModalComponent_ng_template_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r32.resetFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RoleUsersListModalComponent_ng_template_1_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r33.resetFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "table", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "thead", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, RoleUsersListModalComponent_ng_template_1_th_17_Template, 3, 5, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "tfoot");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, RoleUsersListModalComponent_ng_template_1_tr_24_Template, 5, 8, "tr", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, RoleUsersListModalComponent_ng_template_1_tr_25_Template, 11, 6, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "ngb-pagination", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("pageChange", function RoleUsersListModalComponent_ng_template_1_Template_ngb_pagination_pageChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r34.query.pageNumber = $event; })("pageChange", function RoleUsersListModalComponent_ng_template_1_Template_ngb_pagination_pageChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r35.onPageChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, RoleUsersListModalComponent_ng_template_1_ng_template_27_Template, 1, 0, "ng-template", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, RoleUsersListModalComponent_ng_template_1_ng_template_28_Template, 1, 0, "ng-template", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, RoleUsersListModalComponent_ng_template_1_ng_template_29_Template, 1, 0, "ng-template", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, RoleUsersListModalComponent_ng_template_1_ng_template_30_Template, 1, 0, "ng-template", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r2.users);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 16, "Common.Data.SearchTip"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r2.query.filterText);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 18, "Common.Data.Reset"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 20, "Common.Data.Refresh"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](22, 22, "Common.Data.ResultsFound"), " [ ", ctx_r2.query.totalItems || "0", " ] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx_r2.users == null ? null : ctx_r2.users.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.users);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("boundaryLinks", true)("pageSize", ctx_r2.query.pageSize)("collectionSize", ctx_r2.query.totalItems)("page", ctx_r2.query.pageNumber)("maxSize", 5)("rotate", true);
} }
class RoleUsersListModalComponent {
    constructor(appTranslation, adminService, alertify, activeModal) {
        this.appTranslation = appTranslation;
        this.adminService = adminService;
        this.alertify = alertify;
        this.activeModal = activeModal;
        this.showAsModal = false;
        this.showModalButton = false;
        /* -------------------------------------------*/
        this.PAGE_SIZE = 15;
        this.queryResult = {};
        this.query = { pageSize: this.PAGE_SIZE };
        this.columns = [
            { title: '#', align: 'center', key: 'id', isSortable: true, style: 'd-none d-sm-table-cell' },
            { title: 'إسم المستخدم', align: 'center', key: 'userName', isSortable: true, style: 'd-none d-sm-table-cell' },
            { title: 'الاسم', align: 'center', key: 'fullName', isSortable: true },
            { title: '' },
        ];
    }
    ngOnInit() {
        this.getUsersInRole();
        this.entityName = this.appTranslation.get('users.management.Users');
    }
    getUsersInRole() {
        this.adminService.getUsersInRole(this.selectedRole.id, this.query).subscribe((res) => {
            this.users = res.items;
            this.query = res.pagination;
        }, () => this.alertify.error(this.appTranslation.getWithValue('Common.Data.errorGettingData', this.entityName)));
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
        }
        else {
            this.query.sortBy = columnName;
            this.query.isSortAscending = true;
        }
        this.getUsersInRole();
    }
    onPageChange(event) {
        this.query.pageNumber = event;
        this.getUsersInRole();
    }
    removeUserFromRole(user) {
        this.adminService.removeUserFromRole(this.selectedRole.id, user.id).subscribe(() => {
            this.alertify.success(this.appTranslation.get('roles.management.RemoveUserFromRole'));
            this.selectedRole.usersCount -= 1;
            this.users.splice(this.users.findIndex(u => u.id == user.id), 1);
        }, () => this.alertify.error(this.appTranslation.get('Common.Messages.ErrorOnAction')));
    }
}
RoleUsersListModalComponent.ɵfac = function RoleUsersListModalComponent_Factory(t) { return new (t || RoleUsersListModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_helpers_app_translation__WEBPACK_IMPORTED_MODULE_0__.AppTranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_users_admin_service__WEBPACK_IMPORTED_MODULE_1__.AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_helpers_Alertify__WEBPACK_IMPORTED_MODULE_2__.AlertifyService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbActiveModal, 8)); };
RoleUsersListModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RoleUsersListModalComponent, selectors: [["app-role-users-list-modal"]], inputs: { showAsModal: "showAsModal", showModalButton: "showModalButton" }, decls: 3, vars: 1, consts: [[4, "ngIf"], ["ListOfUsersInSelectedRole", ""], ["id", "btnToolbarAddNew", "class", "btn btn-outline-info", "type", "button", "data-dismiss", "modal", "data-toggle", "modal", "data-target", "#RoleUsersListModal", 4, "ngIf"], ["bsModal", "", 1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "fa", "fa-bar-chart"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "ngTemplateOutlet"], [1, "modal-footer", "text-right"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["id", "btnToolbarAddNew", "type", "button", "data-dismiss", "modal", "data-toggle", "modal", "data-target", "#RoleUsersListModal", 1, "btn", "btn-outline-info"], [1, "fa", "fa-bar-chart", 3, "title"], ["role", "toolbar", "aria-label", "Toolbar with filter field", 1, "btn-toolbar", "justify-content-between", "m-2"], [1, "form-inline"], [1, "input-group"], ["type", "text", "maxlength", "30", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange", "keyup.esc", "keyup.enter"], ["id", "button-addon4", 1, "input-group-append"], ["id", "LnkBtn_resetFilter", "type", "button", 1, "btn", "btn-danger", 3, "title", "click"], [1, "fa", "fa-remove"], ["id", "btnToolbarRefreshData", "type", "button", 1, "btn", "btn-success", 3, "title", "click"], [1, "fa", "fa-refresh"], [1, "table-responsive"], [1, "table", "table-sm", "table-bordered", "table-hover", "table-light"], [1, "table-info"], [3, "class", 4, "ngFor", "ngForOf"], ["colspan", "100%", 1, "text-center"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center", 3, "boundaryLinks", "pageSize", "collectionSize", "page", "maxSize", "rotate", "pageChange"], ["ngbPaginationFirst", ""], ["ngbPaginationPrevious", ""], ["ngbPaginationLast", ""], ["ngbPaginationNext", ""], [1, "fa", "fa-spinner"], [3, "class", "click", 4, "ngIf"], [3, "class", 4, "ngIf"], [3, "click"], ["class", "fa ", 3, "fa-sort-asc", "fa-sort-desc", 4, "ngIf"], [1, "fa"], ["colspan", "100%", 1, "text-center", "text-info"], ["scope", "row", 1, "align-middle", "text-center", "d-none", "d-sm-table-cell"], [1, "align-middle", "d-none", "d-sm-table-cell"], [1, "align-middle"], [1, "btn", "btn-danger", "btn-sm", 3, "click"]], template: function RoleUsersListModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, RoleUsersListModalComponent_ng_container_0_Template, 16, 6, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RoleUsersListModalComponent_ng_template_1_Template, 31, 24, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showAsModal);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbPagination, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbPaginationFirst, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbPaginationPrevious, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbPaginationLast, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbPaginationNext], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 20467:
/*!*********************************************************************************!*\
  !*** ./src/app/components/admin/roles-management/roles-management.component.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolesManagementComponent": function() { return /* binding */ RolesManagementComponent; }
/* harmony export */ });
/* harmony import */ var src_app_models_Users_role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_models/Users/role */ 72796);
/* harmony import */ var _permissions_modal_permissions_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../permissions-modal/permissions-modal.component */ 99334);
/* harmony import */ var _role_users_list_modal_role_users_list_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../role-users-list-modal/role-users-list-modal.component */ 14295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_users_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/users/account.service */ 35757);
/* harmony import */ var src_app_helpers_Alertify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_helpers/Alertify */ 99771);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);









function RolesManagementComponent_tr_28_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const per_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("title", per_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](per_r3.name);
} }
function RolesManagementComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "strong", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RolesManagementComponent_tr_28_Template_strong_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const role_r1 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r4.showUsersListInSelectedRole(role_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, RolesManagementComponent_tr_28_span_11_Template, 2, 2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RolesManagementComponent_tr_28_Template_button_click_13_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const role_r1 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r6.editPermissionsModal(role_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0623\u0630\u0648\u0646\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](role_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](role_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](role_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](role_r1.usersCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", role_r1.permissions);
} }
class RolesManagementComponent {
    constructor(accountService, alertify, modalService) {
        this.accountService = accountService;
        this.alertify = alertify;
        this.modalService = modalService;
        this.roleEdit = new src_app_models_Users_role__WEBPACK_IMPORTED_MODULE_0__.Role();
        this.isNewRole = true;
    }
    ngOnInit() {
        this.getRolesWithPermissions();
    }
    getRolesWithPermissions() {
        this.accountService.getRolesAndPermissions().subscribe(results => {
            this.roles = results[0];
            this.allPermissions = results[1];
            this.alertify.success('تم تحديث البيانات بنجاح');
        }, error => {
            this.alertify.error('حدثت مشكلة في جلب الصلاحيات');
        });
    }
    addNewRole() {
        const newRoles = new src_app_models_Users_role__WEBPACK_IMPORTED_MODULE_0__.Role();
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
    editPermissionsModal(role) {
        this.isNewRole = false;
        const permissionList = [];
        const currentRolePermissions = role.permissions;
        const currentRolePermissionValues = [...currentRolePermissions.map(el => el.value)];
        this.allPermissions.forEach(aPer => {
            if (currentRolePermissionValues.indexOf(aPer.value) >= 0) {
                permissionList.push({
                    name: aPer.name, groupName: aPer.groupName,
                    description: aPer.description, value: aPer.value, checked: true
                });
            }
            else {
                permissionList.push({
                    name: aPer.name, groupName: aPer.groupName,
                    description: aPer.description, value: aPer.value, checked: false
                });
            }
        });
        this.showModalWithRoles(role, permissionList);
    }
    showModalWithRoles(role, permissions) {
        const config = {
            backdrop: 'static',
            size: 'lg',
            keyboard: false,
        };
        this.roleEdit = role;
        this.bsModalRef = this.modalService.open(_permissions_modal_permissions_modal_component__WEBPACK_IMPORTED_MODULE_1__.PermissionsModalComponent, config);
        this.bsModalRef.componentInstance.role = role;
        this.bsModalRef.componentInstance.permissions = permissions;
        this.bsModalRef.componentInstance.updateSelectedRole.subscribe((tempRole) => {
            if (this.isNewRole) {
                this.accountService.newRole(tempRole).subscribe(role => this.saveSuccessHelper(role), error => this.saveFailedHelper(error));
            }
            else {
                this.accountService.updateRole(tempRole).subscribe(response => this.saveSuccessHelper(tempRole), error => this.saveFailedHelper(error));
            }
        });
    }
    saveSuccessHelper(role) {
        if (role) {
            if (this.isNewRole) {
                this.roles.push(role);
                this.alertify.success(`Role ${this.roleEdit.name} was created successfully`);
            }
            else {
                Object.assign(this.roleEdit, role);
                this.alertify.success(`Changes to role ${this.roleEdit.name} was saved successfully`);
            }
        }
        else {
            this.alertify.error(`No selected role or new to save`);
        }
        this.roleEdit = new src_app_models_Users_role__WEBPACK_IMPORTED_MODULE_0__.Role();
    }
    saveFailedHelper(error) {
        this.alertify.error(error);
    }
    showUsersListInSelectedRole(role) {
        const config = {
            backdrop: 'static',
            size: 'lg',
            keyboard: false,
        };
        this.bsRoleUsersListModal = this.modalService.open(_role_users_list_modal_role_users_list_modal_component__WEBPACK_IMPORTED_MODULE_2__.RoleUsersListModalComponent, config);
        this.bsRoleUsersListModal.componentInstance.showAsModal = true;
        this.bsRoleUsersListModal.componentInstance.selectedRole = role;
    }
}
RolesManagementComponent.ɵfac = function RolesManagementComponent_Factory(t) { return new (t || RolesManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_users_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_helpers_Alertify__WEBPACK_IMPORTED_MODULE_4__.AlertifyService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal)); };
RolesManagementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: RolesManagementComponent, selectors: [["app-roles-management"]], decls: 29, vars: 1, consts: [["role", "toolbar", "aria-label", "Toolbar with button groups", 1, "btn-toolbar", "justify-content-between", "m-2"], [1, "form-inline"], [1, "input-group"], ["type", "text", "maxlength", "30", "placeholder", "Put your search here", 1, "form-control"], ["id", "button-addon4", 1, "input-group-append"], ["id", "LnkBtnQuickSearch", "type", "button", 1, "btn", "btn-default"], [1, "fa", "fa-search"], ["id", "LnkBtnCancelSearch", "type", "button", 1, "btn", "btn-danger"], [1, "fa", "fa-remove"], ["role", "group", "aria-label", "First group", 1, "btn-group"], ["id", "btnTolbar_AddNewRole", "type", "button", 1, "btn", "btn-default", 3, "click"], ["title", "Add", 1, "fa", "fa-plus", "text-primary"], ["type", "button", 1, "btn", "btn-default", 3, "click"], ["title", "refresh", 1, "fa", "fa-refresh", "text-success"], [1, "table-responsive"], [1, "table", "table-sm", "table-bordered", "table-hover"], [1, "table-info"], ["scope", "col", 1, "align-middle", "text-center", 2, "width", "10%"], [1, "align-middle", "text-center", 2, "width", "25%"], [1, "align-middle", "text-center", 2, "width", "10%"], [1, "align-middle", "text-center", 2, "width", "40%"], [1, "align-middle", "text-center", 2, "width", "15%"], [4, "ngFor", "ngForOf"], ["scope", "row", 1, "align-middle", "text-center"], [1, "align-middle"], [1, "text-info", 3, "click"], ["class", "badge-md bg-secondary", 3, "title", 4, "ngFor", "ngForOf"], [1, "btn", "btn-info", "btn-sm", 3, "click"], [1, "badge-md", "bg-secondary", 3, "title"]], template: function RolesManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RolesManagementComponent_Template_button_click_10_listener() { return ctx.addNewRole(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RolesManagementComponent_Template_button_click_12_listener() { return ctx.getRolesWithPermissions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "thead", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "\u0625\u0633\u0645 \u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "\u0627\u0644\u0645\u064F\u0633\u062A\u062E\u062F\u0645\u0648\u0646");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "\u0627\u0644\u0623\u0630\u0648\u0646\u0627\u062A");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, RolesManagementComponent_tr_28_Template, 15, 5, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.roles);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf], encapsulation: 2 });


/***/ }),

/***/ 76143:
/*!***********************************************************************!*\
  !*** ./src/app/components/admin/roles-modal/roles-modal.component.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolesModalComponent": function() { return /* binding */ RolesModalComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);





function RolesModalComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RolesModalComponent_div_6_Template_input_change_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const role_r2 = restoredCtx.$implicit; return role_r2.checked = !role_r2.checked; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", role_r2.checked)("disabled", role_r2.value === "Admin" && ctx_r1.user.userName === "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](role_r2.name);
} }
class RolesModalComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.updateSelectedRoles = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    updateRoles() {
        console.log(this.roles);
        this.updateSelectedRoles.emit(this.roles);
        this.activeModal.close();
    }
}
RolesModalComponent.ɵfac = function RolesModalComponent_Factory(t) { return new (t || RolesModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal)); };
RolesModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RolesModalComponent, selectors: [["app-roles-modal"]], outputs: { updateSelectedRoles: "updateSelectedRoles" }, decls: 12, vars: 2, consts: [[1, "modal-header"], [1, "modal-title"], [1, "modal-body"], ["id", "rolesForm"], ["rolesForm", "ngForm"], ["class", "animated-checkbox", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", "form", "rolesForm", 1, "btn", "btn-default", 3, "click"], ["type", "button", 1, "btn", "btn-default", 3, "click"], [1, "animated-checkbox"], ["type", "checkbox", "value", "role.value", 3, "checked", "disabled", "change"], [1, "label-text"]], template: function RolesModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RolesModalComponent_div_6_Template, 5, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolesModalComponent_Template_button_click_8_listener() { return ctx.updateRoles(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0627\u0639\u062A\u0645\u0627\u062F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolesModalComponent_Template_button_click_10_listener() { return ctx.activeModal.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0625\u063A\u0644\u0627\u0642");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0627\u062A \u0627\u0644\u0645\u0645\u0646\u0648\u062D\u0647 \u0644\u0640 ", ctx.user.userName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.roles);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2xlcy1tb2RhbC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 85555:
/*!*******************************************************************************!*\
  !*** ./src/app/components/admin/user-management/user-management.component.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserManagementComponent": function() { return /* binding */ UserManagementComponent; }
/* harmony export */ });
/* harmony import */ var _roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../roles-modal/roles-modal.component */ 76143);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_helpers_app_translation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_helpers/app-translation */ 4093);
/* harmony import */ var src_app_services_users_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/users/admin.service */ 4121);
/* harmony import */ var src_app_services_users_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/users/account.service */ 35757);
/* harmony import */ var src_app_helpers_Alertify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_helpers/Alertify */ 99771);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 70325);











function UserManagementComponent_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 1, "Common.Data.Loading"), "");
} }
function UserManagementComponent_th_18_div_1_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i", 27);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("fa-sort-asc", ctx_r10.query.isSortAscending)("fa-sort-desc", !ctx_r10.query.isSortAscending);
} }
function UserManagementComponent_th_18_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UserManagementComponent_th_18_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const c_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r11.sortBy(c_r7.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, UserManagementComponent_th_18_div_1_i_2_Template, 1, 4, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("align-middle text-", c_r7.align, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", c_r7.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.query.sortBy === c_r7.key);
} }
function UserManagementComponent_th_18_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("align-middle text-", c_r7.align, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", c_r7.title, " ");
} }
function UserManagementComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UserManagementComponent_th_18_div_1_Template, 3, 5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, UserManagementComponent_th_18_div_2_Template, 2, 4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", c_r7.isSortable);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !c_r7.isSortable);
} }
function UserManagementComponent_tr_24_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("title", role_r18.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](role_r18.name);
} }
const _c0 = function (a1) { return ["/profile/", a1]; };
function UserManagementComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, UserManagementComponent_tr_24_span_10_Template, 2, 2, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UserManagementComponent_tr_24_Template_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const user_r16 = restoredCtx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r19.editRolesModal(user_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](user_r16.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](6, _c0, user_r16.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](user_r16.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c0, user_r16.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](user_r16.arFullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", user_r16.userRoles);
} }
function UserManagementComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, "\u00AB");
} }
function UserManagementComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, "\u2039");
} }
function UserManagementComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, "\u00BB");
} }
function UserManagementComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, "\u203A");
} }
class UserManagementComponent {
    constructor(appTranslation, adminService, accountService, alertify, modalService) {
        this.appTranslation = appTranslation;
        this.adminService = adminService;
        this.accountService = accountService;
        this.alertify = alertify;
        this.modalService = modalService;
        /* -------------------------------------------*/
        this.PAGE_SIZE = 20;
        this.queryResult = {};
        this.query = { pageSize: this.PAGE_SIZE };
        this.columns = [
            { title: '#', align: 'center', key: 'id', isSortable: true },
            { title: 'إسم المستخدم', align: 'center', key: 'userName', isSortable: true },
            { title: 'الاسم', align: 'center', key: 'arFullName', isSortable: true },
            { title: 'الصلاحيات', align: 'center' },
            { title: '' },
        ];
    }
    ngOnInit() {
        this.getUsersWithRoles();
        this.entityName = this.appTranslation.get('users.management.Users');
    }
    getUsersWithRoles() {
        this.adminService.getUsersWithRoles(this.query).subscribe((res) => {
            this.users = res.items;
            this.query = res.pagination;
        }, error => this.alertify.error(this.appTranslation.getWithValue('Common.Data.errorGettingData', this.entityName)));
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
        }
        else {
            this.query.sortBy = columnName;
            this.query.isSortAscending = true;
        }
        this.getUsersWithRoles();
    }
    onPageChange(event) {
        this.query.pageNumber = event;
        this.getUsersWithRoles();
    }
    editRolesModal(user) {
        const roles = [];
        const currentUserRoles = Array.from(user.userRoles).map(r => r.name);
        this.accountService.getRoles().subscribe(results => {
            this.availableRoles = results;
            this.availableRoles.forEach(aRole => {
                if (currentUserRoles.indexOf(aRole.name) >= 0) {
                    roles.push({
                        name: (aRole.description === null || aRole.description === '') ? aRole.name : aRole.description,
                        value: aRole.name, checked: true
                    });
                }
                else {
                    roles.push({
                        name: (aRole.description === null || aRole.description === '') ? aRole.name : aRole.description,
                        value: aRole.name, checked: false
                    });
                }
            });
            this.showModalWithRoles(user, roles);
        }, error => {
            this.alertify.error(error);
            return null;
        });
    }
    showModalWithRoles(user, roles) {
        const config = {
            backdrop: 'static',
            size: 'lg',
            keyboard: false,
        };
        this.bsModalRef = this.modalService.open(_roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_0__.RolesModalComponent, config);
        this.bsModalRef.componentInstance.user = user;
        this.bsModalRef.componentInstance.roles = roles;
        this.bsModalRef.componentInstance.updateSelectedRoles.subscribe(selectedRole => {
            const roleToUpdate = {
                updatedRoles: [...selectedRole // (...) is the same for each
                        .filter(el => el.checked === true) // condation (el.checked === true)
                        .map(el => ({ 'name': el.value, 'description': el.name }))],
                // return Value (el.value) Admin Or moderator ...etc
                roleNames: [...selectedRole.filter(el => el.checked === true).map(el => el.value)]
            };
            if (roleToUpdate) {
                this.adminService.updateUserRoles(user.userName, roleToUpdate).subscribe(() => { user.userRoles = [...roleToUpdate.updatedRoles]; }, error => this.alertify.error(error));
            }
        });
    }
}
UserManagementComponent.ɵfac = function UserManagementComponent_Factory(t) { return new (t || UserManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_helpers_app_translation__WEBPACK_IMPORTED_MODULE_1__.AppTranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_users_admin_service__WEBPACK_IMPORTED_MODULE_2__.AdminService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_users_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_helpers_Alertify__WEBPACK_IMPORTED_MODULE_4__.AlertifyService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal)); };
UserManagementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: UserManagementComponent, selectors: [["app-user-management"]], decls: 31, vars: 20, consts: [[4, "ngIf"], ["role", "toolbar", "aria-label", "Toolbar with filter field", 1, "btn-toolbar", "justify-content-between", "m-2"], [1, "form-inline"], [1, "input-group"], ["type", "text", "maxlength", "30", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange", "keyup.esc", "keyup.enter"], ["id", "button-addon4", 1, "input-group-append"], ["id", "LnkBtn_resetFilter", "type", "button", 1, "btn", "btn-danger", 3, "title", "click"], [1, "fa", "fa-remove"], ["role", "group", "aria-label", "ToolBar", 1, "btn-group"], ["id", "btnToolbarrefreshData", "type", "button", 1, "btn", "btn-success", 3, "click"], [1, "fa", "fa-refresh", "text-success", 3, "title"], [1, "table-responsive"], [1, "table", "table-sm", "table-bordered", "table-hover"], [1, "table-info"], [4, "ngFor", "ngForOf"], ["colspan", "100%", 1, "text-center"], [1, "d-flex", "justify-content-center"], [1, "d-flex", "justify-content-center", 3, "boundaryLinks", "pageSize", "collectionSize", "page", "maxSize", "rotate", "pageChange"], ["ngbPaginationFirst", ""], ["ngbPaginationPrevious", ""], ["ngbPaginationLast", ""], ["ngbPaginationNext", ""], [1, "fa", "fa-spinner"], [3, "class", "click", 4, "ngIf"], [3, "class", 4, "ngIf"], [3, "click"], ["class", "fa ", 3, "fa-sort-asc", "fa-sort-desc", 4, "ngIf"], [1, "fa"], ["scope", "row", 1, "align-middle", "text-center"], [1, "align-middle"], [1, "text-dark", "font-weight-bold", 3, "routerLink"], ["class", "badge-md bg-secondary", 3, "title", 4, "ngFor", "ngForOf"], [1, "btn", "btn-info", "btn-sm", 3, "click"], [1, "badge-md", "bg-secondary", 3, "title"]], template: function UserManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, UserManagementComponent_p_0_Template, 5, 3, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function UserManagementComponent_Template_input_ngModelChange_4_listener($event) { return ctx.query.filterText = $event; })("keyup.esc", function UserManagementComponent_Template_input_keyup_esc_4_listener() { return ctx.resetFilter(); })("keyup.enter", function UserManagementComponent_Template_input_keyup_enter_4_listener() { return ctx.onFilterChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UserManagementComponent_Template_button_click_7_listener() { return ctx.resetFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UserManagementComponent_Template_button_click_11_listener() { return ctx.resetFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "thead", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, UserManagementComponent_th_18_Template, 3, 2, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, UserManagementComponent_tr_24_Template, 14, 10, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "ngb-pagination", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function UserManagementComponent_Template_ngb_pagination_pageChange_26_listener($event) { return ctx.query.pageNumber = $event; })("pageChange", function UserManagementComponent_Template_ngb_pagination_pageChange_26_listener($event) { return ctx.onPageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, UserManagementComponent_ng_template_27_Template, 1, 0, "ng-template", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, UserManagementComponent_ng_template_28_Template, 1, 0, "ng-template", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, UserManagementComponent_ng_template_29_Template, 1, 0, "ng-template", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, UserManagementComponent_ng_template_30_Template, 1, 0, "ng-template", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 14, "Common.Data.SearchTip"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.query.filterText);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 16, "Common.Data.Reset"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](13, 18, "Common.Data.Refresh"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\u0639\u062F\u062F \u0627\u0644\u0646\u062A\u0627\u0626\u062C [ ", ctx.query.totalItems || "0", " ] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("boundaryLinks", true)("pageSize", ctx.query.pageSize)("collectionSize", ctx.query.totalItems)("page", ctx.query.pageNumber)("maxSize", 5)("rotate", true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPagination, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPaginationFirst, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPaginationPrevious, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPaginationLast, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPaginationNext, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_components_admin_admin_module_ts-es2015.js.map
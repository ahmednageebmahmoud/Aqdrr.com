"use strict";
(self["webpackChunkpart_time_app_spa"] = self["webpackChunkpart_time_app_spa"] || []).push([["src_app_components_settings_settings_module_ts"],{

/***/ 91442:
/*!******************************************************!*\
  !*** ./src/app/_services/settings/cities.service.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CitiesService": function() { return /* binding */ CitiesService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _utilities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities.service */ 72569);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);





class CitiesService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ApiUrl;
        this.citiesUrl = `${this.baseUrl}cities`;
    }
    updateCity(updatedCity) {
        return this.http.put(`${this.citiesUrl}`, updatedCity);
    }
    changeCityStatus(cityId, newStatus) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put(`${this.citiesUrl}/${cityId}`, newStatus, { headers: headers });
    }
    getCity(id) {
        return this.http.get(`${this.citiesUrl}/${id}`);
    }
    getCities() {
        return this.http.get(this.citiesUrl);
    }
    getPagedCities(query) {
        return _utilities_service__WEBPACK_IMPORTED_MODULE_1__.Utilities.getPaginationResult(this.http, `${this.citiesUrl}/Pages`, query);
    }
    getCitiesAsList(query) {
        return this.http.get(`${this.citiesUrl}/list`);
    }
}
CitiesService.ɵfac = function CitiesService_Factory(t) { return new (t || CitiesService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
CitiesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CitiesService, factory: CitiesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5882:
/*!***************************************************!*\
  !*** ./src/app/_services/settings/sms.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmsService": function() { return /* binding */ SmsService; }
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 53882);



class SmsService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ApiUrl;
        this.smsUrl = `${this.baseUrl}Settings/Sms`;
    }
    getAlfaCellSMSBalance() {
        return this.http.get(`${this.smsUrl}/AlfaCell/Balance`);
    }
    sendSMSFromYamamahAsTestMessage(phoneNumber) {
        return this.http.post(`${this.smsUrl}/Yamamah/Test/${phoneNumber}`, null);
    }
    getYamamahSMSBalance() {
        return this.http.get(`${this.smsUrl}/Yamamah/Balance`);
    }
}
SmsService.ɵfac = function SmsService_Factory(t) { return new (t || SmsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
SmsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SmsService, factory: SmsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 76557:
/*!***********************************************************************************!*\
  !*** ./src/app/components/settings/cities/city-details/city-details.component.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CityDetailsComponent": function() { return /* binding */ CityDetailsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_helpers_app_translation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_helpers/app-translation */ 4093);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var src_app_services_users_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/users/auth.service */ 27704);
/* harmony import */ var src_app_helpers_permissions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_helpers/permissions.service */ 41010);
/* harmony import */ var src_app_helpers_app_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_helpers/app-title.service */ 6373);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);








class CityDetailsComponent {
    constructor(appTranslation, activeModal, authService, permissions, appTitle) {
        this.appTranslation = appTranslation;
        this.activeModal = activeModal;
        this.authService = authService;
        this.permissions = permissions;
        this.appTitle = appTitle;
    }
    ngOnInit() {
    }
}
CityDetailsComponent.ɵfac = function CityDetailsComponent_Factory(t) { return new (t || CityDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_helpers_app_translation__WEBPACK_IMPORTED_MODULE_0__.AppTranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_users_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_helpers_permissions_service__WEBPACK_IMPORTED_MODULE_2__.PermissionsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_helpers_app_title_service__WEBPACK_IMPORTED_MODULE_3__.AppTitleService)); };
CityDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CityDetailsComponent, selectors: [["app-city-details"]], decls: 60, vars: 34, consts: [[1, "modal-header"], [1, "modal-title"], [1, "fa", "fa-eye"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group", "row"], ["for", "ronlyVewId", 1, "col-form-label", "col-sm-2", "font-weight-bold"], [1, "col-sm-4"], [1, "form-control-plaintext"], ["for", "ronlyVewCode", 1, "col-form-label", "col-sm-2", "font-weight-bold"], ["for", "ronlyVewArName", 1, "col-form-label", "col-sm-2", "font-weight-bold"], ["for", "ronlyVewEnName", 1, "col-form-label", "col-sm-2", "font-weight-bold"], ["for", "chkVewIsEnabled", 1, "col-form-label", "col-sm-2"], [1, "animated-checkbox"], ["id", "chkVewIsEnabled", "name", "chkVewIsEnabled", "type", "checkbox", 3, "checked"], [1, "label-text", "default"], ["for", "ronlyVewRegionId", 1, "col-form-label", "col-sm-2", "font-weight-bold"], ["for", "ronlyVewUpdatedDate", 1, "col-form-label", "col-sm-2", "font-weight-bold"]], template: function CityDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CityDetailsComponent_Template_button_click_6_listener() { return ctx.activeModal.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](59, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 15, "Cities.ViwCityTitle"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 17, "Common.Form.Id"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.city == null ? null : ctx.city.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](19, 19, "Cities.Code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.city == null ? null : ctx.city.code);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](26, 21, "Cities.ArName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.city == null ? null : ctx.city.arName);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](32, 23, "Cities.EnName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.city == null ? null : ctx.city.enName);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](39, 25, "Cities.IsEnabled"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.city == null ? null : ctx.city.isEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](48, 27, "Cities.RegionId"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.city == null ? null : ctx.city.regionName);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](55, 29, "Cities.UpdatedDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](59, 31, ctx.city.updatedDate, "yyyy/MM/dd hh:mm"));
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], encapsulation: 2 });


/***/ }),

/***/ 986:
/*!*****************************************************************************!*\
  !*** ./src/app/components/settings/cities/city-list/city-list.component.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CityListComponent": function() { return /* binding */ CityListComponent; }
/* harmony export */ });
/* harmony import */ var src_app_helpers_animations_enter_leave__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_helpers/animations/enter-leave */ 38879);
/* harmony import */ var _city_details_city_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../city-details/city-details.component */ 76557);
/* harmony import */ var _modify_city_modify_city_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modify-city/modify-city.component */ 23835);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_helpers_app_translation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_helpers/app-translation */ 4093);
/* harmony import */ var src_app_helpers_Alertify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_helpers/Alertify */ 99771);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var src_app_services_settings_cities_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/settings/cities.service */ 91442);
/* harmony import */ var src_app_helpers_url_query_string_builder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_helpers/url/query-string-builder */ 68552);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _shared_spinner_spinner_container_spinner_container_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/spinner/spinner-container/spinner-container.component */ 79438);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 70325);














function CityListComponent_app_spinner_container_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-spinner-container", 32);
} }
function CityListComponent_th_37_div_1_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i", 37);
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("fa-sort-asc", ctx_r15.query.isSortAscending)("fa-sort-desc", !ctx_r15.query.isSortAscending);
} }
function CityListComponent_th_37_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CityListComponent_th_37_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r18); const c_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r16.sortBy(c_r12.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CityListComponent_th_37_div_1_i_2_Template, 1, 4, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMapInterpolate1"]("align-middle text-", c_r12.align, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", c_r12.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r13.query.sortBy === c_r12.key);
} }
function CityListComponent_th_37_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMapInterpolate1"]("align-middle text-", c_r12.align, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", c_r12.title, " ");
} }
function CityListComponent_th_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CityListComponent_th_37_div_1_Template, 3, 5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CityListComponent_th_37_div_2_Template, 2, 4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](c_r12.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", c_r12.isSortable);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !c_r12.isSortable);
} }
const _c0 = function (a0) { return { "value": a0 }; };
function CityListComponent_tr_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](12, 1, "Common.Messages.NotFoundAnyRecord", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 4, "Common.Data.Record"))));
} }
function CityListComponent_tr_45_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CityListComponent_tr_45_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r27); const city_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r25.getCityToEdit(city_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, "Common.CRUD.Edit"));
} }
function CityListComponent_tr_45_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CityListComponent_tr_45_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r30); const city_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r28.getCityToViewDetails(city_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, "Common.Data.View"));
} }
const _c1 = function (a0) { return { delay: a0 }; };
const _c2 = function (a1) { return { value: "", params: a1 }; };
const _c3 = function (a0) { return { "text-deleted": a0 }; };
function CityListComponent_tr_45_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function CityListComponent_tr_45_Template_input_change_12_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r32); const city_r21 = restoredCtx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r31.changeCityStatus(city_r21, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, CityListComponent_tr_45_button_21_Template, 3, 3, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, CityListComponent_tr_45_button_22_Template, 3, 3, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("@EnterItem", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](23, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](21, _c1, 100 * i_r22)))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](25, _c3, !city_r21.isEnabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("data-title", ctx_r3.columns[0] == null ? null : ctx_r3.columns[0].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](city_r21.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("data-title", ctx_r3.columns[1] == null ? null : ctx_r3.columns[1].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](city_r21.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("data-title", ctx_r3.columns[2] == null ? null : ctx_r3.columns[2].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](city_r21.arName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("data-title", ctx_r3.columns[3] == null ? null : ctx_r3.columns[3].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](city_r21.enName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("data-title", ctx_r3.columns[4] == null ? null : ctx_r3.columns[4].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", city_r21.isEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("data-title", ctx_r3.columns[5] == null ? null : ctx_r3.columns[5].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](city_r21.regionName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("data-title", ctx_r3.columns[6] == null ? null : ctx_r3.columns[6].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](18, 18, city_r21.updatedDate, "yyyy/MM/dd hh:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", true);
} }
function CityListComponent_ng_template_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, "\u00AB");
} }
function CityListComponent_ng_template_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, "\u2039");
} }
function CityListComponent_ng_template_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, "\u00BB");
} }
function CityListComponent_ng_template_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, "\u203A");
} }
function CityListComponent_ng_template_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, "Common.Data.MoreInformations"));
} }
function CityListComponent_ng_template_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](30, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](31, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](41, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](44, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vCity_r34 = ctx.vCity;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 14, "Common.Form.Id"), "\u00A0:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](vCity_r34.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 16, "Cities.Code"), "\u00A0:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](vCity_r34.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](15, 18, "Cities.ArName"), "\u00A0:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](vCity_r34.arName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](21, 20, "Cities.EnName"), "\u00A0:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](vCity_r34.enName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](27, 22, "Cities.IsEnabled"), "\u00A0:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", vCity_r34.isEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](35, 24, "Cities.RegionId"), "\u00A0:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](vCity_r34.regionId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](41, 26, "Cities.UpdatedDate"), "\u00A0:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](44, 28, vCity_r34.updatedDate, "yyyy/MM/dd hh:mm"));
} }
const _c4 = function () { return ["/settings"]; };
const _c5 = function (a0) { return { "disabled-spinner-container": a0 }; };
class CityListComponent {
    constructor(appTranslation, alertify, modalService, citiesService, queryStringBuilder) {
        this.appTranslation = appTranslation;
        this.alertify = alertify;
        this.modalService = modalService;
        this.citiesService = citiesService;
        this.queryStringBuilder = queryStringBuilder;
        this.isLoadingData = true;
        this.columns = [
            { title: this.appTranslation.get('Common.Form.Id'), align: 'center', key: 'id' },
            { title: this.appTranslation.get('Cities.Code'), align: 'center', key: 'code' },
            { title: this.appTranslation.get('Cities.ArName'), align: 'left', key: 'arName' },
            { title: this.appTranslation.get('Cities.EnName'), align: 'right', key: 'enName' },
            { title: this.appTranslation.get('Cities.IsEnabled'), align: 'center', key: 'isEnabled' },
            { title: this.appTranslation.get('Cities.RegionId'), align: 'center', key: 'regionId' },
            { title: this.appTranslation.get('Cities.UpdatedDate'), align: 'center', key: 'updatedDate' },
            {}
        ];
        this.PAGE_SIZE = 10;
        this.query = { pageSize: this.PAGE_SIZE };
        queryStringBuilder.getQueryParams(this.query);
    }
    ngOnInit() {
        this.getAllCities();
        this.entityCaption = this.appTranslation.get(this.appTranslation.get('Cities.cityCaption'));
    }
    changeCityStatus(city, checkboxInput) {
        this.citiesService.changeCityStatus(city.id, checkboxInput.currentTarget.checked).subscribe(result => {
            this.alertify.info('تم تغيير الحالة بنجاح');
            city.isEnabled = result;
        }, error => { this.alertify.error(error); });
    }
    getAllCities() {
        this.queryStringBuilder.setQueryParams(this.query);
        this.isLoadingData = true;
        this.citiesService.getPagedCities(this.query).subscribe((res) => {
            this.cities = res.items;
            this.query = res.pagination;
        }, error => { this.alertify.error(this.appTranslation.getWithValue('Common.Data.errorGettingData', this.entityCaption)); this.isLoadingData = false; }, () => { this.isLoadingData = false; });
    }
    onFilterChange() {
        this.query.pageNumber = 1;
        this.query.refreshCounter = true;
        this.getAllCities();
    }
    resetFilter() {
        this.query = {
            pageNumber: 1,
            refreshCounter: true,
            pageSize: this.PAGE_SIZE,
            filterText: ''
        };
        this.getAllCities();
    }
    refreshData() {
        this.resetFilter();
        this.alertify.info('تم تحديث البيانات');
    }
    sortBy(columnName) {
        if (this.query.sortBy === columnName) {
            this.query.isSortAscending = !this.query.isSortAscending;
        }
        else {
            this.query.sortBy = columnName;
            this.query.isSortAscending = true;
        }
        this.getAllCities();
    }
    onPageChange(event) {
        this.query.pageNumber = event;
        this.getAllCities();
    }
    getCityToEdit(currentCity) {
        this.citiesService.getCity(currentCity.id).subscribe((result) => {
            this.showCityEditModal(currentCity, result);
        }, error => this.alertify.error(this.appTranslation.getWithValue('Common.Data.errorGettingData', this.entityCaption)));
    }
    showCityEditModal(currentCity, apiCity) {
        const config = {
            backdrop: 'static',
            size: 'lg',
            keyboard: false,
        };
        this.edtModalRef = this.modalService.open(_modify_city_modify_city_component__WEBPACK_IMPORTED_MODULE_2__.ModifyCityComponent, config);
        this.edtModalRef.componentInstance.city = apiCity;
        this.edtModalRef.componentInstance.updatedSuccessfully.subscribe((updatedCity) => {
            this.applyChangedCity(currentCity, updatedCity);
            this.edtModalRef.close();
        });
    }
    applyChangedCity(currentCity, updatedCity) {
        if (updatedCity) {
            Object.assign(currentCity, updatedCity);
        }
    }
    getCityToViewDetails(currentCity) {
        this.citiesService.getCity(currentCity.id).subscribe((result) => {
            this.showCityViewModal(currentCity, result);
        }, error => this.alertify.error(this.appTranslation.getWithValue('Common.Data.errorGettingData', this.entityCaption)));
    }
    showCityViewModal(currentCity, apiCity) {
        const config = {
            backdrop: 'static',
            size: 'lg',
            keyboard: false,
        };
        this.viwModalRef = this.modalService.open(_city_details_city_details_component__WEBPACK_IMPORTED_MODULE_1__.CityDetailsComponent, config);
        this.viwModalRef.componentInstance.city = apiCity;
    }
}
CityListComponent.ɵfac = function CityListComponent_Factory(t) { return new (t || CityListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_helpers_app_translation__WEBPACK_IMPORTED_MODULE_3__.AppTranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_helpers_Alertify__WEBPACK_IMPORTED_MODULE_4__.AlertifyService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_settings_cities_service__WEBPACK_IMPORTED_MODULE_5__.CitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_helpers_url_query_string_builder__WEBPACK_IMPORTED_MODULE_6__.QueryStringBuilder)); };
CityListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: CityListComponent, selectors: [["app-city-list"]], decls: 55, vars: 38, consts: [["id", "breadcrumbs", 1, "breadcrumbs"], [1, "container"], [1, "d-flex", "justify-content-between", "align-items-center"], [3, "routerLink"], [1, "content"], [1, "d-sm-flex", "flex-wrap", "justify-content-between", "p-2", "mb-2", "border", "rounded-lg", "bg-light"], [1, "form-inline"], [1, "input-group", "input-group-sm"], ["type", "text", "maxlength", "30", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange", "keyup.esc", "keyup.enter"], ["id", "button-addon4", 1, "input-group-append"], ["id", "btnResetFilter", "type", "button", 1, "btn", "btn-danger", 3, "title", "click"], [1, "fa", "fa-remove"], [1, "mb-2"], [1, "btn-group"], ["id", "btnRefreshData", "type", "button", 1, "btn", "btn-sm", "btn-light", "border", "btn-vertical", 3, "click"], [1, "fa", "fa-refresh", "text-success", 3, "title"], [3, "ngClass"], ["class", "spinner-container", 4, "ngIf"], [1, "table-responsive", "table-sm-vertical"], [1, "table", "table-sm", "table-bordered", "table-hover", "table-light"], [1, "table-info"], [3, "class", 4, "ngFor", "ngForOf"], ["colspan", "100%", 1, "text-center"], [4, "ngIf"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center", 3, "boundaryLinks", "pageSize", "collectionSize", "page", "maxSize", "rotate", "pageChange"], ["ngbPaginationFirst", ""], ["ngbPaginationPrevious", ""], ["ngbPaginationLast", ""], ["ngbPaginationNext", ""], ["popTitle", ""], ["popContent", ""], [1, "spinner-container"], [3, "class", "click", 4, "ngIf"], [3, "class", 4, "ngIf"], [3, "click"], ["class", "fa ", 3, "fa-sort-asc", "fa-sort-desc", 4, "ngIf"], [1, "fa"], [1, "container", "d-flex", "h-100"], [1, "row", "align-self-center", "justify-content-center", "w-100"], [1, "d-flex", "flex-column", "bd-highlight"], [1, "text-center"], [1, "fa-stack", "fa-3x"], [1, "fa", "fa-sticky-note-o", "fa-stack-1x", "text-primary"], [1, "fa", "fa-ban", "fa-stack-2x", "text-gold"], [1, "text-center", "mt-2", "text-dark"], [1, "align-middle", "text-center"], [1, "align-middle", "text-left"], [1, "align-middle", "text-right"], [1, "toggle", "lg"], ["type", "checkbox", 3, "checked", "change"], [1, "button-indecator"], ["role", "group", "aria-label", "...", 1, "btn-group", "btn-sm"], ["class", "btn btn-outline-warning btn-sm", "type", "button", 3, "title", "click", 4, "ngIf"], ["class", "btn btn-outline-info btn-sm", "type", "button", 3, "title", "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-warning", "btn-sm", 3, "title", "click"], [1, "fa", "fa-pencil"], ["type", "button", 1, "btn", "btn-outline-info", "btn-sm", 3, "title", "click"], [1, "fa", "fa-window-restore"], [1, "form-group"], [1, "font-weight-bold", "text-info"], [1, "form-control-Static"], ["type", "checkbox", 3, "checked"]], template: function CityListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "article", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CityListComponent_Template_input_ngModelChange_17_listener($event) { return ctx.query.filterText = $event; })("keyup.esc", function CityListComponent_Template_input_keyup_esc_17_listener() { return ctx.resetFilter(); })("keyup.enter", function CityListComponent_Template_input_keyup_enter_17_listener() { return ctx.onFilterChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CityListComponent_Template_button_click_20_listener() { return ctx.resetFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CityListComponent_Template_button_click_25_listener() { return ctx.refreshData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](26, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, CityListComponent_app_spinner_container_32_Template, 1, 0, "app-spinner-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "table", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "thead", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](37, CityListComponent_th_37_Template, 3, 5, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](44, CityListComponent_tr_44_Template, 14, 8, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](45, CityListComponent_tr_45_Template, 23, 27, "tr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "ngb-pagination", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("pageChange", function CityListComponent_Template_ngb_pagination_pageChange_46_listener($event) { return ctx.query.pageNumber = $event; })("pageChange", function CityListComponent_Template_ngb_pagination_pageChange_46_listener($event) { return ctx.onPageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](47, CityListComponent_ng_template_47_Template, 1, 0, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](48, CityListComponent_ng_template_48_Template, 1, 0, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](49, CityListComponent_ng_template_49_Template, 1, 0, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](50, CityListComponent_ng_template_50_Template, 1, 0, "ng-template", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](51, CityListComponent_ng_template_51_Template, 2, 3, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](53, CityListComponent_ng_template_53_Template, 45, 31, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 21, "JobCategories.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](35, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 23, "Menu.Dashboard"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](18, 25, "Common.Data.SearchTip"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.query.filterText);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](21, 27, "Common.Data.Reset"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](27, 29, "Common.Data.Refresh"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](30, 31, "Common.Data.Refresh"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](36, _c5, ctx.isLoadingData));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLoadingData);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](42, 33, "Common.Data.ResultsFound"), " [ ", ctx.query.totalItems || "0", " ] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !(ctx.cities == null ? null : ctx.cities.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.cities);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("boundaryLinks", true)("pageSize", ctx.query.pageSize)("collectionSize", ctx.query.totalItems)("page", ctx.query.pageNumber)("maxSize", 5)("rotate", true);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPagination, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPaginationFirst, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPaginationPrevious, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPaginationLast, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPaginationNext, _shared_spinner_spinner_container_spinner_container_component__WEBPACK_IMPORTED_MODULE_7__.SpinnerContainerComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe], encapsulation: 2, data: { animation: [src_app_helpers_animations_enter_leave__WEBPACK_IMPORTED_MODULE_0__.enterItem] } });


/***/ }),

/***/ 23835:
/*!*********************************************************************************!*\
  !*** ./src/app/components/settings/cities/modify-city/modify-city.component.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModifyCityComponent": function() { return /* binding */ ModifyCityComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_helpers_app_translation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_helpers/app-translation */ 4093);
/* harmony import */ var src_app_helpers_Alertify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_helpers/Alertify */ 99771);
/* harmony import */ var src_app_services_settings_cities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/settings/cities.service */ 91442);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 70325);










function ModifyCityComponent_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Common.Validation.Required"));
} }
function ModifyCityComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ModifyCityComponent_div_22_div_1_Template, 3, 3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.updateValidator.code.errors.required);
} }
function ModifyCityComponent_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Common.Validation.Required"));
} }
function ModifyCityComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ModifyCityComponent_div_31_div_1_Template, 3, 3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.updateValidator.arName.errors.required);
} }
function ModifyCityComponent_div_40_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Common.Validation.Required"));
} }
function ModifyCityComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ModifyCityComponent_div_40_div_1_Template, 3, 3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.updateValidator.enName.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class ModifyCityComponent {
    constructor(appTranslation, alertify, formBuilder, citiesService, activeModal) {
        this.appTranslation = appTranslation;
        this.alertify = alertify;
        this.formBuilder = formBuilder;
        this.citiesService = citiesService;
        this.activeModal = activeModal;
        this.updatedSuccessfully = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.isSubmitting = false;
    }
    ngOnInit() {
        this.initEdtForm();
    }
    initEdtForm() {
        this.edtCityForm = this.formBuilder.group({
            id: [''],
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            arName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            enName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
        });
        if (this.city) {
            this.edtCityForm.patchValue(this.city);
        }
    }
    get updateValidator() { return this.edtCityForm.controls; }
    editCity() {
        if (this.edtCityForm.valid) {
            this.isSubmitting = true;
            this.edtCityForm.disable();
            Object.assign(this.city, this.edtCityForm.getRawValue());
            this.citiesService.updateCity(this.city).subscribe(returnCity => {
                this.alertify.success(this.appTranslation.get('Common.Data.SavedSuccessfully'));
                this.updatedSuccessfully.emit(returnCity);
            }, error => { this.alertify.error(error); }, () => { this.isSubmitting = false; this.edtCityForm.enable(); });
        }
        else {
            this.alertify.warning(this.appTranslation.get('Common.Data.Invalid'));
            this.edtCityForm.markAllAsTouched();
            this.isSubmitting = false;
        }
    }
}
ModifyCityComponent.ɵfac = function ModifyCityComponent_Factory(t) { return new (t || ModifyCityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_helpers_app_translation__WEBPACK_IMPORTED_MODULE_0__.AppTranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_helpers_Alertify__WEBPACK_IMPORTED_MODULE_1__.AlertifyService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_settings_cities_service__WEBPACK_IMPORTED_MODULE_2__.CitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbActiveModal)); };
ModifyCityComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ModifyCityComponent, selectors: [["app-modify-city"]], outputs: { updatedSuccessfully: "updatedSuccessfully" }, decls: 46, vars: 42, consts: [[1, "modal-header"], [1, "modal-title"], [1, "fa", "fa-pencil"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", 3, "formGroup"], [1, "form-group", "position-relative"], ["for", "ronlyEditId", 1, "font-weight-bold"], ["type", "text", "formControlName", "id", "readonly", "", 1, "form-control", "default"], ["for", "txtEditCode", 1, "font-weight-bold"], [1, "text-danger"], ["formControlName", "code", 1, "form-control", "default", 3, "placeholder", "ngClass"], ["class", "invalid-tooltip", 4, "ngIf"], ["for", "txtEditArName", 1, "font-weight-bold"], ["formControlName", "arName", 1, "form-control", "default", 3, "placeholder", "ngClass"], ["for", "txtEditEnName", 1, "font-weight-bold"], ["formControlName", "enName", 1, "form-control", "default", 3, "placeholder", "ngClass"], [1, "modal-footer", "text-right"], ["id", "btnEdtCity", "type", "button", 1, "btn", "btn-success", 3, "disabled", "click"], [1, "fa", 3, "ngClass"], [1, "invalid-tooltip"], [4, "ngIf"]], template: function ModifyCityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyCityComponent_Template_button_click_5_listener() { return ctx.activeModal.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "strong", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, ModifyCityComponent_div_22_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "strong", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, ModifyCityComponent_div_31_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "strong", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, ModifyCityComponent_div_40_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyCityComponent_Template_button_click_42_listener() { return ctx.editCity(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 18, "Cities.EdtCityTitle"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.edtCityForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 20, "Common.Form.Id"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 22, "Cities.Code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 24, "Cities.Code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](36, _c0, ctx.updateValidator.code.errors && ctx.updateValidator.code.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.updateValidator.code.touched && ctx.updateValidator.code.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 26, "Cities.ArName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](30, 28, "Cities.ArName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](38, _c0, ctx.updateValidator.arName.errors && ctx.updateValidator.arName.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.updateValidator.arName.touched && ctx.updateValidator.arName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](35, 30, "Cities.EnName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](39, 32, "Cities.EnName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](40, _c0, ctx.updateValidator.enName.errors && ctx.updateValidator.enName.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.updateValidator.enName.touched && ctx.updateValidator.enName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.isSubmitting || !ctx.edtCityForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.isSubmitting ? "fa-circle-o-notch fa-spin" : "fa-send");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](45, 34, ctx.isSubmitting ? "Common.Data.SendingData" : "Common.CRUD.Save"), "\u00A0 ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 85672:
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/settings/job-categories/create-job-category/create-job-category.component.ts ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateJobCategoryComponent": function() { return /* binding */ CreateJobCategoryComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_helpers_uploader_uploadHandlerResult__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_helpers/uploader/uploadHandlerResult */ 44676);
/* harmony import */ var src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/utilities.service */ 72569);
/* harmony import */ var src_app_helpers_app_translation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_helpers/app-translation */ 4093);
/* harmony import */ var src_app_helpers_Alertify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_helpers/Alertify */ 99771);
/* harmony import */ var src_app_services_settings_job_categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/settings/job-categories.service */ 29488);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 70325);












const _c0 = ["labelImport"];
function CreateJobCategoryComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("width", ctx_r1.uploadResponse.message, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r1.uploadResponse.message, "%");
} }
function CreateJobCategoryComponent_div_23_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreateJobCategoryComponent_div_23_span_1_Template_span_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const index_r7 = restoredCtx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r8.removeFileFromSelectedFile(index_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](3, 2, file_r6.name, 0, 30));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](6, 6, file_r6.size / 1024 / 1024, "1.0-2"), "MB)");
} }
function CreateJobCategoryComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CreateJobCategoryComponent_div_23_span_1_Template, 11, 9, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.selectedFiles);
} }
function CreateJobCategoryComponent_div_32_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Common.Validation.Required"));
} }
function CreateJobCategoryComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CreateJobCategoryComponent_div_32_div_1_Template, 3, 3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.addValidator.arName.errors.required);
} }
function CreateJobCategoryComponent_div_41_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "Common.Validation.Required"));
} }
function CreateJobCategoryComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CreateJobCategoryComponent_div_41_div_1_Template, 3, 3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.addValidator.enName.errors.required);
} }
const _c1 = function (a0) { return { "is-invalid": a0 }; };
class CreateJobCategoryComponent {
    constructor(appTranslation, alertify, formBuilder, jobCategoriesService, activeModal) {
        this.appTranslation = appTranslation;
        this.alertify = alertify;
        this.formBuilder = formBuilder;
        this.jobCategoriesService = jobCategoriesService;
        this.activeModal = activeModal;
        this.addSuccessfully = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.isSubmitting = false;
        this.uploadStatusEnum = src_app_helpers_uploader_uploadHandlerResult__WEBPACK_IMPORTED_MODULE_0__.UploadStatus;
        this.allowTypeToUpload = ['application/msword', 'application/pdf', 'Image/png', 'Image/jpeg', 'Image/jpg', 'Image/gif', 'Image/bmp', 'image/svg+xml'];
        this.selectedFiles = [];
    }
    ngOnInit() {
        this.initAddForm();
    }
    initAddForm() {
        this.addJobCategoryForm = this.formBuilder.group({
            icon: [''],
            arName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            enName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
        });
    }
    get addValidator() { return this.addJobCategoryForm.controls; }
    addNewJobCategory() {
        if (this.addJobCategoryForm.valid) {
            this.isSubmitting = true;
            this.addJobCategoryForm.disable();
            let jobCategory = {};
            Object.assign(jobCategory, this.addJobCategoryForm.getRawValue());
            this.jobCategoriesService.addNew(jobCategory).subscribe(returnJobCategory => {
                this.alertify.success(this.appTranslation.get('Common.Data.SavedSuccessfully'));
                this.addSuccessfully.emit(returnJobCategory);
            }, error => { this.alertify.error(error); this.isSubmitting = false; this.addJobCategoryForm.enable(); }, () => { this.isSubmitting = false; this.addJobCategoryForm.enable(); });
        }
        else {
            this.alertify.warning(this.appTranslation.get('Common.Data.Invalid'));
            this.addJobCategoryForm.markAllAsTouched();
            this.isSubmitting = false;
        }
    }
    onFileChange(event, files) {
        const maxFilesAllowed = 3;
        const maxFileSize = 1; // MB
        if (event.target.files.length > 0) {
            for (let i = 0; i < event.target.files.length; i++) {
                if (!this.allowTypeToUpload.find(fn => fn.trim().toLowerCase() === event.target.files[i].type.trim().toLowerCase())) {
                    this.alertify.alert(`تحقق من نوع الملف الذي قمت باختياره ، يسمح فقط بأحد انواع الملفات التالية <br >
								${this.allowTypeToUpload.join('<br >')}`);
                    continue;
                }
                if (this.selectedFiles && this.selectedFiles.length >= maxFilesAllowed) {
                    this.alertify.warning(`اقصى عدد مسموح لك برفعه هو ${maxFilesAllowed} ملف،<br >بامكانك حذف بعض الملفات واستبدالها بالملف الجديد`);
                    continue;
                }
                if (event.target.files[i].size > (maxFileSize * 1024 * 1024)) {
                    this.alertify.warning(`${event.target.files[i].name} <br > يجب أن لا يتجاوز حجم الملف ${maxFileSize} ميقا بايت.`);
                    continue;
                }
                if ((Array.from(this.selectedFiles).map(f => f.name)).indexOf(event.target.files[i].name) === -1) {
                    this.selectedFiles.push(event.target.files[i]);
                }
                else {
                    this.alertify.warning(`${event.target.files[i].name} <br > قمت باختيار هذا الملف مسبقاً.`);
                }
            }
            if (event.target.files.length === 1) {
                this.labelImport.nativeElement.innerText = Array.from(files).map(f => f.name).join(' ');
            }
            else {
                this.labelImport.nativeElement.innerText = `عدد الملفات (${this.selectedFiles.length})`;
            }
        }
        else {
            this.selectedFiles = null;
        }
        event.target.value = null;
    }
    removeFileFromSelectedFile(index) {
        this.selectedFiles.splice(index, 1);
        this.labelImport.nativeElement.innerText = `عدد الملفات (${this.selectedFiles.length})`;
    }
    resetUploadFields() {
        this.selectedFiles = null;
        this.labelImport.nativeElement.innerText = null;
    }
    addNewJobCategoryWithFile() {
        if (this.addJobCategoryForm.valid) {
            const formData = this.toJobCategoryFormData(this.addJobCategoryForm.getRawValue());
            if (formData == null) {
                return;
            }
            this.jobCategoriesService.addNewWithFile(formData).subscribe(returnJobCategory => {
                this.uploadResponse = returnJobCategory;
                if (returnJobCategory.status === src_app_helpers_uploader_uploadHandlerResult__WEBPACK_IMPORTED_MODULE_0__.UploadStatus.success ||
                    returnJobCategory.status === src_app_helpers_uploader_uploadHandlerResult__WEBPACK_IMPORTED_MODULE_0__.UploadStatus.successWithSomeFailure) {
                    this.alertify.success(this.appTranslation.get('Common.Data.SavedSuccessfully'));
                    this.resetUploadFields();
                    if (returnJobCategory.status === src_app_helpers_uploader_uploadHandlerResult__WEBPACK_IMPORTED_MODULE_0__.UploadStatus.successWithSomeFailure) {
                        this.alertify.info(returnJobCategory.message);
                    }
                    //this.jobCategoryDetials.attachments.push(...returnJobCategory.files);
                    this.addSuccessfully.emit(returnJobCategory.data);
                }
                else if (returnJobCategory.status === src_app_helpers_uploader_uploadHandlerResult__WEBPACK_IMPORTED_MODULE_0__.UploadStatus.failure) {
                    this.alertify.error(returnJobCategory.message);
                }
            }, error => { this.alertify.error(error); }, () => { });
        }
        else {
            this.alertify.warning(this.appTranslation.get('Common.Data.Invalid'));
        }
    }
    toJobCategoryFormData(formValue) {
        if (!this.selectedFiles || this.selectedFiles.length <= 0) {
            this.alertify.alert('فضلا قم باختيار بعض الملفات قبل الرفع');
            this.addJobCategoryForm.controls.icon.setErrors({ required: true });
            return null;
        }
        const formData = new FormData();
        src_app_services_utilities_service__WEBPACK_IMPORTED_MODULE_1__.Utilities.convertModelToFormData(formValue, formData);
        if (this.selectedFiles && this.selectedFiles.length > 0) {
            this.selectedFiles.forEach(file => {
                formData.append('files', file, file.name);
            });
        }
        return formData;
    }
}
CreateJobCategoryComponent.ɵfac = function CreateJobCategoryComponent_Factory(t) { return new (t || CreateJobCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_helpers_app_translation__WEBPACK_IMPORTED_MODULE_2__.AppTranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_helpers_Alertify__WEBPACK_IMPORTED_MODULE_3__.AlertifyService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_settings_job_categories_service__WEBPACK_IMPORTED_MODULE_4__.JobCategoriesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbActiveModal)); };
CreateJobCategoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CreateJobCategoryComponent, selectors: [["app-create-job-category"]], viewQuery: function CreateJobCategoryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.labelImport = _t.first);
    } }, outputs: { addSuccessfully: "addSuccessfully" }, decls: 47, vars: 41, consts: [[1, "modal-header"], [1, "modal-title"], [1, "fa", "fa-plus"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", 3, "formGroup"], [1, "form-group", "position-relative"], ["for", "uplodAddIcon", 1, "font-weight-bold"], [1, "custom-file"], ["id", "uplodAddIcon", "name", "uplodAddIcon", "type", "file", "multiple", "", "formControlName", "icon", "placeholder", "", 1, "custom-file-input", 3, "ngClass", "change"], ["for", "uplodAddIcon", 1, "custom-file-label"], ["labelImport", ""], [1, "badge-xl", "align-middle", "text-left", "table-warning", "text-body"], [1, "fa", "fa-question-circle"], ["class", "progress", 4, "ngIf"], ["class", "form-group", 4, "ngIf"], ["for", "txtAddArName", 1, "font-weight-bold"], [1, "text-danger"], ["formControlName", "arName", 1, "form-control", "default", 3, "placeholder", "ngClass"], ["class", "invalid-tooltip", 4, "ngIf"], ["for", "txtAddEnName", 1, "font-weight-bold"], ["formControlName", "enName", 1, "form-control", "default", 3, "placeholder", "ngClass"], [1, "modal-footer", "text-right"], ["id", "btnAddJobCategory", "type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], [1, "fa", 3, "ngClass"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "50", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "bg-info"], [1, "form-group"], ["class", "badge badge-info attachment-badge-with-btn rounded-right mt-1 mr-1", 4, "ngFor", "ngForOf"], [1, "badge", "badge-info", "attachment-badge-with-btn", "rounded-right", "mt-1", "mr-1"], [1, "attachment-badge"], [1, "mr-2", "ml-2"], [1, "attachment-badge", "bg-danger", "rounded-left", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-trash"], [1, "invalid-tooltip"], [4, "ngIf"]], template: function CreateJobCategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreateJobCategoryComponent_Template_button_click_5_listener() { return ctx.activeModal.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CreateJobCategoryComponent_Template_input_change_14_listener($event) { return ctx.onFileChange($event, $event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "label", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Choose file");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, CreateJobCategoryComponent_div_22_Template, 3, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, CreateJobCategoryComponent_div_23_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "strong", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, CreateJobCategoryComponent_div_32_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "strong", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](39, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, CreateJobCategoryComponent_div_41_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CreateJobCategoryComponent_Template_button_click_43_listener() { return ctx.addNewJobCategoryWithFile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 19, "JobCategories.AddJobCategoryTitle"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.addJobCategoryForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 21, "JobCategories.Icon"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](35, _c1, ctx.addValidator.icon.errors && ctx.addValidator.icon.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("accept", ctx.allowTypeToUpload.join(", "));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](21, 23, "Attachments.Note"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.uploadResponse == null ? null : ctx.uploadResponse.status) === ctx.uploadStatusEnum.progress);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.selectedFiles == null ? null : ctx.selectedFiles.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](27, 25, "JobCategories.ArName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](31, 27, "JobCategories.ArName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](37, _c1, ctx.addValidator.arName.errors && ctx.addValidator.arName.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.addValidator.arName.touched && ctx.addValidator.arName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](36, 29, "JobCategories.EnName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](40, 31, "JobCategories.EnName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](39, _c1, ctx.addValidator.enName.errors && ctx.addValidator.enName.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.addValidator.enName.touched && ctx.addValidator.enName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.isSubmitting || !ctx.addJobCategoryForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.isSubmitting ? "fa-circle-o-notch fa-spin" : "fa-send");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](46, 33, ctx.isSubmitting ? "Common.Data.SendingData" : "Common.CRUD.Add"), "\u00A0 ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DecimalPipe], encapsulation: 2 });


/***/ }),

/***/ 11140:
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/settings/job-categories/job-category-details/job-category-details.component.ts ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobCategoryDetailsComponent": function() { return /* binding */ JobCategoryDetailsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class JobCategoryDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
}
JobCategoryDetailsComponent.ɵfac = function JobCategoryDetailsComponent_Factory(t) { return new (t || JobCategoryDetailsComponent)(); };
JobCategoryDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JobCategoryDetailsComponent, selectors: [["app-job-category-details"]], decls: 2, vars: 0, template: function JobCategoryDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "job-category-details works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ 39121:
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/settings/job-categories/job-category-list/job-category-list.component.ts ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobCategoryListComponent": function() { return /* binding */ JobCategoryListComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var src_app_helpers_Alertify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_helpers/Alertify */ 99771);
/* harmony import */ var src_app_helpers_animations_enter_leave__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_helpers/animations/enter-leave */ 38879);
/* harmony import */ var _create_job_category_create_job_category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create-job-category/create-job-category.component */ 85672);
/* harmony import */ var _modify_job_category_modify_job_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modify-job-category/modify-job-category.component */ 39810);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_helpers_app_translation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_helpers/app-translation */ 4093);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var src_app_services_settings_job_categories_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/settings/job-categories.service */ 29488);
/* harmony import */ var src_app_helpers_url_query_string_builder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_helpers/url/query-string-builder */ 68552);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _shared_spinner_spinner_container_spinner_container_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/spinner/spinner-container/spinner-container.component */ 79438);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
















function JobCategoryListComponent_app_spinner_container_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-spinner-container", 35);
} }
function JobCategoryListComponent_th_44_div_1_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i", 40);
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("fa-sort-asc", ctx_r15.query.isSortAscending)("fa-sort-desc", !ctx_r15.query.isSortAscending);
} }
function JobCategoryListComponent_th_44_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function JobCategoryListComponent_th_44_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r18); const c_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r16.sortBy(c_r12.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, JobCategoryListComponent_th_44_div_1_i_2_Template, 1, 4, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMapInterpolate1"]("align-middle text-", c_r12.align, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", c_r12.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r13.query.sortBy === c_r12.key);
} }
function JobCategoryListComponent_th_44_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMapInterpolate1"]("align-middle text-", c_r12.align, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", c_r12.title, " ");
} }
function JobCategoryListComponent_th_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, JobCategoryListComponent_th_44_div_1_Template, 3, 5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, JobCategoryListComponent_th_44_div_2_Template, 2, 4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](c_r12.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", c_r12.isSortable);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !c_r12.isSortable);
} }
const _c0 = function (a0) { return { "value": a0 }; };
function JobCategoryListComponent_tr_51_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function JobCategoryListComponent_tr_51_Template_a_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r21.showJobCategoryAddModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](12, 2, "Common.Messages.NotFoundAnyRecord", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](9, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 5, "Common.Data.Record"))));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](19, 7, "Common.CRUD.Add"), " ");
} }
function JobCategoryListComponent_tr_52_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function JobCategoryListComponent_tr_52_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r29); const jobCategory_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r27.getJobCategoryToEdit(jobCategory_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, "Common.CRUD.Edit"));
} }
const _c1 = function (a0) { return { delay: a0 }; };
const _c2 = function (a1) { return { value: "", params: a1 }; };
const _c3 = function (a0) { return { "text-deleted": a0 }; };
function JobCategoryListComponent_tr_52_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function JobCategoryListComponent_tr_52_Template_input_change_12_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r31); const jobCategory_r23 = restoredCtx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r30.changeJobCategoryStatus(jobCategory_r23, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, JobCategoryListComponent_tr_52_button_19_Template, 3, 3, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function JobCategoryListComponent_tr_52_Template_button_click_20_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r31); const jobCategory_r23 = restoredCtx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r32.removeJobCategory(jobCategory_r23.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "button", 61, 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("mouseenter", function JobCategoryListComponent_tr_52_Template_button_mouseenter_22_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r31); const jobCategory_r23 = restoredCtx.$implicit; const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](23); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r33.toggleMoreInfo(_r26, jobCategory_r23); })("mouseleave", function JobCategoryListComponent_tr_52_Template_button_mouseleave_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r31); const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](23); return _r26.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobCategory_r23 = ctx.$implicit;
    const i_r24 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](59);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("@EnterItem", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](22, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](20, _c1, 100 * i_r24)))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](24, _c3, !jobCategory_r23.isEnabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("data-title", ctx_r3.columns[0] == null ? null : ctx_r3.columns[0].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](jobCategory_r23.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("data-title", ctx_r3.columns[1] == null ? null : ctx_r3.columns[1].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("src", "assets/img/icons/", jobCategory_r23.icon, "", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("data-title", ctx_r3.columns[2] == null ? null : ctx_r3.columns[2].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](jobCategory_r23.arName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("data-title", ctx_r3.columns[3] == null ? null : ctx_r3.columns[3].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](jobCategory_r23.enName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("data-title", ctx_r3.columns[4] == null ? null : ctx_r3.columns[4].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", jobCategory_r23.isEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("data-title", ctx_r3.columns[5] == null ? null : ctx_r3.columns[5].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](16, 17, jobCategory_r23.updatedDate, "yyyy/MM/dd hh:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("popoverTitle", _r8)("ngbPopover", _r10);
} }
function JobCategoryListComponent_ng_template_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, "\u00AB");
} }
function JobCategoryListComponent_ng_template_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, "\u2039");
} }
function JobCategoryListComponent_ng_template_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, "\u00BB");
} }
function JobCategoryListComponent_ng_template_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, "\u203A");
} }
function JobCategoryListComponent_ng_template_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, "Common.Data.MoreInformations"));
} }
const _c4 = function (a0, a1) { return { "fa-check-circle text-success": a0, "fa-times-circle text-danger": a1 }; };
function JobCategoryListComponent_ng_template_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\u00A0:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](28, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](35, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vJobCategory_r36 = ctx.vJobCategory;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](vJobCategory_r36.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 11, "JobCategories.Icon"), "\u00A0:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](vJobCategory_r36.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](14, 13, "JobCategories.ArName"), "\u00A0:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](vJobCategory_r36.arName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](20, 15, "JobCategories.EnName"), "\u00A0:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](vJobCategory_r36.enName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](26, 17, "JobCategories.IsEnabled"), "\u00A0:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](24, _c4, vJobCategory_r36.isEnabled == true, vJobCategory_r36.isEnabled == false));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](32, 19, "JobCategories.UpdatedDate"), "\u00A0:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](35, 21, vJobCategory_r36.updatedDate, "yyyy/MM/dd hh:mm"));
} }
const _c5 = function () { return ["/settings"]; };
const _c6 = function (a0) { return { "disabled-spinner-container": a0 }; };
class JobCategoryListComponent {
    constructor(appTranslation, alertify, modalService, jobCategoriesService, queryStringBuilder) {
        this.appTranslation = appTranslation;
        this.alertify = alertify;
        this.modalService = modalService;
        this.jobCategoriesService = jobCategoriesService;
        this.queryStringBuilder = queryStringBuilder;
        this.isLoadingData = true;
        this.columns = [
            { title: '', align: 'center', key: 'id' },
            { title: this.appTranslation.get('JobCategories.Icon'), align: 'center', key: 'icon' },
            { title: this.appTranslation.get('JobCategories.ArName'), align: 'center', key: 'arName' },
            { title: this.appTranslation.get('JobCategories.EnName'), align: 'center', key: 'enName' },
            { title: this.appTranslation.get('JobCategories.IsEnabled'), align: 'center', key: 'isEnabled' },
            { title: this.appTranslation.get('JobCategories.UpdatedBy'), align: 'center', key: 'updatedBy' },
            {}
        ];
        this.PAGE_SIZE = 10;
        this.query = { pageSize: this.PAGE_SIZE };
        queryStringBuilder.getQueryParams(this.query);
    }
    ngOnInit() {
        this.getAllJobCategories();
        this.entityCaption = this.appTranslation.get(this.appTranslation.get('JobCategories.jobCategoryCaption'));
    }
    showJobCategoryAddModal() {
        const config = {
            backdrop: 'static',
            size: 'lg',
            keyboard: false,
        };
        this.addModalRef = this.modalService.open(_create_job_category_create_job_category_component__WEBPACK_IMPORTED_MODULE_2__.CreateJobCategoryComponent, config);
        this.addModalRef.componentInstance.addSuccessfully.subscribe((newJobCategory) => {
            this.addNewJobCategoryToJobCategoriesList(newJobCategory);
            this.addModalRef.close();
        });
    }
    addNewJobCategoryToJobCategoriesList(newJobCategory) {
        if (newJobCategory) {
            this.jobCategories.unshift(newJobCategory);
        }
    }
    changeJobCategoryStatus(jobCategory, checkboxInput) {
        this.jobCategoriesService.changeJobCategoryStatus(jobCategory.id, checkboxInput.currentTarget.checked).subscribe(result => {
            this.alertify.info('تم تغيير الحالة بنجاح');
            jobCategory.isEnabled = result;
        }, error => { this.alertify.error(error); });
    }
    removeJobCategory(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const confirm = yield this.alertify.promisifyConfirm(`تنبيه على أنت على وشك حذف سجل`, `هل أنت متأكد من الحذف؟`);
            if (confirm === src_app_helpers_Alertify__WEBPACK_IMPORTED_MODULE_0__.ConfirmResult.Ok) {
                this.jobCategoriesService.removeJobCategory(id).subscribe(() => {
                    this.alertify.info('تم الحذف بنجاح');
                    this.jobCategories.splice(this.jobCategories.findIndex(e => e.id === id), 1);
                }, error => { this.alertify.error(error); });
            }
        });
    }
    getAllJobCategories() {
        this.queryStringBuilder.setQueryParams(this.query);
        this.isLoadingData = true;
        this.jobCategoriesService.getPagedJobCategories(this.query).subscribe((res) => {
            this.jobCategories = res.items;
            this.query = res.pagination;
        }, error => { this.alertify.error(this.appTranslation.getWithValue('Common.Data.errorGettingData', this.entityCaption)); this.isLoadingData = false; }, () => { this.isLoadingData = false; });
    }
    onFilterChange() {
        this.query.pageNumber = 1;
        this.query.refreshCounter = true;
        this.getAllJobCategories();
    }
    resetFilter() {
        this.query = {
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
    sortBy(columnName) {
        if (this.query.sortBy === columnName) {
            this.query.isSortAscending = !this.query.isSortAscending;
        }
        else {
            this.query.sortBy = columnName;
            this.query.isSortAscending = true;
        }
        this.getAllJobCategories();
    }
    onPageChange(event) {
        this.query.pageNumber = event;
        this.getAllJobCategories();
    }
    getJobCategoryToEdit(currentJobCategory) {
        this.jobCategoriesService.getJobCategory(currentJobCategory.id).subscribe((result) => {
            this.showJobCategoryEditModal(currentJobCategory, result);
        }, error => this.alertify.error(this.appTranslation.getWithValue('Common.Data.errorGettingData', this.entityCaption)));
    }
    showJobCategoryEditModal(currentJobCategory, apiJobCategory) {
        const config = {
            backdrop: 'static',
            size: 'lg',
            keyboard: false,
        };
        this.edtModalRef = this.modalService.open(_modify_job_category_modify_job_category_component__WEBPACK_IMPORTED_MODULE_3__.ModifyJobCategoryComponent, config);
        this.edtModalRef.componentInstance.jobCategory = apiJobCategory;
        this.edtModalRef.componentInstance.updatedSuccessfully.subscribe((updatedJobCategory) => {
            this.applyChangedJobCategory(currentJobCategory, updatedJobCategory);
            this.edtModalRef.close();
        });
    }
    applyChangedJobCategory(currentJobCategory, updatedJobCategory) {
        if (updatedJobCategory) {
            Object.assign(currentJobCategory, updatedJobCategory);
        }
    }
    toggleMoreInfo(popover, vJobCategory) {
        if (popover.isOpen()) {
            popover.close();
        }
        else {
            popover.placement = 'auto';
            popover.open({ vJobCategory });
        }
    }
}
JobCategoryListComponent.ɵfac = function JobCategoryListComponent_Factory(t) { return new (t || JobCategoryListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_helpers_app_translation__WEBPACK_IMPORTED_MODULE_4__.AppTranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_helpers_Alertify__WEBPACK_IMPORTED_MODULE_0__.AlertifyService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_settings_job_categories_service__WEBPACK_IMPORTED_MODULE_5__.JobCategoriesService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_helpers_url_query_string_builder__WEBPACK_IMPORTED_MODULE_6__.QueryStringBuilder)); };
JobCategoryListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: JobCategoryListComponent, selectors: [["app-job-category-list"]], decls: 62, vars: 44, consts: [["id", "breadcrumbs", 1, "breadcrumbs"], [1, "container"], [1, "d-flex", "justify-content-between", "align-items-center"], [3, "routerLink"], [1, "content"], [1, "d-sm-flex", "flex-wrap", "justify-content-between", "p-2", "mb-2", "border", "rounded-lg", "bg-light"], [1, "form-inline"], [1, "input-group", "input-group-sm"], ["type", "text", "maxlength", "30", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange", "keyup.esc", "keyup.enter"], ["id", "button-addon4", 1, "input-group-append"], ["id", "btnResetFilter", "type", "button", 1, "btn", "btn-danger", 3, "title", "click"], [1, "fa", "fa-remove"], [1, "mb-2"], [1, "btn-group"], ["id", "btnShowAddModalAdd", "type", "button", 1, "btn", "btn-sm", "btn-light", "border", "btn-vertical", 3, "click"], [1, "fa", "fa-plus", "text-primary", 3, "title"], ["id", "btnRefreshData", "type", "button", 1, "btn", "btn-sm", "btn-light", "border", "btn-vertical", 3, "click"], [1, "fa", "fa-refresh", "text-success", 3, "title"], ["role", "menu", 1, "dropdown-menu"], [3, "ngClass"], ["class", "spinner-container", 4, "ngIf"], [1, "table-responsive", "table-sm-vertical"], [1, "table", "table-sm", "table-bordered", "table-hover", "table-light"], [1, "table-info"], [3, "class", 4, "ngFor", "ngForOf"], ["colspan", "100%", 1, "text-center"], [4, "ngIf"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center", 3, "boundaryLinks", "pageSize", "collectionSize", "page", "maxSize", "rotate", "pageChange"], ["ngbPaginationFirst", ""], ["ngbPaginationPrevious", ""], ["ngbPaginationLast", ""], ["ngbPaginationNext", ""], ["popTitle", ""], ["popContent", ""], [1, "spinner-container"], [3, "class", "click", 4, "ngIf"], [3, "class", 4, "ngIf"], [3, "click"], ["class", "fa ", 3, "fa-sort-asc", "fa-sort-desc", 4, "ngIf"], [1, "fa"], [1, "container", "d-flex", "h-100"], [1, "row", "align-self-center", "justify-content-center", "w-100"], [1, "d-flex", "flex-column", "bd-highlight"], [1, "text-center"], [1, "fa-stack", "fa-3x"], [1, "fa", "fa-sticky-note-o", "fa-stack-1x", "text-primary"], [1, "fa", "fa-ban", "fa-stack-2x", "text-gold"], [1, "text-center", "mt-2", "text-dark"], [1, "text-center", "mt-2", "text-gold"], ["role", "button", 1, "btn", "btn-outline-gold", 3, "click"], [1, "fa", "fa-plus-circle"], [1, "align-middle", "text-center"], ["height", "45px", "loading", "lazy", 3, "src"], [1, "toggle", "lg"], ["type", "checkbox", 3, "checked", "change"], [1, "button-indecator"], ["role", "group", "aria-label", "...", 1, "btn-group", "btn-sm"], ["class", "btn btn-outline-warning btn-sm", "type", "button", 3, "title", "click", 4, "ngIf"], ["type", "button", "title", "Delete", 1, "btn", "btn-outline-danger", "btn-sm", 3, "click"], [1, "fa", "fa-trash"], ["type", "button", "container", "body", "triggers", "mouseenter:mouseleave:manual", 1, "btn", "btn-outline-info", "btn-sm", 3, "popoverTitle", "ngbPopover", "mouseenter", "mouseleave"], ["popover", "ngbPopover"], [1, "fa", "fa-info-circle"], ["type", "button", 1, "btn", "btn-outline-warning", "btn-sm", 3, "title", "click"], [1, "fa", "fa-pencil"], [1, "form-group"], [1, "font-weight-bold", "text-info"], [1, "form-control-Static"], [1, "fa", "fa-lg", 3, "ngClass"]], template: function JobCategoryListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "article", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function JobCategoryListComponent_Template_input_ngModelChange_17_listener($event) { return ctx.query.filterText = $event; })("keyup.esc", function JobCategoryListComponent_Template_input_keyup_esc_17_listener() { return ctx.resetFilter(); })("keyup.enter", function JobCategoryListComponent_Template_input_keyup_enter_17_listener() { return ctx.onFilterChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function JobCategoryListComponent_Template_button_click_20_listener() { return ctx.resetFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function JobCategoryListComponent_Template_button_click_25_listener() { return ctx.showJobCategoryAddModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](26, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function JobCategoryListComponent_Template_button_click_31_listener() { return ctx.refreshData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](32, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](37, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](39, JobCategoryListComponent_app_spinner_container_39_Template, 1, 0, "app-spinner-container", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "table", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "thead", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](44, JobCategoryListComponent_th_44_Template, 3, 5, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](51, JobCategoryListComponent_tr_51_Template, 20, 11, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](52, JobCategoryListComponent_tr_52_Template, 25, 26, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "ngb-pagination", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("pageChange", function JobCategoryListComponent_Template_ngb_pagination_pageChange_53_listener($event) { return ctx.query.pageNumber = $event; })("pageChange", function JobCategoryListComponent_Template_ngb_pagination_pageChange_53_listener($event) { return ctx.onPageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](54, JobCategoryListComponent_ng_template_54_Template, 1, 0, "ng-template", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](55, JobCategoryListComponent_ng_template_55_Template, 1, 0, "ng-template", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](56, JobCategoryListComponent_ng_template_56_Template, 1, 0, "ng-template", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](57, JobCategoryListComponent_ng_template_57_Template, 1, 0, "ng-template", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](58, JobCategoryListComponent_ng_template_58_Template, 2, 3, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](60, JobCategoryListComponent_ng_template_60_Template, 36, 27, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 23, "JobCategories.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](41, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 25, "Menu.Dashboard"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](18, 27, "Common.Data.SearchTip"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.query.filterText);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](21, 29, "Common.Data.Reset"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](27, 31, "Common.CRUD.Add"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](30, 33, "Common.CRUD.Add"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](33, 35, "Common.Data.Refresh"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](36, 37, "Common.Data.Refresh"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](42, _c6, ctx.isLoadingData));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLoadingData);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](49, 39, "Common.Data.ResultsFound"), " [ ", ctx.query.totalItems || "0", " ] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !(ctx.jobCategories == null ? null : ctx.jobCategories.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.jobCategories);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("boundaryLinks", true)("pageSize", ctx.query.pageSize)("collectionSize", ctx.query.totalItems)("page", ctx.query.pageNumber)("maxSize", 5)("rotate", true);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPagination, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPaginationFirst, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPaginationPrevious, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPaginationLast, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPaginationNext, _shared_spinner_spinner_container_spinner_container_component__WEBPACK_IMPORTED_MODULE_7__.SpinnerContainerComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPopover], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe], encapsulation: 2, data: { animation: [src_app_helpers_animations_enter_leave__WEBPACK_IMPORTED_MODULE_1__.enterItem] } });


/***/ }),

/***/ 39810:
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/settings/job-categories/modify-job-category/modify-job-category.component.ts ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModifyJobCategoryComponent": function() { return /* binding */ ModifyJobCategoryComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class ModifyJobCategoryComponent {
    constructor() { }
    ngOnInit() {
    }
}
ModifyJobCategoryComponent.ɵfac = function ModifyJobCategoryComponent_Factory(t) { return new (t || ModifyJobCategoryComponent)(); };
ModifyJobCategoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModifyJobCategoryComponent, selectors: [["app-modify-job-category"]], decls: 2, vars: 0, template: function ModifyJobCategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "modify-job-category works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ 6137:
/*!*************************************************************************!*\
  !*** ./src/app/components/settings/settings-home/settings.component.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": function() { return /* binding */ SettingsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_helpers_permissions_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_helpers/permissions.service */ 41010);
/* harmony import */ var src_app_services_users_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/users/auth.service */ 27704);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _shared_spinner_spinner_container_spinner_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/spinner/spinner-container/spinner-container.component */ 79438);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 70325);







function SettingsComponent_app_spinner_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-spinner-container", 28);
} }
const _c0 = function () { return ["/settings"]; };
const _c1 = function (a0) { return { "disabled-spinner-container": a0 }; };
const _c2 = function () { return ["/admin"]; };
const _c3 = function () { return [""]; };
const _c4 = function () { return ["/settings", "JobCategory"]; };
const _c5 = function () { return ["/settings", "tasks"]; };
const _c6 = function () { return ["/settings", "cities"]; };
const _c7 = function () { return ["/tickets"]; };
const _c8 = function () { return ["/settings", "sms"]; };
const _c9 = function () { return ["/subscription-packages"]; };
const _c10 = function () { return ["/payments", "test"]; };
const _c11 = function () { return ["/payments", "invoices", "list"]; };
class SettingsComponent {
    constructor(permissions, authService, router) {
        this.permissions = permissions;
        this.authService = authService;
        this.router = router;
        this.isLoading = false;
    }
    ngOnInit() {
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_helpers_permissions_service__WEBPACK_IMPORTED_MODULE_0__.PermissionsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_users_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
SettingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], decls: 110, vars: 73, consts: [["id", "breadcrumbs", 1, "breadcrumbs"], [1, "container"], [1, "d-flex", "justify-content-between", "align-items-center"], ["aria-hidden", "true", 1, "fa", "fa-cogs"], [3, "routerLink"], ["id", "profile", 1, "content"], [1, "container-fluid", 3, "ngClass"], ["class", "spinner-container", 4, "ngIf"], [1, "container", "px-0"], [1, "row"], [1, "col-xl-3", "col-lg-4", "col-md-6", "col-12", "d-flex", "px-1", "mb-2"], [1, "glow-card", "glow-card-nav", 3, "routerLink"], [1, "flex-fill"], [1, "glow-card-icon"], [1, "glow-icon"], [1, "fa", "fa-users", "fa-2x", "animated"], [1, "glow-card-header"], [1, "heading"], [1, "fa-stack", "animated"], [1, "fa", "fa-square-o", "fa-stack-2x"], [1, "fa", "fa-list-ol", "fa-stack-1x"], [1, "fa", "fa-handshake-o", "fa-2x", "animated"], [1, "fa", "fa-map-o", "fa-2x", "animated"], [1, "fa", "fa-ticket", "fa-2x", "animated"], [1, "fa", "fa-mobile", "fa-2x", "animated"], [1, "fa", "fa-cubes", "fa-2x", "animated"], [1, "fa", "fa-credit-card", "fa-2x", "animated"], [1, "fa", "fa-money", "fa-2x", "animated"], [1, "spinner-container"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "article", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, SettingsComponent_app_spinner_container_15_Template, 1, 0, "app-spinner-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](79, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](85, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](89, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](95, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](99, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](105, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](109, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 31, "Menu.Dashboard"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](53, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 33, "Menu.Dashboard"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](54, _c1, ctx.isLoading));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("isDisabled", ctx.permissions.canViewUsers ? null : true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.permissions.canViewUsers ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](56, _c2) : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](57, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](27, 35, "users.management.Management"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("isDisabled", ctx.permissions.canViewUsers ? null : true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.permissions.canViewUsers ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](58, _c4) : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](59, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](39, 37, "JobCategories.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("isDisabled", ctx.permissions.canViewUsers ? null : true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.permissions.canViewUsers ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](60, _c5) : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](61, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](49, 39, "Tasks.Services"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("isDisabled", ctx.permissions.canViewUsers ? null : true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.permissions.canViewUsers ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](62, _c6) : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](63, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](59, 41, "Cities.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](64, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](69, 43, "Tickets.ticketCaption"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.permissions.canViewUsers ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](65, _c8) : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](66, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](79, 45, "Sms.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.permissions.canManageSubscriptionPackages ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](67, _c9) : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](68, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](89, 47, "SubscriptionPackages.Caption"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.permissions.canManageSubscriptionPackages ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](69, _c10) : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](70, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](99, 49, "Payments.TestPayment"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx.permissions.canManageSubscriptionPackages ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](71, _c11) : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](72, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](109, 51, "Invoices.invoiceCaption"));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_spinner_spinner_container_spinner_container_component__WEBPACK_IMPORTED_MODULE_2__.SpinnerContainerComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 24176:
/*!****************************************************************!*\
  !*** ./src/app/components/settings/settings-routing.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsRoutingModule": function() { return /* binding */ SettingsRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _settings_home_settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-home/settings.component */ 6137);
/* harmony import */ var _job_categories_job_category_list_job_category_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./job-categories/job-category-list/job-category-list.component */ 39121);
/* harmony import */ var _tasks_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks/task-list/task-list.component */ 2001);
/* harmony import */ var _cities_city_list_city_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cities/city-list/city-list.component */ 986);
/* harmony import */ var _sms_sms_home_sms_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sms/sms-home/sms-home.component */ 38264);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);

// components







const routes = [
    { path: '', component: _settings_home_settings_component__WEBPACK_IMPORTED_MODULE_0__.SettingsComponent },
    { path: 'JobCategory', component: _job_categories_job_category_list_job_category_list_component__WEBPACK_IMPORTED_MODULE_1__.JobCategoryListComponent, data: { title: 'JobCategories.Title' } },
    { path: 'tasks', component: _tasks_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_2__.TaskListComponent, data: { title: 'Tasks.Services' } },
    { path: 'cities', component: _cities_city_list_city_list_component__WEBPACK_IMPORTED_MODULE_3__.CityListComponent, data: { title: 'Cities.Title' } },
    { path: 'sms', component: _sms_sms_home_sms_home_component__WEBPACK_IMPORTED_MODULE_4__.SmsHomeComponent, data: { title: 'Sms.Title' } },
];
class SettingsRoutingModule {
}
SettingsRoutingModule.ɵfac = function SettingsRoutingModule_Factory(t) { return new (t || SettingsRoutingModule)(); };
SettingsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SettingsRoutingModule });
SettingsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SettingsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 27758:
/*!********************************************************!*\
  !*** ./src/app/components/settings/settings.module.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsModule": function() { return /* binding */ SettingsModule; }
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 4065);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-routing.module */ 24176);
/* harmony import */ var _settings_home_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings-home/settings.component */ 6137);
/* harmony import */ var _job_categories_job_category_list_job_category_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./job-categories/job-category-list/job-category-list.component */ 39121);
/* harmony import */ var _job_categories_job_category_details_job_category_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./job-categories/job-category-details/job-category-details.component */ 11140);
/* harmony import */ var _job_categories_create_job_category_create_job_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./job-categories/create-job-category/create-job-category.component */ 85672);
/* harmony import */ var _job_categories_modify_job_category_modify_job_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./job-categories/modify-job-category/modify-job-category.component */ 39810);
/* harmony import */ var _tasks_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tasks/task-list/task-list.component */ 2001);
/* harmony import */ var _tasks_task_details_task_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tasks/task-details/task-details.component */ 70568);
/* harmony import */ var _tasks_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tasks/create-task/create-task.component */ 29352);
/* harmony import */ var _tasks_modify_task_modify_task_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tasks/modify-task/modify-task.component */ 76710);
/* harmony import */ var _cities_city_list_city_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cities/city-list/city-list.component */ 986);
/* harmony import */ var _cities_city_details_city_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cities/city-details/city-details.component */ 76557);
/* harmony import */ var _cities_modify_city_modify_city_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cities/modify-city/modify-city.component */ 23835);
/* harmony import */ var _sms_sms_balance_sms_balance_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sms/sms-balance/sms-balance.component */ 28309);
/* harmony import */ var _sms_send_sms_send_sms_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sms/send-sms/send-sms.component */ 17815);
/* harmony import */ var _sms_sms_home_sms_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sms/sms-home/sms-home.component */ 38264);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 2316);


// Components
















class SettingsModule {
}
SettingsModule.ɵfac = function SettingsModule_Factory(t) { return new (t || SettingsModule)(); };
SettingsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: SettingsModule });
SettingsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_1__.SettingsRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](SettingsModule, { declarations: [_settings_home_settings_component__WEBPACK_IMPORTED_MODULE_2__.SettingsComponent,
        _job_categories_job_category_list_job_category_list_component__WEBPACK_IMPORTED_MODULE_3__.JobCategoryListComponent,
        _job_categories_job_category_details_job_category_details_component__WEBPACK_IMPORTED_MODULE_4__.JobCategoryDetailsComponent,
        _job_categories_create_job_category_create_job_category_component__WEBPACK_IMPORTED_MODULE_5__.CreateJobCategoryComponent,
        _job_categories_modify_job_category_modify_job_category_component__WEBPACK_IMPORTED_MODULE_6__.ModifyJobCategoryComponent,
        _tasks_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_7__.TaskListComponent,
        _tasks_task_details_task_details_component__WEBPACK_IMPORTED_MODULE_8__.TaskDetailsComponent,
        _tasks_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_9__.CreateTaskComponent,
        _tasks_modify_task_modify_task_component__WEBPACK_IMPORTED_MODULE_10__.ModifyTaskComponent,
        _cities_city_list_city_list_component__WEBPACK_IMPORTED_MODULE_11__.CityListComponent,
        _cities_city_details_city_details_component__WEBPACK_IMPORTED_MODULE_12__.CityDetailsComponent,
        _cities_modify_city_modify_city_component__WEBPACK_IMPORTED_MODULE_13__.ModifyCityComponent,
        _sms_sms_balance_sms_balance_component__WEBPACK_IMPORTED_MODULE_14__.SmsBalanceComponent,
        _sms_send_sms_send_sms_component__WEBPACK_IMPORTED_MODULE_15__.SendSmsComponent,
        _sms_sms_home_sms_home_component__WEBPACK_IMPORTED_MODULE_16__.SmsHomeComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _settings_routing_module__WEBPACK_IMPORTED_MODULE_1__.SettingsRoutingModule] }); })();


/***/ }),

/***/ 17815:
/*!************************************************************************!*\
  !*** ./src/app/components/settings/sms/send-sms/send-sms.component.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendSmsComponent": function() { return /* binding */ SendSmsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _sms_balance_sms_balance_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sms-balance/sms-balance.component */ 28309);
/* harmony import */ var src_app_directives_textarea_auto_resize_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_directives/textarea-auto-resize.directive */ 5386);



class SendSmsComponent {
    constructor() { }
    ngOnInit() {
    }
    // 210 عدد ثلاث رساءل
    limitCharacters(event) {
        //         chars = txtMsg.value.length;
        //         document.getElementById(indicator).innerHTML = chars;
        var chars = event.target.value.length;
        console.log(chars);
        console.log(this.calculateSmsMaxLength(this.isASCII(chars), 3));
        let messages = Math.ceil(chars / 70);
        let remaining = messages * 70 - (chars % (messages * 70) || messages * 70);
        document.getElementById('lblCount').innerHTML = (remaining + ' عدد الحروف المتبقيه  #  ' + messages + ' عدد الرسائل.');
    }
    isASCII(str) {
        return /^[\x00-\x7F]*$/.test(str);
    }
    calculateSmsMaxLength(isUnicode, writtenSmsNb) {
        if (isUnicode) {
            if (writtenSmsNb == 0) {
                return 70;
            }
            else {
                return (70 * (writtenSmsNb + 1)) - ((writtenSmsNb + 1) * 3);
            }
        }
        else {
            if (writtenSmsNb == 0) {
                return 160;
            }
            else {
                return (160 * (writtenSmsNb + 1)) - ((writtenSmsNb + 1) * 7);
            }
        }
    }
}
SendSmsComponent.ɵfac = function SendSmsComponent_Factory(t) { return new (t || SendSmsComponent)(); };
SendSmsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SendSmsComponent, selectors: [["app-send-sms"]], decls: 4, vars: 2, consts: [["autocomplete", "off", "AutoSize", "", 1, "form-control", "animated", 3, "maximumHeight", "minHeight", "input"], ["id", "lblCount", 2, "color", "Red", "font-size", "small"]], template: function SendSmsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-sms-balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "textarea", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function SendSmsComponent_Template_textarea_input_1_listener($event) { return ctx.limitCharacters($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "70 \u0639\u062F\u062F \u0627\u0644\u062D\u0631\u0648\u0641 \u0627\u0644\u0645\u062A\u0628\u0642\u064A\u0647 # 1 \u0639\u062F\u062F \u0627\u0644\u0631\u0633\u0627\u0626\u0644.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("maximumHeight", 400)("minHeight", 43);
    } }, directives: [_sms_balance_sms_balance_component__WEBPACK_IMPORTED_MODULE_0__.SmsBalanceComponent, src_app_directives_textarea_auto_resize_directive__WEBPACK_IMPORTED_MODULE_1__.TextareaAutoResizeDirective], styles: [".animated[_ngcontent-%COMP%] {\n  transition: height 0.5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbmQtc21zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHRSx1QkFBdUI7QUFDekIiLCJmaWxlIjoic2VuZC1zbXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbmltYXRlZCB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogaGVpZ2h0IDAuNXM7XG4gIC1tb3otdHJhbnNpdGlvbjogaGVpZ2h0IDAuNXM7XG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjVzO1xufVxuIl19 */"] });


/***/ }),

/***/ 28309:
/*!******************************************************************************!*\
  !*** ./src/app/components/settings/sms/sms-balance/sms-balance.component.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmsBalanceComponent": function() { return /* binding */ SmsBalanceComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_settings_sms_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/settings/sms.service */ 5882);
/* harmony import */ var src_app_helpers_Alertify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_helpers/Alertify */ 99771);
/* harmony import */ var src_app_helpers_app_translation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_helpers/app-translation */ 4093);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 70325);







function SmsBalanceComponent_i_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 11);
} }
function SmsBalanceComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Common.Validation.Required"));
} }
function SmsBalanceComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SmsBalanceComponent_div_18_div_1_Template, 3, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r1.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class SmsBalanceComponent {
    constructor(smsService, alertify, appTranslation) {
        this.smsService = smsService;
        this.alertify = alertify;
        this.appTranslation = appTranslation;
        this.isSubmitting = false;
    }
    ngOnInit() {
        this.getSmsBalance();
    }
    sendTestSMS() {
        this.isSubmitting = true;
        this.smsService.sendSMSFromYamamahAsTestMessage(this.phoneNumber).subscribe((result) => {
            this.phoneNumber = '';
            this.alertify.info(result.message);
            this.isSubmitting = false;
        }, error => {
            this.alertify.error(`${error}`);
            this.isSubmitting = false;
        });
    }
    getSmsBalance() {
        this.smsService.getYamamahSMSBalance().subscribe((result) => {
            this.balance = result;
        }, error => this.alertify.error('فشل في جلب رصيد الرسائل فضلاً تحقق من الربط مع منصة الرسائل أو أن منصة الرسائل معطله'));
    }
}
SmsBalanceComponent.ɵfac = function SmsBalanceComponent_Factory(t) { return new (t || SmsBalanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_settings_sms_service__WEBPACK_IMPORTED_MODULE_0__.SmsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_helpers_Alertify__WEBPACK_IMPORTED_MODULE_1__.AlertifyService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_helpers_app_translation__WEBPACK_IMPORTED_MODULE_2__.AppTranslationService)); };
SmsBalanceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SmsBalanceComponent, selectors: [["app-sms-balance"]], decls: 19, vars: 18, consts: [["role", "alert", 1, "alert", "alert-info"], [1, "alert-heading"], ["name", "form", 1, "form-inline", 3, "ngSubmit"], ["f", "ngForm"], [1, "input-group", "mb-3"], ["name", "phoneNumber", "autocomplete", "mobile", "required", "", "maxlength", "10", 1, "form-control", 3, "ngModel", "placeholder", "ngClass", "disabled", "ngModelChange"], ["mobile", "ngModel"], [1, "input-group-prepend"], ["type", "submit", 1, "btn", "btn-info", 3, "disabled"], ["class", "fa fa-circle-o-notch fa-spin", 4, "ngIf"], ["class", "invalid-feedback", 4, "ngIf"], [1, "fa", "fa-circle-o-notch", "fa-spin"], [1, "invalid-feedback"], [4, "ngIf"]], template: function SmsBalanceComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u0627\u0644\u0631\u0635\u064A\u062F \u0627\u0644\u0645\u062A\u0627\u062D \u0628\u0645\u0646\u0635\u0629 \u0627\u0644\u0631\u0633\u0627\u0626\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function SmsBalanceComponent_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7); return _r0.form.valid && ctx.sendTestSMS(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SmsBalanceComponent_Template_input_ngModelChange_9_listener($event) { return ctx.phoneNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, SmsBalanceComponent_i_14_Template, 1, 0, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, SmsBalanceComponent_div_18_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.balance == null ? null : ctx.balance.balance, " \u0631\u0633\u0627\u0644\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 10, "Common.Validation.SaudiPhoneNumber"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.phoneNumber)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](16, _c0, _r1.errors && _r1.touched))("disabled", ctx.isSubmitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !_r0.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isSubmitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("\u00A0", !ctx.isSubmitting ? "" : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 12, "Common.Data.SendingData"), " \u00A0", ctx.isSubmitting ? "" : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 14, "Sms.SendTest"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r1.touched && _r1.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 38264:
/*!************************************************************************!*\
  !*** ./src/app/components/settings/sms/sms-home/sms-home.component.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmsHomeComponent": function() { return /* binding */ SmsHomeComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _send_sms_send_sms_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../send-sms/send-sms.component */ 17815);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 70325);




const _c0 = function () { return ["/settings"]; };
class SmsHomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
SmsHomeComponent.ɵfac = function SmsHomeComponent_Factory(t) { return new (t || SmsHomeComponent)(); };
SmsHomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SmsHomeComponent, selectors: [["app-sms-home"]], decls: 16, vars: 8, consts: [["id", "breadcrumbs", 1, "breadcrumbs"], [1, "container"], [1, "d-flex", "justify-content-between", "align-items-center"], [3, "routerLink"], [1, "content"]], template: function SmsHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "article", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "app-send-sms");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 3, "Sms.Title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 5, "Menu.Dashboard"));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _send_sms_send_sms_component__WEBPACK_IMPORTED_MODULE_0__.SendSmsComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbXMtaG9tZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 29352:
/*!********************************************************************************!*\
  !*** ./src/app/components/settings/tasks/create-task/create-task.component.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateTaskComponent": function() { return /* binding */ CreateTaskComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_helpers_app_translation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_helpers/app-translation */ 4093);
/* harmony import */ var src_app_helpers_Alertify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_helpers/Alertify */ 99771);
/* harmony import */ var src_app_services_settings_tasks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/settings/tasks.service */ 91741);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 70325);










function CreateTaskComponent_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Common.Validation.Required"));
} }
function CreateTaskComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CreateTaskComponent_div_17_div_1_Template, 3, 3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.addValidator.arName.errors.required);
} }
function CreateTaskComponent_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Common.Validation.Required"));
} }
function CreateTaskComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CreateTaskComponent_div_26_div_1_Template, 3, 3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.addValidator.enName.errors.required);
} }
const _c0 = function () { return { "value": "300" }; };
function CreateTaskComponent_div_34_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, "Common.Validation.Maxlength", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c0)));
} }
function CreateTaskComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CreateTaskComponent_div_34_div_1_Template, 3, 5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.addValidator.description.errors.minlength || ctx_r2.addValidator.description.errors.maxlength);
} }
const _c1 = function (a0) { return { "is-invalid": a0 }; };
const _c2 = function (a0) { return { "value": a0, "max": "300" }; };
class CreateTaskComponent {
    constructor(appTranslation, alertify, formBuilder, tasksService, activeModal) {
        this.appTranslation = appTranslation;
        this.alertify = alertify;
        this.formBuilder = formBuilder;
        this.tasksService = tasksService;
        this.activeModal = activeModal;
        this.addSuccessfully = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.isSubmitting = false;
    }
    ngOnInit() {
        this.initAddForm();
    }
    initAddForm() {
        this.addTaskForm = this.formBuilder.group({
            arName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            enName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(300)]
        });
    }
    get addValidator() { return this.addTaskForm.controls; }
    addNewTask() {
        if (this.addTaskForm.valid) {
            this.isSubmitting = true;
            this.addTaskForm.disable();
            let task = {};
            Object.assign(task, this.addTaskForm.getRawValue());
            this.tasksService.addNew(task).subscribe(returnTask => {
                this.alertify.success(this.appTranslation.get('Common.Data.SavedSuccessfully'));
                this.addSuccessfully.emit(returnTask);
            }, error => { this.alertify.error(error); this.isSubmitting = false; this.addTaskForm.enable(); }, () => { this.isSubmitting = false; this.addTaskForm.enable(); });
        }
        else {
            this.alertify.warning(this.appTranslation.get('Common.Data.Invalid'));
            this.addTaskForm.markAllAsTouched();
            this.isSubmitting = false;
        }
    }
}
CreateTaskComponent.ɵfac = function CreateTaskComponent_Factory(t) { return new (t || CreateTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_helpers_app_translation__WEBPACK_IMPORTED_MODULE_0__.AppTranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_helpers_Alertify__WEBPACK_IMPORTED_MODULE_1__.AlertifyService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_settings_tasks_service__WEBPACK_IMPORTED_MODULE_2__.TasksService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbActiveModal)); };
CreateTaskComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CreateTaskComponent, selectors: [["app-create-task"]], outputs: { addSuccessfully: "addSuccessfully" }, decls: 40, vars: 44, consts: [[1, "modal-header"], [1, "modal-title"], [1, "fa", "fa-plus"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", 3, "formGroup"], [1, "form-group", "position-relative"], ["for", "txtAddArName", 1, "font-weight-bold"], [1, "text-danger"], ["formControlName", "arName", 1, "form-control", "default", 3, "placeholder", "ngClass"], ["class", "invalid-tooltip", 4, "ngIf"], ["for", "txtAddEnName", 1, "font-weight-bold"], ["formControlName", "enName", 1, "form-control", "default", 3, "placeholder", "ngClass"], ["for", "txtAddDescription", 1, "font-weight-bold"], ["id", "txtAddDescription", "name", "txtAddDescription", "rows", "3", "maxlength", "300", "formControlName", "description", 1, "form-control", "default", 3, "placeholder", "ngClass"], [1, "modal-footer", "text-right"], ["id", "btnAddTask", "type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], [1, "fa", 3, "ngClass"], [1, "invalid-tooltip"], [4, "ngIf"]], template: function CreateTaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateTaskComponent_Template_button_click_5_listener() { return ctx.activeModal.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "strong", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, CreateTaskComponent_div_17_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "strong", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, CreateTaskComponent_div_26_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, CreateTaskComponent_div_34_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CreateTaskComponent_Template_button_click_36_listener() { return ctx.addNewTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 17, "Tasks.AddTaskTitle"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.addTaskForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 19, "Tasks.ArName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 21, "Tasks.ArName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](36, _c1, ctx.addValidator.arName.errors && ctx.addValidator.arName.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.addValidator.arName.touched && ctx.addValidator.arName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 23, "Tasks.EnName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](25, 25, "Tasks.EnName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](38, _c1, ctx.addValidator.enName.errors && ctx.addValidator.enName.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.addValidator.enName.touched && ctx.addValidator.enName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](30, 27, "Tasks.Description"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](32, 29, "Common.Form.MaxLength", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](40, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](33, 32, "Tasks.Description"))));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](42, _c1, ctx.addValidator.description.errors && ctx.addValidator.description.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.addValidator.description.touched && ctx.addValidator.description.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.isSubmitting || !ctx.addTaskForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.isSubmitting ? "fa-circle-o-notch fa-spin" : "fa-send");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](39, 34, ctx.isSubmitting ? "Common.Data.SendingData" : "Common.CRUD.Add"), "\u00A0 ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 76710:
/*!********************************************************************************!*\
  !*** ./src/app/components/settings/tasks/modify-task/modify-task.component.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModifyTaskComponent": function() { return /* binding */ ModifyTaskComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_helpers_app_translation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_helpers/app-translation */ 4093);
/* harmony import */ var src_app_helpers_Alertify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_helpers/Alertify */ 99771);
/* harmony import */ var src_app_services_settings_tasks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/settings/tasks.service */ 91741);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 70325);










function ModifyTaskComponent_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Common.Validation.Required"));
} }
function ModifyTaskComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ModifyTaskComponent_div_22_div_1_Template, 3, 3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.updateValidator.arName.errors.required);
} }
function ModifyTaskComponent_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Common.Validation.Required"));
} }
function ModifyTaskComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ModifyTaskComponent_div_31_div_1_Template, 3, 3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.updateValidator.enName.errors.required);
} }
const _c0 = function () { return { "value": "300" }; };
function ModifyTaskComponent_div_39_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, "Common.Validation.Maxlength", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c0)));
} }
function ModifyTaskComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ModifyTaskComponent_div_39_div_1_Template, 3, 5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.updateValidator.description.errors.minlength || ctx_r2.updateValidator.description.errors.maxlength);
} }
const _c1 = function (a0) { return { "is-invalid": a0 }; };
const _c2 = function (a0) { return { "value": a0, "max": "300" }; };
class ModifyTaskComponent {
    constructor(appTranslation, alertify, formBuilder, tasksService, activeModal) {
        this.appTranslation = appTranslation;
        this.alertify = alertify;
        this.formBuilder = formBuilder;
        this.tasksService = tasksService;
        this.activeModal = activeModal;
        this.updatedSuccessfully = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.isSubmitting = false;
    }
    ngOnInit() {
        this.initEdtForm();
    }
    initEdtForm() {
        this.edtTaskForm = this.formBuilder.group({
            id: [''],
            arName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            enName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(300)]
        });
        if (this.task) {
            this.edtTaskForm.patchValue(this.task);
        }
    }
    get updateValidator() { return this.edtTaskForm.controls; }
    editTask() {
        if (this.edtTaskForm.valid) {
            this.isSubmitting = true;
            this.edtTaskForm.disable();
            Object.assign(this.task, this.edtTaskForm.getRawValue());
            this.tasksService.updateTask(this.task).subscribe(returnTask => {
                this.alertify.success(this.appTranslation.get('Common.Data.SavedSuccessfully'));
                this.updatedSuccessfully.emit(returnTask);
            }, error => { this.alertify.error(error); }, () => { this.isSubmitting = false; this.edtTaskForm.enable(); });
        }
        else {
            this.alertify.warning(this.appTranslation.get('Common.Data.Invalid'));
            this.edtTaskForm.markAllAsTouched();
            this.isSubmitting = false;
        }
    }
}
ModifyTaskComponent.ɵfac = function ModifyTaskComponent_Factory(t) { return new (t || ModifyTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_helpers_app_translation__WEBPACK_IMPORTED_MODULE_0__.AppTranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_helpers_Alertify__WEBPACK_IMPORTED_MODULE_1__.AlertifyService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_settings_tasks_service__WEBPACK_IMPORTED_MODULE_2__.TasksService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbActiveModal)); };
ModifyTaskComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ModifyTaskComponent, selectors: [["app-modify-task"]], outputs: { updatedSuccessfully: "updatedSuccessfully" }, decls: 45, vars: 47, consts: [[1, "modal-header"], [1, "modal-title"], [1, "fa", "fa-pencil"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", 3, "formGroup"], [1, "form-group", "position-relative"], ["for", "ronlyEditId", 1, "font-weight-bold"], ["type", "text", "formControlName", "id", "readonly", "", 1, "form-control", "default"], ["for", "txtEditArName", 1, "font-weight-bold"], [1, "text-danger"], ["formControlName", "arName", 1, "form-control", "default", 3, "placeholder", "ngClass"], ["class", "invalid-tooltip", 4, "ngIf"], ["for", "txtEditEnName", 1, "font-weight-bold"], ["formControlName", "enName", 1, "form-control", "default", 3, "placeholder", "ngClass"], ["for", "txtEditDescription", 1, "font-weight-bold"], ["id", "txtEditDescription", "name", "txtEditDescription", "rows", "6", "maxlength", "300", "formControlName", "description", 1, "form-control", "default", 3, "placeholder", "ngClass"], [1, "modal-footer", "text-right"], ["id", "btnEdtTask", "type", "button", 1, "btn", "btn-success", 3, "disabled", "click"], [1, "fa", 3, "ngClass"], [1, "invalid-tooltip"], [4, "ngIf"]], template: function ModifyTaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyTaskComponent_Template_button_click_5_listener() { return ctx.activeModal.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "strong", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, ModifyTaskComponent_div_22_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "strong", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, ModifyTaskComponent_div_31_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, ModifyTaskComponent_div_39_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModifyTaskComponent_Template_button_click_41_listener() { return ctx.editTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 18, "Tasks.EdtTaskTitle"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.edtTaskForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 20, "Tasks.Id"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 22, "Tasks.ArName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 24, "Tasks.ArName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](39, _c1, ctx.updateValidator.arName.errors && ctx.updateValidator.arName.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.updateValidator.arName.touched && ctx.updateValidator.arName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 26, "Tasks.EnName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](30, 28, "Tasks.EnName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](41, _c1, ctx.updateValidator.enName.errors && ctx.updateValidator.enName.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.updateValidator.enName.touched && ctx.updateValidator.enName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](35, 30, "Tasks.Description"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](37, 32, "Common.Form.MaxLength", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](43, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](38, 35, "Tasks.Description"))));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](45, _c1, ctx.updateValidator.description.errors && ctx.updateValidator.description.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.updateValidator.description.touched && ctx.updateValidator.description.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.isSubmitting || !ctx.edtTaskForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.isSubmitting ? "fa-circle-o-notch fa-spin" : "fa-send");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](44, 37, ctx.isSubmitting ? "Common.Data.SendingData" : "Common.CRUD.Save"), "\u00A0 ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 70568:
/*!**********************************************************************************!*\
  !*** ./src/app/components/settings/tasks/task-details/task-details.component.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskDetailsComponent": function() { return /* binding */ TaskDetailsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var src_app_services_users_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/users/auth.service */ 27704);
/* harmony import */ var src_app_helpers_permissions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_helpers/permissions.service */ 41010);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);






class TaskDetailsComponent {
    constructor(activeModal, authService, permissions) {
        this.activeModal = activeModal;
        this.authService = authService;
        this.permissions = permissions;
    }
    ngOnInit() {
    }
}
TaskDetailsComponent.ɵfac = function TaskDetailsComponent_Factory(t) { return new (t || TaskDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_users_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_helpers_permissions_service__WEBPACK_IMPORTED_MODULE_1__.PermissionsService)); };
TaskDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TaskDetailsComponent, selectors: [["app-task-details"]], decls: 47, vars: 30, consts: [[1, "modal-header"], [1, "modal-title"], [1, "fa", "fa-eye"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group"], ["for", "ronlyVewId", 1, "font-weight-bold"], [1, "form-control-plaintext"], ["for", "ronlyVewArName", 1, "font-weight-bold"], [1, "h6", "mb-0"], ["for", "ronlyVewEnName", 1, "font-weight-bold"], ["for", "ronlyVewDescription", 1, "font-weight-bold"], ["for", "ronlyVewIsEnabled", 1, "font-weight-bold"], ["for", "ronlyVewUpdatedDate", 1, "font-weight-bold"]], template: function TaskDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskDetailsComponent_Template_button_click_6_listener() { return ctx.activeModal.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](46, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 13, "Tasks.ArName"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 15, "Tasks.Id"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.task == null ? null : ctx.task.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 17, "Tasks.ArName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.task == null ? null : ctx.task.arName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 19, "Tasks.EnName"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.task == null ? null : ctx.task.enName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](31, 21, "Tasks.Description"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.task == null ? null : ctx.task.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](37, 23, "Tasks.IsEnabled"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.task == null ? null : ctx.task.isEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](43, 25, "Tasks.UpdatedDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](46, 27, ctx.task.updatedDate, "yyyy/MM/dd hh:mm"));
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe], encapsulation: 2 });


/***/ }),

/***/ 2001:
/*!****************************************************************************!*\
  !*** ./src/app/components/settings/tasks/task-list/task-list.component.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskListComponent": function() { return /* binding */ TaskListComponent; }
/* harmony export */ });
/* harmony import */ var _create_task_create_task_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create-task/create-task.component */ 29352);
/* harmony import */ var _modify_task_modify_task_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modify-task/modify-task.component */ 76710);
/* harmony import */ var _task_details_task_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task-details/task-details.component */ 70568);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_helpers_app_translation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_helpers/app-translation */ 4093);
/* harmony import */ var src_app_helpers_Alertify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_helpers/Alertify */ 99771);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var src_app_services_settings_tasks_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/settings/tasks.service */ 91741);
/* harmony import */ var src_app_helpers_url_query_string_builder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_helpers/url/query-string-builder */ 68552);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _shared_spinner_spinner_container_spinner_container_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/spinner/spinner-container/spinner-container.component */ 79438);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 70325);














function TaskListComponent_app_spinner_container_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-spinner-container", 33);
} }
function TaskListComponent_th_45_div_1_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i", 38);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("fa-sort-asc", ctx_r11.query.isSortAscending)("fa-sort-desc", !ctx_r11.query.isSortAscending);
} }
function TaskListComponent_th_45_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TaskListComponent_th_45_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14); const c_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r12.sortBy(c_r8.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, TaskListComponent_th_45_div_1_i_2_Template, 1, 4, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMapInterpolate1"]("align-middle text-", c_r8.align, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", c_r8.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r9.query.sortBy === c_r8.key);
} }
function TaskListComponent_th_45_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMapInterpolate1"]("align-middle text-", c_r8.align, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", c_r8.title, " ");
} }
function TaskListComponent_th_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, TaskListComponent_th_45_div_1_Template, 3, 5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, TaskListComponent_th_45_div_2_Template, 2, 4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](c_r8.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", c_r8.isSortable);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !c_r8.isSortable);
} }
const _c0 = function (a0) { return { "value": a0 }; };
function TaskListComponent_tr_52_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TaskListComponent_tr_52_Template_a_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r17.showTaskAddModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](12, 2, "Common.Messages.NotFoundAnyRecord", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](9, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 5, "Common.Data.Record"))));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](19, 7, "Common.CRUD.Add"), " ");
} }
function TaskListComponent_tr_53_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TaskListComponent_tr_53_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r25); const task_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r23.getTaskToEdit(task_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, "Common.CRUD.Edit"));
} }
function TaskListComponent_tr_53_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TaskListComponent_tr_53_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r28); const task_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r26.getTaskToViewDetails(task_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, "Common.Data.View"));
} }
const _c1 = function (a0) { return { "text-deleted": a0 }; };
function TaskListComponent_tr_53_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function TaskListComponent_tr_53_Template_input_change_10_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r30); const task_r19 = restoredCtx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r29.changeTaskStatus(task_r19, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, TaskListComponent_tr_53_button_17_Template, 3, 3, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, TaskListComponent_tr_53_button_18_Template, 3, 3, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r19 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](16, _c1, !task_r19.isEnabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("data-title", ctx_r3.columns[0] == null ? null : ctx_r3.columns[0].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](task_r19.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("data-title", ctx_r3.columns[1] == null ? null : ctx_r3.columns[1].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](task_r19.arName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("data-title", ctx_r3.columns[2] == null ? null : ctx_r3.columns[2].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](task_r19.enName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("data-title", ctx_r3.columns[3] == null ? null : ctx_r3.columns[3].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", task_r19.isEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("data-title", ctx_r3.columns[4] == null ? null : ctx_r3.columns[4].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](14, 13, task_r19.updatedDate, "yyyy/MM/dd hh:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", true);
} }
function TaskListComponent_ng_template_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, "\u00AB");
} }
function TaskListComponent_ng_template_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, "\u2039");
} }
function TaskListComponent_ng_template_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, "\u00BB");
} }
function TaskListComponent_ng_template_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0, "\u203A");
} }
const _c2 = function () { return ["/settings"]; };
const _c3 = function (a0) { return { "disabled-spinner-container": a0 }; };
class TaskListComponent {
    constructor(appTranslation, alertify, modalService, tasksService, queryStringBuilder) {
        this.appTranslation = appTranslation;
        this.alertify = alertify;
        this.modalService = modalService;
        this.tasksService = tasksService;
        this.queryStringBuilder = queryStringBuilder;
        this.isLoadingData = true;
        this.columns = [
            { title: this.appTranslation.get('Tasks.Id'), align: 'center', key: 'id' },
            { title: this.appTranslation.get('Tasks.ArName'), align: 'left', key: 'arName' },
            { title: this.appTranslation.get('Tasks.EnName'), align: 'right', key: 'enName' },
            { title: this.appTranslation.get('Tasks.IsEnabled'), align: 'center', key: 'isEnabled' },
            { title: this.appTranslation.get('Tasks.UpdatedDate'), align: 'center', key: 'updatedDate' },
            {}
        ];
        this.PAGE_SIZE = 10;
        this.query = { pageSize: this.PAGE_SIZE };
        queryStringBuilder.getQueryParams(this.query);
    }
    ngOnInit() {
        this.getAllTasks();
        this.entityCaption = this.appTranslation.get(this.appTranslation.get('Tasks.taskCaption'));
    }
    showTaskAddModal() {
        const config = {
            backdrop: 'static',
            size: 'lg',
            keyboard: false,
        };
        this.addModalRef = this.modalService.open(_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_0__.CreateTaskComponent, config);
        this.addModalRef.componentInstance.addSuccessfully.subscribe((newTask) => {
            this.addNewTaskToTasksList(newTask);
            this.addModalRef.close();
        });
    }
    addNewTaskToTasksList(newTask) {
        if (newTask) {
            this.tasks.unshift(newTask);
        }
    }
    changeTaskStatus(task, checkboxInput) {
        this.tasksService.changeTaskStatus(task.id, checkboxInput.currentTarget.checked).subscribe(result => {
            this.alertify.info('تم تغيير الحالة بنجاح');
            task.isEnabled = result;
        }, error => { this.alertify.error(error); });
    }
    getAllTasks() {
        this.queryStringBuilder.setQueryParams(this.query);
        this.isLoadingData = true;
        this.tasksService.getPagedTasks(this.query).subscribe((res) => {
            this.tasks = res.items;
            this.query = res.pagination;
        }, error => { this.alertify.error(this.appTranslation.getWithValue('Common.Data.errorGettingData', this.entityCaption)); this.isLoadingData = false; }, () => { this.isLoadingData = false; });
    }
    onFilterChange() {
        this.query.pageNumber = 1;
        this.query.refreshCounter = true;
        this.getAllTasks();
    }
    resetFilter() {
        this.query = {
            pageNumber: 1,
            refreshCounter: true,
            pageSize: this.PAGE_SIZE,
            filterText: ''
        };
        this.getAllTasks();
    }
    refreshData() {
        this.resetFilter();
        this.alertify.info('تم تحديث البيانات');
    }
    sortBy(columnName) {
        if (this.query.sortBy === columnName) {
            this.query.isSortAscending = !this.query.isSortAscending;
        }
        else {
            this.query.sortBy = columnName;
            this.query.isSortAscending = true;
        }
        this.getAllTasks();
    }
    onPageChange(event) {
        this.query.pageNumber = event;
        this.getAllTasks();
    }
    getTaskToEdit(currentTask) {
        this.tasksService.getTask(currentTask.id).subscribe((result) => {
            this.showTaskEditModal(currentTask, result);
        }, error => this.alertify.error(this.appTranslation.getWithValue('Common.Data.errorGettingData', this.entityCaption)));
    }
    showTaskEditModal(currentTask, apiTask) {
        const config = {
            backdrop: 'static',
            size: 'lg',
            keyboard: false,
        };
        this.edtModalRef = this.modalService.open(_modify_task_modify_task_component__WEBPACK_IMPORTED_MODULE_1__.ModifyTaskComponent, config);
        this.edtModalRef.componentInstance.task = apiTask;
        this.edtModalRef.componentInstance.updatedSuccessfully.subscribe((updatedTask) => {
            this.applyChangedTask(currentTask, updatedTask);
            this.edtModalRef.close();
        });
    }
    applyChangedTask(currentTask, updatedTask) {
        if (updatedTask) {
            Object.assign(currentTask, updatedTask);
        }
    }
    getTaskToViewDetails(currentTask) {
        this.tasksService.getTask(currentTask.id).subscribe((result) => {
            this.showTaskViewModal(currentTask, result);
        }, error => this.alertify.error(this.appTranslation.getWithValue('Common.Data.errorGettingData', this.entityCaption)));
    }
    showTaskViewModal(currentTask, apiTask) {
        const config = {
            backdrop: 'static',
            size: 'lg',
            keyboard: false,
        };
        this.viwModalRef = this.modalService.open(_task_details_task_details_component__WEBPACK_IMPORTED_MODULE_2__.TaskDetailsComponent, config);
        this.viwModalRef.componentInstance.task = apiTask;
    }
}
TaskListComponent.ɵfac = function TaskListComponent_Factory(t) { return new (t || TaskListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_helpers_app_translation__WEBPACK_IMPORTED_MODULE_3__.AppTranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_helpers_Alertify__WEBPACK_IMPORTED_MODULE_4__.AlertifyService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_settings_tasks_service__WEBPACK_IMPORTED_MODULE_5__.TasksService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_helpers_url_query_string_builder__WEBPACK_IMPORTED_MODULE_6__.QueryStringBuilder)); };
TaskListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: TaskListComponent, selectors: [["app-task-list"]], decls: 59, vars: 44, consts: [["id", "breadcrumbs", 1, "breadcrumbs"], [1, "container"], [1, "d-flex", "justify-content-between", "align-items-center"], [3, "routerLink"], [1, "content"], [1, "d-sm-flex", "flex-wrap", "justify-content-between", "p-2", "mb-2", "border", "rounded-lg", "bg-light"], [1, "form-inline"], [1, "input-group", "input-group-sm"], ["type", "text", "maxlength", "30", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange", "keyup.esc", "keyup.enter"], ["id", "button-addon4", 1, "input-group-append"], ["id", "btnResetFilter", "type", "button", 1, "btn", "btn-danger", 3, "title", "click"], [1, "fa", "fa-remove"], [1, "mb-2"], [1, "btn-group"], ["id", "btnShowAddModalAdd", "type", "button", 1, "btn", "btn-sm", "btn-light", "border", "btn-vertical", 3, "click"], [1, "fa", "fa-plus", "text-primary", 3, "title"], ["id", "btnRefreshData", "type", "button", 1, "btn", "btn-sm", "btn-light", "border", "btn-vertical", 3, "click"], [1, "fa", "fa-refresh", "text-success", 3, "title"], ["role", "menu", 1, "dropdown-menu"], [3, "ngClass"], ["class", "spinner-container", 4, "ngIf"], [1, "table-responsive", "table-sm-vertical"], [1, "table", "table-sm", "table-bordered", "table-hover", "table-light"], [1, "table-info"], [3, "class", 4, "ngFor", "ngForOf"], ["colspan", "100%", 1, "text-center"], [4, "ngIf"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center", 3, "boundaryLinks", "pageSize", "collectionSize", "page", "maxSize", "rotate", "pageChange"], ["ngbPaginationFirst", ""], ["ngbPaginationPrevious", ""], ["ngbPaginationLast", ""], ["ngbPaginationNext", ""], [1, "spinner-container"], [3, "class", "click", 4, "ngIf"], [3, "class", 4, "ngIf"], [3, "click"], ["class", "fa ", 3, "fa-sort-asc", "fa-sort-desc", 4, "ngIf"], [1, "fa"], [1, "container", "d-flex", "h-100"], [1, "row", "align-self-center", "justify-content-center", "w-100"], [1, "d-flex", "flex-column", "bd-highlight"], [1, "text-center"], [1, "fa-stack", "fa-3x"], [1, "fa", "fa-sticky-note-o", "fa-stack-1x", "text-primary"], [1, "fa", "fa-ban", "fa-stack-2x", "text-gold"], [1, "text-center", "mt-2", "text-dark"], [1, "text-center", "mt-2", "text-gold"], ["role", "button", 1, "btn", "btn-outline-gold", 3, "click"], [1, "fa", "fa-plus-circle"], [1, "align-middle", "text-center"], [1, "align-middle", "text-left"], [1, "align-middle", "text-right"], [1, "toggle", "lg"], ["type", "checkbox", 3, "checked", "change"], [1, "button-indecator"], ["role", "group", "aria-label", "...", 1, "btn-group", "btn-sm"], ["class", "btn btn-outline-warning btn-sm", "type", "button", 3, "title", "click", 4, "ngIf"], ["class", "btn btn-outline-info btn-sm", "type", "button", 3, "title", "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-warning", "btn-sm", 3, "title", "click"], [1, "fa", "fa-pencil"], ["type", "button", 1, "btn", "btn-outline-info", "btn-sm", 3, "title", "click"], [1, "fa", "fa-window-restore"]], template: function TaskListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "article", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function TaskListComponent_Template_input_ngModelChange_18_listener($event) { return ctx.query.filterText = $event; })("keyup.esc", function TaskListComponent_Template_input_keyup_esc_18_listener() { return ctx.resetFilter(); })("keyup.enter", function TaskListComponent_Template_input_keyup_enter_18_listener() { return ctx.onFilterChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TaskListComponent_Template_button_click_21_listener() { return ctx.resetFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](23, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TaskListComponent_Template_button_click_26_listener() { return ctx.showTaskAddModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](27, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TaskListComponent_Template_button_click_32_listener() { return ctx.refreshData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](33, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](38, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](40, TaskListComponent_app_spinner_container_40_Template, 1, 0, "app-spinner-container", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "table", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "thead", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](45, TaskListComponent_th_45_Template, 3, 5, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](52, TaskListComponent_tr_52_Template, 20, 11, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](53, TaskListComponent_tr_53_Template, 19, 18, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "ngb-pagination", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("pageChange", function TaskListComponent_Template_ngb_pagination_pageChange_54_listener($event) { return ctx.query.pageNumber = $event; })("pageChange", function TaskListComponent_Template_ngb_pagination_pageChange_54_listener($event) { return ctx.onPageChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](55, TaskListComponent_ng_template_55_Template, 1, 0, "ng-template", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](56, TaskListComponent_ng_template_56_Template, 1, 0, "ng-template", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](57, TaskListComponent_ng_template_57_Template, 1, 0, "ng-template", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](58, TaskListComponent_ng_template_58_Template, 1, 0, "ng-template", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 23, "Tasks.Services"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](41, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 25, "Menu.Dashboard"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](19, 27, "Common.Data.SearchTip"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.query.filterText);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](22, 29, "Common.Data.Reset"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](28, 31, "Common.CRUD.Add"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](31, 33, "Common.CRUD.Add"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](34, 35, "Common.Data.Refresh"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](37, 37, "Common.Data.Refresh"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](42, _c3, ctx.isLoadingData));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLoadingData);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](50, 39, "Common.Data.ResultsFound"), " [ ", ctx.query.totalItems || "0", " ] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !(ctx.tasks == null ? null : ctx.tasks.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.tasks);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("boundaryLinks", true)("pageSize", ctx.query.pageSize)("collectionSize", ctx.query.totalItems)("page", ctx.query.pageNumber)("maxSize", 5)("rotate", true);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPagination, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPaginationFirst, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPaginationPrevious, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPaginationLast, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbPaginationNext, _shared_spinner_spinner_container_spinner_container_component__WEBPACK_IMPORTED_MODULE_7__.SpinnerContainerComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_components_settings_settings_module_ts-es2015.js.map
(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkpart_time_app_spa"] = self["webpackChunkpart_time_app_spa"] || []).push([["src_app_components_payments_payments_module_ts"], {
    /***/
    36667: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Invoice": function Invoice() {
          return (
            /* binding */
            _Invoice
          );
        },

        /* harmony export */
        "SubscriptionPackageInvoice": function SubscriptionPackageInvoice() {
          return (
            /* binding */
            _SubscriptionPackageInvoice
          );
        },

        /* harmony export */
        "PaymentStatus": function PaymentStatus() {
          return (
            /* binding */
            _PaymentStatus
          );
        }
        /* harmony export */

      });

      var _Invoice = function _Invoice() {
        _classCallCheck(this, _Invoice);
      };

      var _SubscriptionPackageInvoice = function _SubscriptionPackageInvoice() {
        _classCallCheck(this, _SubscriptionPackageInvoice);
      };

      var _PaymentStatus;

      (function (PaymentStatus) {
        PaymentStatus[PaymentStatus["None"] = 0] = "None";
        PaymentStatus[PaymentStatus["Waiting"] = 1] = "Waiting";
        PaymentStatus[PaymentStatus["Confirmed"] = 2] = "Confirmed";
        PaymentStatus[PaymentStatus["Failed"] = 3] = "Failed";
      })(_PaymentStatus || (_PaymentStatus = {}));
      /***/

    },

    /***/
    6998: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChargeReturn": function ChargeReturn() {
          return (
            /* binding */
            _ChargeReturn
          );
        },

        /* harmony export */
        "ChargeStatus": function ChargeStatus() {
          return (
            /* binding */
            _ChargeStatus
          );
        }
        /* harmony export */

      });

      var _ChargeReturn = function _ChargeReturn() {
        _classCallCheck(this, _ChargeReturn);
      };

      var _ChargeStatus;

      (function (ChargeStatus) {
        ChargeStatus[ChargeStatus["Waiting"] = 0] = "Waiting";
        ChargeStatus[ChargeStatus["Free"] = 1] = "Free";
        ChargeStatus[ChargeStatus["INITIATED"] = 2] = "INITIATED";
        ChargeStatus[ChargeStatus["CAPTURED"] = 3] = "CAPTURED";
        ChargeStatus[ChargeStatus["Other"] = 4] = "Other";
      })(_ChargeStatus || (_ChargeStatus = {}));
      /***/

    },

    /***/
    10944: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InvoicesService": function InvoicesService() {
          return (
            /* binding */
            _InvoicesService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _utilities_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../utilities.service */
      72569);
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      53882);

      var _InvoicesService = /*#__PURE__*/function () {
        function _InvoicesService(http) {
          _classCallCheck(this, _InvoicesService);

          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.ApiUrl;
          this.invoicesUrl = "".concat(this.baseUrl, "invoices");
        }

        _createClass(_InvoicesService, [{
          key: "addNew",
          value: function addNew(newInvoice) {
            return this.http.post("".concat(this.invoicesUrl), newInvoice);
          }
        }, {
          key: "freeSubscription",
          value: function freeSubscription(packageId) {
            return this.http.post("".concat(this.invoicesUrl, "/free/").concat(packageId), null);
          }
        }, {
          key: "updateInvoice",
          value: function updateInvoice(updatedInvoice) {
            return this.http.put("".concat(this.invoicesUrl), updatedInvoice);
          }
        }, {
          key: "getInvoice",
          value: function getInvoice(id) {
            return this.http.get("".concat(this.invoicesUrl, "/").concat(id));
          }
        }, {
          key: "getInvoices",
          value: function getInvoices() {
            return this.http.get(this.invoicesUrl);
          }
        }, {
          key: "getPagedInvoices",
          value: function getPagedInvoices(query) {
            return _utilities_service__WEBPACK_IMPORTED_MODULE_0__.Utilities.getPaginationResult(this.http, "".concat(this.invoicesUrl, "/Pages"), query);
          }
        }, {
          key: "getInvoicesAsList",
          value: function getInvoicesAsList(query) {
            return this.http.get("".concat(this.invoicesUrl, "/list"));
          }
        }]);

        return _InvoicesService;
      }();

      _InvoicesService.ɵfac = function InvoicesService_Factory(t) {
        return new (t || _InvoicesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _InvoicesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _InvoicesService,
        factory: _InvoicesService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    20078: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PaymentsService": function PaymentsService() {
          return (
            /* binding */
            _PaymentsService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      92340);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      53882);

      var _PaymentsService = /*#__PURE__*/function () {
        function _PaymentsService(http) {
          _classCallCheck(this, _PaymentsService);

          this.http = http;
          this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ApiUrl + 'users/';
        }

        _createClass(_PaymentsService, [{
          key: "chargeTest",
          value: function chargeTest(userId, stripeToken) {
            return this.http.post("".concat(this.baseUrl).concat(userId, "/payments/charges/").concat(stripeToken, "/test"), {});
          }
        }, {
          key: "charge",
          value: function charge(userId, stripeToken, packageId) {
            return this.http.post("".concat(this.baseUrl).concat(userId, "/payments/charges/").concat(stripeToken, "/packages/").concat(packageId), {});
          }
        }, {
          key: "getPaymentForUser",
          value: function getPaymentForUser(userId) {
            return this.http.get("".concat(this.baseUrl).concat(userId, "/payment"));
          }
        }, {
          key: "confirmAfterRedirectFromPaymentGateway",
          value: function confirmAfterRedirectFromPaymentGateway(userId, chargeId) {
            return this.http.put("".concat(this.baseUrl).concat(userId, "/payments/charges/").concat(chargeId, "/confirm"), null);
          }
        }]);

        return _PaymentsService;
      }();

      _PaymentsService.ɵfac = function PaymentsService_Factory(t) {
        return new (t || _PaymentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _PaymentsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _PaymentsService,
        factory: _PaymentsService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    50022: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CheckoutComponent": function CheckoutComponent() {
          return (
            /* binding */
            _CheckoutComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_models_payments_tab_company__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/_models/payments/tab-company */
      6998);
      /* harmony import */


      var src_app_services_invoices_payments_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/_services/invoices/payments.service */
      20078);
      /* harmony import */


      var src_app_services_users_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/_services/users/auth.service */
      27704);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_helpers_url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/_helpers/url.service */
      83010);
      /* harmony import */


      var src_app_services_settings_subscription_packages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_services/settings/subscription-packages.service */
      64061);
      /* harmony import */


      var src_app_helpers_Alertify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_helpers/Alertify */
      99771);
      /* harmony import */


      var src_app_helpers_app_translation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_helpers/app-translation */
      4093);
      /* harmony import */


      var src_app_helpers_app_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/_helpers/app-title.service */
      6373);
      /* harmony import */


      var src_app_services_invoices_invoices_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/_services/invoices/invoices.service */
      10944);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _shared_spinner_spinner_container_spinner_container_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../shared/spinner/spinner-container/spinner-container.component */
      79438);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);

      var _c0 = ["cardInfo"];

      function CheckoutComponent_app_spinner_container_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-spinner-container", 24);
        }
      }

      function CheckoutComponent_ng_container_29_h2_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "$");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r6.subscriptionPackage == null ? null : ctx_r6.subscriptionPackage.price);
        }
      }

      function CheckoutComponent_ng_container_29_h2_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 1, "SubscriptionPackages.IsFree"));
        }
      }

      function CheckoutComponent_ng_container_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "small", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "\u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u0628\u0644\u063A");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, CheckoutComponent_ng_container_29_h2_4_Template, 5, 1, "h2", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, CheckoutComponent_ng_container_29_h2_5_Template, 4, 3, "h2", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !(ctx_r2.subscriptionPackage == null ? null : ctx_r2.subscriptionPackage.isFree));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r2.subscriptionPackage == null ? null : ctx_r2.subscriptionPackage.isFree);
        }
      }

      function CheckoutComponent_ng_container_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "small", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "\u0639\u062F\u062F \u0627\u0644\u062D\u0642\u0627\u0626\u0628");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "h5", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r3.subscriptionPackage == null ? null : ctx_r3.subscriptionPackage.employmentBags);
        }
      }

      function CheckoutComponent_ng_container_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "small", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "\u0645\u062F\u0629 \u0627\u0644\u0627\u0634\u062A\u0631\u0627\u0643");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "h5", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r4.subscriptionPackage == null ? null : ctx_r4.subscriptionPackage.totalDays, " \u064A\u0648\u0645");
        }
      }

      function CheckoutComponent_div_32_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r9.error);
        }
      }

      function CheckoutComponent_div_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "div", 31, 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Success! Your token is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, CheckoutComponent_div_32_div_6_Template, 2, 1, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r5.error);
        }
      }

      var _c1 = function _c1() {
        return ["/settings"];
      };

      var _c2 = function _c2(a0) {
        return {
          "disabled-spinner-container": a0
        };
      };

      var _c3 = function _c3(a0) {
        return {
          "col-sm-12": a0
        };
      };

      var _CheckoutComponent = /*#__PURE__*/function () {
        function _CheckoutComponent(cd, paymentsService, authService, location, route, urlService, subscriptionPackagesService, activatedRoute, router, alertify, appTranslation, appTitle, invoicesService) {
          var _this = this;

          _classCallCheck(this, _CheckoutComponent);

          this.cd = cd;
          this.paymentsService = paymentsService;
          this.authService = authService;
          this.location = location;
          this.route = route;
          this.urlService = urlService;
          this.subscriptionPackagesService = subscriptionPackagesService;
          this.activatedRoute = activatedRoute;
          this.router = router;
          this.alertify = alertify;
          this.appTranslation = appTranslation;
          this.appTitle = appTitle;
          this.invoicesService = invoicesService;
          this.cardHandler = this.onChange.bind(this);
          this.successPaid = false;
          this.cardFormLoader = true; // Page Declare

          this.title = '';
          this.viewedSuccessfully = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
          this.isLoadingData = true;
          this.isSubmitting = false;
          this.paramPackageId = 0;
          this.currentUserId = 0;
          this.ChargeStatusEnum = src_app_models_payments_tab_company__WEBPACK_IMPORTED_MODULE_0__.ChargeStatus;
          this.urlService.previousUrl$.subscribe(function (previousUrl) {
            if (previousUrl != null) _this.previousUrl = ["".concat(previousUrl)];else _this.previousUrl = [''];
          });
        }

        _createClass(_CheckoutComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var style = {
              base: {
                color: '#535353',
                lineHeight: '18px',
                fontFamily: 'sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                  color: 'rgba(0, 0, 0, 0.26)',
                  fontSize: '15px'
                }
              },
              invalid: {
                color: 'red'
              }
            };
            var labels = {
              cardNumber: "رقم البطاقة",
              expirationDate: "MM/YY | الشهر/السنة",
              cvv: "CVV الرمز",
              cardHolder: "اسم حامل البطاقة"
            }; //payment options

            var paymentOptions = {
              currencyCode: ["SAR"],
              labels: labels,
              TextDirection: 'rtl'
            }; //create element, pass style and payment options

            this.card = elements.create('card', {
              style: style
            }, paymentOptions); //mount element

            this.card.mount('#card-info'); // this.card.mount(this.cardInfo.nativeElement);

            this.card.addEventListener('change', this.cardHandler, true);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            try {
              // this.card.removeEventListener('change', this.cardHandler, true);
              this.card.destroy();
            } catch (error) {}
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.activatedRoute.paramMap.subscribe(function (paramMap) {
              if (!paramMap.has('packageId') || +paramMap.get('packageId') == 0) {
                _this2.alertify.error(_this2.appTranslation.get('Common.Messages.ErrorOnAction'));

                _this2.router.navigate([_this2.previousUrl]);

                return;
              }

              _this2.paramPackageId = +paramMap.get('packageId');

              _this2.getSubscriptionPackageDetails();
            });
          }
        }, {
          key: "getSubscriptionPackageDetails",
          value: function getSubscriptionPackageDetails() {
            var _this3 = this;

            this.isLoadingData = true;
            this.subscriptionPackagesService.getSubscriptionPackage(this.paramPackageId).subscribe(function (subscriptionPackageResult) {
              _this3.subscriptionPackage = subscriptionPackageResult;
              if (subscriptionPackageResult.isFree) _this3.cardFormLoader = false;
            }, function (error) {
              _this3.alertify.error(error);

              _this3.isLoadingData = false;

              _this3.router.navigate([_this3.previousUrl]);
            }, function () {
              _this3.title = "\u0627\u0644\u0627\u0634\u062A\u0631\u0627\u0643 \u0641\u064A ".concat(_this3.subscriptionPackage.arTitle, " (").concat(_this3.subscriptionPackage.categoryDescription, ")");
              setTimeout(function () {
                _this3.appTitle.changeNavigationTitle("\u0627\u0644\u0627\u0634\u062A\u0631\u0627\u0643 \u0641\u064A ".concat(_this3.subscriptionPackage.arTitle), "");

                _this3.appTitle.changeTabTitle("\u0627\u0644\u0627\u0634\u062A\u0631\u0627\u0643 \u0641\u064A \u0627\u0644\u0639\u0631\u0636 ".concat(_this3.subscriptionPackage.arTitle));
              }, 0);
              _this3.isLoadingData = false;
            });
          } //card change event listener

        }, {
          key: "onChange",
          value: function onChange(_ref) {
            var error = _ref.error;
            this.cardFormLoader = false;

            if (error) {
              if (error.key === 'error_invalid_cvv_characters') this.error = "";else if (error.key === "error_invalid_card_characters") this.error = "رقم بطاقتك غير صحيح";else if (error.key === "Your card's security code is incomplete.") this.error = "تاريخ إنتهاء البطاقة غير صحيح";else if (error.key === "card_number_required") this.error = "قُم بملئ بيانات البطاقة الخاصه بك قبل الارسال";else if (error.key === "error_invalid_card") this.error = "تحقق من صحة بيانات البطاقة الخاصة بك";else this.error = error.message;
            } else {
              this.error = null;
            }

            this.cd.detectChanges();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.isSubmitting = true;

                      if (this.subscriptionPackage.isFree === true) {
                        this.onFreeSubscriptionPackage();
                      } else {
                        this.onCreditCardSubscriptionPackage();
                      }

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } // عند الاشتراك بخدمة مجانية بدون استخدام بوابة الدفع

        }, {
          key: "onFreeSubscriptionPackage",
          value: function onFreeSubscriptionPackage() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.invoicesService.freeSubscription(this.paramPackageId).subscribe(function (invoice) {
                        if (invoice.isPaid === true) _this4.router.navigate(['/payments', 'checkout', 'free-subscription', invoice.id]);else _this4.alertify.error(_this4.appTranslation.get('Common.Messages.ErrorOnAction'));
                      }, function (error) {
                        _this4.alertify.error(error);

                        _this4.isSubmitting = false;
                      }, function () {
                        _this4.isSubmitting = false;
                      });

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } // عند الاشتراك بخدمة باستخدام بوابة الدفع

        }, {
          key: "onCreditCardSubscriptionPackage",
          value: function onCreditCardSubscriptionPackage() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this5 = this;

              var result;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return tap.createToken(this.card);

                    case 2:
                      result = _context3.sent;

                      if (result.error) {
                        this.error = "\u062D\u062F\u062B \u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u0633\u062F\u0627\u062F: \n ".concat(result.error.message);
                        this.isSubmitting = false;
                      } else {
                        // console.log('success token: ', result.id);
                        this.error = '';
                        this.paymentsService.charge(this.authService.currentUser.id, result.id.toString(), this.paramPackageId).subscribe(function (res) {
                          console.log(res);
                          if (res.paymentInvoice.chargeStatus === _this5.ChargeStatusEnum.INITIATED) window.location.href = res.chargeReturn.transaction.url;else if (res.paymentInvoice.chargeStatus === _this5.ChargeStatusEnum.CAPTURED) _this5.router.navigate(['/payments', 'checkout', 'gateway-result', res.chargeReturn.id]);else if (res.paymentInvoice.chargeStatus === _this5.ChargeStatusEnum.Free) _this5.router.navigate(['/payments', 'checkout', 'free-subscription', res.paymentInvoice.id]);else if (res.paymentInvoice.chargeStatus === _this5.ChargeStatusEnum.Other) {
                            _this5.alertify.error("Error: ".concat(res.paymentInvoice.chargeResponsiveCode, " <br>").concat(res.paymentInvoice.chargeResponsiveMessage));

                            _this5.error = "Error: ".concat(res.paymentInvoice.chargeResponsiveCode, " <br>").concat(res.paymentInvoice.chargeResponsiveMessage);
                            _this5.isSubmitting = false;
                          } else {
                            _this5.alertify.error(_this5.appTranslation.get('Common.Messages.ErrorOnAction'));

                            _this5.isSubmitting = false;
                          }
                        }, function (error) {
                          _this5.alertify.error(error);

                          _this5.isSubmitting = false; // this.router.navigate(['']);
                        });
                      }

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return _CheckoutComponent;
      }();

      _CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) {
        return new (t || _CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_invoices_payments_service__WEBPACK_IMPORTED_MODULE_1__.PaymentsService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_users_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_helpers_url_service__WEBPACK_IMPORTED_MODULE_3__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_settings_subscription_packages_service__WEBPACK_IMPORTED_MODULE_4__.SubscriptionPackagesService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_helpers_Alertify__WEBPACK_IMPORTED_MODULE_5__.AlertifyService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_helpers_app_translation__WEBPACK_IMPORTED_MODULE_6__.AppTranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_helpers_app_title_service__WEBPACK_IMPORTED_MODULE_7__.AppTitleService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_invoices_invoices_service__WEBPACK_IMPORTED_MODULE_8__.InvoicesService));
      };

      _CheckoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
        type: _CheckoutComponent,
        selectors: [["app-checkout"]],
        viewQuery: function CheckoutComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.cardInfo = _t.first);
          }
        },
        outputs: {
          viewedSuccessfully: "viewedSuccessfully"
        },
        decls: 38,
        vars: 23,
        consts: [["id", "breadcrumbs", 1, "breadcrumbs"], [1, "container"], [1, "d-flex", "justify-content-between", "align-items-center"], ["aria-hidden", "true", 1, "fa", "fa-cogs"], [3, "routerLink"], ["id", "profile", 1, "content"], [1, "container-fluid"], [1, "container", "px-0"], [1, "row"], [1, "container-fluid", "px-1", "px-md-2", "px-lg-4", "py-5", "mx-auto", 3, "ngClass"], ["class", "spinner-container", 4, "ngIf"], [1, "row", "d-flex", "justify-content-center"], [1, "col-xl-7", "col-lg-8", "col-md-9", "col-sm-11"], [1, "card", "border-0"], [1, "card-body", "px-2", "py-4"], [1, "container", 3, "ngSubmit"], ["checkout", "ngForm"], [1, "row", "justify-content-center"], [1, "mb-4", "text-info", "text-center"], [1, "col-sm-4", "text-center", "justify-content-center", "align-content-center", 3, "ngClass"], [4, "ngIf"], ["class", "col-sm-8 split-border pr-4 mt-3", 4, "ngIf"], ["id", "tap-btn", 1, "btn", "w-50", "btn-info", "mt-4", 3, "disabled"], [1, "fa", 3, "ngClass"], [1, "spinner-container"], [1, "text-sm", "text-muted"], [1, "col-12", "px-3", "justify-content-sm-center"], [1, "text-md", "font-weight-bold", "mr-2"], [1, "text-info"], [1, "mb-2"], [1, "col-sm-8", "split-border", "pr-4", "mt-3"], ["id", "card-info"], ["cardInfo", ""], ["id", "success", 2, "display", "none", "position", "relative", "float", "left"], ["id", "token"], ["class", "alert alert-danger mx-2", "id", "card-errors", "role", "alert", 4, "ngIf"], ["id", "card-errors", "role", "alert", 1, "alert", "alert-danger", "mx-2"]],
        template: function CheckoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "article", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, CheckoutComponent_app_spinner_container_17_Template, 1, 0, "app-spinner-container", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "form", 15, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngSubmit", function CheckoutComponent_Template_form_ngSubmit_22_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "h3", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](29, CheckoutComponent_ng_container_29_Template, 6, 2, "ng-container", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](30, CheckoutComponent_ng_container_30_Template, 5, 1, "ng-container", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](31, CheckoutComponent_ng_container_31_Template, 5, 1, "ng-container", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](32, CheckoutComponent_div_32_Template, 7, 1, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](35, "i", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](37, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("\xA0", ctx.title, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](18, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](11, 14, "Menu.Dashboard"));

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](19, _c2, ctx.isLoadingData || ctx.cardFormLoader || ctx.isSubmitting));

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isLoadingData || ctx.cardFormLoader);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](21, _c3, ctx.subscriptionPackage == null ? null : ctx.subscriptionPackage.isFree));

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.subscriptionPackage);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (ctx.subscriptionPackage == null ? null : ctx.subscriptionPackage.employmentBags) > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.subscriptionPackage);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !(ctx.subscriptionPackage == null ? null : ctx.subscriptionPackage.isFree));

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx.isSubmitting || ctx.isLoadingData || ctx.cardFormLoader);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx.isSubmitting ? "fa-circle-o-notch fa-spin" : "fa-credit-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("\xA0 ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](37, 16, ctx.isSubmitting ? "Common.Data.SendingData" : "SubscriptionPackages.Subscription"), "\xA0 ");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgForm, _shared_spinner_spinner_container_spinner_container_component__WEBPACK_IMPORTED_MODULE_9__.SpinnerContainerComponent],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe],
        styles: [".form-row[_ngcontent-%COMP%] {\n  width: 70%;\n  float: left;\n  background-color: #ededed;\n}\n#card-element[_ngcontent-%COMP%] {\n  background-color: transparent;\n  height: 40px;\n  border-radius: 4px;\n  border: 1px solid transparent;\n  box-shadow: 0 1px 3px 0 #e6ebf1;\n  transition: box-shadow 150ms ease;\n}\n#card-element--focus[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 3px 0 #cfd7df;\n}\n#card-element--invalid[_ngcontent-%COMP%] {\n  border-color: #fa755a;\n}\n#card-element--webkit-autofill[_ngcontent-%COMP%] {\n  background-color: #fefde5 !important;\n}\n.rtl[_ngcontent-%COMP%]   .split-border[_ngcontent-%COMP%] {\n  border-right: 1px solid #dfdfdf;\n}\n.split-border[_ngcontent-%COMP%] {\n  border-right: 1px solid #dfdfdf;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrb3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLCtCQUErQjtFQUUvQixpQ0FBaUM7QUFDbkM7QUFFQTtFQUNFLCtCQUErQjtBQUNqQztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7QUFFQTtFQUNFLCtCQUErQjtBQUNqQztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDIiwiZmlsZSI6ImNoZWNrb3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1yb3cge1xuICB3aWR0aDogNzAlO1xuICBmbG9hdDogbGVmdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcbn1cbiNjYXJkLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCAjZTZlYmYxO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJveC1zaGFkb3cgMTUwbXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAxNTBtcyBlYXNlO1xufVxuXG4jY2FyZC1lbGVtZW50LS1mb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwICNjZmQ3ZGY7XG59XG5cbiNjYXJkLWVsZW1lbnQtLWludmFsaWQge1xuICBib3JkZXItY29sb3I6ICNmYTc1NWE7XG59XG5cbiNjYXJkLWVsZW1lbnQtLXdlYmtpdC1hdXRvZmlsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZkZTUgIWltcG9ydGFudDtcbn1cblxuLnJ0bCAuc3BsaXQtYm9yZGVyIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RmZGZkZjtcbn1cblxuLnNwbGl0LWJvcmRlciB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZmRmZGY7XG59XG5cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    36337: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FreeSubscriptionResultComponent": function FreeSubscriptionResultComponent() {
          return (
            /* binding */
            _FreeSubscriptionResultComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_models_invoices_Invoice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/_models/invoices/Invoice */
      36667);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_invoices_invoices_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/_services/invoices/invoices.service */
      10944);
      /* harmony import */


      var src_app_services_users_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/_services/users/auth.service */
      27704);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_helpers_url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/_helpers/url.service */
      83010);
      /* harmony import */


      var src_app_helpers_Alertify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_helpers/Alertify */
      99771);
      /* harmony import */


      var src_app_helpers_app_translation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_helpers/app-translation */
      4093);
      /* harmony import */


      var src_app_helpers_app_title_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_helpers/app-title.service */
      6373);
      /* harmony import */


      var src_app_helpers_permissions_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/_helpers/permissions.service */
      41010);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _shared_spinner_spinner_container_spinner_container_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../shared/spinner/spinner-container/spinner-container.component */
      79438);
      /* harmony import */


      var _payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../payment-success/payment-success.component */
      83726);
      /* harmony import */


      var _payment_failed_payment_failed_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../payment-failed/payment-failed.component */
      33206);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);

      function FreeSubscriptionResultComponent_app_spinner_container_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-spinner-container", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("textClass", "h4")("waitingText", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 2, "Payments.Waiting"));
        }
      }

      function FreeSubscriptionResultComponent_app_payment_success_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-payment-success");
        }
      }

      function FreeSubscriptionResultComponent_app_payment_failed_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-payment-failed", 11);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("errorMessage", ctx_r2.message);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "disabled-spinner-container": a0
        };
      };

      var _FreeSubscriptionResultComponent = /*#__PURE__*/function () {
        function _FreeSubscriptionResultComponent(invoicesService, authService, route, urlService, activatedRoute, router, alertify, appTranslation, appTitle, permissions) {
          _classCallCheck(this, _FreeSubscriptionResultComponent);

          this.invoicesService = invoicesService;
          this.authService = authService;
          this.route = route;
          this.urlService = urlService;
          this.activatedRoute = activatedRoute;
          this.router = router;
          this.alertify = alertify;
          this.appTranslation = appTranslation;
          this.appTitle = appTitle;
          this.permissions = permissions;
          this.isLoadingData = true;
          this.isSubmitting = false;
          this.paramInvoiceId = 0;
          this.currentUserId = 0;
          this.isPaidSucceeded = null;
          this.message = null;
        }

        _createClass(_FreeSubscriptionResultComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.activatedRoute.paramMap.subscribe(function (paramMap) {
              if (!paramMap.has('invoiceId') || +paramMap.get('invoiceId') == 0) {
                _this6.alertify.error(_this6.appTranslation.get('Common.Messages.ErrorOnAction'));

                _this6.router.navigate(['']);

                return;
              }

              _this6.paramInvoiceId = +paramMap.get('invoiceId');

              _this6.getInvoiceDetails();
            });
          }
        }, {
          key: "getInvoiceDetails",
          value: function getInvoiceDetails() {
            var _this7 = this;

            this.isLoadingData = true;
            this.invoicesService.getInvoice(this.paramInvoiceId).subscribe(function (invoiceResult) {
              if (invoiceResult.status === src_app_models_invoices_Invoice__WEBPACK_IMPORTED_MODULE_0__.PaymentStatus.Confirmed) _this7.isPaidSucceeded = true;else {
                _this7.isPaidSucceeded = false;
                _this7.message = "".concat(invoiceResult.chargeResponsiveCode, " - ").concat(invoiceResult.chargeResponsiveMessage);
              }
            }, function (error) {
              _this7.alertify.error(_this7.appTranslation.get('Common.Messages.ErrorOnAction'));

              _this7.isLoadingData = false;
            }, function () {
              _this7.isLoadingData = false;
            });
          }
        }, {
          key: "startNow",
          value: function startNow() {
            if (this.authService.loggedIn()) {
              if (this.permissions.canApplyToTheJobs) this.router.navigate(['/jobs']);else if (this.permissions.canManageOrders) this.router.navigate(['/profile']);else if (this.permissions.canManageJobs) this.router.navigate(['/jobs/new']);else if (this.permissions.canOrderService) this.router.navigate(['/taskers/list']);else this.router.navigate(['/']);
            } else {
              this.router.navigate(['/register']);
            }
          }
        }]);

        return _FreeSubscriptionResultComponent;
      }();

      _FreeSubscriptionResultComponent.ɵfac = function FreeSubscriptionResultComponent_Factory(t) {
        return new (t || _FreeSubscriptionResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_invoices_invoices_service__WEBPACK_IMPORTED_MODULE_1__.InvoicesService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_users_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_helpers_url_service__WEBPACK_IMPORTED_MODULE_3__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_helpers_Alertify__WEBPACK_IMPORTED_MODULE_4__.AlertifyService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_helpers_app_translation__WEBPACK_IMPORTED_MODULE_5__.AppTranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_helpers_app_title_service__WEBPACK_IMPORTED_MODULE_6__.AppTitleService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_helpers_permissions_service__WEBPACK_IMPORTED_MODULE_7__.PermissionsService));
      };

      _FreeSubscriptionResultComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
        type: _FreeSubscriptionResultComponent,
        selectors: [["app-free-subscription-result"]],
        decls: 18,
        vars: 12,
        consts: [["id", "breadcrumbs", 1, "breadcrumbs"], [1, "container"], [1, "d-flex", "justify-content-between", "align-items-center"], ["aria-hidden", "true", 1, "fa", "fa-credit-card-alt"], [1, "text-muted"], ["id", "profile", 1, "content"], [1, "container-fluid", 3, "ngClass"], [3, "textClass", "waitingText", 4, "ngIf"], [4, "ngIf"], [3, "errorMessage", 4, "ngIf"], [3, "textClass", "waitingText"], [3, "errorMessage"]],
        template: function FreeSubscriptionResultComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](7, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](12, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "article", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](15, FreeSubscriptionResultComponent_app_spinner_container_15_Template, 2, 4, "app-spinner-container", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](16, FreeSubscriptionResultComponent_app_payment_success_16_Template, 1, 0, "app-payment-success", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, FreeSubscriptionResultComponent_app_payment_failed_17_Template, 1, 1, "app-payment-failed", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](7, 6, "Invoices.Status"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](12, 8, "Invoices.Status"));

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](10, _c0, ctx.isLoadingData || ctx.isSubmitting));

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.isLoadingData);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.isPaidSucceeded === true);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.isPaidSucceeded === false);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _shared_spinner_spinner_container_spinner_container_component__WEBPACK_IMPORTED_MODULE_8__.SpinnerContainerComponent, _payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_9__.PaymentSuccessComponent, _payment_failed_payment_failed_component__WEBPACK_IMPORTED_MODULE_10__.PaymentFailedComponent],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
        encapsulation: 2
      });
      /***/
    },

    /***/
    78859: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InvoiceDetailsComponent": function InvoiceDetailsComponent() {
          return (
            /* binding */
            _InvoiceDetailsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_models_invoices_Invoice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/_models/invoices/Invoice */
      36667);
      /* harmony import */


      var src_app_models_payments_tab_company__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/_models/payments/tab-company */
      6998);
      /* harmony import */


      var src_app_models_settings_subscription_package__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/_models/settings/subscription-package */
      3048);
      /* harmony import */


      var src_app_helpers_app_translation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/_helpers/app-translation */
      4093);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_helpers_url_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_helpers/url.service */
      83010);
      /* harmony import */


      var src_app_services_users_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_services/users/auth.service */
      27704);
      /* harmony import */


      var src_app_helpers_permissions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_helpers/permissions.service */
      41010);
      /* harmony import */


      var src_app_helpers_app_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/_helpers/app-title.service */
      6373);
      /* harmony import */


      var src_app_helpers_Alertify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/_helpers/Alertify */
      99771);
      /* harmony import */


      var src_app_services_invoices_invoices_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/_services/invoices/invoices.service */
      10944);
      /* harmony import */


      var src_app_services_invoices_payments_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/_services/invoices/payments.service */
      20078);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _shared_spinner_spinner_container_spinner_container_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../shared/spinner/spinner-container/spinner-container.component */
      79438);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);

      function InvoiceDetailsComponent_app_spinner_container_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "app-spinner-container", 25);
        }
      }

      var _c0 = function _c0(a1) {
        return ["/profile/", a1];
      };

      function InvoiceDetailsComponent_a_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](3, _c0, ctx_r1.invoice == null ? null : ctx_r1.invoice.userId));

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("[", ctx_r1.invoice == null ? null : ctx_r1.invoice.userId, "] ", (ctx_r1.invoice == null ? null : ctx_r1.invoice.subscriber == null ? null : ctx_r1.invoice.subscriber.fullName) || (ctx_r1.invoice.subscriber == null ? null : ctx_r1.invoice.subscriber.userName), "");
        }
      }

      function InvoiceDetailsComponent_p_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, ctx_r2.invoice == null ? null : ctx_r2.invoice.updatedDate, "yyyy/MM/dd hh:mm"));
        }
      }

      function InvoiceDetailsComponent_p_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, ctx_r3.invoice == null ? null : ctx_r3.invoice.createdDate, "yyyy/MM/dd hh:mm"));
        }
      }

      function InvoiceDetailsComponent_p_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, ctx_r4.invoice == null ? null : ctx_r4.invoice.paymentDate, "yyyy/MM/dd hh:mm"));
        }
      }

      var _c1 = function _c1(a1) {
        return ["/subscription-packages", a1, "details"];
      };

      function InvoiceDetailsComponent_a_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](2, _c1, ctx_r5.invoice == null ? null : ctx_r5.invoice.subscriptionPackageId));

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r5.invoice == null ? null : ctx_r5.invoice.subscriptionPackage == null ? null : ctx_r5.invoice.subscriptionPackage.title);
        }
      }

      function InvoiceDetailsComponent_strong_85_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, ctx_r6.invoice == null ? null : ctx_r6.invoice.packagePrice, "1.1-2"));
        }
      }

      function InvoiceDetailsComponent_strong_89_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r7.invoice == null ? null : ctx_r7.invoice.totalDays);
        }
      }

      function InvoiceDetailsComponent_div_91_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("", ctx_r16.invoice == null ? null : ctx_r16.invoice.employmentBagsBalance, " \u0645\u0646 ", ctx_r16.invoice == null ? null : ctx_r16.invoice.subscriptionPackage == null ? null : ctx_r16.invoice.subscriptionPackage.employmentBags, "");
        }
      }

      function InvoiceDetailsComponent_div_91_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, InvoiceDetailsComponent_div_91_span_10_Template, 2, 2, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 3, "Invoices.EmploymentBags"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](9, 5, "Invoices.EmploymentBagsBalance"), ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r8.invoice && (ctx_r8.invoice.subscriptionPackage == null ? null : ctx_r8.invoice.subscriptionPackage.category) === ctx_r8.PackageCategoryEnum.Business);
        }
      }

      function InvoiceDetailsComponent_div_92_i_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 24);
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", ctx_r17.invoice.isExpiry === true ? "fa-times-circle text-danger" : "fa-check-circle text-success");
        }
      }

      function InvoiceDetailsComponent_div_92_span_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "Invoices.Valid"), "");
        }
      }

      function InvoiceDetailsComponent_div_92_span_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "Invoices.Expired"), "");
        }
      }

      function InvoiceDetailsComponent_div_92_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, InvoiceDetailsComponent_div_92_i_7_Template, 1, 1, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, InvoiceDetailsComponent_div_92_span_8_Template, 3, 3, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, InvoiceDetailsComponent_div_92_span_9_Template, 3, 3, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 4, "Invoices.IsExpiry"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r9.invoice);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r9.invoice && ctx_r9.invoice.isExpiry === false);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r9.invoice && ctx_r9.invoice.isExpiry === true);
        }
      }

      function InvoiceDetailsComponent_div_93_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](8, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 2, "Invoices.ExpiryDate"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](8, 4, ctx_r10.invoice == null ? null : ctx_r10.invoice.expiryDate, "yyyy/MM/dd"));
        }
      }

      function InvoiceDetailsComponent_i_101_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 24);
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", ctx_r11.getPaymentStatusIconStyle(ctx_r11.invoice == null ? null : ctx_r11.invoice.chargeStatus));
        }
      }

      function InvoiceDetailsComponent_span_111_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r12.invoice == null ? null : ctx_r12.invoice.chargeId);
        }
      }

      function InvoiceDetailsComponent_div_129_span_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }
      }

      function InvoiceDetailsComponent_div_129_a_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "\u0631\u0627\u0628\u0637 \u0623\u0643\u0648\u0627\u062F \u0627\u0644\u062E\u0637\u0623");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }
      }

      function InvoiceDetailsComponent_div_129_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, InvoiceDetailsComponent_div_129_span_8_Template, 2, 0, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, InvoiceDetailsComponent_div_129_a_9_Template, 2, 0, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 4, "Invoices.ChargeResponsiveCode"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r13.invoice == null ? null : ctx_r13.invoice.chargeResponsiveCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r13.invoice && (ctx_r13.invoice == null ? null : ctx_r13.invoice.status) !== ctx_r13.PaymentStatusEnum.Confirmed);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r13.invoice && (ctx_r13.invoice == null ? null : ctx_r13.invoice.status) !== ctx_r13.PaymentStatusEnum.Confirmed);
        }
      }

      function InvoiceDetailsComponent_div_130_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 2, "Invoices.ChargeResponsiveMessage"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r14.invoice == null ? null : ctx_r14.invoice.chargeResponsiveMessage);
        }
      }

      function InvoiceDetailsComponent_div_131_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function InvoiceDetailsComponent_div_131_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);

            return ctx_r23.checkPaymentGatewayForThisCharge(ctx_r23.invoice.chargeStatus, ctx_r23.invoice.chargeId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx_r22.isSubmitting);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", ctx_r22.isSubmitting ? "fa-circle-o-notch fa-spin" : "fa-repeat");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\xA0 ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 3, ctx_r22.isSubmitting ? "Common.Data.SendingData" : "Invoices.CheckPayment"), "\xA0 ");
        }
      }

      function InvoiceDetailsComponent_div_131_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, InvoiceDetailsComponent_div_131_button_1_Template, 4, 5, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r15.invoice && ctx_r15.invoice.chargeStatus !== ctx_r15.ChargeStatusEnum.Free);
        }
      }

      var _c2 = function _c2() {
        return ["/payments", "invoices", "list"];
      };

      var _c3 = function _c3(a0) {
        return {
          "disabled-spinner-container": a0
        };
      };

      var _InvoiceDetailsComponent = /*#__PURE__*/function () {
        function _InvoiceDetailsComponent(appTranslation, router, activatedRoute, urlService, authService, permissions, appTitle, alertify, invoicesService, paymentsService) {
          var _this8 = this;

          _classCallCheck(this, _InvoiceDetailsComponent);

          this.appTranslation = appTranslation;
          this.router = router;
          this.activatedRoute = activatedRoute;
          this.urlService = urlService;
          this.authService = authService;
          this.permissions = permissions;
          this.appTitle = appTitle;
          this.alertify = alertify;
          this.invoicesService = invoicesService;
          this.paymentsService = paymentsService;
          this.isLoadingData = true;
          this.isSubmitting = false;
          this.currentUserId = 0;
          this.viewedSuccessfully = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
          this.paramInvoiceId = 0;
          this.PackageCategoryEnum = src_app_models_settings_subscription_package__WEBPACK_IMPORTED_MODULE_2__.PackageCategory;
          this.PaymentStatusEnum = src_app_models_invoices_Invoice__WEBPACK_IMPORTED_MODULE_0__.PaymentStatus;
          this.ChargeStatusEnum = src_app_models_payments_tab_company__WEBPACK_IMPORTED_MODULE_1__.ChargeStatus;
          this.urlService.previousUrl$.subscribe(function (previousUrl) {
            if (previousUrl != null) _this8.previousUrl = ["".concat(previousUrl)];else _this8.previousUrl = ['/invoices'];
          });
        }

        _createClass(_InvoiceDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            try {
              this.currentUserId = this.authService.getCurrentUserIdUsingToken();
            } catch (error) {
              console.log('anonymous user');
            }

            this.activatedRoute.paramMap.subscribe(function (paramMap) {
              if (!paramMap.has('invoiceId') || +paramMap.get('invoiceId') == 0) {
                _this9.alertify.error(_this9.appTranslation.get('Common.Messages.ErrorOnAction'));

                _this9.router.navigate([_this9.previousUrl]);

                return;
              }

              _this9.paramInvoiceId = +paramMap.get('invoiceId');

              _this9.getInvoiceDetails();
            });
          }
        }, {
          key: "getInvoiceDetails",
          value: function getInvoiceDetails() {
            var _this10 = this;

            this.isLoadingData = true;
            this.invoicesService.getInvoice(this.paramInvoiceId).subscribe(function (invoiceResult) {
              _this10.invoice = invoiceResult;
            }, function (error) {
              _this10.alertify.error(_this10.appTranslation.get('Common.Messages.ErrorOnAction'));

              _this10.isLoadingData = false;

              _this10.router.navigate([_this10.previousUrl]);
            }, function () {
              setTimeout(function () {
                _this10.appTitle.changeNavigationTitle("\u0627\u0644\u0633\u062C\u0644 \u0631\u0642\u0645 #".concat(_this10.paramInvoiceId), "");

                _this10.appTitle.changeTabTitle("\u0627\u0644\u0633\u062C\u0644 \u0631\u0642\u0645 #".concat(_this10.paramInvoiceId));
              }, 0);
              _this10.isLoadingData = false;
            });
          }
        }, {
          key: "getChargeStatusEnumIconStyle",
          value: function getChargeStatusEnumIconStyle(chargeStatus) {
            if (chargeStatus === this.ChargeStatusEnum.CAPTURED || chargeStatus === this.ChargeStatusEnum.Free) {
              return 'fa fa-check-circle text-success';
            } else if (chargeStatus === this.ChargeStatusEnum.Other) {
              return 'fa fa-ban text-warning';
            } else if (chargeStatus === this.ChargeStatusEnum.Waiting) {
              return 'fa fa-clock-o text-primary';
            } else if (chargeStatus === this.ChargeStatusEnum.INITIATED) {
              return 'fa fa-retweet text-primary';
            } else {
              return 'fa fa-info text-info';
            }
          }
        }, {
          key: "getPaymentStatusIconStyle",
          value: function getPaymentStatusIconStyle(status) {
            if (status === this.PaymentStatusEnum.Confirmed) {
              return 'fa fa-check-circle text-success';
            } else if (status === this.PaymentStatusEnum.Failed) {
              return 'fa fa-ban text-danger';
            } else if (status === this.PaymentStatusEnum.Waiting) {
              return 'fa fa-clock-o text-primary';
            } else {
              return 'fa fa-info text-info';
            }
          }
        }, {
          key: "checkPaymentGatewayForThisCharge",
          value: function checkPaymentGatewayForThisCharge(chargeStatus, chargeId) {
            var _this11 = this;

            this.isSubmitting = true;
            this.paymentsService.confirmAfterRedirectFromPaymentGateway(this.authService.currentUser.id, chargeId).subscribe(function (result) {
              console.log('the Object  :', result);

              if (_this11.isSubscriptionPackageInvoice(result)) {
                console.log('invoice :', result);
              }

              if (_this11.isChargeReturn(result)) {
                console.log('Charge :', result);
              }
            }, function (error) {
              _this11.alertify.error(error);

              _this11.isSubmitting = false;
            }, function () {
              _this11.isSubmitting = false;
            });
          }
        }, {
          key: "isSubscriptionPackageInvoice",
          value: function isSubscriptionPackageInvoice(obj) {
            return typeof obj.subscriptionPackageId === 'number';
          }
        }, {
          key: "isChargeReturn",
          value: function isChargeReturn(obj) {
            return typeof obj.status === 'string';
          }
        }]);

        return _InvoiceDetailsComponent;
      }();

      _InvoiceDetailsComponent.ɵfac = function InvoiceDetailsComponent_Factory(t) {
        return new (t || _InvoiceDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_helpers_app_translation__WEBPACK_IMPORTED_MODULE_3__.AppTranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_helpers_url_service__WEBPACK_IMPORTED_MODULE_4__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_users_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_helpers_permissions_service__WEBPACK_IMPORTED_MODULE_6__.PermissionsService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_helpers_app_title_service__WEBPACK_IMPORTED_MODULE_7__.AppTitleService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_helpers_Alertify__WEBPACK_IMPORTED_MODULE_8__.AlertifyService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_invoices_invoices_service__WEBPACK_IMPORTED_MODULE_9__.InvoicesService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_services_invoices_payments_service__WEBPACK_IMPORTED_MODULE_10__.PaymentsService));
      };

      _InvoiceDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
        type: _InvoiceDetailsComponent,
        selectors: [["app-invoice-details"]],
        outputs: {
          viewedSuccessfully: "viewedSuccessfully"
        },
        decls: 132,
        vars: 72,
        consts: [["id", "breadcrumbs", 1, "breadcrumbs"], [1, "container"], [1, "d-flex", "justify-content-between", "align-items-center"], ["aria-hidden", "true", 1, "fa", "fa-list-alt"], [3, "routerLink"], [1, "text-muted"], ["id", "profile", 1, "content"], [1, "container", 3, "ngClass"], ["class", "spinner-container", 4, "ngIf"], [1, "card"], ["id", "invoice-body", 1, "p-3"], [1, "card-block", "text-left"], [1, "form-row", "mb-2"], [1, "col-4", "h6", "mb-0"], [1, "fa", "fa-plus"], [1, "col-8"], [1, "h6", "mb-0"], ["class", "text-primary font-weight-bold", 3, "routerLink", 4, "ngIf"], ["class", "h6 mb-0", 4, "ngIf"], ["class", "text-info", 3, "routerLink", 4, "ngIf"], [4, "ngIf"], ["class", "form-row mb-2", 4, "ngIf"], ["class", "fa", 3, "ngClass", 4, "ngIf"], ["class", "badge badge-pill badge-warning text-dark", 4, "ngIf"], [1, "fa", 3, "ngClass"], [1, "spinner-container"], [1, "text-primary", "font-weight-bold", 3, "routerLink"], [1, "text-info", 3, "routerLink"], ["class", "badge badge-pill badge-info text-light", 4, "ngIf"], [1, "badge", "badge-pill", "badge-info", "text-light"], ["class", "text-success", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], [1, "text-success"], [1, "text-danger"], [1, "badge", "badge-pill", "badge-warning", "text-dark"], ["href", "https://tappayments.api-docs.io/2.0/response-codes/http-status-code-summary", "target", "_blank", 4, "ngIf"], ["href", "https://tappayments.api-docs.io/2.0/response-codes/http-status-code-summary", "target", "_blank"], ["type", "button", "class", "btn btn-primary btn-sm btn-block", 3, "disabled", "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "btn-block", 3, "disabled", "click"]],
        template: function InvoiceDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](7, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](12, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](16, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "article", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](19, InvoiceDetailsComponent_app_spinner_container_19_Template, 1, 0, "app-spinner-container", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](25, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](27, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](33, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](35, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](37, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](39, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](41, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](42);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](43, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](44, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](45, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](46, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](47, InvoiceDetailsComponent_a_47_Template, 2, 5, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](48, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](49, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](50, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](51);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](52, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](53, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](54, InvoiceDetailsComponent_p_54_Template, 3, 4, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](55, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](56, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](57, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](58);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](59, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](60, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](61, InvoiceDetailsComponent_p_61_Template, 3, 4, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](62, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](63, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](64, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](65);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](66, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](67, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](68, InvoiceDetailsComponent_p_68_Template, 3, 4, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](69, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](70, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](71, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](72);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](73, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](74, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](75, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](76, InvoiceDetailsComponent_a_76_Template, 3, 4, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](77, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](78, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](79, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](80);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](81, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](82, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](83, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](84, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](85, InvoiceDetailsComponent_strong_85_Template, 3, 4, "strong", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](86, " \u0631\u064A\u0627\u0644 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](87, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](88, "\u0644\u0645\u062F\u0629 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](89, InvoiceDetailsComponent_strong_89_Template, 2, 1, "strong", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](90, " \u064A\u0648\u0645\u0627\u064B");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](91, InvoiceDetailsComponent_div_91_Template, 11, 7, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](92, InvoiceDetailsComponent_div_92_Template, 10, 6, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](93, InvoiceDetailsComponent_div_93_Template, 9, 7, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](94, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](95, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](96, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](97);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](98, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](99, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](100, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](101, InvoiceDetailsComponent_i_101_Template, 1, 1, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](102);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](103, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](104, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](105, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](106, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](107);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](108, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](109, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](110, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](111, InvoiceDetailsComponent_span_111_Template, 2, 1, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](112, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](113, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](114, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](115);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](116, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](117, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](118, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](119, "i", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](120, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](121, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](122, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](123);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](124, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](125, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](126, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](127, "i", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](128);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](129, InvoiceDetailsComponent_div_129_Template, 10, 6, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](130, InvoiceDetailsComponent_div_130_Template, 8, 4, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](131, InvoiceDetailsComponent_div_131_Template, 2, 1, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](7, 39, "Invoices.Id"), ": # ");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](69, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](12, 41, "Invoices.invoiceCaption"));

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](16, 43, "Invoices.ViwInvoiceTitle"));

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](70, _c3, ctx.isLoadingData));

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isLoadingData);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](27, 45, "Invoices.Id"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.invoice == null ? null : ctx.invoice.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](35, 47, "Invoices.Description"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.invoice == null ? null : ctx.invoice.description);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](43, 49, "Invoices.UserId"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.invoice);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](52, 51, "Common.Data.LastUpdate"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.invoice);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](59, 53, "Invoices.CreatedDate"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.invoice);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](66, 55, "Invoices.PaymentDate"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.invoice);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](73, 57, "Invoices.SubscriptionPackageId"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.invoice);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](81, 59, "Invoices.PackagePrice"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.invoice);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.invoice);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.invoice && (ctx.invoice.subscriptionPackage == null ? null : ctx.invoice.subscriptionPackage.category) === ctx.PackageCategoryEnum.Business);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.invoice && (ctx.invoice == null ? null : ctx.invoice.status) === ctx.PaymentStatusEnum.Confirmed);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.invoice && (ctx.invoice == null ? null : ctx.invoice.status) === ctx.PaymentStatusEnum.Confirmed);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](98, 61, "Invoices.Status"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.invoice);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.invoice == null ? null : ctx.invoice.chargeStatusDescription, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](108, 63, "Invoices.ChargeId"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.invoice);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](116, 65, "Invoices.IsPaid"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", (ctx.invoice == null ? null : ctx.invoice.isPaid) ? "fa fa-check-circle text-success" : "fa fa-ban text-danger");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](124, 67, "Invoices.ChargeStatusName"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", ctx.getPaymentStatusIconStyle(ctx.invoice == null ? null : ctx.invoice.status));

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.invoice == null ? null : ctx.invoice.statusDescription, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.permissions.canManageInvoices);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.permissions.canManageInvoices);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.permissions.canManageInvoices);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _shared_spinner_spinner_container_spinner_container_component__WEBPACK_IMPORTED_MODULE_11__.SpinnerContainerComponent],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DecimalPipe],
        encapsulation: 2
      });
      /***/
    },

    /***/
    44033: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InvoiceListComponent": function InvoiceListComponent() {
          return (
            /* binding */
            _InvoiceListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_helpers_animations_enter_leave__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/_helpers/animations/enter-leave */
      38879);
      /* harmony import */


      var src_app_models_invoices_Invoice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/_models/invoices/Invoice */
      36667);
      /* harmony import */


      var src_app_models_payments_tab_company__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/_models/payments/tab-company */
      6998);
      /* harmony import */


      var src_app_models_settings_subscription_package__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/_models/settings/subscription-package */
      3048);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_helpers_app_translation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_helpers/app-translation */
      4093);
      /* harmony import */


      var src_app_helpers_Alertify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_helpers/Alertify */
      99771);
      /* harmony import */


      var src_app_services_invoices_invoices_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_services/invoices/invoices.service */
      10944);
      /* harmony import */


      var src_app_helpers_url_query_string_builder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/_helpers/url/query-string-builder */
      68552);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var _shared_spinner_spinner_container_spinner_container_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shared/spinner/spinner-container/spinner-container.component */
      79438);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);

      function InvoiceListComponent_app_spinner_container_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-spinner-container", 32);
        }
      }

      function InvoiceListComponent_th_38_div_1_i_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 37);
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("fa-sort-asc", ctx_r11.query.isSortAscending)("fa-sort-desc", !ctx_r11.query.isSortAscending);
        }
      }

      function InvoiceListComponent_th_38_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function InvoiceListComponent_th_38_div_1_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r14);

            var c_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r12.sortBy(c_r8.key);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, InvoiceListComponent_th_38_div_1_i_2_Template, 1, 4, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var c_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMapInterpolate1"]("align-middle text-", c_r8.align, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", c_r8.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r9.query.sortBy === c_r8.key);
        }
      }

      function InvoiceListComponent_th_38_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var c_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMapInterpolate1"]("align-middle text-", c_r8.align, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", c_r8.title, " ");
        }
      }

      function InvoiceListComponent_th_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, InvoiceListComponent_th_38_div_1_Template, 3, 5, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, InvoiceListComponent_th_38_div_2_Template, 2, 4, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var c_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](c_r8.style);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", c_r8.isSortable);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !c_r8.isSortable);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "value": a0
        };
      };

      function InvoiceListComponent_tr_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "th", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "i", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "i", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](13, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](12, 1, "Common.Messages.NotFoundAnyRecord", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](6, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](13, 4, "Common.Data.Record"))));
        }
      }

      function InvoiceListComponent_tr_46_div_13_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var invoice_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", invoice_r17.employmentBagsBalance, " \u0645\u0646 ", invoice_r17.subscriptionPackage == null ? null : invoice_r17.subscriptionPackage.employmentBags, "");
        }
      }

      function InvoiceListComponent_tr_46_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, InvoiceListComponent_tr_46_div_13_span_4_Template, 2, 2, "span", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var invoice_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 2, "Invoices.EmploymentBagsBalance"), ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (invoice_r17.subscriptionPackage == null ? null : invoice_r17.subscriptionPackage.category) === ctx_r19.PackageCategoryEnum.Business);
        }
      }

      function InvoiceListComponent_tr_46_ng_container_60_i_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 55);
        }

        if (rf & 2) {
          var invoice_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", invoice_r17.isExpiry === true ? "fa-times-circle text-danger" : "fa-check-circle text-success");
        }
      }

      function InvoiceListComponent_tr_46_ng_container_60_span_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "Invoices.Valid"), "");
        }
      }

      function InvoiceListComponent_tr_46_ng_container_60_span_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "Invoices.Expired"), "");
        }
      }

      function InvoiceListComponent_tr_46_ng_container_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, InvoiceListComponent_tr_46_ng_container_60_i_10_Template, 1, 1, "i", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, InvoiceListComponent_tr_46_ng_container_60_span_11_Template, 3, 3, "span", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, InvoiceListComponent_tr_46_ng_container_60_span_12_Template, 3, 3, "span", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var invoice_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](4, 5, invoice_r17.expiryDate, "yyyy/MM/dd"));

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](8, 8, "Invoices.IsExpiry"), ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", invoice_r17);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", invoice_r17 && invoice_r17.isExpiry === false);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", invoice_r17 && invoice_r17.isExpiry === true);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          delay: a0
        };
      };

      var _c2 = function _c2(a1) {
        return {
          value: "",
          params: a1
        };
      };

      var _c3 = function _c3(a2) {
        return ["/payments", "invoices", a2, "details"];
      };

      var _c4 = function _c4(a1) {
        return ["/subscription-packages", a1, "details"];
      };

      var _c5 = function _c5(a1) {
        return ["/profile/", a1];
      };

      function InvoiceListComponent_tr_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "td", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "a", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "td", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "a", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](11, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, InvoiceListComponent_tr_46_div_13_Template, 5, 4, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "a", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "td", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](24, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](25, "i", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](30, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](32, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](36, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](38, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "td", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](44, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](45, " \u0631\u064A\u0627\u0644 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47, "\u0644\u0645\u062F\u0629 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](49);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](50, " \u064A\u0648\u0645\u0627\u064B");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](51, "hr", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](55, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](57, "i", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](58);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "td", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](60, InvoiceListComponent_tr_46_ng_container_60_Template, 13, 10, "ng-container", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var invoice_r17 = ctx.$implicit;
          var i_r18 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@EnterItem", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](51, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](49, _c1, 100 * i_r18)));

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("data-title", ctx_r3.columns[0] == null ? null : ctx_r3.columns[0].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](53, _c3, invoice_r17 == null ? null : invoice_r17.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](invoice_r17.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("data-title", ctx_r3.columns[1] == null ? null : ctx_r3.columns[1].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](invoice_r17.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](55, _c4, invoice_r17 == null ? null : invoice_r17.subscriptionPackageId));

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](11, 30, "Invoices.SubscriptionPackageId"), ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", invoice_r17.subscriptionPackage == null ? null : invoice_r17.subscriptionPackage.title, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (invoice_r17.subscriptionPackage == null ? null : invoice_r17.subscriptionPackage.category) === ctx_r3.PackageCategoryEnum.Business);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](57, _c5, invoice_r17.userId));

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("[", invoice_r17.userId, "] ", (invoice_r17.subscriber == null ? null : invoice_r17.subscriber.fullName) || (invoice_r17.subscriber == null ? null : invoice_r17.subscriber.userName), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("data-title", ctx_r3.columns[2] == null ? null : ctx_r3.columns[2].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](invoice_r17.chargeId);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](24, 32, "Invoices.ChargeStatus"), ": ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx_r3.getChargeStatusEnumIconStyle(invoice_r17 == null ? null : invoice_r17.chargeStatus));

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", invoice_r17.chargeStatusDescription, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](30, 34, "Invoices.CreatedDate"), ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](32, 36, invoice_r17.createdDate, "yyyy/MM/dd hh:mm"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](36, 39, "Common.Data.LastUpdate"), ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](38, 41, invoice_r17.updatedDate, "yyyy/MM/dd hh:mm"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("data-title", ctx_r3.columns[3] == null ? null : ctx_r3.columns[3].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](44, 44, invoice_r17.packagePrice, "1.1-2"));

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](invoice_r17.totalDays);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](55, 47, "Invoices.IsPaid"), ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx_r3.getPaymentStatusIconStyle(invoice_r17 == null ? null : invoice_r17.status));

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", invoice_r17.statusDescription, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("data-title", ctx_r3.columns[4] == null ? null : ctx_r3.columns[4].title);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (invoice_r17 == null ? null : invoice_r17.status) === ctx_r3.PaymentStatusEnum.Confirmed);
        }
      }

      function InvoiceListComponent_ng_template_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0, "\xAB");
        }
      }

      function InvoiceListComponent_ng_template_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0, "\u2039");
        }
      }

      function InvoiceListComponent_ng_template_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0, "\xBB");
        }
      }

      function InvoiceListComponent_ng_template_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](0, "\u203A");
        }
      }

      var _c6 = function _c6(a0) {
        return {
          "disabled-spinner-container": a0
        };
      };

      var _InvoiceListComponent = /*#__PURE__*/function () {
        function _InvoiceListComponent(appTranslation, alertify, invoicesService, queryStringBuilder) {
          _classCallCheck(this, _InvoiceListComponent);

          this.appTranslation = appTranslation;
          this.alertify = alertify;
          this.invoicesService = invoicesService;
          this.queryStringBuilder = queryStringBuilder;
          this.isLoadingData = true;
          this.PackageCategoryEnum = src_app_models_settings_subscription_package__WEBPACK_IMPORTED_MODULE_3__.PackageCategory;
          this.PaymentStatusEnum = src_app_models_invoices_Invoice__WEBPACK_IMPORTED_MODULE_1__.PaymentStatus;
          this.ChargeStatusEnum = src_app_models_payments_tab_company__WEBPACK_IMPORTED_MODULE_2__.ChargeStatus;
          this.columns = [{
            title: this.appTranslation.get('Invoices.Id'),
            align: 'center',
            key: 'id'
          }, {
            title: this.appTranslation.get('Invoices.Description'),
            align: 'center',
            key: 'description'
          }, {
            title: this.appTranslation.get('Invoices.ChargeId'),
            align: 'center',
            key: 'chargeId'
          }, {
            title: this.appTranslation.get('Invoices.PackagePrice'),
            align: 'center',
            key: 'packagePrice'
          }, {
            title: this.appTranslation.get('Invoices.ExpiryDate'),
            align: 'center',
            key: 'totalDays'
          }];
          this.PAGE_SIZE = 10;
          this.query = {
            pageSize: this.PAGE_SIZE
          };
          queryStringBuilder.getQueryParams(this.query);
        }

        _createClass(_InvoiceListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAllInvoices();
            this.entityCaption = this.appTranslation.get(this.appTranslation.get('Invoices.invoiceCaption'));
          }
        }, {
          key: "getChargeStatusEnumIconStyle",
          value: function getChargeStatusEnumIconStyle(chargeStatus) {
            if (chargeStatus === this.ChargeStatusEnum.CAPTURED || chargeStatus === this.ChargeStatusEnum.Free) {
              return 'fa fa-check-circle text-success';
            } else if (chargeStatus === this.ChargeStatusEnum.Other) {
              return 'fa fa-ban text-warning';
            } else if (chargeStatus === this.ChargeStatusEnum.Waiting) {
              return 'fa fa-clock-o text-primary';
            } else if (chargeStatus === this.ChargeStatusEnum.INITIATED) {
              return 'fa fa-retweet text-primary';
            } else {
              return 'fa fa-info text-info';
            }
          }
        }, {
          key: "getPaymentStatusIconStyle",
          value: function getPaymentStatusIconStyle(status) {
            if (status === this.PaymentStatusEnum.Confirmed) {
              return 'fa fa-check-circle text-success';
            } else if (status === this.PaymentStatusEnum.Failed) {
              return 'fa fa-ban text-danger';
            } else if (status === this.PaymentStatusEnum.Waiting) {
              return 'fa fa-clock-o text-primary';
            } else {
              return 'fa fa-info text-info';
            }
          }
        }, {
          key: "getAllInvoices",
          value: function getAllInvoices() {
            var _this12 = this;

            this.queryStringBuilder.setQueryParams(this.query);
            this.isLoadingData = true;
            this.invoicesService.getPagedInvoices(this.query).subscribe(function (res) {
              _this12.invoices = res.items;
              _this12.query = res.pagination;
            }, function (error) {
              _this12.alertify.error(_this12.appTranslation.getWithValue('Common.Data.errorGettingData', _this12.entityCaption));

              _this12.isLoadingData = false;
            }, function () {
              _this12.isLoadingData = false;
            });
          }
        }, {
          key: "onFilterChange",
          value: function onFilterChange() {
            this.query.pageNumber = 1;
            this.query.refreshCounter = true;
            this.getAllInvoices();
          }
        }, {
          key: "resetFilter",
          value: function resetFilter() {
            this.query = {
              pageNumber: 1,
              refreshCounter: true,
              pageSize: this.PAGE_SIZE,
              filterText: ''
            };
            this.getAllInvoices();
          }
        }, {
          key: "refreshData",
          value: function refreshData() {
            this.resetFilter();
            this.alertify.info('تم تحديث البيانات');
          }
        }, {
          key: "sortBy",
          value: function sortBy(columnName) {
            if (this.query.sortBy === columnName) {
              this.query.isSortAscending = !this.query.isSortAscending;
            } else {
              this.query.sortBy = columnName;
              this.query.isSortAscending = true;
            }

            this.getAllInvoices();
          }
        }, {
          key: "onPageChange",
          value: function onPageChange(event) {
            this.query.pageNumber = event;
            this.getAllInvoices();
          }
        }, {
          key: "checkPaymentGatewayForThisCharge",
          value: function checkPaymentGatewayForThisCharge(chargeStatus, chargeId) {}
        }]);

        return _InvoiceListComponent;
      }();

      _InvoiceListComponent.ɵfac = function InvoiceListComponent_Factory(t) {
        return new (t || _InvoiceListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_helpers_app_translation__WEBPACK_IMPORTED_MODULE_4__.AppTranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_helpers_Alertify__WEBPACK_IMPORTED_MODULE_5__.AlertifyService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_invoices_invoices_service__WEBPACK_IMPORTED_MODULE_6__.InvoicesService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_helpers_url_query_string_builder__WEBPACK_IMPORTED_MODULE_7__.QueryStringBuilder));
      };

      _InvoiceListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
        type: _InvoiceListComponent,
        selectors: [["app-invoice-list"]],
        decls: 52,
        vars: 36,
        consts: [["id", "breadcrumbs", 1, "breadcrumbs"], [1, "container"], [1, "d-flex", "justify-content-between", "align-items-center"], ["aria-hidden", "true", 1, "fa", "fa-book"], [1, "text-muted"], ["id", "profile", 1, "content"], [1, "container-fluid"], [1, "d-sm-flex", "flex-wrap", "justify-content-between", "p-2", "mb-2", "border", "rounded-lg", "bg-light"], [1, "form-inline"], [1, "input-group", "input-group-sm"], ["type", "text", "maxlength", "30", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange", "keyup.esc", "keyup.enter"], ["id", "button-addon4", 1, "input-group-append"], ["id", "btnResetFilter", "type", "button", 1, "btn", "btn-danger", 3, "title", "click"], [1, "fa", "fa-remove"], [1, "mb-2"], [1, "btn-group"], ["id", "btnRefreshData", "type", "button", 1, "btn", "btn-sm", "btn-light", "border", "btn-vertical", 3, "click"], [1, "fa", "fa-refresh", "text-success", 3, "title"], [3, "ngClass"], ["class", "spinner-container", 4, "ngIf"], [1, "table-responsive", "table-sm-vertical"], [1, "table", "table-sm", "table-bordered", "table-striped", "table-light"], [1, "table-info"], [3, "class", 4, "ngFor", "ngForOf"], ["colspan", "100%", 1, "text-center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center", 3, "boundaryLinks", "pageSize", "collectionSize", "page", "maxSize", "rotate", "pageChange"], ["ngbPaginationFirst", ""], ["ngbPaginationPrevious", ""], ["ngbPaginationLast", ""], ["ngbPaginationNext", ""], [1, "spinner-container"], [3, "class", "click", 4, "ngIf"], [3, "class", 4, "ngIf"], [3, "click"], ["class", "fa ", 3, "fa-sort-asc", "fa-sort-desc", 4, "ngIf"], [1, "fa"], [1, "container", "d-flex", "h-100"], [1, "row", "align-self-center", "justify-content-center", "w-100"], [1, "d-flex", "flex-column", "bd-highlight"], [1, "text-center"], [1, "fa-stack", "fa-3x"], [1, "fa", "fa-sticky-note-o", "fa-stack-1x", "text-primary"], [1, "fa", "fa-ban", "fa-stack-2x", "text-gold"], [1, "text-center", "mt-2", "text-info"], [1, "align-middle", "text-center"], [1, "text-info", 3, "routerLink"], [1, "align-middle", "text-left"], [1, "badge", "badge-pill", "badge-info", "text-light"], [1, "text-light", 3, "routerLink"], ["class", "small", 4, "ngIf"], [1, "small"], [1, "text-primary", "font-weight-bold", 3, "routerLink"], [1, "badge", "badge-pill", "badge-warning", "text-dark"], [1, "fa", 3, "ngClass"], [1, "m-0", "py-1", "p-0"], [1, "small", "text-left"], ["class", "badge badge-pill badge-info text-light", 4, "ngIf"], [1, ""], [1, "badge", "badge-pill", "badge-primary"], [1, "badge", "badge-xl", "align-middle", "text-left"], ["class", "fa", 3, "ngClass", 4, "ngIf"], ["class", "text-success", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], [1, "text-success"], [1, "text-danger"]],
        template: function InvoiceListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](12, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "article", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function InvoiceListComponent_Template_input_ngModelChange_18_listener($event) {
              return ctx.query.filterText = $event;
            })("keyup.esc", function InvoiceListComponent_Template_input_keyup_esc_18_listener() {
              return ctx.resetFilter();
            })("keyup.enter", function InvoiceListComponent_Template_input_keyup_enter_18_listener() {
              return ctx.onFilterChange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](19, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function InvoiceListComponent_Template_button_click_21_listener() {
              return ctx.resetFilter();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](22, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](24, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function InvoiceListComponent_Template_button_click_26_listener() {
              return ctx.refreshData();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](27, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](28, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](31, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](33, InvoiceListComponent_app_spinner_container_33_Template, 1, 0, "app-spinner-container", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "table", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "thead", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](38, InvoiceListComponent_th_38_Template, 3, 5, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "tfoot");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "tr", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "th", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](43, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](45, InvoiceListComponent_tr_45_Template, 14, 8, "tr", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](46, InvoiceListComponent_tr_46_Template, 61, 59, "tr", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "ngb-pagination", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("pageChange", function InvoiceListComponent_Template_ngb_pagination_pageChange_47_listener($event) {
              return ctx.query.pageNumber = $event;
            })("pageChange", function InvoiceListComponent_Template_ngb_pagination_pageChange_47_listener($event) {
              return ctx.onPageChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](48, InvoiceListComponent_ng_template_48_Template, 1, 0, "ng-template", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](49, InvoiceListComponent_ng_template_49_Template, 1, 0, "ng-template", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](50, InvoiceListComponent_ng_template_50_Template, 1, 0, "ng-template", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](51, InvoiceListComponent_ng_template_51_Template, 1, 0, "ng-template", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 20, "Invoices.invoiceCaption"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](12, 22, "Invoices.invoiceCaption"));

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](19, 24, "Common.Data.SearchTip"));

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.query.filterText);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](22, 26, "Common.Data.Reset"));

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](28, 28, "Common.Data.Refresh"));

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](31, 30, "Common.Data.Refresh"));

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](34, _c6, ctx.isLoadingData));

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isLoadingData);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.columns);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](43, 32, "Common.Data.ResultsFound"), " [ ", ctx.query.totalItems || "0", " ] ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !(ctx.invoices == null ? null : ctx.invoices.length));

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.invoices);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("boundaryLinks", true)("pageSize", ctx.query.pageSize)("collectionSize", ctx.query.totalItems)("page", ctx.query.pageNumber)("maxSize", 5)("rotate", true);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbPagination, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbPaginationFirst, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbPaginationPrevious, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbPaginationLast, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbPaginationNext, _shared_spinner_spinner_container_spinner_container_component__WEBPACK_IMPORTED_MODULE_8__.SpinnerContainerComponent, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkWithHref],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DecimalPipe],
        encapsulation: 2,
        data: {
          animation: [src_app_helpers_animations_enter_leave__WEBPACK_IMPORTED_MODULE_0__.enterItem]
        }
      });
      /***/
    },

    /***/
    33206: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PaymentFailedComponent": function PaymentFailedComponent() {
          return (
            /* binding */
            _PaymentFailedComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);

      function PaymentFailedComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
        }
      }

      var _c0 = function _c0() {
        return ["/contact-us"];
      };

      var _PaymentFailedComponent = /*#__PURE__*/function () {
        function _PaymentFailedComponent() {
          _classCallCheck(this, _PaymentFailedComponent);

          this.errorMessage = null;
        }

        _createClass(_PaymentFailedComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _PaymentFailedComponent;
      }();

      _PaymentFailedComponent.ɵfac = function PaymentFailedComponent_Factory(t) {
        return new (t || _PaymentFailedComponent)();
      };

      _PaymentFailedComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _PaymentFailedComponent,
        selectors: [["app-payment-failed"]],
        inputs: {
          errorMessage: "errorMessage"
        },
        decls: 19,
        vars: 6,
        consts: [[1, "jumbotron", "text-center"], [1, "display-5", "text-danger"], [1, "lead"], [1, "container"], ["src", "assets/img/payment-security-bank-svgrepo-com.svg", "alt", "", 1, "img-fluid", "mx-auto", "d-block", 2, "max-width", "400px"], ["class", "alert alert-danger small", 4, "ngIf"], [1, "lead", "text-info"], [1, "h6", "text-dark"], [1, "align-self-center", "my-3"], [1, "btn", "btn-warning", "w-50", "btn-sm", 3, "routerLink"], ["href", "https://wa.me/message/Z5QMRKHHIEKYL1", "target", "_blank", 1, "btn", "btn-success", "w-50", "btn-sm"], ["aria-hidden", "true", 1, "fa", "fa-whatsapp", "px-1"], [1, "alert", "alert-danger", "small"]],
        template: function PaymentFailedComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0646\u0639\u062A\u0630\u0631 \u0644\u0645 \u062A\u0643\u062A\u0645\u0644 \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u062F\u0641\u0639!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u0644\u0645 \u064A\u062A\u0645 \u062A\u0623\u0643\u064A\u062F \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u062F\u0641\u0639 \u0627\u0644\u062E\u0627\u0635\u0647 \u0628\u0643 \u0648\u064A\u0645\u0643\u0646\u0643 \u0645\u0639\u0627\u0648\u062F\u0629 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0645\u0631\u0629\u064B \u0623\u062E\u0631\u0649 . ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PaymentFailedComponent_div_7_Template, 2, 1, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ". \u0641\u064A \u062D\u0627\u0644\u0629 \u0627\u0633\u062A\u0645\u0631\u0627\u0631 \u0627\u0644\u0645\u0634\u0643\u0644\u0629 \u0623\u0648 \u062A\u0645 \u062E\u0635\u0645 \u0645\u0628\u0644\u063A \u0645\u0646\u0643 \u062F\u0648\u0646 \u062A\u0641\u0639\u064A\u0644 \u0627\u0634\u062A\u0631\u0627\u0643\u0643 \u0641\u064A \u0627\u0644\u0645\u0648\u0642\u0639 \u0641\u0636\u0644\u0627\u064B \u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0645\u0646 \u062E\u0644\u0627\u0644 \u0627\u0644\u0632\u0631 \u0627\u0644\u0630\u064A \u0628\u0627\u0644\u0623\u0633\u0641\u0644 \u0623\u0648 \u0639\u0628\u0631 \u0627\u0644\u0648\u0627\u062A\u0633 \u0623\u0628");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0644\u0645\u0633\u0627\u0639\u062F\u062A\u0643");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 3, "SocialMedias.WhatsApp"), "");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
        encapsulation: 2
      });
      /***/
    },

    /***/
    39445: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PaymentResultComponent": function PaymentResultComponent() {
          return (
            /* binding */
            _PaymentResultComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_models_invoices_Invoice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/_models/invoices/Invoice */
      36667);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_invoices_payments_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/_services/invoices/payments.service */
      20078);
      /* harmony import */


      var src_app_services_users_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/_services/users/auth.service */
      27704);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_helpers_url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/_helpers/url.service */
      83010);
      /* harmony import */


      var src_app_helpers_Alertify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_helpers/Alertify */
      99771);
      /* harmony import */


      var src_app_helpers_app_translation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_helpers/app-translation */
      4093);
      /* harmony import */


      var src_app_helpers_app_title_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_helpers/app-title.service */
      6373);
      /* harmony import */


      var src_app_helpers_permissions_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/_helpers/permissions.service */
      41010);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _shared_spinner_spinner_container_spinner_container_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../shared/spinner/spinner-container/spinner-container.component */
      79438);
      /* harmony import */


      var _payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../payment-success/payment-success.component */
      83726);
      /* harmony import */


      var _payment_failed_payment_failed_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../payment-failed/payment-failed.component */
      33206);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);

      function PaymentResultComponent_app_spinner_container_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-spinner-container", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](1, "translate");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("textClass", "h4")("waitingText", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](1, 2, "Payments.Waiting"));
        }
      }

      function PaymentResultComponent_app_payment_success_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-payment-success");
        }
      }

      function PaymentResultComponent_app_payment_failed_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-payment-failed", 11);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("errorMessage", ctx_r2.message);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "disabled-spinner-container": a0
        };
      };

      var _PaymentResultComponent = /*#__PURE__*/function () {
        function _PaymentResultComponent(paymentsService, authService, route, urlService, activatedRoute, router, alertify, appTranslation, appTitle, permissions) {
          var _this13 = this;

          _classCallCheck(this, _PaymentResultComponent);

          this.paymentsService = paymentsService;
          this.authService = authService;
          this.route = route;
          this.urlService = urlService;
          this.activatedRoute = activatedRoute;
          this.router = router;
          this.alertify = alertify;
          this.appTranslation = appTranslation;
          this.appTitle = appTitle;
          this.permissions = permissions;
          this.isLoadingData = true;
          this.isSubmitting = false;
          this.paramTapId = '';
          this.currentUserId = 0;
          this.isPaidSucceeded = null;
          this.message = null;
          this.route.queryParams.subscribe(function (params) {
            _this13.paramTapId = params['tap_id'];
          });
        }

        _createClass(_PaymentResultComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this14 = this;

            this.activatedRoute.paramMap.subscribe(function (paramMap) {
              if (_this14.paramTapId) {
                console.log(_this14.paramTapId);

                _this14.paymentsService.confirmAfterRedirectFromPaymentGateway(_this14.authService.currentUser.id, _this14.paramTapId).subscribe(function (result) {
                  console.log('the Object  :', result);

                  if (_this14.isSubscriptionPackageInvoice(result)) {
                    var subscriptionPackageInvoice = result;
                    if (subscriptionPackageInvoice.status === src_app_models_invoices_Invoice__WEBPACK_IMPORTED_MODULE_0__.PaymentStatus.Confirmed) _this14.isPaidSucceeded = true;else {
                      _this14.isPaidSucceeded = false;
                      _this14.message = "".concat(subscriptionPackageInvoice.chargeResponsiveCode, " - ").concat(subscriptionPackageInvoice.chargeResponsiveMessage);
                    }
                  }

                  if (_this14.isChargeReturn(result)) {
                    var chargeReturn = result;
                    if (chargeReturn.status === 'CAPTURED') _this14.isPaidSucceeded = true;else {
                      _this14.isPaidSucceeded = false;
                      _this14.message = "".concat(chargeReturn.response.code, " - ").concat(chargeReturn.response.message);
                    }
                  }
                }, function (error) {
                  _this14.alertify.error(error);

                  _this14.isLoadingData = false;
                }, function () {
                  _this14.isLoadingData = false;
                });
              }
            });
          }
        }, {
          key: "isSubscriptionPackageInvoice",
          value: function isSubscriptionPackageInvoice(obj) {
            return typeof obj.subscriptionPackageId === 'number';
          }
        }, {
          key: "isChargeReturn",
          value: function isChargeReturn(obj) {
            return typeof obj.status === 'string';
          }
        }, {
          key: "startNow",
          value: function startNow() {
            if (this.authService.loggedIn()) {
              if (this.permissions.canApplyToTheJobs) this.router.navigate(['/jobs']);else if (this.permissions.canManageOrders) this.router.navigate(['/profile']);else if (this.permissions.canManageJobs) this.router.navigate(['/jobs/new']);else if (this.permissions.canOrderService) this.router.navigate(['/taskers/list']);else this.router.navigate(['/']);
            } else {
              this.router.navigate(['/register']);
            }
          }
        }]);

        return _PaymentResultComponent;
      }();

      _PaymentResultComponent.ɵfac = function PaymentResultComponent_Factory(t) {
        return new (t || _PaymentResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_invoices_payments_service__WEBPACK_IMPORTED_MODULE_1__.PaymentsService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_users_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_helpers_url_service__WEBPACK_IMPORTED_MODULE_3__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_helpers_Alertify__WEBPACK_IMPORTED_MODULE_4__.AlertifyService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_helpers_app_translation__WEBPACK_IMPORTED_MODULE_5__.AppTranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_helpers_app_title_service__WEBPACK_IMPORTED_MODULE_6__.AppTitleService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_helpers_permissions_service__WEBPACK_IMPORTED_MODULE_7__.PermissionsService));
      };

      _PaymentResultComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
        type: _PaymentResultComponent,
        selectors: [["app-payment-result"]],
        decls: 18,
        vars: 12,
        consts: [["id", "breadcrumbs", 1, "breadcrumbs"], [1, "container"], [1, "d-flex", "justify-content-between", "align-items-center"], ["aria-hidden", "true", 1, "fa", "fa-credit-card-alt"], [1, "text-muted"], ["id", "profile", 1, "content"], [1, "container-fluid", 3, "ngClass"], [3, "textClass", "waitingText", 4, "ngIf"], [4, "ngIf"], [3, "errorMessage", 4, "ngIf"], [3, "textClass", "waitingText"], [3, "errorMessage"]],
        template: function PaymentResultComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](7, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](12, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "article", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](15, PaymentResultComponent_app_spinner_container_15_Template, 2, 4, "app-spinner-container", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](16, PaymentResultComponent_app_payment_success_16_Template, 1, 0, "app-payment-success", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, PaymentResultComponent_app_payment_failed_17_Template, 1, 1, "app-payment-failed", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](7, 6, "Invoices.Status"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](12, 8, "Invoices.Status"));

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](10, _c0, ctx.isLoadingData || ctx.isSubmitting));

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.isLoadingData);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.isPaidSucceeded === true);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.isPaidSucceeded === false);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _shared_spinner_spinner_container_spinner_container_component__WEBPACK_IMPORTED_MODULE_8__.SpinnerContainerComponent, _payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_9__.PaymentSuccessComponent, _payment_failed_payment_failed_component__WEBPACK_IMPORTED_MODULE_10__.PaymentFailedComponent],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
        encapsulation: 2
      });
      /***/
    },

    /***/
    83726: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PaymentSuccessComponent": function PaymentSuccessComponent() {
          return (
            /* binding */
            _PaymentSuccessComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_invoices_payments_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/_services/invoices/payments.service */
      20078);
      /* harmony import */


      var src_app_services_users_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/_services/users/auth.service */
      27704);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_helpers_url_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/_helpers/url.service */
      83010);
      /* harmony import */


      var src_app_helpers_Alertify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/_helpers/Alertify */
      99771);
      /* harmony import */


      var src_app_helpers_app_translation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_helpers/app-translation */
      4093);
      /* harmony import */


      var src_app_helpers_app_title_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_helpers/app-title.service */
      6373);
      /* harmony import */


      var src_app_helpers_permissions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/_helpers/permissions.service */
      41010);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);

      var _c0 = function _c0() {
        return ["/contact-us"];
      };

      var _PaymentSuccessComponent = /*#__PURE__*/function () {
        function _PaymentSuccessComponent(paymentsService, authService, route, urlService, activatedRoute, router, alertify, appTranslation, appTitle, permissions) {
          var _this15 = this;

          _classCallCheck(this, _PaymentSuccessComponent);

          this.paymentsService = paymentsService;
          this.authService = authService;
          this.route = route;
          this.urlService = urlService;
          this.activatedRoute = activatedRoute;
          this.router = router;
          this.alertify = alertify;
          this.appTranslation = appTranslation;
          this.appTitle = appTitle;
          this.permissions = permissions;
          this.isLoadingData = true;
          this.isSubmitting = false;
          this.paramTapId = '';
          this.currentUserId = 0;
          this.route.queryParams.subscribe(function (params) {
            _this15.paramTapId = params['tap_id'];
          });
        }

        _createClass(_PaymentSuccessComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            this.activatedRoute.paramMap.subscribe(function (paramMap) {
              if (_this16.paramTapId) {
                console.log(_this16.paramTapId);

                _this16.paymentsService.confirmAfterRedirectFromPaymentGateway(_this16.authService.currentUser.id, _this16.paramTapId).subscribe(function (result) {
                  console.log('the Object  :', result);

                  if (_this16.isSubscriptionPackageInvoice(result)) {
                    console.log('invoice :', result);
                  }

                  if (_this16.isChargeReturn(result)) {
                    console.log('Charge :', result);
                  }
                }, function (error) {
                  _this16.alertify.error(error);

                  _this16.isLoadingData = false;
                }, function () {
                  _this16.isLoadingData = false;
                });
              }
            });
          }
        }, {
          key: "isSubscriptionPackageInvoice",
          value: function isSubscriptionPackageInvoice(obj) {
            return typeof obj.subscriptionPackageId === 'number';
          }
        }, {
          key: "isChargeReturn",
          value: function isChargeReturn(obj) {
            return typeof obj.status === 'string';
          }
        }, {
          key: "startNow",
          value: function startNow() {
            if (this.authService.loggedIn()) {
              if (this.permissions.canApplyToTheJobs) this.router.navigate(['/jobs']);else if (this.permissions.canManageOrders) this.router.navigate(['/profile']);else if (this.permissions.canManageJobs) this.router.navigate(['/jobs/new']);else if (this.permissions.canOrderService) this.router.navigate(['/taskers/list']);else this.router.navigate(['/']);
            } else {
              this.router.navigate(['/register']);
            }
          }
        }]);

        return _PaymentSuccessComponent;
      }();

      _PaymentSuccessComponent.ɵfac = function PaymentSuccessComponent_Factory(t) {
        return new (t || _PaymentSuccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_invoices_payments_service__WEBPACK_IMPORTED_MODULE_0__.PaymentsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_users_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_helpers_url_service__WEBPACK_IMPORTED_MODULE_2__.UrlService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_helpers_Alertify__WEBPACK_IMPORTED_MODULE_3__.AlertifyService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_helpers_app_translation__WEBPACK_IMPORTED_MODULE_4__.AppTranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_helpers_app_title_service__WEBPACK_IMPORTED_MODULE_5__.AppTitleService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_helpers_permissions_service__WEBPACK_IMPORTED_MODULE_6__.PermissionsService));
      };

      _PaymentSuccessComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _PaymentSuccessComponent,
        selectors: [["app-payment-success"]],
        decls: 19,
        vars: 5,
        consts: [[1, "jumbotron", "text-center"], [1, "display-4"], [1, "lead"], [1, "lead", "text-info"], ["aria-hidden", "true", 1, "fa", "fa-check-circle-o", "text-info"], [1, "container", "text-dark"], ["src", "assets/img/undraw-order-confirmed.svg", "alt", "", 1, "img-fluid", "mx-auto", "d-block", 2, "max-width", "400px"], [1, "lead", "pt-3"], ["href", "javascript:void(0)", "role", "button", 1, "btn", "btn-info", "w-50", "btn-sm", 3, "click"], [3, "routerLink"]],
        template: function PaymentSuccessComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u0634\u0643\u0631\u0627\u064B \u0644\u0643!");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "strong", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " \u062A\u0645\u062A \u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u062F\u0641\u0639 \u0628\u0646\u062C\u0627\u062D");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " \u064A\u0645\u0643\u0646\u0643 \u0627\u0644\u0623\u0646 \u0627\u0644\u0627\u0633\u062A\u0641\u0627\u062F\u0629 \u0645\u0646 \u0627\u0644\u0645\u0632\u0627\u064A\u0627 \u0627\u0644\u0627\u0636\u0627\u0641\u064A\u0629 \u0627\u0644\u062E\u0627\u0635\u0629 \u0628\u0627\u0644\u0627\u0634\u062A\u0631\u0627\u0643 \u0645\u0646 \u062E\u0644\u0627\u0644 \u0627\u0644\u0636\u063A\u0637 \u0639\u0644\u0649 \u0632\u0631 [\u0627\u0628\u062F\u0623 \u0627\u0644\u0623\u0646].");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PaymentSuccessComponent_Template_a_click_11_listener() {
              return ctx.startNow();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, " \u0647\u0644 \u062A\u0648\u0627\u062C\u0647 \u0645\u0634\u0643\u0644\u0629\u061F ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 2, "Hero.Start"));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](4, _c0));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
        encapsulation: 2
      });
      /***/
    },

    /***/
    83821: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PaymentsRoutingModule": function PaymentsRoutingModule() {
          return (
            /* binding */
            _PaymentsRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _test_payment_gate_test_payment_gate_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./test-payment-gate/test-payment-gate.component */
      91562);
      /* harmony import */


      var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./checkout/checkout.component */
      50022);
      /* harmony import */


      var _invoices_invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./invoices/invoice-list/invoice-list.component */
      44033);
      /* harmony import */


      var _invoices_invoice_details_invoice_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./invoices/invoice-details/invoice-details.component */
      78859);
      /* harmony import */


      var _payment_result_payment_result_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./payment-result/payment-result.component */
      39445);
      /* harmony import */


      var _free_subscription_result_free_subscription_result_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./free-subscription-result/free-subscription-result.component */
      36337);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316); // Components


      var routes = [{
        path: 'test',
        component: _test_payment_gate_test_payment_gate_component__WEBPACK_IMPORTED_MODULE_0__.TestPaymentGateComponent
      }, {
        path: 'invoices/list',
        component: _invoices_invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_2__.InvoiceListComponent
      }, {
        path: 'invoices/:invoiceId/details',
        component: _invoices_invoice_details_invoice_details_component__WEBPACK_IMPORTED_MODULE_3__.InvoiceDetailsComponent
      }, {
        path: 'checkout/free-subscription/:invoiceId',
        component: _free_subscription_result_free_subscription_result_component__WEBPACK_IMPORTED_MODULE_5__.FreeSubscriptionResultComponent
      }, {
        path: 'checkout/gateway-result',
        component: _payment_result_payment_result_component__WEBPACK_IMPORTED_MODULE_4__.PaymentResultComponent
      }, {
        path: 'checkout/:packageId',
        component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_1__.CheckoutComponent
      }];

      var _PaymentsRoutingModule = function _PaymentsRoutingModule() {
        _classCallCheck(this, _PaymentsRoutingModule);
      };

      _PaymentsRoutingModule.ɵfac = function PaymentsRoutingModule_Factory(t) {
        return new (t || _PaymentsRoutingModule)();
      };

      _PaymentsRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: _PaymentsRoutingModule
      });
      _PaymentsRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](_PaymentsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    93973: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PaymentsModule": function PaymentsModule() {
          return (
            /* binding */
            _PaymentsModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../shared/shared.module */
      4065);
      /* harmony import */


      var _payments_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./payments-routing.module */
      83821);
      /* harmony import */


      var _test_payment_gate_test_payment_gate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./test-payment-gate/test-payment-gate.component */
      91562);
      /* harmony import */


      var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./checkout/checkout.component */
      50022);
      /* harmony import */


      var _invoices_invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./invoices/invoice-list/invoice-list.component */
      44033);
      /* harmony import */


      var _invoices_invoice_details_invoice_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./invoices/invoice-details/invoice-details.component */
      78859);
      /* harmony import */


      var _payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./payment-success/payment-success.component */
      83726);
      /* harmony import */


      var _payment_result_payment_result_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./payment-result/payment-result.component */
      39445);
      /* harmony import */


      var _payment_failed_payment_failed_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./payment-failed/payment-failed.component */
      33206);
      /* harmony import */


      var _free_subscription_result_free_subscription_result_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./free-subscription-result/free-subscription-result.component */
      36337);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      2316); // Components


      var _PaymentsModule = function _PaymentsModule() {
        _classCallCheck(this, _PaymentsModule);
      };

      _PaymentsModule.ɵfac = function PaymentsModule_Factory(t) {
        return new (t || _PaymentsModule)();
      };

      _PaymentsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
        type: _PaymentsModule
      });
      _PaymentsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
        imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _payments_routing_module__WEBPACK_IMPORTED_MODULE_1__.PaymentsRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](_PaymentsModule, {
          declarations: [_test_payment_gate_test_payment_gate_component__WEBPACK_IMPORTED_MODULE_2__.TestPaymentGateComponent, _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_3__.CheckoutComponent, _invoices_invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_4__.InvoiceListComponent, _invoices_invoice_details_invoice_details_component__WEBPACK_IMPORTED_MODULE_5__.InvoiceDetailsComponent, _payment_success_payment_success_component__WEBPACK_IMPORTED_MODULE_6__.PaymentSuccessComponent, _payment_result_payment_result_component__WEBPACK_IMPORTED_MODULE_7__.PaymentResultComponent, _payment_failed_payment_failed_component__WEBPACK_IMPORTED_MODULE_8__.PaymentFailedComponent, _free_subscription_result_free_subscription_result_component__WEBPACK_IMPORTED_MODULE_9__.FreeSubscriptionResultComponent],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _payments_routing_module__WEBPACK_IMPORTED_MODULE_1__.PaymentsRoutingModule]
        });
      })();
      /***/

    },

    /***/
    91562: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TestPaymentGateComponent": function TestPaymentGateComponent() {
          return (
            /* binding */
            _TestPaymentGateComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_invoices_payments_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/_services/invoices/payments.service */
      20078);
      /* harmony import */


      var src_app_helpers_app_translation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/_helpers/app-translation */
      4093);
      /* harmony import */


      var src_app_services_users_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/_services/users/auth.service */
      27704);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_helpers_Alertify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/_helpers/Alertify */
      99771);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _shared_spinner_spinner_container_spinner_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/spinner/spinner-container/spinner-container.component */
      79438);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);

      var _c0 = ["cardInfo"];

      function TestPaymentGateComponent_app_spinner_container_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-spinner-container", 33);
        }
      }

      function TestPaymentGateComponent_div_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.error);
        }
      }

      var _c1 = function _c1() {
        return ["/settings"];
      };

      var _c2 = function _c2(a0) {
        return {
          "disabled-spinner-container": a0
        };
      };

      var _TestPaymentGateComponent = /*#__PURE__*/function () {
        function _TestPaymentGateComponent(cd, paymentsService, appTranslation, authService, location, route, alertify, router) {
          _classCallCheck(this, _TestPaymentGateComponent);

          this.cd = cd;
          this.paymentsService = paymentsService;
          this.appTranslation = appTranslation;
          this.authService = authService;
          this.location = location;
          this.route = route;
          this.alertify = alertify;
          this.router = router;
          this.cardHandler = this.onChange.bind(this);
          this.successPaid = false; // Page Declare

          this.isLoadingData = true;
          this.isSubmitting = false;
        }

        _createClass(_TestPaymentGateComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var style = {
              base: {
                color: '#535353',
                lineHeight: '18px',
                fontFamily: 'sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                  color: 'rgba(0, 0, 0, 0.26)',
                  fontSize: '15px'
                }
              },
              invalid: {
                color: 'red'
              }
            }; // input labels/placeholders

            var labels = {
              cardNumber: "Card Number | رقم البطاقة",
              expirationDate: "MM/YY | الشهر/السنة",
              cvv: "CVV | الرمز",
              cardHolder: "Card Holder Name | اسم حامل البطاقة"
            }; //payment options

            var paymentOptions = {
              currencyCode: ["SAR"],
              labels: labels,
              TextDirection: 'rtl'
            }; //create element, pass style and payment options

            this.card = elements.create('card', {
              style: style
            }, paymentOptions); //mount element

            this.card.mount('#card-info'); // this.card.mount(this.cardInfo.nativeElement);

            this.card.addEventListener('change', this.cardHandler, true);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            try {
              this.card.destroy();
            } catch (error) {}
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {} //card change event listener

        }, {
          key: "onChange",
          value: function onChange(_ref2) {
            var error = _ref2.error;
            this.isLoadingData = false;

            if (error) {
              if (error.key === 'error_invalid_cvv_characters') this.error = "كود الحماية غير صحيح";else if (error.key === "error_invalid_card_characters") this.error = "رقم بطاقتك غير صحيح";else if (error.key === "Your card's security code is incomplete.") this.error = "تاريخ إنتهاء البطاقة غير صحيح";else if (error.key === "card_number_required") this.error = "قُم بملئ بيانات البطاقة الخاصه بك قبل الارسال";else if (error.key === "error_invalid_card") this.error = "تحقق من صحة بيانات البطاقة الخاصة بك";else this.error = error.message;
            } else {
              this.error = null;
            }

            this.cd.detectChanges();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this17 = this;

              var result;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.isSubmitting = true;
                      _context4.next = 3;
                      return tap.createToken(this.card);

                    case 3:
                      result = _context4.sent;

                      if (result.error) {
                        this.error = "\u062D\u062F\u062B \u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u0633\u062F\u0627\u062F: \n ".concat(result.error.message);
                        this.isSubmitting = false;
                      } else {
                        console.log('success token: ', result.id);
                        this.paymentsService.chargeTest(this.authService.currentUser.id, result.id.toString()).subscribe(function (res) {
                          console.log(res);
                          if (res.status === 'INITIATED') window.location.href = res.transaction.url;else if (res.status === 'CAPTURED') _this17.router.navigate(['payments/checkout/success']);else _this17.alertify.error("Error: ".concat(res.response.code, " <br>").concat(res.response.message));
                          _this17.isSubmitting = false; // this.isSubmitting = false;
                        }, function (error) {
                          _this17.alertify.error(error);

                          _this17.isSubmitting = false; // this.router.navigate(['']);
                        });
                      }

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return _TestPaymentGateComponent;
      }();

      _TestPaymentGateComponent.ɵfac = function TestPaymentGateComponent_Factory(t) {
        return new (t || _TestPaymentGateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_invoices_payments_service__WEBPACK_IMPORTED_MODULE_0__.PaymentsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_helpers_app_translation__WEBPACK_IMPORTED_MODULE_1__.AppTranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_users_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_helpers_Alertify__WEBPACK_IMPORTED_MODULE_3__.AlertifyService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router));
      };

      _TestPaymentGateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _TestPaymentGateComponent,
        selectors: [["app-test-payment-gate"]],
        viewQuery: function TestPaymentGateComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.cardInfo = _t.first);
          }
        },
        decls: 52,
        vars: 21,
        consts: [["id", "breadcrumbs", 1, "breadcrumbs"], [1, "container"], [1, "d-flex", "justify-content-between", "align-items-center"], ["aria-hidden", "true", 1, "fa", "fa-cogs"], [3, "routerLink"], ["id", "profile", 1, "content"], [1, "container-fluid"], [1, "container", "px-0"], [1, "row"], [1, "container-fluid", "px-1", "px-md-2", "px-lg-4", "py-5", "mx-auto", 3, "ngClass"], ["class", "spinner-container", 4, "ngIf"], [1, "row", "d-flex", "justify-content-center"], [1, "col-xl-7", "col-lg-8", "col-md-9", "col-sm-11"], [1, "card", "border-0"], [1, "card-body", "px-2", "py-4"], [1, "container", 3, "ngSubmit"], ["checkout", "ngForm"], [1, "row", "justify-content-center"], [1, "mb-4", "text-info", "text-center"], [1, "col-sm-4", "text-center", "justify-content-center", "align-content-center"], [1, "text-sm", "text-muted"], [1, "col-12", "px-3", "justify-content-sm-center"], [1, ""], [1, "text-info"], [1, "text-md", "font-weight-bold", "mr-2"], [1, "col-sm-8", "split-border", "pr-4", "mt-3"], ["id", "card-info"], ["cardInfo", ""], ["id", "success", 2, "display", "none", "position", "relative", "float", "left"], ["id", "token"], ["class", "alert alert-danger mx-2", "id", "card-errors", "role", "alert", 4, "ngIf"], ["id", "tap-btn", 1, "btn", "w-50", "btn-info", "mt-4", 3, "disabled"], [1, "fa", 3, "ngClass"], [1, "spinner-container"], ["id", "card-errors", "role", "alert", 1, "alert", "alert-danger", "mx-2"]],
        template: function TestPaymentGateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "article", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, TestPaymentGateComponent_app_spinner_container_18_Template, 1, 0, "app-spinner-container", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "form", 15, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function TestPaymentGateComponent_Template_form_ngSubmit_23_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "h3", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](28, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "small", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "\u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u0628\u0644\u063A");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "h2", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "\u0631\u064A\u0627\u0644");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "div", 26, 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Success! Your token is ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](45, "span", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, TestPaymentGateComponent_div_46_Template, 2, 1, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](49, "i", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](51, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 10, "Payments.TestPayment"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](18, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 12, "Menu.Dashboard"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](19, _c2, ctx.isLoadingData || ctx.isSubmitting));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoadingData);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](28, 14, "Payments.TestPayment"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.error);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.isSubmitting || ctx.isLoadingData);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.isSubmitting ? "fa-circle-o-notch fa-spin" : "fa-credit-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\xA0 ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](51, 16, ctx.isSubmitting ? "Common.Data.SendingData" : "SubscriptionPackages.Subscription"), "\xA0 ");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, _shared_spinner_spinner_container_spinner_container_component__WEBPACK_IMPORTED_MODULE_4__.SpinnerContainerComponent],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
        styles: [".form-row[_ngcontent-%COMP%] {\n  width: 70%;\n  float: left;\n  background-color: #ededed;\n}\n#card-element[_ngcontent-%COMP%] {\n  background-color: transparent;\n  height: 40px;\n  border-radius: 4px;\n  border: 1px solid transparent;\n  box-shadow: 0 1px 3px 0 #e6ebf1;\n  transition: box-shadow 150ms ease;\n}\n#card-element--focus[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 3px 0 #cfd7df;\n}\n#card-element--invalid[_ngcontent-%COMP%] {\n  border-color: #fa755a;\n}\n#card-element--webkit-autofill[_ngcontent-%COMP%] {\n  background-color: #fefde5 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QtcGF5bWVudC1nYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLCtCQUErQjtFQUUvQixpQ0FBaUM7QUFDbkM7QUFFQTtFQUNFLCtCQUErQjtBQUNqQztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEMiLCJmaWxlIjoidGVzdC1wYXltZW50LWdhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLXJvdyB7XG4gIHdpZHRoOiA3MCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xufVxuI2NhcmQtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwICNlNmViZjE7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYm94LXNoYWRvdyAxNTBtcyBlYXNlO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDE1MG1zIGVhc2U7XG59XG5cbiNjYXJkLWVsZW1lbnQtLWZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgI2NmZDdkZjtcbn1cblxuI2NhcmQtZWxlbWVudC0taW52YWxpZCB7XG4gIGJvcmRlci1jb2xvcjogI2ZhNzU1YTtcbn1cblxuI2NhcmQtZWxlbWVudC0td2Via2l0LWF1dG9maWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmRlNSAhaW1wb3J0YW50O1xufVxuIl19 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_components_payments_payments_module_ts-es5.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/QwA":
/*!***************************************!*\
  !*** ./src/app/GlobalErrorHandler.ts ***!
  \***************************************/
/*! exports provided: GlobalErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalErrorHandler", function() { return GlobalErrorHandler; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class GlobalErrorHandler {
    constructor(injector) {
        this.injector = injector;
    }
    handleError(error) {
        const router = this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]);
        console.error(error.stack.toString());
    }
}
GlobalErrorHandler.ɵfac = function GlobalErrorHandler_Factory(t) { return new (t || GlobalErrorHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
GlobalErrorHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GlobalErrorHandler, factory: GlobalErrorHandler.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GlobalErrorHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\marku\Documents\TUM\onlineide\UIServer\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "6AOp":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.service */ "hBHG");
/* harmony import */ var unique_names_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! unique-names-generator */ "tm45");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/divider */ "5vDB");










const _c0 = function (a0) { return { project: a0 }; };
function ProjectComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProjectComponent_tr_23_Template_input_ngModelChange_5_listener($event) { const project_r1 = ctx.$implicit; return project_r1.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Open");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "nz-divider", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectComponent_tr_23_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const project_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.deleteProject(project_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", project_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.users);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/ide/", project_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, project_r1));
} }
const _c1 = function () { return [""]; };
class ProjectComponent {
    constructor(projectService) {
        this.projectService = projectService;
    }
    ngOnInit() {
        this.getProjects();
    }
    // tslint:disable-next-line:typedef
    getProjects() {
        this.projectService.getProjects()
            .subscribe(projects => this.projects = projects);
    }
    initiateProjectUsername(username) {
        this.currentUsername = username;
        this.usernames = this.usernames = new Array();
        this.usernames.push(username);
    }
    // tslint:disable-next-line:typedef
    createProject() {
        this.modifying = false;
        const randomName = Object(unique_names_generator__WEBPACK_IMPORTED_MODULE_2__["uniqueNamesGenerator"])({
            dictionaries: [unique_names_generator__WEBPACK_IMPORTED_MODULE_2__["adjectives"], unique_names_generator__WEBPACK_IMPORTED_MODULE_2__["colors"], unique_names_generator__WEBPACK_IMPORTED_MODULE_2__["animals"]]
        });
        // const newSourceFileSet = new Set<SourceFile>();
        const newSourceFileSet = new Array();
        this.projectService.getCurrentUsername().subscribe(currentUsername => this.initiateProjectUsername(currentUsername));
        console.log('usernames length is ' + this.usernames.length);
        console.log('current username is ' + this.currentUsername);
        // @ts-ignore
        const newProject = { name: randomName, sourcefiles: newSourceFileSet, usernames: this.usernames };
        console.log('newProject.name = ' + newProject.name);
        console.log('newProject.sourcefiles = ' + newProject.sourcefiles);
        this.projectService.createProject(newProject).subscribe(project => this.projects.push(project));
    }
    // tslint:disable-next-line:typedef
    modifyProject(project) {
        this.modifying = true;
        this.modifyingProject = project;
    }
    // tslint:disable-next-line:typedef
    updateProject() {
        if (this.modifying) {
            this.projectService.updateProject(this.modifyingProject).subscribe(updatedProject => {
                const index = this.projects.findIndex(project => project.id === this.modifyingProject.id);
                this.projects[index] = updatedProject;
            });
            this.modifying = false;
        }
    }
    deleteProject(deleteProject) {
        this.projects = this.projects.filter(project => project !== deleteProject);
        this.projectService.deleteProject(deleteProject.id).subscribe();
    }
}
ProjectComponent.ɵfac = function ProjectComponent_Factory(t) { return new (t || ProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"])); };
ProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectComponent, selectors: [["app-project"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]])], decls: 24, vars: 3, consts: [[1, "center", 2, "width", "800px", "margin-left", "25%"], [1, "ant-btn", "ant-btn-default", "ant-btn-circle", "ant-btn-icon-only"], ["routerLink", "/home", 1, "anticon", "anticon-logout", "ng-star-inserted", 2, "display", "inline-block"], ["viewBox", "64 64 896 896", "fill", "currentColor", "width", "1em", "height", "1em", "data-icon", "logout", "aria-hidden", "true"], ["d", "M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9 353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"], [2, "display", "none"], [1, "projects__add-button", "ant-btn", "ant-btn-primary", 3, "click"], [2, "width", "800px", 3, "nzData"], [4, "ngFor", "ngForOf"], [3, "ngModel", "ngModelChange"], [3, "routerLink", "state"], ["nzType", "vertical"], [3, "click"]], template: function ProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Project Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectComponent_Template_button_click_8_listener() { return ctx.createProject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Add Project ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nz-table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProjectComponent_tr_23_Template, 14, 7, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzTheadComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzTableCellDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzThMeasureDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_4__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_7__["NzDividerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project',
                templateUrl: './project.component.html',
                providers: [_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]],
                styleUrls: ['./project.component.css']
            }]
    }], function () { return [{ type: _project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Hhmg":
/*!******************************************!*\
  !*** ./src/app/icons-provider.module.ts ***!
  \******************************************/
/*! exports provided: IconsProviderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsProviderModule", function() { return IconsProviderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "kVq8");




const icons = [_ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["MenuFoldOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["MenuUnfoldOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["DashboardOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_2__["FormOutline"]];
class IconsProviderModule {
}
IconsProviderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IconsProviderModule });
IconsProviderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IconsProviderModule_Factory(t) { return new (t || IconsProviderModule)(); }, providers: [
        { provide: ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NZ_ICONS"], useValue: icons }
    ], imports: [[ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IconsProviderModule, { imports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]], exports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconsProviderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]],
                exports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NzIconModule"]],
                providers: [
                    { provide: ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_1__["NZ_ICONS"], useValue: icons }
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "IhKX":
/*!******************************************!*\
  !*** ./src/app/editor/editor.service.ts ***!
  \******************************************/
/*! exports provided: SourceFileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceFileService", function() { return SourceFileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
class SourceFileService {
    constructor(http) {
        this.http = http;
        this.sourceFileURL = 'http://localhost:8080/sourceFiles';
        this.projectURL = 'http://localhost:8080/projects';
    }
    // tslint:disable-next-line:typedef
    getSourceFiles() {
        return this.http.get(this.sourceFileURL).pipe();
    }
    getProjectSourceFiles(project) {
        return this.http.get(this.projectURL + '/' + project.id + '/sourcefiles').pipe();
    }
    createSourceFile(sourceFile) {
        console.log('Service: newSourceFile is being created: ' + sourceFile);
        return this.http.post(this.sourceFileURL, sourceFile, httpOptions).pipe();
    }
    updateSourceFile(sourceFile) {
        return this.http.put(this.sourceFileURL, sourceFile, httpOptions).pipe();
    }
    deleteSourceFile(id) {
        const deleteSourceFileURL = this.sourceFileURL + '/' + id;
        return this.http.delete(deleteSourceFileURL, httpOptions).pipe();
    }
    // tslint:disable-next-line:typedef
    getSourceFileProject(sourceFile) {
        return this.http.get(this.sourceFileURL + '/' + sourceFile.id + '/project').pipe();
    }
}
SourceFileService.ɵfac = function SourceFileService_Factory(t) { return new (t || SourceFileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SourceFileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SourceFileService, factory: SourceFileService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SourceFileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function AppComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.authService.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login with Gitlab LRZ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Project Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_11_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.authService.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sign out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(authService) {
        this.authService = authService;
        this.title = 'UI';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 13, vars: 6, consts: [[1, "container;", 2, "display", "flex", "justify-content", "center"], [1, "center", 2, "width", "800px", "margin-left", "50%"], [4, "ngIf"], [3, "click"], ["routerLink", "/projects"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Welcome to the OnlineIDE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "A project for Advanced Topics of Software Engineering (TUM)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_div_9_Template, 4, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_div_11_Template, 7, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 2, ctx.authService.authenticated));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 4, ctx.authService.authenticated));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\r\n  display: flex;\r\n  text-rendering: optimizeLegibility;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n.app-layout[_ngcontent-%COMP%] {\r\n  height: 100vh;\r\n}\r\n\r\n.menu-sidebar[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  z-index: 10;\r\n  min-height: 100vh;\r\n  box-shadow: 2px 0 6px rgba(0,21,41,.35);\r\n}\r\n\r\n.header-trigger[_ngcontent-%COMP%] {\r\n  height: 64px;\r\n  padding: 20px 24px;\r\n  font-size: 20px;\r\n  cursor: pointer;\r\n  transition: all .3s,padding 0s;\r\n}\r\n\r\n.trigger[_ngcontent-%COMP%]:hover {\r\n  color: #1890ff;\r\n}\r\n\r\n.sidebar-logo[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  height: 64px;\r\n  padding-left: 24px;\r\n  overflow: hidden;\r\n  line-height: 64px;\r\n  background: #001529;\r\n  transition: all .3s;\r\n}\r\n\r\n.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  height: 32px;\r\n  width: 32px;\r\n  vertical-align: middle;\r\n}\r\n\r\n.sidebar-logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  margin: 0 0 0 20px;\r\n  color: #fff;\r\n  font-weight: 600;\r\n  font-size: 14px;\r\n  font-family: Avenir,Helvetica Neue,Arial,Helvetica,sans-serif;\r\n  vertical-align: middle;\r\n}\r\n\r\nnz-header[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  width: 100%;\r\n  z-index: 2;\r\n}\r\n\r\n.app-header[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  height: 64px;\r\n  padding: 0;\r\n  background: #fff;\r\n  box-shadow: 0 1px 4px rgba(0,21,41,.08);\r\n}\r\n\r\nnz-content[_ngcontent-%COMP%] {\r\n  margin: 24px;\r\n}\r\n\r\n.inner-content[_ngcontent-%COMP%] {\r\n  padding: 24px;\r\n  background: #fff;\r\n  height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxtQ0FBbUM7RUFDbkMsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDZEQUE2RDtFQUM3RCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtFQUNWLGdCQUFnQjtFQUNoQix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZCIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxufVxyXG5cclxuLmFwcC1sYXlvdXQge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5tZW51LXNpZGViYXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxMDtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBib3gtc2hhZG93OiAycHggMCA2cHggcmdiYSgwLDIxLDQxLC4zNSk7XHJcbn1cclxuXHJcbi5oZWFkZXItdHJpZ2dlciB7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIHBhZGRpbmc6IDIwcHggMjRweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuM3MscGFkZGluZyAwcztcclxufVxyXG5cclxuLnRyaWdnZXI6aG92ZXIge1xyXG4gIGNvbG9yOiAjMTg5MGZmO1xyXG59XHJcblxyXG4uc2lkZWJhci1sb2dvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMjRweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xyXG4gIGJhY2tncm91bmQ6ICMwMDE1Mjk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxufVxyXG5cclxuLnNpZGViYXItbG9nbyBpbWcge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgd2lkdGg6IDMycHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLnNpZGViYXItbG9nbyBoMSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMCAwIDAgMjBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LWZhbWlseTogQXZlbmlyLEhlbHZldGljYSBOZXVlLEFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbm56LWhlYWRlciB7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uYXBwLWhlYWRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNjRweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwyMSw0MSwuMDgpO1xyXG59XHJcblxyXG5uei1jb250ZW50IHtcclxuICBtYXJnaW46IDI0cHg7XHJcbn1cclxuXHJcbi5pbm5lci1jb250ZW50IHtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rm4T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/en */ "tAZD");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _icons_provider_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icons-provider.module */ "Hhmg");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/layout */ "yW9e");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./project/project.component */ "6AOp");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/spin */ "qAZ0");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/divider */ "5vDB");
/* harmony import */ var ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/pagination */ "3/1E");
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/empty */ "QlLE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./editor/editor.component */ "xD4D");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-monaco-editor */ "yvwu");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var _GlobalErrorHandler__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./GlobalErrorHandler */ "/QwA");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/popover */ "+oEP");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./auth.guard */ "tIkO");










// import { AppRoutingModule } from './app-routing.module';




















const routes = [
    // {path: '', redirectTo: 'home', pathMatch: 'full'},
    // {path: 'home', component: LoginComponent},
    { path: 'projects', component: _project_project_component__WEBPACK_IMPORTED_MODULE_12__["ProjectComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]] },
    { path: 'ide/:id', component: _editor_editor_component__WEBPACK_IMPORTED_MODULE_19__["EditorComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]] },
    // {path: 'projects', component: ProjectComponent},
    // {path: 'ide/:id', component: EditorComponent},
    { path: '**', redirectTo: '/' }
];
Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_5___default.a);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__["en_US"] }, {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"],
            useClass: _GlobalErrorHandler__WEBPACK_IMPORTED_MODULE_23__["GlobalErrorHandler"]
        }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            // AppRoutingModule,
            _icons_provider_module__WEBPACK_IMPORTED_MODULE_9__["IconsProviderModule"],
            ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_10__["NzLayoutModule"],
            ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_11__["NzMenuModule"],
            ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__["NzTableModule"],
            ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_14__["NzSpinModule"],
            ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_15__["NzDividerModule"],
            ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_16__["NzPaginationModule"],
            ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_17__["NzEmptyModule"],
            ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_22__["NzModalModule"],
            ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_24__["NzPopoverModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"].forRoot(routes),
            ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_21__["MonacoEditorModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _project_project_component__WEBPACK_IMPORTED_MODULE_12__["ProjectComponent"],
        _editor_editor_component__WEBPACK_IMPORTED_MODULE_19__["EditorComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        // AppRoutingModule,
        _icons_provider_module__WEBPACK_IMPORTED_MODULE_9__["IconsProviderModule"],
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_10__["NzLayoutModule"],
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_11__["NzMenuModule"],
        ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__["NzTableModule"],
        ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_14__["NzSpinModule"],
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_15__["NzDividerModule"],
        ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_16__["NzPaginationModule"],
        ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_17__["NzEmptyModule"],
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_22__["NzModalModule"],
        ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_24__["NzPopoverModule"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"], ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_21__["MonacoEditorModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _project_project_component__WEBPACK_IMPORTED_MODULE_12__["ProjectComponent"],
                    _editor_editor_component__WEBPACK_IMPORTED_MODULE_19__["EditorComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    // AppRoutingModule,
                    _icons_provider_module__WEBPACK_IMPORTED_MODULE_9__["IconsProviderModule"],
                    ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_10__["NzLayoutModule"],
                    ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_11__["NzMenuModule"],
                    ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__["NzTableModule"],
                    ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_14__["NzSpinModule"],
                    ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_15__["NzDividerModule"],
                    ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_16__["NzPaginationModule"],
                    ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_17__["NzEmptyModule"],
                    ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_22__["NzModalModule"],
                    ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_24__["NzPopoverModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"].forRoot(routes),
                    ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_21__["MonacoEditorModule"].forRoot(),
                ],
                providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_3__["en_US"] }, {
                        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"],
                        useClass: _GlobalErrorHandler__WEBPACK_IMPORTED_MODULE_23__["GlobalErrorHandler"]
                    }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ccyI":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





const LOGIN_PATH = '/login';
const LOGOUT_PATH = '/logout';
class AuthService {
    constructor(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        this.authenticated$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.checkAuthentication();
    }
    get authenticated() {
        return this.authenticated$;
    }
    checkAuthentication() {
        this.httpClient.get('/authenticated').subscribe((authenticated) => {
            this.authenticated$.next(authenticated);
        }, (err) => {
            this.authenticated$.next(false);
        });
    }
    login() {
        window.location.href = `${window.location.origin}${LOGIN_PATH}`;
    }
    logout() {
        this.httpClient.post(LOGOUT_PATH, {}).subscribe(() => {
            console.log('auth.service.ts, logout()');
            this.router.navigateByUrl('/');
            this.checkAuthentication();
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "hBHG":
/*!********************************************!*\
  !*** ./src/app/project/project.service.ts ***!
  \********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
class ProjectService {
    constructor(http) {
        this.http = http;
        this.projectURL = 'http://localhost:8080/projects';
    }
    // tslint:disable-next-line:typedef
    getProjects() {
        return this.http.get(this.projectURL).pipe();
    }
    getCurrentUsername() {
        return this.http.get('/getUsername').pipe();
    }
    createProject(project) {
        return this.http.post(this.projectURL, project, httpOptions).pipe();
    }
    updateProject(project) {
        return this.http.put(this.projectURL, project, httpOptions).pipe();
    }
    deleteProject(id) {
        const deleteProjectURL = this.projectURL + '/' + id;
        return this.http.delete(deleteProjectURL, httpOptions).pipe();
    }
}
ProjectService.ɵfac = function ProjectService_Factory(t) { return new (t || ProjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ProjectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProjectService, factory: ProjectService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "tIkO":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "ccyI");




class AuthGuard {
    constructor(authService) {
        this.authService = authService;
    }
    canActivate(next, state) {
        return this.authService.authenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(authenticated => {
            if (!authenticated) {
                this.authService.login();
            }
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function LoginComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.authService.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.authService.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 12, vars: 6, consts: [[1, "center", 2, "width", "800px", "margin-left", "50%"], [3, "click", 4, "ngIf"], [3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Welcome to the OnlineIDE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "A project for Advanced Topics of Software Engineering (TUM)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoginComponent_button_7_Template, 2, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_button_10_Template, 2, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 2, ctx.authService.authenticated));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 4, ctx.authService.authenticated));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "xD4D":
/*!********************************************!*\
  !*** ./src/app/editor/editor.component.ts ***!
  \********************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var unique_names_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unique-names-generator */ "tm45");
/* harmony import */ var _editor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.service */ "IhKX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/table */ "rMZv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/modal */ "dEAy");
/* harmony import */ var ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/popover */ "+oEP");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-monaco-editor */ "yvwu");













function EditorComponent_tr_26_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditorComponent_tr_26_ng_template_3_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const file_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.fileRename(file_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Rename ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditorComponent_tr_26_ng_template_3_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const file_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.fileDelete(file_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditorComponent_tr_26_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditorComponent_tr_26_ng_container_6_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.renamed = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r7.renamedFile.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.renamed);
} }
function EditorComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditorComponent_tr_26_Template_td_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const file_r4 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.openFile(file_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditorComponent_tr_26_ng_template_3_Template, 6, 0, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-modal", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function EditorComponent_tr_26_Template_nz_modal_nzVisibleChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.isVisibleRename = $event; })("nzOnOk", function EditorComponent_tr_26_Template_nz_modal_nzOnOk_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.handleOkRename(); })("nzOnCancel", function EditorComponent_tr_26_Template_nz_modal_nzOnCancel_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.handleCancelRename(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditorComponent_tr_26_ng_container_6_Template, 3, 2, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r4 = ctx.$implicit;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("nzPopoverTitle", "File: ", file_r4.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPopoverContent", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", file_r4.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx_r0.isVisibleRename);
} }
function EditorComponent_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditorComponent_ng_container_32_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.filename = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r1.filename);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.filename);
} }
function EditorComponent_ng_container_37_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditorComponent_ng_container_37_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.shareUsername = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.shareUsername);
} }
function EditorComponent_ngx_monaco_editor_48_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-monaco-editor", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditorComponent_ngx_monaco_editor_48_Template_ngx_monaco_editor_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.sourcecode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r3.editorOptions)("ngModel", ctx_r3.sourcecode);
} }
const _c0 = function () { return [""]; };
class EditorComponent {
    constructor(router, sourceFileService) {
        this.router = router;
        this.sourceFileService = sourceFileService;
        // Monaco Editor
        this.language = 'c';
        this.theme = 'vs-bright';
        this.editorOptions = { theme: this.theme, language: this.language };
        console.log(this.router.getCurrentNavigation().extras.state.project);
        this.project = router.getCurrentNavigation().extras.state.project;
        this.file = null;
        this.sourcefiles = new Set();
        console.log('this.sourcefiles has been initiated.');
        console.log('this.sourcefiles size is ' + this.sourcefiles.size);
    }
    ngOnInit() {
        this.getSourceFiles();
    }
    handleOk() {
        const unique = true;
        /*
        if (this.sourcefiles.size > 0) {
          for (const sourcefile of this.sourcefiles) {
            if (sourcefile.name === this.filename) {
              unique = false;
            }
          }
        }
        */
        if (unique) {
            const newSourceFile = { name: this.filename, sourcecode: '', language: 'c', project: this.project };
            // this.sourcefiles.add(newSourceFile);
            console.log('Component: newSourceFile is being created: ' + newSourceFile);
            this.sourceFileService.createSourceFile(newSourceFile).subscribe(sourceFile => this.addSourceFile(sourceFile));
            this.file = newSourceFile;
            this.sourcecode = this.file.sourcecode;
            this.language = this.file.language;
            this.isVisible = false;
        }
    }
    handleCancel() {
        this.isVisible = false;
    }
    showModal() {
        this.isVisible = true;
        this.filename = this.generateRandomFileName();
    }
    showModalShare() {
        this.isVisibleShare = true;
    }
    handleOkShare() {
        this.isVisibleShare = false;
    }
    handleCancelShare() {
        this.isVisibleShare = false;
    }
    setFile(file) {
        this.file = file;
    }
    fileRename(file) {
        this.isVisibleRename = true;
        this.renamedFile = file;
        this.setRenamedSourceFileProject(this.renamedFile);
    }
    fileDelete(file) {
        this.sourceFileService.deleteSourceFile(file.id).subscribe(sourceFile => this.deleteSourceFile(sourceFile));
        this.file = null;
        this.sourcecode = '';
    }
    handleOkRename() {
        let unique = true;
        for (const f of this.sourcefiles) {
            if (f.name === this.renamed) {
                unique = false;
            }
        }
        if (unique) {
            this.renamedFile.name = this.renamed;
            // tslint:disable-next-line:max-line-length
            this.sourceFileService.updateSourceFile(this.renamedFile).subscribe(updatedSourceFile => this.updateSourceFileName(updatedSourceFile));
            this.isVisibleRename = false;
        }
    }
    handleCancelRename() {
        this.isVisibleRename = false;
    }
    openFile(file) {
        this.file = file;
        this.sourcecode = file.sourcecode;
        this.language = file.language;
    }
    saveFile() {
        this.file.sourcecode = this.sourcecode;
        this.file.project = this.project;
        this.sourceFileService.updateSourceFile(this.file).subscribe(updatedSourceFile => this.updateSourceFileSourceCode(updatedSourceFile));
    }
    generateRandomFileName() {
        const randomName = Object(unique_names_generator__WEBPACK_IMPORTED_MODULE_1__["uniqueNamesGenerator"])({
            dictionaries: [unique_names_generator__WEBPACK_IMPORTED_MODULE_1__["colors"], unique_names_generator__WEBPACK_IMPORTED_MODULE_1__["animals"]]
        });
        return randomName;
    }
    getSourceFiles() {
        this.sourceFileService.getProjectSourceFiles(this.project).subscribe(sourceFiles => this.setSourceFiles(sourceFiles));
    }
    setSourceFiles(sourceFiles) {
        this.sourcefiles = sourceFiles;
    }
    addSourceFile(sourceFile) {
        const sourceFileList = Array.from(this.sourcefiles);
        sourceFileList.push(sourceFile);
        this.sourcefiles = new Set(sourceFileList);
    }
    updateSourceFileName(updatedSourceFile) {
        /*
        const fileBeforeRenaming = this.file;
        this.deleteSourceFile(fileBeforeRenaming);
         */
        this.file = updatedSourceFile;
        for (const f of this.sourcefiles) {
            if (f.id === updatedSourceFile.id) {
                f.name = updatedSourceFile.name;
            }
        }
    }
    updateSourceFileSourceCode(updatedSourceFile) {
        /*
        const fileBeforeRenaming = this.file;
        this.deleteSourceFile(fileBeforeRenaming);
         */
        this.file = updatedSourceFile;
        for (const f of this.sourcefiles) {
            if (f.id === updatedSourceFile.id) {
                f.sourcecode = updatedSourceFile.sourcecode;
            }
        }
    }
    setRenamedSourceFileProject(sourceFile) {
        this.sourceFileService.getSourceFileProject(sourceFile).subscribe(project => this.setProject(sourceFile, project));
    }
    setProject(sourceFile, project) {
        sourceFile.project = project;
    }
    deleteSourceFile(sourceFile) {
        this.sourcefiles = new Set(Array.from(this.sourcefiles).filter(({ name }) => name !== sourceFile.name));
    }
}
EditorComponent.ɵfac = function EditorComponent_Factory(t) { return new (t || EditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_editor_service__WEBPACK_IMPORTED_MODULE_2__["SourceFileService"])); };
EditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditorComponent, selectors: [["app-editor"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_editor_service__WEBPACK_IMPORTED_MODULE_2__["SourceFileService"]])], decls: 49, vars: 9, consts: [[1, "row"], [1, "column", "full-height", 2, "float", "left", "width", "25%", "background-color", "#001529", "height", "610px"], [1, "logo", "ant-column", 2, "text-align", "center"], ["height", "48px", "src", "assets/logo.png"], [2, "text-align", "center"], ["routerLink", "/projects", 1, "ant-btn", "ant-btn-primary", 2, "margin-right", "10px"], ["nz-icon", "", 1, "anticon", "anticon-left", "ng-star-inserted", 2, "display", "inline-block"], ["viewBox", "64 64 896 896", "fill", "currentColor", "width", "1em", "height", "1em", "data-icon", "left", "aria-hidden", "true"], ["d", "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"], ["routerLink", "/home", 1, "ant-btn", "ant-btn-default", "ant-btn-circle", "ant-btn-icon-only"], [1, "anticon", "anticon-logout", "ng-star-inserted", 2, "display", "inline-block"], ["viewBox", "64 64 896 896", "fill", "currentColor", "width", "1em", "height", "1em", "data-icon", "logout", "aria-hidden", "true"], ["d", "M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9 353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z"], [2, "display", "none"], [2, "text-align", "center", "margin-top", "20px"], [1, "ide-file-list__title", "ant-typography", 2, "margin", "0", "margin-bottom", "10px", "color", "white"], [2, "text-align", "center", "margin", "0"], [2, "display", "block", "margin", "auto", 3, "nzData", "nzShowPagination"], ["style", " text-align: center; background-color: #001529", 4, "ngFor", "ngForOf"], [2, "text-align", "center", "margin-top", "10px"], [1, "ant-btn", "ant-btn-default", 3, "click"], ["nzTitle", "New File", "nzOkText", "Ok", "nzCancelText", "Cancel", 3, "nzVisible", "nzVisibleChange", "nzOnOk", "nzOnCancel"], [4, "nzModalContent"], [1, "ant-btn", "ant-btn-primary", 3, "click"], ["nzTitle", "Share Project", "nzOkText", "Ok", "nzCancelText", "Cancel", 3, "nzVisible", "nzVisibleChange", "nzOnOk", "nzOnCancel"], [1, "column", 2, "float", "left", "width", "75%"], [2, "float", "left"], [1, "ide-action-bar__container", "ant-row", 2, "background-color", "#001529", "height", "50px"], ["id", "compile", 1, "ant-btn", "ant-btn-default", 2, "margin-left", "5px", 3, "disabled"], [2, "width", "800px"], ["id", "editor", "class", "ng-valid ng-star-inserted ng-dirty ng-touched", "style", "width: 800px;", 3, "options", "ngModel", "ngModelChange", 4, "ngIf"], [2, "text-align", "center", "background-color", "#001529"], ["oncontextmenu", "return false;", "nz-popover", "", "nzPopoverTrigger", "hover", 1, "ant-btn", "ant-btn-default", 2, "background-color", "#001529", "vertical-align", "center", "color", "white", "width", "100%", "height", "100%", 3, "nzPopoverTitle", "nzPopoverContent", "click"], ["contentTemplate", ""], ["nzTitle", "Rename File", "nzOkText", "Rename", "nzCancelText", "Cancel", 3, "nzVisible", "nzVisibleChange", "nzOnOk", "nzOnCancel"], [3, "click"], [3, "ngModel", "placeholder", "ngModelChange"], ["]placeholder", "Username", 3, "ngModel", "ngModelChange"], ["id", "editor", 1, "ng-valid", "ng-star-inserted", "ng-dirty", "ng-touched", 2, "width", "800px", 3, "options", "ngModel", "ngModelChange"]], template: function EditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nz-table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, EditorComponent_tr_26_Template, 7, 4, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "| ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditorComponent_Template_button_click_29_listener() { return ctx.showModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "New File");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "nz-modal", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function EditorComponent_Template_nz_modal_nzVisibleChange_31_listener($event) { return ctx.isVisible = $event; })("nzOnOk", function EditorComponent_Template_nz_modal_nzOnOk_31_listener() { return ctx.handleOk(); })("nzOnCancel", function EditorComponent_Template_nz_modal_nzOnCancel_31_listener() { return ctx.handleCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, EditorComponent_ng_container_32_Template, 2, 2, "ng-container", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditorComponent_Template_button_click_34_listener() { return ctx.showModalShare(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Share Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "nz-modal", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function EditorComponent_Template_nz_modal_nzVisibleChange_36_listener($event) { return ctx.isVisibleShare = $event; })("nzOnOk", function EditorComponent_Template_nz_modal_nzOnOk_36_listener() { return ctx.handleOkShare(); })("nzOnCancel", function EditorComponent_Template_nz_modal_nzOnCancel_36_listener() { return ctx.handleCancelShare(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, EditorComponent_ng_container_37_Template, 2, 1, "ng-container", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditorComponent_Template_button_click_41_listener() { return ctx.saveFile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Compile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, EditorComponent_ngx_monaco_editor_48_Template, 1, 2, "ngx-monaco-editor", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0))("nzShowPagination", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sourcefiles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.isVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.isVisibleShare);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.file === null || ctx.sourcecode !== ctx.file.sourcecode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.file !== null);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTableComponent"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTbodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__["NzModalComponent"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__["NzModalContentDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTrDirective"], ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__["NzTableCellDirective"], ng_zorro_antd_popover__WEBPACK_IMPORTED_MODULE_8__["NzPopoverDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_10__["EditorComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0b3IuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-editor',
                templateUrl: './editor.component.html',
                providers: [_editor_service__WEBPACK_IMPORTED_MODULE_2__["SourceFileService"]],
                styleUrls: ['./editor.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _editor_service__WEBPACK_IMPORTED_MODULE_2__["SourceFileService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
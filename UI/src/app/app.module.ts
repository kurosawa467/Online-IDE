import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { ProjectListComponent } from './project-list/project-list.component';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzSpinModule} from 'ng-zorro-antd/spin';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzPaginationModule} from 'ng-zorro-antd/pagination';
import {NzEmptyModule} from 'ng-zorro-antd/empty';
import {Route, RouterModule} from '@angular/router';
import { EditorComponent } from './editor/editor.component';
import { LoginComponent } from './login/login.component';
import {MonacoEditorModule} from 'ngx-monaco-editor';
import { NzModalModule } from 'ng-zorro-antd/modal';
import {GlobalErrorHandler} from './GlobalErrorHandler';
import { NzPopoverModule } from 'ng-zorro-antd/popover';

const routes: Route[] = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: LoginComponent},
  {path: 'manage-projects', component: ProjectListComponent},
  {path: 'ide/:id', component: EditorComponent}
];

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    EditorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzTableModule,
    NzSpinModule,
    NzDividerModule,
    NzPaginationModule,
    NzEmptyModule,
    NzModalModule,
    NzPopoverModule,
    RouterModule.forRoot(routes),
    MonacoEditorModule.forRoot(),
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, {
    provide: ErrorHandler,
    useClass: GlobalErrorHandler
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}

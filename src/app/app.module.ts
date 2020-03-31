import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
// components
import { AppComponent } from './app.component';
import { ErrorHandlerComponent } from './errorHandler/errorHandler.component';
import { AddComponent } from './add/add.component';
import { CustomThresholdComponent } from './add/custom-threshold/custom-threshold.component';
// modules
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
// services
import { SimpleHttpInterceptor } from '../services/interceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonService } from '../services/common.service';
import { HttpService } from '../services/http.service';
// mock
import { DelonMockModule } from '@delon/mock';
import * as MOCKDATA from '../mock';
import { environment } from '../environments/environment';
const MOCKMODULE = !environment.production
  ? [DelonMockModule.forRoot({ data: MOCKDATA, log: true })]
  : [];
registerLocaleData(zh);

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgZorroAntdModule,
    FormsModule,
    ...MOCKMODULE
  ],
  entryComponents: [CustomThresholdComponent],
  declarations: [
    AppComponent,
    ErrorHandlerComponent,
    AddComponent,
    CustomThresholdComponent
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SimpleHttpInterceptor,
      multi: true
    },
    CommonService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

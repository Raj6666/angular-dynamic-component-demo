// Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexRoutingModule } from './index-routing.module';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { RouterModule, Routes } from '@angular/router';
// component
import { IndexComponent } from './index.component';
import { HomeComponent } from './home/home.component';
import { ReportSearchComponent } from './home/reportSearch/reportSearch.component';
import { ReportTableComponent } from './home/reportTable/reportTable.component';
import { TemplateSeachComponent } from './home/templateSearch/templateSearch.component';
import { TemplateTableComponent } from './home/templateTable/templateTable.component';
import { CreatNewReportComponent } from './home/reportTable/creatNewReport/creatNewReport.component';
import { TemplateCopyComponent } from './home/templateTable/templateCopy/templateCopy.component';
import { DeleteModalComponent } from './home/deleteModal/deleteModal.component';

@NgModule({
  declarations: [
    IndexComponent,
    HomeComponent,
    ReportSearchComponent,
    ReportTableComponent,
    TemplateSeachComponent,
    TemplateTableComponent,
    CreatNewReportComponent,
    TemplateCopyComponent,
    DeleteModalComponent
  ],
  imports: [CommonModule, IndexRoutingModule, FormsModule, NgZorroAntdModule],
  exports: [RouterModule],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }]
})
export class IndexModule {}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-table',
  templateUrl: './reportTable.component.html',
  styleUrls: ['./reportTable.component.scss']
})
export class ReportTableComponent implements OnInit {
  constructor() {}
  isAllReportDataChecked = false; // 报告列表全选
  reportData = [
    { startTime: '123', checked: false },
    { startTime: '233', checked: false }
  ]; // 报告列表数据
  pageNum = 1; // 页数
  pageSize = 10; // 每页显示条数
  total = 2; // 表格总数量
  showCreatReportModal = false; // 显示创建新报告弹窗
  modalHeaderName; // 弹窗的头部文字
  isDisableTemplate; // 弹窗的使用模板是否禁用
  showDeleteModal = false; // 删除弹窗
  ngOnInit() {}

  // 子组件返回是否显示创建新任务弹窗
  outerIsCloseModal(event) {
    if (!event) {
      this.showCreatReportModal = false;
    }
  }
  // 子组件返回是否显示删除弹窗
  outerIsCloseDeleteModal(event) {
    if (!event) {
      this.showDeleteModal = false;
    }
  }
  // 报告复制
  copyReport() {
    this.modalHeaderName = '复制报告';
    this.isDisableTemplate = true;
    this.showCreatReportModal = true; // 显示复制报告弹窗
  }

  // 显示创建新报告弹窗
  showCreatReportDiv() {
    this.modalHeaderName = '创建新报告';
    this.isDisableTemplate = false;
    this.showCreatReportModal = true; // 显示创建新报告弹窗
  }

  // 报告列表表格全选
  checkReportTableAll(e) {
    if (e === true) {
      this.reportData.forEach(data => {
        data.checked = true;
      });
    } else {
      this.isAllReportDataChecked = false; // 报告列表全选去掉
      this.reportData.forEach(data => {
        data.checked = false;
      });
    }
  }

  // 每页显示条数改变
  pageSizeChange(value) {}
  // 每页跳转改变
  pageNumChange(value) {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-table',
  templateUrl: './templateTable.component.html',
  styleUrls: ['./templateTable.component.scss']
})
export class TemplateTableComponent implements OnInit {
  constructor() {}
  isAllTemplateDataChecked = false; // 报告列表全选
  templateData = [
    { startTime: '123', checked: false },
    { startTime: '233', checked: false }
  ]; // 模板管理列表数据
  pageNum = 1; // 页数
  pageSize = 10; // 每页显示条数
  total = 2; // 表格总数量
  showTemplateCopyModal = false; // 显示模板复制弹窗
  ngOnInit() {}
  // 子组件是否已关掉模板复制弹窗
  outerIsCloseTemplateCopyModal(event) {
    if (!event) {
      this.showTemplateCopyModal = false;
    }
  }
  // 是否显示模板复制弹窗
  showTemplateCopyDiv(data) {
    this.showTemplateCopyModal = true;
  }

  // 模板管理列表表格全选
  checkTemplateTableAll(e) {
    if (e === true) {
      this.templateData.forEach(data => {
        data.checked = true;
      });
    } else {
      this.isAllTemplateDataChecked = false; // 报告列表全选去掉
      this.templateData.forEach(data => {
        data.checked = false;
      });
    }
  }

  // 每页显示条数改变
  pageSizeChange(value) {}
  // 每页跳转改变
  pageNumChange(value) {}
}

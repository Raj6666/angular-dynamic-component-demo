import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-creat-new-report',
  templateUrl: './creatNewReport.component.html',
  styleUrls: ['./creatNewReport.component.scss']
})
export class CreatNewReportComponent implements OnInit, OnChanges {
  constructor() {}
  @Input() isShowReportDiv; // 父组件是否显示创建新报告弹窗
  @Input() headerName; // 弹窗的头部文字
  @Input() disableTemplate; // 弹窗的使用模板是否禁用
  @Output() outer = new EventEmitter<any>();
  isShowModal = false; // 是否显示弹窗
  reportName; // 报告名称
  usedTemplate = '模板1'; // 使用模板
  reportType = '自定义'; // 报告类型
  formUniformDate = '是'; // 表格统一数据日期
  unifiedStartDate; // 统一数据开始日期
  unifiedEndDate; // 统一数据结束日期
  // 表格数据
  templateTableData = [
    { tableName: '表格名称1', dataStartDate: '', dataEndDate: '' },
    { tableName: '表格名称2', dataStartDate: '', dataEndDate: '' }
  ];
  monthYearHeaderText = '周报时间提醒'; // 周报月报的头部文字
  // 周报月报的底部文字
  monthYearFooterText = {
    firstRow:
      '1、周报统计数据时间默认包含创建报告当周（举例：报告于2019-11-6，周三开始创建，则报告统计数据时间默认为2019-11-4至2019-11-10，并于下周一2019-11-11输出报告）。',
    secondRow:
      '2、周报如未被删除，将一直按照当前创建时间往后每周轮询输出报告，请注意。'
  };

  ngOnChanges() {
    if (this.isShowReportDiv) {
      this.isShowModal = true;
    }
  }
  // 改变报告类型
  changeReportType() {
    switch (this.reportType) {
      case '周报':
        this.monthYearHeaderText = '周报时间提醒'; // 周报头部文字
        // 周报底部文字
        this.monthYearFooterText = {
          firstRow:
            '1、周报统计数据时间默认包含创建报告当周（举例：报告于2019-11-6，周三开始创建，则报告统计数据时间默认为2019-11-4至2019-11-10，并于下周一2019-11-11输出报告）。',
          secondRow:
            '2、周报如未被删除，将一直按照当前创建时间往后每周轮询输出报告，请注意。'
        };
        break;
      case '月报':
        this.monthYearHeaderText = '月报时间提醒'; // 月报头部文字
        // 月报底部文字
        this.monthYearFooterText = {
          firstRow:
            '1、月报统计数据时间默认包含创建报告当月（举例：报告于2019-11-6，11月开始创建，则报告统计数据时间默认为2019-11-1至2019-11-30，并于下个月2019-12-1输出报告）。',
          secondRow:
            '2、月报如未被删除，将一直按照当前创建时间往后每月轮询输出报告，请注意。'
        };
        break;
    }
  }

  // 判断结束时间是否小于开始时间
  openStartOrEndDatePicker() {
    let endDateSelector = null;
    endDateSelector = document.getElementsByTagName('nz-date-picker')[1]
      .children[0].children[0];
    if (this.unifiedStartDate !== null && this.unifiedEndDate !== null) {
      if (this.unifiedStartDate > this.unifiedEndDate) {
        endDateSelector.style.border = '0.01rem solid red';
        endDateSelector.style.borderRadius = '0.05rem';
        alert('统一数据开始日期不能大于统一数据结束日期，请重新选择时间');
        return false;
      } else {
        endDateSelector.style.border = '';
        return true;
      }
    }
  }
  // 关闭弹窗
  closeModal() {
    this.isShowModal = false;
    this.outer.emit(false);
  }
  ngOnInit() {}
}

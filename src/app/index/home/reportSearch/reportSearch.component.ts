import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-search',
  templateUrl: './reportSearch.component.html',
  styleUrls: ['./reportSearch.component.scss']
})
export class ReportSearchComponent implements OnInit {
  constructor() {}
  endValue; // 结束时间
  startValue; // 开始时间
  reportName; // 报告名称
  reportDescription; // 报告描述
  reportType = '全部'; // 报告类型
  reportStatus = '全部'; // 报告状态
  ngOnInit() {}

  // 判断结束时间是否小于开始时间
  openStartOrEndDatePicker() {
    let endDateSelector = null;
    endDateSelector = document.getElementsByTagName('nz-date-picker')[1]
      .children[0].children[0];
    if (this.startValue !== null && this.endValue !== null) {
      if (this.startValue > this.endValue) {
        endDateSelector.style.border = '0.01rem solid red';
        endDateSelector.style.borderRadius = '0.05rem';
        alert('开始日期不能大于结束日期，请重新选择时间');
        return false;
      } else {
        endDateSelector.style.border = '';
        return true;
      }
    }
  }
}

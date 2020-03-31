import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-search',
  templateUrl: './templateSearch.component.html',
  styleUrls: ['./templateSearch.component.scss']
})
export class TemplateSeachComponent implements OnInit {
  constructor() {}
  endValue; // 结束时间
  startValue; // 开始时间
  templateName; // 模板名称
  templateDescription; // 模板描述
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

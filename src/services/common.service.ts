import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
declare let echarts: any;

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(
    private http: HttpService,
    private router: Router
  ) {}

  // 年月日小时分秒时间戳函数
  format(timestamp) {
    const time = new Date(timestamp);
    const y = time.getFullYear();
    const m = time.getMonth() + 1;
    const d = time.getDate();
    const h = time.getHours();
    const mm = time.getMinutes();
    const s = time.getSeconds();
    return (
      y +
      '-' +
      this.add0(m) +
      '-' +
      this.add0(d) +
      ' ' +
      this.add0(h) +
      ':' +
      this.add0(mm) +
      ':' +
      this.add0(s)
    );
  }
  // 年月日时间戳函数
  formatDate(timestamp) {
    const time = new Date(timestamp);
    const y = time.getFullYear();
    const m = time.getMonth() + 1;
    const d = time.getDate();
    return y + '-' + this.add0(m) + '-' + this.add0(d);
  }
  // 年月日时间戳函数
  formatAllTime(timestamp) {
    const time = new Date(timestamp);
    const y = time.getFullYear();
    const m = time.getMonth() + 1;
    const d = time.getDate();
    const h = time.getHours();
    const mm = time.getMinutes();
    const s = time.getSeconds();
    return y + '-' + this.add0(m) + '-' + this.add0(d) + ' ' + this.add0(h) + ':' + this.add0(mm) + ':' + this.add0(s);
  }
  // 年月日时间戳函数
  formatTime(timestamp) {
    const time = new Date(timestamp);
    const h = time.getHours();
    const mm = time.getMinutes();
    const s = time.getSeconds();
    return this.add0(h) + ':' + this.add0(mm) + ':' + this.add0(s);
  }
  // 小于0补齐0函数
  add0(m) {
    const num = String(m);
    if (num[0] !== '0' || (num[0] === '0' && num[1] === undefined)) {
      return m < 10 ? '0' + String(m) : String(m);
    } else {
      return m;
    }
  }
  // 判断指标是否存在函数
  isNull(num) {
    if (num === '' || num === null || num === undefined) {
      return true;
    } else {
      return false;
    }
  }
  // 保留两位小数
  fixedPoint2(num) {
    return Number(num).toFixed(2);
  }
  // 获取元素CSS属性
  getElementAttr(ele, attr) {
    const style = window.getComputedStyle ? window.getComputedStyle(ele, null) : null || ele['currentStyle'];
    return parseFloat(style[attr] || ele[attr]);
  }
}

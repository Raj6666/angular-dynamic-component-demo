import { Component, OnInit, Output, Input, EventEmitter, AfterViewInit, OnChanges } from '@angular/core';
//import { ACLService } from '@delon/acl';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';
import { filter } from 'rxjs/operators';
//import {environment} from './../../../../environments/environment';
//import {HttpService} from './../../../../services/http.service';


@Component({
  selector: 'app-custom-threshold',
  templateUrl: './custom-threshold.component.html',
  styleUrls: ['./custom-threshold.component.css']
})
export class CustomThresholdComponent implements OnInit {

  constructor(
    //private http: HttpService,
    //public aclService: ACLService,
    private msg: NzMessageService) { }
    selectedDataSource = 'KPI'; // 已选的数据源
    selectedIndicatorName = {}; // 已选的数据名称
    selectedSymbolValue = '<'; // 已选的比较符号
    thresholdValue: any = 99; // 阈值
    postEntity: any = {}; // 传过去的实体
    deleted = false; // 判断是否已删除
    indicatorsList = []; // 指标列表
    @Input('prop') prop: any; // 父组件传过来的值
    @Input('template') template: any; // 父组件传过来的值
    warningText = ''; // 阈值输入错误的预警文本
    // @Input('indicatorList') indicatorList: any; // 父组件传过来的指标列表

    compareFn = (o1: any, o2: any) => o1 && o2 ? o1.value === o2.value : o1 === o2;

    ngOnInit() {
      if (this.template !== undefined && this.template.length > 0) {
        this.indicatorsList = this.template;
      }
      if (this.prop !== undefined) {
        this.selectedIndicatorName = {label: this.prop.thresholdName, value: this.prop.thresholdParam};
        this.selectedSymbolValue = this.prop.thresholdOprator;
        this.thresholdValue = this.prop.thresholdValue;
      } else {
        this.selectedIndicatorName = this.indicatorsList[0];
      }
    }
    // 限制阈值的输入不能有特殊字符
    limitNumber () {
      // if (/[^\d.]/g.test(this.thresholdValue) || this.thresholdValue === '' || thresholdValue.indexOf('-') === -1) {
      //   this.warningText = '阈值输入有误，请重新输入';
      //   return false;
      // } else {
      //   this.warningText = '';
      //   return true;
      // }
      // 验证是否是数字
      // 第一个输入的不能为空格
      // 第一个输入的不能为空
      if (isNaN(this.thresholdValue) === true || this.thresholdValue === '' || new RegExp('[ ]+$').test(this.thresholdValue) === true) {
        this.warningText = '阈值输入有误，请重新输入';
        return false;
      } else {
        // 输入不包含小数点的数字时，长度大于1时第一位不能为0
        // 或者输入负数时，长度大于2时第二位不能为0
        // 输入的不能包含空格
        const setValuesArray = this.thresholdValue.split('');
        if (setValuesArray.indexOf(' ') !== -1 || (setValuesArray.indexOf('.') === -1 &&
          ((setValuesArray.length > 1 && setValuesArray.indexOf('0') === 0) ||
            (setValuesArray.length > 2 && setValuesArray[1] === '0' && setValuesArray.indexOf('-') === 0)))) {
          this.warningText = '阈值输入有误，请重新输入';
          return false;
        } else {
          this.warningText = '';
          return true;
        }
      }

    }

    // 返回值给父组件
    getData() {
      return {
        ruleModule: 'projectWithBusiness',
        groupName: '自定义阈值',
        groupParam: 'customThreshold',
        groupLogical: 'or',
        // thresholdName: this.selectedIndicatorName['label'],
        // thresholdParam: this.selectedIndicatorName['value'],
        thresholdFactor: '',
        thresholdLogical: '',
        thresholdValue: this.thresholdValue,
        thresholdSource: null,
        thresholdValueAdd: null,
        thresholdOprator: this.selectedSymbolValue
      };
    }
    // 删除
    deleteNewComponent(e) {
      // 循环遍历类名为newComponent的获取父类并删除
      if (e.path !== undefined) { // 谷歌浏览器
        e.path.forEach(element => {
          if (element.className === 'newComponent') {
            element.parentNode.removeChild(element);
            this.deleted = true;
          }
        });
      } else { // 火狐浏览器
        const element = e.explicitOriginalTarget['parentNode'].parentNode.parentNode.parentNode;
        if (element.className === 'newComponent') {
          element.parentNode.removeChild(element);
          this.deleted = true;
        }
      }
    }
}

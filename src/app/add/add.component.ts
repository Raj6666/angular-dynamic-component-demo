import { CustomThresholdComponent } from './custom-threshold/custom-threshold.component';
import {
  Component,
  OnInit,
  Renderer2,
  ViewChild,
  ViewContainerRef,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef
} from '@angular/core';
import { HttpService } from '../../services/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  constructor(
    private http: HttpService,
    public activeRoute: ActivatedRoute,
    private message: NzMessageService,
    private resolver: ComponentFactoryResolver
  ) {}
  componentRefList = [];
  hiddenLimitText = true; // 显示LTE工程有业务小区弹窗里的限制新增自定义阈值条数
  componentDataList = []; // 组件保存的数据
  indicatorsList = [];
  // 基础阈值的input值
  customThreshold = [
    {
      ruleModule: 'projectWithBusiness',
      groupName: '自定义阈值',
      groupParam: 'customThreshold',
      groupLogical: 'or',
      thresholdName: '11',
      thresholdParam: undefined,
      thresholdFactor: '',
      thresholdLogical: '',
      thresholdValue: '33',
      thresholdSource: null,
      thresholdValueAdd: null,
      thresholdOprator: '<'
    }
  ];
  returnData = []; // 子组件返回的值
  componentRef: ComponentRef<CustomThresholdComponent>; // 新增的组件
  @ViewChild('NewContainer', { read: ViewContainerRef })
  container: ViewContainerRef;

  ngOnInit() {
    this.getData();
  }

  // 保存所选的内容后子组件的返回值
  saveData() {
    this.returnData = [];
    this.componentRefList.forEach((component, index) => {
      if (component.instance.deleted !== true) {
        this.returnData.push(component.instance.getData());
      }
    });
  }

  // 更新父组件的子组件列表
  updatedComponentList() {
    this.componentRefList.forEach((component, index) => {
      if (component.instance.deleted === true) {
        this.componentRefList.splice(index, 1);
      }
    });
  }

  // 新增
  addNewComponent() {
    this.updatedComponentList(); // 更新父组件的子组件列表
    // this.warningText = '';
    const factory: ComponentFactory<CustomThresholdComponent> = this.resolver.resolveComponentFactory(
      CustomThresholdComponent
    );
    if (this.componentRefList.length < 12) {
      // 自定义阈值小于12条
      this.componentRef = this.container.createComponent(factory);
      this.componentRef.instance.template = this.indicatorsList;
      this.componentRefList.push(this.componentRef);
    } else {
      this.hiddenLimitText = false;
      // this.warningText = '自定义阈值不能超过12条，请重新选择';
    }
  }

  // 获取LTE工程有业务小区阈值配置自定义阈值列表
  getData() {
    // const addLoadingStyle = document.getElementsByClassName('addDiv');
    // addLoadingStyle[0].classList.add('ui-loading-lg');
    const factory: ComponentFactory<CustomThresholdComponent> = this.resolver.resolveComponentFactory(
      CustomThresholdComponent
    );
    const customThresholdArr = this.customThreshold;
    this.componentRefList = [];
    const dom = document.getElementsByTagName('app-custom-threshold');
    const domLen = document.getElementsByTagName('app-custom-threshold').length;
    if (customThresholdArr.length > 0) {
      // 获取指标列表
      customThresholdArr.forEach((value, index) => {
        // 往子组件里input添加值
        factory.inputs.push({
          propName: 'prop',
          templateName: 'template'
        });
        const createComponent = this.container.createComponent(factory);
        createComponent.instance.template = this.indicatorsList;
        createComponent.instance.prop = value;
        this.componentRef = createComponent;
        this.componentRefList.push(this.componentRef);
      });
    }
    // 删除子组件剩一个，在添加完之后再删掉第一个
    if (domLen !== 0 && customThresholdArr.length !== 0) {
      dom[0].parentNode.removeChild(dom[0]);
    } else if (domLen === 1 && customThresholdArr.length === 0) {
      dom[0].classList.add('hidden');
    }
    // setTimeout(() => {
    // addLoadingStyle[0].classList.remove('ui-loading-lg');
    // }, 500);
  }
}

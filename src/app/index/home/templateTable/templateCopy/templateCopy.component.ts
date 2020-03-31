import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-template-copy',
  templateUrl: './templateCopy.component.html',
  styleUrls: ['./templateCopy.component.scss']
})
export class TemplateCopyComponent implements OnInit, OnChanges {
  constructor() {}
  @Input() isShowTemplateCopyDiv; // 父组件是否显示创建新报告弹窗
  @Output() outer = new EventEmitter<any>();
  isShowModal = false; // 是否显示弹窗
  usedTemplate = '模板1'; // 使用模板
  templateName; // 新模板名称
  templateDescription; // 新模板描述

  ngOnChanges() {
    if (this.isShowTemplateCopyDiv) {
      this.isShowModal = true;
    }
  }
  // 关闭弹窗
  closeModal() {
    this.isShowModal = false;
    this.outer.emit(false);
  }
  ngOnInit() {}
}

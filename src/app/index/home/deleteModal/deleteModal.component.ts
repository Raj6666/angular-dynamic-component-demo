import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './deleteModal.component.html',
  styleUrls: ['./deleteModal.component.scss']
})
export class DeleteModalComponent implements OnInit {
  constructor() {}
  isShowModal = false; // 是否显示弹窗
  ngOnInit() {}

  // 关闭弹窗
  closeModal() {}
}

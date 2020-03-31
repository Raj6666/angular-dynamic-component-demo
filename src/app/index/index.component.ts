import { Component, OnInit, Renderer2 } from '@angular/core';
import { HttpService } from 'src/services/http.service';
import { CommonService } from 'src/services/common.service';

@Component({
  selector: 'app-index',
  styleUrls: ['./index.component.scss'],
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {
  constructor(
    private http: HttpService,
    private common: CommonService,
    private render: Renderer2
  ) {}
  title = 'gempile-modules-report-automation-fe';
  // 正中间主菜单
  childModule = '报告自动化'; // 子菜单

  // 改变VNFVMHost字体颜色样式
  changeChildModuleStyle(data) {
    this.childModule = data;
  }

  // 改变头部菜单样式
  changeHeadMenuStyle() {
    const automationStyle = document.getElementsByClassName(
      'report-automation'
    )[0];
    const submenu = document.getElementsByClassName('ant-menu-submenu')[0];
    if (automationStyle !== undefined) {
      this.render.setStyle(automationStyle, 'color', '#fff');
    }
    submenu.classList.add('ant-menu-submenu-selected');
  }
  // 设置默认头部惨淡样式
  // setDefaultMenuStyle() {
  //   const defaultStyle = document.getElementsByClassName('headMenu-div')[0];
  //   console.log(defaultStyle);
  //   defaultStyle.classList.add('ant-menu-submenu-selected');
  // }

  ngOnInit(): void {
    this.http.get('/test').subscribe((res: any) => {
      this.title = res.words;
    });
  }
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ErrorHandlerComponent } from './errorHandler/errorHandler.component';
// import { IndexComponent } from './index/index.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' }, // 根路径默认跳转至首页
  {
    path: 'index',
    loadChildren: './index/index.module#IndexModule'
  }, // 首页
  { path: 'error', component: ErrorHandlerComponent }, // error页面
  { path: 'add', component: AddComponent }, // 新增组件页面
  { path: '**', component: ErrorHandlerComponent } // 404找不到页面跳转error页面
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules // 预加载所有懒加载模块
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: IndexComponent,
    children: [
      {path: 'home', component: HomeComponent}, // 首页
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }

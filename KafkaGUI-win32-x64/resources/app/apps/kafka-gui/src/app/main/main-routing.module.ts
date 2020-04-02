/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： 主畫面路由Module
 * @CREATE Sunday, 8th March 2020 12:23:37 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { ManageComponent } from '../manage/manage.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'manage', pathMatch: 'full' },
      { path: 'manage', component: ManageComponent },
      { path: 'manage/:broker', component: ManageComponent }
    ]
  }
];

/**
 * 主畫面路由Module
 */
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MainRoutingModule { }

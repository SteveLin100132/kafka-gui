/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： 主畫面Module
 * @CREATE Sunday, 8th March 2020 12:17:39 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Ng2GuiModule } from '@kafka-gui/ng2-gui';

import { ManageModule } from '../manage/manage.module';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';

/**
 * 主畫面Module
 */
@NgModule({
  imports: [
    CommonModule,
    ManageModule,
    MainRoutingModule,
    Ng2GuiModule
  ],
  declarations: [
    MainComponent
  ]
})
export class MainModule { }

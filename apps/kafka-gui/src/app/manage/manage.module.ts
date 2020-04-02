/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： 管理頁面Module
 * @CREATE Sunday, 8th March 2020 8:15:07 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Ng2GuiModule } from '@kafka-gui/ng2-gui';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { BorkerInformationComponent } from './components/borker-information/borker-information.component';
import { ClusterInformationComponent } from './components/cluster-information/cluster-information.component';
import { DataCenterComponent } from './components/data-center/data-center.component';
import { ManageComponent } from './manage.component';
import { SharedModule } from '../shared/shared.module';
import { TopicInformationComponent } from './components/topic-information/topic-information.component';

/**
 * 管理頁面Module
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2GuiModule,
    NgScrollbarModule,
    SharedModule
  ],
  declarations: [
    BorkerInformationComponent,
    ClusterInformationComponent,
    DataCenterComponent,
    ManageComponent,
    TopicInformationComponent
  ],
  exports: [
    ManageComponent
  ]
})
export class ManageModule { }

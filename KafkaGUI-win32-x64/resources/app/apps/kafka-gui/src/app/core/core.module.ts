/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： 單例共享Module
 * @CREATE Sunday, 8th March 2020 12:05:29 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ElectronWindowService } from './services/electron-window.service';
import { FrameComponent } from './components/frame/frame.component';

/**
 * 單例共享Module
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FrameComponent
  ],
  exports: [
    FrameComponent
  ],
  providers: [
    ElectronWindowService,
  ]
})
export class CoreModule { }

/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： 共享Module
 * @CREATE Sunday, 8th March 2020 12:04:27 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ConnectHintComponent } from './components/connect-hint/connect-hint.component';
import { ContentAbbreviationPipe } from './pipes/content-abbreviation.pipe';

/**
 * 共享Module
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ConnectHintComponent,
    ContentAbbreviationPipe
  ],
  exports: [
    ConnectHintComponent,
    ContentAbbreviationPipe
  ]
})
export class SharedModule { }

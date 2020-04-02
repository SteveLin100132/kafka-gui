/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明：
 * @CREATE Sunday, 8th March 2020 12:01:11 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Logger } from '@steveylin/logger';

const logger = new Logger('AppRoutingModule');
const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then(m => {
      logger.log('Load main module complete');
      return m.MainModule;
    })
  }
];

/**
 * App Main Routing
 */
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： App Module
 * @CREATE Sunday, 8th March 2020 11:49:13 am
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { BrowserModule } from '@angular/platform-browser';
import { ConfigureModule, ConfigureLoader } from '@steveylin/ng2-configure';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ApiModule } from './core/services/api/api.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

/**
 * App Module
 */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ApiModule.forRoot({ rootUrl: 'http://localhost:3333' }),
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    ConfigureModule.forRoot({
      key: 'config',
      path: './../assets/configs/config.json'
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

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

import { Module } from '@nestjs/common';
import { NestjsConfigureModule } from '@kafka-gui/nestjs-configure';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { LocalDatabaseModule } from './local-database/local-database.module';

/**
 * App Module
 */
@Module({
  imports: [
    LocalDatabaseModule.forRoot(),
    NestjsConfigureModule.forRoot([
      { key: 'config', path: './apps/api/configs/config.json' },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}

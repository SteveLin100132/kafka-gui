/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： 本地端資料庫Module
 * @CREATE Wednesday, 18th March 2020 9:19:33 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { DynamicModule } from '@nestjs/common/interfaces';
import { Module } from '@nestjs/common';
import { NestjsConfigureModule, NestjsConfigureService } from '@kafka-gui/nestjs-configure';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Broker } from './broker/broker.entity';
import { BorkerModule } from './broker/borker.module';
import { BrokerSubscriber } from './broker/broker.subscriber';

/**
 * 本地端資料庫Module
 */
@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class LocalDatabaseModule {

  /**
   * 先行連線
   *
   * @method public
   * @return 回傳Module動態設定
   */
  public static forRoot(): DynamicModule {
    return {
      module: LocalDatabaseModule,
      imports: [
        BorkerModule,
        TypeOrmModule.forRootAsync({
          inject: [NestjsConfigureService],
          useFactory: (configure: NestjsConfigureService) => {
            return {
              type: 'sqlite',
              database: './database/kafka_gui.db',
              entities: [Broker],
              subscribers: [BrokerSubscriber],
            };
          },
        }),
      ],
    };
  }

}

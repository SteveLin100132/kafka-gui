/**
 * 專案名稱： kafka-gui
 * 部門代號： ML8100
 * 檔案說明： Kafka Broker Model Module
 * @CREATE Wednesday, 18th March 2020 9:47:44 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron.com #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Broker } from './broker.entity';
import { BorkerService } from './borker.service';
import { BrokerController } from './broker.controller';

/**
 * Kafka Broker Model Module
 */
@Module({
  imports: [
    TypeOrmModule.forFeature([Broker]),
  ],
  controllers: [
    BrokerController,
  ],
  providers: [
    BorkerService,
  ],
  exports: [
    TypeOrmModule,
  ]
})
export class BorkerModule {}
